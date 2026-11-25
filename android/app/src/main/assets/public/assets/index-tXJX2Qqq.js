const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/AgoraRTC_N-production-DwbypW4G.js","assets/rolldown-runtime-CO0Nlsmt.js","assets/AuthScreen-BNaSKBXH.js","assets/icons-CSx0WKXF.js","assets/react-vendor-BIdqWr74.js","assets/VoiceRoomView-CibTwBDL.js","assets/InteractiveGamesHub-WWS-ifxp.js","assets/SmartMediaView-B1toZNK4.js","assets/GameCenterScreen-CQP1xV8-.js","assets/ChatInboxScreen-COq28SdJ.js","assets/ProfileScreen-DxCN0EKQ.js","assets/RechargeAgentPortal-sw_52lu8.js","assets/AdminDashboard-8njxEiQ_.js","assets/WalletModal-BjwpVdRS.js","assets/VipCenterModal-7LLEKil6.js","assets/BackpackModal-C6NCAFH9.js","assets/GameCenterModal-ewMobn5_.js","assets/AgencyPortalModal-CLE2DrKt.js","assets/UserProfileModal-Cy6qZ6ez.js","assets/MessagesDrawer-pxd6Asti.js","assets/CreateRoomModal-BhuJ_DkY.js"])))=>i.map(i=>d[i]);
import { n as __toESM } from "./rolldown-runtime-CO0Nlsmt.js";
import { n as require_client, t as require_jsx_runtime } from "./react-vendor-BIdqWr74.js";
import { $ as KeyRound, A as Search, Ct as CircleAlert, D as ShieldAlert, E as ShieldCheck, Et as Check, I as Plus, It as require_react, O as Share, P as Radio, T as Shield, U as MessageSquare, V as Mic, W as MessageCircle, Y as Lock, _t as CreditCard, a as VolumeX, at as Globe, c as Users, ct as Gamepad2, f as UserCheck, ft as ExternalLink, gt as Crown, j as RotateCcw, l as User, m as TriangleAlert, mt as Download, o as Volume2, p as Trophy, pt as EllipsisVertical, r as WifiOff, st as Gem, t as X, tt as House, vt as Copy, x as Smartphone, xt as CircleCheck, y as Sparkles, yt as Coins, z as PackageCheck } from "./icons-CSx0WKXF.js";
import "./firebase-core-DqUz2RJ6.js";
import { a as limit, c as query, d as collection, f as doc, i as getDocs, l as setDoc, n as getDoc, o as onSnapshot, p as getFirestore, r as getDocFromServer, s as orderBy, t as deleteDoc, u as writeBatch } from "./firebase-db-CZnQN1J1.js";
import { a as signInWithEmailAndPassword, c as updateProfile, h as initializeApp, i as onAuthStateChanged, m as getApps, n as createUserWithEmailAndPassword, o as signInWithPopup, p as getApp, r as getAuth, s as signOut, t as GoogleAuthProvider } from "./firebase-auth-CcwSZPMl.js";
// \0vite/modulepreload-polyfill.js
(function polyfill() {
	const relList = document.createElement("link").relList;
	if (relList && relList.supports && relList.supports("modulepreload")) return;
	for (const link of document.querySelectorAll("link[rel=\"modulepreload\"]")) processPreload(link);
	new MutationObserver((mutations) => {
		for (const mutation of mutations) {
			if (mutation.type !== "childList") continue;
			for (const node of mutation.addedNodes) if (node.tagName === "LINK" && node.rel === "modulepreload") processPreload(node);
		}
	}).observe(document, {
		childList: true,
		subtree: true
	});
	function getFetchOpts(link) {
		const fetchOpts = {};
		if (link.integrity) fetchOpts.integrity = link.integrity;
		if (link.referrerPolicy) fetchOpts.referrerPolicy = link.referrerPolicy;
		if (link.crossOrigin === "use-credentials") fetchOpts.credentials = "include";
		else if (link.crossOrigin === "anonymous") fetchOpts.credentials = "omit";
		else fetchOpts.credentials = "same-origin";
		return fetchOpts;
	}
	function processPreload(link) {
		if (link.ep) return;
		link.ep = true;
		const fetchOpts = getFetchOpts(link);
		fetch(link.href, fetchOpts);
	}
})();
// \0vite/preload-helper.js
var import_client = require_client();
var scriptRel = "modulepreload";
var assetsURL = function(dep) {
	return "/" + dep;
};
var seen = {};
var isCssPreloadUrl = function isCssPreloadUrl(url) {
	return url.pathname.endsWith(".css");
};
var preloadOnce = function preloadOnce(seen, href, preload) {
	if (href in seen) return seen[href];
	const promise = preload();
	if (!promise) {
		seen[href] = void 0;
		return;
	}
	const preloadPromise = promise.then(() => {
		seen[href] = void 0;
	}, (err) => {
		seen[href] = void 0;
		throw err;
	});
	seen[href] = preloadPromise;
	return preloadPromise;
};
var __vitePreload = function preload(baseModule, deps, importerUrl) {
	let promise = Promise.resolve();
	if (deps && deps.length > 0) {
		let preloadedHrefs;
		const cspNonceMeta = document.querySelector("meta[property=csp-nonce]");
		const cspNonce = cspNonceMeta?.nonce || cspNonceMeta?.getAttribute("nonce");
		function allSettled(promises) {
			return Promise.all(promises.map((p) => Promise.resolve(p).then((value) => ({
				status: "fulfilled",
				value
			}), (reason) => ({
				status: "rejected",
				reason
			}))));
		}
		function importMetaResolve(specifier) {
			if (import.meta.resolve) return new URL(import.meta.resolve(specifier));
			return new URL(
				specifier,
				/** #__KEEP__ */
				import.meta.url
			);
		}
		promise = allSettled(deps.map((depString) => {
			depString = assetsURL(depString, importerUrl);
			const dep = importMetaResolve(depString);
			const isCss = isCssPreloadUrl(dep);
			return preloadOnce(seen, dep.href, () => {
				if (preloadedHrefs === void 0) {
					preloadedHrefs = {
						all: /* @__PURE__ */ new Set(),
						styles: /* @__PURE__ */ new Set()
					};
					const links = document.getElementsByTagName("link");
					for (let i = links.length - 1; i >= 0; i--) {
						const link = links[i];
						preloadedHrefs.all.add(link.href);
						if (link.rel === "stylesheet") preloadedHrefs.styles.add(link.href);
					}
				}
				if ((isCss ? preloadedHrefs.styles : preloadedHrefs.all).has(dep.href)) return;
				const link = document.createElement("link");
				link.rel = isCss ? "stylesheet" : scriptRel;
				if (!isCss) link.as = "script";
				link.crossOrigin = "";
				link.href = dep.href;
				if (cspNonce) link.setAttribute("nonce", cspNonce);
				document.head.appendChild(link);
				if (isCss) return new Promise((res, rej) => {
					link.addEventListener("load", res);
					link.addEventListener("error", () => rej(/* @__PURE__ */ new Error(`Unable to preload CSS for ${dep}`)));
				});
			});
		}).filter((p) => p !== void 0));
	}
	function handlePreloadError(err) {
		const e = new Event("vite:preloadError", { cancelable: true });
		e.payload = err;
		window.dispatchEvent(e);
		if (!e.defaultPrevented) throw err;
	}
	return promise.then((res) => {
		for (const item of res || []) {
			if (item.status !== "rejected") continue;
			handlePreloadError(item.reason);
		}
		return baseModule().catch(handlePreloadError);
	});
};
// ../../@vite-plugin-pwa/virtual:pwa-register
var autoUpdateMode = "true";
var selfDestroying = "false";
var auto = autoUpdateMode === "true";
var autoDestroy = selfDestroying === "true";
function registerSW(options = {}) {
	const { immediate = false, onNeedReload, onNeedRefresh, onOfflineReady, onRegistered, onRegisteredSW, onRegisterError } = options;
	let wb;
	let registerPromise;
	let sendSkipWaitingMessage;
	const updateServiceWorker = async (_reloadPage = true) => {
		await registerPromise;
		if (!auto) sendSkipWaitingMessage?.();
	};
	async function register() {
		if ("serviceWorker" in navigator) {
			wb = await __vitePreload(async () => {
				const { Workbox } = await import("./workbox-window.prod.es5-CzJxx9q2.js");
				return { Workbox };
			}, []).then(({ Workbox }) => {
				return new Workbox("/sw.js", {
					scope: "/",
					type: "classic"
				});
			}).catch((e) => {
				onRegisterError?.(e);
			});
			if (!wb) return;
			sendSkipWaitingMessage = () => {
				wb?.messageSkipWaiting();
			};
			if (!autoDestroy) {
				if (auto) {
					wb.addEventListener("activated", (event) => {
						if (event.isUpdate || event.isExternal) {
							if (onNeedReload) onNeedReload();
							else window.location.reload();
						}
					});
					wb.addEventListener("installed", (event) => {
						if (!event.isUpdate) onOfflineReady?.();
					});
				} else {
					let onNeedRefreshCalled = false;
					const showSkipWaitingPrompt = () => {
						onNeedRefreshCalled = true;
						wb?.addEventListener("controlling", (event) => {
							if (event.isUpdate) {
								if (onNeedReload) onNeedReload();
								else window.location.reload();
							}
						});
						onNeedRefresh?.();
					};
					wb.addEventListener("installed", (event) => {
						if (typeof event.isUpdate === "undefined") {
							if (typeof event.isExternal !== "undefined") {
								if (event.isExternal) showSkipWaitingPrompt();
								else !onNeedRefreshCalled && onOfflineReady?.();
							} else !onNeedRefreshCalled && onOfflineReady?.();
						} else if (!event.isUpdate) onOfflineReady?.();
					});
					wb.addEventListener("waiting", showSkipWaitingPrompt);
				}
			}
			wb.register({ immediate }).then((r) => {
				if (onRegisteredSW) onRegisteredSW("/sw.js", r);
				else onRegistered?.(r);
			}).catch((e) => {
				onRegisterError?.(e);
			});
		}
	}
	registerPromise = register();
	return updateServiceWorker;
}
// src/utils/i18n.ts
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var translations = {
	ar: {
		appName: "هالة صوتية VIP",
		tagline: "منصة الدردشة الصوتية الاجتماعية الفاخرة",
		onlineUsers: "المتصلون الآن",
		activeRooms: "الغرف النشطة",
		wallet: "المحفظة",
		coins: "عملات",
		diamonds: "ألماس",
		vipCenter: "مركز VIP",
		backpack: "الحقيبة",
		gamesCenter: "مركز الألعاب",
		agencyCenter: "نظام الوكالات",
		rechargeAgent: "وكيل الشحن",
		adminDashboard: "لوحة الإدارة",
		userApp: "تطبيق المستخدم",
		createRoom: "إنشاء غرفة جديدة",
		allRooms: "الكل",
		chatMusic: "طرب وموسيقى",
		contests: "مسابقات وألعاب",
		officialRooms: "غرف رسمية",
		vipRooms: "غرف VIP",
		takeMic: "صعود المايك",
		leaveMic: "نزول من المايك",
		muteMic: "كتم المايك",
		unmuteMic: "فتح المايك",
		lockSeat: "قفل المقعد",
		unlockSeat: "فتح المقعد",
		sendGift: "إرسال هدية",
		recharge: "شحن رصيد",
		withdraw: "سحب الأرباح",
		history: "سجل العمليات",
		exploreGifts: "متجر الهدايا",
		roomSettings: "إدارة الغرفة",
		leaveRoom: "مغادرة الغرفة",
		roomViewers: "المتواجدون في الغرفة",
		sendToAll: "إرسال للجميع",
		sendToSpeaker: "إرسال للمتحدث",
		giftCombos: "مضاعفات الإرسال",
		soundEffects: "المؤثرات الصوتية",
		musicPlayer: "مشغل الموسيقى",
		applause: "تصفيق حار",
		cheer: "هتاف وتحية",
		profile: "الملف الشخصي",
		friends: "الأصدقاء",
		messages: "الرسائل",
		notifications: "الإشعارات",
		search: "بحث برقم ID أو الاسم...",
		status: "الحالة",
		level: "المستوى",
		agency: "الوكالة",
		hosts: "المضيفين",
		earnings: "الأرباح",
		commission: "العمولة",
		agentRechargeTool: "شحن رصيد مستخدم (وكيل معتمد)",
		targetUserId: "رقم ID المستخدم",
		amount: "كمية العملات",
		confirmRecharge: "تأكيد عملية الشحن",
		close: "إغلاق"
	},
	en: {
		appName: "AuraVoice VIP",
		tagline: "Premium Social Voice Chat & Agency Platform",
		onlineUsers: "Online Now",
		activeRooms: "Active Rooms",
		wallet: "Wallet",
		coins: "Coins",
		diamonds: "Diamonds",
		vipCenter: "VIP Center",
		backpack: "Backpack",
		gamesCenter: "Game Center",
		agencyCenter: "Agency System",
		rechargeAgent: "Recharge Agent",
		adminDashboard: "Admin Panel",
		userApp: "User App",
		createRoom: "Create Room",
		allRooms: "All",
		chatMusic: "Music & Vibes",
		contests: "Games & Contests",
		officialRooms: "Official",
		vipRooms: "VIP Rooms",
		takeMic: "Take Mic",
		leaveMic: "Leave Mic",
		muteMic: "Mute Mic",
		unmuteMic: "Unmute Mic",
		lockSeat: "Lock Seat",
		unlockSeat: "Unlock Seat",
		sendGift: "Send Gift",
		recharge: "Top Up",
		withdraw: "Withdraw",
		history: "Transactions",
		exploreGifts: "Gift Store",
		roomSettings: "Room Controls",
		leaveRoom: "Leave Room",
		roomViewers: "Viewers",
		sendToAll: "Send to All",
		sendToSpeaker: "Send to Speaker",
		giftCombos: "Gift Combos",
		soundEffects: "Soundboard",
		musicPlayer: "Music Player",
		applause: "Applause",
		cheer: "Cheer",
		profile: "Profile",
		friends: "Friends",
		messages: "Messages",
		notifications: "Notifications",
		search: "Search by ID or name...",
		status: "Status",
		level: "Level",
		agency: "Agency",
		hosts: "Hosts",
		earnings: "Earnings",
		commission: "Commission",
		agentRechargeTool: "Agent Recharge Terminal",
		targetUserId: "User ID",
		amount: "Coin Amount",
		confirmRecharge: "Confirm Recharge",
		close: "Close"
	},
	zh: {
		appName: "AuraVoice VIP 语聊",
		tagline: "豪华社交多人语音直播平台",
		onlineUsers: "在线用户",
		activeRooms: "热门语聊房",
		wallet: "我的钱包",
		coins: "金币",
		diamonds: "钻石",
		vipCenter: "VIP 特权中心",
		backpack: "背包道具",
		gamesCenter: "娱乐游戏",
		agencyCenter: "公会系统",
		rechargeAgent: "代理充值商",
		adminDashboard: "管理后台",
		userApp: "客户端",
		createRoom: "开播创建房间",
		allRooms: "全部",
		chatMusic: "音乐电台",
		contests: "比赛互动",
		officialRooms: "官方认证",
		vipRooms: "尊贵VIP房",
		takeMic: "上麦互动",
		leaveMic: "下麦",
		muteMic: "静音麦克风",
		unmuteMic: "开启麦克风",
		lockSeat: "锁麦",
		unlockSeat: "解锁麦位",
		sendGift: "赠送礼物",
		recharge: "充值金币",
		withdraw: "收益提现",
		history: "交易流水",
		exploreGifts: "礼物商城",
		roomSettings: "房间管理",
		leaveRoom: "退出房间",
		roomViewers: "房间成员",
		sendToAll: "全麦打赏",
		sendToSpeaker: "送给主讲",
		giftCombos: "连击倍数",
		soundEffects: "趣味音效",
		musicPlayer: "背景音乐",
		applause: "热烈鼓掌",
		cheer: "全场欢呼",
		profile: "个人主页",
		friends: "好友列表",
		messages: "私信消息",
		notifications: "系统消息",
		search: "搜索用户ID或昵称...",
		status: "状态",
		level: "等级",
		agency: "所属公会",
		hosts: "旗下主播",
		earnings: "总收益",
		commission: "佣金分成",
		agentRechargeTool: "官方充值商专用台",
		targetUserId: "目标用户ID",
		amount: "金币数量",
		confirmRecharge: "确认快速到账",
		close: "关闭"
	},
	hi: {
		appName: "AuraVoice VIP",
		tagline: "प्रीमियम वॉइस चैट और एजेंसी प्लेटफॉर्म",
		onlineUsers: "ऑनलाइन यूजर्स",
		activeRooms: "सक्रिय रूम्स",
		wallet: "वॉलेट",
		coins: "सिक्के",
		diamonds: "हीरे",
		vipCenter: "VIP केंद्र",
		backpack: "बैग/इन्वेंट्री",
		gamesCenter: "गेम्स केंद्र",
		agencyCenter: "एजेंसी सिस्टम",
		rechargeAgent: "रिचार्ज एजेंट",
		adminDashboard: "एडमिन पैनल",
		userApp: "यूजर ऐप",
		createRoom: "रूम बनाएं",
		allRooms: "सभी",
		chatMusic: "संगीत और बातचीत",
		contests: "प्रतियोगिताएं",
		officialRooms: "आधिकारिक",
		vipRooms: "VIP रूम्स",
		takeMic: "माइक पर आएं",
		leaveMic: "माइक छोड़ें",
		muteMic: "म्यूट करें",
		unmuteMic: "अनम्यूट करें",
		lockSeat: "सीट लॉक करें",
		unlockSeat: "सीट अनलॉक करें",
		sendGift: "गिफ्ट भेजें",
		recharge: "रिचार्ज करें",
		withdraw: "निकासी",
		history: "लेन-देन",
		exploreGifts: "गिफ्ट स्टोर",
		roomSettings: "रूम सेटिंग्स",
		leaveRoom: "रूम से बाहर जाएं",
		roomViewers: "दर्शक",
		sendToAll: "सभी को भेजें",
		sendToSpeaker: "स्पीकर को भेजें",
		giftCombos: "गिफ्ट कॉम्बो",
		soundEffects: "साउंड इफेक्ट्स",
		musicPlayer: "म्यूजिक प्लेयर",
		applause: "तालियां",
		cheer: "चीयर",
		profile: "प्रोफाइल",
		friends: "दोस्त",
		messages: "मैसेज",
		notifications: "सूचनाएं",
		search: "ID या नाम खोजें...",
		status: "स्थिति",
		level: "लेवल",
		agency: "एजेंसी",
		hosts: "होस्ट्स",
		earnings: "कमाई",
		commission: "कमीशन",
		agentRechargeTool: "एजेंट रिचार्ज टर्मिनल",
		targetUserId: "यूजर ID",
		amount: "सिक्के",
		confirmRecharge: "पुष्टि करें",
		close: "बंद करें"
	},
	id: {
		appName: "AuraVoice VIP",
		tagline: "Platform Obrolan Suara Sosial & Agensi Premium",
		onlineUsers: "Online Sekarang",
		activeRooms: "Ruang Aktif",
		wallet: "Dompet",
		coins: "Koin",
		diamonds: "Berlian",
		vipCenter: "Pusat VIP",
		backpack: "Ransel Item",
		gamesCenter: "Pusat Game",
		agencyCenter: "Sistem Agensi",
		rechargeAgent: "Agen Top Up",
		adminDashboard: "Panel Admin",
		userApp: "Aplikasi Pengguna",
		createRoom: "Buat Ruangan",
		allRooms: "Semua",
		chatMusic: "Musik & Santai",
		contests: "Kontes & Game",
		officialRooms: "Resmi",
		vipRooms: "Ruang VIP",
		takeMic: "Naik Mic",
		leaveMic: "Turun Mic",
		muteMic: "Bisukan Mic",
		unmuteMic: "Buka Mic",
		lockSeat: "Kunci Kursi",
		unlockSeat: "Buka Kunci",
		sendGift: "Kirim Hadiah",
		recharge: "Top Up Koin",
		withdraw: "Tarik Saldo",
		history: "Riwayat Transaksi",
		exploreGifts: "Toko Hadiah",
		roomSettings: "Kelola Ruang",
		leaveRoom: "Keluar Ruang",
		roomViewers: "Penonton",
		sendToAll: "Kirim Semua Mic",
		sendToSpeaker: "Kirim ke Pembicara",
		giftCombos: "Kombo Hadiah",
		soundEffects: "Papan Suara",
		musicPlayer: "Pemutar Musik",
		applause: "Tepuk Tangan",
		cheer: "Sorak Sorai",
		profile: "Profil",
		friends: "Teman",
		messages: "Pesan",
		notifications: "Notifikasi",
		search: "Cari ID atau nama...",
		status: "Status",
		level: "Level",
		agency: "Agensi",
		hosts: "Host Terdaftar",
		earnings: "Pendapatan",
		commission: "Komisi",
		agentRechargeTool: "Terminal Top Up Agen",
		targetUserId: "ID Pengguna Target",
		amount: "Jumlah Koin",
		confirmRecharge: "Konfirmasi Pengisian",
		close: "Tutup"
	},
	fil: {
		appName: "AuraVoice VIP",
		tagline: "Premium Social Voice Chat & Agency Platform",
		onlineUsers: "Online Ngayon",
		activeRooms: "Aktibong Kwarto",
		wallet: "Wallet",
		coins: "Barya",
		diamonds: "Diyamante",
		vipCenter: "VIP Center",
		backpack: "Bag ng Gamit",
		gamesCenter: "Game Center",
		agencyCenter: "Agency System",
		rechargeAgent: "Ahente ng Karga",
		adminDashboard: "Admin Panel",
		userApp: "User App",
		createRoom: "Gumawa ng Kwarto",
		allRooms: "Lahat",
		chatMusic: "Musika at Kwentuhan",
		contests: "Palaro at Paligsahan",
		officialRooms: "Opisyal",
		vipRooms: "VIP Rooms",
		takeMic: "Umakyat sa Mic",
		leaveMic: "Bumaba sa Mic",
		muteMic: "I-mute",
		unmuteMic: "I-unmute",
		lockSeat: "I-lock ang Upuan",
		unlockSeat: "Buksan ang Upuan",
		sendGift: "Magbigay ng Regalo",
		recharge: "Magkarga ng Barya",
		withdraw: "Mag-withdraw",
		history: "Kasaysayan",
		exploreGifts: "Tindahan ng Regalo",
		roomSettings: "Kontrol ng Kwarto",
		leaveRoom: "Umalis sa Kwarto",
		roomViewers: "Mga Manonood",
		sendToAll: "Ipadala sa Lahat",
		sendToSpeaker: "Ipadala sa Nagsasalita",
		giftCombos: "Combos ng Regalo",
		soundEffects: "Mga Tunog",
		musicPlayer: "Tugtog ng Musika",
		applause: "Palakpakan",
		cheer: "Sigawan",
		profile: "Profile",
		friends: "Mga Kaibigan",
		messages: "Mensahe",
		notifications: "Mga Abiso",
		search: "Maghanap gamit ang ID...",
		status: "Katayuan",
		level: "Antas",
		agency: "Ahensya",
		hosts: "Mga Host",
		earnings: "Kita",
		commission: "Komisyon",
		agentRechargeTool: "Terminal ng Ahente",
		targetUserId: "User ID",
		amount: "Halaga ng Barya",
		confirmRecharge: "Kumpirmahin ang Karga",
		close: "Isara"
	}
};
var serverCatalogSnapshot_default = {
	version: 6,
	updatedAt: "2026-11-25T00:54:07.278Z",
	gifts: [
		{
			"id": "gift_custom_1795568052614",
			"name": "ss",
			"nameAr": "ss",
			"category": "luxury",
			"coinPrice": 10000001,
			"diamondReward": 500,
			"icon": "🌟",
			"accentColor": "#f59e0b",
			"animationType": "luxury_banner",
			"soundEffect": "fanfare",
			"descriptionAr": "هدية عرض كامل الغرفة بمؤثرات مخصصة من لوحة التحكم",
			"isLucky": false,
			"updatedAt": "2026-11-25T00:54:12.615Z",
			"imageUrl": "https://x02.me/i/0sRq1W.png",
			"videoUrl": "https://cdn.dbimg.app/6u133A56.mp4"
		},
		{
			"id": "gift_custom_1795566806162",
			"name": "ssss",
			"nameAr": "ssss",
			"category": "luxury",
			"coinPrice": 1e8,
			"diamondReward": 500,
			"icon": "🌟",
			"accentColor": "#f59e0b",
			"animationType": "luxury_banner",
			"soundEffect": "fanfare",
			"descriptionAr": "هدية عرض كامل الغرفة بمؤثرات مخصصة من لوحة التحكم",
			"isLucky": false,
			"updatedAt": "2026-11-25T00:50:17.687Z",
			"imageUrl": "https://cdn.dbimg.app/Fe0LyzOu.mp4",
			"videoUrl": "https://cdn.dbimg.app/Fe0LyzOu.mp4"
		},
		{
			"id": "gift_custom_1795320342997",
			"name": "ا",
			"nameAr": "ا",
			"category": "luxury",
			"coinPrice": 1e8,
			"diamondReward": 500,
			"icon": "🌟",
			"accentColor": "#f59e0b",
			"animationType": "luxury_banner",
			"soundEffect": "fanfare",
			"descriptionAr": "هدية عرض كامل الغرفة بمؤثرات مخصصة من لوحة التحكم",
			"isLucky": false,
			"updatedAt": "2026-11-25T00:50:17.688Z",
			"imageUrl": "https://x02.me/i/iFHMe7.png",
			"videoUrl": "https://cdn.dbimg.app/0wrqeqV5.mp4",
			"effectDurationSec": 5
		},
		{
			"id": "gift_custom_1795320494405",
			"name": "ن",
			"nameAr": "ن",
			"category": "luxury",
			"coinPrice": 10001,
			"diamondReward": 500,
			"icon": "🌟",
			"accentColor": "#ec4899",
			"animationType": "lollipop_matrix",
			"soundEffect": "fanfare",
			"descriptionAr": "هدية حصرية مضافة حديثاً عبر لوحة التحكم",
			"isLucky": true,
			"updatedAt": "2026-11-25T00:50:17.688Z"
		},
		{
			"id": "gift_custom_1795320617614",
			"name": "ت",
			"nameAr": "ت",
			"category": "lucky",
			"coinPrice": 1e8,
			"diamondReward": 500,
			"icon": "🫂",
			"accentColor": "#ec4899",
			"animationType": "lollipop_matrix",
			"soundEffect": "fanfare",
			"descriptionAr": "هدية حصرية مضافة حديثاً عبر لوحة التحكم",
			"isLucky": true,
			"updatedAt": "2026-11-25T00:50:17.688Z"
		},
		{
			"id": "gift_custom_1795346253875",
			"name": "66",
			"nameAr": "66",
			"category": "luxury",
			"coinPrice": 901,
			"diamondReward": 500,
			"icon": "🌟",
			"accentColor": "#f59e0b",
			"animationType": "luxury_banner",
			"soundEffect": "fanfare",
			"descriptionAr": "هدية عرض كامل الغرفة بمؤثرات مخصصة من لوحة التحكم",
			"isLucky": false,
			"updatedAt": "2026-11-25T00:50:17.688Z",
			"imageUrl": "https://b.top4top.io/p_3978xi6fi1.png",
			"videoUrl": "https://x02.me/i/4AgqV5.webp"
		},
		{
			"id": "gift_custom_1795347136712",
			"name": "66",
			"nameAr": "66",
			"category": "vip",
			"coinPrice": 10151,
			"diamondReward": 500,
			"icon": "🌟",
			"accentColor": "#f59e0b",
			"animationType": "luxury_banner",
			"soundEffect": "fanfare",
			"descriptionAr": "هدية عرض كامل الغرفة بمؤثرات مخصصة من لوحة التحكم",
			"isLucky": false,
			"updatedAt": "2026-11-25T00:50:17.688Z",
			"videoUrl": "https://cdn.dbimg.app/V7QdQVSs.mp4"
		},
		{
			"id": "gift_custom_1795348210444",
			"name": "1",
			"nameAr": "1",
			"category": "luxury",
			"coinPrice": 1e8,
			"diamondReward": 500,
			"icon": "🌟",
			"accentColor": "#f59e0b",
			"animationType": "luxury_banner",
			"soundEffect": "fanfare",
			"descriptionAr": "هدية عرض كامل الغرفة بمؤثرات مخصصة من لوحة التحكم",
			"isLucky": false,
			"updatedAt": "2026-11-25T00:50:17.688Z",
			"imageUrl": "https://x02.me/i/0wlNjN.png",
			"videoUrl": "https://cdn.dbimg.app/DBzrXav8.mp4",
			"effectDurationSec": 4
		},
		{
			"id": "gift_custom_1795351427451",
			"name": "s",
			"nameAr": "s",
			"category": "luxury",
			"coinPrice": 1051,
			"diamondReward": 500,
			"icon": "🌟",
			"accentColor": "#f59e0b",
			"animationType": "luxury_banner",
			"soundEffect": "fanfare",
			"descriptionAr": "هدية عرض كامل الغرفة بمؤثرات مخصصة من لوحة التحكم",
			"isLucky": false,
			"updatedAt": "2026-11-25T00:50:17.688Z",
			"imageUrl": "https://x02.me/i/a3NW9W.png",
			"videoUrl": "https://cdn.dbimg.app/wGVxCAsE.mp4"
		}
	],
	storeItems: [
		{
			"id": "entrance_custom_1795320048877",
			"type": "entrance",
			"name": "ت",
			"nameEn": "ت",
			"nameAr": "ت",
			"priceCoins": 5e4,
			"durationDays": 30,
			"icon": "🚘",
			"accentColor": "#f59e0b",
			"descriptionAr": "تأثير دخولية فاخر يظهر عند دخولك إلى الغرف الصوتية",
			"updatedAt": "2026-11-25T00:50:17.688Z",
			"previewUrl": "https://a.top4top.io/m_3978zwcxm1.mp4",
			"videoUrl": "https://b.top4top.io/m_3978xhca80.mp4"
		},
		{
			"id": "entrance_custom_1795345668626",
			"type": "entrance",
			"name": "666",
			"nameEn": "666",
			"nameAr": "666",
			"priceCoins": 5e4,
			"durationDays": 30,
			"icon": "🚘",
			"accentColor": "#f59e0b",
			"descriptionAr": "تأثير دخولية فاخر يظهر عند دخولك إلى الغرف الصوتية",
			"updatedAt": "2026-11-25T00:50:17.688Z",
			"videoUrl": "https://cdn.dbimg.app/DBzrXav8.mp4",
			"effectDurationSec": 4
		},
		{
			"id": "frame_custom_1795317415858",
			"type": "frame",
			"name": "6",
			"nameEn": "6",
			"nameAr": "6",
			"priceCoins": 5e4,
			"durationDays": 30,
			"icon": "🪽",
			"accentColor": "#f59e0b",
			"descriptionAr": "إطار فاخر يحيط بصورتك على المايك وفي الملف الشخصي",
			"updatedAt": "2026-11-25T00:50:17.689Z",
			"previewUrl": "https://up6.cc/2026/11/179531732214271.png"
		},
		{
			"id": "frame_custom_1795318400863",
			"type": "frame",
			"name": "36",
			"nameEn": "36",
			"nameAr": "36",
			"priceCoins": 5e4,
			"durationDays": 30,
			"icon": "🪽",
			"accentColor": "#f59e0b",
			"descriptionAr": "إطار فاخر يحيط بصورتك على المايك وفي الملف الشخصي",
			"updatedAt": "2026-11-25T00:50:17.689Z",
			"previewUrl": "https://up6.cc/2026/11/179531836896631.png"
		},
		{
			"id": "frame_custom_1795348678242",
			"type": "frame",
			"name": "66",
			"nameEn": "66",
			"nameAr": "66",
			"priceCoins": 5e4,
			"durationDays": 30,
			"icon": "🪽",
			"accentColor": "#f59e0b",
			"descriptionAr": "إطار فاخر يحيط بصورتك على المايك وفي الملف الشخصي",
			"updatedAt": "2026-11-25T00:50:17.689Z",
			"previewUrl": "https://cdn.dbimg.app/tF9LTwrk.webp"
		},
		{
			"id": "frame_custom_1795348754737",
			"type": "frame",
			"name": "66666",
			"nameEn": "66666",
			"nameAr": "66666",
			"priceCoins": 5e4,
			"durationDays": 30,
			"icon": "🪽",
			"accentColor": "#f59e0b",
			"descriptionAr": "إطار فاخر يحيط بصورتك على المايك وفي الملف الشخصي",
			"updatedAt": "2026-11-25T00:50:17.689Z",
			"previewUrl": "https://cdn.dbimg.app/4UYbqIf7.webp"
		}
	],
	roomBackgrounds: [
		{
			"id": "roombg_1795349214413",
			"nameAr": "ss",
			"imageUrl": "https://x02.me/i/ZWKImc.jpg",
			"createdAt": "2026-11-22",
			"updatedAt": "2026-11-25T00:50:17.689Z"
		},
		{
			"id": "roombg_1795349296962",
			"nameAr": "ss",
			"imageUrl": "https://x02.me/i/7P78RQ.jpg",
			"createdAt": "2026-11-22",
			"updatedAt": "2026-11-25T00:50:17.689Z"
		},
		{
			"id": "roombg_1795349419401",
			"nameAr": "6",
			"imageUrl": "https://x02.me/i/Dhgmwf.jpg",
			"createdAt": "2026-11-22",
			"updatedAt": "2026-11-25T00:50:17.689Z"
		},
		{
			"id": "roombg_1795349493693",
			"nameAr": "66",
			"imageUrl": "https://x02.me/i/rTcvjv.jpg",
			"createdAt": "2026-11-22",
			"updatedAt": "2026-11-25T00:50:17.689Z"
		},
		{
			"id": "roombg_1795353516944",
			"nameAr": "s",
			"imageUrl": "https://x02.me/i/QPl05U.jpg",
			"createdAt": "2026-11-22",
			"updatedAt": "2026-11-25T00:50:17.689Z"
		}
	],
	deletedGiftIds: [],
	deletedStoreIds: [],
	deletedBackgroundIds: ["roombg_1795321410697", "roombg_1795321267417"]
};
// src/data/appDefaults.ts
var SNAPSHOT_GIFTS = Array.isArray(serverCatalogSnapshot_default.gifts) ? serverCatalogSnapshot_default.gifts : [];
var SNAPSHOT_STORE_ITEMS = Array.isArray(serverCatalogSnapshot_default.storeItems) ? serverCatalogSnapshot_default.storeItems.map((raw) => {
	const item = raw;
	const nameAr = String(item.nameAr || item.name || "");
	const nameEn = String(item.nameEn || item.name || nameAr);
	return {
		id: String(item.id || ""),
		type: item.type || "frame",
		nameAr,
		nameEn,
		priceCoins: Number(item.priceCoins) || 0,
		durationDays: Number(item.durationDays) || 30,
		previewUrl: typeof item.previewUrl === "string" ? item.previewUrl : "",
		videoUrl: typeof item.videoUrl === "string" ? item.videoUrl : void 0,
		effectDurationSec: typeof item.effectDurationSec === "number" ? item.effectDurationSec : void 0,
		previewGradient: typeof item.previewGradient === "string" ? item.previewGradient : "from-amber-500 to-yellow-600",
		icon: typeof item.icon === "string" ? item.icon : "✨",
		descriptionAr: typeof item.descriptionAr === "string" ? item.descriptionAr : "",
		updatedAt: typeof item.updatedAt === "string" ? item.updatedAt : void 0
	};
}) : [];
var SNAPSHOT_ROOM_BACKGROUNDS = Array.isArray(serverCatalogSnapshot_default.roomBackgrounds) ? serverCatalogSnapshot_default.roomBackgrounds : [];
var STARTER_DEFAULT_GIFT_ID = "gift_starter_default";
var STARTER_DEFAULT_GIFT = {
	id: STARTER_DEFAULT_GIFT_ID,
	name: "Royal Rose",
	nameAr: "وردة الترحيب",
	category: "classic",
	coinPrice: 10,
	diamondReward: 5,
	icon: "🌹",
	accentColor: "#f43f5e",
	animationType: "particle",
	soundEffect: "chime",
	isStarterDefault: true,
	descriptionAr: "هدية ترحيبية افتراضية تظهر تلقائياً حتى إضافة هدايا جديدة من لوحة المدير."
};
var LEGACY_MOCK_GIFT_IDS = [
	"g_rose",
	"g_coffee",
	"g_heart",
	"g_perfume",
	"g_ring",
	"g_crown",
	"g_sports_car",
	"g_yacht",
	"g_castle",
	"g_dragon",
	"g_falcon",
	"g_jet",
	"g_lollipop",
	"g_lucky_box",
	"g_lucky_clover",
	"g_lucky_star"
];
var LEGACY_MOCK_STORE_IDS = [
	"f_gold",
	"f_diamond",
	"f_dragon",
	"f_royal",
	"f_neon",
	"f_phoenix",
	"e_sports_car",
	"e_dragon",
	"e_falcon",
	"e_yacht",
	"e_royal_carriage",
	"e_jet"
];
var RECHARGE_PACKAGES = [
	{
		coins: 1e3,
		bonus: 0,
		priceUSD: "1.49"
	},
	{
		coins: 5e3,
		bonus: 250,
		priceUSD: "6.99"
	},
	{
		coins: 15e3,
		bonus: 1500,
		priceUSD: "19.99",
		popular: true
	},
	{
		coins: 35e3,
		bonus: 4500,
		priceUSD: "44.99"
	},
	{
		coins: 75e3,
		bonus: 12e3,
		priceUSD: "89.99"
	},
	{
		coins: 15e4,
		bonus: 3e4,
		priceUSD: "169.99",
		popular: true
	},
	{
		coins: 35e4,
		bonus: 85e3,
		priceUSD: "379.99"
	},
	{
		coins: 1e6,
		bonus: 3e5,
		priceUSD: "999.99"
	}
];
var VIP_TIERS = [
	{
		level: 1,
		nameAr: "فارس برونزي",
		nameEn: "Bronze Knight",
		coinCostMonthly: 5e3,
		badgeIcon: "🛡️",
		frameColor: "#cd7f32",
		entranceName: "دخول الفارس البرونزي",
		entranceIcon: "🛡️",
		chatColor: "#fbbf24",
		perks: [
			"شارة VIP 1 بجانب الاسم",
			"أولوية الجلوس على المايك",
			"مكافأة يومية 100 كوينز"
		]
	},
	{
		level: 2,
		nameAr: "فارس فضي",
		nameEn: "Silver Knight",
		coinCostMonthly: 15e3,
		badgeIcon: "⚔️",
		frameColor: "#cbd5e1",
		entranceName: "موكب الفضة الملكي",
		entranceIcon: "⚔️",
		chatColor: "#e2e8f0",
		perks: [
			"شارة VIP 2 الفضية",
			"رسائل دردشة مميزة",
			"حماية ضد الكتم العادي"
		]
	},
	{
		level: 3,
		nameAr: "نبيل ذهبي",
		nameEn: "Golden Noble",
		coinCostMonthly: 35e3,
		badgeIcon: "🏅",
		frameColor: "#f59e0b",
		entranceName: "دخول النبيل الذهبي",
		entranceIcon: "✨",
		chatColor: "#fcd34d",
		perks: [
			"إعلان دخول خاص للغرف",
			"خصم 5% في المتجر الملكي",
			"أولوية الدعم الفني"
		]
	},
	{
		level: 4,
		nameAr: "أمير الياقوت",
		nameEn: "Sapphire Prince",
		coinCostMonthly: 75e3,
		badgeIcon: "💎",
		frameColor: "#38bdf8",
		entranceName: "عاصفة الياقوت",
		entranceIcon: "💎",
		chatColor: "#7dd3fc",
		perks: [
			"إطار ياقوتي متوهج",
			"منع الطرد من المشرفين العاديين",
			"فتح جميع ألوان الدردشة"
		]
	},
	{
		level: 5,
		nameAr: "سلطان الزمرد",
		nameEn: "Emerald Sultan",
		coinCostMonthly: 15e4,
		badgeIcon: "👑",
		frameColor: "#10b981",
		entranceName: "موكب الزمرد الملكي",
		entranceIcon: "👑",
		chatColor: "#6ee7b7",
		perks: [
			"تأثير دخول فاخر في الغرف",
			"خصم 10% في المتجر",
			"ظهور في قائمة كبار الشخصيات"
		]
	},
	{
		level: 6,
		nameAr: "إمبراطور اللهب",
		nameEn: "Flame Emperor",
		coinCostMonthly: 3e5,
		badgeIcon: "🔥",
		frameColor: "#f97316",
		entranceName: "تنين اللهب الأسطوري",
		entranceIcon: "🔥",
		chatColor: "#fdba74",
		perks: [
			"تأثير دخول ناري على كامل الغرفة",
			"حماية شاملة للحساب",
			"هدايا حصرية لمستوى VIP 6"
		]
	},
	{
		level: 7,
		nameAr: "ملك الألماس",
		nameEn: "Diamond King",
		coinCostMonthly: 6e5,
		badgeIcon: "💠",
		frameColor: "#818cf8",
		entranceName: "قصر الألماس السماوي",
		entranceIcon: "💠",
		chatColor: "#c7d2fe",
		perks: [
			"دخول خفي للغرف عند الرغبة",
			"رقم ID مميز قصير",
			"خصم 15% على كل العناصر"
		]
	},
	{
		level: 8,
		nameAr: "قيصر السماء",
		nameEn: "Sky Caesar",
		coinCostMonthly: 12e5,
		badgeIcon: "🦅",
		frameColor: "#e879f9",
		entranceName: "صقر القيصر الذهبي",
		entranceIcon: "🦅",
		chatColor: "#f5d0fe",
		perks: [
			"بنر دخول ملكي عام",
			"مضاعفة نقاط الخبرة x2",
			"دعم مخصص على مدار الساعة"
		]
	},
	{
		level: 9,
		nameAr: "أسطورة فوكاشات",
		nameEn: "FokaChat Legend",
		coinCostMonthly: 25e5,
		badgeIcon: "🌟",
		frameColor: "#fb7185",
		entranceName: "موكب الأساطير الذهبي",
		entranceIcon: "🌟",
		chatColor: "#fecdd3",
		perks: [
			"أعلى أولوية في البحث والغرف",
			"خصم 20% في المتجر الملكي",
			"تخصيص كامل للغرفة الشخصية"
		]
	},
	{
		level: 10,
		nameAr: "تاج الإمبراطور الأعظم",
		nameEn: "Supreme Emperor",
		coinCostMonthly: 5e6,
		badgeIcon: "🏆",
		frameColor: "#facc15",
		entranceName: "عرش الإمبراطور الأعظم",
		entranceIcon: "🏆",
		chatColor: "#fef08a",
		perks: [
			"لقب الإمبراطور الحصري",
			"إعلان عالمي عند الدخول",
			"جميع مزايا VIP المفتوحة بالكامل"
		]
	}
];
function createEmptySeats(count) {
	return Array.from({ length: count }, (_, index) => ({
		index,
		userId: null,
		isMuted: false,
		isLocked: false,
		isReserved: false,
		isSpeaking: false,
		audioLevel: 0
	}));
}
var INITIAL_USERS = [{
	id: "user_current",
	userCode: "2026091",
	username: "fokachat_guest",
	displayName: "زائر فوكاشات",
	avatar: "/logo.png",
	coverImage: "/logo.png",
	bio: "أهلاً بك في منصة فوكاشات للدردشة الصوتية المباشرة.",
	level: 1,
	vipLevel: 0,
	coins: 5e3,
	diamonds: 0,
	country: "مصر",
	countryFlag: "🇪🇬",
	followersCount: 0,
	followingCount: 0,
	friendsCount: 0,
	likesCount: 0,
	visitorsCount: 0,
	isMuted: false,
	isBanned: false,
	online: true,
	createdAt: (/* @__PURE__ */ new Date()).toISOString()
}];
var INITIAL_ROOMS = [{
	id: "room_official_lobby",
	roomNo: "2026091",
	title: "الديوانية الملكية - فوكاشات",
	description: "الغرفة الرسمية للترحيب والتعارف الصوتي المباشر في فوكاشات.",
	coverImage: "/logo.png",
	category: "official",
	type: "official",
	ownerId: "user_current",
	ownerName: "إدارة فوكاشات",
	ownerAvatar: "/logo.png",
	seatCount: 8,
	seats: createEmptySeats(8),
	moderators: [],
	bannedUserIds: [],
	onlineViewersCount: 1,
	totalDiamondsEarned: 0,
	tags: [
		"رسمي",
		"دردشة",
		"فوكاشات"
	],
	announcement: "مرحباً بكم في فوكاشات! التزموا بالاحترام المتبادل واستمتعوا بالبث الصوتي المباشر."
}];
var INITIAL_AGENCIES = [];
var INITIAL_AGENTS = [];
var INITIAL_STAFF = [];
var INITIAL_TRANSACTIONS = [];
// src/utils/audio.ts
var SoundEngine = class {
	constructor() {
		this.ctx = null;
		this.isMuted = false;
		this.activeAudioSet = /* @__PURE__ */ new Set();
		this.previewAudioEl = null;
		this.audioBufferCache = /* @__PURE__ */ new Map();
		this.inflightAudioDecodes = /* @__PURE__ */ new Set();
		this.preloadedAudioEls = /* @__PURE__ */ new Map();
		this.audioUnlocked = false;
	}
	getContext() {
		if (typeof window === "undefined") return null;
		if (!this.ctx) {
			const AudioCtx = window.AudioContext || window.webkitAudioContext;
			if (AudioCtx) this.ctx = new AudioCtx();
		}
		if (this.ctx && this.ctx.state === "suspended") this.ctx.resume().catch(() => {});
		return this.ctx;
	}
	unlockAudio() {
		const ctx = this.getContext();
		if (ctx && !this.audioUnlocked) {
			this.audioUnlocked = true;
			try {
				const silent = ctx.createBuffer(1, 1, 22050);
				const src = ctx.createBufferSource();
				src.buffer = silent;
				src.connect(ctx.destination);
				src.start(0);
			} catch {}
		}
	}
	preloadAudioUrl(url) {
		const clean = url?.trim();
		if (!clean || typeof window === "undefined") return;
		if (typeof Audio !== "undefined" && !this.preloadedAudioEls.has(clean)) try {
			const el = new Audio(clean);
			el.preload = "auto";
			el.volume = .92;
			el.load();
			this.preloadedAudioEls.set(clean, el);
		} catch {}
		if (this.audioBufferCache.has(clean) || this.inflightAudioDecodes.has(clean)) return;
		const ctx = this.getContext();
		if (!ctx) return;
		this.inflightAudioDecodes.add(clean);
		fetch(clean, {
			mode: "cors",
			credentials: "omit"
		}).then((res) => res.ok ? res.arrayBuffer() : null).then((buf) => buf ? ctx.decodeAudioData(buf) : null).then((decoded) => {
			if (decoded) this.audioBufferCache.set(clean, decoded);
		}).catch(() => {}).finally(() => {
			this.inflightAudioDecodes.delete(clean);
		});
	}
	toggleMute() {
		this.isMuted = !this.isMuted;
		if (this.isMuted) this.stopAllCustomAudio();
		return this.isMuted;
	}
	getIsMuted() {
		return this.isMuted;
	}
	stopAllCustomAudio() {
		this.activeAudioSet.forEach((audioEl) => {
			try {
				audioEl.pause();
				audioEl.currentTime = 0;
			} catch {}
		});
		this.activeAudioSet.clear();
		this.stopPreviewAudio();
	}
	stopPreviewAudio() {
		if (this.previewAudioEl) {
			try {
				this.previewAudioEl.pause();
				this.previewAudioEl.currentTime = 0;
			} catch {}
			this.previewAudioEl = null;
		}
	}
	previewAudioUrl(url, onEnded) {
		const clean = url.trim();
		if (!clean || typeof Audio === "undefined") return false;
		this.stopPreviewAudio();
		try {
			const el = new Audio(clean);
			el.volume = .9;
			el.preload = "auto";
			el.onended = () => {
				if (this.previewAudioEl === el) this.previewAudioEl = null;
				onEnded?.();
			};
			el.onerror = () => {
				if (this.previewAudioEl === el) this.previewAudioEl = null;
				onEnded?.();
			};
			this.previewAudioEl = el;
			el.play().catch(() => {
				onEnded?.();
			});
			return true;
		} catch {
			onEnded?.();
			return false;
		}
	}
	playGiftHitAudio(fallbackType, customSoundUrl, forceMuted = false) {
		if (this.isMuted || forceMuted) return;
		const cleanUrl = customSoundUrl?.trim();
		if (cleanUrl) {
			const cachedBuffer = this.audioBufferCache.get(cleanUrl);
			const ctx = this.getContext();
			if (cachedBuffer && ctx) try {
				const src = ctx.createBufferSource();
				src.buffer = cachedBuffer;
				const gain = ctx.createGain();
				gain.gain.value = .92;
				src.connect(gain);
				gain.connect(ctx.destination);
				src.start(0);
				return;
			} catch {}
			this.preloadAudioUrl(cleanUrl);
			if (typeof Audio !== "undefined") try {
				if (this.activeAudioSet.size >= 4) {
					const oldest = this.activeAudioSet.values().next().value;
					if (oldest) {
						oldest.pause();
						this.activeAudioSet.delete(oldest);
					}
				}
				const warm = this.preloadedAudioEls.get(cleanUrl);
				const audio = warm && warm.paused ? warm : new Audio(cleanUrl);
				if (audio === warm) try {
					audio.currentTime = 0;
				} catch {}
				audio.volume = .92;
				audio.preload = "auto";
				this.activeAudioSet.add(audio);
				let fellBack = false;
				const triggerFallback = () => {
					this.activeAudioSet.delete(audio);
					if (!fellBack) {
						fellBack = true;
						this.playGiftSound(fallbackType);
					}
				};
				audio.onended = () => {
					this.activeAudioSet.delete(audio);
				};
				audio.onerror = triggerFallback;
				const playPromise = audio.play();
				if (playPromise && typeof playPromise.catch === "function") playPromise.catch(() => {
					triggerFallback();
				});
				return;
			} catch {
				this.playGiftSound(fallbackType);
				return;
			}
		}
		this.playGiftSound(fallbackType);
	}
	playMicClick(isUnmuting) {
		if (this.isMuted) return;
		const ctx = this.getContext();
		if (!ctx) return;
		const osc = ctx.createOscillator();
		const gain = ctx.createGain();
		const now = ctx.currentTime;
		osc.type = "sine";
		const startFreq = isUnmuting ? 440 : 880;
		const endFreq = isUnmuting ? 880 : 330;
		osc.frequency.setValueAtTime(startFreq, now);
		osc.frequency.exponentialRampToValueAtTime(endFreq, now + .08);
		gain.gain.setValueAtTime(.12, now);
		gain.gain.exponentialRampToValueAtTime(.001, now + .09);
		osc.connect(gain);
		gain.connect(ctx.destination);
		osc.start(now);
		osc.stop(now + .1);
	}
	playGiftSound(type) {
		if (this.isMuted) return;
		const ctx = this.getContext();
		if (!ctx) return;
		if (type === "applause") {
			this.playApplause();
			return;
		}
		if (type === "dice") {
			this.playDiceRoll();
			return;
		}
		if (type === "slot") {
			this.playSlotTick();
			return;
		}
		const now = ctx.currentTime;
		if (type === "chime") [
			1046.5,
			1318.5,
			1567.98,
			2093
		].forEach((freq, idx) => {
			const osc = ctx.createOscillator();
			const gain = ctx.createGain();
			const noteStart = now + idx * .06;
			osc.type = "triangle";
			osc.frequency.setValueAtTime(freq, noteStart);
			gain.gain.setValueAtTime(.15, noteStart);
			gain.gain.exponentialRampToValueAtTime(.001, noteStart + .5);
			osc.connect(gain);
			gain.connect(ctx.destination);
			osc.start(noteStart);
			osc.stop(noteStart + .55);
		});
		else if (type === "fanfare") [
			440,
			554.37,
			659.25,
			880,
			1108.73
		].forEach((freq, idx) => {
			const osc = ctx.createOscillator();
			const gain = ctx.createGain();
			const noteStart = now + idx * .08;
			osc.type = "sawtooth";
			osc.frequency.setValueAtTime(freq, noteStart);
			gain.gain.setValueAtTime(.1, noteStart);
			gain.gain.exponentialRampToValueAtTime(.001, noteStart + .4);
			osc.connect(gain);
			gain.connect(ctx.destination);
			osc.start(noteStart);
			osc.stop(noteStart + .45);
		});
		else if (type === "magic") for (let i = 0; i < 8; i++) {
			const osc = ctx.createOscillator();
			const gain = ctx.createGain();
			const noteStart = now + i * .04;
			const freq = 1200 + Math.random() * 1600;
			osc.type = "sine";
			osc.frequency.setValueAtTime(freq, noteStart);
			gain.gain.setValueAtTime(.08, noteStart);
			gain.gain.exponentialRampToValueAtTime(.001, noteStart + .25);
			osc.connect(gain);
			gain.connect(ctx.destination);
			osc.start(noteStart);
			osc.stop(noteStart + .3);
		}
		else if (type === "laser") {
			const osc = ctx.createOscillator();
			const gain = ctx.createGain();
			osc.type = "sawtooth";
			osc.frequency.setValueAtTime(1800, now);
			osc.frequency.exponentialRampToValueAtTime(120, now + .3);
			gain.gain.setValueAtTime(.18, now);
			gain.gain.exponentialRampToValueAtTime(.001, now + .35);
			osc.connect(gain);
			gain.connect(ctx.destination);
			osc.start(now);
			osc.stop(now + .38);
		} else if (type === "roar") {
			const osc = ctx.createOscillator();
			const gain = ctx.createGain();
			osc.type = "sawtooth";
			osc.frequency.setValueAtTime(90, now);
			osc.frequency.linearRampToValueAtTime(140, now + .2);
			osc.frequency.exponentialRampToValueAtTime(45, now + .6);
			gain.gain.setValueAtTime(.2, now);
			gain.gain.exponentialRampToValueAtTime(.001, now + .65);
			osc.connect(gain);
			gain.connect(ctx.destination);
			osc.start(now);
			osc.stop(now + .7);
		}
	}
	playApplause() {
		if (this.isMuted) return;
		const ctx = this.getContext();
		if (!ctx) return;
		const bufferSize = ctx.sampleRate * 1.2;
		const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
		const data = buffer.getChannelData(0);
		for (let i = 0; i < bufferSize; i++) data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (ctx.sampleRate * .7));
		const noise = ctx.createBufferSource();
		noise.buffer = buffer;
		const filter = ctx.createBiquadFilter();
		filter.type = "bandpass";
		filter.frequency.value = 1e3;
		filter.Q.value = 1.2;
		const gain = ctx.createGain();
		const now = ctx.currentTime;
		gain.gain.setValueAtTime(.25, now);
		gain.gain.exponentialRampToValueAtTime(.01, now + 1.15);
		noise.connect(filter);
		filter.connect(gain);
		gain.connect(ctx.destination);
		noise.start(now);
	}
	playDiceRoll() {
		if (this.isMuted) return;
		const ctx = this.getContext();
		if (!ctx) return;
		for (let i = 0; i < 6; i++) {
			const now = ctx.currentTime + i * .05 + Math.random() * .02;
			const osc = ctx.createOscillator();
			const gain = ctx.createGain();
			osc.type = "triangle";
			osc.frequency.setValueAtTime(220 + Math.random() * 300, now);
			gain.gain.setValueAtTime(.12, now);
			gain.gain.exponentialRampToValueAtTime(.001, now + .04);
			osc.connect(gain);
			gain.connect(ctx.destination);
			osc.start(now);
			osc.stop(now + .05);
		}
	}
	playSlotTick() {
		if (this.isMuted) return;
		const ctx = this.getContext();
		if (!ctx) return;
		const now = ctx.currentTime;
		const osc = ctx.createOscillator();
		const gain = ctx.createGain();
		osc.type = "square";
		osc.frequency.setValueAtTime(600, now);
		gain.gain.setValueAtTime(.05, now);
		gain.gain.exponentialRampToValueAtTime(.001, now + .03);
		osc.connect(gain);
		gain.connect(ctx.destination);
		osc.start(now);
		osc.stop(now + .035);
	}
	playWinChime() {
		if (this.isMuted) return;
		const ctx = this.getContext();
		if (!ctx) return;
		[
			523.25,
			659.25,
			783.99,
			1046.5
		].forEach((freq, i) => {
			const now = ctx.currentTime + i * .1;
			const osc = ctx.createOscillator();
			const gain = ctx.createGain();
			osc.type = "sine";
			osc.frequency.setValueAtTime(freq, now);
			gain.gain.setValueAtTime(.2, now);
			gain.gain.exponentialRampToValueAtTime(.001, now + .6);
			osc.connect(gain);
			gain.connect(ctx.destination);
			osc.start(now);
			osc.stop(now + .65);
		});
	}
	playOudSample() {
		if (this.isMuted) return;
		const ctx = this.getContext();
		if (!ctx) return;
		[
			293.66,
			311.13,
			349.23,
			392,
			440,
			392,
			349.23,
			293.66
		].forEach((freq, idx) => {
			const now = ctx.currentTime + idx * .22;
			const osc = ctx.createOscillator();
			const gain = ctx.createGain();
			osc.type = "triangle";
			osc.frequency.setValueAtTime(freq, now);
			gain.gain.setValueAtTime(.18, now);
			gain.gain.exponentialRampToValueAtTime(.001, now + .4);
			osc.connect(gain);
			gain.connect(ctx.destination);
			osc.start(now);
			osc.stop(now + .45);
		});
	}
	playLuckySplashJackpot() {
		if (this.isMuted) return;
		const ctx = this.getContext();
		if (!ctx) return;
		const now = ctx.currentTime;
		const splashDuration = .75;
		const bufferSize = Math.floor(ctx.sampleRate * splashDuration);
		const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
		const data = buffer.getChannelData(0);
		for (let i = 0; i < bufferSize; i++) {
			const t = i / bufferSize;
			const env = Math.sin(Math.min(1, t * 8) * Math.PI * .5) * Math.exp(-t * 3.8);
			data[i] = (Math.random() * 2 - 1) * env;
		}
		const noise = ctx.createBufferSource();
		noise.buffer = buffer;
		const splashFilter = ctx.createBiquadFilter();
		splashFilter.type = "bandpass";
		splashFilter.frequency.setValueAtTime(420, now);
		splashFilter.frequency.exponentialRampToValueAtTime(2800, now + .14);
		splashFilter.frequency.exponentialRampToValueAtTime(950, now + .65);
		splashFilter.Q.value = 1.6;
		const splashGain = ctx.createGain();
		splashGain.gain.setValueAtTime(.42, now);
		splashGain.gain.exponentialRampToValueAtTime(.01, now + splashDuration);
		noise.connect(splashFilter);
		splashFilter.connect(splashGain);
		splashGain.connect(ctx.destination);
		noise.start(now);
		const boomOsc = ctx.createOscillator();
		const boomGain = ctx.createGain();
		boomOsc.type = "sine";
		boomOsc.frequency.setValueAtTime(140, now);
		boomOsc.frequency.exponentialRampToValueAtTime(45, now + .35);
		boomGain.gain.setValueAtTime(.32, now);
		boomGain.gain.exponentialRampToValueAtTime(.001, now + .38);
		boomOsc.connect(boomGain);
		boomGain.connect(ctx.destination);
		boomOsc.start(now);
		boomOsc.stop(now + .4);
		[
			1046.5,
			1318.51,
			1567.98,
			2093,
			2637.02,
			3135.96,
			2093
		].forEach((freq, idx) => {
			const osc = ctx.createOscillator();
			const gain = ctx.createGain();
			const noteStart = now + .06 + idx * .055;
			osc.type = "triangle";
			osc.frequency.setValueAtTime(freq, noteStart);
			gain.gain.setValueAtTime(.16, noteStart);
			gain.gain.exponentialRampToValueAtTime(.001, noteStart + .48);
			osc.connect(gain);
			gain.connect(ctx.destination);
			osc.start(noteStart);
			osc.stop(noteStart + .52);
		});
	}
};
var sound = new SoundEngine();
// src/utils/apiOrigin.ts
var DEFAULT_PRODUCTION_SERVER_URL = "https://ais-pre-7cgo2aerub3igrwaspnucj-1016353730156.europe-west2.run.app";
var SERVER_ORIGIN_STORAGE_KEY = "fokashat_server_origin_v1";
function normalizeOrigin(raw) {
	if (!raw) return null;
	const trimmed = raw.trim().replace(/\/+$/, "");
	if (!trimmed) return null;
	try {
		const parsed = new URL(trimmed);
		if (parsed.protocol !== "https:" && parsed.protocol !== "http:") return null;
		return parsed.origin;
	} catch {
		return null;
	}
}
function isNativeAppContainer() {
	if (typeof window === "undefined") return false;
	if (window.Capacitor?.isNativePlatform?.()) return true;
	const proto = window.location.protocol;
	if (proto === "capacitor:" || proto === "ionic:" || proto === "file:") return true;
	if ((window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1") && !window.location.port) return true;
	return false;
}
function getConfiguredServerBaseUrl() {
	const envOrigin = normalizeOrigin(void 0);
	if (envOrigin) return envOrigin;
	if (typeof window !== "undefined") {
		try {
			const saved = normalizeOrigin(window.localStorage.getItem(SERVER_ORIGIN_STORAGE_KEY));
			if (saved) return saved;
		} catch {}
		if (!isNativeAppContainer() && window.location.origin.startsWith("http")) return window.location.origin;
	}
	return DEFAULT_PRODUCTION_SERVER_URL;
}
function resolveApiUrl(path) {
	if (/^https?:\/\//i.test(path)) return path;
	const cleanPath = path.startsWith("/") ? path : `/${path}`;
	if (typeof window === "undefined") return cleanPath;
	if (!isNativeAppContainer()) return cleanPath;
	return `${getConfiguredServerBaseUrl()}${cleanPath}`;
}
function resolveVoiceWsUrl() {
	if (typeof window === "undefined") return "ws://localhost:3000/ws/voice";
	if (!isNativeAppContainer()) return `${window.location.protocol === "https:" ? "wss:" : "ws:"}//${window.location.host}/ws/voice`;
	try {
		const parsed = new URL(getConfiguredServerBaseUrl());
		return `${parsed.protocol === "https:" ? "wss:" : "ws:"}//${parsed.host}/ws/voice`;
	} catch {
		return "wss://ais-pre-7cgo2aerub3igrwaspnucj-1016353730156.europe-west2.run.app/ws/voice";
	}
}
var firebaseConfig = {
	apiKey: "AIzaSyAAr9fCp9CsfGqTOpIMIx0EyVtechkLchQ",
	authDomain: "shosho-chat-3e571.firebaseapp.com",
	projectId: "shosho-chat-3e571",
	storageBucket: "shosho-chat-3e571.firebasestorage.app",
	messagingSenderId: "633233573986",
	appId: "1:633233573986:web:4bc3c29544f858b534a93b",
	firestoreDatabaseId: ""
};
var OperationType = /* @__PURE__ */ function(OperationType) {
	OperationType["CREATE"] = "create";
	OperationType["UPDATE"] = "update";
	OperationType["DELETE"] = "delete";
	OperationType["LIST"] = "list";
	OperationType["GET"] = "get";
	OperationType["WRITE"] = "write";
	return OperationType;
}({});
var appInstance = null;
var dbInstance = null;
var authInstance = null;
var googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });
var isFirebaseConfigured = Boolean(firebaseConfig.apiKey && firebaseConfig.projectId);
var currentStatus = {
	isConfigured: isFirebaseConfigured,
	isConnected: false,
	isTesting: false,
	projectId: firebaseConfig.projectId,
	databaseId: firebaseConfig.firestoreDatabaseId || "(default)",
	message: "جاري تهيئة الاتصال السحابي بـ shosho-chat-3e571..."
};
var listeners = /* @__PURE__ */ new Set();
function subscribeToFirebaseStatus(callback) {
	listeners.add(callback);
	callback({ ...currentStatus });
	return () => {
		listeners.delete(callback);
	};
}
function updateStatus(updates) {
	currentStatus = {
		...currentStatus,
		...updates
	};
	listeners.forEach((cb) => {
		try {
			cb({ ...currentStatus });
		} catch (e) {
			console.error("Error notifying status listener:", e);
		}
	});
}
function initFirebase() {
	if (!isFirebaseConfigured) return {
		app: null,
		db: null,
		auth: null
	};
	if (!appInstance) try {
		appInstance = !getApps().length ? initializeApp(firebaseConfig) : getApp();
		dbInstance = firebaseConfig.firestoreDatabaseId ? getFirestore(appInstance, firebaseConfig.firestoreDatabaseId) : getFirestore(appInstance);
		authInstance = getAuth(appInstance);
	} catch (err) {
		console.warn("[Firebase] Safe init fallback (missing or invalid config):", err);
		appInstance = null;
		dbInstance = null;
		authInstance = null;
		updateStatus({
			isConfigured: false,
			isConnected: false,
			isTesting: false,
			error: err instanceof Error ? err.message : "تعذر تهيئة Firebase",
			message: "يرجى التحقق من متغيرات البيئة VITE_FIREBASE_* في إعدادات الاستضافة."
		});
	}
	return {
		app: appInstance,
		db: dbInstance,
		auth: authInstance
	};
}
var initialized = initFirebase();
initialized.app;
var db = initialized.db;
var auth = initialized.auth;
function getFirebaseDb() {
	if (!dbInstance && isFirebaseConfigured) initFirebase();
	return dbInstance;
}
function getFirebaseAuth() {
	if (!authInstance && isFirebaseConfigured) initFirebase();
	return authInstance;
}
function handleFirestoreError(error, operationType, path) {
	const currentAuth = getFirebaseAuth();
	const errInfo = {
		error: error instanceof Error ? error.message : String(error),
		authInfo: {
			userId: currentAuth?.currentUser?.uid,
			email: currentAuth?.currentUser?.email,
			emailVerified: currentAuth?.currentUser?.emailVerified,
			isAnonymous: currentAuth?.currentUser?.isAnonymous,
			tenantId: currentAuth?.currentUser?.tenantId,
			providerInfo: currentAuth?.currentUser?.providerData?.map((provider) => ({
				providerId: provider.providerId,
				email: provider.email
			})) || []
		},
		operationType,
		path
	};
	console.error("Firestore Error: ", JSON.stringify(errInfo));
	throw new Error(JSON.stringify(errInfo));
}
function translateFirebaseAuthError(error) {
	const code = error?.code || "";
	const msg = error instanceof Error ? error.message : String(error || "");
	switch (code) {
		case "auth/email-already-in-use": return "هذا البريد الإلكتروني مستخدم بالفعل. يمكنك تسجيل الدخول مباشرة.";
		case "auth/invalid-email": return "صيغة البريد الإلكتروني غير صحيحة.";
		case "auth/weak-password": return "كلمة المرور ضعيفة، يجب أن تحتوي على 6 أحرف على الأقل.";
		case "auth/invalid-credential":
		case "auth/wrong-password":
		case "auth/user-not-found": return "البريد الإلكتروني أو كلمة المرور غير صحيحة.";
		case "auth/operation-not-allowed": return "تسجيل الدخول بالبريد وكلمة المرور غير مفعّل بعد في Firebase Console (Authentication → Sign-in method → Email/Password).";
		case "auth/popup-closed-by-user":
		case "auth/cancelled-popup-request": return "تم إغلاق نافذة Google قبل إتمام تسجيل الدخول.";
		case "auth/popup-blocked": return "قام المتصفح بحظر نافذة تسجيل الدخول المنبثقة. يرجى السماح بالنوافذ المنبثقة والمحاولة مجدداً.";
		case "auth/too-many-requests": return "تم تنفيذ محاولات متكررة، يرجى الانتظار قليلاً ثم المحاولة مرة أخرى.";
		case "auth/network-request-failed": return "تعذر الاتصال بالشبكة، تحقق من اتصال الإنترنت وحاول مرة أخرى.";
		case "auth/unauthorized-domain": return `النطاق الحالي (${(typeof window !== "undefined" ? window.location.hostname : "") || "هذا الرابط"}) غير مضاف في النطاقات المصرح بها في Firebase Console (Authentication → Settings → Authorized domains). أضف النطاق لتفعيل الدخول عبر Google أو استخدم الدخول بالبريد وكلمة المرور.`;
		default: return msg || "تعذر إتمام عملية المصادقة، يرجى المحاولة مرة أخرى.";
	}
}
function requireFirebaseAuth() {
	const currentAuth = getFirebaseAuth();
	if (!currentAuth) throw new Error("إعدادات Firebase غير مضافة في الاستضافة بعد (VITE_FIREBASE_API_KEY / VITE_FIREBASE_PROJECT_ID). يمكنك الدخول كزائر أو إضافة متغيرات Firebase في إعدادات الاستضافة.");
	return currentAuth;
}
async function signInWithGoogle() {
	return (await signInWithPopup(requireFirebaseAuth(), googleProvider)).user;
}
async function registerWithEmailPassword(email, password, displayName) {
	const cred = await createUserWithEmailAndPassword(requireFirebaseAuth(), email.trim(), password);
	if (displayName.trim()) await updateProfile(cred.user, { displayName: displayName.trim() }).catch(() => {});
	return cred.user;
}
async function loginWithEmailPassword(email, password) {
	return (await signInWithEmailAndPassword(requireFirebaseAuth(), email.trim(), password)).user;
}
async function signOutFirebase() {
	const currentAuth = getFirebaseAuth();
	if (!currentAuth) return;
	await signOut(currentAuth);
}
function subscribeToAuthState(callback) {
	const currentAuth = getFirebaseAuth();
	if (!currentAuth) {
		queueMicrotask(() => callback(null));
		return () => {};
	}
	try {
		return onAuthStateChanged(currentAuth, callback);
	} catch (err) {
		console.warn("[Firebase] onAuthStateChanged fallback:", err);
		queueMicrotask(() => callback(null));
		return () => {};
	}
}
async function testConnection() {
	const currentDb = getFirebaseDb();
	if (!isFirebaseConfigured || !currentDb) {
		updateStatus({
			isConfigured: false,
			isConnected: false,
			isTesting: false,
			projectId: firebaseConfig.projectId || "غير مضبوط",
			databaseId: firebaseConfig.firestoreDatabaseId || "(default)",
			lastCheckedAt: (/* @__PURE__ */ new Date()).toISOString(),
			message: "أضف متغيرات VITE_FIREBASE_* في الاستضافة لتفعيل الربط السحابي."
		});
		return;
	}
	const start = performance.now();
	try {
		await getDocFromServer(doc(currentDb, "test", "connection"));
		const latency = Math.round(performance.now() - start);
		updateStatus({
			isConfigured: true,
			isConnected: true,
			isTesting: false,
			projectId: firebaseConfig.projectId,
			databaseId: firebaseConfig.firestoreDatabaseId || "(default)",
			latencyMs: latency,
			lastCheckedAt: (/* @__PURE__ */ new Date()).toISOString(),
			message: `متصل بقاعدة بيانات ${firebaseConfig.projectId} (${latency}ms)`
		});
	} catch (error) {
		const latency = Math.round(performance.now() - start);
		if (error instanceof Error && error.message.includes("the client is offline")) {
			console.error("Please check your Firebase configuration.");
			updateStatus({
				isConfigured: true,
				isConnected: false,
				isTesting: false,
				projectId: firebaseConfig.projectId,
				databaseId: firebaseConfig.firestoreDatabaseId || "(default)",
				latencyMs: latency,
				lastCheckedAt: (/* @__PURE__ */ new Date()).toISOString(),
				error: "the client is offline",
				message: "تعذر الاتصال بخادم Firestore (client is offline)."
			});
		} else updateStatus({
			isConfigured: true,
			isConnected: true,
			isTesting: false,
			projectId: firebaseConfig.projectId,
			databaseId: firebaseConfig.firestoreDatabaseId || "(default)",
			latencyMs: latency,
			lastCheckedAt: (/* @__PURE__ */ new Date()).toISOString(),
			message: `تم التحقق من الاتصال بخادم Firebase (${firebaseConfig.projectId})`
		});
	}
}
if (typeof window !== "undefined") testConnection();
async function testFirebaseConnection(force = false) {
	if (currentStatus.isTesting && !force) return currentStatus;
	if (!isFirebaseConfigured) {
		const result = {
			isConfigured: false,
			isConnected: false,
			isTesting: false,
			projectId: firebaseConfig.projectId || "غير مضبوط",
			databaseId: firebaseConfig.firestoreDatabaseId || "(default)",
			lastCheckedAt: (/* @__PURE__ */ new Date()).toISOString(),
			error: "متغيرات Firebase غير مضافة في الاستضافة",
			message: "أضف متغيرات VITE_FIREBASE_* في إعدادات البيئة بالاستضافة ثم أعد النشر."
		};
		updateStatus(result);
		return result;
	}
	updateStatus({ isTesting: true });
	const start = performance.now();
	try {
		initFirebase();
		const currentDb = getFirebaseDb();
		if (!currentDb) throw new Error("تعذر تهيئة Firestore");
		try {
			await getDocFromServer(doc(currentDb, "test", "connection"));
			const latency = Math.round(performance.now() - start);
			const result = {
				isConfigured: true,
				isConnected: true,
				isTesting: false,
				projectId: firebaseConfig.projectId,
				databaseId: firebaseConfig.firestoreDatabaseId || "(default)",
				latencyMs: latency,
				lastCheckedAt: (/* @__PURE__ */ new Date()).toISOString(),
				message: `تم التحقق بنجاح: قاعدة بيانات Firebase (${firebaseConfig.projectId}) متصلة وشغالة (${latency}ms)`
			};
			updateStatus(result);
			return result;
		} catch (fsErr) {
			if (fsErr?.code === "permission-denied" || fsErr?.message?.includes("insufficient permissions") || fsErr?.code === "not-found") {
				const fsLatency = Math.round(performance.now() - start);
				const result = {
					isConfigured: true,
					isConnected: true,
					isTesting: false,
					projectId: firebaseConfig.projectId,
					databaseId: firebaseConfig.firestoreDatabaseId || "(default)",
					latencyMs: fsLatency,
					lastCheckedAt: (/* @__PURE__ */ new Date()).toISOString(),
					message: `تم التحقق بنجاح: قاعدة بيانات Firebase (${firebaseConfig.projectId}) متصلة بنجاح.`
				};
				updateStatus(result);
				return result;
			}
		}
		try {
			const restRes = await fetch(`https://firestore.googleapis.com/v1/projects/${encodeURIComponent(firebaseConfig.projectId)}/databases/(default)/documents/auravoice_rooms?pageSize=1`);
			if (restRes.ok || restRes.status === 404 || restRes.status === 403) {
				const restLatency = Math.round(performance.now() - start);
				const result = {
					isConfigured: true,
					isConnected: true,
					isTesting: false,
					projectId: firebaseConfig.projectId,
					databaseId: firebaseConfig.firestoreDatabaseId || "(default)",
					latencyMs: restLatency,
					lastCheckedAt: (/* @__PURE__ */ new Date()).toISOString(),
					message: `تم التحقق بنجاح: قاعدة بيانات Firebase (${firebaseConfig.projectId}) متصلة وشغالة (${restLatency}ms)`
				};
				updateStatus(result);
				return result;
			}
		} catch {}
		const latency = Math.round(performance.now() - start);
		const result = {
			isConfigured: true,
			isConnected: false,
			isTesting: false,
			projectId: firebaseConfig.projectId,
			databaseId: firebaseConfig.firestoreDatabaseId || "(default)",
			latencyMs: latency,
			lastCheckedAt: (/* @__PURE__ */ new Date()).toISOString(),
			error: "تعذر الوصول إلى خوادم Firebase",
			message: "تنبيه: يرجى التحقق من اتصال الإنترنت أو إعدادات المشروع في Firebase Console."
		};
		updateStatus(result);
		return result;
	} catch (err) {
		const latency = Math.round(performance.now() - start);
		const result = {
			isConfigured: true,
			isConnected: false,
			isTesting: false,
			projectId: firebaseConfig.projectId,
			databaseId: firebaseConfig.firestoreDatabaseId || "(default)",
			latencyMs: latency,
			lastCheckedAt: (/* @__PURE__ */ new Date()).toISOString(),
			error: err?.message || "تعذر الاتصال بـ Firebase",
			message: `تنبيه الاتصال: ${err?.message || "تحقق من اتصال الإنترنت"}`
		};
		updateStatus(result);
		return result;
	}
}
function stripUndefinedForFirestore(input) {
	if (input === null || input === void 0 || typeof input !== "object") return input;
	if (Array.isArray(input)) return input.filter((item) => item !== void 0).map((item) => stripUndefinedForFirestore(item));
	const clean = {};
	for (const [k, v] of Object.entries(input)) if (v !== void 0) clean[k] = stripUndefinedForFirestore(v);
	return clean;
}
// src/utils/auravoiceFirestore.ts
var COLLECTIONS = {
	users: "auravoice_users",
	rooms: "auravoice_rooms",
	roomBackgrounds: "auravoice_room_backgrounds",
	gifts: "auravoice_gifts",
	storeItems: "auravoice_store_items",
	agencies: "auravoice_agencies",
	agents: "auravoice_agents",
	staff: "auravoice_staff",
	transactions: "auravoice_transactions",
	config: "auravoice_config"
};
function isCloudWriteReady() {
	return Boolean(db && auth?.currentUser);
}
async function fetchAuraUserById(userId) {
	if (!db || !auth?.currentUser || !userId) return null;
	const path = `${COLLECTIONS.users}/${userId}`;
	try {
		const snap = await getDoc(doc(db, COLLECTIONS.users, userId));
		if (snap.exists()) {
			const data = snap.data();
			if (data?.id && data?.userCode) return data;
		}
		return null;
	} catch (error) {
		console.warn(`fetchAuraUserById notice (${path}):`, error);
		return null;
	}
}
/**
* Seeds initial AuraVoice VIP collections into Firestore if they are currently empty.
* Only executes when a verified user is authenticated.
*/
async function bootstrapAuraVoiceFirestoreIfEmpty(seed) {
	if (!db || !auth?.currentUser) return false;
	const firestore = db;
	try {
		const roomsSnap = await getDocs(query(collection(firestore, COLLECTIONS.rooms), limit(1)));
		const usersSnap = await getDocs(query(collection(firestore, COLLECTIONS.users), limit(1)));
		if (!roomsSnap.empty && !usersSnap.empty) return true;
		const memberBatch = writeBatch(firestore);
		let hasMemberOps = false;
		const nowIso = (/* @__PURE__ */ new Date()).toISOString();
		if (usersSnap.empty) seed.users.forEach((u) => {
			memberBatch.set(doc(firestore, COLLECTIONS.users, u.id), stripUndefinedForFirestore({
				...u,
				updatedAt: nowIso
			}), { merge: true });
			hasMemberOps = true;
		});
		if (roomsSnap.empty) seed.rooms.forEach((r) => {
			memberBatch.set(doc(firestore, COLLECTIONS.rooms, r.id), stripUndefinedForFirestore({
				...r,
				updatedAt: nowIso
			}), { merge: true });
			hasMemberOps = true;
		});
		if (hasMemberOps) await memberBatch.commit();
		try {
			const adminBatch = writeBatch(firestore);
			let hasAdminOps = false;
			if ((await getDocs(query(collection(firestore, COLLECTIONS.agencies), limit(1)))).empty) seed.agencies.forEach((ag) => {
				adminBatch.set(doc(firestore, COLLECTIONS.agencies, ag.id), stripUndefinedForFirestore({
					...ag,
					updatedAt: nowIso
				}), { merge: true });
				hasAdminOps = true;
			});
			if ((await getDocs(query(collection(firestore, COLLECTIONS.agents), limit(1)))).empty) seed.agents.forEach((agent) => {
				adminBatch.set(doc(firestore, COLLECTIONS.agents, agent.id), stripUndefinedForFirestore({
					...agent,
					updatedAt: nowIso
				}), { merge: true });
				hasAdminOps = true;
			});
			if ((await getDocs(query(collection(firestore, COLLECTIONS.staff), limit(1)))).empty) seed.staff.forEach((member) => {
				adminBatch.set(doc(firestore, COLLECTIONS.staff, member.id), stripUndefinedForFirestore({
					...member,
					updatedAt: nowIso
				}), { merge: true });
				hasAdminOps = true;
			});
			if ((await getDocs(query(collection(firestore, COLLECTIONS.transactions), limit(1)))).empty) seed.transactions.slice(0, 50).forEach((tx) => {
				adminBatch.set(doc(firestore, COLLECTIONS.transactions, tx.id), stripUndefinedForFirestore({
					...tx,
					updatedAt: nowIso
				}), { merge: true });
				hasAdminOps = true;
			});
			adminBatch.set(doc(firestore, COLLECTIONS.config, "lucky"), stripUndefinedForFirestore({
				...seed.luckyConfig,
				updatedAt: nowIso
			}), { merge: true });
			hasAdminOps = true;
			if (seed.agoraConfig?.appId) adminBatch.set(doc(firestore, COLLECTIONS.config, "agora"), stripUndefinedForFirestore({
				...seed.agoraConfig,
				updatedAt: nowIso
			}), { merge: true });
			if (hasAdminOps) await adminBatch.commit();
		} catch (adminSeedErr) {
			console.warn("AuraVoice admin catalog bootstrap notice:", adminSeedErr);
		}
		return true;
	} catch (error) {
		console.warn("AuraVoice Firestore bootstrap notice:", error);
		return false;
	}
}
/**
* Full manual/automatic push of all AuraVoice VIP state into Firestore.
*/
async function syncAllAuraVoiceToFirestore(data) {
	if (!db || !auth?.currentUser) return {
		success: false,
		count: 0,
		message: "يرجى تسجيل الدخول بحساب Google أولاً لتفعيل المزامنة السحابية."
	};
	const firestore = db;
	try {
		const batch = writeBatch(firestore);
		const nowIso = (/* @__PURE__ */ new Date()).toISOString();
		let count = 0;
		data.users.forEach((u) => {
			batch.set(doc(firestore, COLLECTIONS.users, u.id), stripUndefinedForFirestore({
				...u,
				updatedAt: nowIso
			}), { merge: true });
			count++;
		});
		data.rooms.forEach((r) => {
			batch.set(doc(firestore, COLLECTIONS.rooms, r.id), stripUndefinedForFirestore({
				...r,
				updatedAt: nowIso
			}), { merge: true });
			count++;
		});
		(data.roomBackgrounds || []).forEach((bg) => {
			batch.set(doc(firestore, COLLECTIONS.roomBackgrounds, bg.id), stripUndefinedForFirestore({
				...bg,
				updatedAt: nowIso
			}), { merge: true });
			count++;
		});
		data.gifts.filter((g) => !g.isStarterDefault && g.id !== "gift_starter_default").forEach((g) => {
			batch.set(doc(firestore, COLLECTIONS.gifts, g.id), stripUndefinedForFirestore({
				...g,
				updatedAt: nowIso
			}), { merge: true });
			count++;
		});
		data.storeItems.forEach((item) => {
			batch.set(doc(firestore, COLLECTIONS.storeItems, item.id), stripUndefinedForFirestore({
				...item,
				updatedAt: nowIso
			}), { merge: true });
			count++;
		});
		data.agencies.forEach((ag) => {
			batch.set(doc(firestore, COLLECTIONS.agencies, ag.id), stripUndefinedForFirestore({
				...ag,
				updatedAt: nowIso
			}), { merge: true });
			count++;
		});
		data.agents.forEach((agent) => {
			batch.set(doc(firestore, COLLECTIONS.agents, agent.id), stripUndefinedForFirestore({
				...agent,
				updatedAt: nowIso
			}), { merge: true });
			count++;
		});
		data.staff.forEach((member) => {
			batch.set(doc(firestore, COLLECTIONS.staff, member.id), stripUndefinedForFirestore({
				...member,
				updatedAt: nowIso
			}), { merge: true });
			count++;
		});
		data.transactions.slice(0, 100).forEach((tx) => {
			batch.set(doc(firestore, COLLECTIONS.transactions, tx.id), stripUndefinedForFirestore({
				...tx,
				updatedAt: nowIso
			}), { merge: true });
			count++;
		});
		batch.set(doc(firestore, COLLECTIONS.config, "lucky"), stripUndefinedForFirestore({
			...data.luckyConfig,
			updatedAt: nowIso
		}), { merge: true });
		batch.set(doc(firestore, COLLECTIONS.config, "bag_gifts"), stripUndefinedForFirestore({
			items: data.bagGifts,
			updatedAt: nowIso
		}), { merge: true });
		count += 2;
		if (data.agoraConfig?.appId) {
			batch.set(doc(firestore, COLLECTIONS.config, "agora"), stripUndefinedForFirestore({
				...data.agoraConfig,
				updatedAt: nowIso
			}), { merge: true });
			count += 1;
		}
		await batch.commit();
		return {
			success: true,
			count,
			message: `تمت مزامنة ${count} سجل بنجاح مع قاعدة بيانات ${firebaseConfig.projectId}.`
		};
	} catch (error) {
		handleFirestoreError(error, OperationType.WRITE, COLLECTIONS.rooms);
	}
}
/**
* Public non-PII collection listeners (rooms, gifts, store, agencies, lucky config).
*/
function subscribeToPublicAuraCollections(handlers) {
	if (!db) return () => {};
	const unsubRooms = onSnapshot(collection(db, COLLECTIONS.rooms), (snap) => {
		const list = [];
		snap.forEach((d) => {
			const data = d.data();
			if (data?.id && data?.title) list.push(data);
		});
		if (list.length > 0) handlers.onRooms(list);
	}, (error) => console.warn("subscribeRooms notice:", error));
	const unsubRoomBgs = onSnapshot(collection(db, COLLECTIONS.roomBackgrounds), (snap) => {
		const list = [];
		snap.forEach((d) => {
			const data = d.data();
			if (data?.id && data?.imageUrl) list.push(data);
		});
		handlers.onRoomBackgrounds?.(list);
	}, (error) => console.warn("subscribeRoomBackgrounds notice:", error));
	const unsubGifts = onSnapshot(collection(db, COLLECTIONS.gifts), (snap) => {
		const list = [];
		snap.forEach((d) => {
			const data = d.data();
			if (data?.id && data?.nameAr && !data.isStarterDefault && data.id !== "gift_starter_default") list.push(data);
		});
		handlers.onGifts(list);
	}, (error) => console.warn("subscribeGifts notice:", error));
	const unsubStore = onSnapshot(collection(db, COLLECTIONS.storeItems), (snap) => {
		const list = [];
		snap.forEach((d) => {
			const data = d.data();
			if (data?.id && data?.nameAr) list.push(data);
		});
		handlers.onStoreItems(list);
	}, (error) => console.warn("subscribeStoreItems notice:", error));
	const unsubAgencies = onSnapshot(collection(db, COLLECTIONS.agencies), (snap) => {
		const list = [];
		snap.forEach((d) => {
			const data = d.data();
			if (data?.id && data?.name) list.push(data);
		});
		if (list.length > 0) handlers.onAgencies(list);
	}, (error) => console.warn("subscribeAgencies notice:", error));
	const unsubLucky = onSnapshot(doc(db, COLLECTIONS.config, "lucky"), (snap) => {
		if (snap.exists()) {
			const data = snap.data();
			if (typeof data.winRatePercent === "number") handlers.onLuckyConfig(data);
		}
	}, (error) => console.warn("subscribeLucky notice:", error));
	const unsubAgora = onSnapshot(doc(db, COLLECTIONS.config, "agora"), (snap) => {
		if (snap.exists()) {
			const data = snap.data();
			if (data?.appId && typeof data.appId === "string") handlers.onAgoraConfig?.(data);
		}
	}, (error) => console.warn("subscribeAgora notice:", error));
	const unsubJackpot = onSnapshot(doc(db, COLLECTIONS.config, "jackpot"), (snap) => {
		if (snap.exists()) {
			const data = snap.data();
			if (data?.id && typeof data.createdAt === "number" && Date.now() - data.createdAt < 1e4) handlers.onJackpotBanner?.(data);
		}
	}, (error) => console.warn("subscribeJackpot notice:", error));
	const unsubDashboardSync = onSnapshot(doc(db, COLLECTIONS.config, "dashboard_sync"), (snap) => {
		if (snap.exists()) {
			const data = snap.data();
			if (data?.commandId && data?.type) handlers.onDashboardSync?.(data);
		}
	}, (error) => {
		console.warn("subscribeDashboardSync notice:", error);
	});
	return () => {
		unsubRooms();
		unsubRoomBgs();
		unsubGifts();
		unsubStore();
		unsubAgencies();
		unsubLucky();
		unsubAgora();
		unsubJackpot();
		unsubDashboardSync();
	};
}
/**
* Authenticated collection listeners (users, agents, staff, transactions, bag_gifts).
* Only attach when auth.currentUser is present.
*/
function subscribeToAuthAuraCollections(handlers) {
	if (!db || !auth?.currentUser) return () => {};
	const unsubUsers = onSnapshot(collection(db, COLLECTIONS.users), (snap) => {
		const list = [];
		snap.forEach((d) => {
			const data = d.data();
			if (data?.id && data?.userCode) list.push(data);
		});
		if (list.length > 0) handlers.onUsers(list);
	}, (error) => handleFirestoreError(error, OperationType.LIST, COLLECTIONS.users));
	const unsubAgents = onSnapshot(collection(db, COLLECTIONS.agents), (snap) => {
		const list = [];
		snap.forEach((d) => {
			const data = d.data();
			if (data?.id && data?.agentCode) list.push(data);
		});
		if (list.length > 0) handlers.onAgents(list);
	}, (error) => handleFirestoreError(error, OperationType.LIST, COLLECTIONS.agents));
	const unsubStaff = onSnapshot(collection(db, COLLECTIONS.staff), (snap) => {
		const list = [];
		snap.forEach((d) => {
			const data = d.data();
			if (data?.id && data?.name) list.push(data);
		});
		if (list.length > 0) handlers.onStaff(list);
	}, (error) => handleFirestoreError(error, OperationType.LIST, COLLECTIONS.staff));
	const unsubTx = onSnapshot(query(collection(db, COLLECTIONS.transactions), orderBy("timestamp", "desc"), limit(100)), (snap) => {
		const list = [];
		snap.forEach((d) => {
			const data = d.data();
			if (data?.id && data?.type) list.push(data);
		});
		if (list.length > 0) handlers.onTransactions(list);
	}, (error) => handleFirestoreError(error, OperationType.LIST, COLLECTIONS.transactions));
	const unsubBag = onSnapshot(doc(db, COLLECTIONS.config, "bag_gifts"), (snap) => {
		if (snap.exists()) {
			const data = snap.data();
			if (data?.items && typeof data.items === "object") handlers.onBagGifts(data.items);
		}
	}, (error) => handleFirestoreError(error, OperationType.GET, `${COLLECTIONS.config}/bag_gifts`));
	return () => {
		unsubUsers();
		unsubAgents();
		unsubStaff();
		unsubTx();
		unsubBag();
	};
}
function subscribeToRoomMessages(roomId, onMessages) {
	if (!db || !auth?.currentUser || !roomId) return () => {};
	const path = `${COLLECTIONS.rooms}/${roomId}/messages`;
	return onSnapshot(query(collection(db, COLLECTIONS.rooms, roomId, "messages"), orderBy("id", "desc"), limit(80)), (snap) => {
		const list = [];
		snap.forEach((d) => {
			const data = d.data();
			if (data?.id && data?.roomId && !data.isRtcSignal) list.push(data);
		});
		list.reverse();
		if (list.length > 0) onMessages(list);
	}, (error) => {
		console.warn(`subscribeToRoomMessages notice (${path}):`, error);
	});
}
async function publishFirestoreRtcSignal(payload) {
	if (!db || !auth?.currentUser || !payload.roomId) return;
	const now = Date.now();
	const safeId = `0rtc_${now}_${Math.random().toString(36).slice(2, 8)}`.replace(/[^a-zA-Z0-9_-]/g, "_");
	try {
		await setDoc(doc(db, COLLECTIONS.rooms, payload.roomId, "messages", safeId), stripUndefinedForFirestore({
			id: safeId,
			roomId: payload.roomId,
			senderId: payload.fromUserId || auth.currentUser.uid,
			senderName: (payload.displayName || "مستخدم").slice(0, 80),
			senderAvatar: "",
			vipLevel: 0,
			level: 0,
			isSystem: true,
			isRtcSignal: true,
			timestamp: new Date(now).toISOString().slice(11, 19),
			rtcCreatedAt: now,
			rtcSignal: {
				...payload,
				id: safeId,
				rtcCreatedAt: now
			}
		}));
	} catch (err) {
		console.warn("publishFirestoreRtcSignal notice:", err);
	}
}
function subscribeToFirestoreRtcSignals(roomId, sinceMs, onSignal) {
	if (!db || !auth?.currentUser || !roomId) return () => {};
	const seen = /* @__PURE__ */ new Set();
	return onSnapshot(query(collection(db, COLLECTIONS.rooms, roomId, "messages"), orderBy("rtcCreatedAt", "desc"), limit(60)), (snap) => {
		const items = [];
		snap.forEach((d) => {
			const data = d.data();
			const sig = data?.rtcSignal;
			if (!sig || !sig.id || seen.has(sig.id)) return;
			if ((sig.rtcCreatedAt || data.rtcCreatedAt || 0) < sinceMs) return;
			items.push(sig);
		});
		items.sort((a, b) => a.rtcCreatedAt - b.rtcCreatedAt);
		items.forEach((sig) => {
			seen.add(sig.id);
			onSignal(sig);
		});
	}, (err) => {
		console.warn("subscribeToFirestoreRtcSignals notice:", err);
	});
}
async function publishRoomLiveEventToFirestore(event) {
	if (!db || !auth?.currentUser || !event.roomId) return;
	const safeId = `msg_${event.createdAt}_${event.id.replace(/[^a-zA-Z0-9_-]/g, "_").slice(0, 48)}`;
	const msgDoc = {
		id: safeId,
		roomId: event.roomId,
		senderId: event.senderId || auth.currentUser.uid,
		senderName: (event.senderName || "مستخدم").slice(0, 80),
		senderAvatar: event.senderAvatar || "",
		vipLevel: event.senderVipLevel || 0,
		level: event.senderLevel || 1,
		isSystem: event.kind !== "gift_throw" && event.kind !== "chat_message",
		text: event.kind === "chat_message" ? event.text : void 0,
		giftData: event.kind === "gift_throw" && event.gift ? {
			giftId: event.gift.id,
			giftName: event.gift.nameAr,
			giftIcon: event.gift.icon,
			giftCount: event.count || 1,
			targetUserName: event.targetNames || "الغرفة",
			totalCoins: (event.gift.coinPrice || 0) * (event.count || 1) * Math.max(1, event.targetSeats?.length || 1)
		} : void 0,
		liveEvent: event,
		timestamp: new Date(event.createdAt).toLocaleTimeString("ar-EG", {
			hour: "2-digit",
			minute: "2-digit"
		})
	};
	try {
		await setDoc(doc(db, COLLECTIONS.rooms, event.roomId, "messages", safeId), stripUndefinedForFirestore(msgDoc), { merge: true });
	} catch (error) {
		console.warn("publishRoomLiveEventToFirestore notice:", error);
	}
}
async function persistAuraUser(user) {
	if (!db || !auth?.currentUser) return;
	const path = `${COLLECTIONS.users}/${user.id}`;
	try {
		await setDoc(doc(db, COLLECTIONS.users, user.id), stripUndefinedForFirestore({
			...user,
			updatedAt: (/* @__PURE__ */ new Date()).toISOString()
		}), { merge: true });
	} catch (error) {
		handleFirestoreError(error, OperationType.WRITE, path);
	}
}
async function persistAuraRoom(room) {
	if (!db || !auth?.currentUser) return;
	const path = `${COLLECTIONS.rooms}/${room.id}`;
	try {
		await setDoc(doc(db, COLLECTIONS.rooms, room.id), stripUndefinedForFirestore({
			...room,
			updatedAt: (/* @__PURE__ */ new Date()).toISOString()
		}), { merge: true });
	} catch (error) {
		handleFirestoreError(error, OperationType.WRITE, path);
	}
}
async function removeAuraRoom(roomId) {
	if (!db || !auth?.currentUser) return;
	const path = `${COLLECTIONS.rooms}/${roomId}`;
	try {
		await deleteDoc(doc(db, COLLECTIONS.rooms, roomId));
	} catch (error) {
		handleFirestoreError(error, OperationType.DELETE, path);
	}
}
async function persistAuraRoomBackground(bg) {
	if (!db || !auth?.currentUser) return;
	const path = `${COLLECTIONS.roomBackgrounds}/${bg.id}`;
	try {
		await setDoc(doc(db, COLLECTIONS.roomBackgrounds, bg.id), stripUndefinedForFirestore({
			...bg,
			updatedAt: (/* @__PURE__ */ new Date()).toISOString()
		}));
	} catch (error) {
		handleFirestoreError(error, OperationType.WRITE, path);
	}
}
async function removeAuraRoomBackground(bgId) {
	if (!db || !auth?.currentUser) return;
	const path = `${COLLECTIONS.roomBackgrounds}/${bgId}`;
	try {
		await deleteDoc(doc(db, COLLECTIONS.roomBackgrounds, bgId));
	} catch (error) {
		handleFirestoreError(error, OperationType.DELETE, path);
	}
}
async function persistRoomMessage(msg) {
	if (!db || !auth?.currentUser) return;
	const safeId = msg.id.replace(/[^a-zA-Z0-9_-]/g, "_");
	const path = `${COLLECTIONS.rooms}/${msg.roomId}/messages/${safeId}`;
	try {
		await setDoc(doc(db, COLLECTIONS.rooms, msg.roomId, "messages", safeId), stripUndefinedForFirestore({
			...msg,
			id: safeId
		}), { merge: true });
	} catch (error) {
		handleFirestoreError(error, OperationType.WRITE, path);
	}
}
async function persistAuraGift(gift) {
	if (!db || !auth?.currentUser) return;
	const path = `${COLLECTIONS.gifts}/${gift.id}`;
	try {
		await setDoc(doc(db, COLLECTIONS.gifts, gift.id), stripUndefinedForFirestore({
			...gift,
			updatedAt: (/* @__PURE__ */ new Date()).toISOString()
		}));
	} catch (error) {
		handleFirestoreError(error, OperationType.WRITE, path);
	}
}
async function removeAuraGift(giftId) {
	if (!db || !auth?.currentUser) return;
	const path = `${COLLECTIONS.gifts}/${giftId}`;
	try {
		await deleteDoc(doc(db, COLLECTIONS.gifts, giftId));
	} catch (error) {
		handleFirestoreError(error, OperationType.DELETE, path);
	}
}
async function persistAuraStoreItem(item) {
	if (!db || !auth?.currentUser) return;
	const path = `${COLLECTIONS.storeItems}/${item.id}`;
	try {
		await setDoc(doc(db, COLLECTIONS.storeItems, item.id), stripUndefinedForFirestore({
			...item,
			updatedAt: (/* @__PURE__ */ new Date()).toISOString()
		}));
	} catch (error) {
		handleFirestoreError(error, OperationType.WRITE, path);
	}
}
async function removeAuraStoreItem(itemId) {
	if (!db || !auth?.currentUser) return;
	const path = `${COLLECTIONS.storeItems}/${itemId}`;
	try {
		await deleteDoc(doc(db, COLLECTIONS.storeItems, itemId));
	} catch (error) {
		handleFirestoreError(error, OperationType.DELETE, path);
	}
}
async function persistAuraAgent(agent) {
	if (!db || !auth?.currentUser) return;
	const path = `${COLLECTIONS.agents}/${agent.id}`;
	try {
		await setDoc(doc(db, COLLECTIONS.agents, agent.id), stripUndefinedForFirestore({
			...agent,
			updatedAt: (/* @__PURE__ */ new Date()).toISOString()
		}), { merge: true });
	} catch (error) {
		handleFirestoreError(error, OperationType.WRITE, path);
	}
}
async function persistAuraAgency(agency) {
	if (!db || !auth?.currentUser) return;
	const path = `${COLLECTIONS.agencies}/${agency.id}`;
	try {
		await setDoc(doc(db, COLLECTIONS.agencies, agency.id), stripUndefinedForFirestore({
			...agency,
			updatedAt: (/* @__PURE__ */ new Date()).toISOString()
		}), { merge: true });
	} catch (error) {
		handleFirestoreError(error, OperationType.WRITE, path);
	}
}
async function persistAuraTransaction(tx) {
	if (!db || !auth?.currentUser) return;
	const safeId = tx.id.replace(/[^a-zA-Z0-9_-]/g, "_");
	const path = `${COLLECTIONS.transactions}/${safeId}`;
	try {
		await setDoc(doc(db, COLLECTIONS.transactions, safeId), stripUndefinedForFirestore({
			...tx,
			id: safeId,
			updatedAt: (/* @__PURE__ */ new Date()).toISOString()
		}), { merge: true });
	} catch (error) {
		handleFirestoreError(error, OperationType.WRITE, path);
	}
}
async function persistLuckyConfig(cfg) {
	if (!db || !auth?.currentUser) return;
	const path = `${COLLECTIONS.config}/lucky`;
	try {
		await setDoc(doc(db, COLLECTIONS.config, "lucky"), stripUndefinedForFirestore({
			...cfg,
			updatedAt: (/* @__PURE__ */ new Date()).toISOString()
		}), { merge: true });
	} catch (error) {
		handleFirestoreError(error, OperationType.WRITE, path);
	}
}
async function persistBagGifts(items) {
	if (!db || !auth?.currentUser) return;
	const path = `${COLLECTIONS.config}/bag_gifts`;
	try {
		await setDoc(doc(db, COLLECTIONS.config, "bag_gifts"), stripUndefinedForFirestore({
			items,
			updatedAt: (/* @__PURE__ */ new Date()).toISOString()
		}), { merge: true });
	} catch (error) {
		handleFirestoreError(error, OperationType.WRITE, path);
	}
}
async function persistAgoraConfig(cfg) {
	if (!db || !auth?.currentUser) return;
	const path = `${COLLECTIONS.config}/agora`;
	try {
		await setDoc(doc(db, COLLECTIONS.config, "agora"), stripUndefinedForFirestore({
			...cfg,
			updatedAt: (/* @__PURE__ */ new Date()).toISOString()
		}), { merge: true });
	} catch (error) {
		handleFirestoreError(error, OperationType.WRITE, path);
	}
}
async function persistJackpotBanner(banner) {
	if (!db || !auth?.currentUser) return;
	const path = `${COLLECTIONS.config}/jackpot`;
	try {
		await setDoc(doc(db, COLLECTIONS.config, "jackpot"), stripUndefinedForFirestore({
			...banner,
			updatedAt: (/* @__PURE__ */ new Date()).toISOString()
		}), { merge: true });
	} catch (error) {
		handleFirestoreError(error, OperationType.WRITE, path);
	}
}
async function persistDashboardSyncPulse(pulse) {
	if (!db || !auth?.currentUser) return;
	try {
		await setDoc(doc(db, COLLECTIONS.config, "dashboard_sync"), stripUndefinedForFirestore({
			...pulse,
			updatedAt: (/* @__PURE__ */ new Date()).toISOString()
		}));
	} catch {}
}
async function purgeLegacyMockCatalogFromFirestore(legacyGiftIds, legacyStoreIds) {
	if (!db || !auth?.currentUser) throw new Error("يرجى تسجيل الدخول بحساب المسؤول أولاً.");
	let removedGifts = 0;
	let removedStore = 0;
	const batch = writeBatch(db);
	const legacyGiftSet = new Set(legacyGiftIds);
	const legacyStoreSet = new Set(legacyStoreIds);
	(await getDocs(collection(db, COLLECTIONS.gifts))).forEach((d) => {
		if (legacyGiftSet.has(d.id) || d.id === "gift_starter_default") {
			batch.delete(d.ref);
			removedGifts++;
		}
	});
	(await getDocs(collection(db, COLLECTIONS.storeItems))).forEach((d) => {
		if (legacyStoreSet.has(d.id)) {
			batch.delete(d.ref);
			removedStore++;
		}
	});
	batch.set(doc(db, COLLECTIONS.config, "bag_gifts"), stripUndefinedForFirestore({
		items: {},
		updatedAt: (/* @__PURE__ */ new Date()).toISOString()
	}), { merge: true });
	await batch.commit();
	return {
		removedGifts,
		removedStore
	};
}
// src/utils/voiceProfileOptions.ts
var VOICE_COUNTRIES = [
	{
		name: "السعودية",
		flag: "🇸🇦",
		dialCode: "+966"
	},
	{
		name: "مصر",
		flag: "🇪🇬",
		dialCode: "+20"
	},
	{
		name: "الإمارات",
		flag: "🇦🇪",
		dialCode: "+971"
	},
	{
		name: "الكويت",
		flag: "🇰🇼",
		dialCode: "+965"
	},
	{
		name: "قطر",
		flag: "🇶🇦",
		dialCode: "+974"
	},
	{
		name: "البحرين",
		flag: "🇧🇭",
		dialCode: "+973"
	},
	{
		name: "عُمان",
		flag: "🇴🇲",
		dialCode: "+968"
	},
	{
		name: "الأردن",
		flag: "🇯🇴",
		dialCode: "+962"
	},
	{
		name: "العراق",
		flag: "🇮🇶",
		dialCode: "+964"
	},
	{
		name: "الجزائر",
		flag: "🇩🇿",
		dialCode: "+213"
	},
	{
		name: "المغرب",
		flag: "🇲🇦",
		dialCode: "+212"
	},
	{
		name: "تونس",
		flag: "🇹🇳",
		dialCode: "+216"
	},
	{
		name: "لبنان",
		flag: "🇱🇧",
		dialCode: "+961"
	},
	{
		name: "سوريا",
		flag: "🇸🇾",
		dialCode: "+963"
	},
	{
		name: "فلسطين",
		flag: "🇵🇸",
		dialCode: "+970"
	},
	{
		name: "اليمن",
		flag: "🇾🇪",
		dialCode: "+967"
	},
	{
		name: "السودان",
		flag: "🇸🇩",
		dialCode: "+249"
	},
	{
		name: "ليبيا",
		flag: "🇱🇾",
		dialCode: "+218"
	},
	{
		name: "تركيا",
		flag: "🇹🇷",
		dialCode: "+90"
	},
	{
		name: "دولي",
		flag: "🌍",
		dialCode: "+1"
	}
];
/**
* Generates a compact, offline-safe SVG data URI avatar (under 700 bytes, well within the 1024-char Firestore rule limit).
*/
function buildVoiceAvatarSvg(gender, seedName = "") {
	const isFemale = gender === "female";
	const bg1 = isFemale ? "%23be185d" : "%231d4ed8";
	const bg2 = isFemale ? "%237c3aed" : "%230f172a";
	const accent = isFemale ? "%23fbcfe8" : "%23fbbf24";
	const ring = isFemale ? "%23f472b6" : "%2338bdf8";
	const initial = seedName.trim().slice(0, 1).toUpperCase();
	const label = initial && /^[A-Za-z0-9]$/.test(initial) ? initial : isFemale ? "♀" : "♂";
	return `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 120'><defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'><stop offset='0%25' stop-color='${bg1}'/><stop offset='100%25' stop-color='${bg2}'/></linearGradient></defs><rect width='120' height='120' rx='60' fill='url(%23g)'/><circle cx='60' cy='60' r='54' fill='none' stroke='${ring}' stroke-width='3' opacity='0.85'/><circle cx='60' cy='46' r='18' fill='${accent}' opacity='0.92'/><path d='M28 104c4-20 18-30 32-30s28 10 32 30' fill='${accent}' opacity='0.88'/><text x='60' y='52' text-anchor='middle' font-family='sans-serif' font-size='16' font-weight='bold' fill='%230f172a'>${encodeURIComponent(label)}</text></svg>`;
}
// src/utils/mediaFormats.ts
var VIDEO_EXTS = [
	"mp4",
	"vap",
	"webm",
	"mov",
	"m4v",
	"ogv",
	"mkv"
];
var ANIMATED_IMG_EXTS = [
	"gif",
	"webp",
	"apng"
];
var STATIC_IMG_EXTS = [
	"png",
	"jpg",
	"jpeg",
	"svg",
	"avif",
	"bmp",
	"ico"
];
var AUDIO_EXTS = [
	"mp3",
	"wav",
	"ogg",
	"m4a",
	"aac",
	"flac",
	"opus",
	"weba"
];
function isLikelyVapUrl(url) {
	const clean = normalizeMediaUrl(url).toLowerCase();
	if (!clean) return false;
	if (clean.split("#")[0].split("?")[0].endsWith(".vap")) return true;
	if (/[/_.-]vap[/_.-]|[?&]vap=1|[?&]format=vap|[?&]type=vap/.test(clean)) return true;
	return false;
}
function normalizeMediaUrl(url) {
	if (!url) return "";
	return url.trim();
}
function detectMediaKind(url) {
	const clean = normalizeMediaUrl(url);
	if (!clean) return "unknown";
	const lower = clean.toLowerCase();
	if (lower.startsWith("data:")) {
		if (lower.startsWith("data:video/")) return "video";
		if (lower.startsWith("data:image/gif") || lower.startsWith("data:image/webp") || lower.startsWith("data:image/apng")) return "animated_image";
		if (lower.startsWith("data:image/")) return "image";
	}
	const lastSegment = lower.split("#")[0].split("?")[0].split("/").pop() || "";
	const dotIdx = lastSegment.lastIndexOf(".");
	if (dotIdx > 0) {
		const ext = lastSegment.slice(dotIdx + 1);
		if (VIDEO_EXTS.includes(ext)) return "video";
		if (ANIMATED_IMG_EXTS.includes(ext)) return "animated_image";
		if (STATIC_IMG_EXTS.includes(ext)) return "image";
	}
	const queryPart = lower.includes("?") ? lower.split("?")[1].split("#")[0] : "";
	if (queryPart) {
		const formatMatch = queryPart.match(/(?:^|&)(?:format|fm|f|ext|type|mime|mime_type)=([^&]+)/);
		if (formatMatch) {
			const val = decodeURIComponent(formatMatch[1]);
			if (VIDEO_EXTS.some((ext) => val.includes(ext)) || val.includes("video")) return "video";
			if (ANIMATED_IMG_EXTS.some((ext) => val.includes(ext))) return "animated_image";
			if (STATIC_IMG_EXTS.some((ext) => val.includes(ext)) || val.includes("image")) return "image";
		}
	}
	if (isLikelyVapUrl(clean)) return "video";
	return "unknown";
}
function getMediaFormatLabel(url) {
	const clean = normalizeMediaUrl(url);
	if (!clean) return "";
	if (isLikelyVapUrl(clean)) return "VAP";
	const lower = clean.toLowerCase();
	if (lower.startsWith("data:video/")) return lower.slice(11).split(";")[0].toUpperCase() || "VIDEO";
	if (lower.startsWith("data:image/")) return lower.slice(11).split(";")[0].replace("+XML", "").toUpperCase() || "IMG";
	const lastSegment = lower.split("#")[0].split("?")[0].split("/").pop() || "";
	const dotIdx = lastSegment.lastIndexOf(".");
	if (dotIdx > 0) {
		const ext = lastSegment.slice(dotIdx + 1).toUpperCase();
		if (VIDEO_EXTS.includes(ext.toLowerCase()) || ANIMATED_IMG_EXTS.includes(ext.toLowerCase()) || STATIC_IMG_EXTS.includes(ext.toLowerCase()) || AUDIO_EXTS.includes(ext.toLowerCase())) return ext;
	}
	const kind = detectMediaKind(clean);
	if (kind === "video") return "VIDEO";
	if (kind === "animated_image") return "GIF/WEBP";
	if (kind === "image") return "IMG";
	return "URL";
}
function clampEffectDurationSec(sec, fallbackSec = 5) {
	if (typeof sec !== "number" || !Number.isFinite(sec) || sec < 1) return fallbackSec;
	return Math.min(120, Math.round(sec));
}
function resolveGiftStageMedia(gift) {
	const cleanVideo = normalizeMediaUrl(gift.videoUrl);
	const cleanImage = normalizeMediaUrl(gift.imageUrl);
	const hasExplicitDuration = typeof gift.effectDurationSec === "number" && Number.isFinite(gift.effectDurationSec) && gift.effectDurationSec >= 1;
	const durationMs = (hasExplicitDuration ? clampEffectDurationSec(gift.effectDurationSec, 6) : 6) * 1e3;
	if (cleanVideo) {
		const videoKind = detectMediaKind(cleanVideo);
		return {
			mediaUrl: cleanVideo,
			fallbackUrl: cleanImage || void 0,
			preferVideo: videoKind === "video" || videoKind === "unknown",
			durationMs,
			hasExplicitDuration
		};
	}
	if (cleanImage) return {
		mediaUrl: cleanImage,
		preferVideo: detectMediaKind(cleanImage) === "video",
		durationMs,
		hasExplicitDuration
	};
	return {
		mediaUrl: void 0,
		preferVideo: false,
		durationMs,
		hasExplicitDuration
	};
}
function resolveEntranceStageMedia(item) {
	if (!item) return {
		primaryUrl: void 0,
		previewThumbUrl: void 0,
		preferVideo: false,
		isVideoEntrance: false,
		durationMs: 4500,
		hasExplicitDuration: false
	};
	const cleanVideo = normalizeMediaUrl(item.videoUrl);
	const cleanPreview = normalizeMediaUrl(item.previewUrl);
	const hasExplicitDuration = typeof item.effectDurationSec === "number" && Number.isFinite(item.effectDurationSec) && item.effectDurationSec >= 1;
	if (cleanVideo) {
		const kind = detectMediaKind(cleanVideo);
		const isVideo = kind === "video" || kind === "unknown";
		return {
			primaryUrl: cleanVideo,
			previewThumbUrl: cleanPreview || void 0,
			preferVideo: isVideo,
			isVideoEntrance: isVideo,
			durationMs: (hasExplicitDuration ? clampEffectDurationSec(item.effectDurationSec, 7) : 7) * 1e3,
			hasExplicitDuration
		};
	}
	if (cleanPreview) {
		const isVideo = detectMediaKind(cleanPreview) === "video";
		return {
			primaryUrl: cleanPreview,
			previewThumbUrl: cleanPreview,
			preferVideo: isVideo,
			isVideoEntrance: isVideo,
			durationMs: (hasExplicitDuration ? clampEffectDurationSec(item.effectDurationSec, 7) : 7) * 1e3,
			hasExplicitDuration
		};
	}
	return {
		primaryUrl: void 0,
		previewThumbUrl: void 0,
		preferVideo: false,
		isVideoEntrance: false,
		durationMs: (hasExplicitDuration ? clampEffectDurationSec(item.effectDurationSec, 5) : 4.5) * 1e3,
		hasExplicitDuration
	};
}
// src/utils/selfHostedVoice.ts
var DEFAULT_ICE_SERVERS = [
	{ urls: "stun:stun.l.google.com:19302" },
	{ urls: "stun:stun1.l.google.com:19302" },
	{ urls: "stun:stun2.l.google.com:19302" },
	{ urls: "stun:stun3.l.google.com:19302" },
	{ urls: "stun:stun4.l.google.com:19302" },
	{ urls: "stun:stun.cloudflare.com:3478" },
	{ urls: "stun:global.stun.twilio.com:3478" }
];
function linearToMuLaw(sample) {
	const MULAW_MAX = 8191;
	const MULAW_BIAS = 33;
	let pcm = Math.max(-1, Math.min(1, sample)) * 32767;
	let sign = 0;
	if (pcm < 0) {
		sign = 128;
		pcm = -pcm;
	}
	pcm = Math.min(MULAW_MAX * 4, pcm);
	pcm = (pcm >> 2) + MULAW_BIAS;
	let exponent = 7;
	for (let expMask = 16384; (pcm & expMask) === 0 && exponent > 0; exponent--, expMask >>= 1);
	const mantissa = pcm >> exponent + 3 & 15;
	return ~(sign | exponent << 4 | mantissa) & 255;
}
function muLawToLinear(uVal) {
	const val = ~uVal & 255;
	const sign = val & 128;
	const exponent = val >> 4 & 7;
	let sample = ((val & 15) << 3) + 132 << exponent;
	sample -= 132;
	return (sign ? -sample : sample) / 32768;
}
function uint8ToBase64(bytes) {
	let binary = "";
	for (let i = 0; i < bytes.length; i++) binary += String.fromCharCode(bytes[i]);
	return btoa(binary);
}
function base64ToUint8(b64) {
	const binary = atob(b64);
	const out = new Uint8Array(binary.length);
	for (let i = 0; i < binary.length; i++) out[i] = binary.charCodeAt(i);
	return out;
}
async function fetchVoiceServerStatus() {
	if (typeof fetch === "undefined" || typeof window === "undefined") return null;
	try {
		const controller = new AbortController();
		const timer = window.setTimeout(() => controller.abort(), 3e3);
		const res = await fetch(resolveApiUrl("/api/voice-server/status"), { signal: controller.signal });
		window.clearTimeout(timer);
		if (!res.ok || !res.headers.get("content-type")?.includes("application/json")) return null;
		return await res.json();
	} catch {
		return null;
	}
}
function getVoiceWebSocketUrl() {
	return resolveVoiceWsUrl();
}
var SelfHostedVoiceEngine = class {
	constructor() {
		this.ws = null;
		this.transport = "idle";
		this.unsubFirestoreSignals = null;
		this.firestoreHelloTimer = null;
		this.selfPeerId = null;
		this.activeRoomId = null;
		this.activeChannel = null;
		this.activeUserId = null;
		this.activeDisplayName = "مستخدم";
		this.iceServers = [...DEFAULT_ICE_SERVERS];
		this.desiredOnSeat = false;
		this.desiredMuted = false;
		this.remoteMuted = false;
		this.localStream = null;
		this.localTrack = null;
		this.audioCtx = null;
		this.localSource = null;
		this.localAnalyser = null;
		this.localAnalyserData = null;
		this.relayProcessor = null;
		this.relayMuteGain = null;
		this.relayRequestedByPeers = /* @__PURE__ */ new Set();
		this.relaySeq = 0;
		this.volumeTimer = null;
		this.heartbeatTimer = null;
		this.reconnectTimer = null;
		this.reconnectAttempts = 0;
		this.probeStream = null;
		this.probeCtx = null;
		this.probeTimer = null;
		this.peers = /* @__PURE__ */ new Map();
		this.joinEpoch = 0;
		this.opChain = Promise.resolve();
		this.volumeListeners = /* @__PURE__ */ new Set();
		this.noticeListeners = /* @__PURE__ */ new Set();
		this.micStatusListeners = /* @__PURE__ */ new Set();
		this.statusListeners = /* @__PURE__ */ new Set();
		this.roomEventListeners = /* @__PURE__ */ new Set();
		this.serverSyncListeners = /* @__PURE__ */ new Set();
		this.isLiveMicActive = false;
		this.autoplayBlocked = false;
		this.status = {
			state: "idle",
			provider: "self_hosted",
			appId: "self_hosted_webrtc",
			channel: null,
			remoteUsersCount: 0,
			autoplayBlocked: false,
			micActive: false,
			micError: null,
			errorMessage: null,
			requiresToken: false,
			transport: "idle",
			relayActive: false
		};
	}
	updateStatus(patch) {
		this.status = {
			...this.status,
			...patch,
			provider: "self_hosted",
			micActive: this.isLiveMicActive,
			autoplayBlocked: this.autoplayBlocked,
			remoteUsersCount: this.peers.size,
			transport: this.transport,
			relayActive: this.relayRequestedByPeers.size > 0
		};
		this.statusListeners.forEach((cb) => cb({ ...this.status }));
	}
	emitNotice(msg) {
		this.noticeListeners.forEach((cb) => cb(msg));
	}
	setLiveMicActive(active) {
		if (this.isLiveMicActive === active) return;
		this.isLiveMicActive = active;
		this.micStatusListeners.forEach((cb) => cb(active));
		this.updateStatus({});
	}
	subscribeVolumes(cb) {
		this.volumeListeners.add(cb);
		return () => this.volumeListeners.delete(cb);
	}
	subscribeNotices(cb) {
		this.noticeListeners.add(cb);
		return () => this.noticeListeners.delete(cb);
	}
	subscribeMicStatus(cb) {
		this.micStatusListeners.add(cb);
		cb(this.isLiveMicActive);
		return () => this.micStatusListeners.delete(cb);
	}
	subscribeStatus(cb) {
		this.statusListeners.add(cb);
		cb({ ...this.status });
		return () => this.statusListeners.delete(cb);
	}
	subscribeRoomEvents(cb) {
		this.roomEventListeners.add(cb);
		return () => this.roomEventListeners.delete(cb);
	}
	subscribeServerSync(cb) {
		this.serverSyncListeners.add(cb);
		return () => this.serverSyncListeners.delete(cb);
	}
	broadcastRoomEvent(event) {
		if (this.ws && this.ws.readyState === WebSocket.OPEN) {
			this.sendWs({
				type: "room:event",
				event
			});
			return true;
		}
		return false;
	}
	/**
	* Call directly inside a user tap handler (e.g., Climb Mic button or room tap)
	* so mobile Safari / Android Chrome unlock AudioContext and remote <audio> immediately.
	*/
	primeFromUserGesture() {
		this.ensureAudioContext();
		this.resumeRemoteAudio(true);
	}
	ensureAudioContext() {
		if (typeof window === "undefined") return null;
		if (!this.audioCtx || this.audioCtx.state === "closed") {
			const Ctx = window.AudioContext || window.webkitAudioContext;
			if (!Ctx) return null;
			this.audioCtx = new Ctx();
		}
		if (this.audioCtx.state === "suspended") this.audioCtx.resume().catch(() => {});
		return this.audioCtx;
	}
	startVolumeLoop() {
		if (this.volumeTimer !== null || typeof window === "undefined") return;
		this.volumeTimer = window.setInterval(() => {
			const next = {};
			const now = Date.now();
			if (this.activeUserId && this.localAnalyser && this.localAnalyserData && this.isLiveMicActive) {
				this.localAnalyser.getByteTimeDomainData(this.localAnalyserData);
				let sum = 0;
				for (let i = 0; i < this.localAnalyserData.length; i++) {
					const v = (this.localAnalyserData[i] - 128) / 128;
					sum += v * v;
				}
				const rms = Math.sqrt(sum / this.localAnalyserData.length);
				next[this.activeUserId] = Math.min(100, Math.round(rms * 280));
			}
			this.peers.forEach((peer) => {
				if (!peer.onSeat || peer.muted) return;
				let lvl = 0;
				if (peer.analyser && peer.analyserData && peer.p2pConnected) {
					peer.analyser.getByteTimeDomainData(peer.analyserData);
					let sum = 0;
					for (let i = 0; i < peer.analyserData.length; i++) {
						const v = (peer.analyserData[i] - 128) / 128;
						sum += v * v;
					}
					const rms = Math.sqrt(sum / peer.analyserData.length);
					lvl = Math.min(100, Math.round(rms * 280));
				}
				if (lvl === 0 && now - peer.relayLastLevelAt < 450) lvl = peer.relayLastLevel;
				if (lvl > 0) next[peer.userId] = lvl;
			});
			this.volumeListeners.forEach((cb) => cb(next));
		}, 120);
	}
	stopVolumeLoop() {
		if (this.volumeTimer !== null && typeof window !== "undefined") {
			window.clearInterval(this.volumeTimer);
			this.volumeTimer = null;
		}
		this.volumeListeners.forEach((cb) => cb({}));
	}
	sendWs(payload) {
		if (this.ws && this.ws.readyState === WebSocket.OPEN) try {
			this.ws.send(JSON.stringify(payload));
		} catch {}
	}
	sendSignal(params) {
		if (this.transport === "websocket") {
			this.sendWs(params);
			return;
		}
		if (this.transport === "firestore_rtc" && this.activeRoomId && this.selfPeerId && this.activeUserId) {
			const sigType = params.type === "voice:offer" ? "offer" : params.type === "voice:answer" ? "answer" : "ice";
			publishFirestoreRtcSignal({
				roomId: this.activeRoomId,
				signalType: sigType,
				fromPeerId: this.selfPeerId,
				fromUserId: this.activeUserId,
				displayName: this.activeDisplayName,
				targetPeerId: params.targetPeerId,
				sdp: params.sdp || void 0,
				candidate: params.candidate || void 0
			});
		}
	}
	getAudioTransceiver(pc) {
		return pc.getTransceivers().find((tr) => tr.receiver?.track?.kind === "audio" || tr.sender?.track?.kind === "audio");
	}
	setupPeerConnection(peerInfo) {
		const existing = this.peers.get(peerInfo.peerId);
		if (existing) {
			existing.onSeat = peerInfo.onSeat;
			existing.muted = peerInfo.muted;
			existing.displayName = peerInfo.displayName || existing.displayName;
			return existing;
		}
		const pc = new RTCPeerConnection({
			iceServers: this.iceServers,
			iceCandidatePoolSize: 4
		});
		const polite = (this.selfPeerId || "") < peerInfo.peerId;
		const record = {
			peerId: peerInfo.peerId,
			userId: peerInfo.userId,
			displayName: peerInfo.displayName,
			onSeat: peerInfo.onSeat,
			muted: peerInfo.muted,
			polite,
			pc,
			makingOffer: false,
			ignoreOffer: false,
			pendingIce: [],
			remoteDescriptionSet: false,
			p2pConnected: false,
			relayFallbackTimer: null,
			audioEl: null,
			remoteStream: null,
			analyser: null,
			analyserData: null,
			sourceNode: null,
			relayNextPlayTime: 0,
			relayLastLevel: 0,
			relayLastLevelAt: 0
		};
		pc.onicecandidate = (evt) => {
			if (!evt.candidate) return;
			this.sendSignal({
				type: "voice:ice",
				targetPeerId: peerInfo.peerId,
				candidate: evt.candidate.toJSON()
			});
		};
		const requestRelayFromPeer = (enabled) => {
			if (this.transport !== "websocket") return;
			this.sendWs({
				type: "voice:relay_request",
				targetPeerId: peerInfo.peerId,
				enabled
			});
		};
		const evaluateConnectionHealth = () => {
			const ice = pc.iceConnectionState;
			const conn = pc.connectionState;
			if (ice === "connected" || ice === "completed" || conn === "connected") {
				record.p2pConnected = true;
				if (record.relayFallbackTimer !== null) {
					window.clearTimeout(record.relayFallbackTimer);
					record.relayFallbackTimer = null;
				}
				requestRelayFromPeer(false);
				this.updateStatus({});
			} else if (ice === "failed" || conn === "failed") {
				record.p2pConnected = false;
				requestRelayFromPeer(true);
				try {
					pc.restartIce();
				} catch {}
				this.updateStatus({});
			} else if (ice === "disconnected") {
				record.p2pConnected = false;
				requestRelayFromPeer(true);
			}
		};
		pc.oniceconnectionstatechange = evaluateConnectionHealth;
		pc.onconnectionstatechange = evaluateConnectionHealth;
		if (typeof window !== "undefined" && this.transport === "websocket") record.relayFallbackTimer = window.setTimeout(() => {
			if (!record.p2pConnected && this.peers.get(peerInfo.peerId) === record) requestRelayFromPeer(true);
		}, 4500);
		pc.onnegotiationneeded = () => {
			if (this.peers.get(peerInfo.peerId) !== record) return;
			this.initiateOfferToPeer(record);
		};
		pc.ontrack = (evt) => {
			const stream = evt.streams?.[0] || new MediaStream([evt.track]);
			record.remoteStream = stream;
			if (typeof document !== "undefined") {
				if (!record.audioEl) {
					const audio = document.createElement("audio");
					audio.autoplay = true;
					audio.setAttribute("playsinline", "true");
					audio.style.display = "none";
					document.body.appendChild(audio);
					record.audioEl = audio;
				}
				record.audioEl.srcObject = stream;
				record.audioEl.muted = this.remoteMuted;
				record.audioEl.volume = 1;
				const playPromise = record.audioEl.play();
				if (playPromise && typeof playPromise.catch === "function") playPromise.catch(() => {
					this.autoplayBlocked = true;
					this.updateStatus({});
					this.emitNotice("اضغط في أي مكان داخل الغرفة لتفعيل سماع الصوت المباشر.");
				});
			}
			const ctx = this.ensureAudioContext();
			if (ctx && !record.sourceNode) try {
				const src = ctx.createMediaStreamSource(stream);
				const analyser = ctx.createAnalyser();
				analyser.fftSize = 256;
				src.connect(analyser);
				record.sourceNode = src;
				record.analyser = analyser;
				record.analyserData = new Uint8Array(analyser.frequencyBinCount);
			} catch {}
		};
		this.peers.set(peerInfo.peerId, record);
		this.updateStatus({});
		return record;
	}
	cleanupPeer(peerId) {
		const rec = this.peers.get(peerId);
		if (!rec) return;
		this.peers.delete(peerId);
		this.relayRequestedByPeers.delete(peerId);
		if (rec.relayFallbackTimer !== null && typeof window !== "undefined") {
			window.clearTimeout(rec.relayFallbackTimer);
			rec.relayFallbackTimer = null;
		}
		try {
			rec.sourceNode?.disconnect();
		} catch {}
		if (rec.audioEl) try {
			rec.audioEl.pause();
			rec.audioEl.srcObject = null;
			rec.audioEl.remove();
		} catch {}
		try {
			rec.pc.ontrack = null;
			rec.pc.onicecandidate = null;
			rec.pc.oniceconnectionstatechange = null;
			rec.pc.onconnectionstatechange = null;
			rec.pc.onnegotiationneeded = null;
			rec.pc.close();
		} catch {}
		this.updateStatus({});
	}
	async syncLocalTrackToPeer(rec, triggerRenegotiate) {
		const pc = rec.pc;
		const tr = this.getAudioTransceiver(pc);
		const shouldSend = Boolean(this.localTrack && this.desiredOnSeat && !this.desiredMuted);
		try {
			if (shouldSend && this.localTrack) {
				if (tr) {
					await tr.sender.replaceTrack(this.localTrack);
					if (tr.direction !== "sendrecv") tr.direction = "sendrecv";
					if (triggerRenegotiate && tr.currentDirection !== "sendrecv" && tr.currentDirection !== "sendonly") await this.initiateOfferToPeer(rec);
				} else {
					if (this.localStream) pc.addTrack(this.localTrack, this.localStream);
					else pc.addTransceiver(this.localTrack, { direction: "sendrecv" });
					if (triggerRenegotiate) await this.initiateOfferToPeer(rec);
				}
			} else if (tr) await tr.sender.replaceTrack(null).catch(() => {});
		} catch (err) {
			console.warn("[SelfHostedVoice] syncLocalTrackToPeer notice:", err);
		}
	}
	async initiateOfferToPeer(rec) {
		if (rec.makingOffer) return;
		try {
			rec.makingOffer = true;
			const tr = this.getAudioTransceiver(rec.pc);
			if (this.localTrack && this.desiredOnSeat && !this.desiredMuted) {
				if (tr) {
					await tr.sender.replaceTrack(this.localTrack);
					tr.direction = "sendrecv";
				} else if (this.localStream) rec.pc.addTrack(this.localTrack, this.localStream);
				else rec.pc.addTransceiver(this.localTrack, { direction: "sendrecv" });
			} else if (!tr) rec.pc.addTransceiver("audio", { direction: "recvonly" });
			const offer = await rec.pc.createOffer({ offerToReceiveAudio: true });
			if (rec.pc.signalingState !== "stable") return;
			await rec.pc.setLocalDescription(offer);
			this.sendSignal({
				type: "voice:offer",
				targetPeerId: rec.peerId,
				sdp: rec.pc.localDescription
			});
		} catch (err) {
			console.warn("[SelfHostedVoice] offer failed:", err);
		} finally {
			rec.makingOffer = false;
		}
	}
	async handleIncomingOffer(fromPeerId, fromUserId, sdp) {
		const rec = this.setupPeerConnection({
			peerId: fromPeerId,
			userId: fromUserId,
			displayName: fromUserId,
			onSeat: true,
			muted: false
		});
		try {
			const offerCollision = rec.makingOffer || rec.pc.signalingState !== "stable";
			rec.ignoreOffer = !rec.polite && offerCollision;
			if (rec.ignoreOffer) return;
			if (offerCollision) await Promise.all([rec.pc.setLocalDescription({ type: "rollback" }), rec.pc.setRemoteDescription(new RTCSessionDescription(sdp))]);
			else await rec.pc.setRemoteDescription(new RTCSessionDescription(sdp));
			rec.remoteDescriptionSet = true;
			await this.flushPendingIce(rec);
			const tr = this.getAudioTransceiver(rec.pc);
			if (this.localTrack && this.desiredOnSeat && !this.desiredMuted) {
				if (tr) {
					tr.direction = "sendrecv";
					await tr.sender.replaceTrack(this.localTrack).catch(() => {});
				} else if (this.localStream) rec.pc.addTrack(this.localTrack, this.localStream);
			} else if (tr && tr.direction === "inactive") tr.direction = "recvonly";
			const answer = await rec.pc.createAnswer();
			await rec.pc.setLocalDescription(answer);
			this.sendSignal({
				type: "voice:answer",
				targetPeerId: fromPeerId,
				sdp: rec.pc.localDescription
			});
		} catch (err) {
			console.warn("[SelfHostedVoice] handleIncomingOffer error:", err);
		}
	}
	async handleIncomingAnswer(fromPeerId, sdp) {
		const rec = this.peers.get(fromPeerId);
		if (!rec) return;
		try {
			if (rec.pc.signalingState !== "have-local-offer") return;
			await rec.pc.setRemoteDescription(new RTCSessionDescription(sdp));
			rec.remoteDescriptionSet = true;
			await this.flushPendingIce(rec);
		} catch (err) {
			console.warn("[SelfHostedVoice] handleIncomingAnswer error:", err);
		}
	}
	async handleIncomingIce(fromPeerId, candidate) {
		const rec = this.peers.get(fromPeerId);
		if (!rec || rec.ignoreOffer) return;
		if (!rec.remoteDescriptionSet) {
			rec.pendingIce.push(candidate);
			return;
		}
		try {
			await rec.pc.addIceCandidate(new RTCIceCandidate(candidate));
		} catch {}
	}
	async flushPendingIce(rec) {
		while (rec.pendingIce.length > 0) {
			const cand = rec.pendingIce.shift();
			if (!cand) continue;
			try {
				await rec.pc.addIceCandidate(new RTCIceCandidate(cand));
			} catch {}
		}
	}
	attachRelayEncoder(ctx, src) {
		this.detachRelayEncoder();
		try {
			const processor = ctx.createScriptProcessor(2048, 1, 1);
			const muteGain = ctx.createGain();
			muteGain.gain.value = 0;
			const targetRate = 16e3;
			const ratio = Math.max(1, ctx.sampleRate / targetRate);
			processor.onaudioprocess = (ev) => {
				if (!this.isLiveMicActive || this.desiredMuted || !this.desiredOnSeat || this.transport !== "websocket" || !this.ws || this.ws.readyState !== WebSocket.OPEN) return;
				const targets = [];
				this.peers.forEach((peer, peerId) => {
					if (!peer.p2pConnected || this.relayRequestedByPeers.has(peerId)) targets.push(peerId);
				});
				if (targets.length === 0) return;
				const input = ev.inputBuffer.getChannelData(0);
				const outLen = Math.floor(input.length / ratio);
				if (outLen <= 0) return;
				const encoded = new Uint8Array(outLen);
				let sumSq = 0;
				for (let i = 0; i < outLen; i++) {
					const sample = input[Math.min(input.length - 1, Math.floor(i * ratio))];
					sumSq += sample * sample;
					encoded[i] = linearToMuLaw(sample);
				}
				const rms = Math.sqrt(sumSq / outLen);
				const level = Math.min(100, Math.round(rms * 280));
				if (rms < .0025) return;
				this.relaySeq += 1;
				this.sendWs({
					type: "voice:audio_frame",
					targetPeerIds: targets,
					sampleRate: targetRate,
					seq: this.relaySeq,
					level,
					data: uint8ToBase64(encoded)
				});
			};
			src.connect(processor);
			processor.connect(muteGain);
			muteGain.connect(ctx.destination);
			this.relayProcessor = processor;
			this.relayMuteGain = muteGain;
		} catch {}
	}
	detachRelayEncoder() {
		if (this.relayProcessor) {
			try {
				this.relayProcessor.onaudioprocess = null;
				this.relayProcessor.disconnect();
			} catch {}
			this.relayProcessor = null;
		}
		if (this.relayMuteGain) {
			try {
				this.relayMuteGain.disconnect();
			} catch {}
			this.relayMuteGain = null;
		}
	}
	playIncomingRelayFrame(fromPeerId, fromUserId, b64Data, sampleRate, level) {
		if (this.remoteMuted) return;
		const rec = this.peers.get(fromPeerId);
		if (rec?.p2pConnected) return;
		const ctx = this.ensureAudioContext();
		if (!ctx) return;
		if (ctx.state === "suspended") {
			ctx.resume().catch(() => {
				this.autoplayBlocked = true;
				this.updateStatus({});
			});
			return;
		}
		try {
			const encoded = base64ToUint8(b64Data);
			if (encoded.length === 0) return;
			const buf = ctx.createBuffer(1, encoded.length, sampleRate);
			const ch = buf.getChannelData(0);
			for (let i = 0; i < encoded.length; i++) ch[i] = muLawToLinear(encoded[i]);
			const source = ctx.createBufferSource();
			source.buffer = buf;
			source.connect(ctx.destination);
			const now = ctx.currentTime;
			const startAt = rec ? Math.max(now + .02, Math.min(now + .25, rec.relayNextPlayTime || now + .02)) : now + .02;
			source.start(startAt);
			if (rec) {
				rec.relayNextPlayTime = startAt + buf.duration;
				rec.relayLastLevel = level || 20;
				rec.relayLastLevelAt = Date.now();
				rec.onSeat = true;
				rec.muted = false;
			} else if (fromUserId) this.volumeListeners.forEach((cb) => cb({ [fromUserId]: level || 20 }));
		} catch {}
	}
	async releaseLocalMic() {
		this.setLiveMicActive(false);
		this.detachRelayEncoder();
		const replacePromises = [];
		this.peers.forEach((rec) => {
			const tr = this.getAudioTransceiver(rec.pc);
			if (tr) replacePromises.push(tr.sender.replaceTrack(null).catch(() => {}));
		});
		await Promise.all(replacePromises);
		try {
			this.localSource?.disconnect();
		} catch {}
		this.localSource = null;
		this.localAnalyser = null;
		this.localAnalyserData = null;
		if (this.localStream) {
			this.localStream.getTracks().forEach((t) => {
				try {
					t.stop();
				} catch {}
			});
			this.localStream = null;
		}
		this.localTrack = null;
	}
	broadcastMicState(onSeat, muted) {
		if (this.transport === "websocket") this.sendWs({
			type: "voice:mic_state",
			onSeat,
			muted
		});
		else if (this.transport === "firestore_rtc" && this.activeRoomId && this.selfPeerId && this.activeUserId) publishFirestoreRtcSignal({
			roomId: this.activeRoomId,
			signalType: "mic_state",
			fromPeerId: this.selfPeerId,
			fromUserId: this.activeUserId,
			displayName: this.activeDisplayName,
			onSeat,
			muted
		});
	}
	async applyMicState(onSeat, muted, capturedEpoch) {
		if (capturedEpoch !== this.joinEpoch) return;
		this.broadcastMicState(onSeat, muted);
		if (!onSeat) {
			this.updateStatus({ micError: null });
			await this.releaseLocalMic();
			return;
		}
		if (muted) {
			if (this.localTrack) this.localTrack.enabled = false;
			this.updateStatus({ micError: null });
			this.setLiveMicActive(false);
			return;
		}
		if (this.localTrack && this.localTrack.readyState === "live") {
			this.localTrack.enabled = true;
			await Promise.all(Array.from(this.peers.values()).map((rec) => this.syncLocalTrackToPeer(rec, true)));
			this.updateStatus({ micError: null });
			this.setLiveMicActive(true);
			return;
		}
		if (typeof navigator === "undefined" || !navigator.mediaDevices?.getUserMedia) {
			const msg = "المتصفح لا يدعم التقاط الميكروفون أو الصفحة ليست عبر HTTPS.";
			this.updateStatus({ micError: msg });
			this.emitNotice(msg);
			this.setLiveMicActive(false);
			return;
		}
		try {
			const stream = await navigator.mediaDevices.getUserMedia({ audio: {
				echoCancellation: true,
				noiseSuppression: true,
				autoGainControl: true,
				channelCount: 1
			} });
			if (capturedEpoch !== this.joinEpoch || !this.desiredOnSeat || this.desiredMuted) {
				stream.getTracks().forEach((t) => t.stop());
				return;
			}
			const track = stream.getAudioTracks()[0];
			if (!track) throw new Error("DEVICE_NOT_FOUND");
			track.onended = () => {
				if (this.localTrack === track) {
					this.setLiveMicActive(false);
					const msg = "تم فصل الميكروفون من المتصفح أو النظام.";
					this.updateStatus({ micError: msg });
					this.emitNotice(msg);
				}
			};
			this.localStream = stream;
			this.localTrack = track;
			const ctx = this.ensureAudioContext();
			if (ctx) try {
				const src = ctx.createMediaStreamSource(stream);
				const analyser = ctx.createAnalyser();
				analyser.fftSize = 256;
				src.connect(analyser);
				this.localSource = src;
				this.localAnalyser = analyser;
				this.localAnalyserData = new Uint8Array(analyser.frequencyBinCount);
				this.attachRelayEncoder(ctx, src);
			} catch {}
			this.updateStatus({ micError: null });
			this.setLiveMicActive(true);
			await Promise.all(Array.from(this.peers.values()).map((rec) => this.syncLocalTrackToPeer(rec, true)));
		} catch (err) {
			const errName = err?.name || "";
			let msg = "تعذر تشغيل الميكروفون المباشر.";
			if (errName === "NotAllowedError" || errName === "PermissionDeniedError") msg = "يرجى السماح بصلاحية الميكروفون في المتصفح للتحدث على المايك.";
			else if (errName === "NotFoundError" || errName === "DevicesNotFoundError") msg = "لم يتم العثور على ميكروفون متصل بالجهاز.";
			else if (errName === "NotReadableError") msg = "الميكروفون مستخدم من تطبيق آخر حالياً.";
			else if (errName === "SecurityError") msg = "يرجى فتح التطبيق عبر رابط HTTPS لتشغيل الميكروفون.";
			this.emitNotice(msg);
			this.updateStatus({ micError: msg });
			this.setLiveMicActive(false);
		}
	}
	clearTransportTimers() {
		if (this.heartbeatTimer !== null && typeof window !== "undefined") {
			window.clearInterval(this.heartbeatTimer);
			this.heartbeatTimer = null;
		}
		if (this.reconnectTimer !== null && typeof window !== "undefined") {
			window.clearTimeout(this.reconnectTimer);
			this.reconnectTimer = null;
		}
		if (this.firestoreHelloTimer !== null && typeof window !== "undefined") {
			window.clearInterval(this.firestoreHelloTimer);
			this.firestoreHelloTimer = null;
		}
		if (this.unsubFirestoreSignals) {
			this.unsubFirestoreSignals();
			this.unsubFirestoreSignals = null;
		}
	}
	async startFirestoreRtcFallback(roomId, userId, displayName, myEpoch) {
		if (!isCloudWriteReady() || myEpoch !== this.joinEpoch) return false;
		this.transport = "firestore_rtc";
		this.selfPeerId = `${userId}__fs_${Math.random().toString(36).slice(2, 8)}`;
		this.iceServers = [...DEFAULT_ICE_SERVERS];
		this.activeChannel = roomId;
		const sinceMs = Date.now() - 12e3;
		this.unsubFirestoreSignals = subscribeToFirestoreRtcSignals(roomId, sinceMs, (sig) => {
			if (myEpoch !== this.joinEpoch || sig.fromPeerId === this.selfPeerId) return;
			if (sig.targetPeerId && sig.targetPeerId !== this.selfPeerId) return;
			if (sig.signalType === "hello") {
				const alreadyExisted = this.peers.has(sig.fromPeerId);
				const rec = this.setupPeerConnection({
					peerId: sig.fromPeerId,
					userId: sig.fromUserId,
					displayName: sig.displayName,
					onSeat: Boolean(sig.onSeat),
					muted: Boolean(sig.muted)
				});
				if (!alreadyExisted) {
					publishFirestoreRtcSignal({
						roomId,
						signalType: "hello",
						fromPeerId: this.selfPeerId,
						fromUserId: userId,
						displayName,
						targetPeerId: sig.fromPeerId,
						onSeat: this.desiredOnSeat,
						muted: this.desiredMuted
					});
					if (!rec.polite) this.initiateOfferToPeer(rec);
				}
				return;
			}
			if (sig.signalType === "mic_state") {
				const rec = this.peers.get(sig.fromPeerId);
				if (rec) {
					rec.onSeat = Boolean(sig.onSeat);
					rec.muted = Boolean(sig.muted);
				}
				return;
			}
			if (sig.signalType === "leave") {
				this.cleanupPeer(sig.fromPeerId);
				return;
			}
			if (sig.signalType === "offer" && sig.sdp) {
				this.handleIncomingOffer(sig.fromPeerId, sig.fromUserId, sig.sdp);
				return;
			}
			if (sig.signalType === "answer" && sig.sdp) {
				this.handleIncomingAnswer(sig.fromPeerId, sig.sdp);
				return;
			}
			if (sig.signalType === "ice" && sig.candidate) this.handleIncomingIce(sig.fromPeerId, sig.candidate);
		});
		await publishFirestoreRtcSignal({
			roomId,
			signalType: "hello",
			fromPeerId: this.selfPeerId,
			fromUserId: userId,
			displayName,
			onSeat: this.desiredOnSeat,
			muted: this.desiredMuted
		});
		this.startVolumeLoop();
		this.updateStatus({
			state: "connected",
			channel: roomId,
			errorMessage: null,
			requiresToken: false
		});
		if (this.desiredOnSeat) await this.applyMicState(this.desiredOnSeat, this.desiredMuted, myEpoch);
		return true;
	}
	async connectWebSocket(roomId, userId, displayName, myEpoch) {
		return new Promise((resolve) => {
			if (typeof WebSocket === "undefined") {
				resolve(false);
				return;
			}
			const wsUrl = getVoiceWebSocketUrl();
			let ws;
			try {
				ws = new WebSocket(wsUrl);
			} catch {
				resolve(false);
				return;
			}
			this.ws = ws;
			let resolved = false;
			const done = (ok) => {
				if (!resolved) {
					resolved = true;
					resolve(ok);
				}
			};
			const timeout = window.setTimeout(() => {
				if (!resolved && ws.readyState !== WebSocket.OPEN) {
					try {
						ws.close();
					} catch {}
					done(false);
				}
			}, 4500);
			ws.onopen = () => {
				window.clearTimeout(timeout);
				if (myEpoch !== this.joinEpoch || this.ws !== ws) {
					ws.close();
					done(false);
					return;
				}
				this.transport = "websocket";
				this.reconnectAttempts = 0;
				this.sendWs({
					type: "voice:join",
					roomId,
					userId,
					displayName,
					onSeat: this.desiredOnSeat,
					muted: this.desiredMuted
				});
				this.heartbeatTimer = window.setInterval(() => {
					this.sendWs({
						type: "voice:ping",
						ts: Date.now()
					});
				}, 15e3);
			};
			ws.onmessage = async (event) => {
				if (myEpoch !== this.joinEpoch || this.ws !== ws) return;
				let msg;
				try {
					msg = JSON.parse(String(event.data || "{}"));
				} catch {
					return;
				}
				const type = String(msg.type || "");
				if (type === "voice:room_state") {
					this.selfPeerId = String(msg.selfPeerId || "");
					if (Array.isArray(msg.iceServers) && msg.iceServers.length > 0) this.iceServers = msg.iceServers;
					this.activeChannel = roomId;
					this.startVolumeLoop();
					this.updateStatus({
						state: "connected",
						channel: roomId,
						errorMessage: null,
						requiresToken: false
					});
					const existingPeers = Array.isArray(msg.peers) ? msg.peers : [];
					if (this.desiredOnSeat) await this.applyMicState(this.desiredOnSeat, this.desiredMuted, myEpoch);
					for (const p of existingPeers) {
						const rec = this.setupPeerConnection(p);
						await this.initiateOfferToPeer(rec);
					}
					done(true);
					return;
				}
				if (type === "voice:peer_joined") {
					const p = msg.peer;
					if (p?.peerId) this.setupPeerConnection(p);
					return;
				}
				if (type === "voice:peer_updated") {
					const p = msg.peer;
					if (p?.peerId) {
						const rec = this.peers.get(p.peerId);
						if (rec) {
							rec.onSeat = p.onSeat;
							rec.muted = p.muted;
							rec.displayName = p.displayName;
						}
					}
					return;
				}
				if (type === "voice:peer_left") {
					const peerId = String(msg.peerId || "");
					if (peerId) this.cleanupPeer(peerId);
					return;
				}
				if (type === "voice:offer") {
					await this.handleIncomingOffer(String(msg.fromPeerId || ""), String(msg.fromUserId || ""), msg.sdp);
					return;
				}
				if (type === "voice:answer") {
					await this.handleIncomingAnswer(String(msg.fromPeerId || ""), msg.sdp);
					return;
				}
				if (type === "voice:ice") {
					await this.handleIncomingIce(String(msg.fromPeerId || ""), msg.candidate);
					return;
				}
				if (type === "voice:relay_request") {
					const fromPeerId = String(msg.fromPeerId || "");
					const enabled = Boolean(msg.enabled);
					if (fromPeerId) {
						if (enabled) this.relayRequestedByPeers.add(fromPeerId);
						else this.relayRequestedByPeers.delete(fromPeerId);
						this.updateStatus({});
					}
					return;
				}
				if (type === "voice:audio_frame") {
					const fromPeerId = String(msg.fromPeerId || "");
					const fromUserId = String(msg.fromUserId || "");
					const b64 = typeof msg.data === "string" ? msg.data : "";
					const sampleRate = Number(msg.sampleRate) || 16e3;
					const level = Number(msg.level) || 0;
					if (fromPeerId && b64) this.playIncomingRelayFrame(fromPeerId, fromUserId, b64, sampleRate, level);
					return;
				}
				if (type === "room:event") {
					const ev = msg.event;
					if (ev && ev.id && ev.kind) this.roomEventListeners.forEach((cb) => cb(ev));
					return;
				}
				if (type === "server:catalog_update") {
					const catalog = msg.catalog && typeof msg.catalog === "object" ? msg.catalog : void 0;
					if (catalog) this.serverSyncListeners.forEach((cb) => cb({
						type: "server:catalog_update",
						catalog
					}));
					return;
				}
				if (type === "server:dashboard_command") {
					const command = msg.command && typeof msg.command === "object" ? msg.command : null;
					const state = msg.state && typeof msg.state === "object" ? msg.state : void 0;
					this.serverSyncListeners.forEach((cb) => cb({
						type: "server:dashboard_command",
						command,
						state
					}));
					return;
				}
				if (type === "voice:error") {
					const errMsg = String(msg.message || "خطأ في سيرفر الصوت.");
					this.emitNotice(errMsg);
					this.updateStatus({
						state: "error",
						errorMessage: errMsg
					});
					done(false);
				}
			};
			ws.onerror = () => {
				window.clearTimeout(timeout);
				if (myEpoch !== this.joinEpoch || this.ws !== ws) {
					done(false);
					return;
				}
				done(false);
			};
			ws.onclose = () => {
				window.clearTimeout(timeout);
				if (this.heartbeatTimer !== null && typeof window !== "undefined") {
					window.clearInterval(this.heartbeatTimer);
					this.heartbeatTimer = null;
				}
				if (myEpoch !== this.joinEpoch || this.ws !== ws) {
					done(false);
					return;
				}
				if (!resolved) {
					done(false);
					return;
				}
				if (this.activeRoomId && this.activeUserId && this.transport === "websocket") {
					this.reconnectAttempts += 1;
					const delay = Math.min(8e3, 1e3 * Math.pow(2, Math.min(3, this.reconnectAttempts - 1)));
					this.updateStatus({
						state: "connecting",
						errorMessage: null
					});
					this.reconnectTimer = window.setTimeout(() => {
						if (myEpoch === this.joinEpoch && this.activeRoomId && this.activeUserId) this.reconnectActiveRoom();
					}, delay);
				}
			};
		});
	}
	joinRoom(roomId, userId, displayName) {
		const cleanRoom = roomId.replace(/[^a-zA-Z0-9_-]/g, "_").slice(0, 64) || "main";
		const cleanUid = userId.trim() || "guest_user";
		const myEpoch = ++this.joinEpoch;
		this.activeRoomId = cleanRoom;
		this.activeUserId = cleanUid;
		this.activeDisplayName = (displayName || cleanUid).trim().slice(0, 64);
		this.opChain = this.opChain.then(async () => {
			if (myEpoch !== this.joinEpoch) return;
			if (this.activeChannel === cleanRoom && (this.transport === "websocket" && this.ws?.readyState === WebSocket.OPEN || this.transport === "firestore_rtc")) return;
			await this.internalLeave(false);
			if (myEpoch !== this.joinEpoch) return;
			this.updateStatus({
				state: "connecting",
				channel: cleanRoom,
				micError: null,
				errorMessage: null,
				requiresToken: false
			});
			const serverSnapshot = await fetchVoiceServerStatus();
			if (myEpoch !== this.joinEpoch) return;
			if (!(serverSnapshot?.mode === "serverless_cloud" || serverSnapshot?.engine === "firestore_rtc")) {
				if (await this.connectWebSocket(cleanRoom, cleanUid, this.activeDisplayName, myEpoch) || myEpoch !== this.joinEpoch) return;
			}
			if (await this.startFirestoreRtcFallback(cleanRoom, cleanUid, this.activeDisplayName, myEpoch) || myEpoch !== this.joinEpoch) return;
			if (!isCloudWriteReady()) {
				this.updateStatus({
					state: "idle",
					channel: cleanRoom,
					errorMessage: this.desiredOnSeat ? "للتحدث عبر المايك على الاستضافة السحابية، سجّل الدخول بحسابك لتفعيل الربط الصوتي." : null
				});
				return;
			}
			this.updateStatus({
				state: "error",
				errorMessage: "تعذر تفعيل الربط الصوتي السحابي لهذه الغرفة، حاول مجدداً."
			});
		});
		return this.opChain;
	}
	reconnectActiveRoom() {
		if (!this.activeRoomId || !this.activeUserId) return Promise.resolve();
		const r = this.activeRoomId;
		const u = this.activeUserId;
		const n = this.activeDisplayName;
		++this.joinEpoch;
		this.opChain = this.opChain.then(async () => {
			await this.internalLeave(false);
		});
		return this.joinRoom(r, u, n);
	}
	syncMicState(onSeat, muted) {
		this.desiredOnSeat = onSeat;
		this.desiredMuted = muted;
		const capturedEpoch = this.joinEpoch;
		this.opChain = this.opChain.then(async () => {
			await this.applyMicState(onSeat, muted, capturedEpoch);
		});
		return this.opChain;
	}
	retryMicPublish() {
		const capturedEpoch = this.joinEpoch;
		this.opChain = this.opChain.then(async () => {
			if (this.desiredOnSeat) await this.applyMicState(true, this.desiredMuted, capturedEpoch);
		});
		return this.opChain;
	}
	setRemoteAudioMuted(muted) {
		this.remoteMuted = muted;
		this.peers.forEach((rec) => {
			if (rec.audioEl) rec.audioEl.muted = muted;
		});
	}
	resumeRemoteAudio(force = false) {
		if (this.remoteMuted) return;
		if (!force && !this.autoplayBlocked) return;
		this.autoplayBlocked = false;
		if (this.audioCtx && this.audioCtx.state === "suspended") this.audioCtx.resume().catch(() => {});
		this.peers.forEach((rec) => {
			if (rec.audioEl) {
				rec.audioEl.muted = false;
				rec.audioEl.volume = 1;
				rec.audioEl.play().catch(() => {});
			}
		});
		this.updateStatus({});
	}
	async testConnection(roomId = "room_tyy") {
		const [status, fbStatus] = await Promise.all([fetchVoiceServerStatus(), testFirebaseConnection(true)]);
		const isServerlessHost = status?.mode === "serverless_cloud" || status?.engine === "firestore_rtc";
		if (!status || status.status !== "online" || isServerlessHost) {
			if (isCloudWriteReady() || fbStatus.isConnected) return {
				ok: true,
				message: isCloudWriteReady() ? `السيرفر الصوتي السحابي متصل ويعمل عبر Firestore WebRTC (${fbStatus.projectId})!` : `الربط السحابي متصل بقاعدة بيانات ${fbStatus.projectId} (${fbStatus.latencyMs ?? 0}ms). سجّل الدخول بحسابك لتفعيل التحدث على المايك.`,
				appId: "self_hosted_webrtc",
				channel: roomId
			};
			return {
				ok: false,
				message: "تعذر الاتصال بخوادم Firebase أو سيرفر الصوت الخاص، تحقق من اتصال الإنترنت.",
				appId: "self_hosted_webrtc",
				channel: roomId
			};
		}
		if (!await new Promise((resolve) => {
			if (typeof WebSocket === "undefined") {
				resolve(false);
				return;
			}
			const ws = new WebSocket(getVoiceWebSocketUrl());
			const timer = window.setTimeout(() => {
				try {
					ws.close();
				} catch {}
				resolve(false);
			}, 3500);
			ws.onopen = () => {
				ws.send(JSON.stringify({
					type: "voice:ping",
					ts: Date.now()
				}));
			};
			ws.onmessage = (e) => {
				try {
					if (JSON.parse(String(e.data || "{}")).type === "voice:pong") {
						window.clearTimeout(timer);
						ws.close();
						resolve(true);
					}
				} catch {}
			};
			ws.onerror = () => {
				window.clearTimeout(timer);
				resolve(false);
			};
		})) return {
			ok: false,
			message: "السيرفر مستجيب لكن اتصال WebSocket (/ws/voice) لم يكتمل.",
			appId: "self_hosted_webrtc",
			channel: roomId
		};
		return {
			ok: true,
			message: `سيرفر الصوت الخاص بك يعمل بكفاءة! (${status.activeRoomsCount} غرف نشطة · ${status.activePeersCount} متصلين · /ws/voice)`,
			appId: "self_hosted_webrtc",
			channel: roomId
		};
	}
	async startMicProbe(onLevel) {
		this.stopMicProbe();
		if (typeof navigator === "undefined" || !navigator.mediaDevices?.getUserMedia) return {
			ok: false,
			message: "المتصفح لا يدعم التقاط الميكروفون أو الرابط ليس HTTPS."
		};
		try {
			const stream = await navigator.mediaDevices.getUserMedia({ audio: {
				echoCancellation: true,
				noiseSuppression: true,
				autoGainControl: true
			} });
			this.probeStream = stream;
			const ctx = new (window.AudioContext || window.webkitAudioContext)();
			if (ctx.state === "suspended") await ctx.resume().catch(() => {});
			const src = ctx.createMediaStreamSource(stream);
			const analyser = ctx.createAnalyser();
			analyser.fftSize = 256;
			src.connect(analyser);
			const data = new Uint8Array(analyser.frequencyBinCount);
			this.probeCtx = ctx;
			this.probeTimer = window.setInterval(() => {
				analyser.getByteTimeDomainData(data);
				let sum = 0;
				for (let i = 0; i < data.length; i++) {
					const v = (data[i] - 128) / 128;
					sum += v * v;
				}
				const rms = Math.sqrt(sum / data.length);
				onLevel(Math.min(100, Math.round(rms * 260)));
			}, 100);
			return {
				ok: true,
				message: "الميكروفون يعمل بنجاح عبر السيرفر الصوتي الخاص! تحدث الآن لمشاهدة مؤشر الصوت الحي."
			};
		} catch (err) {
			const errName = err?.name || "";
			return {
				ok: false,
				message: errName === "NotAllowedError" || errName === "PermissionDeniedError" ? "تم رفض إذن الميكروفون في المتصفح — اسمح بالوصول للميكروفون من شريط العنوان." : `تعذر الوصول للميكروفون (${errName || "تأكد من توصيل المايك"}).`
			};
		}
	}
	stopMicProbe() {
		if (this.probeTimer !== null && typeof window !== "undefined") {
			window.clearInterval(this.probeTimer);
			this.probeTimer = null;
		}
		if (this.probeCtx) {
			this.probeCtx.close().catch(() => {});
			this.probeCtx = null;
		}
		if (this.probeStream) {
			this.probeStream.getTracks().forEach((t) => {
				try {
					t.stop();
				} catch {}
			});
			this.probeStream = null;
		}
	}
	async internalLeave(resetRoomTracking = true) {
		if (this.transport === "firestore_rtc" && this.activeRoomId && this.selfPeerId && this.activeUserId) publishFirestoreRtcSignal({
			roomId: this.activeRoomId,
			signalType: "leave",
			fromPeerId: this.selfPeerId,
			fromUserId: this.activeUserId,
			displayName: this.activeDisplayName
		});
		this.clearTransportTimers();
		this.stopVolumeLoop();
		await this.releaseLocalMic();
		Array.from(this.peers.keys()).forEach((peerId) => this.cleanupPeer(peerId));
		this.relayRequestedByPeers.clear();
		if (this.ws) {
			try {
				if (this.ws.readyState === WebSocket.OPEN) this.ws.send(JSON.stringify({ type: "voice:leave" }));
				this.ws.onopen = null;
				this.ws.onmessage = null;
				this.ws.onerror = null;
				this.ws.onclose = null;
				this.ws.close(1e3, "leave_room");
			} catch {}
			this.ws = null;
		}
		this.transport = "idle";
		this.selfPeerId = null;
		this.activeChannel = null;
		this.autoplayBlocked = false;
		if (resetRoomTracking) {
			this.activeRoomId = null;
			this.activeUserId = null;
			this.desiredOnSeat = false;
			this.desiredMuted = false;
		}
		this.updateStatus({
			state: "idle",
			channel: null,
			micError: null,
			errorMessage: null
		});
	}
	leaveRoom() {
		++this.joinEpoch;
		this.opChain = this.opChain.then(async () => {
			await this.internalLeave(true);
		});
		return this.opChain;
	}
};
var selfHostedVoice = new SelfHostedVoiceEngine();
// src/utils/agoraVoice.ts
var DEFAULT_AGORA_APP_ID = "d5c272d82b094c2f86ccc75df0819dfe";
var LEGACY_PLACEHOLDER_APP_ID = "467d6372146f4670b6c37a0364fb5fdd";
var AGORA_CONFIG_STORAGE_KEY = "auravoice_agora_config_v1";
function isValidAgoraAppId(value) {
	return /^[a-f0-9]{32}$/i.test(value.trim());
}
function normalizeAppId(value) {
	const clean = (value || "").trim();
	if (!clean || !isValidAgoraAppId(clean) || clean.toLowerCase() === LEGACY_PLACEHOLDER_APP_ID) return "";
	return clean;
}
function readStoredAgoraConfig() {
	if (typeof window === "undefined" || !window.localStorage) return {};
	try {
		const raw = window.localStorage.getItem(AGORA_CONFIG_STORAGE_KEY);
		if (!raw) return {};
		const parsed = JSON.parse(raw);
		return parsed && typeof parsed === "object" ? parsed : {};
	} catch {
		return {};
	}
}
function writeStoredAgoraConfig(cfg) {
	if (typeof window === "undefined" || !window.localStorage) return;
	try {
		if (!cfg) window.localStorage.removeItem(AGORA_CONFIG_STORAGE_KEY);
		else window.localStorage.setItem(AGORA_CONFIG_STORAGE_KEY, JSON.stringify(cfg));
	} catch {}
}
async function inflateDeflateBytes(compressed) {
	if (typeof DecompressionStream !== "undefined") {
		const ds = new DecompressionStream("deflate");
		const writer = ds.writable.getWriter();
		const copy = new Uint8Array(compressed.byteLength);
		copy.set(compressed);
		await writer.write(copy);
		await writer.close();
		const ab = await new Response(ds.readable).arrayBuffer();
		return new Uint8Array(ab);
	}
	throw new Error("DecompressionStream unavailable");
}
async function parseAgoraTokenInfo(rawToken) {
	const token = rawToken.trim();
	if (!token) return {
		valid: false,
		version: "unknown",
		isRtcToken: false,
		error: "التوكن فارغ"
	};
	if (!token.startsWith("007")) return {
		valid: false,
		version: token.slice(0, 3),
		isRtcToken: token.startsWith("006"),
		error: token.startsWith("006") ? "توكن بصيغة 006 قديمة" : "صيغة التوكن غير مدعومة (يجب أن يبدأ بـ 007)"
	};
	try {
		const b64 = token.slice(3);
		const binStr = atob(b64);
		const compressed = new Uint8Array(binStr.length);
		for (let i = 0; i < binStr.length; i++) compressed[i] = binStr.charCodeAt(i);
		const buf = await inflateDeflateBytes(compressed);
		const view = new DataView(buf.buffer, buf.byteOffset, buf.byteLength);
		const decoder = new TextDecoder();
		let off = 0;
		const readU16 = () => {
			if (off + 2 > buf.length) throw new Error("truncated");
			const v = view.getUint16(off, true);
			off += 2;
			return v;
		};
		const readU32 = () => {
			if (off + 4 > buf.length) throw new Error("truncated");
			const v = view.getUint32(off, true);
			off += 4;
			return v;
		};
		const readStr = () => {
			const len = readU16();
			if (off + len > buf.length) throw new Error("truncated");
			const s = decoder.decode(buf.subarray(off, off + len));
			off += len;
			return s;
		};
		const sigLen = readU16();
		off += sigLen;
		const appId = readStr();
		const issueTs = readU32();
		const expireSeconds = readU32();
		readU32();
		const serviceCount = readU16();
		let serviceType;
		let channelName;
		let uid;
		for (let i = 0; i < serviceCount; i++) {
			const sType = readU16();
			if (i === 0) serviceType = sType;
			const privCount = readU16();
			for (let j = 0; j < privCount; j++) {
				readU16();
				readU32();
			}
			if (sType === 1) {
				channelName = readStr();
				uid = readStr();
			} else if (sType === 2 || sType === 5) {
				if (off + 2 <= buf.length) uid = readStr();
			}
		}
		const expiresAtMs = (issueTs + expireSeconds) * 1e3;
		const expiresAtIso = new Date(expiresAtMs).toISOString();
		const isExpired = Date.now() > expiresAtMs;
		return {
			valid: isValidAgoraAppId(appId),
			version: "007",
			appId,
			issueTs,
			expireSeconds,
			expiresAtIso,
			isExpired,
			serviceType,
			serviceLabel: serviceType !== void 0 && {
				1: "RTC Voice/Video Token",
				2: "RTM Signaling Token",
				4: "FPA Token",
				5: "Agora Chat App Token",
				7: "APAAS Token"
			}[serviceType] || `Service #${serviceType}`,
			channelName,
			uid,
			isRtcToken: serviceType === 1
		};
	} catch (err) {
		return {
			valid: false,
			version: "007",
			isRtcToken: false,
			error: err instanceof Error ? err.message : "تعذر فك التوكن"
		};
	}
}
function getAgoraAppId() {
	const storedId = normalizeAppId(readStoredAgoraConfig().appId);
	if (storedId) return storedId;
	return normalizeAppId("") || "d5c272d82b094c2f86ccc75df0819dfe";
}
function getAgoraConfig() {
	const stored = readStoredAgoraConfig();
	return {
		provider: stored.provider === "agora" ? "agora" : "self_hosted",
		appId: getAgoraAppId(),
		rtcToken: stored.rtcToken?.trim() || void 0,
		note: stored.note,
		updatedAt: stored.updatedAt
	};
}
function formatAgoraChannelName(roomId) {
	return `auravoice_${roomId.replace(/[^a-zA-Z0-9_-]/g, "_").slice(0, 48) || "main"}`;
}
function sanitizeAgoraUid(userId) {
	return userId.trim().replace(/[^a-zA-Z0-9_-]/g, "_").slice(0, 64) || "guest_user";
}
async function fetchServerAgoraStatus() {
	if (typeof fetch === "undefined" || typeof window === "undefined") return null;
	try {
		const res = await fetch(resolveApiUrl("/api/agora/status"));
		if (!res.ok || !res.headers.get("content-type")?.includes("application/json")) return null;
		return await res.json();
	} catch {
		return null;
	}
}
async function saveServerAgoraCertificate(firebaseIdToken, appCertificate, appId) {
	if (typeof fetch === "undefined") return {
		ok: false,
		error: "Fetch API unavailable"
	};
	try {
		const res = await fetch(resolveApiUrl("/api/agora/certificate"), {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${firebaseIdToken}`
			},
			body: JSON.stringify({
				appCertificate: appCertificate.trim(),
				appId: appId?.trim() || void 0
			})
		});
		const data = await res.json();
		if (!res.ok) return {
			ok: false,
			error: data?.error || "تعذر حفظ الشهادة على الخادم."
		};
		return {
			ok: true,
			status: data
		};
	} catch {
		return {
			ok: false,
			error: "تعذر الاتصال بالخادم."
		};
	}
}
var AgoraVoiceEngine = class {
	constructor() {
		this.sdk = null;
		this.client = null;
		this.localAudioTrack = null;
		this.probeAudioTrack = null;
		this.probeTimer = null;
		this.remoteTracks = /* @__PURE__ */ new Map();
		this.remoteUserIds = /* @__PURE__ */ new Set();
		this.tokenRequiredCache = /* @__PURE__ */ new Map();
		this.runtimeConfig = getAgoraConfig();
		this.activeChannel = null;
		this.activeRoomId = null;
		this.activeRawUserId = null;
		this.activeDisplayName = void 0;
		this.activeUid = null;
		this.currentRole = "audience";
		this.remoteMuted = false;
		this.desiredOnSeat = false;
		this.desiredMuted = false;
		this.joinEpoch = 0;
		this.opChain = Promise.resolve();
		this.volumeListeners = /* @__PURE__ */ new Set();
		this.noticeListeners = /* @__PURE__ */ new Set();
		this.micStatusListeners = /* @__PURE__ */ new Set();
		this.statusListeners = /* @__PURE__ */ new Set();
		this.isLiveMicActive = false;
		this.autoplayBlocked = false;
		this.status = {
			state: "idle",
			provider: this.runtimeConfig.provider || "self_hosted",
			appId: this.runtimeConfig.provider === "agora" ? getAgoraAppId() : "self_hosted_webrtc",
			channel: null,
			remoteUsersCount: 0,
			autoplayBlocked: false,
			micActive: false,
			micError: null,
			errorMessage: null,
			requiresToken: false
		};
		selfHostedVoice.subscribeVolumes((vols) => {
			if (this.isSelfHosted()) this.emitVolumes(vols);
		});
		selfHostedVoice.subscribeNotices((msg) => {
			if (this.isSelfHosted()) this.emitNotice(msg);
		});
		selfHostedVoice.subscribeMicStatus((active) => {
			if (this.isSelfHosted()) this.setLiveMicActive(active);
		});
		selfHostedVoice.subscribeStatus((st) => {
			if (this.isSelfHosted()) {
				this.status = {
					...st,
					provider: "self_hosted"
				};
				this.statusListeners.forEach((cb) => cb({ ...this.status }));
			}
		});
	}
	isSelfHosted() {
		return (this.runtimeConfig.provider || "self_hosted") === "self_hosted";
	}
	updateStatus(patch) {
		this.status = {
			...this.status,
			...patch,
			provider: this.runtimeConfig.provider || "self_hosted",
			appId: this.isSelfHosted() ? "self_hosted_webrtc" : this.runtimeConfig.appId || getAgoraAppId(),
			micActive: this.isLiveMicActive,
			autoplayBlocked: this.autoplayBlocked,
			remoteUsersCount: this.remoteUserIds.size
		};
		this.statusListeners.forEach((cb) => cb({ ...this.status }));
	}
	emitVolumes(volumes) {
		this.volumeListeners.forEach((cb) => cb(volumes));
	}
	emitNotice(message) {
		this.noticeListeners.forEach((cb) => cb(message));
	}
	setLiveMicActive(active) {
		if (this.isLiveMicActive === active) return;
		this.isLiveMicActive = active;
		this.micStatusListeners.forEach((cb) => cb(active));
		if (!this.isSelfHosted()) this.updateStatus({});
	}
	getConfig() {
		return { ...this.runtimeConfig };
	}
	setConfig(next, persistLocal = true) {
		const prevProvider = this.runtimeConfig.provider || "self_hosted";
		const nextProvider = next.provider === "agora" || next.provider === "self_hosted" ? next.provider : prevProvider;
		const cleanAppId = normalizeAppId(next.appId) || this.runtimeConfig.appId || "d5c272d82b094c2f86ccc75df0819dfe";
		const cleanToken = next.rtcToken !== void 0 ? next.rtcToken.trim() || void 0 : this.runtimeConfig.rtcToken;
		const prevAppId = this.runtimeConfig.appId;
		const prevToken = this.runtimeConfig.rtcToken;
		this.tokenRequiredCache.clear();
		this.runtimeConfig = {
			provider: nextProvider,
			appId: cleanAppId,
			rtcToken: cleanToken,
			note: next.note ?? this.runtimeConfig.note,
			updatedAt: next.updatedAt || (/* @__PURE__ */ new Date()).toISOString()
		};
		if (persistLocal) writeStoredAgoraConfig(this.runtimeConfig);
		this.updateStatus({
			provider: nextProvider,
			appId: nextProvider === "self_hosted" ? "self_hosted_webrtc" : cleanAppId,
			requiresToken: false
		});
		if ((prevProvider !== nextProvider || prevAppId !== cleanAppId || prevToken !== cleanToken) && this.activeRoomId && this.activeRawUserId) this.reconnectActiveRoom();
		return { ...this.runtimeConfig };
	}
	resetConfig() {
		writeStoredAgoraConfig(null);
		this.tokenRequiredCache.clear();
		this.runtimeConfig = {
			provider: "self_hosted",
			appId: DEFAULT_AGORA_APP_ID,
			rtcToken: void 0,
			updatedAt: (/* @__PURE__ */ new Date()).toISOString()
		};
		this.updateStatus({
			provider: "self_hosted",
			appId: "self_hosted_webrtc",
			requiresToken: false
		});
		if (this.activeRoomId && this.activeRawUserId) this.reconnectActiveRoom();
		return { ...this.runtimeConfig };
	}
	subscribeVolumes(listener) {
		this.volumeListeners.add(listener);
		return () => {
			this.volumeListeners.delete(listener);
		};
	}
	subscribeNotices(listener) {
		this.noticeListeners.add(listener);
		return () => {
			this.noticeListeners.delete(listener);
		};
	}
	subscribeMicStatus(listener) {
		this.micStatusListeners.add(listener);
		listener(this.isLiveMicActive);
		return () => {
			this.micStatusListeners.delete(listener);
		};
	}
	subscribeStatus(listener) {
		this.statusListeners.add(listener);
		listener({ ...this.status });
		return () => {
			this.statusListeners.delete(listener);
		};
	}
	async ensureSdk() {
		if (this.sdk) return this.sdk;
		const sdk = (await __vitePreload(() => import("./AgoraRTC_N-production-DwbypW4G.js").then((m) => /* @__PURE__ */ __toESM(m.default, 1)), __vite__mapDeps([0,1]))).default;
		sdk.setLogLevel(4);
		sdk.onAutoplayFailed = () => {
			this.autoplayBlocked = true;
			this.updateStatus({});
			this.emitNotice("اضغط في أي مكان داخل الغرفة لتفعيل سماع الصوت المباشر.");
		};
		this.sdk = sdk;
		return sdk;
	}
	isTokenRequirementError(err) {
		const combined = `${err?.code || ""} ${err instanceof Error ? err.message : String(err)}`.toLowerCase();
		return combined.includes("dynamic use static key") || combined.includes("dynamic_use_static_key") || combined.includes("invalid_token") || combined.includes("token_expired");
	}
	translateAgoraJoinError(err) {
		const code = err?.code || "";
		const combined = `${code} ${err instanceof Error ? err.message : String(err)}`;
		if (this.isTokenRequirementError(err)) return "مشروع Agora مفعّل عليه وضع الشهادة (Token). أضف App Certificate على السيرفر أو فعّل السيرفر الصوتي الخاص.";
		if (combined.includes("UID_CONFLICT")) return "نفس الحساب متصل حالياً من جهاز أو تبويب آخر (UID_CONFLICT).";
		if (combined.includes("INVALID_VENDOR_KEY") || combined.includes("INVALID_PARAMS")) return "معرّف Agora App ID غير صالح.";
		if (combined.includes("CAN_NOT_GET_GATEWAY_SERVER")) return "تعذر الوصول إلى خوادم Agora (تحقق من صحة App ID أو الشهادة على السيرفر).";
		return `تعذر الاتصال بغرفة الصوت المباشر (${code || "خطأ اتصال"}).`;
	}
	async resolveJoinParams(appId, channel, uid) {
		const manualToken = this.runtimeConfig.rtcToken?.trim();
		if (manualToken) {
			const parsed = await parseAgoraTokenInfo(manualToken);
			if (parsed.valid && parsed.isRtcToken && !parsed.isExpired) {
				if (!parsed.appId || parsed.appId.toLowerCase() === appId.toLowerCase()) {
					if (!parsed.channelName || parsed.channelName === channel) return {
						token: manualToken,
						joinUid: !parsed.uid || parsed.uid === "0" ? null : parsed.uid
					};
				}
			} else if (manualToken.startsWith("006")) return {
				token: manualToken,
				joinUid: null
			};
		}
		if (typeof fetch !== "undefined" && typeof window !== "undefined") try {
			const controller = new AbortController();
			const timer = window.setTimeout(() => controller.abort(), 2500);
			const res = await fetch(resolveApiUrl(`/api/agora/token?appId=${encodeURIComponent(appId)}&channel=${encodeURIComponent(channel)}&uid=${encodeURIComponent(uid)}`), { signal: controller.signal });
			window.clearTimeout(timer);
			if (res.ok && res.headers.get("content-type")?.includes("application/json")) {
				const data = await res.json();
				if (data?.token && typeof data.token === "string") return {
					token: data.token,
					joinUid: uid
				};
			}
		} catch {}
		return {
			token: null,
			joinUid: uid
		};
	}
	attachClientEvents(client, uidStr) {
		client.on("user-joined", (user) => {
			this.remoteUserIds.add(String(user.uid));
			this.updateStatus({});
		});
		client.on("user-published", async (user, mediaType) => {
			if (mediaType !== "audio") return;
			try {
				await client.subscribe(user, mediaType);
				const track = user.audioTrack;
				if (track) {
					this.remoteUserIds.add(String(user.uid));
					this.remoteTracks.set(String(user.uid), track);
					track.setVolume(this.remoteMuted ? 0 : 100);
					track.play();
					this.updateStatus({});
				}
			} catch (err) {
				console.warn("[AgoraVoice] remote audio subscribe/play failed:", err);
			}
		});
		client.on("user-unpublished", (user, mediaType) => {
			if (mediaType !== "audio") return;
			this.remoteTracks.delete(String(user.uid));
		});
		client.on("user-left", (user) => {
			const id = String(user.uid);
			this.remoteTracks.delete(id);
			this.remoteUserIds.delete(id);
			this.updateStatus({});
		});
		client.on("connection-state-change", (curState, _revState, reason) => {
			if (curState === "DISCONNECTED" && reason === "UID_BANNED") {
				const msg = "تم فصل الاتصال الصوتي بسبب حظر الجلسة أو تعارض المعرف.";
				this.emitNotice(msg);
				this.updateStatus({
					state: "error",
					errorMessage: msg
				});
			} else if (curState === "CONNECTED") this.updateStatus({
				state: "connected",
				errorMessage: null,
				requiresToken: false
			});
		});
		client.on("volume-indicator", (volumes) => {
			const next = {};
			const sanitizedLocalUid = sanitizeAgoraUid(uidStr);
			volumes.forEach((item) => {
				const remoteId = String(item.uid);
				const key = item.uid === 0 || remoteId === uidStr || remoteId === sanitizedLocalUid ? uidStr : remoteId;
				next[key] = item.level;
			});
			this.emitVolumes(next);
		});
	}
	async teardownLocalMic(client) {
		const track = this.localAudioTrack;
		this.localAudioTrack = null;
		this.setLiveMicActive(false);
		if (track) {
			if (client && this.activeChannel) try {
				await client.unpublish([track]);
			} catch {}
			try {
				track.stop();
				track.close();
			} catch {}
		}
		if (client && this.activeChannel && this.currentRole !== "audience") try {
			await client.setClientRole("audience");
			this.currentRole = "audience";
		} catch {}
	}
	async applyMicState(onSeat, muted, capturedEpoch) {
		if (capturedEpoch !== this.joinEpoch) return;
		if (!this.client || !this.activeChannel) {
			if (!onSeat || muted) this.setLiveMicActive(false);
			return;
		}
		if (!onSeat) {
			this.updateStatus({ micError: null });
			await this.teardownLocalMic(this.client);
			return;
		}
		try {
			if (this.currentRole !== "host") {
				await this.client.setClientRole("host");
				this.currentRole = "host";
			}
			if (capturedEpoch !== this.joinEpoch || !this.client || !this.activeChannel) return;
			if (!this.localAudioTrack) {
				if (muted) {
					this.updateStatus({ micError: null });
					this.setLiveMicActive(false);
					return;
				}
				const AgoraRTC = await this.ensureSdk();
				if (capturedEpoch !== this.joinEpoch || !this.client || !this.activeChannel) return;
				const track = await AgoraRTC.createMicrophoneAudioTrack({
					AEC: true,
					ANS: true,
					AGC: true
				});
				if (capturedEpoch !== this.joinEpoch || !this.client || !this.activeChannel) {
					track.stop();
					track.close();
					return;
				}
				track.on("track-ended", () => {
					if (this.localAudioTrack === track) {
						this.setLiveMicActive(false);
						const msg = "تم فصل الميكروفون من المتصفح أو النظام.";
						this.updateStatus({ micError: msg });
						this.emitNotice(msg);
					}
				});
				this.localAudioTrack = track;
				await this.client.publish([track]);
				this.updateStatus({ micError: null });
				this.setLiveMicActive(true);
			} else {
				await this.localAudioTrack.setMuted(muted);
				this.updateStatus({ micError: null });
				this.setLiveMicActive(!muted);
			}
		} catch (err) {
			const errName = err?.code || (err instanceof Error ? err.name : "");
			let msg = `تعذر تشغيل الميكروفون المباشر (${errName || "خطأ بث"}).`;
			if (errName === "PERMISSION_DENIED" || errName === "NotAllowedError" || errName === "DEVICE_NOT_FOUND" || errName === "NotFoundError") msg = "يرجى السماح بصلاحية الميكروفون أو التأكد من توصيله.";
			else if (errName === "NotReadableError" || errName === "TrackStartError") msg = "الميكروفون مستخدم من تطبيق آخر حالياً.";
			else if (errName === "NOT_SUPPORTED" || errName === "SecurityError") msg = "المتصفح يمنع الميكروفون في هذا الإطار؛ افتح التطبيق في تبويب مستقل عبر HTTPS.";
			this.emitNotice(msg);
			this.updateStatus({ micError: msg });
			this.setLiveMicActive(false);
		}
	}
	joinRoom(roomId, userId, displayName) {
		this.activeRoomId = roomId;
		this.activeRawUserId = userId.trim() || sanitizeAgoraUid(userId);
		this.activeDisplayName = displayName;
		if (this.isSelfHosted()) {
			this.internalLeave(false);
			return selfHostedVoice.joinRoom(roomId, userId, displayName);
		}
		const channel = formatAgoraChannelName(roomId);
		const uid = sanitizeAgoraUid(userId);
		const rawUserId = userId.trim() || uid;
		const myEpoch = ++this.joinEpoch;
		this.opChain = this.opChain.then(async () => {
			await selfHostedVoice.leaveRoom();
			if (myEpoch !== this.joinEpoch) return;
			if (this.activeChannel === channel && this.activeUid === uid && this.client) return;
			await this.internalLeave(false);
			if (myEpoch !== this.joinEpoch) return;
			const appId = normalizeAppId(this.runtimeConfig.appId) || getAgoraAppId();
			if (!appId) return;
			const { token: joinToken, joinUid } = await this.resolveJoinParams(appId, channel, uid);
			if (myEpoch !== this.joinEpoch) return;
			const cacheKey = `${appId}:${joinToken ? "tok" : "notok"}`;
			const cachedNotice = this.tokenRequiredCache.get(cacheKey);
			if (cachedNotice) {
				this.updateStatus({
					state: "error",
					appId,
					channel,
					requiresToken: true,
					errorMessage: cachedNotice
				});
				return;
			}
			this.updateStatus({
				state: "connecting",
				appId,
				channel,
				micError: null,
				errorMessage: null,
				requiresToken: false
			});
			try {
				const AgoraRTC = await this.ensureSdk();
				if (myEpoch !== this.joinEpoch) return;
				const client = AgoraRTC.createClient({
					mode: "live",
					codec: "vp8"
				});
				this.client = client;
				this.attachClientEvents(client, rawUserId);
				await client.setClientRole("audience");
				this.currentRole = "audience";
				await client.join(appId, channel, joinToken, joinUid);
				if (myEpoch !== this.joinEpoch) {
					await client.leave().catch(() => {});
					if (this.client === client) this.client = null;
					return;
				}
				this.activeChannel = channel;
				this.activeUid = uid;
				client.enableAudioVolumeIndicator();
				this.updateStatus({
					state: "connected",
					appId,
					channel,
					requiresToken: false,
					errorMessage: null
				});
				if (this.desiredOnSeat) await this.applyMicState(this.desiredOnSeat, this.desiredMuted, myEpoch);
			} catch (err) {
				const notice = this.translateAgoraJoinError(err);
				const requiresToken = this.isTokenRequirementError(err);
				if (requiresToken) this.tokenRequiredCache.set(cacheKey, notice);
				this.emitNotice(notice);
				await this.internalLeave(false);
				this.updateStatus({
					state: "error",
					channel,
					requiresToken,
					errorMessage: notice
				});
			}
		});
		return this.opChain;
	}
	reconnectActiveRoom() {
		if (!this.activeRoomId || !this.activeRawUserId) return Promise.resolve();
		if (this.isSelfHosted()) {
			this.internalLeave(false);
			return selfHostedVoice.reconnectActiveRoom();
		}
		this.tokenRequiredCache.clear();
		const roomId = this.activeRoomId;
		const userId = this.activeRawUserId;
		const displayName = this.activeDisplayName;
		++this.joinEpoch;
		this.opChain = this.opChain.then(async () => {
			await this.internalLeave(false);
		});
		return this.joinRoom(roomId, userId, displayName);
	}
	retryMicPublish() {
		if (this.isSelfHosted()) return selfHostedVoice.retryMicPublish();
		const capturedEpoch = this.joinEpoch;
		this.opChain = this.opChain.then(async () => {
			if (this.desiredOnSeat) await this.applyMicState(true, this.desiredMuted, capturedEpoch);
		});
		return this.opChain;
	}
	syncMicState(onSeat, muted) {
		this.desiredOnSeat = onSeat;
		this.desiredMuted = muted;
		if (this.isSelfHosted()) return selfHostedVoice.syncMicState(onSeat, muted);
		const capturedEpoch = this.joinEpoch;
		this.opChain = this.opChain.then(async () => {
			await this.applyMicState(onSeat, muted, capturedEpoch);
		});
		return this.opChain;
	}
	setRemoteAudioMuted(muted) {
		this.remoteMuted = muted;
		selfHostedVoice.setRemoteAudioMuted(muted);
		this.remoteTracks.forEach((track) => {
			try {
				track.setVolume(muted ? 0 : 100);
			} catch {}
		});
	}
	resumeRemoteAudio(force = false) {
		if (this.isSelfHosted()) {
			selfHostedVoice.resumeRemoteAudio(force);
			return;
		}
		if (this.remoteMuted) return;
		if (!force && !this.autoplayBlocked) return;
		this.autoplayBlocked = false;
		this.remoteTracks.forEach((track) => {
			try {
				track.setVolume(100);
				track.play();
			} catch {}
		});
		this.updateStatus({});
	}
	primeFromUserGesture() {
		selfHostedVoice.primeFromUserGesture();
		if (!this.isSelfHosted()) this.resumeRemoteAudio(true);
	}
	async testConnection(roomId = "room_tyy", userId = "admin_tester") {
		if (this.isSelfHosted()) return selfHostedVoice.testConnection(roomId);
		const appId = normalizeAppId(this.runtimeConfig.appId) || getAgoraAppId();
		const channel = formatAgoraChannelName(roomId);
		const uid = sanitizeAgoraUid(`${userId}_${Date.now() % 1e4}`);
		try {
			const testClient = (await this.ensureSdk()).createClient({
				mode: "live",
				codec: "vp8"
			});
			await testClient.setClientRole("audience");
			const { token, joinUid } = await this.resolveJoinParams(appId, channel, uid);
			await testClient.join(appId, channel, token, joinUid);
			await testClient.leave().catch(() => {});
			return {
				ok: true,
				message: `تم الاتصال بنجاح بسيرفرات Agora الصوتية (${appId}) على القناة ${channel}.`,
				appId,
				channel
			};
		} catch (err) {
			return {
				ok: false,
				message: this.translateAgoraJoinError(err),
				appId,
				channel,
				requiresToken: this.isTokenRequirementError(err)
			};
		}
	}
	async startMicProbe(onLevel) {
		return selfHostedVoice.startMicProbe(onLevel);
	}
	stopMicProbe() {
		selfHostedVoice.stopMicProbe();
		if (this.probeTimer !== null && typeof window !== "undefined") {
			window.clearInterval(this.probeTimer);
			this.probeTimer = null;
		}
		if (this.probeAudioTrack) {
			try {
				this.probeAudioTrack.stop();
				this.probeAudioTrack.close();
			} catch {}
			this.probeAudioTrack = null;
		}
	}
	async internalLeave(resetRoomTracking = true) {
		const client = this.client;
		await this.teardownLocalMic(client);
		this.remoteTracks.forEach((track) => {
			try {
				track.stop();
			} catch {}
		});
		this.remoteTracks.clear();
		this.remoteUserIds.clear();
		if (client) try {
			client.removeAllListeners();
			await client.leave();
		} catch {}
		this.client = null;
		this.activeChannel = null;
		this.activeUid = null;
		if (resetRoomTracking) {
			this.activeRoomId = null;
			this.activeRawUserId = null;
			this.activeDisplayName = void 0;
			this.desiredOnSeat = false;
			this.desiredMuted = false;
		}
		this.currentRole = "audience";
		this.autoplayBlocked = false;
		if (!this.isSelfHosted()) {
			this.emitVolumes({});
			this.updateStatus({
				state: "idle",
				channel: null,
				micError: null,
				errorMessage: null
			});
		}
	}
	leaveRoom() {
		++this.joinEpoch;
		this.opChain = this.opChain.then(async () => {
			await Promise.all([this.internalLeave(true), selfHostedVoice.leaveRoom()]);
		});
		return this.opChain;
	}
};
var agoraVoice = new AgoraVoiceEngine();
// src/context/AppContext.tsx
var import_jsx_runtime = require_jsx_runtime();
var LEGACY_GIFT_ID_SET = new Set(LEGACY_MOCK_GIFT_IDS);
var LEGACY_STORE_ID_SET = new Set(LEGACY_MOCK_STORE_IDS);
function stripLegacyMockCosmetics(user) {
	let changed = false;
	const next = { ...user };
	if (next.activeFrameId && LEGACY_STORE_ID_SET.has(next.activeFrameId)) {
		next.activeFrameId = "";
		changed = true;
	}
	if (next.activeEntranceId && LEGACY_STORE_ID_SET.has(next.activeEntranceId)) {
		next.activeEntranceId = "";
		changed = true;
	}
	if (next.activeBadgeId && LEGACY_STORE_ID_SET.has(next.activeBadgeId)) {
		next.activeBadgeId = "";
		changed = true;
	}
	return changed ? next : user;
}
function sanitizeRealGifts(list) {
	return list.filter((g) => Boolean(g?.id) && !g.isStarterDefault && g.id !== "gift_starter_default" && !LEGACY_GIFT_ID_SET.has(g.id));
}
function sanitizeRealStoreItems(list) {
	return list.filter((item) => Boolean(item?.id) && !LEGACY_STORE_ID_SET.has(item.id));
}
function sanitizeBagGiftsRecord(raw) {
	const clean = {};
	Object.entries(raw || {}).forEach(([giftId, count]) => {
		if (giftId && !LEGACY_GIFT_ID_SET.has(giftId) && typeof count === "number" && count > 0) clean[giftId] = count;
	});
	return clean;
}
var ADMIN_EMAIL = "hhsiggidfhkgogfc@gmail.com".trim().toLowerCase();
var ADMIN_EMAILS = /* @__PURE__ */ new Set([ADMIN_EMAIL, "hhsiggidfhkgogfc@gmail.com"]);
var AppContext = (0, import_react.createContext)(void 0);
var AppProvider = ({ children }) => {
	const [lang, setLangState] = (0, import_react.useState)("ar");
	const [currentView, setCurrentViewRaw] = (0, import_react.useState)("user_app");
	const [activeTab, setActiveTab] = (0, import_react.useState)("room");
	const [users, setUsers] = (0, import_react.useState)(() => {
		const saved = localStorage.getItem("auravoice_users");
		if (saved) try {
			const parsed = JSON.parse(saved);
			if (Array.isArray(parsed) && parsed.some((u) => u.userCode === "2026091")) return parsed.map((u) => stripLegacyMockCosmetics(u));
		} catch (e) {}
		return INITIAL_USERS.map((u) => stripLegacyMockCosmetics(u));
	});
	const [currentUserId, setCurrentUserId] = (0, import_react.useState)("user_current");
	const [rooms, setRooms] = (0, import_react.useState)(() => {
		const saved = localStorage.getItem("auravoice_rooms_8mic_v4");
		if (saved) try {
			const parsed = JSON.parse(saved);
			if (Array.isArray(parsed) && parsed.some((r) => r.roomNo === "2026091" && r.seats.length === 8)) return parsed.map((r) => ({
				...r,
				seats: Array.isArray(r.seats) ? r.seats.map((s) => s.activeFrameId && LEGACY_STORE_ID_SET.has(s.activeFrameId) ? {
					...s,
					activeFrameId: ""
				} : s) : r.seats
			}));
		} catch (e) {}
		return INITIAL_ROOMS;
	});
	const [roomBackgrounds, setRoomBackgrounds] = (0, import_react.useState)(() => {
		try {
			const saved = localStorage.getItem("auravoice_room_backgrounds_v1");
			if (saved) {
				const parsed = JSON.parse(saved);
				if (Array.isArray(parsed) && parsed.length > 0) return parsed;
			}
		} catch {}
		return SNAPSHOT_ROOM_BACKGROUNDS;
	});
	const hasRemoteRoomBackgroundsRef = import_react.useRef(false);
	const [gifts, setGifts] = (0, import_react.useState)(() => {
		const saved = localStorage.getItem("auravoice_gifts");
		if (saved) try {
			const parsed = JSON.parse(saved);
			if (Array.isArray(parsed)) {
				const clean = sanitizeRealGifts(parsed);
				if (clean.length > 0) return clean;
			}
		} catch (e) {}
		const snapshotClean = sanitizeRealGifts(SNAPSHOT_GIFTS);
		return snapshotClean.length > 0 ? snapshotClean : [STARTER_DEFAULT_GIFT];
	});
	const [vipTiers] = (0, import_react.useState)(VIP_TIERS);
	const [storeItems, setStoreItems] = (0, import_react.useState)(() => {
		try {
			const saved = localStorage.getItem("auravoice_store_items_v1");
			if (saved) {
				const parsed = JSON.parse(saved);
				if (Array.isArray(parsed)) {
					const clean = sanitizeRealStoreItems(parsed);
					if (clean.length > 0) return clean;
				}
			}
		} catch {}
		return sanitizeRealStoreItems(SNAPSHOT_STORE_ITEMS);
	});
	const [agencies, setAgencies] = (0, import_react.useState)(() => {
		const saved = localStorage.getItem("auravoice_agencies");
		return saved ? JSON.parse(saved) : INITIAL_AGENCIES;
	});
	const [agents, setAgents] = (0, import_react.useState)(() => {
		const saved = localStorage.getItem("auravoice_agents");
		return saved ? JSON.parse(saved) : INITIAL_AGENTS;
	});
	const [staff, setStaff] = (0, import_react.useState)(() => {
		const saved = localStorage.getItem("auravoice_staff");
		return saved ? JSON.parse(saved) : INITIAL_STAFF;
	});
	const [transactions, setTransactions] = (0, import_react.useState)(() => {
		const saved = localStorage.getItem("auravoice_transactions");
		return saved ? JSON.parse(saved) : INITIAL_TRANSACTIONS;
	});
	const [activeRoomId, setActiveRoomId] = (0, import_react.useState)(null);
	const [activeRoomMessages, setActiveRoomMessages] = (0, import_react.useState)([]);
	const [flyingGift, setFlyingGift] = (0, import_react.useState)(null);
	const flyingTimerRef = import_react.useRef(null);
	const [entranceBanner, setEntranceBanner] = (0, import_react.useState)(null);
	const entranceTimerRef = import_react.useRef(null);
	const [luckyConfig, setLuckyConfig] = (0, import_react.useState)(() => {
		try {
			const saved = localStorage.getItem("auravoice_lucky_config_v1");
			if (saved) return JSON.parse(saved);
		} catch {}
		return {
			winRatePercent: 75,
			lowMultiplierWeight: 70,
			midMultiplierWeight: 22,
			highMultiplierWeight: 8,
			megaComboThreshold: 1e6
		};
	});
	const [agoraConfig, setAgoraConfig] = (0, import_react.useState)(() => getAgoraConfig());
	const [bagGifts, setBagGifts] = (0, import_react.useState)(() => {
		try {
			const saved = localStorage.getItem("auravoice_bag_gifts_v1");
			if (saved) {
				const parsed = JSON.parse(saved);
				if (parsed && typeof parsed === "object") return sanitizeBagGiftsRecord(parsed);
			}
		} catch {}
		return {};
	});
	const [ownedStoreInventory, setOwnedStoreInventory] = (0, import_react.useState)(() => {
		try {
			const saved = localStorage.getItem("auravoice_owned_store_inventory_v1");
			if (saved) {
				const parsed = JSON.parse(saved);
				if (parsed && typeof parsed === "object") return parsed;
			}
		} catch {}
		return {};
	});
	(0, import_react.useEffect)(() => {
		try {
			localStorage.setItem("auravoice_owned_store_inventory_v1", JSON.stringify(ownedStoreInventory));
		} catch {}
	}, [ownedStoreInventory]);
	const [globalJackpotBanner, setGlobalJackpotBanner] = (0, import_react.useState)(null);
	const jackpotTimerRef = import_react.useRef(null);
	const lastJackpotIdRef = import_react.useRef(null);
	const [activeModal, setActiveModal] = (0, import_react.useState)("none");
	const [viewingProfileUser, setViewingProfileUser] = (0, import_react.useState)(null);
	const [firebaseUser, setFirebaseUser] = (0, import_react.useState)(null);
	const [authReady, setAuthReady] = (0, import_react.useState)(false);
	const [authLoading, setAuthLoading] = (0, import_react.useState)(false);
	const [authError, setAuthError] = (0, import_react.useState)(null);
	const [needsProfileCompletion, setNeedsProfileCompletion] = (0, import_react.useState)(false);
	const [guestAccessBypass, setGuestAccessBypass] = (0, import_react.useState)(false);
	const [firebaseStatus, setFirebaseStatus] = (0, import_react.useState)({
		isConfigured: true,
		isConnected: false,
		isTesting: false,
		projectId: firebaseConfig.projectId,
		databaseId: firebaseConfig.firestoreDatabaseId || "(default)"
	});
	const [isCloudSyncing, setIsCloudSyncing] = (0, import_react.useState)(false);
	const [cloudMessage, setCloudMessage] = (0, import_react.useState)(null);
	const hasBootstrappedRef = import_react.useRef(false);
	const pendingEmailRegistrationRef = import_react.useRef(false);
	const [adminSession, setAdminSession] = (0, import_react.useState)(null);
	const adminSessionRef = import_react.useRef(null);
	adminSessionRef.current = adminSession;
	const [adminAuthStatus, setAdminAuthStatus] = (0, import_react.useState)(null);
	const activeRoomIdRef = import_react.useRef(activeRoomId);
	activeRoomIdRef.current = activeRoomId;
	const processedCommandIdsRef = import_react.useRef(/* @__PURE__ */ new Set());
	const refreshAdminAuthStatus = import_react.useCallback(async () => {
		try {
			const res = await fetch(resolveApiUrl("/api/admin/auth/status"), { cache: "no-store" });
			if (!res.ok || !res.headers.get("content-type")?.includes("application/json")) return;
			const data = await res.json();
			setAdminAuthStatus({
				configured: Boolean(data.configured),
				source: data.source === "env" || data.source === "claimed" || data.source === "unclaimed" ? data.source : "unknown",
				emailHint: typeof data.emailHint === "string" ? data.emailHint : ""
			});
		} catch {}
	}, []);
	(0, import_react.useEffect)(() => {
		refreshAdminAuthStatus();
	}, [refreshAdminAuthStatus]);
	const isAdminAccount = Boolean(adminSession || firebaseUser && !guestAccessBypass && firebaseUser.email && (ADMIN_EMAILS.has(firebaseUser.email.trim().toLowerCase()) || adminAuthStatus?.emailHint && firebaseUser.email.trim().toLowerCase() === adminAuthStatus.emailHint.trim().toLowerCase()));
	const setCurrentView = (view) => {
		if (view === "admin_dashboard" && !isAdminAccount) {
			setCurrentViewRaw("user_app");
			return;
		}
		setCurrentViewRaw(view);
	};
	(0, import_react.useEffect)(() => {
		if (currentView === "admin_dashboard" && !isAdminAccount) setCurrentViewRaw("user_app");
	}, [currentView, isAdminAccount]);
	const upsertUserIntoState = (userObj) => {
		setUsers((prev) => {
			if (prev.some((u) => u.id === userObj.id)) return prev.map((u) => u.id === userObj.id ? {
				...u,
				...userObj
			} : u);
			return [userObj, ...prev];
		});
	};
	const buildAuthenticatedVoiceUser = (params) => {
		const cleanName = params.displayName.trim() || "مستخدم صوتي";
		const username = `${cleanName.toLowerCase().replace(/[^a-z0-9_]/g, "_").replace(/_+/g, "_").replace(/^_|_$/g, "") || "voice_user"}_${params.uid.slice(0, 5)}`;
		const userCode = String(Math.floor(1e6 + Math.random() * 8999999));
		const safeAvatar = params.avatar && params.avatar.trim().length > 0 && params.avatar.trim().length <= 1024 ? params.avatar.trim() : buildVoiceAvatarSvg(params.gender, cleanName);
		return {
			id: params.uid,
			userCode,
			username,
			displayName: cleanName,
			avatar: safeAvatar,
			coverImage: "",
			bio: "عضو جديد في غرف الدردشة الصوتية 🎙️",
			age: params.age,
			gender: params.gender,
			level: 1,
			vipLevel: 0,
			coins: 5e3,
			diamonds: 0,
			country: params.country,
			countryFlag: params.countryFlag,
			followersCount: 0,
			followingCount: 0,
			friendsCount: 0,
			likesCount: 0,
			visitorsCount: 0,
			isMuted: false,
			isBanned: false,
			online: true,
			createdAt: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10)
		};
	};
	const currentUser = users.find((u) => u.id === currentUserId) || users[0];
	const rawActiveRoom = rooms.find((r) => r.id === activeRoomId) || null;
	const activeRoom = rawActiveRoom ? {
		...rawActiveRoom,
		seatCount: 8,
		seats: Array.from({ length: 8 }, (_, idx) => {
			const existing = rawActiveRoom.seats?.[idx];
			if (existing && (!existing.userId || !existing.userId.startsWith("u_s"))) return {
				...existing,
				index: idx,
				heartPoints: existing.heartPoints ?? 0
			};
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
		})
	} : null;
	const t = translations[lang];
	(0, import_react.useEffect)(() => {
		localStorage.setItem("auravoice_users", JSON.stringify(users));
	}, [users]);
	(0, import_react.useEffect)(() => {
		localStorage.setItem("auravoice_rooms_8mic_v4", JSON.stringify(rooms));
	}, [rooms]);
	(0, import_react.useEffect)(() => {
		localStorage.setItem("auravoice_gifts", JSON.stringify(sanitizeRealGifts(gifts)));
	}, [gifts]);
	(0, import_react.useEffect)(() => {
		localStorage.setItem("auravoice_agencies", JSON.stringify(agencies));
	}, [agencies]);
	(0, import_react.useEffect)(() => {
		localStorage.setItem("auravoice_agents", JSON.stringify(agents));
	}, [agents]);
	(0, import_react.useEffect)(() => {
		localStorage.setItem("auravoice_transactions", JSON.stringify(transactions));
	}, [transactions]);
	(0, import_react.useEffect)(() => {
		localStorage.setItem("auravoice_lucky_config_v1", JSON.stringify(luckyConfig));
	}, [luckyConfig]);
	(0, import_react.useEffect)(() => {
		localStorage.setItem("auravoice_bag_gifts_v1", JSON.stringify(bagGifts));
	}, [bagGifts]);
	(0, import_react.useEffect)(() => {
		localStorage.setItem("auravoice_store_items_v1", JSON.stringify(storeItems));
	}, [storeItems]);
	(0, import_react.useEffect)(() => {
		localStorage.setItem("auravoice_room_backgrounds_v1", JSON.stringify(roomBackgrounds));
	}, [roomBackgrounds]);
	(0, import_react.useEffect)(() => {
		const unsubStatus = subscribeToFirebaseStatus((status) => {
			setFirebaseStatus(status);
		});
		const unsubAuth = subscribeToAuthState((fbUser) => {
			setFirebaseUser(fbUser);
			setAuthReady(true);
			if (!fbUser) {
				setNeedsProfileCompletion(false);
				return;
			}
			if (pendingEmailRegistrationRef.current || adminSessionRef.current) return;
			(async () => {
				const remoteProfile = await fetchAuraUserById(fbUser.uid);
				const localProfile = (() => {
					try {
						const raw = localStorage.getItem("auravoice_users");
						return raw ? JSON.parse(raw) : [];
					} catch {
						return [];
					}
				})().find((u) => u.id === fbUser.uid) || null;
				const resolved = remoteProfile || localProfile;
				if (resolved && resolved.country && resolved.gender && typeof resolved.age === "number") {
					upsertUserIntoState({
						...resolved,
						online: true
					});
					setCurrentUserId(resolved.id);
					setNeedsProfileCompletion(false);
					setGuestAccessBypass(false);
				} else setNeedsProfileCompletion(true);
			})();
		});
		return () => {
			unsubStatus();
			unsubAuth();
		};
	}, []);
	const serverCatalogRef = import_react.useRef({
		loaded: false,
		gifts: [],
		storeItems: [],
		roomBackgrounds: [],
		deletedGiftIds: [],
		deletedStoreIds: [],
		deletedBackgroundIds: []
	});
	const firestoreCatalogRef = import_react.useRef({
		gifts: [],
		storeItems: [],
		roomBackgrounds: []
	});
	const applyMergedCatalog = import_react.useCallback(() => {
		const mergeByTimestamp = (primary, secondary, deletedIds) => {
			const deletedSet = new Set(deletedIds);
			const byId = /* @__PURE__ */ new Map();
			for (const item of primary) if (item?.id && !deletedSet.has(item.id)) byId.set(item.id, item);
			for (const item of secondary) {
				if (!item?.id || deletedSet.has(item.id)) continue;
				const existing = byId.get(item.id);
				if (!existing) {
					byId.set(item.id, item);
					continue;
				}
				const existingTs = existing.updatedAt ? Date.parse(existing.updatedAt) || 0 : 0;
				if ((item.updatedAt ? Date.parse(item.updatedAt) || 0 : 0) > existingTs) byId.set(item.id, item);
			}
			return Array.from(byId.values());
		};
		const mergedGifts = sanitizeRealGifts(mergeByTimestamp(serverCatalogRef.current.gifts, firestoreCatalogRef.current.gifts, serverCatalogRef.current.deletedGiftIds));
		if (serverCatalogRef.current.loaded || firestoreCatalogRef.current.gifts.length > 0) setGifts(mergedGifts.length > 0 ? mergedGifts : [STARTER_DEFAULT_GIFT]);
		const mergedStore = sanitizeRealStoreItems(mergeByTimestamp(serverCatalogRef.current.storeItems, firestoreCatalogRef.current.storeItems, serverCatalogRef.current.deletedStoreIds));
		if (serverCatalogRef.current.loaded || firestoreCatalogRef.current.storeItems.length > 0) setStoreItems(mergedStore);
		const mergedBgs = mergeByTimestamp(serverCatalogRef.current.roomBackgrounds, firestoreCatalogRef.current.roomBackgrounds, serverCatalogRef.current.deletedBackgroundIds);
		if (serverCatalogRef.current.loaded || hasRemoteRoomBackgroundsRef.current) setRoomBackgrounds(mergedBgs);
	}, []);
	const lastServerVersionsRef = import_react.useRef({
		catalog: 0,
		dashboard: 0
	});
	const handleServerCatalogPayload = import_react.useCallback((payload) => {
		if (!payload || typeof payload !== "object") return;
		if (typeof payload.version === "number") lastServerVersionsRef.current.catalog = payload.version;
		serverCatalogRef.current = {
			loaded: true,
			gifts: Array.isArray(payload.gifts) ? sanitizeRealGifts(payload.gifts) : [],
			storeItems: Array.isArray(payload.storeItems) ? sanitizeRealStoreItems(payload.storeItems) : [],
			roomBackgrounds: Array.isArray(payload.roomBackgrounds) ? payload.roomBackgrounds : [],
			deletedGiftIds: Array.isArray(payload.deletedGiftIds) ? payload.deletedGiftIds.map(String) : serverCatalogRef.current.deletedGiftIds,
			deletedStoreIds: Array.isArray(payload.deletedStoreIds) ? payload.deletedStoreIds.map(String) : serverCatalogRef.current.deletedStoreIds,
			deletedBackgroundIds: Array.isArray(payload.deletedBackgroundIds) ? payload.deletedBackgroundIds.map(String) : serverCatalogRef.current.deletedBackgroundIds
		};
		applyMergedCatalog();
	}, [applyMergedCatalog]);
	const applyServerDashboardState = import_react.useCallback((state) => {
		if (!state || typeof state !== "object") return;
		if (state.luckyConfig && typeof state.luckyConfig === "object" && !Array.isArray(state.luckyConfig)) setLuckyConfig((prev) => ({
			...prev,
			...state.luckyConfig
		}));
		if (state.agoraConfig && typeof state.agoraConfig === "object" && !Array.isArray(state.agoraConfig)) {
			const applied = agoraVoice.setConfig(state.agoraConfig, true);
			setAgoraConfig(applied);
		}
		if (state.userOverrides && typeof state.userOverrides === "object" && !Array.isArray(state.userOverrides)) {
			const overrides = state.userOverrides;
			if (Object.entries(overrides).length > 0) setUsers((prev) => prev.map((u) => {
				const patch = overrides[u.id];
				if (!patch || typeof patch !== "object") return u;
				return {
					...u,
					...typeof patch.coins === "number" ? { coins: Math.max(0, patch.coins) } : {},
					...typeof patch.diamonds === "number" ? { diamonds: Math.max(0, patch.diamonds) } : {},
					...typeof patch.isBanned === "boolean" ? { isBanned: patch.isBanned } : {},
					...typeof patch.isMuted === "boolean" ? { isMuted: patch.isMuted } : {},
					...typeof patch.vipLevel === "number" ? { vipLevel: patch.vipLevel } : {}
				};
			}));
		}
		const closedRoomIds = Array.isArray(state.closedRoomIds) ? state.closedRoomIds.map(String) : [];
		const closedSet = new Set(closedRoomIds);
		if (activeRoomIdRef.current && closedSet.has(activeRoomIdRef.current)) {
			setActiveRoomId(null);
			setActiveRoomMessages([]);
			setFlyingGift(null);
			setEntranceBanner(null);
		}
		const customRooms = Array.isArray(state.customRooms) ? state.customRooms : [];
		const roomModOverrides = state.roomModOverrides && typeof state.roomModOverrides === "object" ? state.roomModOverrides : {};
		if (closedSet.size > 0 || customRooms.length > 0 || Object.keys(roomModOverrides).length > 0) setRooms((prev) => {
			const byId = /* @__PURE__ */ new Map();
			for (const r of prev) if (!closedSet.has(r.id)) byId.set(r.id, r);
			for (const cr of customRooms) if (cr?.id && !closedSet.has(cr.id) && !byId.has(cr.id)) byId.set(cr.id, cr);
			return Array.from(byId.values()).map((r) => {
				const modPatch = roomModOverrides[r.id];
				if (!modPatch) return r;
				return {
					...r,
					...Array.isArray(modPatch.moderators) ? { moderators: modPatch.moderators } : {},
					...Array.isArray(modPatch.bannedUserIds) ? { bannedUserIds: modPatch.bannedUserIds } : {}
				};
			});
		});
		if (Array.isArray(state.agents) && state.agents.length > 0) {
			const serverAgents = state.agents;
			setAgents((prev) => {
				const byId = /* @__PURE__ */ new Map();
				prev.forEach((a) => byId.set(a.id, a));
				serverAgents.forEach((a) => {
					if (a?.id) byId.set(a.id, a);
				});
				return Array.from(byId.values());
			});
		}
		if (state.agencyStatusOverrides && typeof state.agencyStatusOverrides === "object" && !Array.isArray(state.agencyStatusOverrides)) {
			const agencyOv = state.agencyStatusOverrides;
			setAgencies((prev) => prev.map((ag) => {
				const patch = agencyOv[ag.id];
				if (patch?.status === "active" || patch?.status === "pending" || patch?.status === "suspended") return {
					...ag,
					status: patch.status
				};
				return ag;
			}));
		}
		if (Array.isArray(state.adminTransactions) && state.adminTransactions.length > 0) {
			const serverTxs = state.adminTransactions;
			setTransactions((prev) => {
				const seen = new Set(prev.map((t) => t.id));
				const incoming = serverTxs.filter((tx) => tx?.id && !seen.has(tx.id));
				return incoming.length > 0 ? [...incoming, ...prev] : prev;
			});
		}
		if (Array.isArray(state.recentCommands)) {
			for (const c of state.recentCommands) if (c?.id) processedCommandIdsRef.current.add(String(c.id));
		}
	}, []);
	const applyDashboardCommand = import_react.useCallback((cmd) => {
		if (!cmd || typeof cmd !== "object") return;
		const cmdId = typeof cmd.id === "string" ? cmd.id : "";
		const cmdType = typeof cmd.type === "string" ? cmd.type : "";
		const payload = cmd.payload && typeof cmd.payload === "object" && !Array.isArray(cmd.payload) ? cmd.payload : {};
		if (!cmdId || !cmdType || processedCommandIdsRef.current.has(cmdId)) return;
		processedCommandIdsRef.current.add(cmdId);
		if (cmdType === "ADD_BALANCE") {
			const userId = typeof payload.userId === "string" ? payload.userId : "";
			const absCoins = typeof payload.coins === "number" ? payload.coins : void 0;
			const absDiamonds = typeof payload.diamonds === "number" ? payload.diamonds : void 0;
			const coinsDelta = typeof payload.coinsDelta === "number" ? payload.coinsDelta : 0;
			const diamondsDelta = typeof payload.diamondsDelta === "number" ? payload.diamondsDelta : 0;
			if (userId) setUsers((prev) => prev.map((u) => {
				if (u.id !== userId) return u;
				return {
					...u,
					coins: absCoins !== void 0 ? Math.max(0, absCoins) : Math.max(0, u.coins + coinsDelta),
					diamonds: absDiamonds !== void 0 ? Math.max(0, absDiamonds) : Math.max(0, u.diamonds + diamondsDelta)
				};
			}));
			if (payload.tx && typeof payload.tx === "object" && !Array.isArray(payload.tx)) {
				const txObj = payload.tx;
				if (txObj.id) setTransactions((prev) => prev.some((t) => t.id === txObj.id) ? prev : [txObj, ...prev]);
			}
		} else if (cmdType === "TOGGLE_BAN") {
			const userId = typeof payload.userId === "string" ? payload.userId : "";
			if (userId && typeof payload.isBanned === "boolean") {
				const nextBanned = payload.isBanned;
				setUsers((prev) => prev.map((u) => u.id === userId ? {
					...u,
					isBanned: nextBanned
				} : u));
			}
		} else if (cmdType === "TOGGLE_MUTE") {
			const userId = typeof payload.userId === "string" ? payload.userId : "";
			if (userId && typeof payload.isMuted === "boolean") {
				const nextMuted = payload.isMuted;
				setUsers((prev) => prev.map((u) => u.id === userId ? {
					...u,
					isMuted: nextMuted
				} : u));
			}
		} else if (cmdType === "SET_VIP_LEVEL") {
			const userId = typeof payload.userId === "string" ? payload.userId : "";
			if (userId && typeof payload.vipLevel === "number") {
				const lvl = payload.vipLevel;
				setUsers((prev) => prev.map((u) => u.id === userId ? {
					...u,
					vipLevel: lvl
				} : u));
			}
		} else if (cmdType === "CLOSE_ROOM") {
			const roomId = typeof payload.roomId === "string" ? payload.roomId : "";
			if (roomId) {
				if (activeRoomIdRef.current === roomId) {
					setActiveRoomId(null);
					setActiveRoomMessages([]);
					setFlyingGift(null);
					setEntranceBanner(null);
				}
				setRooms((prev) => prev.filter((r) => r.id !== roomId));
			}
		} else if (cmdType === "CREATE_ROOM") {
			const room = payload.room && typeof payload.room === "object" && !Array.isArray(payload.room) ? payload.room : null;
			if (room?.id) setRooms((prev) => [room, ...prev.filter((r) => r.id !== room.id)]);
		} else if (cmdType === "TOGGLE_ROOM_MODERATOR") {
			const roomId = typeof payload.roomId === "string" ? payload.roomId : "";
			if (roomId) {
				const moderators = Array.isArray(payload.moderators) ? payload.moderators.map(String) : null;
				const bannedUserIds = Array.isArray(payload.bannedUserIds) ? payload.bannedUserIds.map(String) : null;
				setRooms((prev) => prev.map((r) => r.id === roomId ? {
					...r,
					...moderators ? { moderators } : {},
					...bannedUserIds ? { bannedUserIds } : {}
				} : r));
			}
		} else if (cmdType === "UPDATE_LUCKY_CONFIG") {
			if (payload.luckyConfig && typeof payload.luckyConfig === "object") setLuckyConfig((prev) => ({
				...prev,
				...payload.luckyConfig
			}));
		} else if (cmdType === "UPDATE_AGORA_CONFIG") {
			if (payload.agoraConfig && typeof payload.agoraConfig === "object") {
				const applied = agoraVoice.setConfig(payload.agoraConfig, true);
				setAgoraConfig(applied);
			}
		} else if (cmdType === "CREATE_AGENT" || cmdType === "TOPUP_AGENT") {
			const agent = payload.agent && typeof payload.agent === "object" && !Array.isArray(payload.agent) ? payload.agent : null;
			if (agent?.id) setAgents((prev) => [agent, ...prev.filter((a) => a.id !== agent.id)]);
		} else if (cmdType === "UPDATE_AGENCY_STATUS") {
			const agencyId = typeof payload.agencyId === "string" ? payload.agencyId : "";
			const status = payload.status;
			if (agencyId && (status === "active" || status === "pending" || status === "suspended")) setAgencies((prev) => prev.map((a) => a.id === agencyId ? {
				...a,
				status
			} : a));
		} else if (cmdType === "PURGE_MOCK_CATALOGS") {
			setGifts((prev) => {
				const clean = sanitizeRealGifts(prev);
				return clean.length > 0 ? clean : [STARTER_DEFAULT_GIFT];
			});
			setStoreItems((prev) => sanitizeRealStoreItems(prev));
			setBagGifts((prev) => sanitizeBagGiftsRecord(prev));
			setUsers((prev) => prev.map((u) => stripLegacyMockCosmetics(u)));
		}
	}, []);
	(0, import_react.useEffect)(() => {
		let closed = false;
		let eventSource = null;
		let reconnectTimer = null;
		const isServerlessModeRef = { active: false };
		const fetchServerStateNow = async () => {
			if (isServerlessModeRef.active) return;
			try {
				const res = await fetch(resolveApiUrl("/api/server/state"), { cache: "no-store" });
				if (!res.ok || !res.headers.get("content-type")?.includes("application/json")) return;
				const data = await res.json();
				if (!closed) {
					if (data.catalog) handleServerCatalogPayload(data.catalog);
					if (data.dashboardState) {
						if (typeof data.dashboardState.version === "number") lastServerVersionsRef.current.dashboard = data.dashboardState.version;
						applyServerDashboardState(data.dashboardState);
					}
				}
			} catch {}
		};
		const fetchServerCatalogNow = async () => {
			try {
				const res = await fetch(resolveApiUrl("/api/catalog"), { cache: "no-store" });
				if (!res.ok || !res.headers.get("content-type")?.includes("application/json")) return false;
				const data = await res.json();
				if (data?.mode === "serverless_cloud") isServerlessModeRef.active = true;
				if (!closed) handleServerCatalogPayload(data);
				return true;
			} catch {
				return false;
			}
		};
		const connectCatalogStream = () => {
			if (closed || isServerlessModeRef.active || typeof EventSource === "undefined") return;
			try {
				eventSource?.close();
				const es = new EventSource(resolveApiUrl("/api/catalog/stream"));
				eventSource = es;
				const onCatalogEvent = (evt) => {
					try {
						const parsed = JSON.parse(evt.data);
						if (!closed) handleServerCatalogPayload(parsed);
					} catch {}
				};
				const onServerStateEvent = (evt) => {
					try {
						const parsed = JSON.parse(evt.data);
						if (!closed) {
							if (typeof parsed?.version === "number") lastServerVersionsRef.current.dashboard = parsed.version;
							applyServerDashboardState(parsed);
						}
					} catch {}
				};
				const onDashboardCommandEvent = (evt) => {
					try {
						const parsed = JSON.parse(evt.data);
						if (!closed) applyDashboardCommand(parsed);
					} catch {}
				};
				es.addEventListener("catalog:init", onCatalogEvent);
				es.addEventListener("catalog:update", onCatalogEvent);
				es.addEventListener("server:state", onServerStateEvent);
				es.addEventListener("dashboard:command", onDashboardCommandEvent);
				es.onerror = () => {
					es.close();
					if (eventSource === es) eventSource = null;
					if (!closed && !isServerlessModeRef.active && !reconnectTimer) reconnectTimer = window.setTimeout(() => {
						reconnectTimer = null;
						fetchServerCatalogNow().then((ok) => {
							if (ok && !isServerlessModeRef.active) {
								fetchServerStateNow();
								connectCatalogStream();
							}
						});
					}, 5e3);
				};
			} catch {}
		};
		fetchServerCatalogNow().then((ok) => {
			if (ok && !isServerlessModeRef.active) {
				fetchServerStateNow();
				connectCatalogStream();
			}
		});
		const unsubWsSync = selfHostedVoice.subscribeServerSync((ev) => {
			if (closed) return;
			if (ev.type === "server:catalog_update" && ev.catalog) handleServerCatalogPayload(ev.catalog);
			else if (ev.type === "server:dashboard_command") {
				if (ev.command) applyDashboardCommand(ev.command);
				if (ev.state) {
					if (typeof ev.state.version === "number") lastServerVersionsRef.current.dashboard = ev.state.version;
					applyServerDashboardState(ev.state);
				}
			}
		});
		const heartbeatPoll = window.setInterval(() => {
			if (closed || document.visibilityState !== "visible") return;
			if (isServerlessModeRef.active) {
				fetchServerCatalogNow();
				return;
			}
			(async () => {
				try {
					const res = await fetch(resolveApiUrl("/api/health"), { cache: "no-store" });
					if (!res.ok || !res.headers.get("content-type")?.includes("application/json")) return;
					const health = await res.json();
					if (health?.mode === "serverless_cloud") {
						isServerlessModeRef.active = true;
						return;
					}
					const catChanged = typeof health.catalogVersion === "number" && health.catalogVersion !== lastServerVersionsRef.current.catalog;
					const dashChanged = typeof health.dashboardVersion === "number" && health.dashboardVersion !== lastServerVersionsRef.current.dashboard;
					if (catChanged || dashChanged) await fetchServerStateNow();
				} catch {}
			})();
		}, 5e3);
		const handleResumeSync = () => {
			if (document.visibilityState === "visible") {
				fetchServerCatalogNow();
				fetchServerStateNow();
				if (!isServerlessModeRef.active && (!eventSource || eventSource.readyState === EventSource.CLOSED)) connectCatalogStream();
			}
		};
		const handleOnline = () => {
			fetchServerCatalogNow();
			fetchServerStateNow();
			if (!isServerlessModeRef.active && (!eventSource || eventSource.readyState === EventSource.CLOSED)) connectCatalogStream();
		};
		document.addEventListener("visibilitychange", handleResumeSync);
		window.addEventListener("online", handleOnline);
		return () => {
			closed = true;
			window.clearInterval(heartbeatPoll);
			unsubWsSync();
			document.removeEventListener("visibilitychange", handleResumeSync);
			window.removeEventListener("online", handleOnline);
			if (reconnectTimer) window.clearTimeout(reconnectTimer);
			eventSource?.close();
		};
	}, [
		handleServerCatalogPayload,
		applyServerDashboardState,
		applyDashboardCommand
	]);
	(0, import_react.useEffect)(() => {
		const unsubPublic = subscribeToPublicAuraCollections({
			onRooms: (remoteRooms) => setRooms(remoteRooms),
			onRoomBackgrounds: (remoteBgs) => {
				if (remoteBgs.length > 0) hasRemoteRoomBackgroundsRef.current = true;
				firestoreCatalogRef.current.roomBackgrounds = remoteBgs;
				applyMergedCatalog();
			},
			onGifts: (remoteGifts) => {
				firestoreCatalogRef.current.gifts = sanitizeRealGifts(remoteGifts);
				applyMergedCatalog();
			},
			onStoreItems: (remoteStore) => {
				firestoreCatalogRef.current.storeItems = sanitizeRealStoreItems(remoteStore);
				applyMergedCatalog();
			},
			onAgencies: (remoteAgencies) => setAgencies(remoteAgencies),
			onLuckyConfig: (remoteLucky) => setLuckyConfig(remoteLucky),
			onAgoraConfig: (remoteAgora) => {
				const normalizedRemote = remoteAgora.provider ? remoteAgora : {
					...remoteAgora,
					provider: "self_hosted"
				};
				const applied = agoraVoice.setConfig(normalizedRemote, true);
				setAgoraConfig(applied);
			},
			onJackpotBanner: (remoteBanner) => {
				if (lastJackpotIdRef.current === remoteBanner.id) return;
				lastJackpotIdRef.current = remoteBanner.id;
				if (jackpotTimerRef.current) window.clearTimeout(jackpotTimerRef.current);
				sound.playLuckySplashJackpot();
				setGlobalJackpotBanner(remoteBanner);
				jackpotTimerRef.current = window.setTimeout(() => {
					setGlobalJackpotBanner(null);
					jackpotTimerRef.current = null;
				}, 3e3);
			},
			onDashboardSync: (pulse) => {
				applyDashboardCommand({
					id: pulse.commandId,
					type: pulse.type,
					payload: pulse.payload,
					issuedBy: pulse.issuedBy,
					createdAt: pulse.createdAt
				});
			}
		});
		return () => {
			unsubPublic();
		};
	}, [applyMergedCatalog, applyDashboardCommand]);
	(0, import_react.useEffect)(() => {
		if (!authReady || !firebaseUser) return;
		let cancelled = false;
		let unsubAuthCols = () => {};
		const startSync = async () => {
			if (!hasBootstrappedRef.current) {
				hasBootstrappedRef.current = true;
				await bootstrapAuraVoiceFirestoreIfEmpty({
					users,
					rooms,
					gifts,
					storeItems,
					agencies,
					agents,
					staff,
					transactions,
					luckyConfig,
					bagGifts,
					agoraConfig
				}).catch(() => {});
			}
			if (cancelled) return;
			unsubAuthCols = subscribeToAuthAuraCollections({
				onUsers: (remoteUsers) => {
					const cleaned = remoteUsers.map((u) => stripLegacyMockCosmetics(u));
					setUsers((prev) => {
						const remoteIds = new Set(cleaned.map((u) => u.id));
						const localAuthUser = prev.find((u) => u.id === firebaseUser.uid && !remoteIds.has(u.id));
						return localAuthUser ? [localAuthUser, ...cleaned] : cleaned;
					});
				},
				onAgents: (remoteAgents) => setAgents(remoteAgents),
				onStaff: (remoteStaff) => setStaff(remoteStaff),
				onTransactions: (remoteTxs) => setTransactions(remoteTxs),
				onBagGifts: (remoteBag) => setBagGifts(sanitizeBagGiftsRecord(remoteBag))
			});
		};
		startSync();
		return () => {
			cancelled = true;
			unsubAuthCols();
		};
	}, [authReady, firebaseUser]);
	(0, import_react.useEffect)(() => {
		if (!authReady || !firebaseUser || !activeRoomId) return;
		const unsubMsgs = subscribeToRoomMessages(activeRoomId, (remoteMessages) => {
			setActiveRoomMessages(remoteMessages);
		});
		return () => {
			unsubMsgs();
		};
	}, [
		authReady,
		firebaseUser,
		activeRoomId
	]);
	const clearAuthError = () => setAuthError(null);
	const enterAsGuestDemo = () => {
		setAuthError(null);
		setGuestAccessBypass(true);
	};
	const returnToAuthScreen = () => {
		setAuthError(null);
		setGuestAccessBypass(false);
		setActiveRoomId(null);
		setCurrentView("user_app");
	};
	const signInWithGoogleCloud = async () => {
		try {
			setAuthError(null);
			setAuthLoading(true);
			setIsCloudSyncing(true);
			const fbUser = await signInWithGoogle();
			const existingRemote = await fetchAuraUserById(fbUser.uid);
			const existingLocal = users.find((u) => u.id === fbUser.uid) || null;
			const profile = existingRemote || existingLocal;
			if (profile && profile.country && profile.gender && typeof profile.age === "number") {
				upsertUserIntoState({
					...profile,
					online: true
				});
				setCurrentUserId(profile.id);
				setNeedsProfileCompletion(false);
				setGuestAccessBypass(false);
			} else setNeedsProfileCompletion(true);
			setCloudMessage("تم تسجيل الدخول عبر Google بنجاح.");
		} catch (err) {
			const msg = translateFirebaseAuthError(err);
			setAuthError(msg);
			setCloudMessage(msg);
		} finally {
			setAuthLoading(false);
			setIsCloudSyncing(false);
		}
	};
	const registerWithEmailProfile = async (params) => {
		pendingEmailRegistrationRef.current = true;
		try {
			setAuthError(null);
			setAuthLoading(true);
			const cleanEmail = params.email.trim().toLowerCase();
			if (ADMIN_EMAILS.has(cleanEmail)) try {
				const statusRes = await fetch(resolveApiUrl("/api/admin/auth/status"));
				if (statusRes.ok) {
					if (!(await statusRes.json().catch(() => ({}))).configured) {
						if (await claimAdminEmailAccount({
							email: params.email.trim(),
							password: params.password,
							displayName: params.displayName.trim() || "مدير التطبيق"
						})) return true;
					}
				}
			} catch {}
			const fbUser = await registerWithEmailPassword(params.email, params.password, params.displayName);
			const newUser = buildAuthenticatedVoiceUser({
				uid: fbUser.uid,
				displayName: params.displayName,
				country: params.country,
				countryFlag: params.countryFlag,
				age: params.age,
				gender: params.gender,
				avatar: params.avatar
			});
			upsertUserIntoState(newUser);
			setCurrentUserId(newUser.id);
			setNeedsProfileCompletion(false);
			setGuestAccessBypass(false);
			await persistAuraUser(newUser).catch((e) => {
				console.warn("Initial user profile cloud write notice:", e);
			});
			setCloudMessage("تم إنشاء حسابك في الدردشة الصوتية بنجاح.");
			return true;
		} catch (err) {
			const msg = translateFirebaseAuthError(err);
			setAuthError(msg);
			return false;
		} finally {
			pendingEmailRegistrationRef.current = false;
			setAuthLoading(false);
		}
	};
	const loginWithEmail = async (email, password) => {
		try {
			setAuthError(null);
			setAuthLoading(true);
			const cleanEmail = email.trim();
			let adminStatusCode = 0;
			let adminServerError = "";
			try {
				const adminRes = await fetch(resolveApiUrl("/api/admin/auth/login"), {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({
						email: cleanEmail,
						password
					})
				});
				adminStatusCode = adminRes.status;
				const adminData = await adminRes.json().catch(() => ({}));
				if (adminRes.ok && adminData.ok && adminData.token && adminData.email) {
					const sessionObj = {
						token: adminData.token,
						email: adminData.email,
						displayName: adminData.displayName || "مدير التطبيق",
						expiresAt: adminData.expiresAt || Date.now() + 864e5
					};
					adminSessionRef.current = sessionObj;
					activateAdminEmailSession(sessionObj);
					loginWithEmailPassword(cleanEmail, password).catch(() => null);
					return true;
				}
				if (adminData.error) adminServerError = adminData.error;
				if (adminStatusCode === 401 || adminStatusCode === 429) {
					setAuthError(adminServerError || "كلمة مرور حساب المدير غير صحيحة.");
					return false;
				}
			} catch {}
			try {
				const fbUser = await loginWithEmailPassword(cleanEmail, password);
				const remoteProfile = await fetchAuraUserById(fbUser.uid);
				const localProfile = users.find((u) => u.id === fbUser.uid) || null;
				const resolved = remoteProfile || localProfile;
				if (resolved && resolved.country && resolved.gender && typeof resolved.age === "number") {
					upsertUserIntoState({
						...resolved,
						online: true
					});
					setCurrentUserId(resolved.id);
					setNeedsProfileCompletion(false);
					setGuestAccessBypass(false);
				} else setNeedsProfileCompletion(true);
				if (fbUser.email && ADMIN_EMAILS.has(fbUser.email.trim().toLowerCase())) setCurrentViewRaw("admin_dashboard");
				setCloudMessage("مرحباً بعودتك! تم تسجيل الدخول بنجاح.");
				return true;
			} catch (fbErr) {
				if (adminServerError && ADMIN_EMAILS.has(cleanEmail.toLowerCase())) {
					setAuthError(adminServerError);
					return false;
				}
				const msg = translateFirebaseAuthError(fbErr);
				setAuthError(msg);
				return false;
			}
		} catch (err) {
			const msg = translateFirebaseAuthError(err);
			setAuthError(msg);
			return false;
		} finally {
			setAuthLoading(false);
		}
	};
	const completeGoogleOnboardingProfile = async (params) => {
		if (!firebaseUser) return false;
		try {
			setAuthError(null);
			setAuthLoading(true);
			const newUser = buildAuthenticatedVoiceUser({
				uid: firebaseUser.uid,
				displayName: params.displayName || firebaseUser.displayName || "مستخدم صوتي",
				country: params.country,
				countryFlag: params.countryFlag,
				age: params.age,
				gender: params.gender,
				avatar: params.avatar || firebaseUser.photoURL || void 0
			});
			upsertUserIntoState(newUser);
			setCurrentUserId(newUser.id);
			setNeedsProfileCompletion(false);
			setGuestAccessBypass(false);
			await persistAuraUser(newUser).catch((e) => {
				console.warn("Google onboarding profile write notice:", e);
			});
			setCloudMessage("تم إكمال ملفك الصوتي بنجاح.");
			return true;
		} catch (err) {
			const msg = translateFirebaseAuthError(err);
			setAuthError(msg);
			return false;
		} finally {
			setAuthLoading(false);
		}
	};
	const activateAdminEmailSession = (session) => {
		setAdminSession(session);
		const adminUserId = "admin_email_owner";
		const existingAdmin = users.find((u) => u.id === adminUserId);
		const adminUserProfile = existingAdmin ? {
			...existingAdmin,
			displayName: session.displayName || existingAdmin.displayName,
			online: true
		} : {
			...buildAuthenticatedVoiceUser({
				uid: adminUserId,
				displayName: session.displayName || "مدير التطبيق",
				country: "مصر",
				countryFlag: "🇪🇬",
				age: 28,
				gender: "male"
			}),
			userCode: "1000001",
			level: 50,
			vipLevel: 10,
			coins: 5e5,
			bio: "الحساب الرسمي لمدير التطبيق 👑"
		};
		upsertUserIntoState(adminUserProfile);
		setCurrentUserId(adminUserProfile.id);
		setNeedsProfileCompletion(false);
		setGuestAccessBypass(false);
		setCurrentViewRaw("admin_dashboard");
		setCloudMessage(`مرحباً ${session.displayName}! تم فتح لوحة تحكم المدير بنجاح.`);
	};
	const claimAdminEmailAccount = async (params) => {
		try {
			setAuthError(null);
			setAuthLoading(true);
			const res = await fetch(resolveApiUrl("/api/admin/auth/claim"), {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					email: params.email.trim(),
					password: params.password,
					displayName: params.displayName?.trim() || "مدير التطبيق"
				})
			});
			const contentType = res.headers.get("content-type") || "";
			if (res.status === 404 || !contentType.includes("application/json")) {
				const fbUser = await registerWithEmailPassword(params.email, params.password, params.displayName?.trim() || "مدير التطبيق");
				const adminProfile = buildAuthenticatedVoiceUser({
					uid: fbUser.uid,
					displayName: params.displayName?.trim() || "مدير التطبيق",
					country: "مصر",
					countryFlag: "🇪🇬",
					age: 28,
					gender: "male"
				});
				upsertUserIntoState(adminProfile);
				setCurrentUserId(adminProfile.id);
				setNeedsProfileCompletion(false);
				setGuestAccessBypass(false);
				await persistAuraUser(adminProfile).catch(() => {});
				setCurrentViewRaw("admin_dashboard");
				return true;
			}
			const data = await res.json().catch(() => ({}));
			if (!res.ok || !data.ok || !data.token || !data.email) {
				setAuthError(data.error || "تعذر إنشاء حساب المدير.");
				return false;
			}
			const sessionObj = {
				token: data.token,
				email: data.email,
				displayName: data.displayName || "مدير التطبيق",
				expiresAt: data.expiresAt || Date.now() + 864e5
			};
			adminSessionRef.current = sessionObj;
			setAdminAuthStatus({
				configured: true,
				source: "claimed",
				emailHint: data.email
			});
			activateAdminEmailSession(sessionObj);
			return true;
		} catch (err) {
			setAuthError(translateFirebaseAuthError(err));
			return false;
		} finally {
			setAuthLoading(false);
		}
	};
	const loginAdminEmailAccount = async (email, password) => {
		try {
			setAuthError(null);
			setAuthLoading(true);
			const res = await fetch(resolveApiUrl("/api/admin/auth/login"), {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					email: email.trim(),
					password
				})
			});
			const contentType = res.headers.get("content-type") || "";
			if (res.status === 404 || !contentType.includes("application/json")) {
				const fbUser = await loginWithEmailPassword(email.trim(), password);
				if (fbUser.email && ADMIN_EMAILS.has(fbUser.email.trim().toLowerCase())) setCurrentViewRaw("admin_dashboard");
				return true;
			}
			const data = await res.json().catch(() => ({}));
			if (!res.ok || !data.ok || !data.token || !data.email) {
				setAuthError(data.error || "البريد الإلكتروني أو كلمة المرور غير صحيحة.");
				return false;
			}
			const sessionObj = {
				token: data.token,
				email: data.email,
				displayName: data.displayName || "مدير التطبيق",
				expiresAt: data.expiresAt || Date.now() + 864e5
			};
			adminSessionRef.current = sessionObj;
			setAdminAuthStatus({
				configured: true,
				source: "claimed",
				emailHint: data.email
			});
			activateAdminEmailSession(sessionObj);
			loginWithEmailPassword(email.trim(), password).catch(() => null);
			return true;
		} catch (err) {
			setAuthError(translateFirebaseAuthError(err));
			return false;
		} finally {
			setAuthLoading(false);
		}
	};
	const updateAdminEmailCredentials = async (params) => {
		const headers = await getAdminAuthHeaders();
		if (!headers) return {
			ok: false,
			message: "يرجى تسجيل الدخول بحساب المدير أولاً."
		};
		try {
			const res = await fetch(resolveApiUrl("/api/admin/auth/update"), {
				method: "POST",
				headers,
				body: JSON.stringify({
					email: params.email.trim(),
					password: params.password,
					displayName: params.displayName?.trim() || "مدير التطبيق"
				})
			});
			const data = await res.json().catch(() => ({}));
			if (!res.ok || !data.ok || !data.token || !data.email) return {
				ok: false,
				message: data.error || "تعذر تحديث بيانات حساب المدير."
			};
			const nextSession = {
				token: data.token,
				email: data.email,
				displayName: data.displayName || "مدير التطبيق",
				expiresAt: data.expiresAt || Date.now() + 864e5
			};
			adminSessionRef.current = nextSession;
			setAdminSession(nextSession);
			setAdminAuthStatus({
				configured: true,
				source: "claimed",
				emailHint: data.email
			});
			setCloudMessage(`تم تحديث حساب المدير إلى ${data.email} بنجاح.`);
			return {
				ok: true,
				message: `تم تحديث حساب المدير إلى ${data.email} بنجاح.`
			};
		} catch {
			return {
				ok: false,
				message: "تعذر الاتصال بالخادم لتحديث بيانات المدير."
			};
		}
	};
	const signOutCloud = async () => {
		if (firebaseUser) await signOutFirebase().catch(() => {});
		setAdminSession(null);
		hasBootstrappedRef.current = false;
		setActiveRoomId(null);
		setNeedsProfileCompletion(false);
		setGuestAccessBypass(false);
		setAuthError(null);
		setCurrentViewRaw("user_app");
		setCloudMessage("تم تسجيل الخروج بنجاح.");
	};
	const testCloudConnection = async () => {
		const res = await testFirebaseConnection(true);
		setCloudMessage(res.message || null);
	};
	const syncAllDataToCloud = async () => {
		setIsCloudSyncing(true);
		try {
			const res = await syncAllAuraVoiceToFirestore({
				users,
				rooms,
				roomBackgrounds,
				gifts: sanitizeRealGifts(gifts),
				storeItems: sanitizeRealStoreItems(storeItems),
				agencies,
				agents,
				staff,
				transactions,
				luckyConfig,
				bagGifts: sanitizeBagGiftsRecord(bagGifts),
				agoraConfig
			});
			setCloudMessage(res.message);
		} catch (err) {
			setCloudMessage(err?.message || "تعذرت المزامنة مع السحابة");
		} finally {
			setIsCloudSyncing(false);
		}
	};
	const getAdminAuthHeaders = import_react.useCallback(async () => {
		const activeAdminSession = adminSessionRef.current || adminSession;
		if (activeAdminSession?.token) return {
			"Content-Type": "application/json",
			Authorization: `Bearer ${activeAdminSession.token}`
		};
		if (firebaseUser) try {
			const idToken = await firebaseUser.getIdToken();
			if (idToken) return {
				"Content-Type": "application/json",
				Authorization: `Bearer ${idToken}`
			};
		} catch {}
		return null;
	}, [adminSession, firebaseUser]);
	const sendAdminCommand = import_react.useCallback(async (type, payload) => {
		const cmdId = `cmd_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
		processedCommandIdsRef.current.add(cmdId);
		persistDashboardSyncPulse({
			commandId: cmdId,
			type,
			payload,
			issuedBy: adminSessionRef.current?.email || firebaseUser?.email || "admin",
			createdAt: Date.now()
		}).catch(() => {});
		const headers = await getAdminAuthHeaders();
		if (!headers) return;
		try {
			await fetch(resolveApiUrl("/api/admin/commands"), {
				method: "POST",
				headers,
				body: JSON.stringify({
					id: cmdId,
					type,
					payload
				})
			});
		} catch {}
	}, [getAdminAuthHeaders, firebaseUser]);
	const purgeMockCatalogs = async () => {
		setGifts((prev) => {
			const clean = sanitizeRealGifts(prev);
			return clean.length > 0 ? clean : [STARTER_DEFAULT_GIFT];
		});
		setStoreItems((prev) => sanitizeRealStoreItems(prev));
		setBagGifts((prev) => sanitizeBagGiftsRecord(prev));
		setUsers((prev) => prev.map((u) => stripLegacyMockCosmetics(u)));
		await sendAdminCommand("PURGE_MOCK_CATALOGS", {
			legacyGiftIds: LEGACY_MOCK_GIFT_IDS,
			legacyStoreIds: LEGACY_MOCK_STORE_IDS
		});
		if (!firebaseUser) {
			const msg = "تم تنظيف الهدايا والمتجر والحقيبة الوهمية على السيرفر وتحديث جميع المستخدمين.";
			setCloudMessage(msg);
			return msg;
		}
		const res = await purgeLegacyMockCatalogFromFirestore(LEGACY_MOCK_GIFT_IDS, LEGACY_MOCK_STORE_IDS);
		const msg = `تم تنظيف السيرفر بنجاح: حذف ${res.removedGifts} هدية وهمية و ${res.removedStore} عنصر متجر وهمي وتصفير الحقيبة الوهمية.`;
		setCloudMessage(msg);
		return msg;
	};
	const updateLuckyConfig = (updates) => {
		const next = {
			...luckyConfig,
			...updates
		};
		setLuckyConfig(next);
		persistLuckyConfig(next).catch(() => {});
		sendAdminCommand("UPDATE_LUCKY_CONFIG", { luckyConfig: next });
	};
	const updateAgoraConfig = (updates, resetToDefault = false) => {
		const applied = resetToDefault ? agoraVoice.resetConfig() : agoraVoice.setConfig(updates, true);
		setAgoraConfig(applied);
		persistAgoraConfig(applied).catch((err) => {
			console.warn("Agora config cloud sync notice:", err);
		});
		sendAdminCommand("UPDATE_AGORA_CONFIG", { agoraConfig: applied });
		return applied;
	};
	const addBagGifts = (items) => {
		setBagGifts((prev) => {
			const next = { ...prev };
			items.forEach(({ giftId, count }) => {
				if (count > 0) next[giftId] = (next[giftId] || 0) + count;
			});
			persistBagGifts(next).catch(() => {});
			return next;
		});
	};
	const consumeBagGift = (giftId, count) => {
		if ((bagGifts[giftId] || 0) < count || count <= 0) return false;
		setBagGifts((prev) => {
			const next = { ...prev };
			const rem = (next[giftId] || 0) - count;
			if (rem <= 0) delete next[giftId];
			else next[giftId] = rem;
			persistBagGifts(next).catch(() => {});
			return next;
		});
		return true;
	};
	const triggerGlobalJackpotBanner = (payload) => {
		const now = Date.now();
		const banner = {
			...payload,
			id: `jackpot_${now}_${Math.random().toString(36).slice(2, 8)}`,
			createdAt: now
		};
		lastJackpotIdRef.current = banner.id;
		if (jackpotTimerRef.current) window.clearTimeout(jackpotTimerRef.current);
		sound.playLuckySplashJackpot();
		setGlobalJackpotBanner(banner);
		persistJackpotBanner(banner).catch(() => {});
		jackpotTimerRef.current = window.setTimeout(() => {
			setGlobalJackpotBanner(null);
			jackpotTimerRef.current = null;
		}, 3e3);
	};
	const evaluateLuckyGiftWin = (gift, count, comboHits, comboCumulativeCoins, roomTitle) => {
		const isWin = Math.random() * 100 <= luckyConfig.winRatePercent;
		let multiplier = 0;
		let winCoins = 0;
		if (isWin) {
			const lowW = Math.max(0, luckyConfig.lowMultiplierWeight);
			const midW = Math.max(0, luckyConfig.midMultiplierWeight);
			const highW = Math.max(0, luckyConfig.highMultiplierWeight);
			const totalW = lowW + midW + highW || 100;
			const tierRoll = Math.random() * totalW;
			if (tierRoll < highW) {
				const highPool = comboHits >= 5 ? [188, 250] : [128, 188];
				multiplier = highPool[Math.floor(Math.random() * highPool.length)];
			} else if (tierRoll < highW + midW) {
				const midPool = [
					50,
					66,
					88
				];
				multiplier = midPool[Math.floor(Math.random() * midPool.length)];
			} else {
				const lowPool = [
					5,
					8,
					12,
					18,
					25
				];
				multiplier = lowPool[Math.floor(Math.random() * lowPool.length)];
			}
			winCoins = Math.round(gift.coinPrice * multiplier * count);
			setUsers((prev) => prev.map((u) => {
				if (u.id === currentUser.id) {
					const updated = {
						...u,
						coins: u.coins + winCoins
					};
					persistAuraUser(updated).catch(() => {});
					return updated;
				}
				return u;
			}));
			const winTx = {
				id: `tx_lucky_${Date.now()}_${Math.floor(Math.random() * 1e4)}`,
				userId: currentUser.id,
				userName: currentUser.displayName,
				type: "lucky_win",
				coinsDelta: winCoins,
				diamondsDelta: 0,
				details: `ربح هدية الحظ (${gift.nameAr} ×${count}) بمضاعف ${multiplier}X`,
				timestamp: (/* @__PURE__ */ new Date()).toISOString().replace("T", " ").slice(0, 16),
				status: "completed"
			};
			setTransactions((prev) => [winTx, ...prev]);
			persistAuraTransaction(winTx).catch(() => {});
		}
		const threshold = luckyConfig.megaComboThreshold || 1e6;
		if (comboCumulativeCoins >= threshold || winCoins >= threshold) {
			const displayWin = winCoins > 0 ? winCoins : comboCumulativeCoins;
			triggerGlobalJackpotBanner({
				winnerName: currentUser.displayName,
				winnerAvatar: currentUser.avatar,
				roomTitle: roomTitle || activeRoom?.title || "غرفة صوتية",
				giftName: gift.nameAr,
				giftIcon: gift.icon,
				giftImageUrl: gift.imageUrl,
				amountWon: displayWin,
				comboTotalCoins: comboCumulativeCoins,
				multiplier: multiplier || Math.max(1, comboHits)
			});
		}
		return {
			won: isWin,
			multiplier,
			winCoins
		};
	};
	const setLang = (newLang) => {
		setLangState(newLang);
		document.documentElement.lang = newLang;
		document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";
	};
	const switchUserIdentity = (userId) => {
		const found = users.find((u) => u.id === userId);
		if (found) setCurrentUserId(found.id);
	};
	const isRoomOwner = (room, userId) => {
		const uid = userId ?? currentUser.id;
		return room.ownerId === uid;
	};
	const isRoomModerator = (room, userId) => {
		const uid = userId ?? currentUser.id;
		return Array.isArray(room.moderators) && room.moderators.includes(uid);
	};
	const canManageRoom = (room, userId) => {
		const uid = userId ?? currentUser.id;
		return room.ownerId === uid || Array.isArray(room.moderators) && room.moderators.includes(uid);
	};
	const joinRoom = (roomId, enteredPassword) => {
		const room = rooms.find((r) => r.id === roomId);
		if (!room) return {
			success: false,
			reason: "not_found",
			message: "الغرفة غير موجودة أو تم إغلاقها."
		};
		if (Array.isArray(room.bannedUserIds) && room.bannedUserIds.includes(currentUser.id)) return {
			success: false,
			reason: "banned",
			message: "تم حظرك من دخول هذه الغرفة من قِبل المالك أو المشرفين."
		};
		if (!canManageRoom(room, currentUser.id)) {
			const cleanPass = room.password?.trim() || "";
			if (room.type === "password" && cleanPass) {
				if (!enteredPassword || !enteredPassword.trim()) return {
					success: false,
					reason: "password_required",
					message: "هذه الغرفة محمية برمز مرور للدخول."
				};
				if (enteredPassword.trim() !== cleanPass) return {
					success: false,
					reason: "wrong_password",
					message: "رمز المرور غير صحيح، يرجى المحاولة مرة أخرى."
				};
			} else if (room.isLocked) {
				if (cleanPass) {
					if (!enteredPassword || !enteredPassword.trim()) return {
						success: false,
						reason: "password_required",
						message: "الغرفة مقفلة برمز مرور."
					};
					if (enteredPassword.trim() !== cleanPass) return {
						success: false,
						reason: "wrong_password",
						message: "رمز المرور غير صحيح."
					};
				} else return {
					success: false,
					reason: "locked",
					message: "هذه الغرفة مقفلة حالياً بواسطة المالك أو المشرف."
				};
			}
			if (room.type === "vip" && currentUser.vipLevel < 1) return {
				success: false,
				reason: "vip_only",
				message: "هذه الغرفة مخصصة لأعضاء VIP فقط."
			};
		}
		setActiveRoomId(roomId);
		setRooms((prev) => prev.map((r) => {
			if (r.id === roomId) {
				const updated = {
					...r,
					onlineViewersCount: r.onlineViewersCount + 1
				};
				persistAuraRoom(updated).catch(() => {});
				return updated;
			}
			return r;
		}));
		const roleTag = isRoomOwner(room, currentUser.id) ? " · المالك 👑" : isRoomModerator(room, currentUser.id) ? " · مشرف الغرفة 🛡️" : "";
		const welcomeMsg = {
			id: `msg_${Date.now()}`,
			roomId,
			senderId: "system",
			senderName: "نظام الغرفة",
			senderAvatar: "",
			vipLevel: 0,
			level: 0,
			isSystem: true,
			text: `دخل ${currentUser.displayName} إلى الغرفة (VIP ${currentUser.vipLevel}${roleTag}) ✨`,
			timestamp: (/* @__PURE__ */ new Date()).toLocaleTimeString([], {
				hour: "2-digit",
				minute: "2-digit"
			})
		};
		setActiveRoomMessages([welcomeMsg]);
		const hasRemovedEntrance = currentUser.activeEntranceId === "";
		const activeStoreEntrance = currentUser.activeEntranceId ? storeItems.find((i) => i.id === currentUser.activeEntranceId && i.type === "entrance") : void 0;
		if (activeStoreEntrance || !hasRemovedEntrance && currentUser.vipLevel >= 1) {
			sound.unlockAudio();
			const vipInfo = vipTiers.find((v) => v.level === currentUser.vipLevel) || vipTiers[0];
			const resolved = resolveEntranceStageMedia(activeStoreEntrance);
			if (entranceTimerRef.current) {
				window.clearTimeout(entranceTimerRef.current);
				entranceTimerRef.current = null;
			}
			setEntranceBanner({
				id: `ent_${Date.now()}`,
				userName: currentUser.displayName,
				userAvatar: currentUser.avatar,
				vipLevel: currentUser.vipLevel,
				entranceName: activeStoreEntrance?.nameAr || vipInfo?.entranceName || "دخولية ملكية",
				entranceIcon: activeStoreEntrance?.icon || vipInfo?.entranceIcon || "🚘",
				entrancePreviewUrl: resolved.previewThumbUrl,
				entranceVideoUrl: activeStoreEntrance?.videoUrl?.trim() || void 0,
				entranceMediaUrl: resolved.primaryUrl,
				preferVideo: resolved.preferVideo,
				isVideoEntrance: resolved.isVideoEntrance,
				durationMs: resolved.durationMs,
				hasExplicitDuration: resolved.hasExplicitDuration
			});
			sound.playGiftSound("fanfare");
			const timerMs = resolved.primaryUrl ? 18e4 : resolved.durationMs;
			entranceTimerRef.current = window.setTimeout(() => {
				setEntranceBanner(null);
				entranceTimerRef.current = null;
			}, timerMs);
		}
		return { success: true };
	};
	const leaveRoom = () => {
		if (activeRoomId) setRooms((prev) => prev.map((r) => {
			if (r.id === activeRoomId) {
				const updated = {
					...r,
					onlineViewersCount: Math.max(1, r.onlineViewersCount - 1),
					seats: r.seats.map((s) => s.userId === currentUser.id ? {
						...s,
						userId: null,
						userName: void 0,
						userAvatar: void 0,
						vipLevel: void 0,
						level: void 0,
						isSpeaking: false,
						audioLevel: 0
					} : s)
				};
				persistAuraRoom(updated).catch(() => {});
				return updated;
			}
			return r;
		}));
		setActiveRoomId(null);
		setActiveRoomMessages([]);
		setFlyingGift(null);
		setEntranceBanner(null);
	};
	const takeSeat = (seatIndex) => {
		if (!activeRoom || seatIndex < 0 || seatIndex >= 8) return;
		const seat = (activeRoom.seats || [])[seatIndex];
		if (seat?.isLocked) return;
		if (seat?.userId && seat.userId !== currentUser.id) return;
		sound.playMicClick(true);
		setRooms((prev) => prev.map((r) => {
			if (r.id === activeRoom.id) {
				const expandedSeats = Array.from({ length: 8 }, (_, idx) => {
					if (r.seats && r.seats[idx]) return r.seats[idx];
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
				const updatedRoom = {
					...r,
					seats: expandedSeats.map((s, idx) => {
						if (s.userId === currentUser.id) return {
							...s,
							userId: null,
							userName: void 0,
							userAvatar: void 0,
							vipLevel: void 0,
							level: void 0,
							isSpeaking: false,
							audioLevel: 0
						};
						if (idx === seatIndex) return {
							...s,
							userId: currentUser.id,
							userName: currentUser.displayName,
							userAvatar: currentUser.avatar,
							vipLevel: currentUser.vipLevel,
							level: currentUser.level,
							activeFrameId: currentUser.activeFrameId,
							isMuted: false,
							isSpeaking: true,
							audioLevel: 65
						};
						return s;
					})
				};
				persistAuraRoom(updatedRoom).catch(() => {});
				return updatedRoom;
			}
			return r;
		}));
		const msg = {
			id: `msg_${Date.now()}`,
			roomId: activeRoom.id,
			senderId: "system",
			senderName: "نظام الغرفة",
			senderAvatar: "",
			vipLevel: 0,
			level: 0,
			isSystem: true,
			text: `صعد ${currentUser.displayName} إلى المايك رقم ${seatIndex + 1} 🎙️`,
			timestamp: (/* @__PURE__ */ new Date()).toLocaleTimeString([], {
				hour: "2-digit",
				minute: "2-digit"
			})
		};
		setActiveRoomMessages((prev) => [...prev, msg]);
	};
	const leaveSeat = () => {
		if (!activeRoom) return;
		sound.playMicClick(false);
		setRooms((prev) => prev.map((r) => {
			if (r.id === activeRoom.id) {
				const updated = {
					...r,
					seats: r.seats.map((s) => s.userId === currentUser.id ? {
						...s,
						userId: null,
						userName: void 0,
						userAvatar: void 0,
						vipLevel: void 0,
						level: void 0,
						isSpeaking: false,
						audioLevel: 0
					} : s)
				};
				persistAuraRoom(updated).catch(() => {});
				return updated;
			}
			return r;
		}));
	};
	const toggleMic = () => {
		if (!activeRoom) return;
		const mySeat = activeRoom.seats.find((s) => s.userId === currentUser.id);
		if (!mySeat) return;
		const nextMuted = !mySeat.isMuted;
		sound.playMicClick(!nextMuted);
		setRooms((prev) => prev.map((r) => {
			if (r.id === activeRoom.id) {
				const updated = {
					...r,
					seats: r.seats.map((s) => s.userId === currentUser.id ? {
						...s,
						isMuted: nextMuted,
						isSpeaking: !nextMuted,
						audioLevel: nextMuted ? 0 : 70
					} : s)
				};
				persistAuraRoom(updated).catch(() => {});
				return updated;
			}
			return r;
		}));
	};
	const pushRoomSystemNotice = (roomId, text) => {
		const sysMsg = {
			id: `msg_${Date.now()}_${Math.floor(Math.random() * 1e3)}`,
			roomId,
			senderId: "system",
			senderName: "نظام الغرفة",
			senderAvatar: "",
			vipLevel: 0,
			level: 0,
			isSystem: true,
			text,
			timestamp: (/* @__PURE__ */ new Date()).toLocaleTimeString([], {
				hour: "2-digit",
				minute: "2-digit"
			})
		};
		if (activeRoomId === roomId) setActiveRoomMessages((prev) => [...prev, sysMsg]);
		persistRoomMessage(sysMsg).catch(() => {});
	};
	const toggleSeatLock = (seatIndex) => {
		if (!activeRoom || seatIndex < 0 || seatIndex >= 8) return;
		if (!canManageRoom(activeRoom, currentUser.id)) return;
		setRooms((prev) => prev.map((r) => {
			if (r.id === activeRoom.id) {
				const expandedSeats = Array.from({ length: 8 }, (_, idx) => {
					if (r.seats && r.seats[idx]) return r.seats[idx];
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
				const updated = {
					...r,
					seats: expandedSeats.map((s, idx) => idx === seatIndex ? {
						...s,
						isLocked: !s.isLocked
					} : s)
				};
				persistAuraRoom(updated).catch(() => {});
				return updated;
			}
			return r;
		}));
	};
	const toggleAllSeatsLock = () => {
		if (!activeRoom || !canManageRoom(activeRoom, currentUser.id)) return;
		setRooms((prev) => prev.map((r) => {
			if (r.id === activeRoom.id) {
				const expandedSeats = Array.from({ length: 8 }, (_, idx) => {
					if (r.seats && r.seats[idx]) return r.seats[idx];
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
				const anyUnlocked = expandedSeats.some((s) => !s.isLocked);
				const updated = {
					...r,
					seats: expandedSeats.map((s) => ({
						...s,
						isLocked: anyUnlocked
					}))
				};
				persistAuraRoom(updated).catch(() => {});
				return updated;
			}
			return r;
		}));
	};
	const toggleSeatMuteByModerator = (seatIndex) => {
		if (!activeRoom || seatIndex < 0 || seatIndex >= 8) return;
		const seat = activeRoom.seats[seatIndex];
		if (!seat?.userId) return;
		const isSelf = seat.userId === currentUser.id;
		if (!isSelf && !canManageRoom(activeRoom, currentUser.id)) return;
		const nextMuted = !seat.isMuted;
		sound.playMicClick(!nextMuted);
		setRooms((prev) => prev.map((r) => {
			if (r.id === activeRoom.id) {
				const updated = {
					...r,
					seats: r.seats.map((s, idx) => idx === seatIndex ? {
						...s,
						isMuted: nextMuted,
						isSpeaking: !nextMuted,
						audioLevel: nextMuted ? 0 : 70
					} : s)
				};
				persistAuraRoom(updated).catch(() => {});
				return updated;
			}
			return r;
		}));
		if (!isSelf) pushRoomSystemNotice(activeRoom.id, nextMuted ? `قام ${currentUser.displayName} بكتم مايك ${seat.userName || `مايك ${seatIndex + 1}`} 🔇` : `قام ${currentUser.displayName} بفتح مايك ${seat.userName || `مايك ${seatIndex + 1}`} 🎙️`);
	};
	const kickUserFromSeat = (seatIndex) => {
		if (!activeRoom || seatIndex < 0 || seatIndex >= 8) return;
		if (!canManageRoom(activeRoom, currentUser.id)) return;
		const seat = activeRoom.seats[seatIndex];
		if (!seat?.userId) return;
		if (seat.userId === activeRoom.ownerId && currentUser.id !== activeRoom.ownerId) return;
		sound.playMicClick(false);
		setRooms((prev) => prev.map((r) => {
			if (r.id === activeRoom.id) {
				const updated = {
					...r,
					seats: r.seats.map((s, idx) => idx === seatIndex ? {
						...s,
						userId: null,
						userName: void 0,
						userAvatar: void 0,
						vipLevel: void 0,
						level: void 0,
						activeFrameId: void 0,
						isSpeaking: false,
						audioLevel: 0
					} : s)
				};
				persistAuraRoom(updated).catch(() => {});
				return updated;
			}
			return r;
		}));
		pushRoomSystemNotice(activeRoom.id, `قام ${currentUser.displayName} بإنزال ${seat.userName || `مايك ${seatIndex + 1}`} من المايك`);
	};
	const clearSeatHeartPoints = (seatIndex) => {
		if (!activeRoom || seatIndex < 0 || seatIndex >= 8) return;
		if (!canManageRoom(activeRoom, currentUser.id)) return;
		setRooms((prev) => prev.map((r) => {
			if (r.id === activeRoom.id) {
				const updated = {
					...r,
					seats: r.seats.map((s, idx) => idx === seatIndex ? {
						...s,
						heartPoints: 0
					} : s)
				};
				persistAuraRoom(updated).catch(() => {});
				return updated;
			}
			return r;
		}));
	};
	const applyModeratorToggle = (roomId, targetUserId, requireOwner) => {
		const room = rooms.find((r) => r.id === roomId);
		if (!room) return {
			success: false,
			message: "الغرفة غير موجودة."
		};
		if (requireOwner && room.ownerId !== currentUser.id) return {
			success: false,
			message: "منح أو سحب الإشراف متاح لمالك الغرفة فقط."
		};
		if (targetUserId === room.ownerId) return {
			success: false,
			message: "مالك الغرفة يمتلك كافة الصلاحيات بشكل دائم."
		};
		const targetName = users.find((u) => u.id === targetUserId)?.displayName || targetUserId;
		const currentMods = Array.isArray(room.moderators) ? room.moderators : [room.ownerId];
		const isAlreadyMod = currentMods.includes(targetUserId);
		const nextMods = isAlreadyMod ? currentMods.filter((id) => id !== targetUserId) : Array.from(/* @__PURE__ */ new Set([...currentMods, targetUserId]));
		const nextBanned = isAlreadyMod ? room.bannedUserIds || [] : (room.bannedUserIds || []).filter((id) => id !== targetUserId);
		setRooms((prev) => prev.map((r) => {
			if (r.id === roomId) {
				const updated = {
					...r,
					moderators: nextMods,
					bannedUserIds: nextBanned
				};
				persistAuraRoom(updated).catch(() => {});
				return updated;
			}
			return r;
		}));
		if (!requireOwner || isAdminAccount) sendAdminCommand("TOGGLE_ROOM_MODERATOR", {
			roomId,
			moderators: nextMods,
			bannedUserIds: nextBanned
		});
		const noticeText = isAlreadyMod ? `تم سحب صلاحيات إشراف الغرفة من ${targetName}` : `تم منح ${targetName} إشراف الغرفة الكامل 🛡️`;
		if (activeRoomId === roomId) pushRoomSystemNotice(roomId, noticeText);
		return {
			success: true,
			message: noticeText
		};
	};
	const toggleRoomModerator = (roomId, targetUserId) => applyModeratorToggle(roomId, targetUserId, true);
	const adminToggleRoomModerator = (roomId, targetUserId) => applyModeratorToggle(roomId, targetUserId, false);
	const banUserFromRoom = (roomId, targetUserId) => {
		const room = rooms.find((r) => r.id === roomId);
		if (!room || !canManageRoom(room, currentUser.id)) return;
		if (targetUserId === room.ownerId) return;
		const targetName = users.find((u) => u.id === targetUserId)?.displayName || "عضو";
		setRooms((prev) => prev.map((r) => {
			if (r.id === roomId) {
				const updated = {
					...r,
					moderators: (r.moderators || []).filter((id) => id !== targetUserId),
					bannedUserIds: Array.from(/* @__PURE__ */ new Set([...r.bannedUserIds || [], targetUserId])),
					seats: r.seats.map((s) => s.userId === targetUserId ? {
						...s,
						userId: null,
						userName: void 0,
						userAvatar: void 0,
						vipLevel: void 0,
						level: void 0,
						activeFrameId: void 0,
						isSpeaking: false,
						audioLevel: 0
					} : s)
				};
				persistAuraRoom(updated).catch(() => {});
				return updated;
			}
			return r;
		}));
		if (activeRoomId === roomId) pushRoomSystemNotice(roomId, `تم حظر ${targetName} وطرده من الغرفة بواسطة ${currentUser.displayName} 🚫`);
	};
	const unbanUserFromRoom = (roomId, targetUserId) => {
		const room = rooms.find((r) => r.id === roomId);
		if (!room || !canManageRoom(room, currentUser.id)) return;
		const targetName = users.find((u) => u.id === targetUserId)?.displayName || "عضو";
		setRooms((prev) => prev.map((r) => {
			if (r.id === roomId) {
				const updated = {
					...r,
					bannedUserIds: (r.bannedUserIds || []).filter((id) => id !== targetUserId)
				};
				persistAuraRoom(updated).catch(() => {});
				return updated;
			}
			return r;
		}));
		if (activeRoomId === roomId) pushRoomSystemNotice(roomId, `تم رفع الحظر عن ${targetName} في الغرفة ✅`);
	};
	const updateRoomPrivacySettings = (roomId, updates) => {
		const room = rooms.find((r) => r.id === roomId);
		if (!room || !canManageRoom(room, currentUser.id)) return false;
		setRooms((prev) => prev.map((r) => {
			if (r.id === roomId) {
				const nextType = updates.type ?? r.type;
				const nextPassword = updates.password !== void 0 ? updates.password.trim() : nextType === "public" || nextType === "official" ? "" : r.password || "";
				const nextBgUrl = updates.backgroundUrl !== void 0 ? updates.backgroundUrl.trim() : r.backgroundUrl;
				const nextCover = updates.coverImage !== void 0 ? updates.coverImage : updates.backgroundUrl !== void 0 && updates.backgroundUrl.trim() ? updates.backgroundUrl.trim() : r.coverImage;
				const updated = {
					...r,
					title: updates.title !== void 0 ? updates.title.trim() || r.title : r.title,
					announcement: updates.announcement !== void 0 ? updates.announcement.trim() : r.announcement,
					type: nextType,
					password: nextPassword,
					isLocked: updates.isLocked !== void 0 ? updates.isLocked : r.isLocked,
					backgroundId: updates.backgroundId !== void 0 ? updates.backgroundId : r.backgroundId,
					backgroundUrl: nextBgUrl,
					coverImage: nextCover
				};
				persistAuraRoom(updated).catch(() => {});
				return updated;
			}
			return r;
		}));
		return true;
	};
	const appendRoomMessage = (msg) => {
		if (!msg || !msg.id) return;
		setActiveRoomMessages((prev) => {
			if (prev.some((m) => m.id === msg.id)) return prev;
			return [...prev.slice(-119), msg];
		});
	};
	const sendRoomMessage = (text) => {
		if (!activeRoom || !text.trim()) return;
		const now = Date.now();
		const trimmed = text.trim();
		const newMsg = {
			id: `msg_${now}_${Math.random().toString(36).slice(2, 6)}`,
			roomId: activeRoom.id,
			senderId: currentUser.id,
			senderName: currentUser.displayName,
			senderAvatar: currentUser.avatar,
			vipLevel: currentUser.vipLevel,
			level: currentUser.level,
			text: trimmed,
			timestamp: new Date(now).toLocaleTimeString([], {
				hour: "2-digit",
				minute: "2-digit"
			})
		};
		setActiveRoomMessages((prev) => [...prev, newMsg]);
		persistRoomMessage(newMsg).catch(() => {});
		selfHostedVoice.broadcastRoomEvent({
			id: newMsg.id,
			kind: "chat_message",
			roomId: activeRoom.id,
			senderId: currentUser.id,
			senderName: currentUser.displayName,
			senderAvatar: currentUser.avatar,
			senderVipLevel: currentUser.vipLevel,
			senderLevel: currentUser.level,
			text: trimmed,
			isSystem: false,
			timestamp: newMsg.timestamp,
			createdAt: now
		});
	};
	const triggerFlyingGift = (gift, count, targetName) => {
		if (flyingTimerRef.current) {
			window.clearTimeout(flyingTimerRef.current);
			flyingTimerRef.current = null;
		}
		setFlyingGift({
			id: `fly_${Date.now()}_${Math.random()}`,
			gift,
			count,
			senderName: currentUser.displayName,
			senderVip: currentUser.vipLevel,
			targetName
		});
		flyingTimerRef.current = window.setTimeout(() => {
			setFlyingGift(null);
			flyingTimerRef.current = null;
		}, 4500);
	};
	const sendGift = (giftId, count, targetType, seatIndex, seatIndices, options) => {
		if (!activeRoom) return false;
		const gift = gifts.find((g) => g.id === giftId);
		if (!gift) return false;
		let targets = [];
		if (seatIndices && seatIndices.length > 0) seatIndices.forEach((sIdx) => {
			const seat = activeRoom.seats[sIdx];
			if (seat && seat.userId) targets.push({
				id: seat.userId,
				name: seat.userName || `مايك ${sIdx + 1}`,
				seatIndex: sIdx
			});
		});
		else if (targetType === "all") targets = activeRoom.seats.filter((s) => Boolean(s.userId)).map((s) => ({
			id: s.userId,
			name: s.userName || `مايك ${s.index + 1}`,
			seatIndex: s.index
		}));
		else if (targetType === "seat" && seatIndex !== void 0) {
			const targetSeat = activeRoom.seats[seatIndex];
			if (targetSeat && targetSeat.userId) targets = [{
				id: targetSeat.userId,
				name: targetSeat.userName || `مايك ${seatIndex + 1}`,
				seatIndex
			}];
		} else {
			const speakingSeat = activeRoom.seats.find((s) => s.userId && s.isSpeaking) || activeRoom.seats.find((s) => Boolean(s.userId));
			if (speakingSeat && speakingSeat.userId) targets = [{
				id: speakingSeat.userId,
				name: speakingSeat.userName || "المتحدث",
				seatIndex: speakingSeat.index
			}];
		}
		if (targets.length === 0) return false;
		const totalCoinsNeeded = gift.coinPrice * count * targets.length;
		if (currentUser.coins < totalCoinsNeeded) {
			setActiveModal("wallet");
			return false;
		}
		setUsers((prev) => prev.map((u) => {
			if (u.id === currentUser.id) {
				const updated = {
					...u,
					coins: u.coins - totalCoinsNeeded,
					level: Math.min(100, u.level + Math.floor(totalCoinsNeeded / 2e4))
				};
				persistAuraUser(updated).catch(() => {});
				return updated;
			}
			if (targets.some((t) => t.id === u.id)) {
				const diamondsReward = gift.diamondReward * count;
				const updated = {
					...u,
					diamonds: u.diamonds + diamondsReward,
					level: Math.min(100, u.level + Math.floor(diamondsReward / 1e4))
				};
				persistAuraUser(updated).catch(() => {});
				return updated;
			}
			return u;
		}));
		const diamondsTotal = gift.diamondReward * count * targets.length;
		const heartPointsPerSeat = gift.coinPrice * count;
		const targetSeatSet = new Set(targets.map((t) => t.seatIndex).filter((x) => x !== void 0));
		setRooms((prev) => prev.map((r) => {
			if (r.id === activeRoom.id) {
				const updatedSeats = r.seats.map((s, idx) => targetSeatSet.has(idx) ? {
					...s,
					heartPoints: (s.heartPoints || 0) + heartPointsPerSeat
				} : s);
				const updatedRoom = {
					...r,
					totalDiamondsEarned: r.totalDiamondsEarned + diamondsTotal,
					seats: updatedSeats
				};
				persistAuraRoom(updatedRoom).catch(() => {});
				return updatedRoom;
			}
			return r;
		}));
		const newTx = {
			id: `tx_${Date.now()}`,
			userId: currentUser.id,
			userName: currentUser.displayName,
			type: "gift_sent",
			coinsDelta: -totalCoinsNeeded,
			diamondsDelta: 0,
			details: `إرسال هدية (${gift.nameAr}) x${count} إلى ${targets.map((t) => t.name).join(", ")}`,
			timestamp: (/* @__PURE__ */ new Date()).toISOString().replace("T", " ").slice(0, 16),
			status: "completed",
			referenceId: activeRoom.id
		};
		setTransactions((prev) => [newTx, ...prev]);
		persistAuraTransaction(newTx).catch(() => {});
		triggerFlyingGift(gift, count, targets.map((t) => t.name).join(", "));
		const now = Date.now();
		const targetLabelJoined = targets.map((t) => t.name).join(" & ");
		const targetSeatIndices = targets.map((t) => t.seatIndex).filter((x) => x !== void 0);
		const giftLiveEvent = options?.skipLiveBroadcast ? void 0 : {
			id: `gift_${now}_${Math.random().toString(36).slice(2, 7)}`,
			kind: "gift_throw",
			roomId: activeRoom.id,
			senderId: currentUser.id,
			senderName: currentUser.displayName,
			senderAvatar: currentUser.avatar,
			senderVipLevel: currentUser.vipLevel,
			senderLevel: currentUser.level,
			createdAt: now,
			gift: {
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
			},
			targetSeats: targetSeatIndices,
			targetNames: targetLabelJoined,
			count,
			comboHits: 1,
			isLucky: Boolean(gift.isLucky || gift.category === "lucky")
		};
		const chatGiftMsg = {
			id: `msg_${now}_${Math.random().toString(36).slice(2, 6)}`,
			roomId: activeRoom.id,
			senderId: currentUser.id,
			senderName: currentUser.displayName,
			senderAvatar: currentUser.avatar,
			vipLevel: currentUser.vipLevel,
			level: currentUser.level,
			isSystem: false,
			giftData: {
				giftId: gift.id,
				giftName: gift.nameAr,
				giftIcon: gift.icon,
				giftCount: count,
				targetUserName: targetLabelJoined,
				totalCoins: totalCoinsNeeded
			},
			liveEvent: giftLiveEvent,
			timestamp: new Date(now).toLocaleTimeString([], {
				hour: "2-digit",
				minute: "2-digit"
			})
		};
		setActiveRoomMessages((prev) => [...prev, chatGiftMsg]);
		persistRoomMessage(chatGiftMsg).catch(() => {});
		if (giftLiveEvent) selfHostedVoice.broadcastRoomEvent(giftLiveEvent);
		return true;
	};
	const rechargeCoins = (coins, paymentMethod) => {
		setUsers((prev) => prev.map((u) => {
			if (u.id === currentUser.id) {
				const updated = {
					...u,
					coins: u.coins + coins
				};
				persistAuraUser(updated).catch(() => {});
				return updated;
			}
			return u;
		}));
		const newTx = {
			id: `tx_${Date.now()}`,
			userId: currentUser.id,
			userName: currentUser.displayName,
			type: "recharge",
			coinsDelta: coins,
			diamondsDelta: 0,
			details: `شحن رصيد ${coins.toLocaleString()} عملة عبر (${paymentMethod})`,
			timestamp: (/* @__PURE__ */ new Date()).toISOString().replace("T", " ").slice(0, 16),
			status: "completed"
		};
		setTransactions((prev) => [newTx, ...prev]);
		persistAuraTransaction(newTx).catch(() => {});
	};
	const agentRechargeUser = (agentId, targetUserCode, coinAmount) => {
		const agent = agents.find((a) => a.id === agentId);
		if (!agent) return {
			success: false,
			message: "وكيل الشحن غير مسجل"
		};
		if (agent.balanceCoins < coinAmount) return {
			success: false,
			message: "رصيد الوكيل لا يكفي لإتمام هذه العملية"
		};
		const targetUser = users.find((u) => u.userCode === targetUserCode);
		if (!targetUser) return {
			success: false,
			message: "لم يتم العثور على مستخدم بهذا الرمز ID"
		};
		const commissionEarned = Math.round(coinAmount * (agent.commissionRate / 100));
		setAgents((prev) => prev.map((a) => {
			if (a.id === agentId) {
				const updated = {
					...a,
					balanceCoins: a.balanceCoins - coinAmount,
					totalRechargedCoins: a.totalRechargedCoins + coinAmount,
					totalOperations: a.totalOperations + 1,
					commissionEarnedCoins: a.commissionEarnedCoins + commissionEarned
				};
				persistAuraAgent(updated).catch(() => {});
				return updated;
			}
			return a;
		}));
		setUsers((prev) => prev.map((u) => {
			if (u.id === targetUser.id) {
				const updated = {
					...u,
					coins: u.coins + coinAmount
				};
				persistAuraUser(updated).catch(() => {});
				return updated;
			}
			return u;
		}));
		const txUser = {
			id: `tx_${Date.now()}_u`,
			userId: targetUser.id,
			userName: targetUser.displayName,
			type: "recharge",
			coinsDelta: coinAmount,
			diamondsDelta: 0,
			details: `شحن رصيد ${coinAmount.toLocaleString()} عملة من الوكيل المعتمد (${agent.name})`,
			timestamp: (/* @__PURE__ */ new Date()).toISOString().replace("T", " ").slice(0, 16),
			status: "completed",
			referenceId: agent.agentCode
		};
		const txAgent = {
			id: `tx_${Date.now()}_a`,
			userId: agent.id,
			userName: agent.name,
			type: "agent_recharge_payout",
			coinsDelta: -coinAmount,
			diamondsDelta: 0,
			details: `تنفيذ عملية شحن للمستخدم ${targetUser.displayName} (ID: ${targetUser.userCode}) وعمولة +${commissionEarned.toLocaleString()}`,
			timestamp: (/* @__PURE__ */ new Date()).toISOString().replace("T", " ").slice(0, 16),
			status: "completed"
		};
		setTransactions((prev) => [
			txUser,
			txAgent,
			...prev
		]);
		persistAuraTransaction(txUser).catch(() => {});
		persistAuraTransaction(txAgent).catch(() => {});
		sound.playWinChime();
		return {
			success: true,
			message: `تم شحن ${coinAmount.toLocaleString()} عملة بنجاح للمستخدم ${targetUser.displayName}!`
		};
	};
	const purchaseVip = (level, durationMonths) => {
		const tier = vipTiers.find((v) => v.level === level);
		if (!tier) return false;
		const totalCost = tier.coinCostMonthly * durationMonths;
		if (currentUser.coins < totalCost) {
			setActiveModal("wallet");
			return false;
		}
		setUsers((prev) => prev.map((u) => {
			if (u.id === currentUser.id) {
				const updated = {
					...u,
					coins: u.coins - totalCost,
					vipLevel: Math.max(u.vipLevel, level)
				};
				persistAuraUser(updated).catch(() => {});
				return updated;
			}
			return u;
		}));
		const tx = {
			id: `tx_${Date.now()}`,
			userId: currentUser.id,
			userName: currentUser.displayName,
			type: "vip_purchase",
			coinsDelta: -totalCost,
			diamondsDelta: 0,
			details: `اشتراك في عضوية ${tier.nameAr} لمدة ${durationMonths} شهر`,
			timestamp: (/* @__PURE__ */ new Date()).toISOString().replace("T", " ").slice(0, 16),
			status: "completed"
		};
		setTransactions((prev) => [tx, ...prev]);
		persistAuraTransaction(tx).catch(() => {});
		return true;
	};
	const syncUserFrameToSeats = (frameId) => {
		setRooms((prev) => prev.map((r) => {
			if (!r.seats.some((s) => s.userId === currentUser.id)) return r;
			const updatedRoom = {
				...r,
				seats: r.seats.map((s) => s.userId === currentUser.id ? {
					...s,
					activeFrameId: frameId
				} : s)
			};
			persistAuraRoom(updatedRoom).catch(() => {});
			return updatedRoom;
		}));
	};
	const clearEntranceBanner = () => {
		if (entranceTimerRef.current) {
			window.clearTimeout(entranceTimerRef.current);
			entranceTimerRef.current = null;
		}
		setEntranceBanner(null);
	};
	const triggerEntranceEffect = (item) => {
		const hasRemovedEntrance = currentUser.activeEntranceId === "";
		if (!item && hasRemovedEntrance) return;
		const resolvedItem = item || (currentUser.activeEntranceId ? storeItems.find((i) => i.id === currentUser.activeEntranceId && i.type === "entrance") : void 0);
		const vipInfo = vipTiers.find((v) => v.level === currentUser.vipLevel) || vipTiers[0];
		if (!resolvedItem && (currentUser.vipLevel < 1 || hasRemovedEntrance)) return;
		sound.unlockAudio();
		if (entranceTimerRef.current) {
			window.clearTimeout(entranceTimerRef.current);
			entranceTimerRef.current = null;
		}
		const resolved = resolveEntranceStageMedia(resolvedItem);
		setEntranceBanner({
			id: `ent_${Date.now()}`,
			userName: currentUser.displayName,
			userAvatar: currentUser.avatar,
			vipLevel: currentUser.vipLevel,
			entranceName: resolvedItem?.nameAr || vipInfo?.entranceName || "دخولية ملكية",
			entranceIcon: resolvedItem?.icon || vipInfo?.entranceIcon || "🚘",
			entrancePreviewUrl: resolved.previewThumbUrl,
			entranceVideoUrl: resolvedItem?.videoUrl?.trim() || void 0,
			entranceMediaUrl: resolved.primaryUrl,
			preferVideo: resolved.preferVideo,
			isVideoEntrance: resolved.isVideoEntrance,
			durationMs: resolved.durationMs,
			hasExplicitDuration: resolved.hasExplicitDuration
		});
		sound.playGiftSound("fanfare");
		const timerMs = resolved.primaryUrl ? 18e4 : resolved.durationMs;
		entranceTimerRef.current = window.setTimeout(() => {
			setEntranceBanner(null);
			entranceTimerRef.current = null;
		}, timerMs);
	};
	const ownedStoreItems = import_react.useMemo(() => {
		const userOwned = ownedStoreInventory[currentUser.id] || {};
		const now = Date.now();
		const result = {};
		for (const [id, rec] of Object.entries(userOwned)) if (rec && rec.itemId && new Date(rec.expiresAt).getTime() > now) result[id] = rec;
		const equippedIds = [
			currentUser.activeFrameId,
			currentUser.activeEntranceId,
			currentUser.activeBadgeId,
			currentUser.activeBubbleId
		].filter((id) => Boolean(id && id.trim().length > 0));
		for (const eqId of equippedIds) if (!result[eqId] && storeItems.some((s) => s.id === eqId)) {
			const matched = storeItems.find((s) => s.id === eqId);
			const days = Math.max(1, matched?.durationDays || 30);
			result[eqId] = {
				itemId: eqId,
				purchasedAt: new Date(now).toISOString(),
				expiresAt: new Date(now + days * 24 * 60 * 60 * 1e3).toISOString()
			};
		}
		return result;
	}, [
		ownedStoreInventory,
		currentUser.id,
		currentUser.activeFrameId,
		currentUser.activeEntranceId,
		currentUser.activeBadgeId,
		currentUser.activeBubbleId,
		storeItems
	]);
	const isStoreItemOwned = (itemId) => {
		if (!itemId) return false;
		const rec = ownedStoreItems[itemId];
		if (!rec) return false;
		return new Date(rec.expiresAt).getTime() > Date.now();
	};
	const purchaseStoreItem = (itemId) => {
		const item = storeItems.find((i) => i.id === itemId);
		if (!item) return false;
		if (currentUser.coins < item.priceCoins) {
			setActiveModal("wallet");
			return false;
		}
		setUsers((prev) => prev.map((u) => {
			if (u.id === currentUser.id) {
				const updated = {
					...u,
					coins: u.coins - item.priceCoins
				};
				persistAuraUser(updated).catch(() => {});
				return updated;
			}
			return u;
		}));
		const nowMs = Date.now();
		const durationMs = Math.max(1, item.durationDays || 30) * 24 * 60 * 60 * 1e3;
		setOwnedStoreInventory((prev) => {
			const userMap = { ...prev[currentUser.id] || {} };
			const existing = userMap[item.id];
			const baseMs = existing && new Date(existing.expiresAt).getTime() > nowMs ? new Date(existing.expiresAt).getTime() : nowMs;
			userMap[item.id] = {
				itemId: item.id,
				purchasedAt: existing?.purchasedAt || new Date(nowMs).toISOString(),
				expiresAt: new Date(baseMs + durationMs).toISOString()
			};
			return {
				...prev,
				[currentUser.id]: userMap
			};
		});
		const tx = {
			id: `tx_${Date.now()}`,
			userId: currentUser.id,
			userName: currentUser.displayName,
			type: "item_purchase",
			coinsDelta: -item.priceCoins,
			diamondsDelta: 0,
			details: `شراء ${item.nameAr} من المتجر ونقله إلى الحقيبة لمدة ${item.durationDays} يوم`,
			timestamp: (/* @__PURE__ */ new Date()).toISOString().replace("T", " ").slice(0, 16),
			status: "completed"
		};
		setTransactions((prev) => [tx, ...prev]);
		persistAuraTransaction(tx).catch(() => {});
		sound.playWinChime();
		return true;
	};
	const equipInventoryItem = (type, itemId, bypassOwnership = false) => {
		if (itemId && type !== "vip" && !bypassOwnership && !isStoreItemOwned(itemId)) return false;
		setUsers((prev) => prev.map((u) => {
			if (u.id === currentUser.id) {
				let updated = u;
				if (type === "frame") updated = {
					...u,
					activeFrameId: itemId
				};
				if (type === "entrance") updated = {
					...u,
					activeEntranceId: itemId
				};
				if (type === "badge") updated = {
					...u,
					activeBadgeId: itemId
				};
				if (type === "bubble") updated = {
					...u,
					activeBubbleId: itemId
				};
				persistAuraUser(updated).catch(() => {});
				return updated;
			}
			return u;
		}));
		if (type === "frame") syncUserFrameToSeats(itemId);
		if (type === "entrance") {
			if (!itemId) clearEntranceBanner();
			else if (activeRoomId) {
				const targetEntrance = storeItems.find((i) => i.id === itemId && i.type === "entrance");
				if (targetEntrance) triggerEntranceEffect(targetEntrance);
			}
		}
		sound.playMicClick(Boolean(itemId));
		return true;
	};
	const convertDiamondsToCoins = (diamondsToExchange) => {
		if (currentUser.diamonds < diamondsToExchange) return false;
		const coinsReceived = Math.round(diamondsToExchange * 2.1);
		setUsers((prev) => prev.map((u) => {
			if (u.id === currentUser.id) {
				const updated = {
					...u,
					diamonds: u.diamonds - diamondsToExchange,
					coins: u.coins + coinsReceived
				};
				persistAuraUser(updated).catch(() => {});
				return updated;
			}
			return u;
		}));
		const tx = {
			id: `tx_${Date.now()}`,
			userId: currentUser.id,
			userName: currentUser.displayName,
			type: "exchange_diamonds",
			coinsDelta: coinsReceived,
			diamondsDelta: -diamondsToExchange,
			details: `استبدال ${diamondsToExchange.toLocaleString()} ألماس بـ ${coinsReceived.toLocaleString()} عملة ذهبية`,
			timestamp: (/* @__PURE__ */ new Date()).toISOString().replace("T", " ").slice(0, 16),
			status: "completed"
		};
		setTransactions((prev) => [tx, ...prev]);
		persistAuraTransaction(tx).catch(() => {});
		return true;
	};
	const requestWithdrawal = (diamondsAmount, bankInfo) => {
		if (currentUser.diamonds < diamondsAmount) return false;
		setUsers((prev) => prev.map((u) => {
			if (u.id === currentUser.id) {
				const updated = {
					...u,
					diamonds: u.diamonds - diamondsAmount
				};
				persistAuraUser(updated).catch(() => {});
				return updated;
			}
			return u;
		}));
		const usdValue = Math.round(diamondsAmount / 200);
		const tx = {
			id: `tx_${Date.now()}`,
			userId: currentUser.id,
			userName: currentUser.displayName,
			type: "withdrawal",
			coinsDelta: 0,
			diamondsDelta: -diamondsAmount,
			details: `طلب سحب أرباح بقيمة $${usdValue.toLocaleString()} (${diamondsAmount.toLocaleString()} ألماس) إلى حساب: ${bankInfo}`,
			timestamp: (/* @__PURE__ */ new Date()).toISOString().replace("T", " ").slice(0, 16),
			status: "pending"
		};
		setTransactions((prev) => [tx, ...prev]);
		persistAuraTransaction(tx).catch(() => {});
		return true;
	};
	const createVoiceRoom = (roomData) => {
		const cleanBgUrl = roomData.backgroundUrl?.trim() || "";
		const newRoom = {
			id: `room_${Date.now()}`,
			roomNo: `${Math.floor(1e3 + Math.random() * 9e3)}`,
			title: roomData.title,
			description: "مرحباً بالجميع في غرفتنا الصوتية",
			coverImage: cleanBgUrl || "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80",
			backgroundId: roomData.backgroundId || (cleanBgUrl ? void 0 : "midnight"),
			backgroundUrl: cleanBgUrl || void 0,
			category: roomData.category,
			type: roomData.type,
			password: roomData.type === "password" ? roomData.password?.trim() || "" : void 0,
			ownerId: currentUser.id,
			ownerName: currentUser.displayName,
			ownerAvatar: currentUser.avatar,
			seatCount: roomData.seatCount,
			seats: Array.from({ length: roomData.seatCount }, (_, i) => ({
				index: i,
				userId: i === 0 ? currentUser.id : null,
				userName: i === 0 ? currentUser.displayName : void 0,
				userAvatar: i === 0 ? currentUser.avatar : void 0,
				vipLevel: i === 0 ? currentUser.vipLevel : 0,
				level: i === 0 ? currentUser.level : 0,
				activeFrameId: i === 0 ? currentUser.activeFrameId : void 0,
				isMuted: false,
				isLocked: false,
				isReserved: false,
				isSpeaking: i === 0,
				audioLevel: i === 0 ? 50 : 0
			})),
			moderators: [currentUser.id],
			bannedUserIds: [],
			onlineViewersCount: 1,
			totalDiamondsEarned: 0,
			tags: ["غرفة جديدة", "ترحيب"]
		};
		setRooms((prev) => [newRoom, ...prev]);
		persistAuraRoom(newRoom).catch(() => {});
		if (isAdminAccount) sendAdminCommand("CREATE_ROOM", { room: newRoom });
		setActiveRoomId(newRoom.id);
		setActiveRoomMessages([{
			id: `msg_${Date.now()}`,
			roomId: newRoom.id,
			senderId: "system",
			senderName: "نظام الغرفة",
			senderAvatar: "",
			vipLevel: 0,
			level: 0,
			isSystem: true,
			text: `أنشأ ${currentUser.displayName} الغرفة (${newRoom.title}) كمالك الغرفة 👑`,
			timestamp: (/* @__PURE__ */ new Date()).toLocaleTimeString([], {
				hour: "2-digit",
				minute: "2-digit"
			})
		}]);
	};
	const updateUserProfile = (updates) => {
		setUsers((prev) => prev.map((u) => {
			if (u.id === currentUser.id) {
				const updated = {
					...u,
					...updates
				};
				persistAuraUser(updated).catch(() => {});
				return updated;
			}
			return u;
		}));
	};
	const adminAddBalance = (userId, coins, diamonds, note) => {
		const targetUser = users.find((u) => u.id === userId);
		const nextCoins = targetUser ? Math.max(0, targetUser.coins + coins) : void 0;
		const nextDiamonds = targetUser ? Math.max(0, targetUser.diamonds + diamonds) : void 0;
		setUsers((prev) => prev.map((u) => {
			if (u.id === userId) {
				const updated = {
					...u,
					coins: Math.max(0, u.coins + coins),
					diamonds: Math.max(0, u.diamonds + diamonds)
				};
				persistAuraUser(updated).catch(() => {});
				return updated;
			}
			return u;
		}));
		const tx = {
			id: `tx_${Date.now()}`,
			userId,
			userName: targetUser?.displayName || "مستخدم",
			type: "admin_adjustment",
			coinsDelta: coins,
			diamondsDelta: diamonds,
			details: `تعديل رصيد إداري: ${note}`,
			timestamp: (/* @__PURE__ */ new Date()).toISOString().replace("T", " ").slice(0, 16),
			status: "completed"
		};
		setTransactions((prev) => [tx, ...prev]);
		persistAuraTransaction(tx).catch(() => {});
		sendAdminCommand("ADD_BALANCE", {
			userId,
			...nextCoins !== void 0 ? { coins: nextCoins } : {},
			...nextDiamonds !== void 0 ? { diamonds: nextDiamonds } : {},
			coinsDelta: coins,
			diamondsDelta: diamonds,
			note,
			tx
		});
	};
	const adminToggleBan = (userId) => {
		const target = users.find((u) => u.id === userId);
		const nextBanned = target ? !target.isBanned : true;
		setUsers((prev) => prev.map((u) => {
			if (u.id === userId) {
				const updated = {
					...u,
					isBanned: !u.isBanned
				};
				persistAuraUser(updated).catch(() => {});
				return updated;
			}
			return u;
		}));
		sendAdminCommand("TOGGLE_BAN", {
			userId,
			isBanned: nextBanned
		});
	};
	const adminToggleMute = (userId) => {
		const target = users.find((u) => u.id === userId);
		const nextMuted = target ? !target.isMuted : true;
		setUsers((prev) => prev.map((u) => {
			if (u.id === userId) {
				const updated = {
					...u,
					isMuted: !u.isMuted
				};
				persistAuraUser(updated).catch(() => {});
				return updated;
			}
			return u;
		}));
		sendAdminCommand("TOGGLE_MUTE", {
			userId,
			isMuted: nextMuted
		});
	};
	const adminSetVipLevel = (userId, level) => {
		setUsers((prev) => prev.map((u) => {
			if (u.id === userId) {
				const updated = {
					...u,
					vipLevel: level
				};
				persistAuraUser(updated).catch(() => {});
				return updated;
			}
			return u;
		}));
		sendAdminCommand("SET_VIP_LEVEL", {
			userId,
			vipLevel: level
		});
	};
	const adminCloseRoom = (roomId) => {
		if (activeRoomId === roomId) leaveRoom();
		setRooms((prev) => prev.filter((r) => r.id !== roomId));
		removeAuraRoom(roomId).catch(() => {});
		sendAdminCommand("CLOSE_ROOM", { roomId });
	};
	const sendAdminCatalogMutation = import_react.useCallback(async (url, method, body) => {
		const headers = await getAdminAuthHeaders();
		if (!headers) {
			setCloudMessage("يرجى تسجيل الدخول بحساب المدير لمزامنة التعديلات لجميع المستخدمين.");
			return { ok: false };
		}
		try {
			const res = await fetch(resolveApiUrl(url), {
				method,
				headers,
				body: body !== void 0 ? JSON.stringify(body) : void 0
			});
			const contentType = res.headers.get("content-type") || "";
			if (res.status === 404 || !contentType.includes("application/json")) return { ok: false };
			const jsonData = await res.json().catch(() => ({}));
			if (!res.ok) {
				setCloudMessage(typeof jsonData.error === "string" && jsonData.error || "تعذر مزامنة التعديل مع الخادم لجميع المستخدمين.");
				return {
					ok: false,
					data: jsonData
				};
			}
			if (typeof jsonData.version === "number") lastServerVersionsRef.current.catalog = jsonData.version;
			return {
				ok: true,
				data: jsonData
			};
		} catch {
			if (!firebaseUser) setCloudMessage("تعذر الاتصال بالخادم لمزامنة التعديل، يرجى المحاولة مرة أخرى.");
			return { ok: false };
		}
	}, [getAdminAuthHeaders, firebaseUser]);
	const hasSyncedLocalCatalogToServerRef = import_react.useRef(false);
	(0, import_react.useEffect)(() => {
		if (!isAdminAccount || hasSyncedLocalCatalogToServerRef.current) return;
		const realLocalGifts = sanitizeRealGifts(gifts);
		const realLocalStore = sanitizeRealStoreItems(storeItems);
		const realLocalBgs = roomBackgrounds;
		if (realLocalGifts.length === 0 && realLocalStore.length === 0 && realLocalBgs.length === 0) return;
		hasSyncedLocalCatalogToServerRef.current = true;
		sendAdminCatalogMutation("/api/admin/catalog/sync", "POST", {
			gifts: realLocalGifts,
			storeItems: realLocalStore,
			roomBackgrounds: realLocalBgs
		}).then((result) => {
			if (result.ok && result.data) handleServerCatalogPayload(result.data);
		});
	}, [
		isAdminAccount,
		gifts,
		storeItems,
		roomBackgrounds,
		sendAdminCatalogMutation,
		handleServerCatalogPayload
	]);
	const adminCreateRoomBackground = (bg) => {
		const nowIso = (/* @__PURE__ */ new Date()).toISOString();
		const newBg = {
			id: `roombg_${Date.now()}`,
			nameAr: bg.nameAr.trim() || "خلفية غرفة مخصصة",
			imageUrl: bg.imageUrl.trim(),
			createdAt: nowIso.slice(0, 10),
			updatedAt: nowIso
		};
		serverCatalogRef.current = {
			...serverCatalogRef.current,
			deletedBackgroundIds: serverCatalogRef.current.deletedBackgroundIds.filter((id) => id !== newBg.id),
			roomBackgrounds: [newBg, ...serverCatalogRef.current.roomBackgrounds.filter((b) => b.id !== newBg.id)]
		};
		setRoomBackgrounds((prev) => [newBg, ...prev]);
		sendAdminCatalogMutation("/api/admin/catalog/backgrounds", "POST", newBg);
		persistAuraRoomBackground(newBg).catch(() => {});
		return newBg;
	};
	const adminDeleteRoomBackground = (bgId) => {
		serverCatalogRef.current = {
			...serverCatalogRef.current,
			deletedBackgroundIds: Array.from(/* @__PURE__ */ new Set([bgId, ...serverCatalogRef.current.deletedBackgroundIds])),
			roomBackgrounds: serverCatalogRef.current.roomBackgrounds.filter((b) => b.id !== bgId)
		};
		setRoomBackgrounds((prev) => prev.filter((b) => b.id !== bgId));
		sendAdminCatalogMutation(`/api/admin/catalog/backgrounds/${encodeURIComponent(bgId)}`, "DELETE");
		removeAuraRoomBackground(bgId).catch(() => {});
	};
	const adminCreateGift = (gift) => {
		const stampedGift = {
			...gift,
			updatedAt: (/* @__PURE__ */ new Date()).toISOString()
		};
		serverCatalogRef.current = {
			...serverCatalogRef.current,
			deletedGiftIds: serverCatalogRef.current.deletedGiftIds.filter((id) => id !== stampedGift.id),
			gifts: [stampedGift, ...serverCatalogRef.current.gifts.filter((g) => g.id !== stampedGift.id && !g.isStarterDefault && g.id !== "gift_starter_default")]
		};
		setGifts((prev) => [stampedGift, ...prev.filter((g) => g.id !== stampedGift.id && !g.isStarterDefault && g.id !== "gift_starter_default")]);
		sendAdminCatalogMutation("/api/admin/catalog/gifts", "POST", stampedGift).then((res) => {
			if (res.ok) setCloudMessage("تم حفظ الهدية على السيرفر ونشرها لجميع المستخدمين المتصلين فوراً.");
		});
		persistAuraGift(stampedGift).catch(() => {});
	};
	const adminUpdateGift = (giftId, updates) => {
		const nowIso = (/* @__PURE__ */ new Date()).toISOString();
		const stampedUpdates = {
			...updates,
			updatedAt: nowIso
		};
		const currentGift = gifts.find((g) => g.id === giftId);
		const mergedGift = currentGift ? {
			...currentGift,
			...stampedUpdates
		} : stampedUpdates;
		if (giftId !== "gift_starter_default" && currentGift) serverCatalogRef.current = {
			...serverCatalogRef.current,
			gifts: serverCatalogRef.current.gifts.map((g) => g.id === giftId ? {
				...g,
				...stampedUpdates
			} : g)
		};
		setGifts((prev) => prev.map((g) => {
			if (g.id === giftId) {
				const updated = {
					...g,
					...stampedUpdates
				};
				if (!updated.isStarterDefault && updated.id !== "gift_starter_default") persistAuraGift(updated).catch(() => {});
				return updated;
			}
			return g;
		}));
		if (giftId !== "gift_starter_default") sendAdminCatalogMutation(`/api/admin/catalog/gifts/${encodeURIComponent(giftId)}`, "PUT", mergedGift);
	};
	const adminDeleteGift = (giftId) => {
		if (giftId === "gift_starter_default") return;
		serverCatalogRef.current = {
			...serverCatalogRef.current,
			deletedGiftIds: Array.from(/* @__PURE__ */ new Set([giftId, ...serverCatalogRef.current.deletedGiftIds])),
			gifts: serverCatalogRef.current.gifts.filter((g) => g.id !== giftId && !g.isStarterDefault && g.id !== "gift_starter_default")
		};
		setGifts((prev) => {
			const remaining = prev.filter((g) => g.id !== giftId && !g.isStarterDefault && g.id !== "gift_starter_default");
			return remaining.length > 0 ? remaining : [STARTER_DEFAULT_GIFT];
		});
		sendAdminCatalogMutation(`/api/admin/catalog/gifts/${encodeURIComponent(giftId)}`, "DELETE");
		removeAuraGift(giftId).catch(() => {});
	};
	const adminCreateStoreItem = (item) => {
		const stampedItem = {
			...item,
			updatedAt: (/* @__PURE__ */ new Date()).toISOString()
		};
		serverCatalogRef.current = {
			...serverCatalogRef.current,
			deletedStoreIds: serverCatalogRef.current.deletedStoreIds.filter((id) => id !== stampedItem.id),
			storeItems: [stampedItem, ...serverCatalogRef.current.storeItems.filter((i) => i.id !== stampedItem.id)]
		};
		setStoreItems((prev) => [stampedItem, ...prev.filter((i) => i.id !== stampedItem.id)]);
		sendAdminCatalogMutation("/api/admin/catalog/store-items", "POST", stampedItem);
		persistAuraStoreItem(stampedItem).catch(() => {});
	};
	const adminUpdateStoreItem = (itemId, updates) => {
		const nowIso = (/* @__PURE__ */ new Date()).toISOString();
		const stampedUpdates = {
			...updates,
			updatedAt: nowIso
		};
		const currentItem = storeItems.find((item) => item.id === itemId);
		const mergedItem = currentItem ? {
			...currentItem,
			...stampedUpdates
		} : stampedUpdates;
		serverCatalogRef.current = {
			...serverCatalogRef.current,
			storeItems: serverCatalogRef.current.storeItems.map((item) => item.id === itemId ? {
				...item,
				...stampedUpdates
			} : item)
		};
		setStoreItems((prev) => prev.map((item) => {
			if (item.id === itemId) {
				const updated = {
					...item,
					...stampedUpdates
				};
				persistAuraStoreItem(updated).catch(() => {});
				return updated;
			}
			return item;
		}));
		sendAdminCatalogMutation(`/api/admin/catalog/store-items/${encodeURIComponent(itemId)}`, "PUT", mergedItem);
	};
	const adminDeleteStoreItem = (itemId) => {
		serverCatalogRef.current = {
			...serverCatalogRef.current,
			deletedStoreIds: Array.from(/* @__PURE__ */ new Set([itemId, ...serverCatalogRef.current.deletedStoreIds])),
			storeItems: serverCatalogRef.current.storeItems.filter((item) => item.id !== itemId)
		};
		setStoreItems((prev) => prev.filter((item) => item.id !== itemId));
		sendAdminCatalogMutation(`/api/admin/catalog/store-items/${encodeURIComponent(itemId)}`, "DELETE");
		removeAuraStoreItem(itemId).catch(() => {});
	};
	const adminCreateAgent = (agentData) => {
		const newAgent = {
			id: `agent_${Date.now()}`,
			agentCode: `AGENT-${Math.floor(100 + Math.random() * 900)}`,
			name: agentData.name || "وكيل جديد",
			phone: agentData.phone || "+966 50 000 0000",
			avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
			balanceCoins: agentData.balanceCoins || 1e6,
			totalRechargedCoins: 0,
			totalOperations: 0,
			commissionEarnedCoins: 0,
			commissionRate: agentData.commissionRate || 5,
			status: "active"
		};
		setAgents((prev) => [newAgent, ...prev]);
		persistAuraAgent(newAgent).catch(() => {});
		sendAdminCommand("CREATE_AGENT", { agent: newAgent });
	};
	const adminTopupAgent = (agentId, coins) => {
		const targetAgent = agents.find((a) => a.id === agentId);
		const updatedAgent = targetAgent ? {
			...targetAgent,
			balanceCoins: targetAgent.balanceCoins + coins
		} : null;
		setAgents((prev) => prev.map((a) => {
			if (a.id === agentId) {
				const updated = {
					...a,
					balanceCoins: a.balanceCoins + coins
				};
				persistAuraAgent(updated).catch(() => {});
				return updated;
			}
			return a;
		}));
		if (updatedAgent) sendAdminCommand("TOPUP_AGENT", { agent: updatedAgent });
	};
	const adminUpdateAgencyStatus = (agencyId, status) => {
		setAgencies((prev) => prev.map((a) => {
			if (a.id === agencyId) {
				const updated = {
					...a,
					status
				};
				persistAuraAgency(updated).catch(() => {});
				return updated;
			}
			return a;
		}));
		sendAdminCommand("UPDATE_AGENCY_STATUS", {
			agencyId,
			status
		});
	};
	const triggerSoundboard = (type) => {
		if (type === "applause") sound.playApplause();
		else if (type === "oud") sound.playOudSample();
		else sound.playGiftSound(type);
		if (activeRoom) {
			const msg = {
				id: `msg_${Date.now()}`,
				roomId: activeRoom.id,
				senderId: currentUser.id,
				senderName: currentUser.displayName,
				senderAvatar: currentUser.avatar,
				vipLevel: currentUser.vipLevel,
				level: currentUser.level,
				isSystem: true,
				text: `قام ${currentUser.displayName} بتشغيل مؤثر صوتي (${type === "applause" ? "تصفيق حار 👏" : type === "oud" ? "تقاسيم عود 🎶" : type})`,
				timestamp: (/* @__PURE__ */ new Date()).toLocaleTimeString([], {
					hour: "2-digit",
					minute: "2-digit"
				})
			};
			setActiveRoomMessages((prev) => [...prev, msg]);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppContext.Provider, {
		value: {
			lang,
			setLang,
			t,
			currentView,
			setCurrentView,
			isAdminAccount,
			adminEmail: adminSession?.email || adminAuthStatus?.emailHint || ADMIN_EMAIL,
			adminSession,
			adminAuthStatus,
			refreshAdminAuthStatus,
			claimAdminEmailAccount,
			loginAdminEmailAccount,
			updateAdminEmailCredentials,
			activeTab,
			setActiveTab,
			currentUser,
			users,
			rooms,
			roomBackgrounds,
			activeRoom,
			activeRoomMessages,
			gifts,
			vipTiers,
			storeItems,
			agencies,
			agents,
			staff,
			transactions,
			flyingGift,
			entranceBanner,
			luckyConfig,
			updateLuckyConfig,
			agoraConfig,
			updateAgoraConfig,
			bagGifts,
			addBagGifts,
			consumeBagGift,
			globalJackpotBanner,
			triggerGlobalJackpotBanner,
			evaluateLuckyGiftWin,
			activeModal,
			setActiveModal,
			viewingProfileUser,
			setViewingProfileUser,
			isRoomOwner,
			isRoomModerator,
			canManageRoom,
			joinRoom,
			leaveRoom,
			takeSeat,
			leaveSeat,
			toggleMic,
			toggleSeatLock,
			toggleAllSeatsLock,
			toggleSeatMuteByModerator,
			kickUserFromSeat,
			clearSeatHeartPoints,
			toggleRoomModerator,
			adminToggleRoomModerator,
			banUserFromRoom,
			unbanUserFromRoom,
			updateRoomPrivacySettings,
			sendRoomMessage,
			appendRoomMessage,
			sendGift,
			triggerFlyingGift,
			rechargeCoins,
			agentRechargeUser,
			purchaseVip,
			ownedStoreItems,
			isStoreItemOwned,
			purchaseStoreItem,
			equipInventoryItem,
			triggerEntranceEffect,
			clearEntranceBanner,
			convertDiamondsToCoins,
			requestWithdrawal,
			createVoiceRoom,
			updateUserProfile,
			adminAddBalance,
			adminToggleBan,
			adminToggleMute,
			adminSetVipLevel,
			adminCloseRoom,
			adminCreateRoomBackground,
			adminDeleteRoomBackground,
			adminCreateGift,
			adminUpdateGift,
			adminDeleteGift,
			adminCreateStoreItem,
			adminUpdateStoreItem,
			adminDeleteStoreItem,
			adminCreateAgent,
			adminTopupAgent,
			adminUpdateAgencyStatus,
			switchUserIdentity,
			triggerSoundboard,
			firebaseUser,
			authReady,
			authLoading,
			authError,
			clearAuthError,
			needsProfileCompletion,
			guestAccessBypass,
			enterAsGuestDemo,
			returnToAuthScreen,
			firebaseStatus,
			isCloudSyncing,
			cloudMessage,
			signInWithGoogleCloud,
			registerWithEmailProfile,
			loginWithEmail,
			completeGoogleOnboardingProfile,
			signOutCloud,
			testCloudConnection,
			syncAllDataToCloud,
			purgeMockCatalogs
		},
		children
	});
};
var useApp = () => {
	const context = (0, import_react.useContext)(AppContext);
	if (!context) throw new Error("useApp must be used within an AppProvider");
	return context;
};
// src/components/Navbar.tsx
var Navbar = () => {
	const { t, lang, setLang, currentUser, users, switchUserIdentity, currentView, setCurrentView, isAdminAccount, setActiveModal, setViewingProfileUser, firebaseUser, adminSession, firebaseStatus, signOutCloud, returnToAuthScreen } = useApp();
	const [isAudioMuted, setIsAudioMuted] = (0, import_react.useState)(sound.getIsMuted());
	const [showIdentityMenu, setShowIdentityMenu] = (0, import_react.useState)(false);
	const [showLangMenu, setShowLangMenu] = (0, import_react.useState)(false);
	const toggleSound = () => {
		const muted = sound.toggleMute();
		setIsAudioMuted(muted);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "sticky top-0 z-40 bg-[#0b101d]/95 backdrop-blur-md border-b border-white/10 text-slate-100",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-7xl mx-auto px-3 sm:px-6 min-h-14 py-2 flex flex-wrap items-center justify-between gap-2.5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						onClick: () => setCurrentView("user_app"),
						className: "flex items-center gap-2.5 cursor-pointer group",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/logo.png",
							alt: "فوكاشات",
							referrerPolicy: "no-referrer",
							className: "w-9 h-9 rounded-xl object-cover ring-1 ring-amber-400/50 shadow-lg shadow-amber-500/20"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-black text-base sm:text-lg tracking-tight bg-gradient-to-r from-amber-300 via-amber-100 to-amber-300 bg-clip-text text-transparent",
								children: "فوكاشات"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[10px] uppercase font-mono font-bold text-amber-300 hidden sm:inline",
								children: "VIP"
							})]
						}) })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "hidden lg:flex items-center p-1 bg-slate-950/80 rounded-xl border border-white/10 text-xs font-medium",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => setCurrentView("user_app"),
								className: `flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${currentView === "user_app" ? "bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 shadow-sm font-bold" : "text-slate-400 hover:text-slate-200"}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Radio, { className: "w-3.5 h-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t.userApp })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => setCurrentView("agent_portal"),
								className: `flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${currentView === "agent_portal" ? "bg-gradient-to-r from-teal-500 to-cyan-600 text-white shadow-sm font-bold" : "text-slate-400 hover:text-slate-200"}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CreditCard, { className: "w-3.5 h-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t.rechargeAgent })]
							}),
							isAdminAccount && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => setCurrentView("admin_dashboard"),
								className: `flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${currentView === "admin_dashboard" ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-sm font-bold" : "text-slate-400 hover:text-slate-200"}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shield, { className: "w-3.5 h-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t.adminDashboard })]
							})
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex lg:hidden w-full order-last items-center gap-1.5 pt-1 border-t border-white/8 text-[11px] font-bold",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => setCurrentView("user_app"),
							className: `flex-1 min-h-[38px] flex items-center justify-center gap-1.5 px-2.5 py-1.5 rounded-xl transition-all ${currentView === "user_app" ? "bg-amber-400 text-slate-950" : "bg-white/5 text-slate-300 hover:bg-white/10"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Radio, { className: "w-3.5 h-3.5 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "truncate",
								children: t.userApp
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => setCurrentView("agent_portal"),
							className: `flex-1 min-h-[38px] flex items-center justify-center gap-1.5 px-2.5 py-1.5 rounded-xl transition-all ${currentView === "agent_portal" ? "bg-teal-500 text-slate-950" : "bg-white/5 text-slate-300 hover:bg-white/10"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CreditCard, { className: "w-3.5 h-3.5 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "truncate",
								children: t.rechargeAgent
							})]
						}),
						isAdminAccount && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => setCurrentView("admin_dashboard"),
							className: `flex-1 min-h-[38px] flex items-center justify-center gap-1.5 px-2.5 py-1.5 rounded-xl transition-all ${currentView === "admin_dashboard" ? "bg-indigo-500 text-white" : "bg-white/5 text-slate-300 hover:bg-white/10"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shield, { className: "w-3.5 h-3.5 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "truncate",
								children: t.adminDashboard
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						onClick: () => setActiveModal("wallet"),
						className: "flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800/80 hover:bg-slate-800 border border-amber-500/30 cursor-pointer transition-colors group",
						title: "شحن العملات الذهبية",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Coins, { className: "w-3.5 h-3.5" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-baseline gap-1 text-right",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-mono tabular-nums text-xs sm:text-sm font-bold text-amber-300",
									children: currentUser.coins.toLocaleString()
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[10px] text-amber-400/80 hidden sm:inline",
									children: t.coins
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "w-5 h-5 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center text-xs font-bold group-hover:scale-110 transition-transform",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "w-3 h-3" })
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						onClick: () => setActiveModal("wallet"),
						className: "flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800/80 hover:bg-slate-800 border border-cyan-500/30 cursor-pointer transition-colors group",
						title: "رصيد الألماس القابل للسحب",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gem, { className: "w-3.5 h-3.5" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-baseline gap-1 text-right",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono tabular-nums text-xs sm:text-sm font-bold text-cyan-300",
								children: currentUser.diamonds.toLocaleString()
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[10px] text-cyan-400/80 hidden sm:inline",
								children: t.diamonds
							})]
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: toggleSound,
							className: `p-2 rounded-xl border transition-colors ${isAudioMuted ? "bg-rose-500/10 border-rose-500/30 text-rose-400" : "bg-slate-800/80 border-slate-700 text-slate-300 hover:text-amber-400"}`,
							title: isAudioMuted ? "تفعيل الصوت" : "كتم المؤثرات الصوتية",
							children: isAudioMuted ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VolumeX, { className: "w-4 h-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Volume2, { className: "w-4 h-4" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => setShowLangMenu(!showLangMenu),
								className: "flex items-center gap-1 px-2.5 py-1.5 rounded-xl bg-slate-800/80 border border-slate-700 text-slate-300 hover:text-white transition-colors text-xs",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Globe, { className: "w-3.5 h-3.5 text-amber-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "uppercase font-mono",
									children: lang
								})]
							}), showLangMenu && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute top-full mt-2 ltr:right-0 rtl:left-0 w-44 bg-slate-900 border border-slate-800 rounded-xl shadow-2xl p-1 z-50",
								children: [
									{
										code: "ar",
										label: "العربية (RTL)",
										flag: "🇸🇦"
									},
									{
										code: "en",
										label: "English",
										flag: "🇬🇧"
									},
									{
										code: "zh",
										label: "中文 (Chinese)",
										flag: "🇨🇳"
									},
									{
										code: "hi",
										label: "हिन्दी (Hindi)",
										flag: "🇮🇳"
									},
									{
										code: "id",
										label: "Bahasa Indonesia",
										flag: "🇮🇩"
									},
									{
										code: "fil",
										label: "Filipino (Tagalog)",
										flag: "🇵🇭"
									}
								].map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									onClick: () => {
										setLang(l.code);
										setShowLangMenu(false);
									},
									className: `w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs text-right transition-colors ${lang === l.code ? "bg-amber-500/20 text-amber-300 font-bold" : "text-slate-300 hover:bg-slate-800"}`,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: l.label }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: l.flag })]
								}, l.code))
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => setActiveModal("messages"),
							className: "p-2 rounded-xl bg-slate-800/80 border border-slate-700 text-slate-300 hover:text-white transition-colors relative",
							title: t.messages,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "w-4 h-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-rose-500" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => setActiveModal("vip"),
							className: "hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-amber-500/20 via-yellow-500/20 to-amber-600/20 border border-amber-500/40 text-amber-300 hover:border-amber-400 transition-all text-xs font-bold",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Crown, { className: "w-3.5 h-3.5 text-amber-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["VIP ", currentUser.vipLevel] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								onClick: () => setShowIdentityMenu(!showIdentityMenu),
								className: "flex items-center gap-2 p-1 pl-2 rounded-xl bg-slate-800/90 border border-slate-700 hover:border-amber-500/50 cursor-pointer transition-all",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: currentUser.avatar,
										alt: currentUser.displayName,
										className: "w-8 h-8 rounded-full object-cover ring-2 ring-amber-400"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "absolute -bottom-1 -right-1 px-1 rounded-full bg-amber-500 text-slate-950 font-bold text-[9px] leading-tight",
										children: ["Lv", currentUser.level]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "hidden md:block text-right",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-xs font-semibold text-slate-200 truncate max-w-[100px]",
										children: currentUser.displayName
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "text-[10px] text-amber-400 font-mono",
										children: ["ID: ", currentUser.userCode]
									})]
								})]
							}), showIdentityMenu && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "absolute top-full mt-2 ltr:right-0 rtl:left-0 w-64 bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl p-2 z-50",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "p-2 border-b border-slate-800 mb-2",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "text-xs text-slate-400 mb-1",
												children: "المستخدم الحالي:"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "font-bold text-sm text-slate-100 flex items-center justify-between",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: currentUser.displayName }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "text-xs text-amber-400",
													children: ["VIP ", currentUser.vipLevel]
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "text-[11px] text-slate-400 font-mono mt-0.5",
												children: ["ID: ", currentUser.userCode]
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-1 mb-2",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
												onClick: () => {
													setViewingProfileUser(currentUser);
													setActiveModal("profile");
													setShowIdentityMenu(false);
												},
												className: "w-full text-right px-3 py-1.5 rounded-lg text-xs text-slate-200 hover:bg-slate-800 flex items-center gap-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserCheck, { className: "w-3.5 h-3.5 text-amber-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "فتح البروفايل الخاص بي" })]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
												onClick: () => {
													setActiveModal("wallet");
													setShowIdentityMenu(false);
												},
												className: "w-full text-right px-3 py-1.5 rounded-lg text-xs text-slate-200 hover:bg-slate-800 flex items-center gap-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Coins, { className: "w-3.5 h-3.5 text-amber-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "المحفظة وسجل المعاملات" })]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
												onClick: () => {
													setActiveModal("backpack");
													setShowIdentityMenu(false);
												},
												className: "w-full text-right px-3 py-1.5 rounded-lg text-xs text-slate-200 hover:bg-slate-800 flex items-center gap-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Crown, { className: "w-3.5 h-3.5 text-purple-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "الحقيبة والإطارات المملوكة" })]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
												onClick: () => {
													if (firebaseUser || adminSession) signOutCloud();
													else returnToAuthScreen();
													setShowIdentityMenu(false);
												},
												className: "w-full text-right px-3 py-1.5 rounded-lg text-xs text-emerald-300 hover:bg-slate-800 flex items-center justify-between gap-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: firebaseUser ? `تسجيل الخروج (${firebaseUser.email?.split("@")[0] || "حسابك"})` : adminSession ? `تسجيل الخروج (${adminSession.email})` : "صفحة تسجيل الدخول / إنشاء حساب" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-[10px] text-slate-400 font-mono",
													children: firebaseStatus.projectId
												})]
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "pt-2 border-t border-slate-800",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-[11px] text-slate-400 px-2 mb-1",
											children: "تبديل الحساب التجريبي:"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "space-y-1 max-h-36 overflow-y-auto",
											children: users.map((u) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
												onClick: () => {
													switchUserIdentity(u.id);
													setShowIdentityMenu(false);
												},
												className: `w-full flex items-center gap-2 p-1.5 rounded-lg text-right text-xs transition-colors ${u.id === currentUser.id ? "bg-amber-500/20 text-amber-300 font-bold" : "text-slate-300 hover:bg-slate-800"}`,
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
													src: u.avatar,
													alt: u.displayName,
													className: "w-6 h-6 rounded-full object-cover"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "truncate flex-1",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: u.displayName }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "text-[9px] text-slate-400",
														children: [
															"VIP ",
															u.vipLevel,
															" · Lv",
															u.level
														]
													})]
												})]
											}, u.id))
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "pt-2 border-t border-slate-800 lg:hidden flex flex-col gap-1 mt-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											onClick: () => {
												setCurrentView("agent_portal");
												setShowIdentityMenu(false);
											},
											className: "w-full text-right px-3 py-1.5 rounded-lg text-xs bg-teal-500/10 text-teal-300",
											children: "بوابة وكيل الشحن"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											onClick: () => {
												setCurrentView("admin_dashboard");
												setShowIdentityMenu(false);
											},
											className: "w-full text-right px-3 py-1.5 rounded-lg text-xs bg-indigo-500/10 text-indigo-300",
											children: "لوحة تحكم الإدارة Super Admin"
										})]
									})
								]
							})]
						})
					]
				})
			]
		})
	});
};
// src/assets/images/room_bg_royal_majlis_1795294234181.jpg
var room_bg_royal_majlis_1795294234181_default = "/assets/room_bg_royal_majlis_1795294234181-CIN0-Fah.jpg";
// src/assets/images/room_bg_midnight_lounge_1795294231147.jpg
var room_bg_midnight_lounge_1795294231147_default = "/assets/room_bg_midnight_lounge_1795294231147-PLjtfgpF.jpg";
// src/assets/images/room_bg_starlight_sky_1795294232054.jpg
var room_bg_starlight_sky_1795294232054_default = "/assets/room_bg_starlight_sky_1795294232054-O6xROkxe.jpg";
// src/components/HomeScreen.tsx
var LOCAL_ROOM_COVERS = [
	room_bg_royal_majlis_1795294234181_default,
	room_bg_midnight_lounge_1795294231147_default,
	room_bg_starlight_sky_1795294232054_default
];
var HomeScreen = () => {
	const { rooms, roomBackgrounds, currentUser, isRoomModerator, joinRoom, setActiveModal, setCurrentView, isAdminAccount } = useApp();
	const [activeTopTab, setActiveTopTab] = (0, import_react.useState)("all");
	const [searchQuery, setSearchQuery] = (0, import_react.useState)("");
	const [showSearch, setShowSearch] = (0, import_react.useState)(false);
	const [passwordModalRoomId, setPasswordModalRoomId] = (0, import_react.useState)(null);
	const [passwordInput, setPasswordInput] = (0, import_react.useState)("");
	const [passwordError, setPasswordError] = (0, import_react.useState)(null);
	const [joinFeedbackToast, setJoinFeedbackToast] = (0, import_react.useState)(null);
	const triggerJoinToast = (msg) => {
		setJoinFeedbackToast(msg);
		window.setTimeout(() => {
			setJoinFeedbackToast((prev) => prev === msg ? null : prev);
		}, 4e3);
	};
	const handleAttemptJoinRoom = (roomId) => {
		const res = joinRoom(roomId);
		if (res.success) return;
		if (res.reason === "password_required") {
			setPasswordModalRoomId(roomId);
			setPasswordInput("");
			setPasswordError(null);
			return;
		}
		if (res.message) triggerJoinToast(res.message);
	};
	const handleSubmitRoomPassword = (e) => {
		e.preventDefault();
		if (!passwordModalRoomId) return;
		const res = joinRoom(passwordModalRoomId, passwordInput);
		if (res.success) {
			setPasswordModalRoomId(null);
			setPasswordInput("");
			setPasswordError(null);
			return;
		}
		if (res.reason === "wrong_password" || res.reason === "password_required") setPasswordError(res.message || "رمز المرور غير صحيح.");
		else {
			setPasswordModalRoomId(null);
			if (res.message) triggerJoinToast(res.message);
		}
	};
	const normalizedQuery = searchQuery.trim().toLowerCase();
	const filteredRooms = rooms.filter((room) => {
		if (activeTopTab === "mine" && room.ownerId !== currentUser.id) return false;
		if (activeTopTab === "vip" && room.type !== "vip" && room.totalDiamondsEarned < 5e5) return false;
		if (!normalizedQuery) return true;
		return room.title.toLowerCase().includes(normalizedQuery) || room.roomNo.toLowerCase().includes(normalizedQuery) || room.ownerName.toLowerCase().includes(normalizedQuery);
	});
	const formatDiamonds = (val) => {
		if (val >= 1e6) return `${(val / 1e6).toFixed(1)}M`;
		if (val >= 1e3) return `${(val / 1e3).toFixed(1)}K`;
		return val.toString();
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh w-full max-w-6xl mx-auto bg-[#070a12] text-white pb-28 font-tajawal select-none",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "sticky top-0 z-30 bg-[#070a12]/90 backdrop-blur-xl border-b border-white/10 px-3.5 sm:px-6 py-2.5 space-y-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center justify-between gap-2.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3.5 sm:gap-5 flex-wrap",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "/logo.png",
								alt: "فوكاشات",
								referrerPolicy: "no-referrer",
								className: "w-9 h-9 rounded-xl object-cover ring-1 ring-amber-400/50 shadow-lg shadow-amber-500/20 shrink-0"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-right",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-sm font-black text-amber-300 leading-tight",
									children: "فوكاشات"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-[10px] text-slate-400 font-mono",
									children: "Fokashat VIP"
								})]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex items-center gap-3.5 sm:gap-4 border-r border-white/10 pr-3 sm:pr-4",
							children: [
								{
									id: "all",
									label: "الغرف النشطة"
								},
								{
									id: "mine",
									label: "غرفي"
								},
								{
									id: "vip",
									label: "VIP"
								}
							].map((tab) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setActiveTopTab(tab.id),
								className: `relative pb-1 text-xs sm:text-sm whitespace-nowrap transition-colors ${activeTopTab === tab.id ? "text-amber-300 font-bold after:content-[\"\"] after:absolute after:bottom-[-4px] after:inset-x-0 after:h-[2px] after:bg-amber-400 after:rounded-full" : "text-slate-400 hover:text-slate-200 font-medium"}`,
								children: tab.label
							}, tab.id))
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-1.5 sm:gap-2 flex-wrap",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setActiveModal("wallet"),
								className: "h-9 px-2.5 sm:px-3 rounded-xl bg-[#111626] hover:bg-[#171d32] border border-amber-400/25 flex items-center gap-1.5 text-xs transition-colors",
								title: "المحفظة",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-amber-300 font-mono tabular-nums font-bold",
									children: [currentUser.coins.toLocaleString("en-US"), " 🪙"]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => setCurrentView("agent_portal"),
								className: "hidden sm:flex h-9 px-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 items-center gap-1.5 text-xs text-teal-300 font-semibold transition-colors",
								title: "بوابة وكيل الشحن",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CreditCard, { className: "w-3.5 h-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "الوكيل" })]
							}),
							isAdminAccount && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => setCurrentView("admin_dashboard"),
								className: "hidden sm:flex h-9 px-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 items-center gap-1.5 text-xs text-indigo-300 font-semibold transition-colors",
								title: "لوحة الإدارة",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldAlert, { className: "w-3.5 h-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "الإدارة" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setShowSearch((prev) => !prev),
								className: "w-9 h-9 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 flex items-center justify-center text-slate-200 transition-colors",
								title: "بحث عن غرفة",
								children: showSearch ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "w-4 h-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "w-4 h-4" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => setActiveModal("create_room"),
								className: "h-9 px-3 sm:px-3.5 rounded-xl bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-300 hover:to-orange-400 text-slate-950 font-black text-xs flex items-center gap-1 shadow-lg shadow-amber-500/20 transition-all active:scale-95",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "w-4 h-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "إنشاء غرفة" })]
							})
						]
					})]
				}), showSearch && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "pt-0.5",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "text",
						value: searchQuery,
						onChange: (e) => setSearchQuery(e.target.value),
						placeholder: "ابحث باسم الغرفة أو رقم ID أو اسم المضيف...",
						className: "w-full h-10 bg-[#0f1422] border border-white/12 rounded-xl px-3.5 text-xs text-white placeholder:text-slate-400 focus:outline-none focus:border-amber-400",
						autoFocus: true
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "px-3.5 sm:px-6 pt-4 space-y-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "text-sm font-black text-white flex items-center gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mic, { className: "w-4 h-4 text-amber-400" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "الغرف الصوتية المباشرة" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-xs font-mono tabular-nums text-amber-300",
								children: [
									"(",
									filteredRooms.length,
									")"
								]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[11px] text-slate-400",
						children: "اضغط على أي غرفة للدخول"
					})]
				}), filteredRooms.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-3xl bg-[#0e1320] border border-white/10 p-10 text-center space-y-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "w-12 h-12 rounded-2xl bg-white/6 mx-auto flex items-center justify-center text-slate-400",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mic, { className: "w-6 h-6" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-slate-300",
							children: normalizedQuery ? "لا توجد غرف مطابقة للبحث الحالي." : activeTopTab === "mine" ? "لم تقم بإنشاء غرفة بعد." : "لا توجد غرف متاحة في هذا القسم حالياً."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setActiveModal("create_room"),
							className: "h-10 px-5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs transition-colors",
							children: "+ إنشاء غرفة جديدة"
						})
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3",
					children: filteredRooms.map((room, index) => {
						const occupiedCount = room.seats.filter((s) => Boolean(s.userId)).length;
						const matchedAdminBg = room.backgroundId ? roomBackgrounds.find((b) => b.id === room.backgroundId) : void 0;
						const builtinBg = room.backgroundId === "midnight" ? room_bg_midnight_lounge_1795294231147_default : room.backgroundId === "majlis" ? room_bg_royal_majlis_1795294234181_default : room.backgroundId === "starlight" ? room_bg_starlight_sky_1795294232054_default : void 0;
						const coverSrc = room.backgroundUrl || matchedAdminBg?.imageUrl || builtinBg || LOCAL_ROOM_COVERS[index % LOCAL_ROOM_COVERS.length];
						const userIsMod = isRoomModerator(room);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => handleAttemptJoinRoom(room.id),
							className: "group relative w-full aspect-square rounded-2xl overflow-hidden border border-white/12 hover:border-amber-400/70 bg-[#0e1320] text-right transition-all active:scale-[0.98] shadow-xl flex flex-col justify-between p-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: coverSrc,
									alt: room.title,
									referrerPolicy: "no-referrer",
									className: "absolute inset-0 w-full h-full object-cover opacity-55 group-hover:scale-105 transition-transform duration-500"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-[#070a12] via-[#070a12]/50 to-[#070a12]/35" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative z-10 flex items-start justify-between gap-2 w-full",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "relative shrink-0",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
												src: room.ownerAvatar || currentUser.avatar,
												alt: room.ownerName,
												referrerPolicy: "no-referrer",
												className: "w-10 h-10 sm:w-11 sm:h-11 rounded-xl object-cover border border-amber-400/60 shadow-md"
											}),
											room.type === "vip" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "absolute -top-1.5 -right-1.5 px-1.5 py-0.2 rounded bg-amber-400 text-slate-950 text-[8px] font-black shadow",
												children: "VIP"
											}),
											room.type === "password" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "absolute -top-1.5 -right-1.5 w-5 h-5 rounded-md bg-amber-400 text-slate-950 flex items-center justify-center shadow",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(KeyRound, { className: "w-3 h-3" })
											})
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-col items-end gap-1 text-[10px] font-mono tabular-nums",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "px-2 py-0.5 rounded-lg bg-black/55 backdrop-blur-sm border border-white/10 text-emerald-300 font-bold flex items-center gap-1",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mic, { className: "w-2.5 h-2.5" }),
													occupiedCount,
													"/8"
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "text-[9px] text-slate-300/90 bg-black/45 px-1.5 py-0.5 rounded-md",
												children: ["ID ", room.roomNo]
											}),
											room.isLocked && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "px-1.5 py-0.5 rounded-md bg-rose-600/80 text-white text-[9px] font-bold flex items-center gap-0.5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "w-2.5 h-2.5" }), " مقفلة"]
											}),
											userIsMod && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "px-1.5 py-0.5 rounded-md bg-sky-500/25 border border-sky-400/40 text-sky-300 text-[9px] font-bold flex items-center gap-0.5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "w-2.5 h-2.5" }), " مشرف"]
											})
										]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative z-10 w-full space-y-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-xs sm:text-sm font-black text-white line-clamp-1 leading-snug",
										children: room.title
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-[10px] sm:text-[11px] text-slate-300 truncate",
										children: room.ownerName
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "pt-1.5 border-t border-white/12 flex items-center justify-between text-[10px] font-mono tabular-nums",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "flex items-center gap-1 text-slate-200",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "w-3 h-3 text-sky-300" }), Math.max(1, room.onlineViewersCount)]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "flex items-center gap-1 text-amber-300 font-bold",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trophy, { className: "w-3 h-3" }), formatDiamonds(room.totalDiamondsEarned)]
										})]
									})]
								})
							]
						}, room.id);
					})
				})]
			}),
			joinFeedbackToast && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed top-16 inset-x-4 z-50 flex justify-center pointer-events-none",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "pointer-events-auto max-w-md w-full rounded-2xl bg-rose-950/95 border border-rose-500/50 px-4 py-3 shadow-2xl flex items-center justify-between gap-3 text-xs text-rose-100",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "w-4 h-4 text-rose-400 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: joinFeedbackToast })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setJoinFeedbackToast(null),
						className: "text-rose-300 hover:text-white shrink-0",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "w-4 h-4" })
					})]
				})
			}),
			passwordModalRoomId && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4",
				onClick: () => setPasswordModalRoomId(null),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: handleSubmitRoomPassword,
					onClick: (e) => e.stopPropagation(),
					className: "w-full max-w-sm rounded-3xl bg-[#111626] border border-amber-400/35 p-5 space-y-4 shadow-2xl text-right",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 text-sm font-black text-amber-300",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KeyRound, { className: "w-4 h-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "غرفة محمية برمز مرور" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setPasswordModalRoomId(null),
								className: "w-7 h-7 rounded-lg bg-white/8 flex items-center justify-center text-slate-400 hover:text-white",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "w-4 h-4" })
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-slate-300",
							children: "أدخل رمز المرور الخاص بهذه الغرفة للدخول:"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "password",
							value: passwordInput,
							onChange: (e) => setPasswordInput(e.target.value),
							placeholder: "رمز مرور الغرفة...",
							autoFocus: true,
							className: "w-full h-11 rounded-xl bg-slate-950 border border-white/15 px-3.5 text-sm font-mono text-white focus:border-amber-400 focus:outline-none"
						}),
						passwordError && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs text-rose-400 font-bold",
							children: passwordError
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setPasswordModalRoomId(null),
								className: "h-10 px-4 rounded-xl bg-white/8 text-slate-300 text-xs font-bold",
								children: "إلغاء"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "submit",
								className: "flex-1 h-10 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 text-xs font-black transition-colors",
								children: "دخول الغرفة"
							})]
						})
					]
				})
			})
		]
	});
};
// src/components/BottomNavBar.tsx
var BottomNavBar = () => {
	const { activeTab, setActiveTab, transactions, currentUser } = useApp();
	const recentAlertCount = Math.min(99, transactions.filter((tx) => tx.userId === currentUser.id).length);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
		"aria-label": "التنقل الرئيسي",
		className: "fixed bottom-0 inset-x-0 md:bottom-4 md:inset-x-auto md:left-1/2 md:-translate-x-1/2 md:w-full md:max-w-lg z-40 bg-[#0d1220]/95 backdrop-blur-xl border-t md:border border-white/12 md:rounded-2xl px-4 py-2 flex items-center justify-around shadow-[0_-8px_30px_rgba(0,0,0,0.55)] md:shadow-[0_18px_50px_rgba(0,0,0,0.7)] font-tajawal",
		children: [
			{
				id: "room",
				label: "الغرف",
				icon: House
			},
			{
				id: "game",
				label: "الألعاب",
				icon: Gamepad2
			},
			{
				id: "chat",
				label: "المحادثات",
				icon: MessageSquare,
				badge: recentAlertCount > 0 ? recentAlertCount : void 0
			},
			{
				id: "me",
				label: "ملفي",
				icon: User
			}
		].map((item) => {
			const Icon = item.icon;
			const isActive = activeTab === item.id;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: () => setActiveTab(item.id),
				className: `relative min-w-[64px] min-h-[46px] px-3 py-1.5 rounded-xl flex flex-col items-center justify-center gap-0.5 transition-all active:scale-95 ${isActive ? "text-amber-300 bg-amber-400/12 border border-amber-400/30 shadow-[0_0_20px_rgba(245,158,11,0.16)]" : "text-slate-400 hover:text-slate-200 hover:bg-white/[0.04] border border-transparent"}`,
				title: item.label,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: `w-5 h-5 ${isActive ? "stroke-[2.4]" : "stroke-[1.9]"}` }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: `text-[11px] leading-tight ${isActive ? "font-bold" : "font-medium"}`,
						children: item.label
					}),
					item.badge !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "absolute top-1 left-2 min-w-[17px] h-[17px] px-1 rounded-full bg-rose-500 text-white font-mono tabular-nums font-bold text-[10px] flex items-center justify-center shadow",
						children: item.badge
					})
				]
			}, item.id);
		})
	});
};
// src/components/GlobalJackpotBanner.tsx
var GlobalJackpotBanner = () => {
	const { globalJackpotBanner } = useApp();
	if (!globalJackpotBanner) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed top-3 inset-x-3 z-[120] pointer-events-none flex justify-center animate-jackpot-bar font-tajawal",
		role: "status",
		"aria-live": "polite",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative w-full max-w-2xl overflow-hidden rounded-2xl bg-gradient-to-l from-[#2b1705]/95 via-[#432307]/95 to-[#1f1005]/95 border border-amber-300/75 shadow-[0_12px_40px_rgba(245,158,11,0.45)] backdrop-blur-md px-3.5 py-2.5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-r from-transparent via-amber-200/15 to-transparent animate-jackpot-sweep pointer-events-none" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 flex items-center justify-between gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex items-center gap-2.5 shrink-0",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: globalJackpotBanner.winnerAvatar,
								alt: globalJackpotBanner.winnerName,
								referrerPolicy: "no-referrer",
								className: "w-10 h-10 rounded-full object-cover border-2 border-amber-300 shadow"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "absolute -top-1.5 -right-1 w-5 h-5 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center shadow",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Crown, { className: "w-3 h-3" })
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex-1 min-w-0 text-right",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-1.5 text-[11px] text-amber-200/90 font-semibold truncate",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "w-3.5 h-3.5 text-amber-300 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "truncate",
								children: [
									"تهانينا ",
									globalJackpotBanner.winnerName,
									" · ",
									globalJackpotBanner.roomTitle
								]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-xs sm:text-sm font-black text-white leading-snug mt-0.5 truncate",
							children: [
								"لقد ربحت مبلغ",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-mono tabular-nums text-amber-300 mx-0.5",
									children: globalJackpotBanner.amountWon.toLocaleString("en-US")
								}),
								" ",
								"عملة في الحظ! 🎉"
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 shrink-0 bg-black/35 border border-amber-300/35 rounded-xl px-2.5 py-1.5",
						children: [globalJackpotBanner.giftImageUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: globalJackpotBanner.giftImageUrl,
							alt: globalJackpotBanner.giftName,
							referrerPolicy: "no-referrer",
							className: "w-7 h-7 rounded-lg object-cover"
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-2xl leading-none",
							children: globalJackpotBanner.giftIcon
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-left leading-none",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-[9px] text-amber-200/80",
								children: "الحظ"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-mono tabular-nums text-xs font-black text-amber-300",
								children: [globalJackpotBanner.multiplier, "X"]
							})]
						})]
					})
				]
			})]
		})
	}, globalJackpotBanner.id);
};
// src/components/ErrorBoundary.tsx
var ErrorBoundary = class extends import_react.Component {
	constructor(..._args) {
		super(..._args);
		this.state = {
			hasError: false,
			errorMessage: ""
		};
		this.handleReload = () => {
			this.setState({
				hasError: false,
				errorMessage: ""
			});
			window.location.reload();
		};
	}
	static getDerivedStateFromError(error) {
		let message = error.message || "حدث خطأ غير متوقع في التطبيق";
		try {
			const parsed = JSON.parse(message);
			if (parsed && typeof parsed.error === "string") message = `${parsed.error}${parsed.path ? ` (${parsed.path})` : ""}`;
		} catch {}
		return {
			hasError: true,
			errorMessage: message
		};
	}
	componentDidCatch(error, errorInfo) {
		console.error("Uncaught application error:", error, errorInfo);
	}
	render() {
		if (this.state.hasError) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			dir: "rtl",
			className: "min-h-screen bg-[#070a12] text-slate-100 flex items-center justify-center p-6 font-tajawal",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-md w-full bg-[#101524] border border-rose-500/30 rounded-3xl p-6 text-center space-y-4 shadow-2xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "w-14 h-14 mx-auto rounded-2xl bg-rose-500/15 border border-rose-500/30 flex items-center justify-center text-rose-400",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "w-7 h-7" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-lg font-black text-white",
						children: "تعذر إكمال العملية"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-slate-300 leading-relaxed break-words",
						children: this.state.errorMessage
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: this.handleReload,
						className: "w-full min-h-[44px] rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-sm flex items-center justify-center gap-2 transition-colors cursor-pointer",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "w-4 h-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "إعادة تحميل التطبيق" })]
					})
				]
			})
		});
		return this.props.children;
	}
};
// src/hooks/usePWAInstall.ts
var globalDeferredPrompt = typeof window !== "undefined" ? window.__deferredPWAInstallPrompt || null : null;
var promptListeners = /* @__PURE__ */ new Set();
function notifyPromptListeners(ev) {
	globalDeferredPrompt = ev;
	if (typeof window !== "undefined") window.__deferredPWAInstallPrompt = ev;
	promptListeners.forEach((cb) => cb(ev));
}
if (typeof window !== "undefined") {
	window.addEventListener("beforeinstallprompt", (e) => {
		e.preventDefault();
		notifyPromptListeners(e);
	});
	window.addEventListener("fokashat:pwa-prompt-ready", () => {
		if (window.__deferredPWAInstallPrompt) notifyPromptListeners(window.__deferredPWAInstallPrompt);
	});
	window.addEventListener("appinstalled", () => {
		notifyPromptListeners(null);
	});
}
function detectStandalone() {
	if (typeof window === "undefined") return false;
	if (isNativeAppContainer()) return true;
	return window.matchMedia("(display-mode: standalone)").matches || window.matchMedia("(display-mode: fullscreen)").matches || window.navigator.standalone === true;
}
function detectInIframe() {
	if (typeof window === "undefined") return false;
	try {
		return window.self !== window.top;
	} catch {
		return true;
	}
}
function detectInAppBrowser(ua) {
	return /fban|fbav|instagram|whatsapp|telegram|tiktok|snapchat|line\/|wv\)|; wv\)/i.test(ua);
}
function usePWAInstall() {
	const [deferredPrompt, setDeferredPrompt] = (0, import_react.useState)(() => globalDeferredPrompt || (typeof window !== "undefined" ? window.__deferredPWAInstallPrompt || null : null));
	const [isInstalled, setIsInstalled] = (0, import_react.useState)(() => detectStandalone());
	const [isIOS, setIsIOS] = (0, import_react.useState)(false);
	const [isAndroid, setIsAndroid] = (0, import_react.useState)(false);
	const [isInIframe, setIsInIframe] = (0, import_react.useState)(() => detectInIframe());
	const [isInAppBrowser, setIsInAppBrowser] = (0, import_react.useState)(false);
	const [isInstalling, setIsInstalling] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		setIsInstalled(detectStandalone());
		setIsInIframe(detectInIframe());
		const ua = window.navigator.userAgent.toLowerCase();
		setIsIOS(/iphone|ipad|ipod/.test(ua));
		setIsAndroid(/android/.test(ua));
		setIsInAppBrowser(detectInAppBrowser(ua));
		if (window.__deferredPWAInstallPrompt && !globalDeferredPrompt) notifyPromptListeners(window.__deferredPWAInstallPrompt);
		else if (globalDeferredPrompt) setDeferredPrompt(globalDeferredPrompt);
		const onPromptChange = (ev) => {
			setDeferredPrompt(ev);
		};
		promptListeners.add(onPromptChange);
		const handleAppInstalled = () => {
			setIsInstalled(true);
			notifyPromptListeners(null);
		};
		const mediaQuery = window.matchMedia("(display-mode: standalone)");
		const handleDisplayModeChange = (e) => {
			if (e.matches) setIsInstalled(true);
		};
		window.addEventListener("appinstalled", handleAppInstalled);
		mediaQuery.addEventListener?.("change", handleDisplayModeChange);
		return () => {
			promptListeners.delete(onPromptChange);
			window.removeEventListener("appinstalled", handleAppInstalled);
			mediaQuery.removeEventListener?.("change", handleDisplayModeChange);
		};
	}, []);
	const install = async () => {
		const promptEv = deferredPrompt || globalDeferredPrompt || window.__deferredPWAInstallPrompt || null;
		if (!promptEv) return "unavailable";
		setIsInstalling(true);
		try {
			await promptEv.prompt();
			const { outcome } = await promptEv.userChoice;
			if (outcome === "accepted") {
				setIsInstalled(true);
				notifyPromptListeners(null);
				return "accepted";
			}
			return "dismissed";
		} catch {
			return "unavailable";
		} finally {
			setIsInstalling(false);
		}
	};
	return {
		isInstallable: Boolean(deferredPrompt || globalDeferredPrompt),
		isInstalled,
		isIOS,
		isAndroid,
		isInIframe,
		isInAppBrowser,
		isInstalling,
		install
	};
}
function useOnlineStatus() {
	const [isOnline, setIsOnline] = (0, import_react.useState)(() => typeof navigator !== "undefined" ? navigator.onLine : true);
	(0, import_react.useEffect)(() => {
		const handleOnline = () => setIsOnline(true);
		const handleOffline = () => setIsOnline(false);
		window.addEventListener("online", handleOnline);
		window.addEventListener("offline", handleOffline);
		return () => {
			window.removeEventListener("online", handleOnline);
			window.removeEventListener("offline", handleOffline);
		};
	}, []);
	return isOnline;
}
// src/components/PWAInstallManager.tsx
var DISMISS_SESSION_KEY = "fokashat_pwa_prompt_dismissed_v2";
var cachedApkRelease = null;
var apkListeners = /* @__PURE__ */ new Set();
async function refreshApkReleaseInfo() {
	if (typeof fetch === "undefined") return null;
	try {
		const res = await fetch(resolveApiUrl("/api/app-release"), { cache: "no-store" });
		if (!res.ok || !res.headers.get("content-type")?.includes("application/json")) return null;
		const data = await res.json();
		cachedApkRelease = data;
		apkListeners.forEach((cb) => cb(data));
		return data;
	} catch {
		return null;
	}
}
function useApkRelease() {
	const [info, setInfo] = (0, import_react.useState)(() => cachedApkRelease);
	(0, import_react.useEffect)(() => {
		const listener = (next) => setInfo(next);
		apkListeners.add(listener);
		refreshApkReleaseInfo();
		return () => {
			apkListeners.delete(listener);
		};
	}, []);
	return info;
}
function triggerDirectApkDownload(info) {
	if (typeof document === "undefined") return;
	const href = info.source === "external_url" && info.downloadUrl ? info.downloadUrl : resolveApiUrl("/downloads/fokashat.apk");
	const link = document.createElement("a");
	link.href = href;
	link.download = info.fileName || "fokashat-vip.apk";
	link.rel = "noopener noreferrer";
	document.body.appendChild(link);
	link.click();
	link.remove();
}
function getStandaloneAppUrl() {
	if (typeof window === "undefined") return "/";
	return window.location.origin + "/";
}
function getAndroidChromeIntentUrl() {
	if (typeof window === "undefined") return "/";
	return `intent://${window.location.host + "/"}#Intent;scheme=https;package=com.android.chrome;end`;
}
var InstallGuideModal = ({ isOpen, onClose, isIOS, isAndroid, isInIframe, isInAppBrowser, apkRelease }) => {
	const [copiedUrl, setCopiedUrl] = (0, import_react.useState)(false);
	if (!isOpen) return null;
	const standaloneUrl = getStandaloneAppUrl();
	const chromeIntentUrl = getAndroidChromeIntentUrl();
	const handleCopyLink = async () => {
		try {
			await navigator.clipboard.writeText(standaloneUrl);
			setCopiedUrl(true);
			window.setTimeout(() => setCopiedUrl(false), 2500);
		} catch {
			setCopiedUrl(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-[120] bg-black/75 backdrop-blur-sm flex items-end sm:items-center justify-center p-3 font-tajawal",
		onClick: onClose,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-full max-w-sm rounded-3xl bg-[#101626] border border-amber-400/35 p-5 shadow-2xl space-y-4 text-right max-h-[90vh] overflow-y-auto",
			onClick: (e) => e.stopPropagation(),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/pwa-192x192.png",
							alt: "فوكاشات",
							referrerPolicy: "no-referrer",
							className: "w-12 h-12 rounded-2xl border border-amber-400/45 object-cover shrink-0 shadow-lg"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-sm font-black text-white",
							children: isIOS ? "تثبيت تطبيق فوكاشات على آيفون" : "تنزيل وتثبيت فوكاشات للأندرويد (APK)"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[11px] text-slate-400",
							children: "يعمل كتطبيق مستقل بأيقونة فوكاشات ومتصل مباشرة بالسيرفرات"
						})] })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: onClose,
						className: "w-8 h-8 rounded-xl bg-white/8 text-slate-300 hover:text-white flex items-center justify-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "w-4 h-4" })
					})]
				}),
				!isIOS && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl bg-emerald-500/10 border border-emerald-400/35 p-3.5 space-y-2 text-xs",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-1.5 font-black text-emerald-300",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PackageCheck, { className: "w-4 h-4 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "نسخة أندرويد المستقلة (APK)" })]
						}), apkRelease?.available && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "font-mono text-[10px] px-2 py-0.5 rounded-full bg-emerald-400/20 text-emerald-200",
							children: ["v", apkRelease.versionName]
						})]
					}), apkRelease?.available ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] text-slate-300 leading-relaxed",
						children: "ملف التثبيت المباشر جاهز! نزّله وثبّته على هاتفك الأندرويد ليفتح فوراً بدون متصفح ومتصل بالسيرفر وقاعدة البيانات."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => triggerDirectApkDownload(apkRelease),
						className: "w-full min-h-[42px] rounded-xl bg-gradient-to-r from-emerald-400 to-teal-500 hover:brightness-105 text-slate-950 font-black text-xs flex items-center justify-center gap-2 shadow-lg",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "w-4 h-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
							"تنزيل ملف فوكاشات (",
							apkRelease.fileName,
							")"
						] })]
					})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-[11px] text-slate-300 leading-relaxed",
						children: [
							"تم تجهيز مشروع الأندرويد الكامل في الكود لبناء ملف APK مستقل. بمجرد استخراج ملف ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono text-amber-300",
								children: "fokashat.apk"
							}),
							" وربط رابطه من لوحة التحكم (تبويب قاعدة البيانات)، سيتيح هذا الزر تنزيل الـ APK مباشرة."
						]
					})]
				}),
				(isInIframe || isInAppBrowser) && !isIOS ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-3 text-xs text-slate-200 leading-relaxed",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl bg-amber-500/10 border border-amber-400/35 p-3.5 space-y-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-black text-amber-300",
							children: "أو افتح الرابط مباشرة في متصفح Chrome للتثبيت الفوري:"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[11px] text-slate-300",
							children: "المعاينة المدمجة أو المتصفح الداخلي يمنع تثبيت التطبيقات تلقائياً. افتح التطبيق في متصفح Chrome واضغط «تثبيت» ليتم تثبيته فوراً كتطبيق أندرويد مستقل."
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-1 gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: isAndroid && isInAppBrowser ? chromeIntentUrl : standaloneUrl,
							target: "_blank",
							rel: "noopener noreferrer",
							className: "w-full min-h-[44px] rounded-2xl bg-gradient-to-r from-emerald-400 to-teal-500 hover:brightness-105 text-slate-950 font-black text-xs flex items-center justify-center gap-2 shadow-lg",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "w-4 h-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "فتح التطبيق في متصفح Chrome للتثبيت" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => void handleCopyLink(),
							className: "w-full min-h-[42px] rounded-2xl bg-white/8 hover:bg-white/14 border border-white/15 text-slate-100 font-bold text-xs flex items-center justify-center gap-2 transition-colors",
							children: copiedUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "w-4 h-4 text-emerald-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-emerald-300",
								children: "تم نسخ رابط التطبيق — الصقه في Chrome"
							})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "w-4 h-4 text-amber-300" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "نسخ رابط التطبيق لفتحه في Chrome" })] })
						})]
					})]
				}) : isIOS ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-2.5 text-xs text-slate-200 leading-relaxed",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl bg-white/5 border border-white/10 p-3 flex items-start gap-2.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "w-6 h-6 rounded-lg bg-amber-400/20 text-amber-300 font-black flex items-center justify-center shrink-0",
							children: "1"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
							"اضغط على زر ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
								className: "text-amber-300",
								children: "المشاركة"
							}),
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Share, { className: "inline w-3.5 h-3.5 text-sky-400 mx-0.5" }),
							" أسفل متصفح Safari."
						] })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl bg-white/5 border border-white/10 p-3 flex items-start gap-2.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "w-6 h-6 rounded-lg bg-amber-400/20 text-amber-300 font-black flex items-center justify-center shrink-0",
							children: "2"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
							"اختر ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
								className: "text-emerald-300",
								children: "إضافة إلى الشاشة الرئيسية"
							}),
							" ثم اضغط",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
								className: "text-white",
								children: "إضافة"
							}),
							"."
						] })]
					})]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-2.5 text-xs text-slate-200 leading-relaxed",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl bg-white/5 border border-white/10 p-3 flex items-start gap-2.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "w-6 h-6 rounded-lg bg-emerald-400/20 text-emerald-300 font-black flex items-center justify-center shrink-0",
								children: "1"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
								"افتح قائمة متصفح Chrome",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EllipsisVertical, { className: "inline w-3.5 h-3.5 text-amber-300 mx-0.5" }),
								" في أعلى الشاشة."
							] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl bg-white/5 border border-white/10 p-3 flex items-start gap-2.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "w-6 h-6 rounded-lg bg-emerald-400/20 text-emerald-300 font-black flex items-center justify-center shrink-0",
								children: "2"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
								"اضغط على ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
									className: "text-emerald-300",
									children: "تثبيت التطبيق (Install App)"
								}),
								" ",
								"أو ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
									className: "text-amber-300",
									children: "الإضافة إلى الشاشة الرئيسية"
								}),
								" ليتم تثبيت تطبيق فوكاشات مباشرةً على هاتفك."
							] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => void handleCopyLink(),
							className: "w-full min-h-[40px] rounded-2xl bg-white/6 hover:bg-white/12 border border-white/12 text-slate-200 font-bold text-xs flex items-center justify-center gap-2 transition-colors",
							children: copiedUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "w-3.5 h-3.5 text-emerald-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-emerald-300",
								children: "تم نسخ رابط التطبيق"
							})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "w-3.5 h-3.5 text-amber-300" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "نسخ رابط التطبيق" })] })
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: onClose,
					className: "w-full h-11 rounded-2xl bg-gradient-to-r from-amber-400 to-orange-500 text-slate-950 font-black text-xs shadow-lg",
					children: "حسناً، فهمت"
				})
			]
		})
	});
};
/**
* Entry prompt banner shown automatically when opening the web link on Android/mobile/desktop
* (auto-hides once the app is already installed in standalone or native APK mode).
*/
var PWAInstallPromptBanner = () => {
	const { isInstallable, isInstalled, isIOS, isAndroid, isInIframe, isInAppBrowser, isInstalling, install } = usePWAInstall();
	const apkRelease = useApkRelease();
	const [dismissed, setDismissed] = (0, import_react.useState)(() => {
		try {
			return sessionStorage.getItem(DISMISS_SESSION_KEY) === "1";
		} catch {
			return false;
		}
	});
	const [visible, setVisible] = (0, import_react.useState)(false);
	const [showGuide, setShowGuide] = (0, import_react.useState)(false);
	const [justInstalled, setJustInstalled] = (0, import_react.useState)(false);
	const [installToastText, setInstallToastText] = (0, import_react.useState)("تم تثبيت تطبيق فوكاشات على جهازك بنجاح!");
	(0, import_react.useEffect)(() => {
		if (isInstalled || dismissed) {
			setVisible(false);
			return;
		}
		const timer = window.setTimeout(() => setVisible(true), 700);
		return () => window.clearTimeout(timer);
	}, [
		isInstalled,
		dismissed,
		isInstallable
	]);
	if (isInstalled && !justInstalled) return null;
	const handleDismiss = () => {
		setDismissed(true);
		setVisible(false);
		try {
			sessionStorage.setItem(DISMISS_SESSION_KEY, "1");
		} catch {}
	};
	const handleInstallClick = async () => {
		if (!isIOS && apkRelease?.available) {
			triggerDirectApkDownload(apkRelease);
			setInstallToastText(`جاري تنزيل ملف الأندرويد (${apkRelease.fileName}) للتثبيت المباشر...`);
			setJustInstalled(true);
			window.setTimeout(() => setJustInstalled(false), 4e3);
			return;
		}
		if (isInstallable) {
			const outcome = await install();
			if (outcome === "accepted") {
				setInstallToastText("تم تثبيت تطبيق فوكاشات على جهازك بنجاح!");
				setJustInstalled(true);
				window.setTimeout(() => setJustInstalled(false), 3500);
				return;
			}
			if (outcome === "dismissed") return;
		}
		setShowGuide(true);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		justInstalled && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "fixed top-4 inset-x-4 max-w-sm mx-auto z-[115] rounded-2xl bg-emerald-950/95 border border-emerald-400/50 px-4 py-3 shadow-2xl flex items-center gap-2.5 text-emerald-200 text-xs font-bold font-tajawal",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "w-4 h-4 text-emerald-400 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: installToastText })]
		}),
		visible && !isInstalled && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "fixed bottom-20 sm:bottom-5 inset-x-3 max-w-md mx-auto z-[110] font-tajawal animate-in fade-in slide-in-from-bottom-4 duration-300",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl bg-gradient-to-l from-[#12192e]/95 via-[#0e1426]/95 to-[#1a1510]/95 border border-amber-400/40 backdrop-blur-xl p-3.5 shadow-[0_18px_50px_rgba(0,0,0,0.75)] flex items-center gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/pwa-192x192.png",
						alt: "تطبيق فوكاشات",
						referrerPolicy: "no-referrer",
						className: "w-12 h-12 rounded-2xl border border-amber-400/45 object-cover shrink-0 shadow-lg"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex-1 min-w-0 text-right",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Smartphone, { className: "w-3.5 h-3.5 text-emerald-400 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs font-black text-white truncate",
								children: !isIOS && apkRelease?.available ? "تنزيل تطبيق فوكاشات APK للأندرويد" : "تثبيت تطبيق فوكاشات للأندرويد"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[11px] text-slate-300 mt-0.5 leading-snug",
							children: !isIOS && apkRelease?.available ? `اضغط «تنزيل» لتحميل ملف APK المستقل (v${apkRelease.versionName}) وتثبيته مباشرة.` : isInstallable ? "جاهز للتثبيت المباشر بضغطة واحدة كتطبيق أندرويد مستقل." : "نزّل نسخة التطبيق الكاملة على هاتفك لتشغيل الغرف الصوتية بدون متصفح."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-1.5 shrink-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							disabled: isInstalling,
							onClick: handleInstallClick,
							className: "h-9 px-3 rounded-xl bg-gradient-to-r from-emerald-400 to-teal-500 hover:from-emerald-300 hover:to-teal-400 text-slate-950 font-black text-xs flex items-center gap-1.5 shadow-lg shadow-emerald-500/25 active:scale-95 transition-all disabled:opacity-60",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "w-3.5 h-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: isInstalling ? "جاري..." : !isIOS && apkRelease?.available ? "تنزيل APK" : "تنزيل" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: handleDismiss,
							className: "w-8 h-9 rounded-xl bg-white/8 hover:bg-white/15 text-slate-300 flex items-center justify-center transition-colors",
							title: "لاحقاً",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "w-4 h-4" })
						})]
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InstallGuideModal, {
			isOpen: showGuide,
			onClose: () => setShowGuide(false),
			isIOS,
			isAndroid,
			isInIframe,
			isInAppBrowser,
			apkRelease
		})
	] });
};
/**
* Install / APK Download button mounted inside Navbar & Profile ("ملفي") screen.
* Auto-hides when already running inside the installed Android APK or standalone mode.
*/
var ProfileInstallButton = ({ variant = "header" }) => {
	const { isInstallable, isInstalled, isIOS, isAndroid, isInIframe, isInAppBrowser, isInstalling, install } = usePWAInstall();
	const apkRelease = useApkRelease();
	const [showGuide, setShowGuide] = (0, import_react.useState)(false);
	if (isInstalled) return null;
	const handleClick = async () => {
		if (!isIOS && apkRelease?.available) {
			triggerDirectApkDownload(apkRelease);
			return;
		}
		if (isInstallable) {
			const outcome = await install();
			if (outcome === "accepted" || outcome === "dismissed") return;
		}
		setShowGuide(true);
	};
	if (variant === "card") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		disabled: isInstalling,
		onClick: handleClick,
		className: "w-full rounded-2xl bg-gradient-to-l from-emerald-500/18 via-teal-500/12 to-amber-500/12 border border-emerald-400/35 hover:border-emerald-400/60 px-3.5 py-2.5 flex items-center justify-between gap-3 transition-all active:scale-[0.99]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-2.5 min-w-0 text-right",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/pwa-192x192.png",
				alt: "فوكاشات",
				referrerPolicy: "no-referrer",
				className: "w-10 h-10 rounded-xl border border-amber-400/40 object-cover shrink-0 shadow"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-xs font-black text-white truncate",
					children: !isIOS && apkRelease?.available ? "تنزيل تطبيق فوكاشات APK للأندرويد" : "تثبيت تطبيق فوكاشات للأندرويد"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-[10px] text-emerald-200/85 truncate",
					children: !isIOS && apkRelease?.available ? `تحميل مباشر لملف APK (v${apkRelease.versionName}) — يعمل بدون متصفح` : isInstallable ? "اضغط هنا للتثبيت المباشر على هاتفك الآن" : "نسخة أندرويد مستقلة بأيقونة فوكاشات بدون متصفح"
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "h-8 px-3 rounded-xl bg-emerald-400 text-slate-950 font-black text-[11px] flex items-center gap-1 shrink-0",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "w-3.5 h-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: isInstalling ? "جاري..." : !isIOS && apkRelease?.available ? "تنزيل APK" : "تنزيل" })]
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InstallGuideModal, {
		isOpen: showGuide,
		onClose: () => setShowGuide(false),
		isIOS,
		isAndroid,
		isInIframe,
		isInAppBrowser,
		apkRelease
	})] });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		disabled: isInstalling,
		onClick: handleClick,
		className: "h-8 sm:h-9 px-2.5 sm:px-3 rounded-xl bg-emerald-500/15 border border-emerald-400/40 text-emerald-300 text-[11px] sm:text-xs font-bold flex items-center gap-1 hover:bg-emerald-500/25 transition-colors",
		title: !isIOS && apkRelease?.available ? "تنزيل ملف APK لتثبيت تطبيق فوكاشات على الأندرويد" : "تنزيل وتثبيت تطبيق فوكاشات على جهازك",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "w-3.5 h-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: !isIOS && apkRelease?.available ? "تنزيل APK" : "تنزيل" })]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InstallGuideModal, {
		isOpen: showGuide,
		onClose: () => setShowGuide(false),
		isIOS,
		isAndroid,
		isInIframe,
		isInAppBrowser,
		apkRelease
	})] });
};
var OfflineIndicator = () => {
	if (useOnlineStatus()) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed bottom-4 left-4 z-[120] flex items-center gap-2 rounded-xl bg-amber-500 px-3 py-1.5 text-xs font-black text-slate-950 shadow-lg font-tajawal",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WifiOff, { className: "w-3.5 h-3.5 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "أنت غير متصل بالإنترنت — جاري استخدام الوضع المحلي" })]
	});
};
// src/App.tsx
var AuthScreen = (0, import_react.lazy)(() => __vitePreload(() => import("./AuthScreen-BNaSKBXH.js").then((m) => ({ default: m.AuthScreen })), __vite__mapDeps([2,1,3,4])));
var VoiceRoomView = (0, import_react.lazy)(() => __vitePreload(() => import("./VoiceRoomView-CibTwBDL.js").then((m) => ({ default: m.VoiceRoomView })), __vite__mapDeps([5,1,3,6,4,7])));
var GameCenterScreen = (0, import_react.lazy)(() => __vitePreload(() => import("./GameCenterScreen-CQP1xV8-.js").then((m) => ({ default: m.GameCenterScreen })), __vite__mapDeps([8,1,3,6,4])));
var ChatInboxScreen = (0, import_react.lazy)(() => __vitePreload(() => import("./ChatInboxScreen-COq28SdJ.js").then((m) => ({ default: m.ChatInboxScreen })), __vite__mapDeps([9,1,3,4])));
var ProfileScreen = (0, import_react.lazy)(() => __vitePreload(() => import("./ProfileScreen-DxCN0EKQ.js").then((m) => ({ default: m.ProfileScreen })), __vite__mapDeps([10,1,3,4])));
var RechargeAgentPortal = (0, import_react.lazy)(() => __vitePreload(() => import("./RechargeAgentPortal-sw_52lu8.js").then((m) => ({ default: m.RechargeAgentPortal })), __vite__mapDeps([11,1,3,4])));
var AdminDashboard = (0, import_react.lazy)(() => __vitePreload(() => import("./AdminDashboard-8njxEiQ_.js").then((m) => ({ default: m.AdminDashboard })), __vite__mapDeps([12,1,3,7,4])));
var WalletModal = (0, import_react.lazy)(() => __vitePreload(() => import("./WalletModal-BjwpVdRS.js").then((m) => ({ default: m.WalletModal })), __vite__mapDeps([13,1,3,4])));
var VipCenterModal = (0, import_react.lazy)(() => __vitePreload(() => import("./VipCenterModal-7LLEKil6.js").then((m) => ({ default: m.VipCenterModal })), __vite__mapDeps([14,1,3,4])));
var BackpackModal = (0, import_react.lazy)(() => __vitePreload(() => import("./BackpackModal-C6NCAFH9.js").then((m) => ({ default: m.BackpackModal })), __vite__mapDeps([15,1,3,7,4])));
var GameCenterModal = (0, import_react.lazy)(() => __vitePreload(() => import("./GameCenterModal-ewMobn5_.js").then((m) => ({ default: m.GameCenterModal })), __vite__mapDeps([16,1,3,6,4])));
var AgencyPortalModal = (0, import_react.lazy)(() => __vitePreload(() => import("./AgencyPortalModal-CLE2DrKt.js").then((m) => ({ default: m.AgencyPortalModal })), __vite__mapDeps([17,1,3,4])));
var UserProfileModal = (0, import_react.lazy)(() => __vitePreload(() => import("./UserProfileModal-Cy6qZ6ez.js").then((m) => ({ default: m.UserProfileModal })), __vite__mapDeps([18,1,3,4])));
var MessagesDrawer = (0, import_react.lazy)(() => __vitePreload(() => import("./MessagesDrawer-pxd6Asti.js").then((m) => ({ default: m.MessagesDrawer })), __vite__mapDeps([19,1,3,4])));
var CreateRoomModal = (0, import_react.lazy)(() => __vitePreload(() => import("./CreateRoomModal-BhuJ_DkY.js").then((m) => ({ default: m.CreateRoomModal })), __vite__mapDeps([20,1,3,4])));
var ScreenLoader = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: "min-h-[40vh] flex items-center justify-center text-xs font-bold text-amber-300",
	children: "جاري التحميل..."
});
var MainLayout = () => {
	const { activeRoom, currentView, isAdminAccount, activeTab, activeModal, setActiveModal, firebaseUser, adminSession, authReady, needsProfileCompletion, guestAccessBypass } = useApp();
	if (!authReady) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh bg-[#020b1c] text-slate-200 font-tajawal flex flex-col items-center justify-center gap-3.5 p-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: "/logo.png",
			alt: "فوكاشات",
			referrerPolicy: "no-referrer",
			className: "w-20 h-20 rounded-3xl object-cover ring-1 ring-amber-400/50 shadow-2xl shadow-amber-500/20"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "text-sm font-black text-amber-300",
			children: "جاري تجهيز فوكاشات..."
		})]
	});
	if (!firebaseUser && !guestAccessBypass && !adminSession || needsProfileCompletion) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Suspense, {
			fallback: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScreenLoader, {}),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthScreen, {})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PWAInstallPromptBanner, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OfflineIndicator, {})
	] });
	const renderUserAppTab = () => {
		switch (activeTab) {
			case "room": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HomeScreen, {});
			case "game": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GameCenterScreen, {});
			case "chat": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChatInboxScreen, {});
			case "me": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProfileScreen, {});
			default: return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HomeScreen, {});
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-[#070a12] text-slate-100 flex flex-col font-tajawal selection:bg-amber-500 selection:text-slate-950",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlobalJackpotBanner, {}),
			currentView !== "user_app" && !activeRoom && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "flex-1",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Suspense, {
					fallback: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScreenLoader, {}),
					children: activeRoom ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VoiceRoomView, {}) : currentView === "user_app" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative",
						children: [renderUserAppTab(), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BottomNavBar, {})]
					}) : currentView === "agent_portal" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RechargeAgentPortal, {}) : isAdminAccount ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminDashboard, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative",
						children: [renderUserAppTab(), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BottomNavBar, {})]
					})
				})
			}),
			!activeRoom && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PWAInstallPromptBanner, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OfflineIndicator, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_react.Suspense, {
				fallback: null,
				children: [
					activeModal === "wallet" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WalletModal, {
						isOpen: true,
						onClose: () => setActiveModal("none")
					}),
					activeModal === "vip" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VipCenterModal, {
						isOpen: true,
						onClose: () => setActiveModal("none")
					}),
					(activeModal === "backpack" || activeModal === "store") && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BackpackModal, {
						isOpen: true,
						onClose: () => setActiveModal("none")
					}),
					activeModal === "games" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GameCenterModal, {
						isOpen: true,
						onClose: () => setActiveModal("none")
					}),
					activeModal === "agency" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AgencyPortalModal, {
						isOpen: true,
						onClose: () => setActiveModal("none")
					}),
					activeModal === "profile" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserProfileModal, {
						isOpen: true,
						onClose: () => setActiveModal("none")
					}),
					activeModal === "messages" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessagesDrawer, {
						isOpen: true,
						onClose: () => setActiveModal("none")
					}),
					activeModal === "create_room" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CreateRoomModal, {
						isOpen: true,
						onClose: () => setActiveModal("none")
					})
				]
			})
		]
	});
};
function App() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ErrorBoundary, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MainLayout, {}) }) });
}
// src/main.tsx
if (typeof window !== "undefined" && "serviceWorker" in navigator) registerSW({
	immediate: true,
	onRegisterError(error) {
		console.warn("[PWA] Service worker registration skipped:", error);
	}
});
(0, import_client.createRoot)(document.getElementById("root")).render(/* @__PURE__ */ (0, import_jsx_runtime.jsx)(App, {}));
export { buildVoiceAvatarSvg as C, sound as D, resolveApiUrl as E, RECHARGE_PACKAGES as O, VOICE_COUNTRIES as S, getConfiguredServerBaseUrl as T, getMediaFormatLabel as _, room_bg_royal_majlis_1795294234181_default as a, resolveEntranceStageMedia as b, fetchServerAgoraStatus as c, parseAgoraTokenInfo as d, saveServerAgoraCertificate as f, detectMediaKind as g, clampEffectDurationSec as h, room_bg_midnight_lounge_1795294231147_default as i, STARTER_DEFAULT_GIFT_ID as k, formatAgoraChannelName as l, selfHostedVoice as m, refreshApkReleaseInfo as n, useApp as o, fetchVoiceServerStatus as p, room_bg_starlight_sky_1795294232054_default as r, agoraVoice as s, ProfileInstallButton as t, isValidAgoraAppId as u, isLikelyVapUrl as v, publishRoomLiveEventToFirestore as w, resolveGiftStageMedia as x, normalizeMediaUrl as y };
