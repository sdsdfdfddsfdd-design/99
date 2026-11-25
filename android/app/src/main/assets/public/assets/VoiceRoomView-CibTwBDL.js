import { n as __toESM } from "./rolldown-runtime-CO0Nlsmt.js";
import { $ as KeyRound, A as Search, B as Minus, E as ShieldCheck, Et as Check, F as Power, G as Megaphone, H as MicOff, It as require_react, M as Rocket, Q as LayoutGrid, S as SlidersHorizontal, T as Shield, Tt as ChevronLeft, V as Mic, X as LockOpen, Y as Lock, a as VolumeX, b as Smile, c as Users, ct as Gamepad2, f as UserCheck, g as Trash2, gt as Crown, jt as Ban, k as Send, o as Volume2, ot as Gift, p as Trophy, rt as Heart, t as X, u as UserMinus, vt as Copy, yt as Coins } from "./icons-CSx0WKXF.js";
import { D as sound, _ as getMediaFormatLabel, a as room_bg_royal_majlis_1795294234181_default, b as resolveEntranceStageMedia, i as room_bg_midnight_lounge_1795294231147_default, m as selfHostedVoice, o as useApp, r as room_bg_starlight_sky_1795294232054_default, s as agoraVoice, w as publishRoomLiveEventToFirestore, x as resolveGiftStageMedia } from "./index-tXJX2Qqq.js";
import { t as InteractiveGamesHub } from "./InteractiveGamesHub-WWS-ifxp.js";
import { i as preloadMediaAssets, n as inspectVapUrl, t as SmartMediaView } from "./SmartMediaView-B1toZNK4.js";
import { t as require_jsx_runtime } from "./react-vendor-BIdqWr74.js";
// src/components/VoiceRoomView.tsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
var ROOM_THEMES = [
	{
		id: "midnight",
		name: "الصالة الليلية",
		image: room_bg_midnight_lounge_1795294231147_default,
		fallbackGradient: "from-[#0b1021] via-[#10182f] to-[#080b14]"
	},
	{
		id: "majlis",
		name: "المجلس الملكي",
		image: room_bg_royal_majlis_1795294234181_default,
		fallbackGradient: "from-[#17120c] via-[#1c150e] to-[#0c0907]"
	},
	{
		id: "starlight",
		name: "سماء الليل",
		image: room_bg_starlight_sky_1795294232054_default,
		fallbackGradient: "from-[#0a1026] via-[#141c3a] to-[#080c18]"
	}
];
var ROCKET_TIERS = [
	{
		level: 1,
		nameAr: "صاروخ الفضة",
		icon: "🚀",
		targetCoins: 1e4,
		rewardCoins: 5e3,
		giftCounts: [
			10,
			15,
			5
		],
		accent: "from-sky-400 to-indigo-500"
	},
	{
		level: 2,
		nameAr: "صاروخ الذهب",
		icon: "🛸",
		targetCoins: 25e3,
		rewardCoins: 15e3,
		giftCounts: [
			25,
			5,
			8
		],
		accent: "from-amber-400 to-orange-500"
	},
	{
		level: 3,
		nameAr: "صاروخ الألماس",
		icon: "☄️",
		targetCoins: 5e4,
		rewardCoins: 35e3,
		giftCounts: [
			5,
			2,
			6
		],
		accent: "from-violet-400 to-indigo-600"
	},
	{
		level: 4,
		nameAr: "صاروخ المجرة",
		icon: "🌌",
		targetCoins: 1e5,
		rewardCoins: 75e3,
		giftCounts: [
			2,
			1,
			2
		],
		accent: "from-rose-400 to-purple-600"
	},
	{
		level: 5,
		nameAr: "الصاروخ الإمبراطوري",
		icon: "👑",
		targetCoins: 25e4,
		rewardCoins: 2e5,
		giftCounts: [
			2,
			2,
			1
		],
		accent: "from-amber-300 to-red-600"
	}
];
function resolveRocketBagGifts(tierLevel, liveGifts) {
	if (!liveGifts || liveGifts.length === 0) return [];
	const tier = ROCKET_TIERS.find((t) => t.level === tierLevel) || ROCKET_TIERS[0];
	const sorted = [...liveGifts].sort((a, b) => a.coinPrice - b.coinPrice);
	const startIdx = Math.min(Math.max(0, tierLevel - 1), Math.max(0, sorted.length - 1));
	return tier.giftCounts.map((count, i) => {
		const gift = sorted[(startIdx + i) % sorted.length];
		return {
			giftId: gift.id,
			count,
			gift
		};
	});
}
function resolveLuckyBagRewards(tierIndex, liveGifts) {
	if (!liveGifts || liveGifts.length === 0) return [];
	const sorted = [...liveGifts].sort((a, b) => a.coinPrice - b.coinPrice);
	const luckyFirst = [...sorted.filter((g) => g.isLucky || g.category === "lucky"), ...sorted];
	const countsByTier = [
		[5, 5],
		[12, 4],
		[2, 30]
	];
	return (countsByTier[tierIndex] || countsByTier[0]).map((count, idx) => {
		const picked = luckyFirst[(tierIndex + idx) % luckyFirst.length] || sorted[0];
		return {
			giftId: picked.id,
			nameAr: picked.nameAr,
			icon: picked.icon,
			count
		};
	});
}
var VoiceRoomView = () => {
	const { activeRoom, currentUser, leaveRoom, takeSeat, leaveSeat, toggleMic, toggleSeatLock, activeRoomMessages, sendRoomMessage, appendRoomMessage, sendGift, rechargeCoins, gifts, storeItems, users, setActiveModal, setViewingProfileUser, bagGifts, addBagGifts, consumeBagGift, evaluateLuckyGiftWin, roomBackgrounds, isRoomOwner, isRoomModerator, canManageRoom, toggleAllSeatsLock, toggleSeatMuteByModerator, kickUserFromSeat, clearSeatHeartPoints, toggleRoomModerator, banUserFromRoom, unbanUserFromRoom, updateRoomPrivacySettings, flyingGift, entranceBanner, clearEntranceBanner } = useApp();
	const [activeBottomDrawer, setActiveBottomDrawer] = (0, import_react.useState)("none");
	const [selectedSeatForMenu, setSelectedSeatForMenu] = (0, import_react.useState)(null);
	const [themeId, setThemeId] = (0, import_react.useState)("midnight");
	const [roomSettingsTab, setRoomSettingsTab] = (0, import_react.useState)("backgrounds");
	const [roomNotice, setRoomNotice] = (0, import_react.useState)(activeRoom?.announcement || "أهلاً بكم في الغرفة الصوتية — نرجو الالتزام بالأدب والاحترام.");
	const [noticeDraft, setNoticeDraft] = (0, import_react.useState)(roomNotice);
	const [titleDraft, setTitleDraft] = (0, import_react.useState)(activeRoom?.title || "");
	const [privacyTypeDraft, setPrivacyTypeDraft] = (0, import_react.useState)(activeRoom?.type || "public");
	const [passwordDraft, setPasswordDraft] = (0, import_react.useState)(activeRoom?.password || "");
	const [isLockedDraft, setIsLockedDraft] = (0, import_react.useState)(Boolean(activeRoom?.isLocked));
	const [modSearchQuery, setModSearchQuery] = (0, import_react.useState)("");
	const [settingsFeedback, setSettingsFeedback] = (0, import_react.useState)(null);
	const [isRoomSoundMuted, setIsRoomSoundMuted] = (0, import_react.useState)(false);
	const [agoraVolumes, setAgoraVolumes] = (0, import_react.useState)({});
	const [agoraLiveMicActive, setAgoraLiveMicActive] = (0, import_react.useState)(false);
	const [agoraStatus, setAgoraStatus] = (0, import_react.useState)({
		state: "idle",
		appId: "",
		channel: null,
		remoteUsersCount: 0,
		autoplayBlocked: false,
		micActive: false,
		micError: null,
		errorMessage: null,
		requiresToken: false
	});
	const [voiceNotice, setVoiceNotice] = (0, import_react.useState)(null);
	const [dismissedVoiceErrorKey, setDismissedVoiceErrorKey] = (0, import_react.useState)(null);
	const [idCopied, setIdCopied] = (0, import_react.useState)(false);
	const [chatClearedBeforeTs, setChatClearedBeforeTs] = (0, import_react.useState)(0);
	const [chatTab, setChatTab] = (0, import_react.useState)("all");
	const [chatInput, setChatInput] = (0, import_react.useState)("");
	const [showChatInputBar, setShowChatInputBar] = (0, import_react.useState)(false);
	const [giftComboTrack, setGiftComboTrack] = (0, import_react.useState)([]);
	const [subtleGlides, setSubtleGlides] = (0, import_react.useState)([]);
	const [seatPulseMap, setSeatPulseMap] = (0, import_react.useState)({});
	const [luxuryNotice, setLuxuryNotice] = (0, import_react.useState)(null);
	const [comboState, setComboState] = (0, import_react.useState)(null);
	const [activeLuckyBag, setActiveLuckyBag] = (0, import_react.useState)(null);
	const [luckyBagRewardToast, setLuckyBagRewardToast] = (0, import_react.useState)(null);
	const roomRocketStorageKey = `auravoice_rocket_v3_${activeRoom?.id || "default"}`;
	const [rocketLevel, setRocketLevel] = (0, import_react.useState)(() => {
		try {
			const saved = localStorage.getItem(roomRocketStorageKey);
			if (saved) {
				const parsed = JSON.parse(saved);
				if (parsed.cooldownUntil && Date.now() >= parsed.cooldownUntil) return 1;
				return parsed.level || 1;
			}
		} catch {}
		return 1;
	});
	const [previewRocketLevel, setPreviewRocketLevel] = (0, import_react.useState)(rocketLevel);
	const [rocketCurrentSupport, setRocketCurrentSupport] = (0, import_react.useState)(() => {
		try {
			const saved = localStorage.getItem(roomRocketStorageKey);
			if (saved) {
				const parsed = JSON.parse(saved);
				if (parsed.cooldownUntil && Date.now() >= parsed.cooldownUntil) return 0;
				return parsed.support || 0;
			}
		} catch {}
		return 0;
	});
	const [rocketCooldownUntil, setRocketCooldownUntil] = (0, import_react.useState)(() => {
		try {
			const saved = localStorage.getItem(roomRocketStorageKey);
			if (saved) {
				const parsed = JSON.parse(saved);
				if (parsed.cooldownUntil && Date.now() < parsed.cooldownUntil) return parsed.cooldownUntil;
			}
		} catch {}
		return null;
	});
	const [nowMs, setNowMs] = (0, import_react.useState)(() => Date.now());
	const [rocketRewardPopup, setRocketRewardPopup] = (0, import_react.useState)(null);
	const [activeStageGift, setActiveStageGift] = (0, import_react.useState)(null);
	const lastLocalGiftThrowTsRef = (0, import_react.useRef)(0);
	const lastHandledFlyingIdRef = (0, import_react.useRef)(null);
	const lastPlayedStageSoundKeyRef = (0, import_react.useRef)(null);
	const stagePulseCounterRef = (0, import_react.useRef)(0);
	const roomJoinedAtRef = (0, import_react.useRef)(Date.now());
	const handledRoomEventIdsRef = (0, import_react.useRef)(/* @__PURE__ */ new Set());
	const handleIncomingRoomEventRef = (0, import_react.useRef)(() => {});
	const [roomEventLogs, setRoomEventLogs] = (0, import_react.useState)([]);
	const [giftDrawerTab, setGiftDrawerTab] = (0, import_react.useState)("all");
	const [selectedGiftId, setSelectedGiftId] = (0, import_react.useState)(gifts[0]?.id || "");
	const [giftCount, setGiftCount] = (0, import_react.useState)(1);
	const [selectedRecipientSeats, setSelectedRecipientSeats] = (0, import_react.useState)([]);
	const [emojiCategory, setEmojiCategory] = (0, import_react.useState)("faces");
	const [seatEmojis, setSeatEmojis] = (0, import_react.useState)({});
	const [seatHeartsOverride, setSeatHeartsOverride] = (0, import_react.useState)({});
	const chatEndRef = (0, import_react.useRef)(null);
	const luxuryTimeoutRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		if (!activeRoom) return;
		if (activeRoom.announcement) {
			setRoomNotice(activeRoom.announcement);
			setNoticeDraft(activeRoom.announcement);
		}
		setTitleDraft(activeRoom.title);
		setPrivacyTypeDraft(activeRoom.type);
		setPasswordDraft(activeRoom.password || "");
		setIsLockedDraft(Boolean(activeRoom.isLocked));
	}, [
		activeRoom?.id,
		activeRoom?.announcement,
		activeRoom?.title,
		activeRoom?.type,
		activeRoom?.password,
		activeRoom?.isLocked
	]);
	(0, import_react.useEffect)(() => {
		if (giftComboTrack.length === 0) return;
		const timer = window.setInterval(() => {
			const now = Date.now();
			setGiftComboTrack((prev) => prev.filter((item) => now - item.updatedAt < 3200));
		}, 300);
		return () => clearInterval(timer);
	}, [giftComboTrack.length]);
	(0, import_react.useEffect)(() => {
		if (!flyingGift || flyingGift.id === lastHandledFlyingIdRef.current) return;
		lastHandledFlyingIdRef.current = flyingGift.id;
		if (Date.now() - lastLocalGiftThrowTsRef.current < 300) return;
		const stageMedia = resolveGiftStageMedia(flyingGift.gift);
		if (!stageMedia.mediaUrl) return;
		const mediaUrl = stageMedia.mediaUrl;
		const now = Date.now();
		const pulseKey = ++stagePulseCounterRef.current;
		if (flyingGift.gift.soundUrl) sound.preloadAudioUrl(flyingGift.gift.soundUrl);
		setActiveStageGift((prev) => {
			if (prev && prev.mediaUrl === mediaUrl) return {
				...prev,
				comboPulseKey: pulseKey,
				giftName: flyingGift.gift.nameAr,
				senderName: flyingGift.senderName,
				soundEffect: flyingGift.gift.soundEffect,
				soundUrl: flyingGift.gift.soundUrl
			};
			return {
				id: `ext_${now}_${flyingGift.gift.id}`,
				mediaUrl,
				fallbackUrl: stageMedia.fallbackUrl,
				preferVideo: stageMedia.preferVideo,
				durationMs: stageMedia.durationMs,
				hasExplicitDuration: stageMedia.hasExplicitDuration,
				comboPulseKey: pulseKey,
				giftName: flyingGift.gift.nameAr,
				senderName: flyingGift.senderName,
				soundEffect: flyingGift.gift.soundEffect,
				soundUrl: flyingGift.gift.soundUrl
			};
		});
	}, [flyingGift]);
	(0, import_react.useEffect)(() => {
		const urls = [];
		gifts.forEach((g) => {
			if (g.videoUrl) {
				urls.push(g.videoUrl);
				inspectVapUrl(g.videoUrl);
			}
			if (g.imageUrl) urls.push(g.imageUrl);
			if (g.soundUrl) sound.preloadAudioUrl(g.soundUrl);
		});
		storeItems.forEach((s) => {
			if (s.type === "entrance") {
				if (s.videoUrl) {
					urls.push(s.videoUrl);
					inspectVapUrl(s.videoUrl);
				}
				if (s.previewUrl) urls.push(s.previewUrl);
			}
		});
		preloadMediaAssets(urls);
	}, [gifts, storeItems]);
	(0, import_react.useEffect)(() => {
		if (gifts.length > 0 && !gifts.some((g) => g.id === selectedGiftId)) setSelectedGiftId(gifts[0].id);
		if (activeBottomDrawer !== "gift") return;
		const selected = gifts.find((g) => g.id === selectedGiftId);
		if (!selected) return;
		preloadMediaAssets([selected.videoUrl, selected.imageUrl]);
		if (selected.soundUrl) sound.preloadAudioUrl(selected.soundUrl);
	}, [
		activeBottomDrawer,
		selectedGiftId,
		gifts
	]);
	(0, import_react.useEffect)(() => {
		if (!activeLuckyBag) return;
		const interval = window.setInterval(() => {
			setActiveLuckyBag((prev) => {
				if (!prev) return null;
				if (prev.timeLeftMs <= 100) return null;
				return {
					...prev,
					timeLeftMs: prev.timeLeftMs - 100
				};
			});
		}, 100);
		return () => clearInterval(interval);
	}, [Boolean(activeLuckyBag)]);
	(0, import_react.useEffect)(() => {
		if (!comboState?.active) return;
		const interval = window.setInterval(() => {
			setComboState((prev) => {
				if (!prev) return null;
				if (prev.timeLeftMs <= 50) return null;
				return {
					...prev,
					timeLeftMs: prev.timeLeftMs - 50
				};
			});
		}, 50);
		return () => clearInterval(interval);
	}, [comboState?.active]);
	(0, import_react.useEffect)(() => {
		try {
			localStorage.setItem(roomRocketStorageKey, JSON.stringify({
				level: rocketLevel,
				support: rocketCurrentSupport,
				cooldownUntil: rocketCooldownUntil
			}));
		} catch {}
	}, [
		roomRocketStorageKey,
		rocketLevel,
		rocketCurrentSupport,
		rocketCooldownUntil
	]);
	(0, import_react.useEffect)(() => {
		if (!rocketCooldownUntil) return;
		const timer = window.setInterval(() => {
			const current = Date.now();
			setNowMs(current);
			if (current >= rocketCooldownUntil) {
				setRocketCooldownUntil(null);
				setRocketLevel(1);
				setPreviewRocketLevel(1);
				setRocketCurrentSupport(0);
			}
		}, 1e3);
		return () => clearInterval(timer);
	}, [rocketCooldownUntil]);
	(0, import_react.useEffect)(() => {
		chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
	}, [roomEventLogs.length, activeRoomMessages.length]);
	const occupiedIndicesKey = (activeRoom?.seats || []).slice(0, 8).filter((s) => Boolean(s.userId)).map((s) => s.index).join(",");
	(0, import_react.useEffect)(() => {
		const occupiedList = occupiedIndicesKey ? occupiedIndicesKey.split(",").map((n) => Number(n)) : [];
		const occupiedSet = new Set(occupiedList);
		setSelectedRecipientSeats((prev) => {
			const stillValid = prev.filter((idx) => occupiedSet.has(idx));
			if (stillValid.length > 0) return stillValid;
			return occupiedList.length > 0 ? [occupiedList[0]] : [];
		});
		setComboState((prev) => {
			if (!prev) return null;
			const validTargets = prev.targetSeats.filter((idx) => occupiedSet.has(idx));
			if (validTargets.length === 0) return null;
			return {
				...prev,
				targetSeats: validTargets
			};
		});
	}, [occupiedIndicesKey]);
	(0, import_react.useEffect)(() => {
		const unsubVol = agoraVoice.subscribeVolumes((vols) => {
			setAgoraVolumes(vols);
		});
		const unsubMic = agoraVoice.subscribeMicStatus((active) => {
			setAgoraLiveMicActive(active);
		});
		const unsubStatus = agoraVoice.subscribeStatus((st) => {
			setAgoraStatus(st);
		});
		let noticeTimer = null;
		const unsubNotice = agoraVoice.subscribeNotices((msg) => {
			setVoiceNotice(msg);
			if (noticeTimer) window.clearTimeout(noticeTimer);
			noticeTimer = window.setTimeout(() => setVoiceNotice(null), 7e3);
		});
		return () => {
			unsubVol();
			unsubMic();
			unsubStatus();
			unsubNotice();
			if (noticeTimer) window.clearTimeout(noticeTimer);
		};
	}, []);
	(0, import_react.useEffect)(() => {
		if (!activeRoom?.id || !currentUser.id) return;
		roomJoinedAtRef.current = Date.now();
		handledRoomEventIdsRef.current.clear();
		setDismissedVoiceErrorKey(null);
		agoraVoice.joinRoom(activeRoom.id, currentUser.id, currentUser.displayName);
		return () => {
			agoraVoice.leaveRoom();
		};
	}, [
		activeRoom?.id,
		currentUser.id,
		currentUser.displayName
	]);
	(0, import_react.useEffect)(() => {
		const unsubEvents = selfHostedVoice.subscribeRoomEvents((ev) => {
			handleIncomingRoomEventRef.current(ev);
		});
		return () => {
			unsubEvents();
		};
	}, []);
	(0, import_react.useEffect)(() => {
		if (!activeRoom?.id || activeRoomMessages.length === 0) return;
		const minFreshTs = roomJoinedAtRef.current - 3500;
		for (const msg of activeRoomMessages) {
			if (msg.roomId !== activeRoom.id) continue;
			if (msg.liveEvent && msg.liveEvent.id) {
				if (msg.liveEvent.createdAt >= minFreshTs) handleIncomingRoomEventRef.current(msg.liveEvent);
				continue;
			}
			if (msg.giftData && msg.senderId !== currentUser.id) {
				const parsedTs = Number(msg.id.split("_")[1] || 0);
				if (parsedTs >= minFreshTs) {
					const catalogGift = gifts.find((g) => g.id === msg.giftData.giftId);
					if (catalogGift) {
						const syntheticEvent = {
							id: `legacy_${msg.id}`,
							kind: "gift_throw",
							roomId: activeRoom.id,
							senderId: msg.senderId,
							senderName: msg.senderName,
							senderAvatar: msg.senderAvatar,
							senderVipLevel: msg.vipLevel,
							senderLevel: msg.level,
							createdAt: parsedTs,
							gift: {
								id: catalogGift.id,
								name: catalogGift.name,
								nameAr: catalogGift.nameAr,
								category: catalogGift.category,
								coinPrice: catalogGift.coinPrice,
								diamondReward: catalogGift.diamondReward,
								icon: catalogGift.icon,
								imageUrl: catalogGift.imageUrl,
								videoUrl: catalogGift.videoUrl,
								soundUrl: catalogGift.soundUrl,
								effectDurationSec: catalogGift.effectDurationSec,
								accentColor: catalogGift.accentColor,
								animationType: catalogGift.animationType,
								soundEffect: catalogGift.soundEffect,
								isLucky: catalogGift.isLucky
							},
							targetSeats: [],
							targetNames: msg.giftData.targetUserName || "المتحدثين",
							count: msg.giftData.giftCount || 1,
							comboHits: 1,
							isLucky: Boolean(catalogGift.isLucky || catalogGift.category === "lucky")
						};
						handleIncomingRoomEventRef.current(syntheticEvent);
					}
				}
			}
		}
	}, [
		activeRoom?.id,
		activeRoomMessages,
		currentUser.id,
		gifts
	]);
	const myLiveRoomSeat = activeRoom?.seats.find((s) => s.userId === currentUser.id);
	const isSeatedInAgora = Boolean(myLiveRoomSeat);
	const isMyMicMutedInAgora = Boolean(myLiveRoomSeat?.isMuted);
	(0, import_react.useEffect)(() => {
		if (!activeRoom?.id) return;
		agoraVoice.syncMicState(isSeatedInAgora, isMyMicMutedInAgora);
	}, [
		activeRoom?.id,
		isSeatedInAgora,
		isMyMicMutedInAgora
	]);
	(0, import_react.useEffect)(() => {
		agoraVoice.setRemoteAudioMuted(isRoomSoundMuted);
	}, [isRoomSoundMuted]);
	if (!activeRoom) return null;
	const isOwner = isRoomOwner(activeRoom);
	const isMod = isRoomModerator(activeRoom);
	const canManage = canManageRoom(activeRoom);
	const selectedAdminBg = activeRoom.backgroundId ? roomBackgrounds.find((b) => b.id === activeRoom.backgroundId) : void 0;
	const activeTheme = (activeRoom.backgroundId ? ROOM_THEMES.find((t) => t.id === activeRoom.backgroundId) : void 0) || ROOM_THEMES.find((t) => t.id === themeId) || ROOM_THEMES[0];
	const resolvedRoomWallpaperUrl = activeRoom.backgroundUrl || selectedAdminBg?.imageUrl || activeTheme.image;
	const resolvedRoomWallpaperName = selectedAdminBg?.nameAr || activeTheme.name;
	const isRocketLocked24h = Boolean(rocketCooldownUntil && rocketCooldownUntil > nowMs);
	const rocketCooldownRemainingMs = isRocketLocked24h ? Math.max(0, (rocketCooldownUntil || 0) - nowMs) : 0;
	const formatCooldownHMS = (ms) => {
		const totalSeconds = Math.floor(ms / 1e3);
		const hours = Math.floor(totalSeconds / 3600);
		const minutes = Math.floor(totalSeconds % 3600 / 60);
		const seconds = totalSeconds % 60;
		return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
	};
	const currentRocketTier = ROCKET_TIERS.find((t) => t.level === rocketLevel) || ROCKET_TIERS[0];
	const previewRocketTier = ROCKET_TIERS.find((t) => t.level === previewRocketLevel) || currentRocketTier;
	const rocketProgressPercent = isRocketLocked24h ? 100 : Math.min(100, Math.round(rocketCurrentSupport / currentRocketTier.targetCoins * 100));
	const seats8 = Array.from({ length: 8 }, (_, idx) => {
		const existing = activeRoom.seats[idx];
		if (existing) return existing;
		return {
			index: idx,
			userId: null,
			heartPoints: 0,
			isMuted: false,
			isLocked: false,
			isReserved: false,
			isSpeaking: false,
			audioLevel: 0
		};
	});
	const occupiedSeats = seats8.filter((s) => Boolean(s.userId));
	const mySeat = seats8.find((s) => s.userId === currentUser.id);
	const totalBagCount = Object.values(bagGifts).reduce((a, b) => a + b, 0);
	const openGiftDrawer = (preferredSeatIndex) => {
		if (preferredSeatIndex !== void 0 && seats8[preferredSeatIndex] && Boolean(seats8[preferredSeatIndex].userId)) setSelectedRecipientSeats([preferredSeatIndex]);
		else setSelectedRecipientSeats((prev) => {
			const stillOccupied = prev.filter((idx) => Boolean(seats8[idx]?.userId));
			if (stillOccupied.length > 0) return stillOccupied;
			return occupiedSeats.length > 0 ? [occupiedSeats[0].index] : [];
		});
		setActiveBottomDrawer("gift");
	};
	const formatScore = (val) => {
		if (val === 0) return "0";
		if (val >= 1e6) return `${(val / 1e6).toFixed(1)}M`;
		if (val >= 1e3) return `${(val / 1e3).toFixed(1)}K`;
		return val.toString();
	};
	const getTargetNamesLabel = (seatIndices) => {
		const valid = seatIndices.filter((i) => i >= 0 && i < 8 && Boolean(seats8[i]?.userId));
		if (valid.length === 0) return "";
		if (occupiedSeats.length > 1 && valid.length === occupiedSeats.length) return "جميع المتحدثين";
		const names = valid.map((idx) => seats8[idx]?.userName || `مايك ${idx + 1}`);
		return names.length <= 2 ? names.join("، ") : `${names[0]} +${names.length - 1}`;
	};
	const getSeatCoords = (seatIndex) => {
		const row = Math.floor(seatIndex / 4);
		return {
			targetX: 83 - seatIndex % 4 * 22,
			targetY: 24 + row * 15
		};
	};
	const handleCopyRoomId = () => {
		navigator.clipboard?.writeText(activeRoom.roomNo || "2026091");
		setIdCopied(true);
		setTimeout(() => setIdCopied(false), 1800);
	};
	const handleLaunchLuckyBag = (tierName, costCoins, rewardPoolCoins, giftRewards) => {
		if (costCoins > 0 && currentUser.coins < costCoins) {
			setActiveBottomDrawer("none");
			setActiveModal("wallet");
			return;
		}
		if (costCoins > 0) {
			rechargeCoins(-costCoins, `إطلاق ${tierName} في الغرفة`);
			addSupportToRocket(costCoins);
		}
		setActiveBottomDrawer("none");
		const now = Date.now();
		const bagId = `lbag_${now}_${Math.random().toString(36).slice(2, 6)}`;
		handledRoomEventIdsRef.current.add(bagId);
		setActiveLuckyBag({
			id: bagId,
			tierName,
			senderName: currentUser.displayName,
			totalCoinsPool: rewardPoolCoins,
			rewardGifts: giftRewards,
			timeLeftMs: 1e4,
			claimedByMe: false
		});
		const bagEvent = {
			id: bagId,
			kind: "lucky_bag",
			roomId: activeRoom.id,
			senderId: currentUser.id,
			senderName: currentUser.displayName,
			senderAvatar: currentUser.avatar,
			senderVipLevel: currentUser.vipLevel,
			senderLevel: currentUser.level,
			createdAt: now,
			tierName,
			totalCoinsPool: rewardPoolCoins,
			rewardGifts: giftRewards
		};
		selfHostedVoice.broadcastRoomEvent(bagEvent);
		publishRoomLiveEventToFirestore(bagEvent).catch(() => {});
	};
	const handleClaimLuckyBag = () => {
		if (!activeLuckyBag || activeLuckyBag.claimedByMe) return;
		const wonCoins = activeLuckyBag.totalCoinsPool;
		const wonGifts = activeLuckyBag.rewardGifts;
		setActiveLuckyBag(null);
		rechargeCoins(wonCoins, `استلام ${activeLuckyBag.tierName}`);
		addBagGifts(wonGifts.map((g) => ({
			giftId: g.giftId,
			count: g.count
		})));
		setLuckyBagRewardToast({
			coinsWon: wonCoins,
			giftsWon: wonGifts.map((g) => ({
				nameAr: g.nameAr,
				icon: g.icon,
				count: g.count
			}))
		});
		const nowTime = (/* @__PURE__ */ new Date()).toLocaleTimeString("ar-EG", {
			hour: "2-digit",
			minute: "2-digit"
		});
		setRoomEventLogs((prev) => [...prev.slice(-30), {
			id: `log_lbag_${Date.now()}`,
			type: "lucky_bag_claim",
			senderName: currentUser.displayName,
			vipLevel: currentUser.vipLevel,
			level: currentUser.level,
			targetNames: activeLuckyBag.tierName,
			giftName: wonGifts.map((g) => `${g.nameAr} ×${g.count}`).join(" · "),
			giftIcon: "🧧",
			giftCount: 1,
			comboHits: 1,
			winCoins: wonCoins,
			time: nowTime
		}]);
	};
	const completeRocketTier = (tierToComplete, carryOverCoins = 0) => {
		rechargeCoins(tierToComplete.rewardCoins, `مكافأة ${tierToComplete.nameAr}`);
		const resolvedRewards = resolveRocketBagGifts(tierToComplete.level, gifts);
		const wonGiftsSummary = resolvedRewards.map((rg) => ({
			nameAr: rg.gift.nameAr,
			icon: rg.gift.icon,
			count: rg.count
		}));
		if (resolvedRewards.length > 0) addBagGifts(resolvedRewards.map((rg) => ({
			giftId: rg.giftId,
			count: rg.count
		})));
		setRocketRewardPopup({
			level: tierToComplete.level,
			nameAr: tierToComplete.nameAr,
			coinsWon: tierToComplete.rewardCoins,
			giftsWon: wonGiftsSummary
		});
		const now = Date.now();
		const rocketEvId = `rocket_${now}_${Math.random().toString(36).slice(2, 6)}`;
		handledRoomEventIdsRef.current.add(rocketEvId);
		const nowTime = new Date(now).toLocaleTimeString("ar-EG", {
			hour: "2-digit",
			minute: "2-digit"
		});
		setRoomEventLogs((prev) => [...prev.slice(-30), {
			id: `log_rocket_${now}`,
			type: "rocket_explosion",
			senderName: currentUser.displayName,
			vipLevel: currentUser.vipLevel,
			level: currentUser.level,
			targetNames: "الغرفة",
			giftName: tierToComplete.nameAr,
			giftIcon: tierToComplete.icon,
			giftCount: 1,
			comboHits: tierToComplete.level,
			winCoins: tierToComplete.rewardCoins,
			time: nowTime
		}]);
		const rocketEvent = {
			id: rocketEvId,
			kind: "rocket_explosion",
			roomId: activeRoom.id,
			senderId: currentUser.id,
			senderName: currentUser.displayName,
			senderAvatar: currentUser.avatar,
			senderVipLevel: currentUser.vipLevel,
			senderLevel: currentUser.level,
			createdAt: now,
			rocketLevel: tierToComplete.level,
			rocketNameAr: tierToComplete.nameAr,
			rocketIcon: tierToComplete.icon,
			rewardCoins: tierToComplete.rewardCoins
		};
		selfHostedVoice.broadcastRoomEvent(rocketEvent);
		publishRoomLiveEventToFirestore(rocketEvent).catch(() => {});
		if (tierToComplete.level >= 5) {
			const lockUntil = Date.now() + 864e5;
			setNowMs(Date.now());
			setRocketCooldownUntil(lockUntil);
			setRocketLevel(5);
			setPreviewRocketLevel(5);
			setRocketCurrentSupport(tierToComplete.targetCoins);
		} else {
			const nextLvl = tierToComplete.level + 1;
			setRocketLevel(nextLvl);
			setPreviewRocketLevel(nextLvl);
			setRocketCurrentSupport(carryOverCoins);
		}
	};
	const addSupportToRocket = (supportCoins) => {
		if (supportCoins <= 0) return;
		if (rocketCooldownUntil && Date.now() < rocketCooldownUntil) return;
		setRocketCurrentSupport((prev) => {
			const nextVal = prev + supportCoins;
			if (nextVal >= currentRocketTier.targetCoins) {
				const excessCoins = Math.max(0, nextVal - currentRocketTier.targetCoins);
				setTimeout(() => {
					completeRocketTier(currentRocketTier, excessCoins);
				}, 250);
				return currentRocketTier.targetCoins;
			}
			return nextVal;
		});
	};
	const triggerSubtleGiftGlide = (gift, targetSeats, count) => {
		const batchId = `glide_${Date.now()}_${Math.random()}`;
		const items = targetSeats.map((seatIdx) => {
			const { targetX, targetY } = getSeatCoords(seatIdx);
			return {
				id: `${batchId}_${seatIdx}`,
				seatIndex: seatIdx,
				giftIcon: gift.icon,
				giftImageUrl: gift.imageUrl,
				targetX,
				targetY,
				phase: "start"
			};
		});
		setSubtleGlides((prev) => [...prev, ...items]);
		requestAnimationFrame(() => {
			setTimeout(() => {
				setSubtleGlides((prev) => prev.map((p) => p.id.startsWith(batchId) ? {
					...p,
					phase: "flying"
				} : p));
			}, 20);
		});
		setTimeout(() => {
			setSubtleGlides((prev) => prev.filter((p) => !p.id.startsWith(batchId)));
			setSeatPulseMap((prev) => {
				const next = { ...prev };
				targetSeats.forEach((sIdx) => {
					next[sIdx] = {
						icon: gift.icon,
						count
					};
				});
				return next;
			});
			setTimeout(() => {
				setSeatPulseMap((prev) => {
					const copy = { ...prev };
					targetSeats.forEach((sIdx) => {
						delete copy[sIdx];
					});
					return copy;
				});
			}, 650);
		}, 460);
	};
	const buildGiftSnapshot = (gift) => ({
		id: gift.id,
		name: gift.name,
		nameAr: gift.nameAr,
		category: gift.category,
		coinPrice: gift.coinPrice,
		diamondReward: gift.diamondReward,
		icon: gift.icon,
		imageUrl: gift.imageUrl,
		videoUrl: gift.videoUrl,
		soundUrl: gift.soundUrl,
		effectDurationSec: gift.effectDurationSec,
		accentColor: gift.accentColor,
		animationType: gift.animationType,
		soundEffect: gift.soundEffect,
		isLucky: gift.isLucky
	});
	const playGiftVisualsAndLog = (params) => {
		const { gift, senderId, senderName, senderAvatar, senderVipLevel, senderLevel, targetSeats, targetLabel, count, comboHits, isLucky, luckyMultiplier, luckyWinCoins, now } = params;
		if (targetSeats.length > 0) triggerSubtleGiftGlide(gift, targetSeats, count);
		const pulseKey = ++stagePulseCounterRef.current;
		if (gift.soundUrl) sound.preloadAudioUrl(gift.soundUrl);
		const stageMedia = resolveGiftStageMedia(gift);
		if (stageMedia.mediaUrl) {
			const mediaUrl = stageMedia.mediaUrl;
			setActiveStageGift((prev) => {
				if (prev && prev.mediaUrl === mediaUrl) return {
					...prev,
					comboPulseKey: pulseKey,
					giftName: gift.nameAr,
					senderName,
					soundEffect: gift.soundEffect,
					soundUrl: gift.soundUrl
				};
				return {
					id: `stage_${now}_${gift.id}_${pulseKey}`,
					mediaUrl,
					fallbackUrl: stageMedia.fallbackUrl,
					preferVideo: stageMedia.preferVideo,
					durationMs: stageMedia.durationMs,
					hasExplicitDuration: stageMedia.hasExplicitDuration,
					comboPulseKey: pulseKey,
					giftName: gift.nameAr,
					senderName,
					soundEffect: gift.soundEffect,
					soundUrl: gift.soundUrl
				};
			});
		} else sound.playGiftHitAudio(gift.soundEffect, gift.soundUrl, isRoomSoundMuted);
		const trackKey = `${senderId}_${gift.id}_${targetLabel}`;
		setGiftComboTrack((prev) => {
			const existingIdx = prev.findIndex((item) => item.key === trackKey);
			const updatedItem = {
				id: `${trackKey}_${now}`,
				key: trackKey,
				senderName,
				senderAvatar,
				targetNames: targetLabel,
				giftName: gift.nameAr,
				giftIcon: gift.icon,
				giftImageUrl: gift.imageUrl,
				countPerHit: count,
				comboHits: existingIdx >= 0 ? prev[existingIdx].comboHits + 1 : comboHits,
				isLucky,
				luckyMultiplier,
				luckyWinCoins,
				updatedAt: now
			};
			if (existingIdx >= 0) {
				const clone = [...prev];
				clone[existingIdx] = updatedItem;
				return clone;
			}
			return [...prev.slice(-1), updatedItem];
		});
		if (gift.coinPrice >= 5e4) {
			setLuxuryNotice({
				id: `lux_${now}`,
				senderName,
				targetNames: targetLabel,
				giftName: gift.nameAr,
				giftIcon: gift.icon,
				giftImageUrl: gift.imageUrl,
				count
			});
			if (luxuryTimeoutRef.current) window.clearTimeout(luxuryTimeoutRef.current);
			luxuryTimeoutRef.current = window.setTimeout(() => setLuxuryNotice(null), 2800);
		}
		const nowTime = new Date(now).toLocaleTimeString("ar-EG", {
			hour: "2-digit",
			minute: "2-digit"
		});
		setRoomEventLogs((prev) => [...prev.slice(-30), {
			id: `log_gift_${now}_${Math.random()}`,
			type: isLucky && luckyWinCoins ? "lucky_win" : "gift_throw",
			senderName,
			vipLevel: senderVipLevel,
			level: senderLevel,
			targetNames: targetLabel,
			giftName: gift.nameAr,
			giftIcon: gift.icon,
			giftCount: count,
			comboHits,
			winCoins: luckyWinCoins,
			multiplier: luckyMultiplier,
			time: nowTime
		}]);
	};
	handleIncomingRoomEventRef.current = (ev) => {
		if (!ev || !ev.id || !activeRoom || ev.roomId !== activeRoom.id) return;
		if (handledRoomEventIdsRef.current.has(ev.id)) return;
		handledRoomEventIdsRef.current.add(ev.id);
		if (handledRoomEventIdsRef.current.size > 400) Array.from(handledRoomEventIdsRef.current).slice(0, 150).forEach((k) => handledRoomEventIdsRef.current.delete(k));
		const now = Date.now();
		if (ev.kind === "gift_throw" && ev.gift) {
			const catalogMatch = gifts.find((g) => g.id === ev.gift.id);
			const resolvedGift = {
				id: ev.gift.id,
				name: ev.gift.name || catalogMatch?.name || ev.gift.nameAr,
				nameAr: ev.gift.nameAr || catalogMatch?.nameAr || "هدية",
				category: ev.gift.category || catalogMatch?.category || "classic",
				coinPrice: ev.gift.coinPrice ?? catalogMatch?.coinPrice ?? 0,
				diamondReward: ev.gift.diamondReward ?? catalogMatch?.diamondReward ?? 0,
				icon: ev.gift.icon || catalogMatch?.icon || "🎁",
				imageUrl: ev.gift.imageUrl || catalogMatch?.imageUrl,
				videoUrl: ev.gift.videoUrl || catalogMatch?.videoUrl,
				soundUrl: ev.gift.soundUrl || catalogMatch?.soundUrl,
				effectDurationSec: ev.gift.effectDurationSec ?? catalogMatch?.effectDurationSec,
				accentColor: ev.gift.accentColor || catalogMatch?.accentColor || "from-amber-400 to-orange-500",
				animationType: ev.gift.animationType || catalogMatch?.animationType || "float_sparkle",
				soundEffect: ev.gift.soundEffect || catalogMatch?.soundEffect || "chime",
				descriptionAr: catalogMatch?.descriptionAr || "",
				isLucky: ev.gift.isLucky ?? catalogMatch?.isLucky
			};
			const validTargetSeats = (ev.targetSeats || []).filter((idx) => idx >= 0 && idx < 8);
			const targetLabel = ev.targetNames || (validTargetSeats.length > 0 ? getTargetNamesLabel(validTargetSeats) : "المتحدثين");
			playGiftVisualsAndLog({
				gift: resolvedGift,
				senderId: ev.senderId,
				senderName: ev.senderName || "مستخدم",
				senderAvatar: ev.senderAvatar || "",
				senderVipLevel: ev.senderVipLevel || 0,
				senderLevel: ev.senderLevel || 1,
				targetSeats: validTargetSeats,
				targetLabel,
				count: Math.max(1, ev.count || 1),
				comboHits: Math.max(1, ev.comboHits || 1),
				isLucky: Boolean(ev.isLucky || resolvedGift.isLucky || resolvedGift.category === "lucky"),
				luckyMultiplier: ev.luckyMultiplier,
				luckyWinCoins: ev.luckyWinCoins,
				now
			});
		} else if (ev.kind === "lucky_bag" && ev.tierName) setActiveLuckyBag({
			id: ev.id,
			tierName: ev.tierName,
			senderName: ev.senderName || "مستخدم",
			totalCoinsPool: ev.totalCoinsPool || 0,
			rewardGifts: ev.rewardGifts || [],
			timeLeftMs: 1e4,
			claimedByMe: false
		});
		else if (ev.kind === "rocket_explosion") {
			const nowTime = new Date(now).toLocaleTimeString("ar-EG", {
				hour: "2-digit",
				minute: "2-digit"
			});
			setRoomEventLogs((prev) => [...prev.slice(-30), {
				id: `log_rocket_${now}_${Math.random()}`,
				type: "rocket_explosion",
				senderName: ev.senderName || "مستخدم",
				vipLevel: ev.senderVipLevel || 0,
				level: ev.senderLevel || 1,
				targetNames: "الغرفة",
				giftName: ev.rocketNameAr || "صاروخ الغرفة",
				giftIcon: ev.rocketIcon || "🚀",
				giftCount: 1,
				comboHits: ev.rocketLevel || 1,
				winCoins: ev.rewardCoins || 0,
				time: nowTime
			}]);
		} else if (ev.kind === "seat_emoji" && typeof ev.seatIndex === "number" && ev.emoji) {
			const targetIdx = ev.seatIndex;
			const emojiStr = ev.emoji;
			setSeatEmojis((prev) => ({
				...prev,
				[targetIdx]: emojiStr
			}));
			setTimeout(() => {
				setSeatEmojis((prev) => {
					if (prev[targetIdx] !== emojiStr) return prev;
					const copy = { ...prev };
					delete copy[targetIdx];
					return copy;
				});
			}, 3500);
		} else if (ev.kind === "chat_message" && ev.text) appendRoomMessage({
			id: ev.id,
			roomId: ev.roomId,
			senderId: ev.senderId,
			senderName: ev.senderName || "مستخدم",
			senderAvatar: ev.senderAvatar || "",
			vipLevel: ev.senderVipLevel || 0,
			level: ev.senderLevel || 1,
			text: ev.text,
			isSystem: Boolean(ev.isSystem),
			timestamp: ev.timestamp || new Date(ev.createdAt || now).toLocaleTimeString([], {
				hour: "2-digit",
				minute: "2-digit"
			})
		});
	};
	const executeGiftThrow = (gift, count, targetSeats, comboHits, fromBag = false, comboCumulativeCoins = 0) => {
		const finalTargets = targetSeats.filter((i) => i >= 0 && i < 8 && Boolean(seats8[i]?.userId));
		if (finalTargets.length === 0) return false;
		sound.unlockAudio();
		const targetLabel = getTargetNamesLabel(finalTargets);
		const totalNeededCount = count * finalTargets.length;
		const now = Date.now();
		lastLocalGiftThrowTsRef.current = now;
		if (fromBag) {
			const ownedCount = bagGifts[gift.id] || 0;
			if (ownedCount <= 0) return false;
			const deductCount = Math.min(ownedCount, totalNeededCount);
			if (!consumeBagGift(gift.id, deductCount)) return false;
		} else if (!sendGift(gift.id, count, "seat", finalTargets[0], finalTargets, { skipLiveBroadcast: true })) return false;
		setSeatHeartsOverride((prev) => {
			const next = { ...prev };
			finalTargets.forEach((idx) => delete next[idx]);
			return next;
		});
		const totalGiftValue = gift.coinPrice * count * finalTargets.length;
		if (!fromBag) addSupportToRocket(totalGiftValue);
		const isLuckyGift = gift.isLucky || gift.category === "lucky" || gift.animationType === "lollipop_matrix";
		let luckyMult;
		let luckyWinCoins;
		if (isLuckyGift) {
			const effectiveCumulative = comboCumulativeCoins > 0 ? comboCumulativeCoins : totalGiftValue;
			const res = evaluateLuckyGiftWin(gift, count * finalTargets.length, comboHits, effectiveCumulative, activeRoom.title);
			if (res.won) {
				luckyMult = res.multiplier;
				luckyWinCoins = res.winCoins;
			}
		}
		const eventId = `gift_${now}_${Math.random().toString(36).slice(2, 7)}`;
		handledRoomEventIdsRef.current.add(eventId);
		playGiftVisualsAndLog({
			gift,
			senderId: currentUser.id,
			senderName: currentUser.displayName,
			senderAvatar: currentUser.avatar,
			senderVipLevel: currentUser.vipLevel,
			senderLevel: currentUser.level,
			targetSeats: finalTargets,
			targetLabel,
			count,
			comboHits,
			isLucky: isLuckyGift,
			luckyMultiplier: luckyMult,
			luckyWinCoins,
			now
		});
		const liveEvent = {
			id: eventId,
			kind: "gift_throw",
			roomId: activeRoom.id,
			senderId: currentUser.id,
			senderName: currentUser.displayName,
			senderAvatar: currentUser.avatar,
			senderVipLevel: currentUser.vipLevel,
			senderLevel: currentUser.level,
			createdAt: now,
			gift: buildGiftSnapshot(gift),
			targetSeats: finalTargets,
			targetNames: targetLabel,
			count,
			comboHits,
			isLucky: isLuckyGift,
			luckyMultiplier: luckyMult,
			luckyWinCoins
		};
		selfHostedVoice.broadcastRoomEvent(liveEvent);
		publishRoomLiveEventToFirestore(liveEvent).catch(() => {});
		return true;
	};
	const handleSendSelectedGift = () => {
		const giftObj = gifts.find((g) => g.id === selectedGiftId) || gifts[0];
		const targets = selectedRecipientSeats.filter((i) => i >= 0 && i < 8 && Boolean(seats8[i]?.userId));
		if (!giftObj || targets.length === 0) return;
		const isFromBag = giftDrawerTab === "bag" && (bagGifts[giftObj.id] || 0) > 0;
		if (giftDrawerTab === "bag" && !isFromBag) return;
		const hitCoins = giftObj.coinPrice * giftCount * targets.length;
		setActiveBottomDrawer("none");
		if (!executeGiftThrow(giftObj, giftCount, targets, 1, isFromBag, hitCoins)) return;
		setComboState({
			active: true,
			gift: giftObj,
			count: giftCount,
			targetSeats: targets,
			comboHits: 1,
			cumulativeCoins: hitCoins,
			timeLeftMs: 2e3,
			fromBag: isFromBag
		});
	};
	const handleComboClick = () => {
		if (!comboState) return;
		const nextCombo = comboState.comboHits + 1;
		const hitCoins = comboState.gift.coinPrice * comboState.count * comboState.targetSeats.length;
		const nextCumulative = comboState.cumulativeCoins + hitCoins;
		if (!executeGiftThrow(comboState.gift, comboState.count, comboState.targetSeats, nextCombo, comboState.fromBag, nextCumulative)) {
			setComboState(null);
			return;
		}
		setComboState({
			...comboState,
			comboHits: nextCombo,
			cumulativeCoins: nextCumulative,
			timeLeftMs: 2e3
		});
	};
	const filteredDrawerGifts = gifts.filter((g) => {
		if (giftDrawerTab === "all") return true;
		if (giftDrawerTab === "lucky") return g.isLucky || g.category === "lucky" || g.animationType === "lollipop_matrix";
		if (giftDrawerTab === "classic") return g.category === "classic" || g.category === "romantic";
		if (giftDrawerTab === "luxury") return g.category === "luxury" || g.category === "vip" || g.category === "magic" || g.coinPrice >= 5e3;
		if (giftDrawerTab === "bag") return (bagGifts[g.id] || 0) > 0;
		return true;
	});
	const handleSendEmojiToMySeat = (emoji) => {
		const mySeatIndex = seats8.findIndex((s) => s.userId === currentUser.id);
		const targetIdx = mySeatIndex >= 0 ? mySeatIndex : 0;
		if (mySeatIndex < 0) takeSeat(0);
		const now = Date.now();
		const emojiEvId = `emoji_${now}_${Math.random().toString(36).slice(2, 6)}`;
		handledRoomEventIdsRef.current.add(emojiEvId);
		setSeatEmojis((prev) => ({
			...prev,
			[targetIdx]: emoji
		}));
		setActiveBottomDrawer("none");
		setTimeout(() => {
			setSeatEmojis((prev) => {
				const copy = { ...prev };
				delete copy[targetIdx];
				return copy;
			});
		}, 3500);
		const emojiEvent = {
			id: emojiEvId,
			kind: "seat_emoji",
			roomId: activeRoom.id,
			senderId: currentUser.id,
			senderName: currentUser.displayName,
			senderAvatar: currentUser.avatar,
			senderVipLevel: currentUser.vipLevel,
			senderLevel: currentUser.level,
			createdAt: now,
			seatIndex: targetIdx,
			emoji
		};
		selfHostedVoice.broadcastRoomEvent(emojiEvent);
		publishRoomLiveEventToFirestore(emojiEvent).catch(() => {});
	};
	const handleClearHeartValue = (seatIndex) => {
		if (!canManage) return;
		clearSeatHeartPoints(seatIndex);
		setSeatHeartsOverride((prev) => {
			const copy = { ...prev };
			delete copy[seatIndex];
			return copy;
		});
		setActiveBottomDrawer("none");
	};
	const handleToggleLockAllSeats = () => {
		if (!canManage) return;
		toggleAllSeatsLock();
	};
	const openRoomSettingsDrawer = (tab = "backgrounds") => {
		setNoticeDraft(activeRoom.announcement || roomNotice);
		setTitleDraft(activeRoom.title);
		setPrivacyTypeDraft(activeRoom.type);
		setPasswordDraft(activeRoom.password || "");
		setIsLockedDraft(Boolean(activeRoom.isLocked));
		setSettingsFeedback(null);
		setRoomSettingsTab(tab);
		setActiveBottomDrawer("room_settings");
	};
	const handleSendChat = (e) => {
		e.preventDefault();
		if (!chatInput.trim()) return;
		sendRoomMessage(chatInput.trim());
		setChatInput("");
		setShowChatInputBar(false);
	};
	const emojiSets = {
		faces: [
			"😊",
			"😂",
			"🥰",
			"😎",
			"🥳",
			"🤩",
			"😮",
			"😴",
			"🥺",
			"😤",
			"🤔",
			"🫡"
		],
		gestures: [
			"👏",
			"🔥",
			"👍",
			"🙌",
			"🫶",
			"🤝",
			"✌️",
			"👑",
			"💯",
			"🎉",
			"🎶",
			"🎙️"
		],
		hearts: [
			"❤️",
			"💖",
			"🌹",
			"💐",
			"💎",
			"💍",
			"✨",
			"🌙",
			"☕",
			"🥂",
			"🎁",
			"🏆"
		],
		fun: [
			"🐼",
			"🐱",
			"🦄",
			"🦋",
			"🍀",
			"🎯",
			"🚀",
			"⚡",
			"🌈",
			"🍓",
			"🧸",
			"🎈"
		]
	};
	const visibleEventLogs = roomEventLogs.filter((log) => {
		const logTs = Number(log.id.split("_")[2] || Date.now());
		if (chatClearedBeforeTs && logTs < chatClearedBeforeTs) return false;
		if (chatTab === "all") return true;
		if (chatTab === "gifts") return log.type === "gift_throw" || log.type === "lucky_win";
		if (chatTab === "system") return log.type === "game_win" || log.type === "rocket_explosion" || log.type === "lucky_bag_claim";
		return false;
	});
	const visibleTextMessages = activeRoomMessages.filter((msg) => {
		if (msg.giftData) return false;
		if (chatTab === "all") return true;
		if (chatTab === "message") return !msg.isSystem;
		if (chatTab === "gifts") return false;
		if (chatTab === "system") return Boolean(msg.isSystem);
		return true;
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		onPointerDownCapture: () => {
			sound.unlockAudio();
			agoraVoice.resumeRemoteAudio();
		},
		className: "relative h-dvh w-full bg-[#090c14] flex items-center justify-center font-tajawal select-none overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "hidden sm:block fixed inset-0 pointer-events-none",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: resolvedRoomWallpaperUrl,
				alt: "",
				referrerPolicy: "no-referrer",
				className: "w-full h-full object-cover opacity-30 blur-2xl scale-110"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-b from-[#070a12]/80 via-[#0a0e1a]/75 to-[#060810]/90" })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: `relative w-full max-w-[460px] h-full sm:h-[min(900px,calc(100dvh-2rem))] sm:rounded-[30px] sm:border sm:border-white/10 bg-gradient-to-b ${activeTheme.fallbackGradient} text-white flex flex-col overflow-hidden shadow-[0_24px_80px_rgba(0,0,0,0.75)]`,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: resolvedRoomWallpaperUrl,
					alt: resolvedRoomWallpaperName,
					referrerPolicy: "no-referrer",
					className: "absolute inset-0 w-full h-full object-cover opacity-70 pointer-events-none transition-opacity duration-500"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-b from-[#070a13]/75 via-[#090d18]/45 to-[#060810]/92 pointer-events-none" }),
				activeStageGift && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SmartMediaView, {
					mode: "stage",
					url: activeStageGift.mediaUrl,
					fallbackUrl: activeStageGift.fallbackUrl,
					preferVideo: activeStageGift.preferVideo,
					alt: activeStageGift.giftName,
					muted: isRoomSoundMuted,
					durationMs: activeStageGift.durationMs,
					hasExplicitDuration: activeStageGift.hasExplicitDuration,
					resetKey: activeStageGift.comboPulseKey,
					onReady: () => {
						if (lastPlayedStageSoundKeyRef.current !== activeStageGift.comboPulseKey) {
							lastPlayedStageSoundKeyRef.current = activeStageGift.comboPulseKey;
							sound.playGiftHitAudio(activeStageGift.soundEffect, activeStageGift.soundUrl, isRoomSoundMuted);
						}
					},
					onEnded: () => {
						if (lastPlayedStageSoundKeyRef.current !== activeStageGift.comboPulseKey) {
							lastPlayedStageSoundKeyRef.current = activeStageGift.comboPulseKey;
							sound.playGiftHitAudio(activeStageGift.soundEffect, activeStageGift.soundUrl, isRoomSoundMuted);
						}
						setActiveStageGift(null);
					}
				}, activeStageGift.id),
				entranceBanner && (() => {
					const fallbackResolved = resolveEntranceStageMedia({
						videoUrl: entranceBanner.entranceVideoUrl,
						previewUrl: entranceBanner.entrancePreviewUrl
					});
					const stageUrl = entranceBanner.entranceMediaUrl || fallbackResolved.primaryUrl;
					const stagePreferVideo = entranceBanner.preferVideo !== void 0 ? entranceBanner.preferVideo : fallbackResolved.preferVideo;
					const stageDurationMs = entranceBanner.durationMs || fallbackResolved.durationMs;
					const stageHasExplicitDuration = entranceBanner.hasExplicitDuration ?? fallbackResolved.hasExplicitDuration;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [stageUrl && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SmartMediaView, {
						mode: "stage",
						url: stageUrl,
						fallbackUrl: entranceBanner.entrancePreviewUrl,
						preferVideo: stagePreferVideo,
						alt: entranceBanner.entranceName,
						muted: isRoomSoundMuted,
						durationMs: stageDurationMs,
						hasExplicitDuration: stageHasExplicitDuration,
						resetKey: entranceBanner.id,
						onEnded: clearEntranceBanner
					}, entranceBanner.id), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute top-[104px] inset-x-3.5 z-[45] pointer-events-none flex justify-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "px-4 py-2 rounded-2xl bg-gradient-to-r from-[#1d1408]/95 via-[#31210d]/95 to-[#1d1408]/95 border border-amber-400/60 backdrop-blur-md shadow-2xl flex items-center gap-2.5 animate-gift-banner",
							children: [
								entranceBanner.userAvatar && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: entranceBanner.userAvatar,
									alt: entranceBanner.userName,
									referrerPolicy: "no-referrer",
									className: "w-8 h-8 rounded-full object-cover border border-amber-400 shrink-0"
								}),
								entranceBanner.entrancePreviewUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SmartMediaView, {
									mode: "thumbnail",
									url: entranceBanner.entrancePreviewUrl,
									alt: entranceBanner.entranceName,
									className: "w-8 h-8 rounded-lg object-contain shrink-0",
									fallback: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xl shrink-0",
										children: entranceBanner.entranceIcon
									})
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xl shrink-0",
									children: entranceBanner.entranceIcon
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-xs text-right leading-snug",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-black text-amber-300",
											children: entranceBanner.userName
										}), entranceBanner.vipLevel > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "px-1.5 py-0.5 rounded bg-amber-400 text-slate-950 font-black text-[9px]",
											children: ["VIP ", entranceBanner.vipLevel]
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "text-[11px] text-slate-200",
										children: ["دخل بـ ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-bold text-amber-200",
											children: entranceBanner.entranceName
										})]
									})]
								})
							]
						})
					})] });
				})(),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-0 z-30 pointer-events-none overflow-hidden",
					children: subtleGlides.map((glide) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						style: {
							position: "absolute",
							left: glide.phase === "start" ? "14%" : `${glide.targetX}%`,
							top: glide.phase === "start" ? "92%" : `${glide.targetY}%`,
							transform: glide.phase === "start" ? "translate(-50%, -50%) scale(0.75)" : "translate(-50%, -50%) scale(1.1)",
							opacity: glide.phase === "start" ? .95 : .85,
							transition: "left 440ms cubic-bezier(0.16, 1, 0.3, 1), top 440ms cubic-bezier(0.16, 1, 0.3, 1), transform 440ms ease-out"
						},
						className: "w-10 h-10 rounded-full bg-slate-950/70 backdrop-blur-sm border border-amber-400/50 flex items-center justify-center text-xl shadow-lg overflow-hidden",
						children: glide.giftImageUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: glide.giftImageUrl,
							alt: "",
							referrerPolicy: "no-referrer",
							className: "w-7 h-7 object-contain"
						}) : glide.giftIcon
					}, glide.id))
				}),
				luxuryNotice && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute top-[108px] inset-x-3 z-40 pointer-events-none flex justify-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "px-4 py-2 rounded-2xl bg-gradient-to-r from-[#1c1308]/95 via-[#2e1f0c]/95 to-[#1c1308]/95 border border-amber-400/50 backdrop-blur-md shadow-xl flex items-center gap-2.5 animate-gift-banner",
						children: [luxuryNotice.giftImageUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: luxuryNotice.giftImageUrl,
							alt: luxuryNotice.giftName,
							referrerPolicy: "no-referrer",
							className: "w-7 h-7 rounded-lg object-contain shrink-0"
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xl",
							children: luxuryNotice.giftIcon
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-xs text-right leading-snug",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-bold text-amber-300",
									children: luxuryNotice.senderName
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-slate-300 mx-1",
									children: "أهدى"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-bold text-white",
									children: luxuryNotice.giftName
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-amber-400 font-mono tabular-nums mx-1",
									children: ["×", luxuryNotice.count]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-slate-300",
									children: ["إلى ", luxuryNotice.targetNames]
								})
							]
						})]
					})
				}),
				activeLuckyBag && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute top-[112px] inset-x-3.5 z-40 pointer-events-none flex justify-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "pointer-events-auto w-full rounded-2xl bg-gradient-to-r from-[#2c0d14]/95 via-[#3d111a]/95 to-[#260b10]/95 border border-amber-400/60 backdrop-blur-md p-2.5 shadow-2xl flex items-center justify-between gap-3 animate-gift-banner",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: handleClaimLuckyBag,
								className: "min-h-[40px] px-3.5 py-1.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs transition-colors shrink-0 flex flex-col items-center justify-center",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "استلام" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-[10px] font-mono tabular-nums text-red-950",
									children: [(activeLuckyBag.timeLeftMs / 1e3).toFixed(1), "s"]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex-1 text-right min-w-0 space-y-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-end gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-[11px] font-mono tabular-nums text-amber-300",
										children: [Math.ceil(activeLuckyBag.timeLeftMs / 1e3), " ث"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs font-bold text-white truncate",
										children: activeLuckyBag.tierName
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "w-full h-1 rounded-full bg-white/10 overflow-hidden",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "h-full bg-amber-400 transition-all duration-100 ease-linear",
										style: { width: `${activeLuckyBag.timeLeftMs / 1e4 * 100}%` }
									})
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "w-10 h-10 rounded-xl bg-red-900/70 border border-amber-400/40 flex items-center justify-center text-2xl shrink-0",
								children: "🧧"
							})
						]
					})
				}),
				(() => {
					const rawBannerMsg = voiceNotice || agoraStatus.errorMessage || agoraStatus.micError;
					const voiceErrorKey = `${agoraStatus.channel || ""}:${agoraStatus.errorMessage || agoraStatus.micError || ""}`;
					const showErrorBanner = Boolean(voiceNotice) || (agoraStatus.state === "error" || Boolean(agoraStatus.micError)) && dismissedVoiceErrorKey !== voiceErrorKey && Boolean(rawBannerMsg);
					if (!agoraStatus.autoplayBlocked && !showErrorBanner) return null;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute top-[112px] inset-x-4 z-50 flex justify-center",
						children: agoraStatus.autoplayBlocked ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => {
								sound.unlockAudio();
								setIsRoomSoundMuted(false);
								agoraVoice.setRemoteAudioMuted(false);
								agoraVoice.resumeRemoteAudio(true);
								setVoiceNotice(null);
							},
							className: "px-4 py-2 rounded-2xl bg-emerald-600/95 hover:bg-emerald-500 border border-emerald-300/60 text-white text-xs font-black shadow-2xl backdrop-blur-md flex items-center gap-2 cursor-pointer",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Volume2, { className: "w-4 h-4 animate-pulse" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "اضغط هنا لتفعيل سماع الصوت المباشر" })]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "px-3 py-2 rounded-2xl bg-rose-950/95 border border-rose-400/50 text-rose-100 text-xs font-bold shadow-2xl backdrop-blur-md flex items-center gap-2 max-w-full",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "flex-1 leading-relaxed",
									children: rawBannerMsg
								}),
								(agoraStatus.state === "error" || agoraStatus.micError) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => {
										sound.unlockAudio();
										setVoiceNotice(null);
										setDismissedVoiceErrorKey(null);
										if (agoraStatus.state === "error") agoraVoice.reconnectActiveRoom();
										else agoraVoice.retryMicPublish();
									},
									className: "px-2.5 py-1 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-[11px] shrink-0 cursor-pointer",
									children: agoraStatus.state === "error" ? "إعادة ربط الصوت" : "تفعيل المايك"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => {
										setVoiceNotice(null);
										setDismissedVoiceErrorKey(voiceErrorKey);
									},
									"aria-label": "إغلاق التنبيه",
									className: "w-6 h-6 rounded-lg bg-white/10 hover:bg-white/20 text-rose-200 flex items-center justify-center shrink-0 cursor-pointer",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "w-3.5 h-3.5" })
								})
							]
						})
					});
				})(),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
					className: "relative z-30 shrink-0 pt-3 px-3.5 space-y-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2.5 min-w-0 bg-black/35 backdrop-blur-md pl-3 pr-1.5 py-1.5 rounded-2xl border border-white/10",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => {
									const ownerProfile = users.find((u) => u.id === activeRoom.ownerId) || (activeRoom.ownerId === currentUser.id ? currentUser : {
										...currentUser,
										id: activeRoom.ownerId,
										displayName: activeRoom.ownerName || activeRoom.title,
										avatar: activeRoom.ownerAvatar || currentUser.avatar
									});
									setViewingProfileUser(ownerProfile);
									setActiveModal("profile");
								},
								title: activeRoom.ownerId === currentUser.id ? "فتح البروفايل الخاص بي" : "فتح البروفايل",
								className: "relative shrink-0 rounded-xl focus:outline-none hover:ring-2 hover:ring-amber-400/70 transition-all",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: activeRoom.ownerAvatar || currentUser.avatar,
									alt: activeRoom.title,
									referrerPolicy: "no-referrer",
									className: "w-9 h-9 rounded-xl object-cover border border-amber-400/40"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0 text-right",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-1.5 min-w-0",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
											className: "text-[13px] font-bold text-white truncate leading-tight",
											children: activeRoom.title
										}),
										activeRoom.isLocked && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											title: "غرفة مقفلة",
											className: "inline-flex shrink-0",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "w-3 h-3 text-rose-400" })
										}),
										!activeRoom.isLocked && activeRoom.type === "password" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											title: "غرفة برمز مرور",
											className: "inline-flex shrink-0",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(KeyRound, { className: "w-3 h-3 text-amber-400" })
										}),
										activeRoom.type === "vip" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "px-1 py-0.5 rounded bg-amber-400/20 border border-amber-400/40 text-amber-300 text-[9px] font-black shrink-0",
											children: "VIP"
										})
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-1.5 mt-0.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										onClick: handleCopyRoomId,
										className: "flex items-center gap-1 text-[11px] text-slate-300 hover:text-amber-300 transition-colors font-mono tabular-nums",
										title: "نسخ رقم الغرفة",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["ID ", activeRoom.roomNo || "2026091"] }), idCopied ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "w-3 h-3 text-emerald-400" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "w-2.5 h-2.5 opacity-70" })]
									}), isOwner ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "px-1.5 py-0.2 rounded bg-amber-400/15 border border-amber-400/35 text-[9px] font-bold text-amber-300 shrink-0",
										children: "المالك"
									}) : isMod ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "px-1.5 py-0.2 rounded bg-sky-500/20 border border-sky-400/40 text-[9px] font-bold text-sky-300 shrink-0",
										children: "مشرف"
									}) : null]
								})]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-1.5 shrink-0",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									onClick: () => setActiveBottomDrawer("top_ranking"),
									className: "h-9 px-2.5 rounded-xl bg-black/35 backdrop-blur-md border border-white/10 flex items-center gap-1.5 text-xs font-medium text-slate-200 hover:bg-white/10 transition-colors",
									title: "المتواجدون والترتيب",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "w-3.5 h-3.5 text-slate-300" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-mono tabular-nums",
										children: Math.max(1, activeRoom.onlineViewersCount)
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => openRoomSettingsDrawer(canManage ? "privacy" : "backgrounds"),
									className: "w-9 h-9 rounded-xl bg-black/35 backdrop-blur-md border border-white/10 flex items-center justify-center text-slate-200 hover:bg-white/10 transition-colors",
									title: "إعدادات وخصوصية الغرفة",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlidersHorizontal, { className: "w-4 h-4" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: leaveRoom,
									className: "w-9 h-9 rounded-xl bg-black/35 backdrop-blur-md border border-white/10 flex items-center justify-center text-slate-200 hover:bg-white/10 transition-colors",
									title: "تصغير الغرفة",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, { className: "w-4 h-4" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: leaveRoom,
									className: "w-9 h-9 rounded-xl bg-black/35 backdrop-blur-md border border-white/10 flex items-center justify-center text-slate-200 hover:bg-rose-600/80 hover:border-rose-500/50 transition-colors",
									title: "خروج من الغرفة",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Power, { className: "w-4 h-4" })
								})
							]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between gap-2 text-[11px]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => setActiveBottomDrawer("top_ranking"),
								className: "h-7 px-2.5 rounded-lg bg-black/35 backdrop-blur-sm border border-amber-400/25 flex items-center gap-1.5 text-amber-300 hover:bg-amber-400/10 transition-colors shrink-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trophy, { className: "w-3.5 h-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-mono tabular-nums font-bold",
									children: formatScore(activeRoom.totalDiamondsEarned)
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => openRoomSettingsDrawer(canManage ? "privacy" : "backgrounds"),
								className: "h-7 px-2.5 rounded-lg bg-black/25 backdrop-blur-sm border border-white/8 flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors min-w-0 max-w-[185px]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Megaphone, { className: "w-3 h-3 text-amber-400/80 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "truncate",
									children: roomNotice
								})]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-1.5 shrink-0",
							children: [(agoraStatus.state === "connected" || agoraStatus.state === "connecting" || agoraLiveMicActive || agoraStatus.requiresToken) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => {
									sound.unlockAudio();
									agoraVoice.primeFromUserGesture();
									agoraVoice.resumeRemoteAudio(true);
									if (agoraStatus.state === "error") {
										setDismissedVoiceErrorKey(null);
										agoraVoice.reconnectActiveRoom();
									}
								},
								title: agoraStatus.provider === "self_hosted" ? `السيرفر الصوتي الخاص (${agoraStatus.channel || activeRoom.id})` : `قناة Agora (${agoraStatus.channel || agoraStatus.appId})`,
								className: `h-7 px-2 rounded-lg border flex items-center gap-1 text-[10px] font-bold transition-colors ${agoraStatus.state === "connecting" ? "bg-amber-500/15 border-amber-400/40 text-amber-200" : agoraLiveMicActive ? "bg-emerald-500/20 border-emerald-400/50 text-emerald-300" : agoraStatus.requiresToken ? "bg-amber-500/15 border-amber-400/40 text-amber-200" : "bg-black/35 border-emerald-500/30 text-emerald-300/90"}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `w-1.5 h-1.5 rounded-full ${agoraStatus.state === "connecting" ? "bg-amber-400 animate-pulse" : agoraLiveMicActive ? "bg-emerald-400 animate-ping" : agoraStatus.requiresToken ? "bg-amber-400" : "bg-emerald-400"}` }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: agoraStatus.state === "connecting" ? "جاري ربط الصوت" : agoraLiveMicActive ? agoraStatus.state === "connected" ? agoraStatus.remoteUsersCount > 0 ? `مايك مباشر · ${agoraStatus.remoteUsersCount}` : "مايك مباشر" : "مايك محلي" : agoraStatus.requiresToken ? "يلزم Token" : agoraStatus.remoteUsersCount > 0 ? `صوت متصل · ${agoraStatus.remoteUsersCount}` : "صوت متصل" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => {
									setPreviewRocketLevel(rocketLevel);
									setActiveBottomDrawer("rocket");
								},
								className: "h-7 px-2.5 rounded-lg bg-black/35 backdrop-blur-sm border border-white/10 flex items-center gap-1.5 text-slate-200 hover:border-amber-400/40 transition-colors shrink-0",
								title: "صاروخ الغرفة",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Rocket, { className: "w-3.5 h-3.5 text-amber-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-mono tabular-nums font-semibold",
									children: isRocketLocked24h ? formatCooldownHMS(rocketCooldownRemainingMs) : `Lv.${rocketLevel} · ${rocketProgressPercent}%`
								})]
							})]
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "relative z-20 shrink-0 px-3.5 pt-4 pb-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-4 gap-x-2 gap-y-6",
						children: seats8.map((seat, idx) => {
							const isHostSeat = idx === 0;
							const heartVal = seatHeartsOverride[idx] !== void 0 ? seatHeartsOverride[idx] : seat.heartPoints || 0;
							const activeEmoji = seatEmojis[idx];
							const seatPulse = seatPulseMap[idx];
							const isOccupied = Boolean(seat.userId);
							const liveAgoraLevel = seat.userId ? agoraVolumes[seat.userId] : void 0;
							const isSpeaking = isOccupied && !seat.isMuted && (seat.userId === currentUser.id && agoraLiveMicActive ? (liveAgoraLevel ?? 0) > 2 : liveAgoraLevel !== void 0 ? liveAgoraLevel > 2 : seat.isSpeaking);
							const seatUserProfile = seat.userId ? users.find((u) => u.id === seat.userId) : void 0;
							const resolvedAvatar = seat.userId === currentUser.id ? currentUser.avatar : seat.userAvatar || seatUserProfile?.avatar || "";
							const activeSeatFrameId = seat.userId === currentUser.id ? currentUser.activeFrameId : seatUserProfile?.activeFrameId !== void 0 ? seatUserProfile.activeFrameId : seat.activeFrameId;
							const seatFrame = activeSeatFrameId ? storeItems.find((i) => i.type === "frame" && i.id === activeSeatFrameId) : void 0;
							const hasUploadedFrame = isOccupied && Boolean(seatFrame?.previewUrl);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => {
									setSelectedSeatForMenu(seat);
									setActiveBottomDrawer("seat_menu");
								},
								className: "relative flex flex-col items-center group focus:outline-none",
								children: [
									activeEmoji && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "absolute -top-6 z-30 text-3xl animate-bounce pointer-events-none",
										children: activeEmoji
									}),
									seatPulse && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "absolute -top-3 z-30 px-2 py-0.5 rounded-lg bg-slate-950/90 border border-amber-400/60 text-xs font-mono tabular-nums text-amber-300 shadow-lg animate-combo-pop pointer-events-none",
										children: [
											seatPulse.icon,
											" +",
											seatPulse.count
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "relative w-[74px] h-[74px] flex items-center justify-center",
										children: [
											isSpeaking && !hasUploadedFrame && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inset-1 rounded-full border border-amber-400/75 animate-mic-wave pointer-events-none" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "absolute inset-1 rounded-full border border-emerald-400/50 animate-mic-wave pointer-events-none",
												style: { animationDelay: "0.55s" }
											})] }),
											seatPulse && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inset-0 rounded-full border-2 border-amber-400/80 transition-opacity pointer-events-none z-10" }),
											isOccupied ? hasUploadedFrame ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: `relative z-10 w-[44px] h-[44px] rounded-full overflow-hidden flex items-center justify-center transition-transform duration-150 group-active:scale-95 ${isSpeaking ? "ring-2 ring-amber-400/70" : ""}`,
												children: resolvedAvatar ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
													src: resolvedAvatar,
													alt: seat.userName || `مايك ${idx + 1}`,
													referrerPolicy: "no-referrer",
													className: "w-full h-full rounded-full object-cover"
												}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "w-full h-full rounded-full bg-slate-800 flex items-center justify-center text-sm font-black text-amber-300",
													children: (seat.userName || "U").slice(0, 1)
												})
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
												src: seatFrame.previewUrl,
												alt: seatFrame.nameAr,
												referrerPolicy: "no-referrer",
												className: "pointer-events-none select-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[84px] h-[84px] object-contain z-20 drop-shadow-[0_6px_14px_rgba(0,0,0,0.45)]"
											})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: `w-[58px] h-[58px] rounded-full p-[2px] transition-transform duration-150 group-active:scale-95 ${isHostSeat ? "bg-gradient-to-b from-amber-300 via-amber-500 to-amber-700 shadow-[0_6px_20px_rgba(245,158,11,0.35)]" : "bg-gradient-to-b from-slate-200/80 via-slate-400/50 to-slate-700/70 shadow-lg"}`,
												children: resolvedAvatar ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
													src: resolvedAvatar,
													alt: seat.userName || `مايك ${idx + 1}`,
													referrerPolicy: "no-referrer",
													className: "w-full h-full rounded-full object-cover bg-slate-900"
												}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "w-full h-full rounded-full bg-slate-900 flex items-center justify-center text-sm font-black text-amber-300",
													children: (seat.userName || "U").slice(0, 1)
												})
											}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: `w-[58px] h-[58px] rounded-full p-[2px] transition-transform duration-150 group-active:scale-95 ${isHostSeat ? "bg-gradient-to-b from-amber-400/50 to-amber-700/20" : "bg-white/12 group-hover:bg-white/20"}`,
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "w-full h-full rounded-full bg-[#0e1322]/80 backdrop-blur-md flex items-center justify-center text-slate-300/80 group-hover:text-amber-300 transition-colors",
													children: seat.isLocked ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "w-5 h-5 text-amber-400/80" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mic, { className: `w-5 h-5 ${isHostSeat ? "text-amber-300/90" : "text-slate-300/70"}` })
												})
											}),
											isHostSeat && !hasUploadedFrame && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "absolute -top-0.5 left-1/2 -translate-x-1/2 z-30 w-5 h-5 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center shadow",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Crown, { className: "w-3 h-3" })
											}),
											!isOccupied && !seat.isLocked && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "absolute bottom-1 right-1 z-20 w-4 h-4 rounded-full bg-[#121829] border border-white/15 text-[9px] font-mono tabular-nums font-bold text-slate-300 flex items-center justify-center",
												children: idx + 1
											}),
											isOccupied && seat.isMuted && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "absolute bottom-1 right-1 z-30 w-5 h-5 rounded-full bg-rose-600 border-2 border-[#0e1322] flex items-center justify-center shadow",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MicOff, { className: "w-2.5 h-2.5 text-white" })
											}),
											isOccupied && seat.userId && seat.userId !== activeRoom.ownerId && activeRoom.moderators.includes(seat.userId) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "absolute bottom-1 left-1 z-30 w-5 h-5 rounded-full bg-sky-500 border-2 border-[#0e1322] flex items-center justify-center shadow",
												title: "مشرف الغرفة",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "w-2.5 h-2.5 text-slate-950" })
											}),
											isOccupied && seat.isLocked && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "absolute inset-2 z-30 rounded-full bg-black/55 flex items-center justify-center",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "w-4 h-4 text-amber-400" })
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: `mt-2.5 text-[11px] font-medium truncate max-w-[78px] leading-tight ${isOccupied ? "text-white font-semibold" : isHostSeat ? "text-amber-200/90" : "text-slate-300/80"}`,
										children: seat.userName || (isHostSeat ? "المضيف" : `مايك ${idx + 1}`)
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-0.5 flex items-center gap-1 text-[10px] font-mono tabular-nums text-slate-400 leading-none",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: `w-2.5 h-2.5 ${heartVal > 0 ? "text-rose-400 fill-rose-400" : "text-slate-500"}` }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: heartVal > 0 ? "text-rose-200 font-semibold" : "",
											children: formatScore(heartVal)
										})]
									})
								]
							}, idx);
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative z-30 shrink-0 px-3.5 min-h-[54px] flex flex-col justify-end gap-1.5 pointer-events-none",
					children: giftComboTrack.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "self-end w-fit max-w-[92%] rounded-full bg-gradient-to-l from-[#121726]/92 via-[#1b1525]/92 to-[#2a1c11]/92 border border-amber-400/35 backdrop-blur-md pl-3.5 pr-1.5 py-1.5 shadow-lg flex items-center gap-2.5 animate-gift-banner",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-baseline gap-0.5 font-mono tabular-nums font-black text-amber-300 animate-combo-pop pl-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs text-amber-400/90",
									children: "×"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-lg leading-none",
									children: item.comboHits * item.countPerHit
								})]
							}, item.comboHits),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "w-9 h-9 rounded-full bg-white/8 border border-white/10 flex items-center justify-center text-2xl shrink-0 overflow-hidden",
								children: item.giftImageUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: item.giftImageUrl,
									alt: item.giftName,
									referrerPolicy: "no-referrer",
									className: "w-7 h-7 object-contain"
								}) : item.giftIcon
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-right min-w-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-[11px] font-bold text-white truncate max-w-[150px]",
									children: item.senderName
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-[10px] text-slate-300 truncate max-w-[165px]",
									children: [
										"أرسل ",
										item.giftName,
										" إلى ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-amber-300",
											children: item.targetNames
										}),
										item.isLucky && item.luckyWinCoins ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "text-emerald-400 font-mono tabular-nums mr-1",
											children: [
												"· +",
												item.luckyWinCoins.toLocaleString(),
												" (",
												item.luckyMultiplier,
												"X)"
											]
										}) : null
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: item.senderAvatar,
								alt: item.senderName,
								referrerPolicy: "no-referrer",
								className: "w-8 h-8 rounded-full object-cover border border-amber-400/50 shrink-0"
							})
						]
					}, item.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "relative z-20 flex-1 min-h-0 flex flex-col justify-end px-3.5 pt-1 pb-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex items-center gap-4 border-b border-white/8 pb-1.5 mb-2 text-xs",
						children: [
							{
								id: "all",
								label: "الكل"
							},
							{
								id: "message",
								label: "المحادثة"
							},
							{
								id: "gifts",
								label: "الهدايا"
							},
							{
								id: "system",
								label: "النظام"
							}
						].map((tab) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setChatTab(tab.id),
							className: `relative pb-1 whitespace-nowrap shrink-0 transition-colors ${chatTab === tab.id ? "text-amber-300 font-bold after:content-[\"\"] after:absolute after:bottom-[-7px] after:inset-x-0 after:h-[2px] after:bg-amber-400 after:rounded-full" : "text-slate-400 hover:text-slate-200 font-medium"}`,
							children: tab.label
						}, tab.id))
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex-1 overflow-y-auto space-y-1.5 no-scrollbar pr-0.5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "w-fit max-w-[92%] rounded-2xl px-3 py-2 bg-black/35 backdrop-blur-sm border border-white/8 text-right text-[11px] text-slate-300 leading-relaxed",
								children: [
									"مرحباً بكم في ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-amber-300 font-semibold",
										children: activeRoom.title
									}),
									". المايكات الـ 8 متاحة للصعود والتحدث، واستمتعوا بالهدايا والألعاب الهادئة."
								]
							}),
							visibleEventLogs.map((log) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "w-fit max-w-[92%] rounded-2xl px-3 py-1.5 bg-black/40 backdrop-blur-sm border border-white/8 text-right text-xs leading-relaxed",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-[10px] font-mono tabular-nums text-amber-400/90 ml-1.5",
										children: ["VIP", log.vipLevel]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-semibold text-amber-200 ml-1",
										children: log.senderName
									}),
									log.type === "lucky_win" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-slate-200",
										children: [
											"أرسل ",
											log.giftIcon,
											" ",
											log.giftName,
											" إلى ",
											log.targetNames,
											" وربح",
											" ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-emerald-400 font-mono tabular-nums font-bold",
												children: log.winCoins?.toLocaleString()
											}),
											" ",
											"عملة (",
											log.multiplier,
											"X)"
										]
									}) : log.type === "lucky_bag_claim" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-slate-200",
										children: [
											"استلم من ",
											log.targetNames,
											":",
											" ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "text-amber-300 font-mono tabular-nums font-bold",
												children: ["+", log.winCoins?.toLocaleString()]
											}),
											" ",
											"عملة (",
											log.giftName,
											")"
										]
									}) : log.type === "rocket_explosion" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-amber-200",
										children: [
											"أكمل ",
											log.giftIcon,
											" ",
											log.giftName,
											" وحصل على",
											" ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "text-emerald-400 font-mono tabular-nums font-bold",
												children: ["+", log.winCoins?.toLocaleString()]
											}),
											" ",
											"عملة وهدايا في الحقيبة"
										]
									}) : log.type === "game_win" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-slate-200",
										children: [
											"ربح في ",
											log.giftName,
											" ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-amber-300 font-mono tabular-nums font-bold",
												children: log.winCoins?.toLocaleString()
											}),
											" ",
											"عملة"
										]
									}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-slate-200",
										children: [
											"أهدى ",
											log.giftIcon,
											" ",
											log.giftName,
											" ×",
											log.giftCount,
											" إلى",
											" ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-amber-200",
												children: log.targetNames
											})
										]
									})
								]
							}, log.id)),
							visibleTextMessages.slice(-15).map((msg) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "w-fit max-w-[92%] rounded-2xl px-3 py-1.5 bg-black/40 backdrop-blur-sm border border-white/8 text-right text-xs leading-relaxed",
								children: msg.isSystem ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-slate-300",
									children: msg.text
								}) : msg.giftData ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-slate-200",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-semibold text-amber-200 ml-1",
											children: msg.senderName
										}),
										"أرسل ",
										msg.giftData.giftIcon,
										" ",
										msg.giftData.giftName,
										" ×",
										msg.giftData.giftCount,
										" إلى",
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-amber-300",
											children: msg.giftData.targetUserName
										})
									]
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-[10px] font-mono tabular-nums text-sky-400 ml-1.5",
										children: ["Lv.", msg.level || 1]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => {
											const target = users.find((u) => u.id === msg.senderId) || (msg.senderId === currentUser.id ? currentUser : null);
											if (target) {
												setViewingProfileUser(target);
												setActiveModal("profile");
											}
										},
										className: "font-semibold text-amber-200 hover:text-amber-300 underline-offset-2 hover:underline ml-1.5",
										children: [msg.senderName, ":"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-white",
										children: msg.text
									})
								] })
							}, msg.id)),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { ref: chatEndRef })
						]
					})]
				}),
				comboState && comboState.active && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute bottom-[78px] left-4 z-40",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: handleComboClick,
						className: "relative w-16 h-16 rounded-full flex items-center justify-center active:scale-90 transition-transform shadow-xl cursor-pointer",
						title: "إرسال متتابع",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
							className: "absolute inset-0 w-full h-full -rotate-90",
							viewBox: "0 0 100 100",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
								cx: "50",
								cy: "50",
								r: "45",
								fill: "rgba(12, 16, 28, 0.94)",
								stroke: "rgba(255,255,255,0.15)",
								strokeWidth: "6"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
								cx: "50",
								cy: "50",
								r: "45",
								fill: "none",
								stroke: "#f59e0b",
								strokeWidth: "6",
								strokeLinecap: "round",
								strokeDasharray: 282,
								strokeDashoffset: 282 - 282 * comboState.timeLeftMs / 2e3,
								className: "transition-all duration-75 ease-linear"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative z-10 flex flex-col items-center leading-none",
							children: [comboState.gift.imageUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: comboState.gift.imageUrl,
								alt: comboState.gift.nameAr,
								referrerPolicy: "no-referrer",
								className: "w-6 h-6 object-contain"
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-lg",
								children: comboState.gift.icon
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-[10px] font-mono tabular-nums font-bold text-amber-300 mt-0.5",
								children: ["×", comboState.comboHits]
							})]
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
					className: "relative z-30 shrink-0 px-3.5 py-2.5 bg-[#080b14]/90 backdrop-blur-md border-t border-white/10",
					children: showChatInputBar ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: handleSendChat,
						className: "flex items-center gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setShowChatInputBar(false),
								className: "w-11 h-11 rounded-xl bg-white/8 text-slate-300 flex items-center justify-center shrink-0",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "w-4 h-4" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "text",
								value: chatInput,
								onChange: (e) => setChatInput(e.target.value),
								placeholder: "اكتب رسالة للغرفة...",
								className: "flex-1 h-11 rounded-xl bg-white/8 border border-white/15 px-3.5 text-sm text-white placeholder:text-slate-400 focus:border-amber-400 focus:outline-none",
								autoFocus: true
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "submit",
								className: "h-11 px-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm flex items-center gap-1.5 shrink-0 transition-colors",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "w-4 h-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "إرسال" })]
							})
						]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => setShowChatInputBar(true),
							className: "flex-1 h-11 rounded-xl bg-white/8 hover:bg-white/12 border border-white/10 px-3.5 flex items-center justify-between text-slate-300 text-xs transition-colors",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "قل شيئاً..." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Smile, {
								onClick: (e) => {
									e.stopPropagation();
									setActiveBottomDrawer("emoji");
								},
								className: "w-4 h-4 text-slate-300 hover:text-amber-300"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-1.5 shrink-0",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => {
										sound.unlockAudio();
										agoraVoice.primeFromUserGesture();
										agoraVoice.resumeRemoteAudio(true);
										if (!mySeat) {
											const firstOpen = seats8.find((s) => !s.userId && !s.isLocked);
											if (firstOpen) takeSeat(firstOpen.index);
										} else toggleMic();
									},
									className: `w-11 h-11 rounded-xl border flex items-center justify-center transition-colors ${mySeat && !mySeat.isMuted ? "bg-emerald-500/20 border-emerald-400/60 text-emerald-300" : mySeat && mySeat.isMuted ? "bg-rose-500/20 border-rose-400/60 text-rose-300" : "bg-white/8 border-white/10 text-slate-200 hover:bg-white/12"}`,
									title: mySeat ? mySeat.isMuted ? "فتح المايك" : "كتم المايك" : "صعود للمايك",
									children: mySeat && mySeat.isMuted ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MicOff, { className: "w-5 h-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mic, { className: "w-5 h-5" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => {
										const nextMuted = !isRoomSoundMuted;
										setIsRoomSoundMuted(nextMuted);
										agoraVoice.setRemoteAudioMuted(nextMuted);
										if (nextMuted) sound.stopAllCustomAudio();
										else {
											sound.unlockAudio();
											agoraVoice.resumeRemoteAudio(true);
										}
									},
									className: "w-11 h-11 rounded-xl bg-white/8 hover:bg-white/12 border border-white/10 flex items-center justify-center text-slate-200 transition-colors",
									title: isRoomSoundMuted ? "تشغيل الصوت" : "كتم صوت الغرفة",
									children: isRoomSoundMuted ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VolumeX, { className: "w-5 h-5 text-rose-400" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Volume2, { className: "w-5 h-5" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => setActiveBottomDrawer("tools_menu"),
									className: "w-11 h-11 rounded-xl bg-white/8 hover:bg-white/12 border border-white/10 flex items-center justify-center text-slate-200 transition-colors",
									title: "الأدوات والألعاب",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LayoutGrid, { className: "w-5 h-5" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									onClick: () => openGiftDrawer(),
									className: "relative w-11 h-11 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 text-slate-950 flex items-center justify-center shadow-[0_4px_16px_rgba(245,158,11,0.35)] active:scale-95 transition-transform",
									title: "إرسال هدية",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gift, { className: "w-5 h-5 stroke-[2.25]" }), totalBagCount > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "absolute -top-1 -left-1 min-w-[18px] h-[18px] px-1 rounded-full bg-emerald-500 text-slate-950 font-mono tabular-nums font-bold text-[10px] flex items-center justify-center",
										children: totalBagCount
									})]
								})
							]
						})]
					})
				}),
				activeBottomDrawer === "gift" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-0 z-50 bg-black/60 backdrop-blur-[2px] flex flex-col justify-end",
					onClick: () => setActiveBottomDrawer("none"),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "w-full bg-[#111522] border-t border-white/12 rounded-t-3xl px-4 pt-2.5 pb-4 text-white space-y-3 shadow-2xl",
						onClick: (e) => e.stopPropagation(),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-10 h-1 bg-white/20 rounded-full mx-auto" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex items-center justify-between gap-2 pb-2 border-b border-white/8 min-h-[60px]",
								children: occupiedSeats.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "w-full flex items-center justify-between gap-2 py-1 px-2 rounded-xl bg-white/[0.04] border border-white/8",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs text-slate-300",
										children: "لا يوجد متحدث على المايك حالياً لإرسال الهدايا له"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => {
											const firstOpen = seats8.find((s) => !s.userId && !s.isLocked);
											if (firstOpen) {
												takeSeat(firstOpen.index);
												setSelectedRecipientSeats([firstOpen.index]);
											}
										},
										className: "h-8 px-3 rounded-lg bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs shrink-0 transition-colors",
										children: "صعود على المايك"
									})]
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex items-center gap-2.5 overflow-x-auto no-scrollbar py-0.5",
									children: occupiedSeats.map((s) => {
										const idx = s.index;
										const isSelected = selectedRecipientSeats.includes(idx);
										return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											onClick: () => {
												setSelectedRecipientSeats((prev) => prev.includes(idx) ? prev.length > 1 ? prev.filter((i) => i !== idx) : prev : [...prev, idx]);
											},
											className: "relative flex flex-col items-center shrink-0",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: `relative w-10 h-10 rounded-full p-[2px] transition-all ${isSelected ? "ring-2 ring-amber-400 bg-amber-400/20" : "border border-white/15 opacity-65 hover:opacity-100"}`,
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
														src: s.userAvatar || currentUser.avatar,
														alt: s.userName || `مايك ${idx + 1}`,
														referrerPolicy: "no-referrer",
														className: "w-full h-full rounded-full object-cover"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "absolute -top-1 -left-1 w-4 h-4 rounded-full bg-slate-950 border border-white/25 text-[9px] font-mono tabular-nums font-bold text-amber-300 flex items-center justify-center",
														children: idx + 1
													}),
													isSelected && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "w-2.5 h-2.5 stroke-[3]" })
													})
												]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[10px] text-white font-medium max-w-[56px] truncate mt-1",
												children: s.userName || `مايك ${idx + 1}`
											})]
										}, idx);
									})
								}), occupiedSeats.length > 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => {
										const allOccupied = occupiedSeats.map((s) => s.index);
										setSelectedRecipientSeats(selectedRecipientSeats.length === allOccupied.length ? [allOccupied[0]] : allOccupied);
									},
									className: `h-9 px-3 rounded-xl text-xs font-bold shrink-0 transition-colors ${selectedRecipientSeats.length === occupiedSeats.length ? "bg-amber-400 text-slate-950" : "bg-white/8 text-slate-200 hover:bg-white/14"}`,
									children: selectedRecipientSeats.length === occupiedSeats.length ? "واحد" : "الكل"
								})] })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex items-center gap-4 text-xs border-b border-white/8 pb-2 overflow-x-auto no-scrollbar",
								children: [
									{
										id: "all",
										label: "الكل"
									},
									{
										id: "classic",
										label: "كلاسيكي"
									},
									{
										id: "luxury",
										label: "فاخر"
									},
									{
										id: "lucky",
										label: "هدايا الحظ"
									},
									{
										id: "bag",
										label: `الحقيبة (${totalBagCount})`
									}
								].map((tab) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => {
										setGiftDrawerTab(tab.id);
										if (tab.id === "bag") {
											const firstBag = Object.keys(bagGifts).find((k) => (bagGifts[k] || 0) > 0);
											if (firstBag) setSelectedGiftId(firstBag);
										}
									},
									className: `whitespace-nowrap shrink-0 transition-colors ${giftDrawerTab === tab.id ? "text-amber-300 font-bold" : "text-slate-400 hover:text-slate-200"}`,
									children: tab.label
								}, tab.id))
							}),
							filteredDrawerGifts.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "py-10 text-center space-y-2.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-3xl opacity-80",
									children: giftDrawerTab === "bag" ? "🎒" : "🎁"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-slate-400",
									children: giftDrawerTab === "bag" ? "الحقيبة فارغة حالياً — يمكنك الحصول على هدايا مجانية من صاروخ الغرفة أو كيس الحظ." : "لا توجد هدايا مرفوعة في هذا التصنيف حالياً."
								})]
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid grid-cols-4 gap-2 max-h-56 overflow-y-auto no-scrollbar py-0.5",
								children: filteredDrawerGifts.map((g) => {
									const isSelected = selectedGiftId === g.id;
									const bagQty = bagGifts[g.id] || 0;
									const isLucky = g.isLucky || g.category === "lucky";
									return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										onClick: () => setSelectedGiftId(g.id),
										className: `relative rounded-2xl p-2.5 flex flex-col items-center justify-between border transition-colors ${isSelected ? "bg-amber-400/14 border-amber-400/80" : "bg-white/[0.03] border-white/6 hover:bg-white/[0.07]"}`,
										children: [
											giftDrawerTab === "bag" && bagQty > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "absolute top-1.5 right-1.5 text-[10px] font-mono tabular-nums font-bold text-emerald-400",
												children: ["×", bagQty]
											}) : isLucky ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "absolute top-1.5 right-1.5 text-[9px] font-bold text-amber-300",
												children: "حظ"
											}) : null,
											(g.videoUrl || g.imageUrl) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "absolute top-1.5 left-1.5 text-[8px] font-mono font-bold px-1 py-0.5 rounded bg-purple-500/30 text-purple-200",
												children: getMediaFormatLabel(g.videoUrl || g.imageUrl)
											}),
											g.imageUrl || g.videoUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SmartMediaView, {
												mode: "thumbnail",
												url: g.imageUrl || g.videoUrl,
												preferVideo: !g.imageUrl && Boolean(g.videoUrl),
												alt: g.nameAr,
												className: "w-10 h-10 object-contain my-1 rounded-lg",
												fallback: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "text-3xl my-1",
													children: g.icon
												})
											}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "text-3xl my-1",
												children: g.icon
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[11px] font-medium text-white truncate w-full text-center",
												children: g.nameAr
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[10px] font-mono tabular-nums text-amber-300/90 mt-0.5",
												children: giftDrawerTab === "bag" ? "مجاني" : g.coinPrice >= 1e3 ? `${(g.coinPrice / 1e3).toFixed(g.coinPrice % 1e3 === 0 ? 0 : 1)}K` : g.coinPrice
											})
										]
									}, g.id);
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between gap-2 pt-2 border-t border-white/10",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									onClick: () => {
										setActiveBottomDrawer("none");
										setActiveModal("wallet");
									},
									className: "h-10 px-3 rounded-xl bg-white/6 hover:bg-white/10 flex items-center gap-1.5 text-xs transition-colors",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Coins, { className: "w-4 h-4 text-amber-400" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-mono tabular-nums font-bold text-white",
											children: currentUser.coins.toLocaleString("en-US")
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-amber-400 font-bold mr-1",
											children: "شحن"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "w-3.5 h-3.5 text-amber-400" })
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center rounded-xl overflow-hidden border border-amber-400/70",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
										value: giftCount,
										onChange: (e) => setGiftCount(Number(e.target.value)),
										className: "h-10 bg-[#181e30] text-white text-xs font-mono tabular-nums font-bold px-2.5 focus:outline-none",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: 1,
												children: "× 1"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: 10,
												children: "× 10"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: 66,
												children: "× 66"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: 99,
												children: "× 99"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: 520,
												children: "× 520"
											})
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: handleSendSelectedGift,
										disabled: selectedRecipientSeats.length === 0 || giftDrawerTab === "bag" && filteredDrawerGifts.length === 0,
										className: `h-10 px-5 font-bold text-xs transition-colors ${selectedRecipientSeats.length > 0 && !(giftDrawerTab === "bag" && filteredDrawerGifts.length === 0) ? "bg-amber-400 hover:bg-amber-300 text-slate-950" : "bg-slate-700 text-slate-400 cursor-not-allowed"}`,
										children: selectedRecipientSeats.length > 0 ? `إرسال (${selectedRecipientSeats.length})` : "اختر متحدثاً"
									})]
								})]
							})
						]
					})
				}),
				activeBottomDrawer === "tools_menu" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-0 z-50 bg-black/60 backdrop-blur-[2px] flex flex-col justify-end",
					onClick: () => setActiveBottomDrawer("none"),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "w-full bg-[#111522] border-t border-white/12 rounded-t-3xl p-4 pb-6 text-white space-y-4 shadow-2xl",
						onClick: (e) => e.stopPropagation(),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-10 h-1 bg-white/20 rounded-full mx-auto" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-sm font-bold text-white",
									children: "أدوات الغرفة"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => setActiveBottomDrawer("none"),
									className: "w-8 h-8 rounded-lg bg-white/8 flex items-center justify-center text-slate-400 hover:text-white",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "w-4 h-4" })
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-4 gap-3 text-center",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										onClick: () => setActiveBottomDrawer("game_center"),
										className: "flex flex-col items-center gap-2 p-3 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gamepad2, { className: "w-6 h-6 text-amber-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-xs font-medium text-slate-200",
											children: "الألعاب"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										onClick: () => setActiveBottomDrawer("lucky_bag_drawer"),
										className: "flex flex-col items-center gap-2 p-3 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-2xl leading-none",
											children: "🧧"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-xs font-medium text-slate-200",
											children: "كيس الحظ"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										onClick: () => {
											setPreviewRocketLevel(rocketLevel);
											setActiveBottomDrawer("rocket");
										},
										className: "flex flex-col items-center gap-2 p-3 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Rocket, { className: "w-6 h-6 text-sky-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-xs font-medium text-slate-200",
											children: "الصاروخ"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										onClick: () => {
											setActiveBottomDrawer("none");
											setActiveModal("wallet");
										},
										className: "flex flex-col items-center gap-2 p-3 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Coins, { className: "w-6 h-6 text-emerald-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-xs font-medium text-slate-200",
											children: "المحفظة"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										onClick: () => setActiveBottomDrawer("top_ranking"),
										className: "flex flex-col items-center gap-2 p-3 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trophy, { className: "w-6 h-6 text-amber-300" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-xs font-medium text-slate-200",
											children: "الترتيب"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										onClick: () => openRoomSettingsDrawer("backgrounds"),
										className: "flex flex-col items-center gap-2 p-3 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlidersHorizontal, { className: "w-6 h-6 text-slate-300" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-xs font-medium text-slate-200",
											children: canManage ? "الخصوصية والخلفية" : "مظهر الغرفة"
										})]
									}),
									canManage && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										onClick: () => openRoomSettingsDrawer("moderation"),
										className: "flex flex-col items-center gap-2 p-3 rounded-2xl bg-sky-500/10 hover:bg-sky-500/20 border border-sky-400/25 transition-colors",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "w-6 h-6 text-sky-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-xs font-medium text-sky-200",
											children: "الإشراف والحظر"
										})]
									}),
									canManage && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										onClick: () => {
											handleToggleLockAllSeats();
											setActiveBottomDrawer("none");
										},
										className: "flex flex-col items-center gap-2 p-3 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors",
										children: [seats8.some((s) => !s.isLocked) ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "w-6 h-6 text-rose-400" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LockOpen, { className: "w-6 h-6 text-emerald-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-xs font-medium text-slate-200",
											children: seats8.some((s) => !s.isLocked) ? "قفل الكل" : "فتح الكل"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										onClick: () => {
											setChatClearedBeforeTs(Date.now());
											setActiveBottomDrawer("none");
										},
										className: "flex flex-col items-center gap-2 p-3 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "w-6 h-6 text-slate-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-xs font-medium text-slate-200",
											children: "مسح الدردشة"
										})]
									})
								]
							})
						]
					})
				}),
				activeBottomDrawer === "room_settings" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-0 z-50 bg-black/60 backdrop-blur-[2px] flex flex-col justify-end",
					onClick: () => setActiveBottomDrawer("none"),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "w-full max-h-[82dvh] bg-[#111522] border-t border-white/12 rounded-t-3xl p-4 pb-6 text-white flex flex-col gap-3.5 shadow-2xl overflow-y-auto no-scrollbar",
						onClick: (e) => e.stopPropagation(),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-10 h-1 bg-white/20 rounded-full mx-auto shrink-0" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-right",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-sm font-bold text-white",
										children: "إدارة ومظهر وخصوصيات الغرفة"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[11px] text-slate-400",
										children: isOwner ? "أنت مالك الغرفة — لديك صلاحية كاملة وإدارة المشرفين" : isMod ? "أنت مشرف في الغرفة — لديك صلاحيات إدارة الغرفة والخصوصية" : "عرض حالة الغرفة فقط (التعديل متاح للمالك والمشرفين)"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => setActiveBottomDrawer("none"),
									className: "w-8 h-8 rounded-lg bg-white/8 flex items-center justify-center text-slate-400 hover:text-white shrink-0",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "w-4 h-4" })
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-3 gap-1.5 p-1 rounded-2xl bg-white/[0.04] border border-white/8 text-xs font-bold",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => setRoomSettingsTab("backgrounds"),
										className: `py-2 rounded-xl transition-colors ${roomSettingsTab === "backgrounds" ? "bg-amber-400 text-slate-950" : "text-slate-300 hover:text-white"}`,
										children: "خلفيات الغرفة"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => setRoomSettingsTab("privacy"),
										className: `py-2 rounded-xl transition-colors ${roomSettingsTab === "privacy" ? "bg-amber-400 text-slate-950" : "text-slate-300 hover:text-white"}`,
										children: "خصوصيات الغرفة"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										onClick: () => setRoomSettingsTab("moderation"),
										className: `py-2 rounded-xl transition-colors ${roomSettingsTab === "moderation" ? "bg-sky-400 text-slate-950" : "text-slate-300 hover:text-white"}`,
										children: [
											"الإشراف (",
											activeRoom.moderators.length,
											")"
										]
									})
								]
							}),
							settingsFeedback && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "px-3 py-2 rounded-xl bg-emerald-500/15 border border-emerald-500/35 text-emerald-300 text-xs text-right",
								children: settingsFeedback
							}),
							roomSettingsTab === "backgrounds" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-3.5 text-right",
								children: [
									!canManage && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "px-3 py-2 rounded-xl bg-amber-500/10 border border-amber-500/30 text-[11px] text-amber-200",
										children: "ملاحظة: اختيار أو تغيير خلفية الغرفة متاح لمالك الغرفة والمشرفين فقط."
									}),
									roomBackgrounds.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
												className: "text-xs font-bold text-amber-300",
												children: [
													"خلفيات الغرف المميزة (",
													roomBackgrounds.length,
													")"
												]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[10px] text-slate-400",
												children: "مرفوعة من الإدارة"
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "grid grid-cols-3 gap-2.5",
											children: roomBackgrounds.map((bg) => {
												const isSelectedBg = activeRoom.backgroundId === bg.id || activeRoom.backgroundUrl === bg.imageUrl;
												return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
													type: "button",
													disabled: !canManage,
													onClick: () => {
														if (updateRoomPrivacySettings(activeRoom.id, {
															backgroundId: bg.id,
															backgroundUrl: bg.imageUrl,
															coverImage: bg.imageUrl
														})) setSettingsFeedback(`تم تطبيق خلفية "${bg.nameAr}" للغرفة`);
													},
													className: `relative h-24 rounded-2xl overflow-hidden border-2 transition-all ${isSelectedBg ? "border-amber-400 ring-2 ring-amber-400/30" : "border-white/10 opacity-80 hover:opacity-100"} ${!canManage ? "cursor-not-allowed opacity-60" : ""}`,
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
														src: bg.imageUrl,
														alt: bg.nameAr,
														referrerPolicy: "no-referrer",
														className: "w-full h-full object-cover"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "absolute inset-x-0 bottom-0 py-1 px-1.5 bg-black/75 text-[10px] font-semibold text-white truncate",
														children: bg.nameAr
													})]
												}, bg.id);
											})
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "text-xs font-semibold text-slate-300",
											children: "الخلفيات الافتراضية"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "grid grid-cols-3 gap-2.5",
											children: ROOM_THEMES.map((t) => {
												const isSelectedBuiltIn = !activeRoom.backgroundUrl && (activeRoom.backgroundId === t.id || !activeRoom.backgroundId && themeId === t.id);
												return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
													type: "button",
													disabled: !canManage,
													onClick: () => {
														setThemeId(t.id);
														if (updateRoomPrivacySettings(activeRoom.id, {
															backgroundId: t.id,
															backgroundUrl: ""
														})) setSettingsFeedback(`تم تطبيق خلفية "${t.name}"`);
													},
													className: `relative h-24 rounded-2xl overflow-hidden border-2 transition-all ${isSelectedBuiltIn ? "border-amber-400" : "border-white/10 opacity-75 hover:opacity-100"} ${!canManage ? "cursor-not-allowed opacity-60" : ""}`,
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
														src: t.image,
														alt: t.name,
														referrerPolicy: "no-referrer",
														className: "w-full h-full object-cover"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "absolute inset-x-0 bottom-0 py-1 bg-black/70 text-[11px] font-semibold text-white",
														children: t.name
													})]
												}, t.id);
											})
										})]
									})
								]
							}),
							roomSettingsTab === "privacy" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-3.5 text-right",
								children: [
									!canManage && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "px-3 py-2 rounded-xl bg-rose-500/10 border border-rose-500/30 text-[11px] text-rose-200",
										children: "خصوصيات الغرفة محمية — يملك صلاحية التعديل مالك الغرفة أو من منحه المالك إشرافاً."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "text-xs font-semibold text-slate-300",
											children: "اسم الغرفة"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "text",
											disabled: !canManage,
											value: titleDraft,
											onChange: (e) => setTitleDraft(e.target.value),
											className: "w-full h-10 rounded-xl bg-white/6 border border-white/12 px-3 text-xs text-white focus:border-amber-400 focus:outline-none disabled:opacity-50",
											placeholder: "عنوان الغرفة..."
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "text-xs font-semibold text-slate-300",
											children: "إعلان الغرفة"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "text",
											disabled: !canManage,
											value: noticeDraft,
											onChange: (e) => setNoticeDraft(e.target.value),
											className: "w-full h-10 rounded-xl bg-white/6 border border-white/12 px-3 text-xs text-white focus:border-amber-400 focus:outline-none disabled:opacity-50",
											placeholder: "اكتب إعلان الغرفة..."
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "text-xs font-semibold text-slate-300",
											children: "مستوى دخول الغرفة"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "grid grid-cols-3 gap-2 text-xs font-bold",
											children: [
												{
													id: "public",
													label: "مفتوحة للجميع"
												},
												{
													id: "password",
													label: "برمز دخول 🔑"
												},
												{
													id: "vip",
													label: "VIP فقط 👑"
												}
											].map((opt) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												disabled: !canManage,
												onClick: () => setPrivacyTypeDraft(opt.id),
												className: `py-2.5 px-2 rounded-xl border transition-colors ${privacyTypeDraft === opt.id ? "bg-amber-400/20 border-amber-400 text-amber-300" : "bg-white/[0.04] border-white/10 text-slate-300"} disabled:opacity-50`,
												children: opt.label
											}, opt.id))
										})]
									}),
									privacyTypeDraft === "password" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "text-xs font-semibold text-amber-300",
											children: "رمز مرور الدخول للغرفة"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "text",
											disabled: !canManage,
											value: passwordDraft,
											onChange: (e) => setPasswordDraft(e.target.value),
											className: "w-full h-10 rounded-xl bg-white/6 border border-amber-400/35 px-3 text-xs font-mono text-white focus:border-amber-400 focus:outline-none disabled:opacity-50",
											placeholder: "أدخل رمز الغرفة (مثال: 1234)"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between p-3 rounded-2xl bg-white/[0.04] border border-white/10",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-xs font-bold text-white",
											children: "قفل الغرفة بالكامل"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-[10px] text-slate-400",
											children: "منع دخول أي زوار جدد (ماعدا المالك والمشرفين)"
										})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											disabled: !canManage,
											onClick: () => setIsLockedDraft((prev) => !prev),
											className: `h-9 px-3.5 rounded-xl font-bold text-xs flex items-center gap-1.5 transition-colors ${isLockedDraft ? "bg-rose-600 text-white" : "bg-emerald-500/20 border border-emerald-500/40 text-emerald-300"} disabled:opacity-50`,
											children: [isLockedDraft ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "w-3.5 h-3.5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LockOpen, { className: "w-3.5 h-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: isLockedDraft ? "مقفلة" : "مفتوحة" })]
										})]
									}),
									canManage && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2 pt-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											onClick: handleToggleLockAllSeats,
											className: "h-10 px-3.5 rounded-xl bg-white/8 hover:bg-white/14 text-xs font-bold text-slate-200 flex items-center gap-1.5 shrink-0",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "w-3.5 h-3.5 text-amber-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: seats8.some((s) => !s.isLocked) ? "قفل المايكات" : "فتح المايكات" })]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											onClick: () => {
												if (privacyTypeDraft === "password" && !passwordDraft.trim()) {
													setSettingsFeedback("يرجى إدخال رمز مرور الغرفة أولاً.");
													return;
												}
												if (updateRoomPrivacySettings(activeRoom.id, {
													title: titleDraft.trim() || activeRoom.title,
													announcement: noticeDraft.trim() || activeRoom.announcement,
													type: privacyTypeDraft,
													password: privacyTypeDraft === "password" ? passwordDraft.trim() : "",
													isLocked: isLockedDraft
												})) {
													if (noticeDraft.trim()) setRoomNotice(noticeDraft.trim());
													setSettingsFeedback("تم حفظ خصوصيات وإعدادات الغرفة بنجاح.");
												}
											},
											className: "flex-1 h-10 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs transition-colors",
											children: "حفظ خصوصيات الغرفة"
										})]
									})
								]
							}),
							roomSettingsTab === "moderation" && (() => {
								const roomUserIds = /* @__PURE__ */ new Set();
								seats8.forEach((s) => {
									if (s.userId) roomUserIds.add(s.userId);
								});
								activeRoomMessages.forEach((m) => {
									if (m.senderId && m.senderId !== "system") roomUserIds.add(m.senderId);
								});
								activeRoom.moderators.forEach((id) => roomUserIds.add(id));
								const modQuery = modSearchQuery.trim().toLowerCase();
								const candidateUsers = users.filter((u) => {
									if (u.id === activeRoom.ownerId) return false;
									if (modQuery) return u.displayName.toLowerCase().includes(modQuery) || u.userCode.toLowerCase().includes(modQuery);
									return roomUserIds.has(u.id);
								});
								const bannedUsers = (activeRoom.bannedUserIds || []).map((bId) => users.find((u) => u.id === bId) || {
									id: bId,
									displayName: bId,
									userCode: "---",
									avatar: ""
								});
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-3 text-right",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "p-2.5 rounded-xl bg-amber-500/10 border border-amber-400/25 flex items-center justify-between text-xs",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "font-bold text-amber-300 flex items-center gap-1.5",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Crown, { className: "w-4 h-4" }),
													"مالك الغرفة: ",
													activeRoom.ownerName
												]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "text-[10px] text-slate-400",
												children: ["المشرفون: ", activeRoom.moderators.length]
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "relative",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												type: "text",
												value: modSearchQuery,
												onChange: (e) => setModSearchQuery(e.target.value),
												placeholder: "ابحث بالاسم أو رقم ID لمنح الإشراف أو الحظر...",
												className: "w-full h-10 rounded-xl bg-white/6 border border-white/12 pr-9 pl-3 text-xs text-white focus:border-sky-400 focus:outline-none"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "max-h-48 overflow-y-auto space-y-2 no-scrollbar",
											children: candidateUsers.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "py-6 text-center text-xs text-slate-400",
												children: "لا يوجد أعضاء متطابقون — يمكنك البحث بالاسم أو ID لإضافة مشرف."
											}) : candidateUsers.map((u) => {
												const userIsMod = activeRoom.moderators.includes(u.id);
												const userIsBanned = (activeRoom.bannedUserIds || []).includes(u.id);
												return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "p-2.5 rounded-2xl bg-white/[0.04] border border-white/8 flex items-center justify-between gap-2",
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
																className: "text-xs font-bold text-white truncate flex items-center gap-1",
																children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: u.displayName }), userIsMod && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																	className: "px-1.5 py-0.2 rounded bg-sky-500/20 text-sky-300 text-[9px]",
																	children: "مشرف"
																})]
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																className: "text-[10px] font-mono text-slate-400",
																children: ["ID ", u.userCode]
															})]
														})]
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "flex items-center gap-1.5 shrink-0",
														children: [isOwner && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
															type: "button",
															onClick: () => {
																const res = toggleRoomModerator(activeRoom.id, u.id);
																setSettingsFeedback(res.message);
															},
															className: `h-8 px-2.5 rounded-xl text-[11px] font-bold flex items-center gap-1 transition-colors ${userIsMod ? "bg-rose-500/20 border border-rose-500/40 text-rose-300 hover:bg-rose-500/30" : "bg-sky-500/20 border border-sky-400/40 text-sky-300 hover:bg-sky-500/30"}`,
															children: userIsMod ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shield, { className: "w-3 h-3" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "سحب" })] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "w-3 h-3" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "إشراف" })] })
														}), canManage && u.id !== currentUser.id && !userIsBanned && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
															type: "button",
															onClick: () => {
																banUserFromRoom(activeRoom.id, u.id);
																setSettingsFeedback(`تم حظر ${u.displayName} من الغرفة`);
															},
															className: "h-8 px-2.5 rounded-xl bg-rose-950/60 border border-rose-500/35 text-rose-300 hover:bg-rose-900/60 text-[11px] font-bold flex items-center gap-1",
															title: "حظر من الغرفة",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ban, { className: "w-3 h-3" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "حظر" })]
														})]
													})]
												}, u.id);
											})
										}),
										bannedUsers.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-1.5 pt-2 border-t border-white/10",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "text-[11px] font-bold text-rose-300",
												children: [
													"المحظورون من الغرفة (",
													bannedUsers.length,
													")"
												]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "max-h-28 overflow-y-auto space-y-1.5 no-scrollbar",
												children: bannedUsers.map((bu) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "px-2.5 py-2 rounded-xl bg-rose-950/30 border border-rose-500/25 flex items-center justify-between text-xs",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
														className: "text-slate-200 truncate",
														children: [
															bu.displayName,
															" ",
															/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
																className: "text-[10px] font-mono text-slate-400",
																children: [
																	"(",
																	bu.userCode,
																	")"
																]
															})
														]
													}), canManage && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
														type: "button",
														onClick: () => {
															unbanUserFromRoom(activeRoom.id, bu.id);
															setSettingsFeedback(`تم رفع الحظر عن ${bu.displayName}`);
														},
														className: "px-2.5 py-1 rounded-lg bg-emerald-500/20 text-emerald-300 font-bold text-[10px]",
														children: "فك الحظر"
													})]
												}, bu.id))
											})]
										})
									]
								});
							})()
						]
					})
				}),
				activeBottomDrawer === "seat_menu" && selectedSeatForMenu && (() => {
					const liveSeat = seats8[selectedSeatForMenu.index] || selectedSeatForMenu;
					const targetUserId = liveSeat.userId;
					const targetIsOwner = targetUserId === activeRoom.ownerId;
					const targetIsMod = Boolean(targetUserId && activeRoom.moderators.includes(targetUserId));
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute inset-0 z-50 bg-black/60 backdrop-blur-[2px] flex flex-col justify-end p-3",
						onClick: () => setActiveBottomDrawer("none"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "w-full space-y-2",
							onClick: (e) => e.stopPropagation(),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-2xl bg-[#151a2b] border border-white/10 overflow-hidden divide-y divide-white/8 text-center text-sm font-medium max-h-[75dvh] overflow-y-auto no-scrollbar",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "py-2.5 text-xs text-slate-400 flex items-center justify-center gap-1.5",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
												liveSeat.index === 0 ? "مايك المضيف (#1)" : `مايك #${liveSeat.index + 1}`,
												" ",
												liveSeat.userName ? `· ${liveSeat.userName}` : "· متاح"
											] }),
											targetIsOwner && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "px-1.5 py-0.2 rounded bg-amber-400/20 text-amber-300 text-[10px] font-bold",
												children: "المالك"
											}),
											!targetIsOwner && targetIsMod && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "px-1.5 py-0.2 rounded bg-sky-500/20 text-sky-300 text-[10px] font-bold",
												children: "مشرف"
											})
										]
									}),
									targetUserId === currentUser.id && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										onClick: () => {
											setViewingProfileUser(currentUser);
											setActiveModal("profile");
											setActiveBottomDrawer("none");
										},
										className: "w-full h-12 text-amber-300 hover:bg-white/6 transition-colors font-bold flex items-center justify-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserCheck, { className: "w-4 h-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "فتح البروفايل الخاص بي" })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => {
											if (targetUserId === currentUser.id) leaveSeat();
											else if (targetUserId) {
												const targetUser = users.find((u) => u.id === targetUserId);
												setViewingProfileUser(targetUser || currentUser);
												setActiveModal("profile");
											} else {
												sound.unlockAudio();
												agoraVoice.primeFromUserGesture();
												agoraVoice.resumeRemoteAudio(true);
												takeSeat(liveSeat.index);
											}
											setActiveBottomDrawer("none");
										},
										className: "w-full h-12 text-white hover:bg-white/6 transition-colors font-semibold",
										children: targetUserId === currentUser.id ? "النزول من المايك" : targetUserId ? "عرض الملف الشخصي" : "صعود إلى المايك"
									}),
									targetUserId && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										onClick: () => {
											openGiftDrawer(liveSeat.index);
										},
										className: "w-full h-12 text-amber-300 hover:bg-white/6 transition-colors font-semibold",
										children: ["إرسال هدية إلى ", liveSeat.userName || `مايك #${liveSeat.index + 1}`]
									}),
									isOwner && targetUserId && !targetIsOwner && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										onClick: () => {
											toggleRoomModerator(activeRoom.id, targetUserId);
											setActiveBottomDrawer("none");
										},
										className: "w-full h-12 text-sky-300 hover:bg-white/6 transition-colors font-semibold flex items-center justify-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "w-4 h-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: targetIsMod ? "سحب إشراف الغرفة" : "منح إشراف الغرفة (صلاحيات كاملة)" })]
									}),
									canManage && targetUserId && !targetIsOwner && targetUserId !== currentUser.id && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											onClick: () => {
												toggleSeatMuteByModerator(liveSeat.index);
												setActiveBottomDrawer("none");
											},
											className: "w-full h-12 text-slate-200 hover:bg-white/6 transition-colors flex items-center justify-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MicOff, { className: "w-4 h-4 text-amber-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: liveSeat.isMuted ? "فتح المايك للمتحدث" : "كتم مايك المتحدث" })]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											onClick: () => {
												kickUserFromSeat(liveSeat.index);
												setActiveBottomDrawer("none");
											},
											className: "w-full h-12 text-orange-300 hover:bg-white/6 transition-colors flex items-center justify-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserMinus, { className: "w-4 h-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "إنزال من المايك" })]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											onClick: () => {
												banUserFromRoom(activeRoom.id, targetUserId);
												setActiveBottomDrawer("none");
											},
											className: "w-full h-12 text-rose-400 hover:bg-white/6 transition-colors flex items-center justify-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ban, { className: "w-4 h-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "حظر من الغرفة" })]
										})
									] }),
									canManage && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => {
											toggleSeatLock(liveSeat.index);
											setActiveBottomDrawer("none");
										},
										className: "w-full h-12 text-slate-200 hover:bg-white/6 transition-colors",
										children: liveSeat.isLocked ? "فتح قفل المايك" : "قفل المايك"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => handleClearHeartValue(liveSeat.index),
										className: "w-full h-12 text-rose-400 hover:bg-white/6 transition-colors",
										children: "تصفير نقاط الكاريزما"
									})] })
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setActiveBottomDrawer("none"),
								className: "w-full h-12 rounded-2xl bg-[#151a2b] border border-white/10 text-slate-300 font-semibold text-sm hover:bg-white/6 transition-colors",
								children: "إلغاء"
							})]
						})
					});
				})(),
				activeBottomDrawer === "emoji" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-0 z-50 bg-black/55 flex flex-col justify-end",
					onClick: () => setActiveBottomDrawer("none"),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "w-full bg-[#111522] border-t border-white/12 rounded-t-3xl p-4 text-white space-y-3",
						onClick: (e) => e.stopPropagation(),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-10 h-1 bg-white/20 rounded-full mx-auto" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex items-center gap-4 border-b border-white/8 pb-2 text-xs",
								children: [
									{
										id: "faces",
										label: "تعابير"
									},
									{
										id: "gestures",
										label: "تفاعل"
									},
									{
										id: "hearts",
										label: "مشاعر"
									},
									{
										id: "fun",
										label: "منوعات"
									}
								].map((tab) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => setEmojiCategory(tab.id),
									className: emojiCategory === tab.id ? "text-amber-300 font-bold" : "text-slate-400 hover:text-white",
									children: tab.label
								}, tab.id))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid grid-cols-4 gap-2.5 py-2",
								children: emojiSets[emojiCategory].map((emo, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => handleSendEmojiToMySeat(emo),
									className: "h-14 rounded-2xl bg-white/5 hover:bg-white/12 flex items-center justify-center text-3xl active:scale-90 transition-transform",
									children: emo
								}, i))
							})
						]
					})
				}),
				activeBottomDrawer === "rocket" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-0 z-50 bg-black/65 backdrop-blur-[2px] flex flex-col justify-end",
					onClick: () => setActiveBottomDrawer("none"),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "w-full bg-[#111522] border-t border-white/12 rounded-t-3xl p-4 pb-5 text-white space-y-4 shadow-2xl",
						onClick: (e) => e.stopPropagation(),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-10 h-1 bg-white/20 rounded-full mx-auto" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
									className: "text-sm font-bold text-white flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Rocket, { className: "w-4 h-4 text-amber-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "صاروخ الغرفة" })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs font-mono tabular-nums text-amber-300",
									children: isRocketLocked24h ? "مكتمل 5/5" : `المستوى ${rocketLevel} من 5`
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid grid-cols-5 gap-1.5",
								children: ROCKET_TIERS.map((t) => {
									const isCompleted = isRocketLocked24h || t.level < rocketLevel;
									const isCurrentActive = !isRocketLocked24h && t.level === rocketLevel;
									const isPreviewed = previewRocketLevel === t.level;
									return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										onClick: () => setPreviewRocketLevel(t.level),
										className: `rounded-xl p-2 flex flex-col items-center border transition-colors ${isPreviewed ? "bg-amber-400/15 border-amber-400/70" : isCompleted ? "bg-emerald-500/10 border-emerald-500/30" : "bg-white/4 border-white/8 opacity-65"}`,
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-lg",
												children: t.icon
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "text-[10px] font-bold text-slate-200 mt-0.5",
												children: ["Lv.", t.level]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[9px] text-slate-400",
												children: isCompleted ? "مغلق" : isCurrentActive ? "نشط" : "مقفل"
											})
										]
									}, t.level);
								})
							}),
							isRocketLocked24h ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-3.5 rounded-2xl bg-rose-950/40 border border-rose-500/40 text-center space-y-1.5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-xs font-bold text-rose-300",
										children: "تم إغلاق جميع الصواريخ الخمسة في هذه الغرفة"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-[11px] text-slate-300",
										children: "يتم التجديد تلقائياً بعد مرور 24 ساعة:"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-base font-mono tabular-nums font-bold text-amber-300",
										children: formatCooldownHMS(rocketCooldownRemainingMs)
									})
								]
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-3.5 rounded-2xl bg-white/[0.04] border border-white/8 space-y-2 text-right",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between text-xs",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-bold text-white",
											children: previewRocketTier.nameAr
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-mono tabular-nums text-amber-300",
											children: previewRocketLevel < rocketLevel ? `${previewRocketTier.targetCoins.toLocaleString()} / ${previewRocketTier.targetCoins.toLocaleString()}` : previewRocketLevel === rocketLevel ? `${rocketCurrentSupport.toLocaleString()} / ${currentRocketTier.targetCoins.toLocaleString()}` : `0 / ${previewRocketTier.targetCoins.toLocaleString()}`
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "w-full h-2.5 rounded-full bg-slate-900 overflow-hidden",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: `h-full bg-gradient-to-r ${previewRocketTier.accent} transition-all duration-300`,
											style: { width: `${previewRocketLevel < rocketLevel ? 100 : previewRocketLevel === rocketLevel ? rocketProgressPercent : 0}%` }
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[11px] text-slate-400 leading-relaxed",
										children: "يُشحن الصاروخ تلقائياً فقط عند رمي الهدايا بالكوينزات داخل الغرفة، ولا يتجدد بعد إغلاق المستويات الـ 5 إلا بعد 24 ساعة."
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-4 gap-2 text-center",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "p-2 rounded-xl bg-white/[0.04] border border-white/8 flex flex-col items-center",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xl",
										children: "🪙"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-[10px] font-mono tabular-nums font-bold text-amber-300 mt-1",
										children: ["+", previewRocketTier.rewardCoins.toLocaleString()]
									})]
								}), resolveRocketBagGifts(previewRocketTier.level, gifts).map((rg, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "p-2 rounded-xl bg-white/[0.04] border border-white/8 flex flex-col items-center",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xl",
										children: rg.gift.icon || "🎁"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-[10px] font-mono tabular-nums text-emerald-400 mt-1",
										children: ["×", rg.count]
									})]
								}, idx))]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => {
									setGiftDrawerTab("all");
									openGiftDrawer();
								},
								className: "w-full h-11 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs transition-colors",
								children: "إرسال هدايا في الغرفة لشحن الصاروخ"
							})
						]
					})
				}),
				activeBottomDrawer === "lucky_bag_drawer" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-0 z-50 bg-black/65 backdrop-blur-[2px] flex flex-col justify-end",
					onClick: () => setActiveBottomDrawer("none"),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "w-full bg-[#111522] border-t border-white/12 rounded-t-3xl p-4 pb-5 text-white space-y-3.5 shadow-2xl",
						onClick: (e) => e.stopPropagation(),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-10 h-1 bg-white/20 rounded-full mx-auto" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-right",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-sm font-bold text-white",
									children: "إطلاق كيس الحظ (لمدة 10 ثوانٍ)"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-slate-400 mt-0.5",
									children: "يظهر الكيس داخل الغرفة لمدة 10 ثوانٍ ليستلم المتواجدون منه الهدايا والكوينزات ثم يختفي تلقائياً."
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "space-y-2",
								children: [
									{
										tierName: "كيس الحظ السريع",
										cost: 0,
										poolCoins: 1500,
										gifts: resolveLuckyBagRewards(0, gifts)
									},
									{
										tierName: "كيس الحظ الذهبي",
										cost: 2e3,
										poolCoins: 3500,
										gifts: resolveLuckyBagRewards(1, gifts)
									},
									{
										tierName: "كيس الحظ الملكي",
										cost: 1e4,
										poolCoins: 18e3,
										gifts: resolveLuckyBagRewards(2, gifts)
									}
								].map((bag, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "p-3 rounded-2xl bg-white/[0.04] border border-white/8 flex items-center justify-between gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "text-right",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-xs font-bold text-white",
											children: bag.tierName
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "text-[11px] text-slate-400 font-mono tabular-nums mt-0.5",
											children: [
												"+",
												bag.poolCoins.toLocaleString(),
												" عملة ·",
												" ",
												bag.gifts.map((g) => `${g.icon}×${g.count}`).join(" ")
											]
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => handleLaunchLuckyBag(bag.tierName, bag.cost, bag.poolCoins, bag.gifts),
										className: "h-9 px-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs shrink-0",
										children: bag.cost === 0 ? "إطلاق مجاني" : `${bag.cost.toLocaleString()} عملة`
									})]
								}, i))
							})
						]
					})
				}),
				activeBottomDrawer === "game_center" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-0 z-50 bg-black/65 backdrop-blur-[2px] flex flex-col justify-end",
					onClick: () => setActiveBottomDrawer("none"),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "w-full bg-[#111522] border-t border-white/12 rounded-t-3xl p-4 text-white shadow-2xl",
						onClick: (e) => e.stopPropagation(),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-10 h-1 bg-white/20 rounded-full mx-auto mb-3" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InteractiveGamesHub, {
							compact: true,
							onOpenWallet: () => {
								setActiveBottomDrawer("none");
								setActiveModal("wallet");
							},
							onWinAnnouncement: (gameName, gameIcon, winCoins, mult) => {
								const nowTime = (/* @__PURE__ */ new Date()).toLocaleTimeString("ar-EG", {
									hour: "2-digit",
									minute: "2-digit"
								});
								setRoomEventLogs((prev) => [...prev.slice(-30), {
									id: `log_game_${Date.now()}`,
									type: "game_win",
									senderName: currentUser.displayName,
									vipLevel: currentUser.vipLevel,
									level: currentUser.level,
									targetNames: gameName,
									giftName: gameName,
									giftIcon: gameIcon,
									giftCount: 1,
									comboHits: 1,
									winCoins,
									multiplier: mult,
									time: nowTime
								}]);
							}
						})]
					})
				}),
				activeBottomDrawer === "top_ranking" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-0 z-50 bg-black/65 backdrop-blur-[2px] flex flex-col justify-end",
					onClick: () => setActiveBottomDrawer("none"),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "w-full bg-[#111522] border-t border-white/12 rounded-t-3xl p-4 pb-5 text-white space-y-3 shadow-2xl",
						onClick: (e) => e.stopPropagation(),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-10 h-1 bg-white/20 rounded-full mx-auto" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between border-b border-white/8 pb-2.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2 text-sm font-bold text-white",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trophy, { className: "w-4 h-4 text-amber-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "ترتيب المايكات والدعم" })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => setActiveBottomDrawer("none"),
									className: "text-xs text-slate-400 hover:text-white",
									children: "إغلاق"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "max-h-72 overflow-y-auto space-y-2 no-scrollbar",
								children: occupiedSeats.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "py-10 text-center space-y-2.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-3xl opacity-80",
										children: "🎙️"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-slate-400",
										children: "لا يوجد متحدثون على المايكات حالياً — اصعد على أي مايك لبدء التفاعل والدعم."
									})]
								}) : occupiedSeats.slice().sort((a, b) => (b.heartPoints || 0) - (a.heartPoints || 0)).map((s, rankIdx) => {
									const heartScore = seatHeartsOverride[s.index] !== void 0 ? seatHeartsOverride[s.index] : s.heartPoints || 0;
									return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between p-2.5 rounded-2xl bg-white/[0.04] border border-white/8",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-2.5",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: `w-6 h-6 rounded-full flex items-center justify-center font-mono tabular-nums font-bold text-xs ${rankIdx === 0 ? "bg-amber-400 text-slate-950" : rankIdx === 1 ? "bg-slate-300 text-slate-950" : rankIdx === 2 ? "bg-amber-700 text-white" : "bg-white/10 text-slate-300"}`,
													children: rankIdx + 1
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
													src: s.userAvatar || currentUser.avatar,
													alt: s.userName,
													referrerPolicy: "no-referrer",
													className: "w-9 h-9 rounded-full object-cover"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "text-right",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "text-xs font-semibold text-white",
														children: s.userName || `مايك #${s.index + 1}`
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "text-[11px] font-mono tabular-nums text-rose-300",
														children: [
															"مايك ",
															s.index + 1,
															" · ",
															heartScore.toLocaleString(),
															" نقطة"
														]
													})]
												})
											]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											onClick: () => openGiftDrawer(s.index),
											className: "h-8 px-3 rounded-xl bg-amber-400/15 border border-amber-400/40 text-amber-300 font-bold text-xs hover:bg-amber-400/25 transition-colors",
											children: "دعم"
										})]
									}, s.index);
								})
							})
						]
					})
				}),
				luckyBagRewardToast && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-0 z-50 bg-black/65 backdrop-blur-xs flex items-center justify-center p-4",
					onClick: () => setLuckyBagRewardToast(null),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "w-full max-w-xs rounded-3xl bg-[#141928] border border-amber-400/40 p-5 text-center space-y-4 shadow-2xl",
						onClick: (e) => e.stopPropagation(),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-4xl",
								children: "🧧"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-sm font-bold text-white",
								children: "تم استلام غنائم كيس الحظ"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-slate-400 mt-1",
								children: "أُضيفت العملات إلى محفظتك والهدايا إلى حقيبتك"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "py-2 rounded-xl bg-amber-400/10 border border-amber-400/30 font-mono tabular-nums text-sm font-bold text-amber-300",
								children: [
									"+",
									luckyBagRewardToast.coinsWon.toLocaleString(),
									" عملة"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid grid-cols-2 gap-2",
								children: luckyBagRewardToast.giftsWon.map((g, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "p-2 rounded-xl bg-white/5 border border-white/8 flex flex-col items-center",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-2xl",
											children: g.icon
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[11px] text-white mt-0.5",
											children: g.nameAr
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "text-[10px] font-mono tabular-nums text-emerald-400",
											children: ["×", g.count]
										})
									]
								}, i))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setLuckyBagRewardToast(null),
								className: "w-full h-10 rounded-xl bg-amber-400 text-slate-950 font-bold text-xs",
								children: "تم"
							})
						]
					})
				}),
				rocketRewardPopup && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-0 z-50 bg-black/65 backdrop-blur-xs flex items-center justify-center p-4",
					onClick: () => setRocketRewardPopup(null),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "w-full max-w-xs rounded-3xl bg-[#141928] border border-amber-400/40 p-5 text-center space-y-4 shadow-2xl",
						onClick: (e) => e.stopPropagation(),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-4xl",
								children: "🚀"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
								className: "text-sm font-bold text-white",
								children: [
									"اكتمل ",
									rocketRewardPopup.nameAr,
									" (Lv.",
									rocketRewardPopup.level,
									")"
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-slate-400 mt-1",
								children: "تم إيداع المكافآت في المحفظة والحقيبة"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "py-2 rounded-xl bg-amber-400/10 border border-amber-400/30 font-mono tabular-nums text-sm font-bold text-amber-300",
								children: [
									"+",
									rocketRewardPopup.coinsWon.toLocaleString(),
									" عملة"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid grid-cols-3 gap-2",
								children: rocketRewardPopup.giftsWon.map((gw, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "p-2 rounded-xl bg-white/5 border border-white/8 flex flex-col items-center",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-2xl",
											children: gw.icon
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[10px] text-white truncate w-full",
											children: gw.nameAr
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "text-[10px] font-mono tabular-nums text-emerald-400",
											children: ["×", gw.count]
										})
									]
								}, i))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setRocketRewardPopup(null),
								className: "w-full h-10 rounded-xl bg-amber-400 text-slate-950 font-bold text-xs",
								children: "حسناً"
							})
						]
					})
				})
			]
		})]
	});
};
export { VoiceRoomView };
