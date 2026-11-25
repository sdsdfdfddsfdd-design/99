import { n as __toESM } from "./rolldown-runtime-CO0Nlsmt.js";
import { A as Search, C as SlidersVertical, E as ShieldCheck, Et as Check, I as Plus, It as require_react, J as LogIn, K as Mail, L as Play, N as RefreshCw, P as Radio, Pt as ArrowRight, R as PenLine, St as CircleCheckBig, T as Shield, V as Mic, Y as Lock, Z as Link2, _t as CreditCard, c as Users, d as UserPlus, et as Image, g as Trash2, ht as Database, kt as Briefcase, mt as Download, n as Wifi, nt as History, o as Volume2, ot as Gift, q as LogOut, s as Video, t as X, v as Square, vt as Copy, w as ShoppingBag, x as Smartphone, y as Sparkles } from "./icons-CSx0WKXF.js";
import { D as sound, E as resolveApiUrl, T as getConfiguredServerBaseUrl, _ as getMediaFormatLabel, b as resolveEntranceStageMedia, c as fetchServerAgoraStatus, d as parseAgoraTokenInfo, f as saveServerAgoraCertificate, h as clampEffectDurationSec, l as formatAgoraChannelName, n as refreshApkReleaseInfo, o as useApp, p as fetchVoiceServerStatus, s as agoraVoice, u as isValidAgoraAppId } from "./index-tXJX2Qqq.js";
import { r as inspectApngUrl, t as SmartMediaView } from "./SmartMediaView-B1toZNK4.js";
import { t as require_jsx_runtime } from "./react-vendor-BIdqWr74.js";
// src/components/AdminDashboard.tsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
function parseOptionalDurationSec(raw) {
	const trimmed = raw.trim();
	if (!trimmed) return void 0;
	const num = Number(trimmed);
	if (!Number.isFinite(num) || num < 1) return void 0;
	return clampEffectDurationSec(num, 5);
}
var AdminDashboard = () => {
	const { users, rooms, roomBackgrounds, gifts, agencies, agents, staff, transactions, storeItems, luckyConfig, updateLuckyConfig, agoraConfig, updateAgoraConfig, triggerGlobalJackpotBanner, currentUser, adminAddBalance, adminToggleBan, adminToggleMute, adminSetVipLevel, adminCloseRoom, adminCreateRoomBackground, adminDeleteRoomBackground, adminToggleRoomModerator, adminCreateGift, adminUpdateGift, adminDeleteGift, adminCreateStoreItem, adminUpdateStoreItem, adminDeleteStoreItem, equipInventoryItem, triggerEntranceEffect, adminCreateAgent, adminTopupAgent, adminUpdateAgencyStatus, setCurrentView, firebaseUser, adminSession, adminEmail, adminAuthStatus, updateAdminEmailCredentials, firebaseStatus, isCloudSyncing, cloudMessage, signInWithGoogleCloud, signOutCloud, testCloudConnection, syncAllDataToCloud, purgeMockCatalogs } = useApp();
	const [activeTab, setActiveTab] = (0, import_react.useState)("kpi");
	const [storeFilter, setStoreFilter] = (0, import_react.useState)("all");
	const [newStoreType, setNewStoreType] = (0, import_react.useState)("entrance");
	const [newStoreName, setNewStoreName] = (0, import_react.useState)("");
	const [newStorePrice, setNewStorePrice] = (0, import_react.useState)(5e4);
	const [newStoreDays, setNewStoreDays] = (0, import_react.useState)(30);
	const [newStoreIcon, setNewStoreIcon] = (0, import_react.useState)("🚘");
	const [newStorePreviewUrl, setNewStorePreviewUrl] = (0, import_react.useState)("");
	const [newStoreVideoUrl, setNewStoreVideoUrl] = (0, import_react.useState)("");
	const [newStoreEffectSec, setNewStoreEffectSec] = (0, import_react.useState)("");
	const [newStoreDesc, setNewStoreDesc] = (0, import_react.useState)("");
	const [previewingEntrance, setPreviewingEntrance] = (0, import_react.useState)(null);
	const [storeDrafts, setStoreDrafts] = (0, import_react.useState)({});
	const getStoreDraft = (item) => storeDrafts[item.id] || {
		nameAr: item.nameAr,
		previewUrl: item.previewUrl || "",
		videoUrl: item.videoUrl || "",
		priceCoins: item.priceCoins,
		durationDays: item.durationDays,
		effectDurationSec: typeof item.effectDurationSec === "number" ? String(item.effectDurationSec) : ""
	};
	const setStoreField = (item, patch) => {
		setStoreDrafts((prev) => ({
			...prev,
			[item.id]: {
				...prev[item.id] || {
					nameAr: item.nameAr,
					previewUrl: item.previewUrl || "",
					videoUrl: item.videoUrl || "",
					priceCoins: item.priceCoins,
					durationDays: item.durationDays,
					effectDurationSec: typeof item.effectDurationSec === "number" ? String(item.effectDurationSec) : ""
				},
				...patch
			}
		}));
	};
	const [userSearch, setUserSearch] = (0, import_react.useState)("");
	const [selectedUserId, setSelectedUserId] = (0, import_react.useState)(users[0]?.id || "");
	const [adjustCoins, setAdjustCoins] = (0, import_react.useState)(1e5);
	const [adjustDiamonds, setAdjustDiamonds] = (0, import_react.useState)(0);
	const [adjustNote, setAdjustNote] = (0, import_react.useState)("مكافأة داعم / تعويض إداري");
	const [newGiftName, setNewGiftName] = (0, import_react.useState)("");
	const [newGiftPrice, setNewGiftPrice] = (0, import_react.useState)(1e3);
	const [newGiftDiamonds, setNewGiftDiamonds] = (0, import_react.useState)(500);
	const [newGiftIcon, setNewGiftIcon] = (0, import_react.useState)("🌟");
	const [newGiftImageUrl, setNewGiftImageUrl] = (0, import_react.useState)("");
	const [newGiftVideoUrl, setNewGiftVideoUrl] = (0, import_react.useState)("");
	const [newGiftSoundUrl, setNewGiftSoundUrl] = (0, import_react.useState)("");
	const [newGiftDurationSec, setNewGiftDurationSec] = (0, import_react.useState)("");
	const [newGiftIsLucky, setNewGiftIsLucky] = (0, import_react.useState)(false);
	const [newGiftCat, setNewGiftCat] = (0, import_react.useState)("luxury");
	const [newGiftSound, setNewGiftSound] = (0, import_react.useState)("fanfare");
	const [previewingAudioTarget, setPreviewingAudioTarget] = (0, import_react.useState)(null);
	const [newGiftApngInfo, setNewGiftApngInfo] = (0, import_react.useState)(null);
	const [editGiftApngInfo, setEditGiftApngInfo] = (0, import_react.useState)(null);
	const [newStoreApngInfo, setNewStoreApngInfo] = (0, import_react.useState)(null);
	const [editingGift, setEditingGift] = (0, import_react.useState)(null);
	const [editImageUrl, setEditImageUrl] = (0, import_react.useState)("");
	const [editVideoUrl, setEditVideoUrl] = (0, import_react.useState)("");
	const [editSoundUrl, setEditSoundUrl] = (0, import_react.useState)("");
	const [editDurationSec, setEditDurationSec] = (0, import_react.useState)("");
	const [editPrice, setEditPrice] = (0, import_react.useState)(0);
	const [editIsLucky, setEditIsLucky] = (0, import_react.useState)(false);
	const [newAgentName, setNewAgentName] = (0, import_react.useState)("");
	const [newAgentBalance, setNewAgentBalance] = (0, import_react.useState)(2e6);
	const [newAgentRate, setNewAgentRate] = (0, import_react.useState)(5);
	const [adminNotice, setAdminNotice] = (0, import_react.useState)(null);
	const [newBgName, setNewBgName] = (0, import_react.useState)("");
	const [newBgUrl, setNewBgUrl] = (0, import_react.useState)("");
	const [roomModTargetUserByRoom, setRoomModTargetUserByRoom] = (0, import_react.useState)({});
	const [voiceServerSnapshot, setVoiceServerSnapshot] = (0, import_react.useState)(null);
	const [isRefreshingVoiceServer, setIsRefreshingVoiceServer] = (0, import_react.useState)(false);
	const [serverAgoraStatus, setServerAgoraStatus] = (0, import_react.useState)(null);
	const [agoraCertInput, setAgoraCertInput] = (0, import_react.useState)("");
	const [isSavingCert, setIsSavingCert] = (0, import_react.useState)(false);
	const [isPurgingMocks, setIsPurgingMocks] = (0, import_react.useState)(false);
	const [agoraAppIdInput, setAgoraAppIdInput] = (0, import_react.useState)(agoraConfig.appId);
	const [agoraTokenInput, setAgoraTokenInput] = (0, import_react.useState)(agoraConfig.rtcToken || "");
	const [agoraTokenInspectorInput, setAgoraTokenInspectorInput] = (0, import_react.useState)("");
	const [parsedAgoraToken, setParsedAgoraToken] = (0, import_react.useState)(null);
	const [agoraTestStatus, setAgoraTestStatus] = (0, import_react.useState)(null);
	const [copiedAgoraChannel, setCopiedAgoraChannel] = (0, import_react.useState)(null);
	const [isTestingAgora, setIsTestingAgora] = (0, import_react.useState)(false);
	const [isMicProbing, setIsMicProbing] = (0, import_react.useState)(false);
	const [micProbeLevel, setMicProbeLevel] = (0, import_react.useState)(0);
	const [micProbeMsg, setMicProbeMsg] = (0, import_react.useState)(null);
	const [newAdminEmailInput, setNewAdminEmailInput] = (0, import_react.useState)(adminSession?.email || adminAuthStatus?.emailHint || adminEmail || "");
	const [newAdminDisplayNameInput, setNewAdminDisplayNameInput] = (0, import_react.useState)(adminSession?.displayName || "مدير التطبيق");
	const [newAdminPasswordInput, setNewAdminPasswordInput] = (0, import_react.useState)("");
	const [newAdminPasswordConfirm, setNewAdminPasswordConfirm] = (0, import_react.useState)("");
	const [isUpdatingAdminCreds, setIsUpdatingAdminCreds] = (0, import_react.useState)(false);
	const [adminCredsFeedback, setAdminCredsFeedback] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		const activeEmail = adminSession?.email || adminAuthStatus?.emailHint || adminEmail;
		if (activeEmail && !newAdminEmailInput) setNewAdminEmailInput(activeEmail);
		if (adminSession?.displayName) setNewAdminDisplayNameInput(adminSession.displayName);
	}, [
		adminSession?.email,
		adminSession?.displayName,
		adminAuthStatus?.emailHint,
		adminEmail
	]);
	const [apkReleaseState, setApkReleaseState] = (0, import_react.useState)(null);
	const [apkUrlInput, setApkUrlInput] = (0, import_react.useState)("");
	const [apkVersionInput, setApkVersionInput] = (0, import_react.useState)("1.0.0");
	const [isSavingApkRelease, setIsSavingApkRelease] = (0, import_react.useState)(false);
	const [apkFeedback, setApkFeedback] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		if (activeTab !== "firebase") return;
		refreshApkReleaseInfo().then((info) => {
			if (!info) return;
			setApkReleaseState(info);
			if (info.source === "external_url" && info.downloadUrl) setApkUrlInput(info.downloadUrl);
			if (info.versionName) setApkVersionInput(info.versionName);
		});
	}, [activeTab]);
	const refreshVoiceDiagnostics = async () => {
		setIsRefreshingVoiceServer(true);
		try {
			const [vs, ag] = await Promise.all([fetchVoiceServerStatus(), fetchServerAgoraStatus()]);
			setVoiceServerSnapshot(vs);
			setServerAgoraStatus(ag);
		} finally {
			setIsRefreshingVoiceServer(false);
		}
	};
	(0, import_react.useEffect)(() => {
		setAgoraAppIdInput(agoraConfig.appId);
		setAgoraTokenInput(agoraConfig.rtcToken || "");
	}, [agoraConfig.appId, agoraConfig.rtcToken]);
	(0, import_react.useEffect)(() => {
		if (activeTab === "agora") refreshVoiceDiagnostics();
	}, [activeTab]);
	(0, import_react.useEffect)(() => {
		const trimmed = agoraTokenInspectorInput.trim();
		if (!trimmed) {
			setParsedAgoraToken(null);
			return;
		}
		let cancelled = false;
		parseAgoraTokenInfo(trimmed).then((info) => {
			if (cancelled) return;
			setParsedAgoraToken(info);
			if (info.valid && info.appId) setAgoraAppIdInput(info.appId);
			if (info.valid && info.isRtcToken) setAgoraTokenInput(trimmed);
		});
		return () => {
			cancelled = true;
		};
	}, [agoraTokenInspectorInput]);
	(0, import_react.useEffect)(() => {
		return () => {
			agoraVoice.stopMicProbe();
		};
	}, []);
	(0, import_react.useEffect)(() => {
		const probeUrl = (newGiftVideoUrl || newGiftImageUrl).trim();
		if (!probeUrl) {
			setNewGiftApngInfo(null);
			return;
		}
		let cancelled = false;
		inspectApngUrl(probeUrl).then((info) => {
			if (!cancelled) setNewGiftApngInfo(info?.isApng ? info : null);
		});
		return () => {
			cancelled = true;
		};
	}, [newGiftVideoUrl, newGiftImageUrl]);
	(0, import_react.useEffect)(() => {
		const probeUrl = (editVideoUrl || editImageUrl).trim();
		if (!probeUrl) {
			setEditGiftApngInfo(null);
			return;
		}
		let cancelled = false;
		inspectApngUrl(probeUrl).then((info) => {
			if (!cancelled) setEditGiftApngInfo(info?.isApng ? info : null);
		});
		return () => {
			cancelled = true;
		};
	}, [editVideoUrl, editImageUrl]);
	(0, import_react.useEffect)(() => {
		const probeUrl = (newStoreVideoUrl || newStorePreviewUrl).trim();
		if (!probeUrl) {
			setNewStoreApngInfo(null);
			return;
		}
		let cancelled = false;
		inspectApngUrl(probeUrl).then((info) => {
			if (!cancelled) setNewStoreApngInfo(info?.isApng ? info : null);
		});
		return () => {
			cancelled = true;
		};
	}, [newStoreVideoUrl, newStorePreviewUrl]);
	const showAdminNotice = (msg) => {
		setAdminNotice(msg);
		setTimeout(() => setAdminNotice(null), 3500);
	};
	const selectedUser = users.find((u) => u.id === selectedUserId) || users[0];
	const filteredUsers = users.filter((u) => u.displayName.toLowerCase().includes(userSearch.toLowerCase()) || u.userCode.includes(userSearch) || u.username.toLowerCase().includes(userSearch.toLowerCase()));
	const handleAdjustBalance = (e) => {
		e.preventDefault();
		if (!selectedUser) return;
		adminAddBalance(selectedUser.id, adjustCoins, adjustDiamonds, adjustNote);
		showAdminNotice(`تم تعديل رصيد ${selectedUser.displayName} بنجاح.`);
	};
	const handleCreateGift = (e) => {
		e.preventDefault();
		if (!newGiftName.trim()) return;
		const cleanImg = newGiftImageUrl.trim();
		const cleanVid = newGiftVideoUrl.trim();
		const cleanSnd = newGiftSoundUrl.trim();
		const isLucky = newGiftIsLucky || newGiftCat === "lucky";
		const gift = {
			id: `gift_custom_${Date.now()}`,
			name: newGiftName.trim(),
			nameAr: newGiftName.trim(),
			category: newGiftCat,
			coinPrice: Math.max(1, newGiftPrice),
			diamondReward: Math.max(0, newGiftDiamonds),
			icon: newGiftIcon.trim() || "🎁",
			imageUrl: cleanImg || void 0,
			videoUrl: cleanVid || void 0,
			soundUrl: cleanSnd || void 0,
			effectDurationSec: parseOptionalDurationSec(newGiftDurationSec),
			accentColor: isLucky ? "#ec4899" : "#f59e0b",
			animationType: isLucky ? "lollipop_matrix" : newGiftCat === "magic" ? "explosion" : "luxury_banner",
			soundEffect: newGiftSound,
			isLucky,
			descriptionAr: cleanVid || cleanImg ? "هدية عرض كامل الغرفة بمؤثرات مخصصة من لوحة التحكم" : "هدية حصرية مضافة حديثاً عبر لوحة التحكم"
		};
		adminCreateGift(gift);
		sound.stopPreviewAudio();
		setPreviewingAudioTarget(null);
		showAdminNotice("تمت إضافة الهدية إلى المتجر والغرف فوراً.");
		setNewGiftName("");
		setNewGiftImageUrl("");
		setNewGiftVideoUrl("");
		setNewGiftSoundUrl("");
		setNewGiftDurationSec("");
		setNewGiftIsLucky(false);
	};
	const openEditGiftModal = (g) => {
		setEditingGift(g);
		setEditImageUrl(g.imageUrl || "");
		setEditVideoUrl(g.videoUrl || "");
		setEditSoundUrl(g.soundUrl || "");
		setEditDurationSec(typeof g.effectDurationSec === "number" ? String(g.effectDurationSec) : "");
		setEditPrice(g.coinPrice);
		setEditIsLucky(Boolean(g.isLucky || g.category === "lucky"));
	};
	const handleSaveGiftEdit = (e) => {
		e.preventDefault();
		if (!editingGift) return;
		adminUpdateGift(editingGift.id, {
			imageUrl: editImageUrl.trim() || void 0,
			videoUrl: editVideoUrl.trim() || void 0,
			soundUrl: editSoundUrl.trim() || void 0,
			effectDurationSec: parseOptionalDurationSec(editDurationSec),
			coinPrice: Math.max(1, editPrice),
			isLucky: editIsLucky
		});
		sound.stopPreviewAudio();
		setPreviewingAudioTarget(null);
		showAdminNotice(`تم تحديث بيانات الهدية (${editingGift.nameAr}) بنجاح.`);
		setEditingGift(null);
	};
	const handleCreateAgent = (e) => {
		e.preventDefault();
		if (!newAgentName.trim()) return;
		adminCreateAgent({
			name: newAgentName,
			balanceCoins: newAgentBalance,
			commissionRate: newAgentRate
		});
		showAdminNotice("تم إنشاء حساب وكيل الشحن وتخصيص رصيده بنجاح.");
		setNewAgentName("");
	};
	const handleCreateStoreItem = (e) => {
		e.preventDefault();
		if (!newStoreName.trim()) return;
		const newItem = {
			id: `${newStoreType}_custom_${Date.now()}`,
			type: newStoreType,
			nameAr: newStoreName.trim(),
			nameEn: newStoreName.trim(),
			priceCoins: Math.max(0, newStorePrice),
			durationDays: Math.max(1, newStoreDays || 30),
			previewUrl: newStorePreviewUrl.trim(),
			videoUrl: newStoreType === "entrance" && newStoreVideoUrl.trim() ? newStoreVideoUrl.trim() : void 0,
			effectDurationSec: newStoreType === "entrance" ? parseOptionalDurationSec(newStoreEffectSec) : void 0,
			previewGradient: {
				frame: "from-amber-400 via-yellow-300 to-amber-600",
				entrance: "from-cyan-500 via-indigo-500 to-purple-600",
				badge: "from-yellow-400 via-amber-500 to-orange-600",
				bubble: "from-fuchsia-500 via-purple-500 to-indigo-600"
			}[newStoreType],
			icon: newStoreIcon.trim() || {
				frame: "🪽",
				entrance: "🚘",
				badge: "🎖️",
				bubble: "💬"
			}[newStoreType],
			descriptionAr: newStoreDesc.trim() || (newStoreType === "entrance" ? "تأثير دخولية فاخر يظهر عند دخولك إلى الغرف الصوتية" : newStoreType === "frame" ? "إطار فاخر يحيط بصورتك على المايك وفي الملف الشخصي" : newStoreType === "badge" ? "وسام شرف مميز يظهر بجانب اسمك في المتجر والغرف" : "فقاعة دردشة مخصصة لرسائلك داخل الغرف")
		};
		adminCreateStoreItem(newItem);
		showAdminNotice(`تم رفع (${newItem.nameAr}) إلى المتجر بنجاح! يظهر الآن في المتجر والحقيبة.`);
		setNewStoreName("");
		setNewStorePreviewUrl("");
		setNewStoreVideoUrl("");
		setNewStoreEffectSec("");
		setNewStoreDesc("");
	};
	const totalCoinsInCirculation = users.reduce((acc, u) => acc + u.coins, 0);
	const totalRechargeVolume = agents.reduce((acc, a) => acc + a.totalRechargedCoins, 0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "w-full max-w-7xl mx-auto px-3 sm:px-6 py-4 sm:py-6 space-y-5 overflow-x-hidden pb-16",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 sm:p-5 rounded-3xl bg-gradient-to-l from-[#14192c] via-[#101424] to-[#0b0e18] border border-white/10 shadow-xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3 min-w-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-tr from-amber-500 to-orange-500 text-slate-950 flex items-center justify-center shrink-0 shadow-lg shadow-amber-500/20",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shield, { className: "w-6 h-6" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "text-base sm:text-lg font-black text-white truncate",
								children: "لوحة التحكم الإدارية"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[11px] font-mono text-amber-300",
								children: "Super Admin · 360°"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-slate-400 mt-0.5 line-clamp-1",
							children: "إدارة شاملة للمستخدمين، الغرف، رفع هدايا MP4 والصور، ونسبة فوز هدايا الحظ"
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center gap-2 shrink-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setCurrentView("agent_portal"),
						className: "flex-1 sm:flex-none min-h-[42px] px-3.5 py-2 rounded-xl bg-white/8 hover:bg-white/12 border border-white/10 text-slate-200 text-xs font-bold transition-colors",
						children: "بوابة الوكلاء"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => setCurrentView("user_app"),
						className: "flex-1 sm:flex-none min-h-[42px] px-4 py-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 text-xs font-black flex items-center justify-center gap-1.5 transition-colors",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "w-4 h-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "العودة للتطبيق" })]
					})]
				})]
			}),
			adminNotice && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "px-4 py-3 rounded-2xl bg-emerald-500/15 border border-emerald-400/40 text-emerald-200 text-xs font-bold text-right flex items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheckBig, { className: "w-4 h-4 text-emerald-400 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: adminNotice })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				"aria-label": "أقسام لوحة التحكم",
				className: "grid grid-cols-2 sm:grid-cols-4 lg:flex lg:items-center gap-2",
				children: [
					{
						id: "kpi",
						label: "الإحصائيات والحظ",
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlidersVertical, { className: "w-4 h-4" })
					},
					{
						id: "gifts",
						label: "الهدايا و MP4",
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gift, { className: "w-4 h-4" })
					},
					{
						id: "store",
						label: "المتجر والدخوليات والإطارات",
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "w-4 h-4" })
					},
					{
						id: "users",
						label: "المستخدمون",
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "w-4 h-4" })
					},
					{
						id: "rooms",
						label: "الغرف والخلفيات",
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Radio, { className: "w-4 h-4" })
					},
					{
						id: "agents",
						label: "وكلاء الشحن",
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CreditCard, { className: "w-4 h-4" })
					},
					{
						id: "agencies",
						label: "الوكالات",
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Briefcase, { className: "w-4 h-4" })
					},
					{
						id: "staff",
						label: "الصلاحيات",
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shield, { className: "w-4 h-4" })
					},
					{
						id: "ledger",
						label: "السجل المالي",
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(History, { className: "w-4 h-4" })
					},
					{
						id: "agora",
						label: "السيرفر الصوتي الخاص",
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mic, { className: "w-4 h-4" })
					},
					{
						id: "firebase",
						label: "قاعدة البيانات",
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Database, { className: "w-4 h-4" })
					}
				].map((tab) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: () => setActiveTab(tab.id),
					className: `min-h-[44px] px-3 py-2 rounded-2xl text-xs font-bold flex items-center justify-center lg:justify-start gap-2 transition-all border ${activeTab === tab.id ? "bg-amber-400 text-slate-950 border-amber-300 shadow-lg shadow-amber-500/15" : "bg-[#101524] text-slate-300 border-white/8 hover:bg-white/[0.06]"}`,
					children: [tab.icon, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "truncate",
						children: tab.label
					})]
				}, tab.id))
			}),
			activeTab === "kpi" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-4 rounded-2xl bg-[#101524] border border-white/8",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs text-slate-400 font-medium",
										children: "إجمالي المستخدمين"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-xl sm:text-2xl font-black font-mono tabular-nums text-white mt-1",
										children: users.length.toLocaleString()
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[11px] text-emerald-400 font-semibold",
										children: "حسابات نشطة"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-4 rounded-2xl bg-[#101524] border border-white/8",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs text-slate-400 font-medium",
										children: "الغرف الصوتية"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-xl sm:text-2xl font-black font-mono tabular-nums text-amber-300 mt-1",
										children: rooms.length
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[11px] text-slate-400",
										children: "بث مباشر 8 مايكات"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-4 rounded-2xl bg-[#101524] border border-white/8",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs text-slate-400 font-medium",
										children: "العملات المتداولة"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "text-xl sm:text-2xl font-black font-mono tabular-nums text-cyan-300 mt-1",
										children: [(totalCoinsInCirculation / 1e6).toFixed(2), "M"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[11px] text-slate-400",
										children: "في محافظ الأعضاء"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-4 rounded-2xl bg-[#101524] border border-white/8",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs text-slate-400 font-medium",
										children: "شحن الوكلاء"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "text-xl sm:text-2xl font-black font-mono tabular-nums text-rose-300 mt-1",
										children: [(totalRechargeVolume / 1e6).toFixed(1), "M"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[11px] text-slate-400",
										children: "عمليات معتمدة"
									})
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-4 sm:p-6 rounded-3xl bg-gradient-to-br from-[#1b1427] via-[#121728] to-[#1a130b] border border-amber-400/35 space-y-5 shadow-xl",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-start sm:items-center gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "w-11 h-11 rounded-2xl bg-amber-400/15 border border-amber-400/40 flex items-center justify-center text-2xl shrink-0",
										children: "🍭"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "text-sm sm:text-base font-black text-amber-300",
										children: "التحكم المباشر في نسبة هدايا الحظ والمضاعفات"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-slate-300 mt-0.5",
										children: "يُطبّق فوراً على جميع هدايا الحظ في الغرف والحقيبة، ويطلق الشريط العام وصوت الطشة عند تجاوز المليون"
									})] })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => {
										triggerGlobalJackpotBanner({
											winnerName: currentUser.displayName,
											winnerAvatar: currentUser.avatar,
											roomTitle: rooms[0]?.title || "بيت العائلة 👑",
											giftName: gifts[0]?.nameAr || "هدية الترحيب",
											giftIcon: gifts[0]?.icon || "🎁",
											amountWon: 125e4,
											comboTotalCoins: 125e4,
											multiplier: 188
										});
										showAdminNotice("تم إطلاق تجربة الشريط العام وصوت الطشة لمدة 3 ثوانٍ!");
									},
									className: "min-h-[42px] px-4 py-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs flex items-center justify-center gap-1.5 shrink-0 transition-colors",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "w-3.5 h-3.5 fill-slate-950" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "تجربة الشريط + صوت الطشة (3ث)" })]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-4 rounded-2xl bg-black/35 border border-white/10 space-y-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-wrap items-center justify-between gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "text-xs sm:text-sm font-bold text-white",
											children: "نسبة احتمالية الفوز في هدايا الحظ (Win Rate %)"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "font-mono tabular-nums text-lg font-black text-emerald-400",
											children: [luckyConfig.winRatePercent, "%"]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "range",
										min: 0,
										max: 100,
										value: luckyConfig.winRatePercent,
										onChange: (e) => {
											updateLuckyConfig({ winRatePercent: Number(e.target.value) });
										},
										className: "w-full accent-amber-400 h-2.5 cursor-pointer"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between text-[11px] text-slate-400",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "0% (بدون ربح)" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "50% (متوازن)" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "100% (ربح مضمون كل رمية)" })
										]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "p-3.5 rounded-2xl bg-black/35 border border-white/10 space-y-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between text-xs",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-slate-300 font-semibold",
												children: "وزن 8X – 25X"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "font-mono tabular-nums font-black text-amber-300",
												children: [luckyConfig.lowMultiplierWeight, "%"]
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "range",
											min: 0,
											max: 100,
											value: luckyConfig.lowMultiplierWeight,
											onChange: (e) => updateLuckyConfig({ lowMultiplierWeight: Number(e.target.value) }),
											className: "w-full accent-amber-400"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "p-3.5 rounded-2xl bg-black/35 border border-white/10 space-y-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between text-xs",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-slate-300 font-semibold",
												children: "وزن 66X – 88X"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "font-mono tabular-nums font-black text-pink-400",
												children: [luckyConfig.midMultiplierWeight, "%"]
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "range",
											min: 0,
											max: 100,
											value: luckyConfig.midMultiplierWeight,
											onChange: (e) => updateLuckyConfig({ midMultiplierWeight: Number(e.target.value) }),
											className: "w-full accent-pink-400"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "p-3.5 rounded-2xl bg-black/35 border border-white/10 space-y-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between text-xs",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-slate-300 font-semibold",
												children: "وزن 188X – 250X"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "font-mono tabular-nums font-black text-cyan-300",
												children: [luckyConfig.highMultiplierWeight, "%"]
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "range",
											min: 0,
											max: 100,
											value: luckyConfig.highMultiplierWeight,
											onChange: (e) => updateLuckyConfig({ highMultiplierWeight: Number(e.target.value) }),
											className: "w-full accent-cyan-400"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "p-3.5 rounded-2xl bg-black/35 border border-white/10 space-y-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "block text-xs text-slate-300 font-semibold",
											children: "حد الشريط العام وصوت الطشة (عملة)"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "number",
											min: 1e5,
											step: 1e5,
											value: luckyConfig.megaComboThreshold,
											onChange: (e) => updateLuckyConfig({ megaComboThreshold: Math.max(1e5, Number(e.target.value) || 1e6) }),
											className: "w-full min-h-[38px] rounded-xl bg-slate-950 border border-white/15 px-3 text-xs font-mono tabular-nums font-bold text-emerald-300 focus:outline-none focus:border-amber-400"
										})]
									})
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-4 sm:p-5 rounded-2xl bg-[#101524] border border-white/8 space-y-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-bold text-sm text-white",
										children: "كتالوج الهدايا وروابط MP4"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-xs text-slate-400",
										children: [gifts.length, " هدية نشطة — يمكنك رفع صورة الهدية وفيديو MP4 عبر الرابط مباشرة."]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => setActiveTab("gifts"),
										className: "text-xs font-bold text-amber-400 hover:underline",
										children: "إدارة الهدايا والروابط ←"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-4 sm:p-5 rounded-2xl bg-[#101524] border border-amber-400/20 space-y-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-bold text-sm text-white",
										children: "قسم المتجر والدخوليات والإطارات"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-xs text-slate-400",
										children: [storeItems.length, " عنصر بالمتجر — ارفع إطارات الصور، تأثيرات الدخول (رابط/MP4)، الأوسمة والفقاعات."]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => setActiveTab("store"),
										className: "text-xs font-bold text-amber-300 hover:underline",
										children: "إدارة المتجر والدخوليات ←"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-4 sm:p-5 rounded-2xl bg-[#101524] border border-white/8 space-y-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-bold text-sm text-white",
										children: "الوكالات والمضيفين"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-xs text-slate-400",
										children: [agencies.length, " وكالات معتمدة تتابع أداء المضيفين والأرباح اليومية."]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => setActiveTab("agencies"),
										className: "text-xs font-bold text-sky-400 hover:underline",
										children: "إدارة الوكالات ←"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-4 sm:p-5 rounded-2xl bg-[#101524] border border-white/8 space-y-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-bold text-sm text-white",
										children: "السجل المالي والمراقبة"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-xs text-slate-400",
										children: [transactions.length, " معاملة مسجلة تشمل الشحن، الهدايا، وأرباح الحظ."]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => setActiveTab("ledger"),
										className: "text-xs font-bold text-emerald-400 hover:underline",
										children: "عرض السجل المالي ←"
									})
								]
							})
						]
					})
				]
			}),
			activeTab === "gifts" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-4 rounded-2xl bg-[#101524] border border-amber-400/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "w-5 h-5 text-amber-400 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-xs",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-bold text-white",
								children: "نسبة فوز هدايا الحظ الحالية: "
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-mono tabular-nums font-black text-emerald-400",
								children: [luckyConfig.winRatePercent, "%"]
							})]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3 w-full sm:w-64",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "range",
							min: 0,
							max: 100,
							value: luckyConfig.winRatePercent,
							onChange: (e) => updateLuckyConfig({ winRatePercent: Number(e.target.value) }),
							className: "flex-1 accent-amber-400 cursor-pointer"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setActiveTab("kpi"),
							className: "text-[11px] font-bold text-amber-300 hover:underline shrink-0",
							children: "ضبط متقدم"
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-1 lg:grid-cols-12 gap-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "lg:col-span-5 bg-[#101524] border border-white/10 rounded-3xl p-4 sm:p-5 shadow-xl space-y-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
							className: "font-bold text-sm text-white flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "w-4 h-4 text-amber-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "إضافة هدية جديدة (جميع الصيغ + صوت مخصص)" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							onSubmit: handleCreateGift,
							className: "space-y-3 text-xs",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "block text-slate-300 mb-1 font-semibold",
									children: "اسم الهدية:"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "text",
									required: true,
									value: newGiftName,
									onChange: (e) => setNewGiftName(e.target.value),
									placeholder: "مثال: أسد الذهب الملكي",
									className: "w-full min-h-[42px] bg-slate-950 border border-white/12 rounded-xl px-3 text-white focus:outline-none focus:border-amber-400"
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "flex items-center justify-between text-slate-300 mb-1 font-semibold",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "flex items-center gap-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image, { className: "w-3.5 h-3.5 text-sky-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "رابط صورة أو APNG / GIF / WebP الهدية:" })]
									}), newGiftImageUrl.trim() && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-mono text-[10px] text-sky-300",
										children: newGiftApngInfo && !newGiftVideoUrl.trim() ? `APNG • ${(newGiftApngInfo.totalDurationMs / 1e3).toFixed(1)}ث (${newGiftApngInfo.numFrames} إطار)` : getMediaFormatLabel(newGiftImageUrl)
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "text",
									value: newGiftImageUrl,
									onChange: (e) => setNewGiftImageUrl(e.target.value),
									placeholder: "https://example.com/gift.png أو .apng أو .gif أو .webp",
									dir: "ltr",
									className: "w-full min-h-[42px] bg-slate-950 border border-white/12 rounded-xl px-3 text-sky-300 font-mono text-left focus:outline-none focus:border-sky-400"
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "flex items-center justify-between text-slate-300 mb-1 font-semibold",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "flex items-center gap-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Video, { className: "w-3.5 h-3.5 text-rose-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "رابط حركة الهدية (VAP / MP4 شفاف تلقائياً / WebM / APNG / GIF / WebP):" })]
									}), newGiftVideoUrl.trim() && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-mono text-[10px] text-rose-300",
										children: newGiftApngInfo ? `APNG • ${(newGiftApngInfo.totalDurationMs / 1e3).toFixed(1)}ث (${newGiftApngInfo.numFrames} إطار)` : getMediaFormatLabel(newGiftVideoUrl)
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "text",
									value: newGiftVideoUrl,
									onChange: (e) => setNewGiftVideoUrl(e.target.value),
									placeholder: "https://example.com/gift-vap.mp4 أو .vap أو .apng أو .gif (يزيل الخلفية البيضاء تلقائياً)",
									dir: "ltr",
									className: "w-full min-h-[42px] bg-slate-950 border border-white/12 rounded-xl px-3 text-rose-300 font-mono text-left focus:outline-none focus:border-rose-400"
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "flex items-center justify-between text-slate-300 mb-1 font-semibold",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "flex items-center gap-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Volume2, { className: "w-3.5 h-3.5 text-emerald-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "رابط صوت الهدية عند الرمي (MP3 / WAV / OGG / M4A):" })]
									}), newGiftSoundUrl.trim() && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-mono text-[10px] text-emerald-300",
										children: getMediaFormatLabel(newGiftSoundUrl)
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "text",
										value: newGiftSoundUrl,
										onChange: (e) => setNewGiftSoundUrl(e.target.value),
										placeholder: "https://example.com/gift-sound.mp3",
										dir: "ltr",
										className: "flex-1 min-h-[42px] bg-slate-950 border border-white/12 rounded-xl px-3 text-emerald-300 font-mono text-left focus:outline-none focus:border-emerald-400"
									}), newGiftSoundUrl.trim() && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => {
											if (previewingAudioTarget === "new") {
												sound.stopPreviewAudio();
												setPreviewingAudioTarget(null);
											} else {
												setPreviewingAudioTarget("new");
												sound.previewAudioUrl(newGiftSoundUrl, () => setPreviewingAudioTarget(null));
											}
										},
										className: "min-h-[42px] px-3 rounded-xl bg-emerald-500/20 border border-emerald-400/40 text-emerald-200 font-bold flex items-center gap-1 shrink-0",
										title: "تجربة الصوت",
										children: [previewingAudioTarget === "new" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Square, { className: "w-3.5 h-3.5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "w-3.5 h-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: previewingAudioTarget === "new" ? "إيقاف" : "تجربة" })]
									})]
								})] }),
								(newGiftImageUrl.trim() || newGiftVideoUrl.trim()) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "p-3 rounded-2xl bg-slate-950 border border-white/10 flex items-center gap-3",
									children: [
										newGiftImageUrl.trim() && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SmartMediaView, {
											mode: "thumbnail",
											url: newGiftImageUrl.trim(),
											alt: "معاينة الصورة",
											className: "w-14 h-14 rounded-xl object-contain bg-black border border-white/15 shrink-0"
										}),
										newGiftVideoUrl.trim() && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SmartMediaView, {
											mode: "thumbnail",
											url: newGiftVideoUrl.trim(),
											preferVideo: true,
											alt: "معاينة الحركة",
											className: "w-24 h-14 rounded-xl object-contain bg-black border border-rose-400/40 shrink-0"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-[11px] text-slate-400 leading-relaxed",
											children: "معاينة مباشرة — تُعرض الهدية بمقاس الغرفة بالكامل عند الرمي"
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid grid-cols-2 gap-2.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "block text-slate-300 mb-1 font-semibold",
										children: "الأيقونة البديلة:"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "text",
										required: true,
										value: newGiftIcon,
										onChange: (e) => setNewGiftIcon(e.target.value),
										className: "w-full min-h-[42px] bg-slate-950 border border-white/12 rounded-xl px-3 text-center text-lg focus:outline-none focus:border-amber-400"
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "block text-slate-300 mb-1 font-semibold",
										children: "التصنيف:"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
										value: newGiftCat,
										onChange: (e) => {
											const val = e.target.value;
											setNewGiftCat(val);
											if (val === "lucky") setNewGiftIsLucky(true);
										},
										className: "w-full min-h-[42px] bg-slate-950 border border-white/12 rounded-xl px-3 text-white focus:outline-none focus:border-amber-400",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "luxury",
												children: "فاخرة 🏎️"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "lucky",
												children: "هدايا الحظ 🍭"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "classic",
												children: "كلاسيكية 🌹"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "romantic",
												children: "رومانسية 💖"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "magic",
												children: "سحرية SVGA 🏰"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "vip",
												children: "VIP حصري 👑"
											})
										]
									})] })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid grid-cols-2 gap-2.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "block text-slate-300 mb-1 font-semibold",
										children: "سعر العملات:"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "number",
										min: 1,
										step: 50,
										value: newGiftPrice,
										onChange: (e) => setNewGiftPrice(Number(e.target.value)),
										className: "w-full min-h-[42px] bg-slate-950 border border-white/12 rounded-xl px-3 text-amber-300 font-mono tabular-nums font-bold focus:outline-none focus:border-amber-400"
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "block text-slate-300 mb-1 font-semibold",
										children: "عائد الألماس:"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "number",
										min: 0,
										step: 25,
										value: newGiftDiamonds,
										onChange: (e) => setNewGiftDiamonds(Number(e.target.value)),
										className: "w-full min-h-[42px] bg-slate-950 border border-white/12 rounded-xl px-3 text-cyan-300 font-mono tabular-nums font-bold focus:outline-none focus:border-amber-400"
									})] })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid grid-cols-2 gap-2.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "block text-slate-300 mb-1 font-semibold",
										children: "المؤثر الصوتي البديل:"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
										value: newGiftSound,
										onChange: (e) => setNewGiftSound(e.target.value),
										className: "w-full min-h-[42px] bg-slate-950 border border-white/12 rounded-xl px-3 text-white focus:outline-none focus:border-amber-400",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "fanfare",
												children: "أبواق النصر الملكية"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "roar",
												children: "زئير التنين الأسطوري"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "magic",
												children: "سحر الفضاء والنجوم"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "chime",
												children: "رنين الأجراس الذهبية"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "laser",
												children: "صاروخ المجرة"
											})
										]
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "block text-slate-300 mb-1 font-semibold",
										children: "مدة العرض (ث - اتركه فارغاً للتلقائي):"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "number",
										min: 1,
										max: 120,
										value: newGiftDurationSec,
										onChange: (e) => setNewGiftDurationSec(e.target.value),
										placeholder: "تلقائي (كامل APNG/الفيديو)",
										title: "عند ترك الحقل فارغاً يعمل الفيديو و APNG بكامل مدتهما الطبيعية تلقائياً",
										className: "w-full min-h-[42px] bg-slate-950 border border-white/12 rounded-xl px-3 text-cyan-300 font-mono tabular-nums font-bold focus:outline-none focus:border-cyan-400 placeholder:text-[11px] placeholder:font-sans placeholder:text-slate-500"
									})] })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "flex items-center justify-between p-3 rounded-xl bg-slate-950 border border-white/10 cursor-pointer",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-semibold text-pink-300",
										children: "تفعيل كهدية حظ (تربح مضاعفات عشوائية داخل الغرفة)"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "checkbox",
										checked: newGiftIsLucky || newGiftCat === "lucky",
										onChange: (e) => setNewGiftIsLucky(e.target.checked),
										className: "w-4 h-4 accent-amber-400"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "submit",
									className: "w-full min-h-[44px] py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs shadow-md transition-colors",
									children: "نشر الهدية في المتجر والغرف فوراً"
								})
							]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "lg:col-span-7 bg-[#101524] border border-white/10 rounded-3xl p-4 sm:p-5 shadow-xl space-y-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap items-center justify-between gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
									className: "font-bold text-sm text-white",
									children: [
										"هدايا السيرفر المفعلة (",
										gifts.filter((g) => !g.isStarterDefault && g.id !== "gift_starter_default").length,
										")"
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-[11px] text-slate-400",
									children: [
										"اضغط تعديل لإضافة رابط MP4 أو صورة ·",
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "text-emerald-300 font-semibold",
											children: [
												"تحديث فوري لجميع المستخدمين (",
												firebaseStatus.projectId,
												")"
											]
										})
									]
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									disabled: isPurgingMocks,
									onClick: async () => {
										setIsPurgingMocks(true);
										try {
											const msg = await purgeMockCatalogs();
											showAdminNotice(msg);
										} catch (err) {
											showAdminNotice(err?.message || "تعذر تنظيف العناصر الوهمية");
										} finally {
											setIsPurgingMocks(false);
										}
									},
									className: "min-h-[36px] px-3 rounded-xl bg-rose-500/15 hover:bg-rose-500/25 border border-rose-400/35 text-rose-200 text-[11px] font-bold transition-colors disabled:opacity-60",
									children: isPurgingMocks ? "جاري التنظيف..." : "تنظيف السيرفر من الوهميات"
								})]
							}),
							gifts.some((g) => g.isStarterDefault || g.id === "gift_starter_default") && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-3 rounded-2xl bg-amber-500/10 border border-amber-400/35 text-amber-200 text-xs leading-relaxed",
								children: [
									"تظهر ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
										className: "text-amber-300",
										children: "هدية ترحيب افتراضية واحدة"
									}),
									" في الغرف مؤقتاً حتى ترفع أول هدية فعلية من هنا — وتختفي تلقائياً بمجرد الرفع."
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid grid-cols-2 sm:grid-cols-3 gap-2.5 max-h-[540px] overflow-y-auto pr-0.5",
								children: gifts.map((g) => {
									const isStarter = Boolean(g.isStarterDefault || g.id === "gift_starter_default");
									return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: `p-3 rounded-2xl border flex flex-col items-center justify-between text-center text-xs space-y-2 ${isStarter ? "bg-amber-500/8 border-amber-400/35" : "bg-slate-950/90 border-white/8"}`,
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "w-full flex items-center justify-between text-[10px]",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-mono text-pink-300",
													children: isStarter ? "افتراضية مؤقتة" : g.isLucky || g.category === "lucky" ? "حظ 🍭" : ""
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "font-mono text-rose-300 flex items-center gap-1",
													children: [g.soundUrl && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-emerald-300",
														children: "🔊"
													}), g.videoUrl || g.imageUrl ? getMediaFormatLabel(g.videoUrl || g.imageUrl) : ""]
												})]
											}),
											g.imageUrl || g.videoUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SmartMediaView, {
												mode: "thumbnail",
												url: g.imageUrl || g.videoUrl,
												preferVideo: !g.imageUrl && Boolean(g.videoUrl),
												alt: g.nameAr,
												className: "w-12 h-12 rounded-xl object-contain bg-black border border-white/15",
												fallback: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-3xl leading-none my-1",
													children: g.icon
												})
											}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-3xl leading-none my-1",
												children: g.icon
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "w-full",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "font-bold text-white truncate",
													children: g.nameAr
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "font-mono tabular-nums text-amber-300 font-bold mt-0.5",
													children: [g.coinPrice.toLocaleString(), " عملة"]
												})]
											}),
											!isStarter && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-1.5 w-full pt-1",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
													type: "button",
													onClick: () => openEditGiftModal(g),
													className: "flex-1 min-h-[34px] rounded-lg bg-white/8 hover:bg-white/14 text-slate-200 text-[11px] font-bold flex items-center justify-center gap-1",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PenLine, { className: "w-3 h-3" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "روابط/تعديل" })]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													type: "button",
													onClick: () => {
														adminDeleteGift(g.id);
														showAdminNotice(`تم حذف الهدية (${g.nameAr}).`);
													},
													className: "w-8 min-h-[34px] rounded-lg bg-rose-500/15 hover:bg-rose-500/25 text-rose-300 flex items-center justify-center",
													title: "حذف الهدية",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "w-3.5 h-3.5" })
												})]
											})
										]
									}, g.id);
								})
							})
						]
					})]
				})]
			}),
			activeTab === "store" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-1 lg:grid-cols-12 gap-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: handleCreateStoreItem,
						className: "lg:col-span-5 bg-[#101524] border border-amber-400/25 rounded-3xl p-4 sm:p-5 space-y-3.5 shadow-xl",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
									className: "font-black text-sm sm:text-base text-amber-300 flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "w-4 h-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "رفع عنصر جديد للمتجر بالرابط" })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[11px] text-emerald-300 font-bold",
									children: "يظهر فوراً بالمتجر"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid grid-cols-2 sm:grid-cols-4 gap-1.5 text-xs",
								children: [
									{
										id: "entrance",
										label: "تأثير دخولية",
										emoji: "🚘"
									},
									{
										id: "frame",
										label: "إطار صورة/مايك",
										emoji: "🪽"
									},
									{
										id: "badge",
										label: "وسام / شارة",
										emoji: "🎖️"
									},
									{
										id: "bubble",
										label: "فقاعة دردشة",
										emoji: "💬"
									}
								].map((opt) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => {
										const nextType = opt.id;
										setNewStoreType(nextType);
										setNewStoreIcon(opt.emoji);
									},
									className: `min-h-[38px] px-2 rounded-xl border font-bold flex items-center justify-center gap-1 transition-all ${newStoreType === opt.id ? "bg-amber-400 text-slate-950 border-amber-300" : "bg-slate-950 text-slate-300 border-white/10 hover:bg-white/5"}`,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: opt.emoji }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "truncate",
										children: opt.label
									})]
								}, opt.id))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "sm:col-span-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "block text-slate-300 mb-1 font-semibold",
										children: "اسم العنصر:"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "text",
										required: true,
										value: newStoreName,
										onChange: (e) => setNewStoreName(e.target.value),
										placeholder: newStoreType === "entrance" ? "مثال: دخولية الأسد الذهبي VIP" : newStoreType === "frame" ? "مثال: إطار التاج الإمبراطوري" : "اسم العنصر في المتجر",
										className: "w-full min-h-[40px] bg-slate-950 border border-white/12 rounded-xl px-3 text-white focus:outline-none focus:border-amber-400"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "block text-slate-300 mb-1 font-semibold",
									children: "الأيقونة:"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "text",
									value: newStoreIcon,
									onChange: (e) => setNewStoreIcon(e.target.value),
									className: "w-full min-h-[40px] bg-slate-950 border border-white/12 rounded-xl px-2 text-center text-lg"
								})] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-2 gap-2.5 text-xs",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "block text-slate-300 mb-1 font-semibold",
									children: "السعر (عملة):"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "number",
									min: 0,
									step: 500,
									value: newStorePrice,
									onChange: (e) => setNewStorePrice(Math.max(0, Number(e.target.value) || 0)),
									className: "w-full min-h-[40px] bg-slate-950 border border-white/12 rounded-xl px-3 text-amber-300 font-mono tabular-nums font-bold focus:outline-none focus:border-amber-400"
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "block text-slate-300 mb-1 font-semibold",
									children: "المدة (بالأيام):"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "number",
									min: 1,
									max: 3650,
									value: newStoreDays,
									onChange: (e) => setNewStoreDays(Math.max(1, Number(e.target.value) || 30)),
									className: "w-full min-h-[40px] bg-slate-950 border border-white/12 rounded-xl px-3 text-cyan-300 font-mono tabular-nums font-bold focus:outline-none focus:border-cyan-400"
								})] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2.5 text-xs",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "block text-slate-300 mb-1 font-semibold flex items-center justify-between gap-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "flex items-center gap-1.5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image, { className: "w-3.5 h-3.5 text-sky-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: newStoreType === "frame" ? "رابط صورة الإطار (PNG / GIF / WebP / أي رابط):" : newStoreType === "entrance" ? "رابط صورة أو GIF / WebP الدخولية:" : "رابط صورة العنصر (PNG / GIF / WebP):" })]
										}), newStorePreviewUrl.trim() && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-mono text-[10px] text-sky-300",
											children: getMediaFormatLabel(newStorePreviewUrl)
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "text",
										dir: "ltr",
										value: newStorePreviewUrl,
										onChange: (e) => setNewStorePreviewUrl(e.target.value),
										placeholder: "https://example.com/item.png أو .gif أو .webp",
										className: "w-full min-h-[40px] bg-slate-950 border border-white/12 rounded-xl px-3 text-sky-300 font-mono text-left focus:outline-none focus:border-sky-400"
									})] }),
									newStoreType === "entrance" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "block text-slate-300 mb-1 font-semibold flex items-center justify-between gap-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "flex items-center gap-1.5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Video, { className: "w-3.5 h-3.5 text-purple-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "رابط حركة الدخولية (VAP / MP4 شفاف تلقائياً / WebM / APNG / GIF / WebP):" })]
										}), newStoreType === "entrance" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-mono text-[10px] text-purple-300",
											children: newStoreApngInfo && newStoreVideoUrl.trim() ? `APNG • ${(newStoreApngInfo.totalDurationMs / 1e3).toFixed(1)}ث` : newStoreVideoUrl.trim() ? getMediaFormatLabel(newStoreVideoUrl) : ""
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "text",
										dir: "ltr",
										value: newStoreVideoUrl,
										onChange: (e) => setNewStoreVideoUrl(e.target.value),
										placeholder: "https://example.com/entrance-vap.mp4 أو .vap أو .apng أو .gif",
										className: "w-full min-h-[40px] bg-slate-950 border border-white/12 rounded-xl px-3 text-purple-300 font-mono text-left focus:outline-none focus:border-purple-400"
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "block text-slate-300 mb-1 font-semibold",
										children: "مدة التشغيل بالثواني (اتركه فارغاً لكامل APNG/الفيديو):"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "number",
										min: 1,
										max: 120,
										value: newStoreEffectSec,
										onChange: (e) => setNewStoreEffectSec(e.target.value),
										placeholder: "تلقائي (كامل APNG/الفيديو)",
										className: "w-full min-h-[40px] bg-slate-950 border border-white/12 rounded-xl px-3 text-cyan-300 font-mono tabular-nums font-bold focus:outline-none focus:border-cyan-400 placeholder:text-[11px] placeholder:font-sans placeholder:text-slate-500"
									})] })] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "block text-slate-300 mb-1 font-semibold",
										children: "الوصف:"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "text",
										value: newStoreDesc,
										onChange: (e) => setNewStoreDesc(e.target.value),
										placeholder: "وصف مختصر يظهر في المتجر...",
										className: "w-full min-h-[38px] bg-slate-950 border border-white/12 rounded-xl px-3 text-white focus:outline-none focus:border-amber-400"
									})] })
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "p-3 rounded-2xl bg-slate-950/80 border border-white/10 flex items-center justify-center min-h-[112px]",
								children: newStoreType === "frame" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative w-24 h-24 flex items-center justify-center",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: currentUser.avatar,
										alt: "معاينة الإطار",
										referrerPolicy: "no-referrer",
										className: "w-16 h-16 rounded-full object-cover"
									}), newStorePreviewUrl.trim() ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: newStorePreviewUrl.trim(),
										alt: "الإطار",
										referrerPolicy: "no-referrer",
										className: "pointer-events-none absolute -inset-1 w-[calc(100%+8px)] h-[calc(100%+8px)] object-contain z-20"
									}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs text-slate-400 mr-3",
										children: "معاينة الإطار"
									})]
								}) : newStoreType === "entrance" && (newStoreVideoUrl.trim() || newStorePreviewUrl.trim()) ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SmartMediaView, {
									mode: "thumbnail",
									url: newStoreVideoUrl.trim() || newStorePreviewUrl.trim(),
									preferVideo: Boolean(newStoreVideoUrl.trim()),
									alt: "معاينة الدخولية",
									className: "w-full max-h-32 rounded-xl object-contain",
									fallback: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-3xl",
										children: newStoreIcon
									})
								}) : newStorePreviewUrl.trim() ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SmartMediaView, {
									mode: "thumbnail",
									url: newStorePreviewUrl.trim(),
									alt: "معاينة",
									className: "max-h-24 object-contain rounded-xl",
									fallback: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-3xl",
										children: newStoreIcon
									})
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-col items-center gap-1 text-slate-400 text-xs",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-3xl",
										children: newStoreIcon
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "معاينة حية للعنصر عند إضافة الرابط" })]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "submit",
								className: "w-full min-h-[44px] rounded-2xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs transition-colors shadow-lg shadow-amber-500/15",
								children: "رفع وإضافة إلى المتجر فوراً"
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "lg:col-span-7 bg-[#101524] border border-white/10 rounded-3xl p-4 sm:p-5 space-y-4 shadow-xl",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col sm:flex-row sm:items-center justify-between gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								className: "font-bold text-sm text-white",
								children: [
									"كتالوج المتجر الشامل (",
									storeItems.length,
									" عنصر)"
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									disabled: isPurgingMocks,
									onClick: async () => {
										setIsPurgingMocks(true);
										try {
											const msg = await purgeMockCatalogs();
											showAdminNotice(msg);
										} catch (err) {
											showAdminNotice(err?.message || "تعذر تنظيف العناصر الوهمية");
										} finally {
											setIsPurgingMocks(false);
										}
									},
									className: "min-h-[34px] px-3 rounded-xl bg-rose-500/15 hover:bg-rose-500/25 border border-rose-400/35 text-rose-200 text-[11px] font-bold transition-colors disabled:opacity-60",
									children: isPurgingMocks ? "جاري التنظيف..." : "تنظيف السيرفر من الوهميات"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex items-center gap-1.5 overflow-x-auto no-scrollbar text-[11px]",
									children: [
										{
											id: "all",
											label: `الكل (${storeItems.length})`
										},
										{
											id: "frame",
											label: `الإطارات (${storeItems.filter((i) => i.type === "frame").length})`
										},
										{
											id: "entrance",
											label: `الدخوليات (${storeItems.filter((i) => i.type === "entrance").length})`
										},
										{
											id: "badge",
											label: `الأوسمة (${storeItems.filter((i) => i.type === "badge").length})`
										},
										{
											id: "bubble",
											label: `الفقاعات (${storeItems.filter((i) => i.type === "bubble").length})`
										}
									].map((tab) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => setStoreFilter(tab.id),
										className: `px-3 py-1.5 rounded-xl font-bold whitespace-nowrap transition-colors ${storeFilter === tab.id ? "bg-amber-400 text-slate-950" : "bg-slate-950 text-slate-300 border border-white/10 hover:text-white"}`,
										children: tab.label
									}, tab.id))
								})]
							})]
						}), storeItems.filter((item) => storeFilter === "all" || item.type === storeFilter).length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-10 rounded-2xl bg-slate-950/60 border border-white/8 text-center text-xs text-slate-400 space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-3xl",
								children: "🛍️"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: "لا توجد عناصر متجر مرفوعة حالياً — استخدم النموذج الجانبي لإضافة إطارات أو دخوليات أو أوسمة من السيرفر." })]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid grid-cols-1 sm:grid-cols-2 gap-3.5 max-h-[700px] overflow-y-auto pr-1",
							children: storeItems.filter((item) => storeFilter === "all" || item.type === storeFilter).map((item) => {
								const draft = getStoreDraft(item);
								const isEquipped = item.type === "frame" && currentUser.activeFrameId === item.id || item.type === "entrance" && currentUser.activeEntranceId === item.id || item.type === "badge" && currentUser.activeBadgeId === item.id || item.type === "bubble" && currentUser.activeBubbleId === item.id;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: `p-3.5 rounded-2xl border flex flex-col justify-between space-y-3 ${isEquipped ? "bg-[#141b30] border-amber-400/60 shadow-lg" : "bg-slate-950/75 border-white/10"}`,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-3",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center justify-between gap-2 text-[11px]",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "px-2 py-0.5 rounded-lg bg-white/8 text-amber-300 font-bold",
													children: {
														frame: "إطار",
														entrance: "دخولية",
														badge: "وسام",
														bubble: "فقاعة"
													}[item.type]
												}), isEquipped && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "px-2 py-0.5 rounded-lg bg-emerald-500/20 text-emerald-300 font-bold",
													children: "مفعل على حسابك"
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "flex items-center justify-center py-2.5 bg-[#0a0e1a] rounded-xl border border-white/8 min-h-[96px]",
												children: item.type === "frame" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "relative w-20 h-20 flex items-center justify-center",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
														src: currentUser.avatar,
														alt: draft.nameAr,
														referrerPolicy: "no-referrer",
														className: "w-14 h-14 rounded-full object-cover"
													}), draft.previewUrl.trim() ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
														src: draft.previewUrl.trim(),
														alt: draft.nameAr,
														referrerPolicy: "no-referrer",
														className: "pointer-events-none absolute -inset-1.5 w-[calc(100%+12px)] h-[calc(100%+12px)] object-contain z-20"
													}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "absolute -top-2 -left-1 text-2xl",
														children: item.icon
													})]
												}) : item.type === "entrance" && (draft.videoUrl.trim() || draft.previewUrl.trim()) ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SmartMediaView, {
													mode: "thumbnail",
													url: draft.videoUrl.trim() || draft.previewUrl.trim(),
													preferVideo: Boolean(draft.videoUrl.trim()),
													alt: draft.nameAr,
													className: "w-full h-24 rounded-lg object-contain",
													fallback: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-4xl",
														children: item.icon
													})
												}) : draft.previewUrl.trim() ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SmartMediaView, {
													mode: "thumbnail",
													url: draft.previewUrl.trim(),
													alt: draft.nameAr,
													className: "h-20 object-contain rounded-lg",
													fallback: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-4xl",
														children: item.icon
													})
												}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-4xl",
													children: item.icon
												})
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "space-y-2 text-xs",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
														type: "text",
														value: draft.nameAr,
														onChange: (e) => setStoreField(item, { nameAr: e.target.value }),
														className: "w-full min-h-[36px] bg-slate-900 border border-white/10 rounded-xl px-2.5 text-white font-bold focus:outline-none focus:border-amber-400"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
														type: "text",
														dir: "ltr",
														value: draft.previewUrl,
														onChange: (e) => setStoreField(item, { previewUrl: e.target.value }),
														placeholder: "رابط الصورة / GIF / WebP / PNG",
														className: "w-full min-h-[36px] bg-slate-900 border border-white/10 rounded-xl px-2.5 text-sky-300 font-mono text-left text-[11px] focus:outline-none focus:border-sky-400"
													}),
													item.type === "entrance" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
														type: "text",
														dir: "ltr",
														value: draft.videoUrl,
														onChange: (e) => setStoreField(item, { videoUrl: e.target.value }),
														placeholder: "رابط الدخولية (MP4 / WebM / GIF / WebP)",
														className: "w-full min-h-[36px] bg-slate-900 border border-white/10 rounded-xl px-2.5 text-purple-300 font-mono text-left text-[11px] focus:outline-none focus:border-purple-400"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "flex items-center justify-between gap-2 bg-slate-900 border border-white/10 rounded-xl px-2.5 min-h-[34px]",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "text-[10px] text-slate-400",
															children: "المدة (ث / تلقائي):"
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
															type: "number",
															min: 1,
															max: 120,
															value: draft.effectDurationSec,
															onChange: (e) => setStoreField(item, { effectDurationSec: e.target.value }),
															placeholder: "تلقائي",
															title: "اتركه فارغاً لتعمل الدخولية (APNG / فيديو) بكامل مدتها",
															className: "w-16 bg-transparent text-left text-cyan-300 font-mono tabular-nums font-bold focus:outline-none placeholder:text-[10px] placeholder:font-sans placeholder:text-slate-500"
														})]
													})] }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "grid grid-cols-2 gap-2",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
															type: "number",
															min: 0,
															step: 500,
															value: draft.priceCoins,
															onChange: (e) => setStoreField(item, { priceCoins: Math.max(0, Number(e.target.value) || 0) }),
															title: "السعر",
															className: "w-full min-h-[36px] bg-slate-900 border border-white/10 rounded-xl px-2.5 text-amber-300 font-mono tabular-nums font-bold focus:outline-none focus:border-amber-400"
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
															type: "number",
															min: 1,
															value: draft.durationDays,
															onChange: (e) => setStoreField(item, { durationDays: Math.max(1, Number(e.target.value) || 30) }),
															title: "المدة بالأيام",
															className: "w-full min-h-[36px] bg-slate-900 border border-white/10 rounded-xl px-2.5 text-cyan-300 font-mono tabular-nums font-bold focus:outline-none focus:border-cyan-400"
														})]
													})
												]
											})
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-1.5 pt-2 border-t border-white/10",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-1.5",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													type: "button",
													onClick: () => {
														adminUpdateStoreItem(item.id, {
															nameAr: draft.nameAr.trim() || item.nameAr,
															previewUrl: draft.previewUrl.trim(),
															videoUrl: item.type === "entrance" ? draft.videoUrl.trim() || void 0 : void 0,
															effectDurationSec: item.type === "entrance" ? parseOptionalDurationSec(draft.effectDurationSec) : void 0,
															priceCoins: Math.max(0, draft.priceCoins),
															durationDays: Math.max(1, draft.durationDays)
														});
														showAdminNotice(`تم حفظ (${draft.nameAr}) وتحديثه في المتجر فوراً.`);
													},
													className: "flex-1 min-h-[36px] rounded-xl bg-white/10 hover:bg-white/16 text-white font-bold text-[11px] transition-colors",
													children: "حفظ"
												}),
												item.type === "entrance" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
													type: "button",
													onClick: () => {
														const previewItem = {
															...item,
															nameAr: draft.nameAr.trim() || item.nameAr,
															previewUrl: draft.previewUrl.trim(),
															videoUrl: draft.videoUrl.trim() || void 0,
															effectDurationSec: parseOptionalDurationSec(draft.effectDurationSec)
														};
														setPreviewingEntrance(previewItem);
														triggerEntranceEffect(previewItem);
													},
													className: "min-h-[36px] px-2.5 rounded-xl bg-purple-500/20 hover:bg-purple-500/30 border border-purple-400/40 text-purple-200 font-bold text-[11px] flex items-center gap-1",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "w-3 h-3" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "معاينة" })]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													type: "button",
													onClick: () => {
														adminDeleteStoreItem(item.id);
														showAdminNotice(`تم حذف (${item.nameAr}) من المتجر.`);
													},
													className: "w-9 min-h-[36px] rounded-xl bg-rose-500/15 hover:bg-rose-500/25 text-rose-300 flex items-center justify-center shrink-0",
													title: "حذف من المتجر",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "w-3.5 h-3.5" })
												})
											]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											onClick: () => {
												const updatedPayload = {
													nameAr: draft.nameAr.trim() || item.nameAr,
													previewUrl: draft.previewUrl.trim(),
													videoUrl: item.type === "entrance" ? draft.videoUrl.trim() || void 0 : void 0,
													effectDurationSec: item.type === "entrance" ? parseOptionalDurationSec(draft.effectDurationSec) : void 0,
													priceCoins: Math.max(0, draft.priceCoins),
													durationDays: Math.max(1, draft.durationDays)
												};
												adminUpdateStoreItem(item.id, updatedPayload);
												equipInventoryItem(item.type, item.id, true);
												showAdminNotice(`تم حفظ وتفعيل (${draft.nameAr}) على حسابك الآن!`);
											},
											className: "w-full min-h-[38px] rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-[11px] transition-colors",
											children: "حفظ وتفعيل الآن"
										})]
									})]
								}, item.id);
							})
						})]
					})]
				}), previewingEntrance && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4",
					onClick: () => setPreviewingEntrance(null),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative w-full max-w-md aspect-[9/16] max-h-[82dvh] rounded-3xl overflow-hidden bg-[#0a0e1a] border border-amber-400/40 shadow-2xl flex flex-col items-center justify-center",
						onClick: (e) => e.stopPropagation(),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setPreviewingEntrance(null),
								className: "absolute top-3 left-3 z-30 w-9 h-9 rounded-full bg-black/60 text-white flex items-center justify-center",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "w-5 h-5" })
							}),
							(() => {
								const resolved = resolveEntranceStageMedia(previewingEntrance);
								if (resolved.primaryUrl) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SmartMediaView, {
									mode: "stage",
									url: resolved.primaryUrl,
									fallbackUrl: previewingEntrance.previewUrl,
									preferVideo: resolved.preferVideo,
									alt: previewingEntrance.nameAr,
									loop: true
								});
								return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-7xl animate-bounce",
									children: previewingEntrance.icon
								});
							})(),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative z-20 mt-auto mb-8 px-4 py-2.5 rounded-2xl bg-gradient-to-r from-[#1d1408]/95 via-[#31210d]/95 to-[#1d1408]/95 border border-amber-400/60 flex items-center gap-3 shadow-2xl",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: currentUser.avatar,
									alt: currentUser.displayName,
									referrerPolicy: "no-referrer",
									className: "w-10 h-10 rounded-full object-cover border border-amber-400"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-right text-xs",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-black text-amber-300",
										children: currentUser.displayName
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "text-slate-200",
										children: ["دخل الغرفة بـ ", previewingEntrance.nameAr]
									})]
								})]
							})
						]
					})
				})]
			}),
			activeTab === "users" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 lg:grid-cols-12 gap-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-5 bg-[#101524] border border-white/10 rounded-3xl p-4 sm:p-5 shadow-xl space-y-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "w-4 h-4 text-slate-400 absolute top-1/2 -translate-y-1/2 right-3" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "text",
							value: userSearch,
							onChange: (e) => setUserSearch(e.target.value),
							placeholder: "بحث برقم ID أو الاسم...",
							className: "w-full min-h-[42px] bg-slate-950 border border-white/12 rounded-2xl pr-9 pl-3 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-amber-400"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-2 max-h-96 overflow-y-auto",
						children: filteredUsers.map((u) => {
							const isSelected = selectedUserId === u.id;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => setSelectedUserId(u.id),
								className: `w-full p-3 rounded-2xl border flex items-center justify-between gap-2 text-xs text-right transition-all ${isSelected ? "bg-amber-400/15 border-amber-400/60 text-white" : "bg-slate-950/70 border-white/8 text-slate-300 hover:bg-white/[0.06]"}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2.5 min-w-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: u.avatar,
										alt: u.displayName,
										referrerPolicy: "no-referrer",
										className: "w-9 h-9 rounded-full object-cover shrink-0"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "min-w-0",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "font-bold text-white truncate",
											children: [
												u.displayName,
												" · ",
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "text-amber-300",
													children: ["VIP ", u.vipLevel]
												})
											]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "text-[11px] text-slate-400 font-mono",
											children: ["ID: ", u.userCode]
										})]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-left shrink-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-mono tabular-nums font-bold text-amber-300",
										children: u.coins.toLocaleString()
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[10px] text-slate-500",
										children: "عملة"
									})]
								})]
							}, u.id);
						})
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "lg:col-span-7 bg-[#101524] border border-white/10 rounded-3xl p-4 sm:p-6 shadow-xl space-y-5",
					children: selectedUser ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3 min-w-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: selectedUser.avatar,
									alt: selectedUser.displayName,
									referrerPolicy: "no-referrer",
									className: "w-12 h-12 rounded-full object-cover ring-2 ring-amber-400 shrink-0"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-black text-base text-white truncate",
										children: selectedUser.displayName
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "text-xs text-amber-300 font-mono truncate",
										children: [
											"ID: ",
											selectedUser.userCode,
											" · المستوى ",
											selectedUser.level,
											" · VIP",
											" ",
											selectedUser.vipLevel
										]
									})]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => adminToggleMute(selectedUser.id),
									className: `flex-1 sm:flex-none min-h-[40px] px-3 py-1.5 rounded-xl text-xs font-bold transition-colors ${selectedUser.isMuted ? "bg-rose-600 text-white" : "bg-white/8 text-slate-200 hover:bg-white/14"}`,
									children: selectedUser.isMuted ? "إلغاء الكتم" : "كتم"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => adminToggleBan(selectedUser.id),
									className: `flex-1 sm:flex-none min-h-[40px] px-3 py-1.5 rounded-xl text-xs font-bold transition-colors ${selectedUser.isBanned ? "bg-rose-600 text-white" : "bg-white/8 text-slate-200 hover:text-rose-300"}`,
									children: selectedUser.isBanned ? "فك الحظر" : "حظر"
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "block text-xs font-semibold text-slate-300 mb-2",
							children: "تعيين رتبة VIP فورياً:"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1",
							children: [
								0,
								1,
								3,
								5,
								7,
								10,
								12,
								15
							].map((lvl) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => adminSetVipLevel(selectedUser.id, lvl),
								className: `min-h-[38px] px-3 py-1.5 rounded-xl text-xs font-bold shrink-0 transition-all ${selectedUser.vipLevel === lvl ? "bg-amber-400 text-slate-950 font-black shadow-md" : "bg-slate-950 border border-white/10 text-slate-300 hover:text-white"}`,
								children: ["VIP ", lvl]
							}, lvl))
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							onSubmit: handleAdjustBalance,
							className: "space-y-4 pt-3 border-t border-white/10",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
									className: "font-bold text-xs text-white",
									children: "تعديل رصيد المحفظة:"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid grid-cols-1 sm:grid-cols-2 gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "block text-[11px] text-slate-400 mb-1",
										children: "العملات الذهبية (+ أو -):"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "number",
										step: "10000",
										value: adjustCoins,
										onChange: (e) => setAdjustCoins(Number(e.target.value)),
										className: "w-full min-h-[42px] bg-slate-950 border border-white/12 rounded-xl px-3 text-xs text-amber-300 font-mono tabular-nums font-bold focus:outline-none focus:border-amber-400"
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "block text-[11px] text-slate-400 mb-1",
										children: "الألماس (+ أو -):"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "number",
										step: "5000",
										value: adjustDiamonds,
										onChange: (e) => setAdjustDiamonds(Number(e.target.value)),
										className: "w-full min-h-[42px] bg-slate-950 border border-white/12 rounded-xl px-3 text-xs text-cyan-300 font-mono tabular-nums font-bold focus:outline-none focus:border-amber-400"
									})] })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "block text-[11px] text-slate-400 mb-1",
									children: "سبب التعديل:"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "text",
									required: true,
									value: adjustNote,
									onChange: (e) => setAdjustNote(e.target.value),
									className: "w-full min-h-[42px] bg-slate-950 border border-white/12 rounded-xl px-3 text-xs text-white focus:outline-none focus:border-amber-400"
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "submit",
									className: "w-full min-h-[44px] py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs shadow-lg transition-colors",
									children: "تطبيق التعديل المالي في المحفظة"
								})
							]
						})
					] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-center py-12 text-slate-500 text-xs",
						children: "اختر مستخدماً من القائمة"
					})
				})]
			}),
			activeTab === "rooms" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-1 lg:grid-cols-12 gap-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: (e) => {
							e.preventDefault();
							if (!newBgUrl.trim()) return;
							const created = adminCreateRoomBackground({
								nameAr: newBgName.trim() || `خلفية غرفة #${roomBackgrounds.length + 1}`,
								imageUrl: newBgUrl.trim()
							});
							setNewBgName("");
							setNewBgUrl("");
							showAdminNotice(`تم رفع الخلفية (${created.nameAr}) وتظهر الآن للمستخدمين داخل الغرف!`);
						},
						className: "lg:col-span-5 bg-[#101524] border border-amber-400/25 rounded-3xl p-4 sm:p-5 space-y-3.5 shadow-xl",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
								className: "font-black text-sm sm:text-base text-amber-300 flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image, { className: "w-4 h-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "رفع خلفية غرفة جديدة بالرابط" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[11px] text-emerald-300 font-bold",
								children: "تظهر فوراً بالغرف"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-3 text-xs",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "block text-slate-300 mb-1 font-semibold",
									children: "اسم الخلفية:"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "text",
									required: true,
									value: newBgName,
									onChange: (e) => setNewBgName(e.target.value),
									placeholder: "مثال: قاعة القصر الذهبي / سهرة النيون",
									className: "w-full min-h-[40px] bg-slate-950 border border-white/12 rounded-xl px-3 text-white focus:outline-none focus:border-amber-400"
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "flex items-center justify-between text-slate-300 mb-1 font-semibold",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "flex items-center gap-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link2, { className: "w-3.5 h-3.5 text-sky-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "رابط صورة الخلفية (PNG / JPG / GIF / WebP):" })]
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "url",
									required: true,
									dir: "ltr",
									value: newBgUrl,
									onChange: (e) => setNewBgUrl(e.target.value),
									placeholder: "https://example.com/room-wallpaper.jpg",
									className: "w-full min-h-[42px] bg-slate-950 border border-white/12 rounded-xl px-3 text-sky-300 font-mono text-left focus:outline-none focus:border-sky-400"
								})] }),
								newBgUrl.trim() && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative h-32 rounded-2xl overflow-hidden border border-white/12 bg-slate-950",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: newBgUrl.trim(),
										alt: newBgName || "معاينة الخلفية",
										referrerPolicy: "no-referrer",
										className: "w-full h-full object-cover"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "absolute inset-x-0 bottom-0 px-3 py-1.5 bg-black/70 text-[11px] font-bold text-white flex items-center justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "truncate",
											children: newBgName.trim() || "معاينة مباشرة"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-emerald-300 font-mono text-[10px]",
											children: "PREVIEW"
										})]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "submit",
									className: "w-full min-h-[44px] py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs shadow-md transition-colors flex items-center justify-center gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "w-4 h-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "إضافة الخلفية للغرف فوراً" })]
								})
							]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "lg:col-span-7 bg-[#101524] border border-white/10 rounded-3xl p-4 sm:p-5 shadow-xl space-y-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
								className: "font-bold text-sm text-white",
								children: [
									"خلفيات الغرف المرفوعة بالروابط (",
									roomBackgrounds.length,
									")"
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[11px] text-slate-400",
								children: "تظهر للمالك والمشرفين في إعدادات الغرفة للاختيار منها"
							})]
						}), roomBackgrounds.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "py-10 rounded-2xl bg-slate-950/70 border border-white/8 text-center space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-3xl opacity-80",
								children: "🖼️"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-slate-400",
								children: "لم يتم رفع خلفيات مخصصة بعد — أضف رابط صورة من النموذج وسيظهر فوراً في جميع الغرف."
							})]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid grid-cols-2 sm:grid-cols-3 gap-3 max-h-[340px] overflow-y-auto pr-0.5",
							children: roomBackgrounds.map((bg) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "group relative rounded-2xl overflow-hidden border border-white/12 bg-slate-950 flex flex-col",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative h-28 w-full overflow-hidden",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: bg.imageUrl,
										alt: bg.nameAr,
										referrerPolicy: "no-referrer",
										className: "w-full h-full object-cover"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => {
											adminDeleteRoomBackground(bg.id);
											showAdminNotice(`تم حذف الخلفية (${bg.nameAr}).`);
										},
										className: "absolute top-2 left-2 w-8 h-8 rounded-xl bg-rose-600/85 hover:bg-rose-500 text-white flex items-center justify-center shadow-lg transition-colors",
										title: "حذف الخلفية",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "w-3.5 h-3.5" })
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "p-2.5 text-right space-y-0.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-xs font-bold text-white truncate",
										children: bg.nameAr
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-[10px] font-mono text-sky-300/80 truncate",
										dir: "ltr",
										children: bg.imageUrl
									})]
								})]
							}, bg.id))
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4",
					children: rooms.map((room) => {
						const roomMods = (room.moderators || []).filter((id) => id !== room.ownerId);
						const candidateUsers = users.filter((u) => u.id !== room.ownerId);
						const selectedTargetId = roomModTargetUserByRoom[room.id] || candidateUsers[0]?.id || "";
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-4 sm:p-5 rounded-3xl bg-[#101524] border border-white/10 flex flex-col justify-between space-y-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between text-xs gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "font-mono text-amber-300",
											children: ["ID: ", room.roomNo]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: `px-2 py-0.5 rounded-lg text-[10px] font-bold ${room.isLocked ? "bg-rose-500/20 text-rose-300" : room.type === "password" ? "bg-amber-500/20 text-amber-300" : room.type === "vip" ? "bg-purple-500/20 text-purple-300" : "bg-emerald-500/15 text-emerald-300"}`,
											children: room.isLocked ? "🔒 مقفلة" : room.type === "password" ? "🔑 برمز مرور" : room.type === "vip" ? "👑 VIP" : "عامة"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
										className: "font-bold text-sm text-white",
										children: room.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "text-xs text-slate-400",
										children: ["المالك: ", room.ownerName]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between text-xs",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "text-cyan-300 font-mono",
											children: ["المتواجدين: ", room.onlineViewersCount]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "text-amber-300/90 font-semibold",
											children: ["المشرفون: ", roomMods.length]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "pt-2 border-t border-white/8 space-y-2",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "text-[11px] font-bold text-slate-300 flex items-center gap-1.5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "w-3.5 h-3.5 text-amber-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "منح / سحب إشراف الغرفة:" })]
											}),
											candidateUsers.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-1.5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
													value: selectedTargetId,
													onChange: (e) => setRoomModTargetUserByRoom((prev) => ({
														...prev,
														[room.id]: e.target.value
													})),
													className: "flex-1 min-w-0 h-9 rounded-xl bg-slate-950 border border-white/12 px-2 text-[11px] text-white focus:outline-none focus:border-amber-400",
													children: candidateUsers.map((u) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", {
														value: u.id,
														children: [
															u.displayName,
															" (",
															u.userCode,
															")"
														]
													}, u.id))
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
													type: "button",
													onClick: () => {
														if (!selectedTargetId) return;
														const res = adminToggleRoomModerator(room.id, selectedTargetId);
														showAdminNotice(res.message);
													},
													className: "h-9 px-2.5 rounded-xl bg-amber-400/15 hover:bg-amber-400/25 border border-amber-400/40 text-amber-300 text-[11px] font-bold shrink-0 flex items-center gap-1",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserPlus, { className: "w-3.5 h-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: roomMods.includes(selectedTargetId) ? "سحب" : "منح إشراف" })]
												})]
											}),
											roomMods.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "flex flex-wrap gap-1.5",
												children: roomMods.map((modId) => {
													const modUser = users.find((u) => u.id === modId);
													return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
														type: "button",
														onClick: () => {
															const res = adminToggleRoomModerator(room.id, modId);
															showAdminNotice(res.message);
														},
														className: "px-2 py-0.5 rounded-lg bg-indigo-500/20 hover:bg-rose-500/25 border border-indigo-400/30 text-[10px] text-indigo-200 flex items-center gap-1",
														title: "اضغط لسحب الإشراف",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["🛡️ ", modUser?.displayName || modId] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "w-2.5 h-2.5" })]
													}, modId);
												})
											})
										]
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "pt-3 border-t border-white/10 flex items-center justify-between gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-xs font-mono tabular-nums text-slate-400",
									children: [
										"الألماس: ",
										(room.totalDiamondsEarned / 1e3).toFixed(0),
										"K"
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => {
										adminCloseRoom(room.id);
										showAdminNotice(`تم إغلاق الغرفة (${room.title}).`);
									},
									className: "min-h-[38px] px-3 py-1.5 rounded-xl bg-rose-500/20 text-rose-300 hover:bg-rose-500/30 text-xs font-bold",
									children: "إغلاق الغرفة"
								})]
							})]
						}, room.id);
					})
				})]
			}),
			activeTab === "agents" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-4 sm:p-5 rounded-3xl bg-[#101524] border border-white/10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-bold text-sm text-white mb-3",
						children: "تأسيس وكيل شحن جديد وتخصيص رصيده:"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: handleCreateAgent,
						className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "text",
								required: true,
								value: newAgentName,
								onChange: (e) => setNewAgentName(e.target.value),
								placeholder: "اسم الوكيل / المكتب",
								className: "min-h-[42px] bg-slate-950 border border-white/12 rounded-xl px-3 text-xs text-white focus:outline-none focus:border-teal-400"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "number",
								step: "500000",
								value: newAgentBalance,
								onChange: (e) => setNewAgentBalance(Number(e.target.value)),
								placeholder: "الرصيد المبدئي",
								className: "min-h-[42px] bg-slate-950 border border-white/12 rounded-xl px-3 text-xs text-amber-300 font-mono focus:outline-none focus:border-teal-400"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "number",
								step: "0.5",
								value: newAgentRate,
								onChange: (e) => setNewAgentRate(Number(e.target.value)),
								placeholder: "نسبة العمولة %",
								className: "min-h-[42px] bg-slate-950 border border-white/12 rounded-xl px-3 text-xs text-emerald-300 font-mono focus:outline-none focus:border-teal-400"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "submit",
								className: "min-h-[42px] py-2 px-4 rounded-xl bg-teal-400 hover:bg-teal-300 text-slate-950 font-black text-xs shadow-md transition-colors",
								children: "إنشاء واعتماد الوكيل"
							})
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-1 md:grid-cols-2 gap-4",
					children: agents.map((ag) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-4 sm:p-5 rounded-3xl bg-[#101524] border border-white/10 flex flex-col justify-between space-y-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-bold text-sm text-white truncate",
								children: ag.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs font-mono text-teal-400 shrink-0",
								children: ag.agentCode
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-3 gap-2 my-3 text-center text-xs",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "p-2.5 rounded-xl bg-slate-950",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[10px] text-slate-400 block",
										children: "الرصيد المتاح"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-mono tabular-nums font-bold text-amber-300 mt-0.5 truncate",
										children: ag.balanceCoins.toLocaleString()
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "p-2.5 rounded-xl bg-slate-950",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[10px] text-slate-400 block",
										children: "إجمالي الشحن"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-mono tabular-nums font-bold text-slate-200 mt-0.5 truncate",
										children: ag.totalRechargedCoins.toLocaleString()
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "p-2.5 rounded-xl bg-slate-950",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[10px] text-slate-400 block",
										children: "العمولة"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "font-mono tabular-nums font-bold text-emerald-400 mt-0.5",
										children: [ag.commissionRate, "%"]
									})]
								})
							]
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => {
								adminTopupAgent(ag.id, 1e6);
								showAdminNotice(`تمت إضافة 1,000,000 عملة لرصيد الوكيل ${ag.name}.`);
							},
							className: "w-full min-h-[42px] py-2 rounded-xl bg-white/8 hover:bg-white/14 text-teal-300 text-xs font-bold transition-colors",
							children: "+ شحن 1,000,000 عملة إضافية للوكيل"
						})]
					}, ag.id))
				})]
			}),
			activeTab === "agencies" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-1 md:grid-cols-2 gap-4",
				children: agencies.map((agency) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-4 sm:p-5 rounded-3xl bg-[#101524] border border-white/10 flex flex-col justify-between space-y-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-2xl shrink-0",
								children: agency.logo
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
								className: "font-bold text-sm text-white truncate",
								children: agency.name
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: `text-xs font-bold shrink-0 ${agency.status === "active" ? "text-emerald-400" : "text-rose-400"}`,
							children: agency.status === "active" ? "نشطة" : "معلقة"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-xs text-slate-400 mt-2",
						children: [
							"المالك: ",
							agency.ownerName,
							" · العمولة:",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-amber-300 font-mono",
								children: [agency.commissionRate, "%"]
							})
						]
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "pt-3 border-t border-white/10 flex items-center justify-between text-xs",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-slate-300 font-mono",
							children: ["المضيفين: ", agency.hostCount]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => {
								const nextStatus = agency.status === "active" ? "suspended" : "active";
								adminUpdateAgencyStatus(agency.id, nextStatus);
							},
							className: "min-h-[38px] px-3.5 py-1.5 rounded-xl bg-white/8 hover:bg-white/14 text-slate-200 font-bold",
							children: agency.status === "active" ? "إيقاف مؤقت" : "تفعيل الوكالة"
						})]
					})]
				}, agency.id))
			}),
			activeTab === "staff" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "p-4 rounded-2xl bg-indigo-500/10 border border-indigo-400/25 text-xs text-indigo-200",
					children: "نظام الصلاحيات الموزعة (RBAC): لكل مشرف وموظف صلاحيات واضحة ومستقلة."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-1 md:grid-cols-2 gap-3",
					children: staff.map((member) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-4 rounded-2xl bg-[#101524] border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3 min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "w-10 h-10 rounded-xl bg-white/8 flex items-center justify-center font-bold text-amber-400 shrink-0",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shield, { className: "w-5 h-5" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-bold text-white truncate",
									children: member.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-slate-400 truncate",
									children: [
										"@",
										member.username,
										" · ",
										member.lastActive
									]
								})]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs font-bold text-indigo-300 shrink-0",
							children: member.role
						})]
					}, member.id))
				})]
			}),
			activeTab === "ledger" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "bg-[#101524] border border-white/10 rounded-3xl p-4 sm:p-5 shadow-xl space-y-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
					className: "font-bold text-sm text-white flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(History, { className: "w-4 h-4 text-cyan-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
						"السجل المالي العام للعمليات (",
						transactions.length,
						")"
					] })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-2 max-h-[480px] overflow-y-auto",
					children: transactions.map((tx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-3 rounded-2xl bg-slate-950/90 border border-white/8 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-bold text-white break-words",
								children: tx.details
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-[11px] text-slate-400 font-mono mt-0.5",
								children: [
									tx.userName,
									" · ",
									tx.timestamp
								]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex sm:flex-col items-center sm:items-end gap-3 sm:gap-0.5 shrink-0",
							children: [tx.coinsDelta !== 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: `font-mono tabular-nums font-bold ${tx.coinsDelta > 0 ? "text-emerald-400" : "text-rose-400"}`,
								children: [
									tx.coinsDelta > 0 ? `+${tx.coinsDelta.toLocaleString()}` : tx.coinsDelta.toLocaleString(),
									" ",
									"عملة"
								]
							}), tx.diamondsDelta !== 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "font-mono tabular-nums font-bold text-cyan-300",
								children: [
									tx.diamondsDelta > 0 ? `+${tx.diamondsDelta.toLocaleString()}` : tx.diamondsDelta.toLocaleString(),
									" ",
									"ألماس"
								]
							})]
						})]
					}, tx.id))
				})]
			}),
			activeTab === "firebase" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-5 rounded-3xl bg-gradient-to-br from-[#10192b] via-[#0e1524] to-[#0b101d] border border-emerald-500/30 shadow-xl space-y-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col sm:flex-row sm:items-center justify-between gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "w-12 h-12 rounded-2xl bg-emerald-500/15 border border-emerald-400/40 flex items-center justify-center text-emerald-400 shrink-0",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Database, { className: "w-6 h-6" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2 flex-wrap",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "text-base font-black text-white",
											children: "قاعدة بيانات Firebase المتصلة"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: `px-2.5 py-0.5 rounded-full text-[11px] font-bold border ${firebaseStatus.isConnected ? "bg-emerald-500/15 text-emerald-300 border-emerald-400/40" : "bg-amber-500/15 text-amber-300 border-amber-400/40"}`,
											children: firebaseStatus.isConnected ? "● متصل بنجاح" : firebaseStatus.isTesting ? "● جاري التحقق..." : "● جاري الربط"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-xs text-slate-400 mt-1 font-mono",
										dir: "ltr",
										children: [
											"Project: ",
											firebaseStatus.projectId,
											" · DB: ",
											firebaseStatus.databaseId,
											firebaseStatus.latencyMs !== void 0 ? ` · ${firebaseStatus.latencyMs}ms` : ""
										]
									})] })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-wrap items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => void testCloudConnection(),
										disabled: firebaseStatus.isTesting,
										className: "min-h-[42px] px-4 py-2 rounded-xl bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-400/40 text-emerald-200 text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wifi, { className: "w-4 h-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: firebaseStatus.isTesting ? "جاري الفحص..." : "اختبار الاتصال المباشر" })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => void syncAllDataToCloud(),
										disabled: isCloudSyncing,
										className: "min-h-[42px] px-4 py-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 text-xs font-black flex items-center gap-1.5 transition-colors cursor-pointer disabled:opacity-60",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, { className: `w-4 h-4 ${isCloudSyncing ? "animate-spin" : ""}` }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: isCloudSyncing ? "جاري المزامنة..." : "مزامنة البيانات إلى Firestore" })]
									})]
								})]
							}),
							(cloudMessage || firebaseStatus.message) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "p-3 rounded-2xl bg-slate-950/80 border border-white/10 text-xs text-emerald-300 font-semibold",
								children: cloudMessage || firebaseStatus.message
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-4 rounded-2xl bg-slate-950/70 border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xs font-bold text-white",
									children: "حالة المصادقة السحابية (Google Auth)"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-[11px] text-slate-400 mt-0.5",
									children: firebaseUser ? `متصل بالحساب: ${firebaseUser.email || firebaseUser.displayName}` : "سجّل الدخول بحساب Google لتفعيل الكتابة والمزامنة السحابية التلقائية عبر الأجهزة"
								})] }), firebaseUser ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => void signOutCloud(),
									className: "min-h-[40px] px-4 py-2 rounded-xl bg-rose-500/15 hover:bg-rose-500/25 border border-rose-400/30 text-rose-300 text-xs font-bold flex items-center gap-1.5 cursor-pointer shrink-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { className: "w-4 h-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "تسجيل الخروج" })]
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => void signInWithGoogleCloud(),
									disabled: isCloudSyncing,
									className: "min-h-[40px] px-4 py-2 rounded-xl bg-indigo-500 hover:bg-indigo-400 text-white text-xs font-bold flex items-center gap-1.5 cursor-pointer shrink-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogIn, { className: "w-4 h-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "ربط بحساب Google" })]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "p-3 rounded-2xl bg-slate-950/80 border border-white/8",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-slate-400 font-mono text-[11px]",
											children: "auravoice_users"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-white font-black text-base mt-1",
											children: users.length
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "p-3 rounded-2xl bg-slate-950/80 border border-white/8",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-slate-400 font-mono text-[11px]",
											children: "auravoice_rooms"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-amber-300 font-black text-base mt-1",
											children: rooms.length
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "p-3 rounded-2xl bg-slate-950/80 border border-white/8",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-slate-400 font-mono text-[11px]",
											children: "auravoice_gifts"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-pink-300 font-black text-base mt-1",
											children: gifts.length
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "p-3 rounded-2xl bg-slate-950/80 border border-white/8",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-slate-400 font-mono text-[11px]",
											children: "auravoice_transactions"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-cyan-300 font-black text-base mt-1",
											children: transactions.length
										})]
									})
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-5 rounded-3xl bg-gradient-to-br from-[#13192b] via-[#101524] to-[#0b101d] border border-amber-400/25 shadow-xl space-y-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-3.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "w-11 h-11 rounded-2xl bg-amber-400/15 border border-amber-400/40 flex items-center justify-center text-amber-300 shrink-0",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "w-5 h-5" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-sm sm:text-base font-black text-white",
										children: "حساب لوحة التحكم (البريد الإلكتروني وكلمة السر)"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-xs text-slate-400 mt-0.5",
										children: [
											"البريد النشط حالياً:",
											" ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-mono text-amber-300",
												dir: "ltr",
												children: adminSession?.email || adminAuthStatus?.emailHint || adminEmail
											})
										]
									})] })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-400/35 text-emerald-300 text-[11px] font-bold self-start sm:self-auto",
									children: "حساب إدارة واحد نظيف"
								})]
							}),
							adminSession && !firebaseUser && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "p-3 rounded-2xl bg-indigo-500/12 border border-indigo-400/30 text-xs text-indigo-200 leading-relaxed",
								children: "أنت مسجّل الآن بحساب البريد الإلكتروني وكلمة السر وتُحدَّث الهدايا والمتجر فوراً لجميع متصلي السيرفر. يمكنك أيضاً الضغط على «ربط بحساب Google» أعلاه للمزامنة السحابية بين أكثر من رابط استضافة."
							}),
							adminCredsFeedback && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: `p-3 rounded-2xl border text-xs font-bold ${adminCredsFeedback.ok ? "bg-emerald-500/15 border-emerald-400/40 text-emerald-200" : "bg-rose-500/15 border-rose-400/40 text-rose-200"}`,
								children: adminCredsFeedback.text
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
								onSubmit: async (e) => {
									e.preventDefault();
									setAdminCredsFeedback(null);
									const cleanEmail = newAdminEmailInput.trim();
									if (!cleanEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail)) {
										setAdminCredsFeedback({
											ok: false,
											text: "يرجى إدخال بريد إلكتروني صحيح."
										});
										return;
									}
									if (newAdminPasswordInput.length < 6) {
										setAdminCredsFeedback({
											ok: false,
											text: "كلمة السر يجب أن تكون 6 أحرف على الأقل."
										});
										return;
									}
									if (newAdminPasswordInput !== newAdminPasswordConfirm) {
										setAdminCredsFeedback({
											ok: false,
											text: "كلمتا المرور غير متطابقتين."
										});
										return;
									}
									setIsUpdatingAdminCreds(true);
									try {
										const res = await updateAdminEmailCredentials({
											email: cleanEmail,
											password: newAdminPasswordInput,
											displayName: newAdminDisplayNameInput.trim() || "مدير التطبيق"
										});
										setAdminCredsFeedback({
											ok: res.ok,
											text: res.message
										});
										if (res.ok) {
											setNewAdminPasswordInput("");
											setNewAdminPasswordConfirm("");
											showAdminNotice(res.message);
										}
									} finally {
										setIsUpdatingAdminCreds(false);
									}
								},
								className: "grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "block text-slate-300 font-semibold mb-1",
										children: "اسم المدير:"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "text",
										value: newAdminDisplayNameInput,
										onChange: (e) => setNewAdminDisplayNameInput(e.target.value),
										placeholder: "مدير التطبيق",
										required: true,
										className: "w-full min-h-[42px] bg-slate-950 border border-white/12 rounded-xl px-3 text-white focus:outline-none focus:border-amber-400"
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "flex items-center gap-1.5 text-slate-300 font-semibold mb-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "w-3.5 h-3.5 text-amber-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "البريد الإلكتروني الجديد للمدير:" })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "email",
										dir: "ltr",
										required: true,
										value: newAdminEmailInput,
										onChange: (e) => setNewAdminEmailInput(e.target.value),
										placeholder: "admin@yourdomain.com",
										className: "w-full min-h-[42px] bg-slate-950 border border-white/12 rounded-xl px-3 text-amber-300 font-mono text-left focus:outline-none focus:border-amber-400"
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "flex items-center gap-1.5 text-slate-300 font-semibold mb-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "w-3.5 h-3.5 text-emerald-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "كلمة السر الجديدة (6 أحرف على الأقل):" })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "password",
										dir: "ltr",
										required: true,
										minLength: 6,
										value: newAdminPasswordInput,
										onChange: (e) => setNewAdminPasswordInput(e.target.value),
										placeholder: "••••••••",
										className: "w-full min-h-[42px] bg-slate-950 border border-white/12 rounded-xl px-3 text-emerald-300 font-mono text-left focus:outline-none focus:border-emerald-400"
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "flex items-center gap-1.5 text-slate-300 font-semibold mb-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "w-3.5 h-3.5 text-emerald-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "تأكيد كلمة السر الجديدة:" })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "password",
										dir: "ltr",
										required: true,
										minLength: 6,
										value: newAdminPasswordConfirm,
										onChange: (e) => setNewAdminPasswordConfirm(e.target.value),
										placeholder: "••••••••",
										className: "w-full min-h-[42px] bg-slate-950 border border-white/12 rounded-xl px-3 text-emerald-300 font-mono text-left focus:outline-none focus:border-emerald-400"
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "sm:col-span-2",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "submit",
											disabled: isUpdatingAdminCreds,
											className: "w-full sm:w-auto min-h-[42px] px-5 py-2 rounded-xl bg-amber-400 hover:bg-amber-300 disabled:opacity-60 text-slate-950 font-black text-xs transition-colors",
											children: isUpdatingAdminCreds ? "جاري التحديث..." : "حفظ البريد وكلمة السر لحساب المدير"
										})
									})
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-5 rounded-3xl bg-gradient-to-br from-[#0f1a29] via-[#0d1522] to-[#0a101b] border border-cyan-400/30 shadow-xl space-y-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-3.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "w-11 h-11 rounded-2xl bg-cyan-400/15 border border-cyan-400/40 flex items-center justify-center text-cyan-300 shrink-0",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Smartphone, { className: "w-5 h-5" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-sm sm:text-base font-black text-white",
										children: "نسخة الأندرويد المستقلة (APK) والتنزيل المباشر"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-slate-400 mt-0.5",
										children: "تطبيق أندرويد مدمج بالملفات يعمل بدون متصفح ومتصل مباشرةً بالسيرفر وFirebase"
									})] })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: `px-3 py-1 rounded-full border text-[11px] font-bold self-start sm:self-auto ${apkReleaseState?.available ? "bg-emerald-500/15 border-emerald-400/35 text-emerald-300" : "bg-amber-500/15 border-amber-400/35 text-amber-300"}`,
									children: apkReleaseState?.available ? "● ملف APK مفعّل للتنزيل المباشر" : "● مشروع Android جاهز للبناء"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "p-3 rounded-2xl bg-slate-950/80 border border-white/8 space-y-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-slate-400",
										children: "عنوان السيرفر المربوط داخل الـ APK:"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-mono text-cyan-300 truncate",
										dir: "ltr",
										children: getConfiguredServerBaseUrl()
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "p-3 rounded-2xl bg-slate-950/80 border border-white/8 space-y-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-slate-400",
										children: "معرّف تطبيق الأندرويد (Capacitor):"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "font-mono text-emerald-300",
										dir: "ltr",
										children: ["com.fokashat.vip · v", apkReleaseState?.versionName || apkVersionInput]
									})]
								})]
							}),
							apkFeedback && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: `p-3 rounded-2xl border text-xs font-bold ${apkFeedback.ok ? "bg-emerald-500/15 border-emerald-400/40 text-emerald-200" : "bg-rose-500/15 border-rose-400/40 text-rose-200"}`,
								children: apkFeedback.text
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
								onSubmit: async (e) => {
									e.preventDefault();
									setApkFeedback(null);
									if (!firebaseUser && !adminSession) {
										setApkFeedback({
											ok: false,
											text: "يرجى تسجيل الدخول بحساب المدير أولاً."
										});
										return;
									}
									const cleanUrl = apkUrlInput.trim();
									if (cleanUrl && !/^https:\/\/[^\s]+$/i.test(cleanUrl)) {
										setApkFeedback({
											ok: false,
											text: "يجب أن يبدأ رابط ملف APK المباشر بـ https://"
										});
										return;
									}
									setIsSavingApkRelease(true);
									try {
										const authToken = firebaseUser ? await firebaseUser.getIdToken() : adminSession.token;
										const res = await fetch(resolveApiUrl("/api/admin/app-release"), {
											method: "POST",
											headers: {
												"Content-Type": "application/json",
												Authorization: `Bearer ${authToken}`
											},
											body: JSON.stringify({
												downloadUrl: cleanUrl,
												versionName: apkVersionInput.trim() || "1.0.0"
											})
										});
										const data = await res.json().catch(() => ({}));
										if (!res.ok) {
											setApkFeedback({
												ok: false,
												text: data.error || "تعذر حفظ رابط ملف APK."
											});
											return;
										}
										setApkReleaseState(data);
										await refreshApkReleaseInfo();
										const msg = cleanUrl ? "تم تفعيل رابط تنزيل ملف APK المباشر لجميع المستخدمين!" : "تم مسح رابط ملف APK الخارجي.";
										setApkFeedback({
											ok: true,
											text: msg
										});
										showAdminNotice(msg);
									} finally {
										setIsSavingApkRelease(false);
									}
								},
								className: "grid grid-cols-1 sm:grid-cols-12 gap-3 text-xs",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "sm:col-span-8",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
											className: "flex items-center gap-1.5 text-slate-300 font-semibold mb-1",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "w-3.5 h-3.5 text-cyan-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "رابط ملف APK المباشر بعد البناء (https://.../fokashat.apk):" })]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "url",
											dir: "ltr",
											value: apkUrlInput,
											onChange: (e) => setApkUrlInput(e.target.value),
											placeholder: "https://github.com/.../releases/download/v1.0/fokashat-vip.apk",
											className: "w-full min-h-[42px] bg-slate-950 border border-white/12 rounded-xl px-3 text-cyan-300 font-mono text-left focus:outline-none focus:border-cyan-400"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "sm:col-span-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "block text-slate-300 font-semibold mb-1",
											children: "رقم الإصدار:"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "text",
											dir: "ltr",
											value: apkVersionInput,
											onChange: (e) => setApkVersionInput(e.target.value),
											placeholder: "1.0.0",
											className: "w-full min-h-[42px] bg-slate-950 border border-white/12 rounded-xl px-3 text-white font-mono text-left focus:outline-none focus:border-cyan-400"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "sm:col-span-12 flex flex-wrap items-center gap-2",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "submit",
											disabled: isSavingApkRelease,
											className: "min-h-[42px] px-5 py-2 rounded-xl bg-cyan-400 hover:bg-cyan-300 disabled:opacity-60 text-slate-950 font-black text-xs transition-colors",
											children: isSavingApkRelease ? "جاري الحفظ..." : "حفظ وتفعيل تنزيل ملف APK على زر «تنزيل»"
										})
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-3 rounded-2xl bg-slate-950/75 border border-white/8 text-[11px] text-slate-300 leading-relaxed space-y-1",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-bold text-white",
										children: "طريقة استخراج ملف APK الحقيقي بضغطة واحدة:"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
										"1. ارفع المشروع على GitHub (أو افتح مجلد ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-mono text-amber-300",
											children: "android/"
										}),
										" في Android Studio) وسيعمل مسار البناء التلقائي ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-mono text-cyan-300",
											children: "Build Android APK"
										}),
										" لإخراج ملف ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-mono text-emerald-300",
											children: "app-debug.apk"
										}),
										" جاهزاً للتثبيت."
									] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: "2. انسخ رابط الملف الناتج وضعه في الخانة أعلاه (أو ضعه في مجلد التنزيلات بالسيرفر) ليتحول زر «تنزيل» تلقائياً إلى تنزيل مباشر للـ APK على الموبايل." })
								]
							})
						]
					})
				]
			}),
			activeTab === "agora" && (() => {
				const isSelfHostedActive = (agoraConfig.provider || "self_hosted") !== "agora";
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-5 rounded-3xl bg-gradient-to-br from-[#10192b] via-[#0e1524] to-[#0b101d] border border-cyan-500/30 shadow-xl space-y-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col sm:flex-row sm:items-center justify-between gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "w-12 h-12 rounded-2xl bg-cyan-500/15 border border-cyan-400/40 flex items-center justify-center text-cyan-300 shrink-0",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mic, { className: "w-6 h-6" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2 flex-wrap",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "text-base font-black text-white",
											children: isSelfHostedActive ? "السيرفر الصوتي الخاص (WebRTC + WebSocket)" : "حساب Agora السحابي (اختياري)"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "px-2.5 py-0.5 rounded-full text-[11px] font-bold border bg-emerald-500/15 text-emerald-300 border-emerald-400/40",
											children: isSelfHostedActive ? voiceServerSnapshot?.status === "online" || firebaseStatus.isConnected ? "● متصل ويعمل مباشرة" : "● مفعّل · السيرفر الخاص" : "● وضع Agora مفعّل"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-slate-400 mt-1 font-mono",
										dir: "ltr",
										children: isSelfHostedActive ? voiceServerSnapshot?.mode === "serverless_cloud" || voiceServerSnapshot?.engine === "firestore_rtc" || !voiceServerSnapshot && firebaseStatus.isConnected ? `Cloud Signaling: Firestore WebRTC (${firebaseStatus.projectId}) · Media: WebRTC Full-Duplex` : `Self-Hosted Signaling: /ws/voice · Media: WebRTC Full-Duplex` : `Active App ID: ${agoraConfig.appId}`
									})] })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-wrap items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										disabled: isRefreshingVoiceServer,
										onClick: () => void refreshVoiceDiagnostics(),
										className: "min-h-[42px] px-3.5 py-2 rounded-xl bg-white/8 hover:bg-white/14 border border-white/10 text-slate-200 text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, { className: `w-4 h-4 ${isRefreshingVoiceServer ? "animate-spin" : ""}` }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "تحديث الحالة" })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										disabled: isTestingAgora,
										onClick: async () => {
											setIsTestingAgora(true);
											setAgoraTestStatus(null);
											const testRoomId = rooms[0]?.id || "room_tyy";
											const res = await agoraVoice.testConnection(testRoomId);
											setAgoraTestStatus({
												ok: res.ok,
												message: res.message,
												requiresToken: res.requiresToken
											});
											await refreshVoiceDiagnostics();
											setIsTestingAgora(false);
										},
										className: "min-h-[42px] px-4 py-2 rounded-xl bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-400/40 text-cyan-200 text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer disabled:opacity-60",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wifi, { className: "w-4 h-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: isTestingAgora ? "جاري الاختبار..." : isSelfHostedActive ? "اختبار اتصال السيرفر الصوتي" : "اختبار اتصال Agora المباشر" })]
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-1 sm:grid-cols-2 gap-2.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => {
										updateAgoraConfig({ provider: "self_hosted" });
										setAgoraTestStatus(null);
										showAdminNotice("تم تفعيل السيرفر الصوتي الخاص (WebRTC + WebSocket) بدون الحاجة لأي توكن خارجي.");
									},
									className: `p-3.5 rounded-2xl border text-right transition-all cursor-pointer ${isSelfHostedActive ? "bg-emerald-500/15 border-emerald-400/60 text-white" : "bg-slate-950/70 border-white/10 text-slate-300 hover:bg-white/[0.05]"}`,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between gap-2 text-xs font-black",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "السيرفر الصوتي الخاص (مفعّل تلقائياً)" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-emerald-300",
											children: isSelfHostedActive ? "✓ نشط" : "تفعيل"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[11px] text-slate-400 mt-1",
										children: "بث صوتي مباشر بين المايكات عبر WebSocket (/ws/voice) و WebRTC دون قيود شهادات خارجية."
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => {
										updateAgoraConfig({ provider: "agora" });
										setAgoraTestStatus(null);
										showAdminNotice("تم التحويل إلى محرك Agora Cloud.");
									},
									className: `p-3.5 rounded-2xl border text-right transition-all cursor-pointer ${!isSelfHostedActive ? "bg-amber-500/15 border-amber-400/60 text-white" : "bg-slate-950/70 border-white/10 text-slate-300 hover:bg-white/[0.05]"}`,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between gap-2 text-xs font-black",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Agora Cloud (اختياري)" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-amber-300",
											children: !isSelfHostedActive ? "✓ نشط" : "تبديل"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[11px] text-slate-400 mt-1",
										children: "استخدم Agora RTC مع App ID وشهادة App Certificate أو Temp Token."
									})]
								})]
							}),
							agoraTestStatus && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: `p-3.5 rounded-2xl border text-xs font-bold space-y-2 ${agoraTestStatus.ok ? "bg-emerald-500/15 border-emerald-400/40 text-emerald-200" : "bg-rose-500/15 border-rose-400/40 text-rose-200"}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: agoraTestStatus.message }), agoraTestStatus.requiresToken && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "p-2.5 rounded-xl bg-black/30 border border-amber-400/30 text-amber-200 font-normal leading-relaxed space-y-1",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-black text-amber-300",
										children: "يمكنك التبديل للسيرفر الصوتي الخاص أعلاه فوراً أو تفعيل شهادة Agora من الأسفل."
									})
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-1 lg:grid-cols-2 gap-4",
								children: [isSelfHostedActive ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "p-4 rounded-2xl bg-slate-950/80 border border-white/10 space-y-4 text-xs",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "font-black text-sm text-emerald-300",
												children: "مراقبة السيرفر الصوتي الخاص المباشر"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-mono text-[11px] text-slate-400",
												dir: "ltr",
												children: voiceServerSnapshot?.wsPath || "/ws/voice"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "grid grid-cols-2 gap-3",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "p-3 rounded-2xl bg-slate-900/90 border border-white/8",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "text-slate-400 text-[11px]",
														children: "حالة السيرفر"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "text-emerald-300 font-black text-base mt-1",
														children: isRefreshingVoiceServer ? "جاري الفحص..." : voiceServerSnapshot?.status === "online" ? voiceServerSnapshot.mode === "serverless_cloud" || voiceServerSnapshot.engine === "firestore_rtc" ? "متصل سحابياً (Cloud)" : "متصل Online" : firebaseStatus.isConnected ? "متصل سحابياً (Firestore)" : "جاري التحقق"
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "p-3 rounded-2xl bg-slate-900/90 border border-white/8",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "text-slate-400 text-[11px]",
														children: "الغرف الصوتية النشطة"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "text-amber-300 font-mono tabular-nums font-black text-base mt-1",
														children: voiceServerSnapshot?.activeRoomsCount ?? 0
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "p-3 rounded-2xl bg-slate-900/90 border border-white/8",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "text-slate-400 text-[11px]",
														children: "المستخدمون المتصلون"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "text-cyan-300 font-mono tabular-nums font-black text-base mt-1",
														children: voiceServerSnapshot?.activePeersCount ?? 0
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "p-3 rounded-2xl bg-slate-900/90 border border-white/8",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "text-slate-400 text-[11px]",
														children: "المتحدثون على المايك"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "text-pink-300 font-mono tabular-nums font-black text-base mt-1",
														children: voiceServerSnapshot?.activeSpeakersCount ?? 0
													})]
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "p-3 rounded-2xl bg-slate-900/80 border border-white/8 space-y-1.5 text-[11px] text-slate-300 leading-relaxed",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "font-bold text-white",
													children: "كيف يعمل السيرفر الصوتي الخاص بك؟"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
													"• يعمل خادم الإشارات WebSocket مباشرة على منفذ التطبيق (",
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "font-mono text-cyan-300",
														children: "/ws/voice"
													}),
													")."
												] }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: "• بمجرد جلوس المستخدم على أي مايك داخل الغرفة يتم التقاط الصوت وإرساله عبر WebRTC Full-Duplex لجميع المستمعين والمتحدثين الآخرين." }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: "• يدعم الكتم الفوري، إلغاء الصدى والضوضاء التلقائي، وإعادة الربط التلقائي عند ضعف الشبكة." })
											]
										})
									]
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
									onSubmit: async (e) => {
										e.preventDefault();
										if (!isValidAgoraAppId(agoraAppIdInput)) {
											showAdminNotice("يرجى إدخال Agora App ID صحيح مكون من 32 حرف/رقم.");
											return;
										}
										let tokenToSave = agoraTokenInput.trim() || void 0;
										let extractedAppId = agoraAppIdInput.trim();
										if (tokenToSave && tokenToSave.startsWith("007")) {
											const info = await parseAgoraTokenInfo(tokenToSave);
											if (info.valid && info.appId) {
												extractedAppId = info.appId;
												setAgoraAppIdInput(info.appId);
											}
											if (info.valid && !info.isRtcToken) {
												tokenToSave = void 0;
												setAgoraTokenInput("");
												updateAgoraConfig({
													provider: "agora",
													appId: extractedAppId,
													rtcToken: void 0
												});
												showAdminNotice(`تم تفعيل App ID (${extractedAppId}). التوكن المُدخل (${info.serviceLabel}) مخصص للشات وليس RTC Voice Token.`);
												return;
											}
										}
										updateAgoraConfig({
											provider: "agora",
											appId: extractedAppId,
											rtcToken: tokenToSave
										});
										showAdminNotice("تم حفظ وتفعيل إعدادات Agora للصوت المباشر.");
									},
									className: "p-4 rounded-2xl bg-slate-950/80 border border-white/10 space-y-3.5 text-xs",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "font-black text-sm text-amber-300",
											children: "إعدادات مشروع Agora (App ID / Certificate / Token)"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "p-3 rounded-xl bg-slate-900/80 border border-cyan-400/25 space-y-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center justify-between",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-bold text-cyan-200",
													children: "توليد التوكن تلقائياً بالسيرفر (App Certificate)"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-mono text-[10px] text-emerald-300",
													children: serverAgoraStatus?.hasCertificate ? `مفعّل (${serverAgoraStatus.certificateSource})` : "غير مضبوط"
												})]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													type: "password",
													dir: "ltr",
													value: agoraCertInput,
													onChange: (e) => setAgoraCertInput(e.target.value),
													placeholder: "32-char Primary App Certificate",
													className: "flex-1 min-h-[38px] bg-slate-950 border border-white/12 rounded-xl px-3 text-cyan-200 font-mono text-left focus:outline-none focus:border-cyan-400"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													type: "button",
													disabled: isSavingCert || !agoraCertInput.trim(),
													onClick: async () => {
														if (!firebaseUser && !adminSession) {
															showAdminNotice("يرجى تسجيل الدخول بحساب المسؤول أولاً لحفظ شهادة الخادم.");
															return;
														}
														setIsSavingCert(true);
														try {
															const authToken = firebaseUser ? await firebaseUser.getIdToken() : adminSession.token;
															const res = await saveServerAgoraCertificate(authToken, agoraCertInput, agoraAppIdInput);
															if (res.ok) {
																showAdminNotice("تم حفظ وتفعيل شهادة Agora على الخادم بنجاح.");
																setAgoraCertInput("");
																await refreshVoiceDiagnostics();
															} else showAdminNotice(res.error || "تعذر حفظ شهادة Agora على الخادم.");
														} finally {
															setIsSavingCert(false);
														}
													},
													className: "min-h-[38px] px-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-black disabled:opacity-50",
													children: isSavingCert ? "حفظ..." : "حفظ الشهادة"
												})]
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
												className: "block text-slate-300 font-semibold mb-1",
												children: "لصق توكن Agora (007...) لاستخراج App ID وفحصه تلقائياً:"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
												rows: 2,
												dir: "ltr",
												value: agoraTokenInspectorInput,
												onChange: (e) => setAgoraTokenInspectorInput(e.target.value),
												placeholder: "007eJxTY...",
												className: "w-full bg-slate-900 border border-white/12 rounded-xl p-2.5 text-cyan-300 font-mono text-[11px] focus:outline-none focus:border-cyan-400"
											}),
											parsedAgoraToken && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: `mt-2 p-2.5 rounded-xl border text-[11px] space-y-1 ${parsedAgoraToken.valid ? "bg-slate-900/90 border-cyan-400/30 text-slate-200" : "bg-rose-950/60 border-rose-400/30 text-rose-200"}`,
												children: parsedAgoraToken.valid ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-slate-400",
														children: "App ID المستخرج: "
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "font-mono text-emerald-300 font-bold",
														dir: "ltr",
														children: parsedAgoraToken.appId
													})] }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-slate-400",
														children: "نوع التوكن: "
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "font-bold text-amber-300",
														children: parsedAgoraToken.serviceLabel
													})] }),
													parsedAgoraToken.channelName && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														dir: "ltr",
														className: "text-slate-300 font-mono",
														children: ["Channel: ", parsedAgoraToken.channelName]
													})
												] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: parsedAgoraToken.error || "تعذر قراءة التوكن" })
											})
										] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "block text-slate-300 font-semibold mb-1",
											children: "Agora App ID (32-char hex):"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "text",
											dir: "ltr",
											value: agoraAppIdInput,
											onChange: (e) => setAgoraAppIdInput(e.target.value),
											placeholder: "d5c272d82b094c2f86ccc75df0819dfe",
											className: "w-full min-h-[42px] bg-slate-900 border border-white/12 rounded-xl px-3 text-emerald-300 font-mono focus:outline-none focus:border-emerald-400"
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "p-2.5 rounded-xl bg-slate-900/80 border border-white/8 space-y-1.5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "text-[11px] font-bold text-slate-300",
												children: "أسماء قنوات الغرف النشطة:"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "flex flex-wrap gap-1.5",
												dir: "ltr",
												children: rooms.slice(0, 4).map((r) => {
													const ch = formatAgoraChannelName(r.id);
													const isCopied = copiedAgoraChannel === ch;
													return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
														type: "button",
														onClick: () => {
															navigator.clipboard?.writeText(ch);
															setCopiedAgoraChannel(ch);
															setTimeout(() => setCopiedAgoraChannel(null), 1800);
														},
														className: "px-2 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 border border-white/10 text-[10px] font-mono text-cyan-200 flex items-center gap-1 cursor-pointer",
														title: `نسخ قناة غرفة ${r.title}`,
														children: [isCopied ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "w-3 h-3 text-emerald-400" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "w-3 h-3 text-slate-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: ch })]
													}, r.id);
												})
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "block text-slate-300 font-semibold mb-1",
											children: "RTC Temp Token (اختياري):"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "text",
											dir: "ltr",
											value: agoraTokenInput,
											onChange: (e) => setAgoraTokenInput(e.target.value),
											placeholder: "اختياري في حال عدم ضبط App Certificate بالسيرفر",
											className: "w-full min-h-[42px] bg-slate-900 border border-white/12 rounded-xl px-3 text-amber-200 font-mono focus:outline-none focus:border-amber-400"
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex flex-wrap items-center gap-2 pt-1",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "submit",
												className: "flex-1 min-h-[42px] px-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black cursor-pointer",
												children: "حفظ وتفعيل حساب Agora"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												onClick: () => {
													const reset = updateAgoraConfig({}, true);
													setAgoraAppIdInput(reset.appId);
													setAgoraTokenInput("");
													showAdminNotice("تمت إعادة تعيين إعدادات الصوت للافتراضي (السيرفر الصوتي الخاص).");
												},
												className: "min-h-[42px] px-3 rounded-xl bg-white/8 hover:bg-white/12 text-slate-300 font-bold cursor-pointer",
												children: "استعادة الافتراضي"
											})]
										})
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "p-4 rounded-2xl bg-slate-950/80 border border-white/10 space-y-4 text-xs flex flex-col justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-3",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "font-black text-sm text-emerald-300",
												children: "فحص وتفعيل الميكروفون والصوت في المتصفح"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-slate-400 leading-relaxed",
												children: "استخدم هذا الفحص للتأكد من منح المتصفح صلاحية الميكروفون وأن الصوت المباشر جاهز قبل دخول الغرف الصوتية."
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "p-3 rounded-xl bg-slate-900/90 border border-white/8 space-y-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center justify-between",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-slate-300 font-semibold",
														children: "مؤشر التقاط الميكروفون المباشر"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
														className: "font-mono text-emerald-300 font-bold",
														children: [micProbeLevel, "%"]
													})]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "w-full h-2.5 rounded-full bg-slate-800 overflow-hidden",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "h-full bg-gradient-to-r from-emerald-400 to-cyan-400 transition-all duration-100",
														style: { width: `${micProbeLevel}%` }
													})
												})]
											}),
											micProbeMsg && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "p-3 rounded-xl bg-slate-900 border border-white/10 text-slate-200 font-semibold",
												children: micProbeMsg
											})
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-wrap items-center gap-2",
										children: [!isMicProbing ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											onClick: async () => {
												sound.unlockAudio();
												setIsMicProbing(true);
												const res = await agoraVoice.startMicProbe((lvl) => setMicProbeLevel(lvl));
												setMicProbeMsg(res.message);
												if (!res.ok) {
													setIsMicProbing(false);
													setMicProbeLevel(0);
												}
											},
											className: "flex-1 min-h-[42px] px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black flex items-center justify-center gap-2 cursor-pointer",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mic, { className: "w-4 h-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "تشغيل وفحص الميكروفون الآن" })]
										}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											onClick: () => {
												agoraVoice.stopMicProbe();
												setIsMicProbing(false);
												setMicProbeLevel(0);
												setMicProbeMsg("تم إيقاف فحص الميكروفون.");
											},
											className: "flex-1 min-h-[42px] px-4 rounded-xl bg-rose-500/20 border border-rose-400/50 text-rose-200 font-black flex items-center justify-center gap-2 cursor-pointer",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Square, { className: "w-4 h-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "إيقاف الفحص" })]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											onClick: () => {
												sound.unlockAudio();
												sound.playWinChime();
												agoraVoice.resumeRemoteAudio(true);
												setMicProbeMsg("تم تفعيل سماعة المتصفح وتشغيل نغمة الاختبار بنجاح 🔊");
											},
											className: "min-h-[42px] px-4 rounded-xl bg-white/8 hover:bg-white/12 border border-white/10 text-slate-200 font-bold flex items-center gap-1.5 cursor-pointer",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Volume2, { className: "w-4 h-4 text-amber-300" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "تفعيل السماعة" })]
										})]
									})]
								})]
							})
						]
					})
				});
			})(),
			editingGift && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4",
				onClick: () => {
					sound.stopPreviewAudio();
					setPreviewingAudioTarget(null);
					setEditingGift(null);
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "w-full max-w-md bg-[#111626] border border-white/12 rounded-3xl p-5 space-y-4 shadow-2xl max-h-[90vh] overflow-y-auto",
					onClick: (e) => e.stopPropagation(),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between border-b border-white/10 pb-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
							className: "text-sm font-black text-white",
							children: ["تعديل روابط وصوت الهدية: ", editingGift.nameAr]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => {
								sound.stopPreviewAudio();
								setPreviewingAudioTarget(null);
								setEditingGift(null);
							},
							className: "w-8 h-8 rounded-lg bg-white/8 flex items-center justify-center text-slate-300",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "w-4 h-4" })
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: handleSaveGiftEdit,
						className: "space-y-3 text-xs",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "flex items-center justify-between text-slate-300 mb-1 font-semibold",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "رابط صورة أو APNG / GIF / WebP الهدية:" }), editImageUrl.trim() && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-mono text-[10px] text-sky-300",
									children: editGiftApngInfo && !editVideoUrl.trim() ? `APNG • ${(editGiftApngInfo.totalDurationMs / 1e3).toFixed(1)}ث (${editGiftApngInfo.numFrames} إطار)` : getMediaFormatLabel(editImageUrl)
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "text",
								dir: "ltr",
								value: editImageUrl,
								onChange: (e) => setEditImageUrl(e.target.value),
								placeholder: "https://example.com/gift.png أو .apng أو .gif",
								className: "w-full min-h-[42px] bg-slate-950 border border-white/12 rounded-xl px-3 text-sky-300 font-mono text-left focus:outline-none focus:border-sky-400"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "flex items-center justify-between text-slate-300 mb-1 font-semibold",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "رابط حركة الهدية (VAP / MP4 شفاف تلقائياً / WebM / APNG / GIF / WebP):" }), editVideoUrl.trim() && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-mono text-[10px] text-rose-300",
									children: editGiftApngInfo ? `APNG • ${(editGiftApngInfo.totalDurationMs / 1e3).toFixed(1)}ث (${editGiftApngInfo.numFrames} إطار)` : getMediaFormatLabel(editVideoUrl)
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "text",
								dir: "ltr",
								value: editVideoUrl,
								onChange: (e) => setEditVideoUrl(e.target.value),
								placeholder: "https://example.com/gift-vap.mp4 أو .vap أو .apng أو .gif (شفاف تلقائياً)",
								className: "w-full min-h-[42px] bg-slate-950 border border-white/12 rounded-xl px-3 text-rose-300 font-mono text-left focus:outline-none focus:border-rose-400"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "flex items-center justify-between text-slate-300 mb-1 font-semibold",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "رابط صوت الهدية (MP3 / WAV / OGG / M4A):" }), editSoundUrl.trim() && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-mono text-[10px] text-emerald-300",
									children: getMediaFormatLabel(editSoundUrl)
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "text",
									dir: "ltr",
									value: editSoundUrl,
									onChange: (e) => setEditSoundUrl(e.target.value),
									placeholder: "https://example.com/gift-sound.mp3",
									className: "flex-1 min-h-[42px] bg-slate-950 border border-white/12 rounded-xl px-3 text-emerald-300 font-mono text-left focus:outline-none focus:border-emerald-400"
								}), editSoundUrl.trim() && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => {
										if (previewingAudioTarget === "edit") {
											sound.stopPreviewAudio();
											setPreviewingAudioTarget(null);
										} else {
											setPreviewingAudioTarget("edit");
											sound.previewAudioUrl(editSoundUrl, () => setPreviewingAudioTarget(null));
										}
									},
									className: "min-h-[42px] px-3 rounded-xl bg-emerald-500/20 border border-emerald-400/40 text-emerald-200 font-bold flex items-center gap-1 shrink-0",
									children: [previewingAudioTarget === "edit" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Square, { className: "w-3.5 h-3.5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "w-3.5 h-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: previewingAudioTarget === "edit" ? "إيقاف" : "تجربة" })]
								})]
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-2 gap-2.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "block text-slate-300 mb-1 font-semibold",
									children: "السعر (عملة):"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "number",
									min: 1,
									value: editPrice,
									onChange: (e) => setEditPrice(Number(e.target.value)),
									className: "w-full min-h-[42px] bg-slate-950 border border-white/12 rounded-xl px-3 text-amber-300 font-mono tabular-nums font-bold focus:outline-none focus:border-amber-400"
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "block text-slate-300 mb-1 font-semibold",
									children: "المدة (ث / فارغ = تلقائي):"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "number",
									min: 1,
									max: 120,
									value: editDurationSec,
									onChange: (e) => setEditDurationSec(e.target.value),
									placeholder: "تلقائي (كامل APNG)",
									className: "w-full min-h-[42px] bg-slate-950 border border-white/12 rounded-xl px-3 text-cyan-300 font-mono tabular-nums font-bold focus:outline-none focus:border-cyan-400 placeholder:text-[11px] placeholder:font-sans placeholder:text-slate-500"
								})] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "flex items-center justify-between p-3 rounded-xl bg-slate-950 border border-white/10 cursor-pointer",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-semibold text-pink-300",
									children: "هدية حظ بمضاعفات"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "checkbox",
									checked: editIsLucky,
									onChange: (e) => setEditIsLucky(e.target.checked),
									className: "w-4 h-4 accent-amber-400"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 pt-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => {
										sound.stopPreviewAudio();
										setPreviewingAudioTarget(null);
										setEditingGift(null);
									},
									className: "flex-1 min-h-[42px] rounded-xl bg-white/8 text-slate-300 font-bold",
									children: "إلغاء"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "submit",
									className: "flex-1 min-h-[42px] rounded-xl bg-amber-400 text-slate-950 font-black",
									children: "حفظ التعديلات"
								})]
							})
						]
					})]
				})
			})
		]
	});
};
export { AdminDashboard };
