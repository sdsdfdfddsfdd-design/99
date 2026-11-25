import { n as __toESM } from "./rolldown-runtime-CO0Nlsmt.js";
import { It as require_react } from "./icons-CSx0WKXF.js";
import { E as resolveApiUrl, g as detectMediaKind, v as isLikelyVapUrl, y as normalizeMediaUrl } from "./index-tXJX2Qqq.js";
import { t as require_jsx_runtime } from "./react-vendor-BIdqWr74.js";
// src/utils/apngEngine.ts
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var PNG_SIGNATURE = [
	137,
	80,
	78,
	71,
	13,
	10,
	26,
	10
];
var MAX_WARM_BLOB_BYTES = 26214400;
var apngCache = /* @__PURE__ */ new Map();
var inflightRequests = /* @__PURE__ */ new Map();
var preloadedStaticImages = /* @__PURE__ */ new Set();
var resolvedMediaKindCache = /* @__PURE__ */ new Map();
var warmMediaBlobCache = /* @__PURE__ */ new Map();
var stableWarmBlobUrls = /* @__PURE__ */ new Map();
var inflightWarmTasks = /* @__PURE__ */ new Map();
var warmVideoElements = /* @__PURE__ */ new Map();
function hasPngSignature(bytes) {
	if (bytes.length < 8) return false;
	for (let i = 0; i < 8; i++) if (bytes[i] !== PNG_SIGNATURE[i]) return false;
	return true;
}
function readChunkType(bytes, offset) {
	return String.fromCharCode(bytes[offset], bytes[offset + 1], bytes[offset + 2], bytes[offset + 3]);
}
/**
* Parses PNG binary buffer for APNG acTL & fcTL chunks to determine exact natural animation duration.
*/
function parseApngBuffer(buffer, mimeType = "image/png") {
	const bytes = new Uint8Array(buffer);
	if (!hasPngSignature(bytes)) return {
		isApng: false,
		numFrames: 1,
		numPlays: 0,
		cycleDurationMs: 0,
		totalDurationMs: 0
	};
	const view = new DataView(buffer);
	let offset = 8;
	let hasActl = false;
	let numFrames = 1;
	let numPlays = 0;
	let cycleDurationMs = 0;
	let fctlCount = 0;
	while (offset + 12 <= bytes.length) {
		const length = view.getUint32(offset, false);
		const chunkType = readChunkType(bytes, offset + 4);
		const dataOffset = offset + 8;
		if (dataOffset + length + 4 > bytes.length) break;
		if (chunkType === "acTL" && length >= 8) {
			hasActl = true;
			numFrames = Math.max(1, view.getUint32(dataOffset, false));
			numPlays = view.getUint32(dataOffset + 4, false);
		} else if (chunkType === "fcTL" && length >= 26) {
			fctlCount += 1;
			const delayNum = view.getUint16(dataOffset + 20, false);
			const delayDen = view.getUint16(dataOffset + 22, false);
			const frameMs = delayNum === 0 ? 33 : delayNum / (delayDen === 0 ? 100 : delayDen) * 1e3;
			cycleDurationMs += frameMs;
		} else if (chunkType === "IEND") break;
		offset = dataOffset + length + 4;
	}
	if (!(hasActl && (fctlCount > 0 || numFrames > 1))) return {
		isApng: false,
		numFrames: 1,
		numPlays: 0,
		cycleDurationMs: 0,
		totalDurationMs: 0
	};
	const safeCycleMs = Math.max(500, Math.round(cycleDurationMs));
	const totalDurationMs = numPlays > 1 ? Math.min(6e4, Math.round(safeCycleMs * numPlays)) : safeCycleMs;
	return {
		isApng: true,
		numFrames: Math.max(numFrames, fctlCount),
		numPlays,
		cycleDurationMs: safeCycleMs,
		totalDurationMs,
		blob: new Blob([buffer], { type: mimeType || "image/png" })
	};
}
function decodeDataUriToBuffer(dataUri) {
	try {
		const commaIdx = dataUri.indexOf(",");
		if (commaIdx < 0) return null;
		const header = dataUri.slice(5, commaIdx);
		const payload = dataUri.slice(commaIdx + 1);
		const mime = header.split(";")[0] || "image/png";
		if (header.includes(";base64")) {
			const binStr = atob(payload);
			const arr = new Uint8Array(binStr.length);
			for (let i = 0; i < binStr.length; i++) arr[i] = binStr.charCodeAt(i);
			return {
				buffer: arr.buffer,
				mime
			};
		}
		const decoded = decodeURIComponent(payload);
		const arr = new Uint8Array(decoded.length);
		for (let i = 0; i < decoded.length; i++) arr[i] = decoded.charCodeAt(i);
		return {
			buffer: arr.buffer,
			mime
		};
	} catch {
		return null;
	}
}
function getCachedApngInfo(url) {
	const clean = normalizeMediaUrl(url);
	if (!clean) return null;
	return apngCache.get(clean) ?? null;
}
function createFreshApngBlobUrl(url) {
	const info = getCachedApngInfo(url);
	if (info?.isApng && info.blob && typeof URL !== "undefined") return URL.createObjectURL(info.blob);
	return null;
}
function getCachedResolvedMediaKind(url) {
	const clean = normalizeMediaUrl(url);
	if (!clean) return null;
	return resolvedMediaKindCache.get(clean) ?? null;
}
function createFreshMediaBlobUrl(url) {
	const clean = normalizeMediaUrl(url);
	if (!clean || typeof URL === "undefined") return null;
	const apngBlob = createFreshApngBlobUrl(clean);
	if (apngBlob) return {
		blobUrl: apngBlob,
		kind: "image"
	};
	const warm = warmMediaBlobCache.get(clean);
	if (warm?.blob) return {
		blobUrl: URL.createObjectURL(warm.blob),
		kind: warm.kind
	};
	return null;
}
function getWarmMediaUrl(url) {
	const clean = normalizeMediaUrl(url);
	if (!clean || typeof URL === "undefined") return null;
	const apngInfo = getCachedApngInfo(clean);
	if (apngInfo?.isApng && apngInfo.blob) return {
		url: URL.createObjectURL(apngInfo.blob),
		kind: "image",
		isEphemeralBlob: true
	};
	const existingStable = stableWarmBlobUrls.get(clean);
	if (existingStable) return {
		url: existingStable.blobUrl,
		kind: existingStable.kind,
		isEphemeralBlob: false
	};
	const warm = warmMediaBlobCache.get(clean);
	if (warm?.blob) {
		const blobUrl = URL.createObjectURL(warm.blob);
		const entry = {
			blobUrl,
			kind: warm.kind
		};
		stableWarmBlobUrls.set(clean, entry);
		return {
			url: blobUrl,
			kind: warm.kind,
			isEphemeralBlob: false
		};
	}
	return null;
}
function cacheWarmVideoElement(url) {
	if (typeof document === "undefined" || warmVideoElements.has(url)) return;
	try {
		const vid = document.createElement("video");
		vid.preload = "auto";
		vid.muted = true;
		vid.playsInline = true;
		vid.src = url;
		vid.load();
		warmVideoElements.set(url, vid);
	} catch {}
}
function cacheWarmImageElement(url) {
	if (typeof Image === "undefined") return Promise.resolve(false);
	return new Promise((resolve) => {
		const img = new Image();
		img.referrerPolicy = "no-referrer";
		img.onload = () => {
			preloadedStaticImages.add(url);
			if (typeof img.decode === "function") img.decode().catch(() => {}).finally(() => resolve(true));
			else resolve(true);
		};
		img.onerror = () => resolve(false);
		img.src = url;
	});
}
function detectBufferKind(buffer, contentType) {
	const ct = contentType.toLowerCase();
	if (ct.startsWith("video/")) return "video";
	if (ct.startsWith("image/")) return "image";
	const bytes = new Uint8Array(buffer.slice(0, 16));
	if (bytes.length >= 4) {
		if (hasPngSignature(bytes)) return "image";
		if (bytes[0] === 71 && bytes[1] === 73 && bytes[2] === 70) return "image";
		if (bytes[0] === 82 && bytes[1] === 73 && bytes[2] === 70 && bytes[3] === 70 && bytes.length >= 12 && bytes[8] === 87 && bytes[9] === 69 && bytes[10] === 66 && bytes[11] === 80) return "image";
		if (bytes[0] === 255 && bytes[1] === 216 && bytes[2] === 255) return "image";
		if (bytes[0] === 26 && bytes[1] === 69 && bytes[2] === 223 && bytes[3] === 163) return "video";
		if (bytes.length >= 8 && bytes[4] === 102 && bytes[5] === 116 && bytes[6] === 121 && bytes[7] === 112) return "video";
	}
	return null;
}
/**
* Resolves exact media kind (even for extensionless CDN URLs) and warms the Blob in RAM
* so throwing gifts / entrances of ANY format (MP4, WebM, APNG, GIF, WebP, PNG) starts at 0ms.
*/
async function probeAndWarmMediaUrl(url) {
	const clean = normalizeMediaUrl(url);
	if (!clean) return null;
	if (warmMediaBlobCache.has(clean)) return warmMediaBlobCache.get(clean).kind;
	const inflight = inflightWarmTasks.get(clean);
	if (inflight) return inflight;
	const detected = detectMediaKind(clean);
	const task = (async () => {
		try {
			if (clean.startsWith("data:")) {
				const kind = detected === "video" ? "video" : "image";
				resolvedMediaKindCache.set(clean, kind);
				return kind;
			}
			try {
				const resp = await fetch(clean, {
					mode: "cors",
					credentials: "omit"
				});
				if (resp.ok) {
					const contentType = resp.headers.get("content-type") || "";
					if (Number(resp.headers.get("content-length") || "0") > MAX_WARM_BLOB_BYTES) {
						const largeKind = contentType.toLowerCase().startsWith("image/") ? "image" : contentType.toLowerCase().startsWith("video/") || detected === "video" ? "video" : "image";
						resolvedMediaKindCache.set(clean, largeKind);
						if (largeKind === "video") cacheWarmVideoElement(clean);
						else cacheWarmImageElement(clean);
						return largeKind;
					}
					const buffer = await resp.arrayBuffer();
					const finalKind = detectBufferKind(buffer, contentType) || (detected === "video" ? "video" : "image");
					resolvedMediaKindCache.set(clean, finalKind);
					if (buffer.byteLength <= MAX_WARM_BLOB_BYTES) {
						const mime = contentType || (finalKind === "video" ? "video/mp4" : "image/png");
						const blob = new Blob([buffer], { type: mime });
						warmMediaBlobCache.set(clean, {
							blob,
							kind: finalKind
						});
						if (finalKind === "image") {
							const apngInfo = parseApngBuffer(buffer, mime);
							apngCache.set(clean, apngInfo);
							if (!apngInfo.isApng && typeof URL !== "undefined") {
								const stableUrl = URL.createObjectURL(blob);
								stableWarmBlobUrls.set(clean, {
									blobUrl: stableUrl,
									kind: "image"
								});
								cacheWarmImageElement(stableUrl);
							}
						} else if (typeof URL !== "undefined") {
							const stableUrl = URL.createObjectURL(blob);
							stableWarmBlobUrls.set(clean, {
								blobUrl: stableUrl,
								kind: "video"
							});
							cacheWarmVideoElement(stableUrl);
						}
					}
					return finalKind;
				}
			} catch {}
			if (detected === "video") {
				resolvedMediaKindCache.set(clean, "video");
				cacheWarmVideoElement(clean);
				return "video";
			}
			if (detected === "image" || detected === "animated_image") {
				resolvedMediaKindCache.set(clean, "image");
				await cacheWarmImageElement(clean);
				return "image";
			}
			if (await cacheWarmImageElement(clean)) {
				resolvedMediaKindCache.set(clean, "image");
				return "image";
			}
			resolvedMediaKindCache.set(clean, "video");
			cacheWarmVideoElement(clean);
			return "video";
		} finally {
			inflightWarmTasks.delete(clean);
		}
	})();
	inflightWarmTasks.set(clean, task);
	return task;
}
/**
* Inspects a URL (or data URI) to detect APNG chunks & cache its Blob + exact duration.
* Gracefully returns null if URL is video or remote host blocks CORS fetch.
*/
async function inspectApngUrl(url) {
	const clean = normalizeMediaUrl(url);
	if (!clean) return null;
	if (apngCache.has(clean)) return apngCache.get(clean) ?? null;
	const inflight = inflightRequests.get(clean);
	if (inflight) return inflight;
	if (detectMediaKind(clean) === "video") {
		apngCache.set(clean, null);
		return null;
	}
	const pathLower = clean.toLowerCase().split("#")[0].split("?")[0];
	if (pathLower.endsWith(".gif") || pathLower.endsWith(".webp") || pathLower.endsWith(".jpg") || pathLower.endsWith(".jpeg") || pathLower.endsWith(".svg")) {
		apngCache.set(clean, null);
		return null;
	}
	const task = (async () => {
		try {
			if (clean.startsWith("data:image/")) {
				const decoded = decodeDataUriToBuffer(clean);
				if (!decoded) {
					apngCache.set(clean, null);
					return null;
				}
				const info = parseApngBuffer(decoded.buffer, decoded.mime);
				apngCache.set(clean, info);
				return info;
			}
			const resp = await fetch(clean, {
				mode: "cors",
				credentials: "omit"
			});
			if (!resp.ok) {
				apngCache.set(clean, null);
				return null;
			}
			const contentType = resp.headers.get("content-type") || "image/png";
			const buffer = await resp.arrayBuffer();
			const magicKind = detectBufferKind(buffer, contentType);
			if (magicKind) resolvedMediaKindCache.set(clean, magicKind);
			if (buffer.byteLength <= MAX_WARM_BLOB_BYTES && magicKind) warmMediaBlobCache.set(clean, {
				blob: new Blob([buffer], { type: contentType }),
				kind: magicKind
			});
			const info = parseApngBuffer(buffer, contentType);
			apngCache.set(clean, info);
			return info;
		} catch {
			apngCache.set(clean, null);
			return null;
		} finally {
			inflightRequests.delete(clean);
		}
	})();
	inflightRequests.set(clean, task);
	return task;
}
/**
* Warm-loads gift & entrance media assets (MP4, WebM, APNG, GIF, WebP, PNG, and extensionless URLs)
* in the background so throwing gifts starts at 0ms.
*/
function preloadMediaAssets(urls) {
	if (typeof window === "undefined") return;
	Array.from(new Set(urls.map((u) => normalizeMediaUrl(u)).filter(Boolean))).forEach((url) => {
		const kind = detectMediaKind(url);
		if (kind === "image" || kind === "animated_image") {
			if (!preloadedStaticImages.has(url)) {
				preloadedStaticImages.add(url);
				cacheWarmImageElement(url);
			}
		}
		probeAndWarmMediaUrl(url);
	});
}
// src/utils/vapEngine.ts
var vapCache = /* @__PURE__ */ new Map();
var vapInFlight = /* @__PURE__ */ new Map();
function getMediaProxyUrl(rawUrl) {
	const clean = rawUrl.trim();
	if (!clean) return "";
	if (clean.startsWith("/") || clean.startsWith("blob:") || clean.startsWith("data:")) return clean;
	if (typeof window !== "undefined" && clean.startsWith(window.location.origin)) return clean;
	return resolveApiUrl(`/api/media-proxy?url=${encodeURIComponent(clean)}`);
}
function getCachedVapConfig(url) {
	if (!url) return void 0;
	return vapCache.get(url.trim());
}
/**
* Scans an MP4 byte buffer for the Tencent VAP `vapc` ISO-BMFF box and parses its JSON payload.
* Format: [4-byte big-endian size]['v','a','p','c'][UTF-8 JSON]
*/
function parseVapcBoxFromBuffer(bytes) {
	if (!bytes || bytes.length < 16) return null;
	for (let i = 4; i < bytes.length - 8; i++) if (bytes[i] === 118 && bytes[i + 1] === 97 && bytes[i + 2] === 112 && bytes[i + 3] === 99) {
		const boxSize = (bytes[i - 4] << 24 >>> 0) + (bytes[i - 3] << 16 >>> 0) + (bytes[i - 2] << 8 >>> 0) + (bytes[i - 1] >>> 0);
		const jsonStart = i + 4;
		const jsonEnd = boxSize >= 12 && jsonStart + (boxSize - 8) <= bytes.length ? jsonStart + (boxSize - 8) : Math.min(bytes.length, jsonStart + 65536);
		try {
			const slice = bytes.subarray(jsonStart, jsonEnd);
			const rawText = new TextDecoder("utf-8", { fatal: false }).decode(slice);
			const firstBrace = rawText.indexOf("{");
			const lastBrace = rawText.lastIndexOf("}");
			if (firstBrace === -1 || lastBrace <= firstBrace) continue;
			const info = JSON.parse(rawText.slice(firstBrace, lastBrace + 1))?.info;
			if (info && typeof info.w === "number" && typeof info.h === "number" && typeof info.videoW === "number" && typeof info.videoH === "number" && Array.isArray(info.aFrame) && info.aFrame.length === 4 && Array.isArray(info.rgbFrame) && info.rgbFrame.length === 4 && info.videoW > 0 && info.videoH > 0) return {
				mode: "vap_box",
				width: info.w,
				height: info.h,
				videoWidth: info.videoW,
				videoHeight: info.videoH,
				rgbFrame: {
					x: info.rgbFrame[0],
					y: info.rgbFrame[1],
					w: info.rgbFrame[2],
					h: info.rgbFrame[3]
				},
				alphaFrame: {
					x: info.aFrame[0],
					y: info.aFrame[1],
					w: info.aFrame[2],
					h: info.aFrame[3]
				},
				fps: info.fps,
				source: "vapc_box"
			};
		} catch {}
	}
	return null;
}
async function fetchRangeBytes(url, rangeHeader) {
	try {
		const controller = new AbortController();
		const timer = window.setTimeout(() => controller.abort(), 5e3);
		const res = await fetch(url, {
			headers: rangeHeader ? { Range: rangeHeader } : void 0,
			signal: controller.signal
		});
		window.clearTimeout(timer);
		if (!res.ok && res.status !== 206) return null;
		const ab = await res.arrayBuffer();
		return new Uint8Array(ab);
	} catch {
		return null;
	}
}
/**
* Inspects an MP4/VAP URL for a `vapc` box (checks head & tail ranges, using proxy fallback on CORS).
*/
async function inspectVapUrl(rawUrl) {
	const url = rawUrl.trim();
	if (!url) return null;
	if (vapCache.has(url)) return vapCache.get(url) ?? null;
	const existing = vapInFlight.get(url);
	if (existing) return existing;
	const task = (async () => {
		const candidates = [url];
		const proxied = getMediaProxyUrl(url);
		if (proxied && proxied !== url) candidates.push(proxied);
		for (const targetUrl of candidates) {
			const headBytes = await fetchRangeBytes(targetUrl, "bytes=0-131071");
			if (headBytes) {
				const foundHead = parseVapcBoxFromBuffer(headBytes);
				if (foundHead) {
					vapCache.set(url, foundHead);
					return foundHead;
				}
				const tailBytes = await fetchRangeBytes(targetUrl, "bytes=-131072");
				if (tailBytes) {
					const foundTail = parseVapcBoxFromBuffer(tailBytes);
					if (foundTail) {
						vapCache.set(url, foundTail);
						return foundTail;
					}
				}
				vapCache.set(url, null);
				return null;
			}
		}
		vapCache.set(url, null);
		return null;
	})();
	vapInFlight.set(url, task);
	try {
		return await task;
	} finally {
		vapInFlight.delete(url);
	}
}
/**
* Analyzes a live decoded video frame on a small offscreen canvas to automatically detect:
* - Split-alpha VAP MP4 (Left/Right or Top/Bottom where one half is grayscale alpha mask & other is RGB)
* - White background ("البرومة البيضاء") MP4 needing smooth white chroma removal
* - Black background MP4 needing smooth luma-alpha removal
*/
function detectVideoLayoutFromFrame(video, urlHintIsVap = false) {
	const vw = video.videoWidth;
	const vh = video.videoHeight;
	if (!vw || !vh || video.readyState < 2) return null;
	const sampleW = 160;
	const sampleH = 90;
	const canvas = document.createElement("canvas");
	canvas.width = sampleW;
	canvas.height = sampleH;
	const ctx = canvas.getContext("2d", { willReadFrequently: true });
	if (!ctx) return null;
	try {
		ctx.drawImage(video, 0, 0, sampleW, sampleH);
		const img = ctx.getImageData(0, 0, sampleW, sampleH).data;
		const measureRegion = (x0, y0, x1, y1) => {
			let total = 0;
			let grayscale = 0;
			let vivid = 0;
			let white = 0;
			let black = 0;
			let mid = 0;
			for (let y = y0; y < y1; y += 2) for (let x = x0; x < x1; x += 2) {
				const idx = (y * sampleW + x) * 4;
				const r = img[idx];
				const g = img[idx + 1];
				const b = img[idx + 2];
				const chroma = Math.max(r, g, b) - Math.min(r, g, b);
				const luma = .299 * r + .587 * g + .114 * b;
				total++;
				if (chroma <= 10) grayscale++;
				if (chroma >= 26) vivid++;
				if (luma >= 232 && chroma <= 16) white++;
				if (luma <= 18) black++;
				if (luma > 35 && luma < 220) mid++;
			}
			return {
				total: total || 1,
				grayscaleRatio: grayscale / (total || 1),
				vividColorRatio: vivid / (total || 1),
				brightWhiteRatio: white / (total || 1),
				nearBlackRatio: black / (total || 1),
				midGrayRatio: mid / (total || 1)
			};
		};
		const halfW = Math.floor(sampleW / 2);
		const halfH = Math.floor(sampleH / 2);
		const left = measureRegion(0, 0, halfW, sampleH);
		const right = measureRegion(halfW, 0, sampleW, sampleH);
		const leftLooksAlpha = left.grayscaleRatio >= .9 && right.vividColorRatio >= .015 && right.grayscaleRatio < left.grayscaleRatio - .03;
		const rightLooksAlpha = right.grayscaleRatio >= .9 && left.vividColorRatio >= .015 && left.grayscaleRatio < right.grayscaleRatio - .03;
		if (leftLooksAlpha) return {
			mode: "vap_rl",
			width: Math.floor(vw / 2),
			height: vh,
			videoWidth: vw,
			videoHeight: vh,
			alphaFrame: {
				x: 0,
				y: 0,
				w: Math.floor(vw / 2),
				h: vh
			},
			rgbFrame: {
				x: Math.floor(vw / 2),
				y: 0,
				w: Math.floor(vw / 2),
				h: vh
			},
			source: "pixel_heuristic"
		};
		if (rightLooksAlpha) return {
			mode: "vap_lr",
			width: Math.floor(vw / 2),
			height: vh,
			videoWidth: vw,
			videoHeight: vh,
			rgbFrame: {
				x: 0,
				y: 0,
				w: Math.floor(vw / 2),
				h: vh
			},
			alphaFrame: {
				x: Math.floor(vw / 2),
				y: 0,
				w: Math.floor(vw / 2),
				h: vh
			},
			source: "pixel_heuristic"
		};
		const top = measureRegion(0, 0, sampleW, halfH);
		const bottom = measureRegion(0, halfH, sampleW, sampleH);
		const topLooksAlpha = top.grayscaleRatio >= .9 && bottom.vividColorRatio >= .015 && bottom.grayscaleRatio < top.grayscaleRatio - .03;
		const bottomLooksAlpha = bottom.grayscaleRatio >= .9 && top.vividColorRatio >= .015 && top.grayscaleRatio < bottom.grayscaleRatio - .03;
		if (topLooksAlpha) return {
			mode: "vap_bt",
			width: vw,
			height: Math.floor(vh / 2),
			videoWidth: vw,
			videoHeight: vh,
			alphaFrame: {
				x: 0,
				y: 0,
				w: vw,
				h: Math.floor(vh / 2)
			},
			rgbFrame: {
				x: 0,
				y: Math.floor(vh / 2),
				w: vw,
				h: Math.floor(vh / 2)
			},
			source: "pixel_heuristic"
		};
		if (bottomLooksAlpha) return {
			mode: "vap_tb",
			width: vw,
			height: Math.floor(vh / 2),
			videoWidth: vw,
			videoHeight: vh,
			rgbFrame: {
				x: 0,
				y: 0,
				w: vw,
				h: Math.floor(vh / 2)
			},
			alphaFrame: {
				x: 0,
				y: Math.floor(vh / 2),
				w: vw,
				h: Math.floor(vh / 2)
			},
			source: "pixel_heuristic"
		};
		if (urlHintIsVap && vw / vh >= 1.4) {
			const pickRightAlpha = right.grayscaleRatio >= left.grayscaleRatio;
			return {
				mode: pickRightAlpha ? "vap_lr" : "vap_rl",
				width: Math.floor(vw / 2),
				height: vh,
				videoWidth: vw,
				videoHeight: vh,
				rgbFrame: pickRightAlpha ? {
					x: 0,
					y: 0,
					w: Math.floor(vw / 2),
					h: vh
				} : {
					x: Math.floor(vw / 2),
					y: 0,
					w: Math.floor(vw / 2),
					h: vh
				},
				alphaFrame: pickRightAlpha ? {
					x: Math.floor(vw / 2),
					y: 0,
					w: Math.floor(vw / 2),
					h: vh
				} : {
					x: 0,
					y: 0,
					w: Math.floor(vw / 2),
					h: vh
				},
				source: "url_hint"
			};
		}
		const borderCoords = [];
		for (let x = 2; x < 158; x += 5) borderCoords.push([x, 2], [x, 87]);
		for (let y = 2; y < 88; y += 5) borderCoords.push([2, y], [157, y]);
		let whiteBorder = 0;
		let blackBorder = 0;
		for (const [bx, by] of borderCoords) {
			const idx = (by * sampleW + bx) * 4;
			const r = img[idx];
			const g = img[idx + 1];
			const b = img[idx + 2];
			const chroma = Math.max(r, g, b) - Math.min(r, g, b);
			const luma = .299 * r + .587 * g + .114 * b;
			if (luma >= 210 && chroma <= 28) whiteBorder++;
			if (luma <= 26 && chroma <= 22) blackBorder++;
		}
		const totalBorder = borderCoords.length || 1;
		if (whiteBorder / totalBorder >= .48) return {
			mode: "chroma_white",
			width: vw,
			height: vh,
			videoWidth: vw,
			videoHeight: vh,
			rgbFrame: {
				x: 0,
				y: 0,
				w: vw,
				h: vh
			},
			alphaFrame: {
				x: 0,
				y: 0,
				w: vw,
				h: vh
			},
			source: "pixel_heuristic"
		};
		if (blackBorder / totalBorder >= .55) return {
			mode: "chroma_black",
			width: vw,
			height: vh,
			videoWidth: vw,
			videoHeight: vh,
			rgbFrame: {
				x: 0,
				y: 0,
				w: vw,
				h: vh
			},
			alphaFrame: {
				x: 0,
				y: 0,
				w: vw,
				h: vh
			},
			source: "pixel_heuristic"
		};
		return null;
	} catch {
		return null;
	}
}
var VERTEX_SHADER = `
  attribute vec2 a_pos;
  attribute vec2 a_uv;
  varying vec2 v_uv;
  void main() {
    v_uv = a_uv;
    gl_Position = vec4(a_pos, 0.0, 1.0);
  }
`;
var FRAGMENT_SHADER = `
  precision mediump float;
  uniform sampler2D u_tex;
  uniform int u_mode;         // 1 = VAP Dual-Channel, 2 = White Chroma Key, 3 = Black Chroma Key, 0 = Passthrough
  uniform vec4 u_rgbRect;     // normalized (x, y, w, h)
  uniform vec4 u_alphaRect;   // normalized (x, y, w, h)
  varying vec2 v_uv;

  void main() {
    if (u_mode == 1) {
      // Exact Tencent VAP Dual-Channel Alpha Composite
      vec2 rgbUv = u_rgbRect.xy + v_uv * u_rgbRect.zw;
      vec2 alphaUv = u_alphaRect.xy + v_uv * u_alphaRect.zw;
      vec3 color = texture2D(u_tex, rgbUv).rgb;
      vec3 maskRgb = texture2D(u_tex, alphaUv).rgb;
      float alpha = dot(maskRgb, vec3(0.299, 0.587, 0.114));
      // Clean threshold to eliminate MP4 compression mosquito noise around alpha edges
      alpha = smoothstep(0.04, 0.95, alpha);
      if (alpha < 0.015) discard;
      gl_FragColor = vec4(color * alpha, alpha);
      return;
    }

    vec4 src = texture2D(u_tex, v_uv);

    if (u_mode == 2) {
      // Crisp White-Screen ("البرومة البيضاء") Removal with Anti-Halo Edge Decontamination
      vec3 c = src.rgb;
      float maxC = max(c.r, max(c.g, c.b));
      float minC = min(c.r, min(c.g, c.b));
      float sat = maxC - minC;
      float distToWhite = length(vec3(1.0) - c);
      // Key out near-white / light-gray background while preserving vivid colors & dark lines
      float whiteMask = smoothstep(0.09, 0.34, distToWhite + sat * 1.15);
      float alpha = clamp(whiteMask, 0.0, 1.0);
      if (alpha < 0.02) discard;
      // Remove residual white matte fringe on semi-transparent edges
      vec3 unmatted = clamp((c - vec3(1.0 - alpha)) / max(alpha, 0.25), 0.0, 1.0);
      vec3 cleanColor = mix(unmatted, c, smoothstep(0.35, 0.9, alpha));
      gl_FragColor = vec4(cleanColor * alpha, alpha);
      return;
    }

    if (u_mode == 3) {
      // Smooth Black-Screen Luma-Alpha Removal
      vec3 c = src.rgb;
      float peak = max(c.r, max(c.g, c.b));
      float alpha = smoothstep(0.03, 0.22, peak);
      if (alpha < 0.015) discard;
      gl_FragColor = vec4(c * alpha, alpha);
      return;
    }

    gl_FragColor = src;
  }
`;
var VapWebGLRenderer = class {
	constructor(canvas) {
		this.gl = null;
		this.program = null;
		this.texture = null;
		this.uModeLoc = null;
		this.uRgbRectLoc = null;
		this.uAlphaRectLoc = null;
		this.destroyed = false;
		this.canvas = canvas;
		this.initWebGL();
	}
	isWebGLReady() {
		return Boolean(this.gl && this.program && this.texture);
	}
	compileShader(gl, type, src) {
		const sh = gl.createShader(type);
		if (!sh) return null;
		gl.shaderSource(sh, src);
		gl.compileShader(sh);
		if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS)) {
			gl.deleteShader(sh);
			return null;
		}
		return sh;
	}
	initWebGL() {
		const gl = this.canvas.getContext("webgl", {
			alpha: true,
			premultipliedAlpha: true,
			antialias: true,
			preserveDrawingBuffer: false,
			powerPreference: "high-performance"
		});
		if (!gl) return;
		const vs = this.compileShader(gl, gl.VERTEX_SHADER, VERTEX_SHADER);
		const fs = this.compileShader(gl, gl.FRAGMENT_SHADER, FRAGMENT_SHADER);
		if (!vs || !fs) return;
		const prog = gl.createProgram();
		if (!prog) return;
		gl.attachShader(prog, vs);
		gl.attachShader(prog, fs);
		gl.linkProgram(prog);
		if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
			gl.deleteProgram(prog);
			return;
		}
		gl.useProgram(prog);
		const verts = new Float32Array([
			-1,
			-1,
			0,
			1,
			1,
			-1,
			1,
			1,
			-1,
			1,
			0,
			0,
			1,
			1,
			1,
			0
		]);
		const buf = gl.createBuffer();
		gl.bindBuffer(gl.ARRAY_BUFFER, buf);
		gl.bufferData(gl.ARRAY_BUFFER, verts, gl.STATIC_DRAW);
		const aPos = gl.getAttribLocation(prog, "a_pos");
		const aUv = gl.getAttribLocation(prog, "a_uv");
		gl.enableVertexAttribArray(aPos);
		gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 16, 0);
		gl.enableVertexAttribArray(aUv);
		gl.vertexAttribPointer(aUv, 2, gl.FLOAT, false, 16, 8);
		const tex = gl.createTexture();
		gl.bindTexture(gl.TEXTURE_2D, tex);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
		gl.enable(gl.BLEND);
		gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
		gl.clearColor(0, 0, 0, 0);
		this.gl = gl;
		this.program = prog;
		this.texture = tex;
		this.uModeLoc = gl.getUniformLocation(prog, "u_mode");
		this.uRgbRectLoc = gl.getUniformLocation(prog, "u_rgbRect");
		this.uAlphaRectLoc = gl.getUniformLocation(prog, "u_alphaRect");
	}
	renderFrame(video, config) {
		if (this.destroyed || !this.gl || !this.program || !this.texture) return false;
		if (video.readyState < 2 || !video.videoWidth || !video.videoHeight) return false;
		const gl = this.gl;
		const targetW = Math.max(2, Math.min(1280, Math.round(config.width || video.videoWidth)));
		const targetH = Math.max(2, Math.min(1600, Math.round(config.height || video.videoHeight)));
		if (this.canvas.width !== targetW || this.canvas.height !== targetH) {
			this.canvas.width = targetW;
			this.canvas.height = targetH;
			gl.viewport(0, 0, targetW, targetH);
		}
		try {
			gl.bindTexture(gl.TEXTURE_2D, this.texture);
			gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, video);
		} catch {
			return false;
		}
		const vw = config.videoWidth || video.videoWidth;
		const vh = config.videoHeight || video.videoHeight;
		let shaderMode = 0;
		if (config.mode === "vap_box" || config.mode === "vap_lr" || config.mode === "vap_rl" || config.mode === "vap_tb" || config.mode === "vap_bt") shaderMode = 1;
		else if (config.mode === "chroma_white") shaderMode = 2;
		else if (config.mode === "chroma_black") shaderMode = 3;
		gl.useProgram(this.program);
		gl.uniform1i(this.uModeLoc, shaderMode);
		gl.uniform4f(this.uRgbRectLoc, config.rgbFrame.x / vw, config.rgbFrame.y / vh, config.rgbFrame.w / vw, config.rgbFrame.h / vh);
		gl.uniform4f(this.uAlphaRectLoc, config.alphaFrame.x / vw, config.alphaFrame.y / vh, config.alphaFrame.w / vw, config.alphaFrame.h / vh);
		gl.clear(gl.COLOR_BUFFER_BIT);
		gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
		return true;
	}
	destroy() {
		this.destroyed = true;
		if (this.gl) {
			if (this.texture) this.gl.deleteTexture(this.texture);
			if (this.program) this.gl.deleteProgram(this.program);
			this.gl = null;
			this.program = null;
			this.texture = null;
		}
	}
};
// src/components/SmartMediaView.tsx
var import_jsx_runtime = require_jsx_runtime();
function computeInitialKind(url, preferVideo) {
	const cachedKind = getCachedResolvedMediaKind(url);
	if (cachedKind) return cachedKind;
	const kind = detectMediaKind(url);
	if (kind === "video") return "video";
	if (kind === "animated_image" || kind === "image") return "image";
	return preferVideo ? "video" : "image";
}
var SmartMediaView = (props) => {
	if (props.mode === "thumbnail") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SmartMediaThumbnail, { ...props });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SmartMediaStage, { ...props });
};
var SmartMediaThumbnail = ({ url, preferVideo, alt = "", className = "w-12 h-12 rounded-xl object-cover", fallback = null }) => {
	const cleanUrl = normalizeMediaUrl(url);
	const [renderAs, setRenderAs] = (0, import_react.useState)(() => cleanUrl ? computeInitialKind(cleanUrl, preferVideo) : "failed");
	(0, import_react.useEffect)(() => {
		let cancelled = false;
		if (!cleanUrl) {
			setRenderAs("failed");
			return;
		}
		const init = computeInitialKind(cleanUrl, preferVideo);
		setRenderAs(init);
		if (detectMediaKind(cleanUrl) === "unknown" && !getCachedResolvedMediaKind(cleanUrl)) probeAndWarmMediaUrl(cleanUrl).then((probed) => {
			if (!cancelled && probed) setRenderAs(probed);
		});
		return () => {
			cancelled = true;
		};
	}, [cleanUrl, preferVideo]);
	if (!cleanUrl || renderAs === "failed") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: fallback });
	if (renderAs === "video") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
		src: cleanUrl,
		autoPlay: true,
		loop: true,
		muted: true,
		playsInline: true,
		preload: "metadata",
		onError: () => setRenderAs("image"),
		className
	}, cleanUrl);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
		src: cleanUrl,
		alt,
		referrerPolicy: "no-referrer",
		onError: () => setRenderAs("failed"),
		className
	}, cleanUrl);
};
var TransparentStageVideo = ({ rawUrl, primaryUrl, muted, loop, resetKey, className = "", onReady, onEnded, onFatalError }) => {
	const isExternalHttp = /^https?:\/\//i.test(primaryUrl) && typeof window !== "undefined" && !primaryUrl.startsWith(window.location.origin);
	const shouldPreferProxyFirst = isExternalHttp && !primaryUrl.startsWith("blob:") && isLikelyVapUrl(rawUrl || primaryUrl);
	const initialSrc = shouldPreferProxyFirst ? getMediaProxyUrl(rawUrl || primaryUrl) || primaryUrl : primaryUrl;
	const [videoSrc, setVideoSrc] = (0, import_react.useState)(initialSrc);
	const [useCrossOrigin, setUseCrossOrigin] = (0, import_react.useState)(true);
	const [fallbackRawVideo, setFallbackRawVideo] = (0, import_react.useState)(false);
	const [autoplayMutedFallback, setAutoplayMutedFallback] = (0, import_react.useState)(false);
	const [canvasReady, setCanvasReady] = (0, import_react.useState)(false);
	const videoRef = (0, import_react.useRef)(null);
	const canvasRef = (0, import_react.useRef)(null);
	const rendererRef = (0, import_react.useRef)(null);
	const vapConfigRef = (0, import_react.useRef)(getCachedVapConfig(rawUrl) ?? null);
	const triedProxyRef = (0, import_react.useRef)(shouldPreferProxyFirst);
	const triedDirectCorsRef = (0, import_react.useRef)(!shouldPreferProxyFirst);
	const triedNoCorsRef = (0, import_react.useRef)(false);
	const detectAttemptsRef = (0, import_react.useRef)(0);
	const rafIdRef = (0, import_react.useRef)(null);
	const prevResetKeyRef = (0, import_react.useRef)(resetKey);
	const readyEmittedForKeyRef = (0, import_react.useRef)(void 0);
	const onReadyRef = (0, import_react.useRef)(onReady);
	const onEndedRef = (0, import_react.useRef)(onEnded);
	const onFatalErrorRef = (0, import_react.useRef)(onFatalError);
	onReadyRef.current = onReady;
	onEndedRef.current = onEnded;
	onFatalErrorRef.current = onFatalError;
	const emitReadyOnce = () => {
		setCanvasReady(true);
		if (readyEmittedForKeyRef.current !== resetKey) {
			readyEmittedForKeyRef.current = resetKey;
			onReadyRef.current();
		}
	};
	(0, import_react.useEffect)(() => {
		let cancelled = false;
		const preferProxy = isExternalHttp && !primaryUrl.startsWith("blob:") && isLikelyVapUrl(rawUrl || primaryUrl);
		const nextSrc = preferProxy ? getMediaProxyUrl(rawUrl || primaryUrl) || primaryUrl : primaryUrl;
		triedProxyRef.current = preferProxy;
		triedDirectCorsRef.current = !preferProxy;
		triedNoCorsRef.current = false;
		detectAttemptsRef.current = 0;
		readyEmittedForKeyRef.current = void 0;
		vapConfigRef.current = getCachedVapConfig(rawUrl) ?? null;
		setVideoSrc(nextSrc);
		setUseCrossOrigin(true);
		setFallbackRawVideo(false);
		setAutoplayMutedFallback(false);
		setCanvasReady(false);
		if (rawUrl && vapConfigRef.current === null) inspectVapUrl(rawUrl).then((cfg) => {
			if (!cancelled && cfg) vapConfigRef.current = cfg;
		});
		return () => {
			cancelled = true;
		};
	}, [
		rawUrl,
		primaryUrl,
		isExternalHttp
	]);
	(0, import_react.useEffect)(() => {
		const canvas = canvasRef.current;
		if (!canvas || fallbackRawVideo) return;
		const renderer = new VapWebGLRenderer(canvas);
		if (!renderer.isWebGLReady()) {
			renderer.destroy();
			setFallbackRawVideo(true);
			return;
		}
		rendererRef.current = renderer;
		return () => {
			renderer.destroy();
			if (rendererRef.current === renderer) rendererRef.current = null;
		};
	}, [fallbackRawVideo]);
	const trySwitchToProxyForCors = () => {
		if (!triedProxyRef.current && isExternalHttp) {
			triedProxyRef.current = true;
			const proxied = getMediaProxyUrl(rawUrl || primaryUrl);
			if (proxied && proxied !== videoSrc) {
				detectAttemptsRef.current = 0;
				setUseCrossOrigin(true);
				setVideoSrc(proxied);
				return true;
			}
		}
		if (!triedDirectCorsRef.current && primaryUrl && primaryUrl !== videoSrc) {
			triedDirectCorsRef.current = true;
			detectAttemptsRef.current = 0;
			setUseCrossOrigin(true);
			setVideoSrc(primaryUrl);
			return true;
		}
		if (!triedNoCorsRef.current) {
			triedNoCorsRef.current = true;
			setUseCrossOrigin(false);
			setFallbackRawVideo(true);
			setVideoSrc(primaryUrl);
			return true;
		}
		return false;
	};
	(0, import_react.useEffect)(() => {
		if (fallbackRawVideo) return;
		let active = true;
		const buildFallbackConfig = (vid) => {
			const vw = vid.videoWidth || 640;
			const vh = vid.videoHeight || 640;
			if (isLikelyVapUrl(rawUrl) && vw / vh >= 1.45) return {
				mode: "vap_rl",
				width: Math.floor(vw / 2),
				height: vh,
				videoWidth: vw,
				videoHeight: vh,
				alphaFrame: {
					x: 0,
					y: 0,
					w: Math.floor(vw / 2),
					h: vh
				},
				rgbFrame: {
					x: Math.floor(vw / 2),
					y: 0,
					w: Math.floor(vw / 2),
					h: vh
				},
				source: "url_hint"
			};
			return {
				mode: "chroma_black",
				width: vw,
				height: vh,
				videoWidth: vw,
				videoHeight: vh,
				rgbFrame: {
					x: 0,
					y: 0,
					w: vw,
					h: vh
				},
				alphaFrame: {
					x: 0,
					y: 0,
					w: vw,
					h: vh
				},
				source: "pixel_heuristic"
			};
		};
		const tick = () => {
			if (!active) return;
			const vid = videoRef.current;
			const renderer = rendererRef.current;
			if (vid && renderer && vid.readyState >= 2 && vid.videoWidth > 0 && vid.videoHeight > 0) {
				let cfg = vapConfigRef.current;
				if (!cfg || cfg.source === "pixel_heuristic" && detectAttemptsRef.current < 60 && (cfg.mode === "chroma_black" || cfg.mode === "passthrough")) {
					detectAttemptsRef.current += 1;
					const detected = detectVideoLayoutFromFrame(vid, isLikelyVapUrl(rawUrl));
					if (detected) {
						cfg = detected;
						vapConfigRef.current = detected;
					} else if (!cfg) cfg = buildFallbackConfig(vid);
				}
				if (!renderer.renderFrame(vid, cfg)) {
					if (trySwitchToProxyForCors()) return;
				} else emitReadyOnce();
			}
			rafIdRef.current = window.requestAnimationFrame(tick);
		};
		rafIdRef.current = window.requestAnimationFrame(tick);
		return () => {
			active = false;
			if (rafIdRef.current !== null) {
				window.cancelAnimationFrame(rafIdRef.current);
				rafIdRef.current = null;
			}
		};
	}, [
		fallbackRawVideo,
		videoSrc,
		rawUrl,
		resetKey
	]);
	const ensureVideoPlay = (restart = false) => {
		const vid = videoRef.current;
		if (!vid) return;
		if (restart) try {
			vid.currentTime = 0;
		} catch {}
		const p = vid.play();
		if (p && typeof p.then === "function") p.then(() => {
			if (fallbackRawVideo && vid.readyState >= 2 && !vid.paused) emitReadyOnce();
		}).catch(() => {
			if (!vid.muted) {
				vid.muted = true;
				setAutoplayMutedFallback(true);
				vid.play().then(() => {
					if (fallbackRawVideo && vid.readyState >= 2 && !vid.paused) emitReadyOnce();
				}).catch(() => {});
			}
		});
	};
	(0, import_react.useEffect)(() => {
		if (prevResetKeyRef.current === resetKey) return;
		prevResetKeyRef.current = resetKey;
		ensureVideoPlay(true);
		if (canvasReady) emitReadyOnce();
	}, [resetKey, canvasReady]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `absolute inset-0 z-40 pointer-events-none overflow-hidden flex items-center justify-center ${className}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
			ref: videoRef,
			src: videoSrc,
			crossOrigin: useCrossOrigin ? "anonymous" : void 0,
			autoPlay: true,
			playsInline: true,
			loop,
			preload: "auto",
			muted: muted || autoplayMutedFallback,
			onLoadedData: () => ensureVideoPlay(false),
			onCanPlay: () => ensureVideoPlay(false),
			onCanPlayThrough: () => ensureVideoPlay(false),
			onPlaying: () => {
				if (fallbackRawVideo) emitReadyOnce();
			},
			onEnded: () => {
				if (!loop) {
					setCanvasReady(false);
					onEndedRef.current();
				}
			},
			onError: () => {
				if (trySwitchToProxyForCors()) return;
				onFatalErrorRef.current();
			},
			style: {
				transform: "translate3d(0, 0, 0)",
				backfaceVisibility: "hidden"
			},
			className: fallbackRawVideo ? `w-full h-full object-cover object-center mix-blend-screen brightness-[1.06] contrast-[1.12] ${canvasReady ? "opacity-100" : "opacity-0"}` : "absolute w-px h-px opacity-0 pointer-events-none"
		}, `${videoSrc}_${useCrossOrigin ? "cors" : "nocors"}`), !fallbackRawVideo && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", {
			ref: canvasRef,
			style: {
				transform: "translate3d(0, 0, 0)",
				backfaceVisibility: "hidden"
			},
			className: `w-full h-full object-cover object-center transition-opacity duration-150 ${canvasReady ? "opacity-100" : "opacity-0"}`
		})]
	});
};
var SmartMediaStage = ({ url, fallbackUrl, preferVideo = false, alt = "", muted = false, loop = false, durationMs = 6e3, hasExplicitDuration = false, resetKey, onReady, onEnded, className = "" }) => {
	const cleanPrimary = normalizeMediaUrl(url);
	const cleanFallback = normalizeMediaUrl(fallbackUrl);
	const [renderAs, setRenderAs] = (0, import_react.useState)(() => computeInitialKind(cleanPrimary, preferVideo));
	const [activeUrl, setActiveUrl] = (0, import_react.useState)(cleanPrimary);
	const [apngAutoDurationMs, setApngAutoDurationMs] = (0, import_react.useState)(() => {
		const cached = getCachedApngInfo(cleanPrimary);
		return cached?.isApng ? cached.totalDurationMs + 150 : null;
	});
	const [ready, setReady] = (0, import_react.useState)(false);
	const [imgReplayNonce, setImgReplayNonce] = (0, import_react.useState)(0);
	const imgRef = (0, import_react.useRef)(null);
	const blobUrlRef = (0, import_react.useRef)(null);
	const loadedAtRef = (0, import_react.useRef)(0);
	const readySignaledKeyRef = (0, import_react.useRef)(void 0);
	const triedVideoFallbackRef = (0, import_react.useRef)(false);
	const prevResetKeyRef = (0, import_react.useRef)(resetKey);
	const onReadyRef = (0, import_react.useRef)(onReady);
	const onEndedRef = (0, import_react.useRef)(onEnded);
	onReadyRef.current = onReady;
	onEndedRef.current = onEnded;
	const revokeBlobUrl = () => {
		if (blobUrlRef.current) {
			try {
				URL.revokeObjectURL(blobUrlRef.current);
			} catch {}
			blobUrlRef.current = null;
		}
	};
	const signalReadyOnce = () => {
		setReady(true);
		if (readySignaledKeyRef.current !== resetKey) {
			readySignaledKeyRef.current = resetKey;
			onReadyRef.current?.();
		}
	};
	(0, import_react.useLayoutEffect)(() => {
		let cancelled = false;
		revokeBlobUrl();
		loadedAtRef.current = 0;
		readySignaledKeyRef.current = void 0;
		triedVideoFallbackRef.current = false;
		setReady(false);
		if (!cleanPrimary) {
			setActiveUrl("");
			return;
		}
		const warmMedia = getWarmMediaUrl(cleanPrimary);
		const initialKind = warmMedia ? warmMedia.kind : computeInitialKind(cleanPrimary, preferVideo);
		setRenderAs(initialKind);
		if (warmMedia) {
			if (warmMedia.isEphemeralBlob) blobUrlRef.current = warmMedia.url;
			setActiveUrl(warmMedia.url);
		} else setActiveUrl(cleanPrimary);
		if (initialKind === "image") {
			const cached = getCachedApngInfo(cleanPrimary);
			if (cached?.isApng) setApngAutoDurationMs(cached.totalDurationMs + 150);
			else {
				setApngAutoDurationMs(null);
				inspectApngUrl(cleanPrimary).then((info) => {
					if (cancelled || !info?.isApng) return;
					setApngAutoDurationMs(info.totalDurationMs + 150);
				});
			}
		} else setApngAutoDurationMs(null);
		if (!warmMedia && detectMediaKind(cleanPrimary) === "unknown" && !getCachedResolvedMediaKind(cleanPrimary)) probeAndWarmMediaUrl(cleanPrimary).then((probedKind) => {
			if (cancelled || !probedKind) return;
			setRenderAs((curr) => {
				if (curr !== probedKind) {
					loadedAtRef.current = 0;
					setReady(false);
				}
				return probedKind;
			});
			const freshlyWarmed = getWarmMediaUrl(cleanPrimary);
			if (freshlyWarmed) {
				revokeBlobUrl();
				if (freshlyWarmed.isEphemeralBlob) blobUrlRef.current = freshlyWarmed.url;
				setActiveUrl(freshlyWarmed.url);
			}
		});
		return () => {
			cancelled = true;
			revokeBlobUrl();
		};
	}, [cleanPrimary, preferVideo]);
	const targetImageDurationMs = !hasExplicitDuration && apngAutoDurationMs ? apngAutoDurationMs : Math.max(1e3, durationMs);
	(0, import_react.useEffect)(() => {
		if (loop || renderAs !== "image" || !activeUrl) return;
		if (!ready) {
			const stallTimer = window.setTimeout(() => {
				onEndedRef.current?.();
			}, 2e4);
			return () => window.clearTimeout(stallTimer);
		}
		if (loadedAtRef.current === 0) loadedAtRef.current = Date.now();
		const elapsed = Date.now() - loadedAtRef.current;
		const remainingMs = Math.max(150, targetImageDurationMs - elapsed);
		const timer = window.setTimeout(() => {
			onEndedRef.current?.();
		}, remainingMs);
		return () => window.clearTimeout(timer);
	}, [
		renderAs,
		activeUrl,
		ready,
		targetImageDurationMs,
		loop,
		resetKey
	]);
	(0, import_react.useEffect)(() => {
		if (loop || renderAs !== "video" || !activeUrl || ready) return;
		const stallMs = detectMediaKind(cleanPrimary) === "unknown" ? 2800 : 12e3;
		const stallTimer = window.setTimeout(() => {
			triedVideoFallbackRef.current = true;
			if (cleanFallback && activeUrl !== cleanFallback) {
				setActiveUrl(cleanFallback);
				setRenderAs(computeInitialKind(cleanFallback, false));
			} else setRenderAs("image");
		}, stallMs);
		return () => window.clearTimeout(stallTimer);
	}, [
		renderAs,
		activeUrl,
		ready,
		loop,
		cleanFallback,
		cleanPrimary
	]);
	(0, import_react.useLayoutEffect)(() => {
		if (!activeUrl) return;
		if (renderAs === "image" && !ready) {
			const el = imgRef.current;
			if (el && el.complete && el.naturalWidth > 0) {
				if (loadedAtRef.current === 0) loadedAtRef.current = Date.now();
				signalReadyOnce();
			}
		}
	}, [
		renderAs,
		activeUrl,
		ready,
		imgReplayNonce
	]);
	(0, import_react.useEffect)(() => {
		if (prevResetKeyRef.current === resetKey) return;
		prevResetKeyRef.current = resetKey;
		if (renderAs === "image" && cleanPrimary) {
			const freshBlob = createFreshMediaBlobUrl(cleanPrimary);
			if (freshBlob && freshBlob.kind === "image") {
				revokeBlobUrl();
				blobUrlRef.current = freshBlob.blobUrl;
				loadedAtRef.current = Date.now();
				setActiveUrl(freshBlob.blobUrl);
				if (ready) signalReadyOnce();
				return;
			}
			if (ready) {
				loadedAtRef.current = Date.now();
				setImgReplayNonce((n) => n + 1);
				signalReadyOnce();
			}
		}
	}, [
		resetKey,
		ready,
		renderAs,
		cleanPrimary
	]);
	if (!activeUrl) return null;
	if (renderAs === "video") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TransparentStageVideo, {
		rawUrl: cleanPrimary,
		primaryUrl: activeUrl,
		muted,
		loop,
		resetKey,
		className,
		onReady: signalReadyOnce,
		onEnded: () => {
			setReady(false);
			onEndedRef.current?.();
		},
		onFatalError: () => {
			triedVideoFallbackRef.current = true;
			setReady(false);
			setRenderAs("image");
			inspectApngUrl(cleanPrimary || activeUrl).then((info) => {
				if (info?.isApng) setApngAutoDurationMs(info.totalDurationMs + 150);
			});
		}
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `absolute inset-0 z-40 pointer-events-none overflow-hidden flex items-center justify-center ${className}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(251,191,36,0.16),transparent_70%)]",
			style: { opacity: ready ? 1 : 0 }
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			ref: imgRef,
			src: activeUrl,
			alt,
			referrerPolicy: "no-referrer",
			onLoad: () => {
				if (loadedAtRef.current === 0) loadedAtRef.current = Date.now();
				signalReadyOnce();
			},
			onError: () => {
				if (!triedVideoFallbackRef.current && detectMediaKind(activeUrl) === "unknown") {
					triedVideoFallbackRef.current = true;
					setReady(false);
					setRenderAs("video");
					return;
				}
				if (cleanFallback && activeUrl !== cleanFallback) {
					setReady(false);
					loadedAtRef.current = 0;
					setActiveUrl(cleanFallback);
					setRenderAs(computeInitialKind(cleanFallback, false));
				} else onEndedRef.current?.();
			},
			style: {
				transform: "translate3d(0, 0, 0)",
				backfaceVisibility: "hidden"
			},
			className: `relative w-full h-full object-cover object-center drop-shadow-[0_18px_44px_rgba(0,0,0,0.6)] ${ready ? "opacity-100" : "opacity-0"}`
		}, `${activeUrl}_${imgReplayNonce}`)]
	});
};
export { preloadMediaAssets as i, inspectVapUrl as n, inspectApngUrl as r, SmartMediaView as t };
