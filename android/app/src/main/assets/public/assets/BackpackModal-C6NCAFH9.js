import { n as __toESM } from "./rolldown-runtime-CO0Nlsmt.js";
import { A as Search, Et as Check, Ft as ArrowLeft, I as Plus, It as require_react, L as Play, Mt as Backpack, N as RefreshCw, Nt as ArrowUpDown, P as Radio, T as Shield, bt as Clock, g as Trash2, gt as Crown, k as Send, s as Video, t as X, ut as Eye, w as ShoppingBag, y as Sparkles, yt as Coins } from "./icons-CSx0WKXF.js";
import { D as sound, _ as getMediaFormatLabel, b as resolveEntranceStageMedia, o as useApp } from "./index-tXJX2Qqq.js";
import { t as SmartMediaView } from "./SmartMediaView-B1toZNK4.js";
import { t as require_jsx_runtime } from "./react-vendor-BIdqWr74.js";
// src/components/BackpackModal.tsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
var TYPE_LABELS = {
	frame: "إطار ملكي",
	entrance: "دخولية فاخرة",
	badge: "وسام شرف",
	bubble: "فقاعة دردشة"
};
var TYPE_TO_BAG_TAB = {
	frame: "frames",
	entrance: "entrances",
	badge: "badges",
	bubble: "bubbles"
};
var BackpackModal = ({ isOpen, onClose }) => {
	const { currentUser, storeItems, ownedStoreItems, isStoreItemOwned, gifts, bagGifts, luckyConfig, activeRoom, rooms, activeModal, isAdminAccount, setActiveModal, setCurrentView, joinRoom, consumeBagGift, evaluateLuckyGiftWin, equipInventoryItem, purchaseStoreItem, sendRoomMessage, triggerFlyingGift } = useApp();
	const [section, setSection] = (0, import_react.useState)(activeModal === "store" ? "store" : "backpack");
	const [storeCategory, setStoreCategory] = (0, import_react.useState)("all");
	const [backpackTab, setBackpackTab] = (0, import_react.useState)("frames");
	const [searchQuery, setSearchQuery] = (0, import_react.useState)("");
	const [sortMode, setSortMode] = (0, import_react.useState)("default");
	const [previewEntrance, setPreviewEntrance] = (0, import_react.useState)(null);
	const [tryOnFrame, setTryOnFrame] = (0, import_react.useState)(null);
	const [selectedBagCount, setSelectedBagCount] = (0, import_react.useState)(1);
	const [feedback, setFeedback] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		if (isOpen) {
			setSection(activeModal === "store" ? "store" : "backpack");
			setTryOnFrame(null);
			setFeedback(null);
		}
	}, [isOpen, activeModal]);
	const showFeedback = (message, tone = "success", jumpToBagTab) => {
		setFeedback({
			message,
			tone,
			jumpToBagTab
		});
	};
	(0, import_react.useEffect)(() => {
		if (!feedback) return;
		const timer = window.setTimeout(() => setFeedback(null), 5e3);
		return () => window.clearTimeout(timer);
	}, [feedback]);
	const frames = (0, import_react.useMemo)(() => storeItems.filter((i) => i.type === "frame"), [storeItems]);
	const entrances = (0, import_react.useMemo)(() => storeItems.filter((i) => i.type === "entrance"), [storeItems]);
	const badges = (0, import_react.useMemo)(() => storeItems.filter((i) => i.type === "badge"), [storeItems]);
	const bubbles = (0, import_react.useMemo)(() => storeItems.filter((i) => i.type === "bubble"), [storeItems]);
	const ownedFrames = (0, import_react.useMemo)(() => frames.filter((i) => isStoreItemOwned(i.id)), [frames, ownedStoreItems]);
	const ownedEntrances = (0, import_react.useMemo)(() => entrances.filter((i) => isStoreItemOwned(i.id)), [entrances, ownedStoreItems]);
	const ownedBadges = (0, import_react.useMemo)(() => badges.filter((i) => isStoreItemOwned(i.id)), [badges, ownedStoreItems]);
	const ownedBubbles = (0, import_react.useMemo)(() => bubbles.filter((i) => isStoreItemOwned(i.id)), [bubbles, ownedStoreItems]);
	const ownedBagGiftEntries = (0, import_react.useMemo)(() => Object.entries(bagGifts).filter(([, count]) => count > 0).map(([giftId, count]) => ({
		gift: gifts.find((g) => g.id === giftId),
		count
	})).filter((entry) => Boolean(entry.gift)), [bagGifts, gifts]);
	const totalBagGiftsCount = (0, import_react.useMemo)(() => ownedBagGiftEntries.reduce((sum, entry) => sum + entry.count, 0), [ownedBagGiftEntries]);
	const totalOwnedWearablesCount = ownedFrames.length + ownedEntrances.length + ownedBadges.length + ownedBubbles.length;
	const equippedFrame = frames.find((f) => f.id === currentUser.activeFrameId);
	const equippedEntrance = entrances.find((e) => e.id === currentUser.activeEntranceId);
	const equippedBadge = badges.find((b) => b.id === currentUser.activeBadgeId);
	const equippedBubble = bubbles.find((b) => b.id === currentUser.activeBubbleId);
	const displayedShowcaseFrame = section === "store" && tryOnFrame ? tryOnFrame : equippedFrame;
	const filteredStoreItems = (0, import_react.useMemo)(() => {
		const q = searchQuery.trim().toLowerCase();
		const list = storeItems.filter((item) => {
			if (storeCategory !== "all" && item.type !== storeCategory) return false;
			if (!q) return true;
			return item.nameAr.toLowerCase().includes(q) || item.descriptionAr.toLowerCase().includes(q) || TYPE_LABELS[item.type].toLowerCase().includes(q);
		});
		if (sortMode === "price_asc") return [...list].sort((a, b) => a.priceCoins - b.priceCoins);
		if (sortMode === "price_desc") return [...list].sort((a, b) => b.priceCoins - a.priceCoins);
		return list;
	}, [
		storeItems,
		storeCategory,
		searchQuery,
		sortMode
	]);
	if (!isOpen) return null;
	const getRemainingDays = (itemId) => {
		const rec = ownedStoreItems[itemId];
		if (!rec) return 0;
		const diffMs = new Date(rec.expiresAt).getTime() - Date.now();
		return Math.max(1, Math.ceil(diffMs / 864e5));
	};
	const isItemEquipped = (item) => {
		if (item.type === "frame") return currentUser.activeFrameId === item.id;
		if (item.type === "entrance") return currentUser.activeEntranceId === item.id;
		if (item.type === "badge") return currentUser.activeBadgeId === item.id;
		if (item.type === "bubble") return currentUser.activeBubbleId === item.id;
		return false;
	};
	const handleBuyStoreItem = (item) => {
		const alreadyOwned = isStoreItemOwned(item.id);
		if (currentUser.coins < item.priceCoins) {
			showFeedback(`رصيدك غير كافٍ لشراء (${item.nameAr}) — تحتاج ${item.priceCoins.toLocaleString("en-US")} عملة. جاري فتح المحفظة للشحن...`, "warning");
			purchaseStoreItem(item.id);
			return;
		}
		if (purchaseStoreItem(item.id)) {
			const targetTab = TYPE_TO_BAG_TAB[item.type];
			showFeedback(alreadyOwned ? `تم تمديد ملكية (${item.nameAr}) +${item.durationDays} يوم داخل حقيبتك بنجاح.` : `تم شراء (${item.nameAr}) ونقله إلى حقيبتك الملكية بنجاح! افتح الحقيبة للارتداء أو الإزالة.`, "success", targetTab);
		}
	};
	const handleEquipOwnedItem = (item) => {
		if (!equipInventoryItem(item.type, item.id)) {
			showFeedback("يجب شراء العنصر من المتجر أولاً قبل ارتدائه.", "warning");
			return;
		}
		showFeedback(`تم ارتداء (${item.nameAr}) بنجاح — يظهر الآن على صورتك وفي الغرف.`, "success");
	};
	const handleUnequipItem = (type, label) => {
		equipInventoryItem(type, "");
		showFeedback(`تمت إزالة (${label}) بنجاح.`, "info");
	};
	const jumpToStoreCategory = (cat) => {
		setStoreCategory(cat);
		setSection("store");
	};
	const occupiedSeats = activeRoom ? activeRoom.seats.filter((s) => Boolean(s.userId)) : [];
	const handleUseBagGiftInRoom = (giftId, ownedCount) => {
		const giftObj = gifts.find((g) => g.id === giftId);
		if (!giftObj) return;
		if (!activeRoom) {
			const targetRoomId = rooms[0]?.id;
			if (targetRoomId) {
				onClose();
				joinRoom(targetRoomId);
			}
			return;
		}
		if (occupiedSeats.length === 0) {
			showFeedback("اصعد على مايك داخل الغرفة أولاً لإرسال هدية الحظ من الحقيبة.", "warning");
			return;
		}
		const sendQty = Math.min(ownedCount, selectedBagCount);
		if (!consumeBagGift(giftId, sendQty)) return;
		sound.unlockAudio();
		const targetSeat = occupiedSeats[0];
		const targetName = targetSeat.userName || `مايك ${targetSeat.index + 1}`;
		triggerFlyingGift(giftObj, sendQty, targetName);
		if (!giftObj.videoUrl && !giftObj.imageUrl) sound.playGiftHitAudio(giftObj.soundEffect, giftObj.soundUrl);
		if (giftObj.isLucky || giftObj.category === "lucky" || giftObj.animationType === "lollipop_matrix") {
			const luckyRes = evaluateLuckyGiftWin(giftObj, sendQty, sendQty, giftObj.coinPrice * sendQty, activeRoom.title);
			if (luckyRes.won) showFeedback(`أرسلت ${giftObj.nameAr} ×${sendQty} إلى ${targetSeat.userName || "المضيف"} وربحت +${luckyRes.winCoins.toLocaleString("en-US")} عملة (${luckyRes.multiplier}X)!`, "success");
			else showFeedback(`تم إرسال ${giftObj.nameAr} ×${sendQty} من الحقيبة بنجاح.`, "success");
		} else showFeedback(`تم إرسال ${giftObj.nameAr} ×${sendQty} من الحقيبة إلى ${targetSeat.userName || "المضيف"}.`, "success");
		sendRoomMessage(`أرسل من الحقيبة ${giftObj.icon} ${giftObj.nameAr} ×${sendQty} إلى ${targetName}`);
	};
	const renderSquareArtwork = (item) => {
		if (item.type === "frame" && item.previewUrl) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative w-28 h-28 sm:w-36 sm:h-36 flex items-center justify-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "pointer-events-none absolute inset-4 rounded-full blur-xl opacity-45",
					style: { background: "radial-gradient(circle, rgba(245, 197, 66, 0.55), transparent 70%)" }
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: currentUser.avatar,
					alt: item.nameAr,
					referrerPolicy: "no-referrer",
					className: "w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover ring-1 ring-amber-300/25 shadow-inner"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: item.previewUrl,
					alt: item.nameAr,
					referrerPolicy: "no-referrer",
					className: "pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[112px] h-[112px] sm:w-[144px] sm:h-[144px] object-contain z-20 drop-shadow-[0_6px_18px_rgba(245,180,45,0.28)]"
				})
			]
		});
		if (item.type === "entrance" && (item.videoUrl || item.previewUrl)) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SmartMediaView, {
			mode: "thumbnail",
			url: item.videoUrl || item.previewUrl,
			preferVideo: Boolean(item.videoUrl),
			alt: item.nameAr,
			className: "w-full h-full object-contain p-3 sm:p-4 drop-shadow-[0_8px_22px_rgba(245,180,45,0.22)]",
			fallback: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-5xl sm:text-6xl",
				children: item.icon
			})
		});
		if (item.previewUrl) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SmartMediaView, {
			mode: "thumbnail",
			url: item.previewUrl,
			alt: item.nameAr,
			className: "w-full h-full object-contain p-4 sm:p-5 drop-shadow-[0_6px_18px_rgba(245,180,45,0.25)]",
			fallback: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-5xl sm:text-6xl",
				children: item.icon
			})
		});
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-5xl sm:text-6xl",
			children: item.icon
		});
	};
	const renderOwnedCategoryGrid = (items, emptyTitle, emptyHint, storeTargetCategory) => {
		if (items.length === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "py-12 px-5 rounded-3xl bg-gradient-to-b from-[#0e1424] to-[#080c17] border border-amber-400/15 text-center space-y-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "w-16 h-16 mx-auto rounded-2xl bg-gradient-to-tr from-amber-500/20 to-yellow-300/10 border border-amber-400/35 flex items-center justify-center text-amber-300 shadow-lg shadow-amber-500/10",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Crown, { className: "w-8 h-8" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-1.5 max-w-md mx-auto",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
						className: "text-sm sm:text-base font-black text-white",
						children: emptyTitle
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-slate-400 leading-relaxed",
						children: emptyHint
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => jumpToStoreCategory(storeTargetCategory),
					className: "min-h-[44px] px-6 rounded-xl bg-gradient-to-r from-[#f7d36a] via-[#eab308] to-[#d97706] hover:brightness-105 text-slate-950 font-black text-xs inline-flex items-center gap-2 shadow-lg shadow-amber-500/20 transition-all",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "w-4 h-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "تصفح المتجر الملكي للشراء" })]
				})
			]
		});
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid grid-cols-2 gap-3 sm:gap-4",
			children: items.map((item) => {
				const equipped = isItemEquipped(item);
				const remainingDays = getRemainingDays(item.id);
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: `group rounded-2xl sm:rounded-3xl border overflow-hidden flex flex-col justify-between transition-all ${equipped ? "bg-gradient-to-b from-[#171d32] to-[#0c101e] border-amber-400/75 shadow-[0_0_28px_rgba(245,197,66,0.16)]" : "bg-gradient-to-b from-[#12182b] to-[#0a0f1c] border-amber-300/15 hover:border-amber-400/45"}`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative aspect-square w-full flex items-center justify-center overflow-hidden border-b border-amber-300/12",
						style: { background: "radial-gradient(circle at 50% 44%, rgba(245, 197, 66, 0.16), rgba(9, 13, 25, 0.96) 72%)" },
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "pointer-events-none absolute top-2 right-2 w-3 h-3 border-t border-r border-amber-400/40 rounded-tr-sm" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "pointer-events-none absolute top-2 left-2 w-3 h-3 border-t border-l border-amber-400/40 rounded-tl-sm" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "pointer-events-none absolute bottom-2 right-2 w-3 h-3 border-b border-r border-amber-400/40 rounded-br-sm" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "pointer-events-none absolute bottom-2 left-2 w-3 h-3 border-b border-l border-amber-400/40 rounded-bl-sm" }),
							renderSquareArtwork(item),
							item.type === "entrance" && (item.videoUrl || item.previewUrl) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => setPreviewEntrance(item),
								className: "absolute bottom-2.5 left-2.5 px-2.5 py-1 rounded-lg bg-black/75 hover:bg-black border border-amber-400/30 text-[10px] sm:text-[11px] font-bold text-amber-300 flex items-center gap-1 transition-colors",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "w-3 h-3" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "معاينة" })]
							}),
							equipped && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "absolute top-2.5 right-2.5 flex items-center gap-1 text-[10px] sm:text-[11px] font-black text-emerald-300 bg-black/75 px-2 py-0.5 rounded-lg border border-emerald-400/40",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "w-3 h-3" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "مرتدى" })]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-3 sm:p-4 flex-1 flex flex-col justify-between gap-2.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-1 text-right",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-[10px] sm:text-[11px] text-amber-200/75 flex items-center justify-between gap-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "truncate",
									children: TYPE_LABELS[item.type]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "inline-flex items-center gap-1 font-mono tabular-nums text-amber-300 shrink-0",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "w-3 h-3" }),
										remainingDays,
										" يوم"
									]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
								className: "font-black text-xs sm:text-sm text-white truncate",
								children: item.nameAr
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "pt-2 border-t border-white/8",
							children: equipped ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => handleUnequipItem(item.type, item.nameAr),
								className: "w-full min-h-[38px] sm:min-h-[42px] rounded-xl bg-rose-500/15 hover:bg-rose-500/25 border border-rose-400/45 text-rose-200 font-black text-[11px] sm:text-xs flex items-center justify-center gap-1.5 transition-colors",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "w-3.5 h-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "إزالة" })]
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => handleEquipOwnedItem(item),
								className: "w-full min-h-[38px] sm:min-h-[42px] rounded-xl bg-gradient-to-r from-[#f7d36a] via-[#eab308] to-[#d97706] hover:brightness-105 text-slate-950 font-black text-[11px] sm:text-xs flex items-center justify-center gap-1.5 shadow-md shadow-amber-500/20 transition-all",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "w-3.5 h-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "ارتداء الآن" })]
							})
						})]
					})]
				}, item.id);
			})
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/88 backdrop-blur-md animate-in fade-in duration-200 font-tajawal",
		onClick: onClose,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-full max-w-3xl bg-[#070b15] border border-amber-400/25 rounded-t-3xl sm:rounded-3xl shadow-[0_24px_80px_rgba(0,0,0,0.85)] overflow-hidden flex flex-col max-h-[95dvh] relative",
			onClick: (e) => e.stopPropagation(),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "pointer-events-none absolute inset-x-0 top-0 h-44 opacity-70",
					style: { background: "radial-gradient(ellipse at 50% 0%, rgba(245, 197, 66, 0.16), transparent 72%)" }
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative z-10 px-4 sm:px-6 py-4 border-b border-amber-400/15 bg-[#060912]/95 flex items-center justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3 min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/logo.png",
							alt: "فوكاشات",
							referrerPolicy: "no-referrer",
							className: "w-10 h-10 sm:w-11 sm:h-11 rounded-xl object-cover ring-1 ring-amber-400/60 shadow-lg shadow-amber-500/20 shrink-0"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Crown, { className: "w-4 h-4 text-amber-400 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "text-base sm:text-lg font-black bg-gradient-to-r from-amber-200 via-yellow-100 to-amber-300 bg-clip-text text-transparent truncate",
									children: section === "store" ? "متجر فوكاشات الملكي" : "حقيبتي الملكية"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[11px] text-slate-400 truncate",
								children: section === "store" ? "مقتنيات VIP حصرية · اشترِ لتنتقل فوراً إلى حقيبتك" : "مقتنياتك المملوكة · ارتدِ وأزل بحرية في أي وقت"
							})]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setActiveModal("wallet"),
							className: "min-h-[38px] px-2.5 sm:px-3 rounded-xl bg-gradient-to-r from-[#1a1508] to-[#121626] hover:brightness-110 border border-amber-400/40 flex items-center gap-1.5 transition-all",
							title: "شحن العملات الذهبية",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Coins, { className: "w-4 h-4 text-amber-400 shrink-0" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-mono tabular-nums text-xs sm:text-sm font-black text-amber-300",
									children: currentUser.coins.toLocaleString("en-US")
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "w-5 h-5 rounded-md bg-gradient-to-tr from-amber-400 to-yellow-300 text-slate-950 flex items-center justify-center shrink-0",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "w-3.5 h-3.5" })
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: onClose,
							"aria-label": "إغلاق",
							className: "w-9 h-9 rounded-xl bg-white/8 hover:bg-white/15 border border-white/10 text-slate-300 hover:text-white flex items-center justify-center shrink-0 transition-colors",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "w-5 h-5" })
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative z-10 px-4 sm:px-6 py-3 bg-[#080d1a] border-b border-amber-400/12",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-2 gap-1.5 p-1 rounded-2xl bg-[#04070f] border border-amber-400/20",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => {
								setSection("store");
								setTryOnFrame(null);
							},
							className: `min-h-[42px] px-3 rounded-xl text-xs sm:text-sm font-black flex items-center justify-center gap-2 transition-all ${section === "store" ? "bg-gradient-to-r from-[#f7d36a] via-[#eab308] to-[#d97706] text-slate-950 shadow-lg shadow-amber-500/20" : "text-slate-300 hover:text-amber-200"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "w-4 h-4 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
								"المتجر الملكي (",
								storeItems.length,
								")"
							] })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => {
								setSection("backpack");
								setTryOnFrame(null);
							},
							className: `min-h-[42px] px-3 rounded-xl text-xs sm:text-sm font-black flex items-center justify-center gap-2 transition-all ${section === "backpack" ? "bg-gradient-to-r from-[#f7d36a] via-[#eab308] to-[#d97706] text-slate-950 shadow-lg shadow-amber-500/20" : "text-slate-300 hover:text-amber-200"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Backpack, { className: "w-4 h-4 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
								"حقيبتي (",
								totalOwnedWearablesCount + totalBagGiftsCount,
								")"
							] })]
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative z-10 p-3.5 sm:p-5 overflow-y-auto space-y-4 flex-1",
					children: [
						feedback && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: `p-3.5 rounded-2xl border flex flex-wrap items-center justify-between gap-3 text-xs font-bold ${feedback.tone === "success" ? "bg-emerald-500/12 border-emerald-400/45 text-emerald-200" : feedback.tone === "warning" ? "bg-amber-500/12 border-amber-400/45 text-amber-200" : "bg-sky-500/12 border-sky-400/45 text-sky-200"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: feedback.message }), feedback.jumpToBagTab && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => {
									setBackpackTab(feedback.jumpToBagTab);
									setSection("backpack");
									setFeedback(null);
								},
								className: "min-h-[34px] px-3.5 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-black text-xs inline-flex items-center gap-1.5 shrink-0 transition-colors",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "الانتقال للحقيبة للارتداء" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "w-3.5 h-3.5" })]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-4 rounded-2xl sm:rounded-3xl border border-amber-400/25 flex flex-col sm:flex-row items-center justify-between gap-4 relative overflow-hidden",
							style: { background: "linear-gradient(135deg, rgba(24, 19, 10, 0.92) 0%, rgba(13, 19, 36, 0.95) 55%, rgba(9, 13, 25, 0.98) 100%)" },
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3.5 text-right w-full sm:w-auto",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative w-20 h-20 shrink-0 flex items-center justify-center",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "pointer-events-none absolute inset-1 rounded-full blur-lg opacity-50",
											style: { background: "radial-gradient(circle, rgba(245, 197, 66, 0.45), transparent 70%)" }
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: displayedShowcaseFrame?.previewUrl ? "w-12 h-12 rounded-full overflow-hidden" : `w-14 h-14 rounded-full overflow-hidden p-0.5 border-2 ${displayedShowcaseFrame ? "border-amber-400" : "border-amber-300/25"}`,
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
												src: currentUser.avatar,
												alt: currentUser.displayName,
												referrerPolicy: "no-referrer",
												className: "w-full h-full rounded-full object-cover"
											})
										}),
										displayedShowcaseFrame?.previewUrl && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: displayedShowcaseFrame.previewUrl,
											alt: displayedShowcaseFrame.nameAr,
											referrerPolicy: "no-referrer",
											className: "pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[84px] h-[84px] object-contain z-20"
										})
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0 space-y-1",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "text-sm font-black text-white flex items-center gap-2 flex-wrap",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "truncate",
													children: currentUser.displayName
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "text-xs font-mono text-amber-300",
													children: ["VIP ", currentUser.vipLevel]
												}),
												section === "store" && tryOnFrame && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "text-[11px] text-amber-200 font-bold",
													children: ["· تجربة مباشرة: ", tryOnFrame.nameAr]
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "text-[11px] sm:text-xs text-slate-300/85",
											children: [
												equippedFrame ? `الإطار: ${equippedFrame.nameAr}` : "بدون إطار",
												" ·",
												" ",
												equippedEntrance ? `الدخولية: ${equippedEntrance.nameAr}` : "بدون دخولية"
											]
										}),
										section === "store" && tryOnFrame ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											onClick: () => setTryOnFrame(null),
											className: "text-[11px] font-bold text-amber-300 hover:text-amber-200 underline underline-offset-4",
											children: "إنهاء التجربة والعودة لإطاري الحالي"
										}) : (currentUser.activeFrameId || currentUser.activeEntranceId || currentUser.activeBadgeId || currentUser.activeBubbleId || currentUser.vipLevel >= 1 && currentUser.activeEntranceId !== "") && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex flex-wrap items-center gap-1.5 pt-0.5",
											children: [
												currentUser.activeFrameId && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													type: "button",
													onClick: () => handleUnequipItem("frame", equippedFrame?.nameAr || "الإطار"),
													className: "px-2.5 py-1 rounded-lg bg-rose-500/15 hover:bg-rose-500/25 border border-rose-400/35 text-rose-200 text-[11px] font-bold transition-colors",
													children: "إزالة الإطار"
												}),
												(currentUser.activeEntranceId || currentUser.vipLevel >= 1 && currentUser.activeEntranceId !== "") && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													type: "button",
													onClick: () => handleUnequipItem("entrance", equippedEntrance?.nameAr || "الدخولية"),
													className: "px-2.5 py-1 rounded-lg bg-rose-500/15 hover:bg-rose-500/25 border border-rose-400/35 text-rose-200 text-[11px] font-bold transition-colors",
													children: "إزالة الدخولية"
												}),
												currentUser.activeBadgeId && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													type: "button",
													onClick: () => handleUnequipItem("badge", equippedBadge?.nameAr || "الوسام"),
													className: "px-2.5 py-1 rounded-lg bg-rose-500/15 hover:bg-rose-500/25 border border-rose-400/35 text-rose-200 text-[11px] font-bold transition-colors",
													children: "إزالة الوسام"
												}),
												currentUser.activeBubbleId && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													type: "button",
													onClick: () => handleUnequipItem("bubble", equippedBubble?.nameAr || "الفقاعة"),
													className: "px-2.5 py-1 rounded-lg bg-rose-500/15 hover:bg-rose-500/25 border border-rose-400/35 text-rose-200 text-[11px] font-bold transition-colors",
													children: "إزالة الفقاعة"
												})
											]
										})
									]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between sm:flex-col sm:items-end gap-1.5 w-full sm:w-auto border-t sm:border-t-0 border-amber-400/12 pt-2.5 sm:pt-0 shrink-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-[11px] text-slate-400",
									children: [
										"مقتنياتك: ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
											className: "font-mono text-amber-300",
											children: totalOwnedWearablesCount
										}),
										" · حظ الهدايا",
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", {
											className: "font-mono text-emerald-400",
											children: [luckyConfig.winRatePercent, "%"]
										})
									]
								}), section === "store" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => setSection("backpack"),
									className: "px-3 py-1.5 rounded-xl bg-white/8 hover:bg-white/14 border border-amber-400/25 text-[11px] font-bold text-amber-200 flex items-center gap-1.5 transition-colors",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Backpack, { className: "w-3.5 h-3.5 text-amber-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "فتح الحقيبة" })]
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => setSection("store"),
									className: "px-3 py-1.5 rounded-xl bg-amber-400/15 hover:bg-amber-400/25 border border-amber-400/35 text-[11px] font-black text-amber-300 flex items-center gap-1.5 transition-colors",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "w-3.5 h-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "تسوق الآن" })]
								})]
							})]
						}),
						section === "store" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-0.5 text-xs",
									children: [
										{
											id: "all",
											label: `الكل (${storeItems.length})`
										},
										{
											id: "frame",
											label: `إطارات الصور (${frames.length})`
										},
										{
											id: "entrance",
											label: `الدخوليات (${entrances.length})`
										},
										{
											id: "badge",
											label: `الأوسمة (${badges.length})`
										},
										{
											id: "bubble",
											label: `الفقاعات (${bubbles.length})`
										}
									].map((cat) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => setStoreCategory(cat.id),
										className: `min-h-[38px] px-3.5 rounded-xl font-bold whitespace-nowrap transition-all ${storeCategory === cat.id ? "bg-gradient-to-r from-[#f7d36a] to-[#eab308] text-slate-950 shadow-md shadow-amber-500/15" : "bg-[#101628] text-slate-300 hover:text-amber-200 border border-amber-400/12"}`,
										children: cat.label
									}, cat.id))
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid grid-cols-12 gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "relative col-span-7 sm:col-span-8",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "w-3.5 h-3.5 text-amber-300/70 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "text",
											value: searchQuery,
											onChange: (e) => setSearchQuery(e.target.value),
											placeholder: "ابحث عن إطار أو دخولية...",
											className: "w-full min-h-[38px] rounded-xl bg-[#0e1424] border border-amber-400/15 pr-9 pl-3 text-xs text-white placeholder:text-slate-500 focus:border-amber-400 focus:outline-none"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "relative col-span-5 sm:col-span-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpDown, { className: "w-3.5 h-3.5 text-amber-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
											value: sortMode,
											onChange: (e) => setSortMode(e.target.value),
											"aria-label": "ترتيب المنتجات",
											className: "w-full min-h-[38px] rounded-xl bg-[#0e1424] border border-amber-400/15 pr-8 pl-2 text-xs text-slate-200 focus:border-amber-400 focus:outline-none",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "default",
													children: "الأحدث"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "price_asc",
													children: "الأقل سعراً"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "price_desc",
													children: "الأعلى سعراً"
												})
											]
										})]
									})]
								})]
							}), filteredStoreItems.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "py-12 px-5 rounded-3xl bg-gradient-to-b from-[#0e1424] to-[#080c17] border border-amber-400/15 text-center space-y-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "w-16 h-16 mx-auto rounded-2xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-300",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "w-8 h-8" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-1.5 max-w-md mx-auto",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
											className: "text-sm font-black text-white",
											children: storeItems.length === 0 ? "المتجر الملكي جاهز لاستقبال مقتنياتك" : "لا توجد نتائج مطابقة للبحث"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs text-slate-400 leading-relaxed",
											children: storeItems.length === 0 ? "ارفع الإطارات أو الدخوليات أو الأوسمة من لوحة المدير لتظهر هنا فوراً لجميع المستخدمين." : "جرّب تغيير كلمة البحث أو استعراض كل الأقسام."
										})]
									}),
									storeItems.length === 0 && isAdminAccount && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => {
											onClose();
											setCurrentView("admin_dashboard");
										},
										className: "min-h-[42px] px-5 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-black text-xs inline-flex items-center gap-2 transition-all",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shield, { className: "w-4 h-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "فتح لوحة المدير لإضافة عناصر" })]
									})
								]
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid grid-cols-2 gap-3 sm:gap-4",
								children: filteredStoreItems.map((item) => {
									const owned = isStoreItemOwned(item.id);
									const remainingDays = owned ? getRemainingDays(item.id) : 0;
									const canAfford = currentUser.coins >= item.priceCoins;
									const isPreviewingFrame = tryOnFrame?.id === item.id;
									return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: `group rounded-2xl sm:rounded-3xl border overflow-hidden flex flex-col justify-between transition-all ${owned ? "bg-gradient-to-b from-[#111c29] to-[#0a101b] border-emerald-400/45 shadow-[0_0_24px_rgba(16,185,129,0.12)]" : isPreviewingFrame ? "bg-gradient-to-b from-[#1a1829] to-[#0c101d] border-amber-400/80 shadow-[0_0_30px_rgba(245,197,66,0.2)]" : "bg-gradient-to-b from-[#12182b] to-[#0a0f1c] border-amber-300/18 hover:border-amber-400/55 hover:shadow-[0_10px_30px_rgba(245,180,45,0.12)]"}`,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "relative aspect-square w-full flex items-center justify-center overflow-hidden border-b border-amber-300/12",
											style: { background: "radial-gradient(circle at 50% 42%, rgba(245, 197, 66, 0.17), rgba(8, 12, 23, 0.97) 73%)" },
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "pointer-events-none absolute top-2 right-2 w-3 h-3 border-t border-r border-amber-400/45 rounded-tr-sm" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "pointer-events-none absolute top-2 left-2 w-3 h-3 border-t border-l border-amber-400/45 rounded-tl-sm" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "pointer-events-none absolute bottom-2 right-2 w-3 h-3 border-b border-r border-amber-400/45 rounded-br-sm" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "pointer-events-none absolute bottom-2 left-2 w-3 h-3 border-b border-l border-amber-400/45 rounded-bl-sm" }),
												renderSquareArtwork(item),
												item.type === "entrance" && (item.videoUrl || item.previewUrl) ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
													type: "button",
													onClick: () => setPreviewEntrance(item),
													className: "absolute bottom-2.5 left-2.5 px-2.5 py-1 rounded-lg bg-black/80 hover:bg-black border border-amber-400/35 text-[10px] sm:text-[11px] font-bold text-amber-300 flex items-center gap-1 transition-colors",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "w-3 h-3" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "معاينة" })]
												}) : item.type === "frame" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
													type: "button",
													onClick: () => setTryOnFrame((prev) => prev?.id === item.id ? null : item),
													className: `absolute bottom-2.5 left-2.5 px-2.5 py-1 rounded-lg border text-[10px] sm:text-[11px] font-bold flex items-center gap-1 transition-colors ${isPreviewingFrame ? "bg-amber-400 text-slate-950 border-amber-300" : "bg-black/80 hover:bg-black text-amber-200 border-amber-400/30"}`,
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "w-3 h-3" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: isPreviewingFrame ? "مُجرّب" : "تجربة" })]
												}) : null,
												owned && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "absolute top-2.5 right-2.5 flex items-center gap-1 text-[10px] sm:text-[11px] font-black text-emerald-300 bg-black/80 px-2 py-0.5 rounded-lg border border-emerald-400/40",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "w-3 h-3" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "بالحقيبة" })]
												})
											]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "p-3 sm:p-4 flex-1 flex flex-col justify-between gap-2.5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "space-y-1 text-right",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "text-[10px] sm:text-[11px] text-amber-200/75 flex items-center justify-between gap-1",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
														className: "truncate",
														children: [
															TYPE_LABELS[item.type],
															" · ",
															item.durationDays,
															" يوم"
														]
													}), owned && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
														className: "font-mono tabular-nums text-emerald-300 shrink-0",
														children: [remainingDays, "ي"]
													})]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
													className: "font-black text-xs sm:text-sm text-white truncate",
													children: item.nameAr
												})]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "pt-2 border-t border-amber-400/12 space-y-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center justify-between gap-1",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "flex items-center gap-1 font-mono tabular-nums font-black text-xs sm:text-sm text-amber-300",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Coins, { className: "w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item.priceCoins.toLocaleString("en-US") })]
													}), !canAfford && !owned && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-[10px] font-bold text-rose-300",
														children: "اشحن"
													})]
												}), owned ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "grid grid-cols-12 gap-1.5",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
														type: "button",
														onClick: () => {
															setBackpackTab(TYPE_TO_BAG_TAB[item.type]);
															setSection("backpack");
														},
														className: "col-span-8 min-h-[38px] rounded-xl bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-400/45 text-emerald-200 font-black text-[10px] sm:text-xs flex items-center justify-center gap-1 transition-colors",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Backpack, { className: "w-3.5 h-3.5 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "truncate",
															children: "للحقيبة"
														})]
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
														type: "button",
														onClick: () => handleBuyStoreItem(item),
														title: `تمديد +${item.durationDays} يوم`,
														className: "col-span-4 min-h-[38px] rounded-xl bg-white/8 hover:bg-white/14 border border-white/12 text-amber-200 font-bold text-[10px] sm:text-xs flex items-center justify-center transition-colors",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, { className: "w-3.5 h-3.5" })
													})]
												}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
													type: "button",
													onClick: () => handleBuyStoreItem(item),
													className: "w-full min-h-[38px] sm:min-h-[42px] rounded-xl bg-gradient-to-r from-[#f7d36a] via-[#eab308] to-[#d97706] hover:brightness-105 text-slate-950 font-black text-[11px] sm:text-xs flex items-center justify-center gap-1.5 shadow-md shadow-amber-500/20 transition-all",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "w-3.5 h-3.5 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "شراء للحقيبة" })]
												})]
											})]
										})]
									}, item.id);
								})
							})]
						}),
						section === "backpack" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-0.5 text-xs",
									children: [
										{
											id: "frames",
											label: `إطاراتي (${ownedFrames.length})`
										},
										{
											id: "entrances",
											label: `دخولياتي (${ownedEntrances.length})`
										},
										{
											id: "badges",
											label: `أوسمتي (${ownedBadges.length})`
										},
										{
											id: "bubbles",
											label: `فقاعاتي (${ownedBubbles.length})`
										},
										{
											id: "lucky_bag",
											label: `هدايا الحظ (${totalBagGiftsCount})`
										}
									].map((tab) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => setBackpackTab(tab.id),
										className: `min-h-[38px] px-3.5 rounded-xl font-bold whitespace-nowrap transition-all ${backpackTab === tab.id ? "bg-gradient-to-r from-[#f7d36a] to-[#eab308] text-slate-950 shadow-md shadow-amber-500/15" : "bg-[#101628] text-slate-300 hover:text-amber-200 border border-amber-400/12"}`,
										children: tab.label
									}, tab.id))
								}),
								backpackTab === "frames" && renderOwnedCategoryGrid(ownedFrames, "لا تملك أي إطارات في حقيبتك حالياً", "اشترِ إطارك الملكي من المتجر لينتقل فوراً إلى حقيبتك، وتستطيع ارتداءه أو إزالته في أي وقت.", "frame"),
								backpackTab === "entrances" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-4",
									children: [currentUser.vipLevel >= 1 && currentUser.activeEntranceId !== "" && !ownedEntrances.some((e) => e.id === currentUser.activeEntranceId) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "p-3.5 rounded-2xl bg-cyan-500/10 border border-cyan-400/35 flex flex-wrap items-center justify-between gap-3 text-xs",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "text-cyan-100 font-semibold",
											children: [
												"تعمل حالياً دخولية VIP ",
												currentUser.vipLevel,
												" الافتراضية عند دخولك الغرف."
											]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											onClick: () => handleUnequipItem("entrance", "الدخولية الافتراضية"),
											className: "min-h-[34px] px-3.5 rounded-xl bg-rose-500/20 hover:bg-rose-500/30 border border-rose-400/40 text-rose-200 font-bold transition-colors",
											children: "إزالة الدخولية"
										})]
									}), renderOwnedCategoryGrid(ownedEntrances, "لا تملك أي دخوليات في حقيبتك حالياً", "اشترِ دخولية غرفة فاخرة من المتجر لتنتقل إلى حقيبتك وتتحكم في ارتدائها وإزالتها.", "entrance")]
								}),
								backpackTab === "badges" && renderOwnedCategoryGrid(ownedBadges, "لا تملك أي أوسمة في حقيبتك حالياً", "اشترِ الأوسمة الملكية من المتجر لتظهر في حقيبتك وتتمكن من ارتدائها وإزالتها.", "badge"),
								backpackTab === "bubbles" && renderOwnedCategoryGrid(ownedBubbles, "لا تملك أي فقاعات دردشة في حقيبتك حالياً", "اشترِ فقاعات الدردشة الفاخرة من المتجر لتنتقل إلى حقيبتك وتستخدمها في الغرف.", "bubble"),
								backpackTab === "lucky_bag" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-wrap items-center justify-between gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-xs text-slate-300",
											children: "هدايا الحظ والهدايا المخزنة في حقيبتك — أرسلها داخل أي غرفة لربح مضاعفات الكوينزات:"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "flex items-center gap-1.5",
											children: [
												1,
												5,
												10,
												25
											].map((qty) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
												type: "button",
												onClick: () => setSelectedBagCount(qty),
												className: `px-2.5 py-1 rounded-lg text-xs font-mono font-bold transition-colors ${selectedBagCount === qty ? "bg-amber-400 text-slate-950" : "bg-white/8 text-slate-300 hover:bg-white/14"}`,
												children: ["×", qty]
											}, qty))
										})]
									}), ownedBagGiftEntries.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "p-10 rounded-3xl bg-[#0d1220] border border-amber-400/12 text-center space-y-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-4xl",
											children: "🎒"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs text-slate-300",
											children: "لا توجد هدايا في حقيبتك حالياً — يمكنك الحصول عليها من صاروخ الغرفة أو كيس الحظ."
										})]
									}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid grid-cols-2 gap-3 sm:gap-4",
										children: ownedBagGiftEntries.map(({ gift, count }) => {
											const isLucky = gift.isLucky || gift.category === "lucky";
											return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: `p-3.5 sm:p-4 rounded-2xl border flex flex-col justify-between gap-3 ${isLucky ? "bg-gradient-to-br from-[#231229] to-[#121626] border-pink-400/35" : "bg-[#111726] border-amber-400/15"}`,
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-start justify-between gap-2",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "flex items-center gap-2.5 min-w-0",
														children: [gift.imageUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
															src: gift.imageUrl,
															alt: gift.nameAr,
															referrerPolicy: "no-referrer",
															className: "w-11 h-11 rounded-xl object-cover border border-white/15 shrink-0"
														}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
															className: "w-11 h-11 rounded-xl bg-white/8 flex items-center justify-center text-2xl shrink-0",
															children: gift.icon
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "min-w-0 text-right",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																className: "text-xs sm:text-sm font-bold text-white truncate",
																children: gift.nameAr
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																className: "text-[10px] text-slate-400 flex items-center gap-1 mt-0.5",
																children: [isLucky && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
																	className: "text-pink-300 font-semibold flex items-center gap-0.5",
																	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "w-3 h-3" }), "حظ"]
																}), (gift.videoUrl || gift.imageUrl) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
																	className: "text-rose-300 font-mono flex items-center gap-0.5",
																	children: [
																		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Video, { className: "w-3 h-3" }),
																		" ",
																		getMediaFormatLabel(gift.videoUrl || gift.imageUrl)
																	]
																})]
															})]
														})]
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
														className: "font-mono tabular-nums text-xs font-black text-emerald-400 shrink-0",
														children: ["×", count]
													})]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													type: "button",
													onClick: () => handleUseBagGiftInRoom(gift.id, count),
													className: "w-full min-h-[38px] rounded-xl bg-gradient-to-r from-[#f7d36a] to-[#eab308] hover:brightness-105 text-slate-950 font-black text-[11px] sm:text-xs flex items-center justify-center gap-1.5 transition-all",
													children: activeRoom ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "w-3.5 h-3.5 rtl:rotate-180" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["إرسال ×", Math.min(count, selectedBagCount)] })] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Radio, { className: "w-3.5 h-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "دخول الغرفة" })] })
												})]
											}, gift.id);
										})
									})]
								})
							]
						})
					]
				})
			]
		}), previewEntrance && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "fixed inset-0 z-[60] bg-black/88 backdrop-blur-md flex items-center justify-center p-4",
			onClick: (e) => {
				e.stopPropagation();
				setPreviewEntrance(null);
			},
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative w-full max-w-sm aspect-[9/16] max-h-[82dvh] rounded-3xl overflow-hidden bg-[#0a0e1a] border border-amber-400/60 shadow-2xl flex flex-col items-center justify-center",
				onClick: (e) => e.stopPropagation(),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setPreviewEntrance(null),
						"aria-label": "إغلاق المعاينة",
						className: "absolute top-3 left-3 z-30 w-9 h-9 rounded-full bg-black/70 border border-white/15 text-white flex items-center justify-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "w-5 h-5" })
					}),
					(() => {
						const resolved = resolveEntranceStageMedia(previewEntrance);
						if (resolved.primaryUrl) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SmartMediaView, {
							mode: "stage",
							url: resolved.primaryUrl,
							fallbackUrl: previewEntrance.previewUrl,
							preferVideo: resolved.preferVideo,
							alt: previewEntrance.nameAr,
							loop: true
						});
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-7xl animate-bounce",
							children: previewEntrance.icon
						});
					})(),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative z-20 mt-auto mb-8 px-4 py-2.5 rounded-2xl bg-gradient-to-r from-[#1d1408]/95 via-[#31210d]/95 to-[#1d1408]/95 border border-amber-400/65 flex items-center gap-3 shadow-2xl",
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
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-slate-200",
								children: previewEntrance.nameAr
							})]
						})]
					})
				]
			})
		})]
	});
};
export { BackpackModal };
