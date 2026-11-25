import { n as __toESM } from "./rolldown-runtime-CO0Nlsmt.js";
import { It as require_react, t as X, y as Sparkles } from "./icons-CSx0WKXF.js";
import { o as useApp } from "./index-tXJX2Qqq.js";
import { t as require_jsx_runtime } from "./react-vendor-BIdqWr74.js";
// src/components/VipCenterModal.tsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
var VipCenterModal = ({ isOpen, onClose }) => {
	const { vipTiers, currentUser, purchaseVip, rechargeCoins, setActiveModal } = useApp();
	const [selectedVipLevel, setSelectedVipLevel] = (0, import_react.useState)(currentUser.vipLevel > 0 ? currentUser.vipLevel : 4);
	const [durationMonths, setDurationMonths] = (0, import_react.useState)(1);
	const [previewEntrance, setPreviewEntrance] = (0, import_react.useState)(false);
	if (!isOpen) return null;
	const currentTier = vipTiers.find((v) => v.level === selectedVipLevel) || vipTiers[0];
	const discountMultiplier = durationMonths === 3 ? .9 : durationMonths === 12 ? .75 : 1;
	const totalCost = Math.round(currentTier.coinCostMonthly * durationMonths * discountMultiplier);
	const hasEnoughCoins = currentUser.coins >= totalCost;
	const handleSubscribe = () => {
		if (!hasEnoughCoins) rechargeCoins(totalCost, "VIP Instant Upgrade Bonus");
		if (purchaseVip(currentTier.level, durationMonths)) onClose();
	};
	const privilegedGrid = [
		{
			icon: "👑",
			title: "تاج وإطار 3D ملكي",
			desc: `إطار ${currentTier.nameAr} المضيء في جميع الغرف`
		},
		{
			icon: currentTier.entranceIcon,
			title: "دخولية أسطورية",
			desc: currentTier.entranceName
		},
		{
			icon: "🍭",
			title: "مضاعف هدايا الحظ",
			desc: `زيادة نسبة ربح 66X و 188X بنسبة +${currentTier.level * 5}%`
		},
		{
			icon: "🛡️",
			title: "حصانة ضد الطرد والكتم",
			desc: "حماية كاملة داخل الغرف الصوتية العامة"
		},
		{
			icon: "💬",
			title: "فقاعة دردشة ذهبية",
			desc: "رسائلك تظهر بلون ذهبي مشع في شات الغرفة"
		},
		{
			icon: "⚡",
			title: "تسريع خبرة الحساب",
			desc: `+${currentTier.level * 10}% نقاط خبرة إضافية عند إرسال الهدايا`
		},
		{
			icon: "🕵️",
			title: "دخول متخفي للغرف",
			desc: "إمكانية تصفح الغرف والملفات بدون ظهور في الزوار"
		},
		{
			icon: "🎁",
			title: "صندوق هدايا VIP يومي",
			desc: `${currentTier.level * 1500} كوينزات هدية مجانية يومياً`
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200 font-tajawal select-none",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-full max-w-md bg-gradient-to-b from-[#1a130c] via-[#120d08] to-[#0c0805] border-2 border-amber-500/60 rounded-[32px] shadow-[0_0_50px_rgba(245,158,11,0.3)] overflow-hidden flex flex-col max-h-[92vh] text-white",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "px-4 py-3.5 bg-gradient-to-r from-amber-950/90 via-stone-900 to-amber-950/90 border-b border-amber-500/30 flex items-center justify-between",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: onClose,
							className: "w-8 h-8 rounded-full bg-white/10 text-stone-300 hover:text-white flex items-center justify-center",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "w-4 h-4" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-base font-black bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-300 bg-clip-text text-transparent",
								children: "مركز امتيازات VIP الملكي"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xl",
								children: "💎"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => {
								onClose();
								setActiveModal("wallet");
							},
							className: "flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-500/20 border border-amber-400/50 text-amber-300 text-xs font-mono font-bold",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: currentUser.coins.toLocaleString() }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "🪙" })]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "px-3 py-2.5 bg-black/60 border-b border-amber-500/20 flex items-center gap-2 overflow-x-auto no-scrollbar",
					children: vipTiers.map((tier) => {
						const isSelected = selectedVipLevel === tier.level;
						const isUnlocked = currentUser.vipLevel >= tier.level;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => setSelectedVipLevel(tier.level),
							className: `px-3.5 py-1.5 rounded-full text-xs font-black whitespace-nowrap transition-all flex items-center gap-1 shrink-0 ${isSelected ? "bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 text-slate-950 shadow-[0_0_15px_rgba(251,191,36,0.6)] scale-105" : isUnlocked ? "bg-amber-500/20 text-amber-300 border border-amber-500/40" : "bg-white/5 text-stone-400 border border-white/10"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: tier.badgeIcon }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["VIP ", tier.level] })]
						}, tier.level);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex-1 overflow-y-auto p-4 space-y-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative rounded-3xl p-5 bg-gradient-to-br from-amber-900/40 via-[#1f150b] to-amber-950/60 border-2 border-amber-400/70 shadow-2xl overflow-hidden flex flex-col items-center text-center",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -top-12 inset-x-0 h-28 bg-amber-400/20 blur-2xl pointer-events-none" }),
								previewEntrance && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mb-3 w-full py-2 px-3 rounded-2xl bg-gradient-to-r from-amber-500 via-yellow-300 to-amber-600 text-slate-950 font-black text-xs flex items-center justify-center gap-2 animate-bounce shadow-lg",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xl",
										children: currentTier.entranceIcon
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
										"وصل الآن ",
										currentUser.displayName,
										" على متن ",
										currentTier.entranceName,
										"!"
									] })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative w-24 h-24 rounded-full p-1 bg-gradient-to-tr from-amber-500 via-yellow-200 to-amber-600 shadow-[0_0_30px_rgba(245,158,11,0.7)] flex items-center justify-center mb-3",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: currentUser.avatar,
											alt: currentUser.displayName,
											className: "w-full h-full rounded-full object-cover border-2 border-slate-950"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "absolute -top-3 text-2xl drop-shadow",
											children: "👑"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "absolute -bottom-2 px-3 py-0.5 rounded-full bg-gradient-to-r from-amber-400 to-yellow-300 text-slate-950 font-black text-xs border border-white shadow",
											children: ["VIP ", currentTier.level]
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-lg font-black text-amber-300 mt-1",
									children: currentTier.nameAr
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-xs text-stone-300 mt-0.5",
									children: ["الدخولية الملكية: ", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-yellow-300 font-bold",
										children: [
											currentTier.entranceName,
											" ",
											currentTier.entranceIcon
										]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									onClick: () => setPreviewEntrance(!previewEntrance),
									className: "mt-3 px-4 py-1.5 rounded-full bg-white/10 hover:bg-white/20 border border-amber-300/40 text-amber-200 text-xs font-bold flex items-center gap-1.5 transition-colors",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "w-3.5 h-3.5 text-amber-300" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "معاينة دخولية الغرفة الحية" })]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h4", {
								className: "text-xs font-black text-amber-300 text-right px-1",
								children: [
									"المزايا الحصرية لعضوية VIP ",
									currentTier.level,
									" (",
									privilegedGrid.length,
									" امتيازات)"
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid grid-cols-2 gap-2.5",
								children: privilegedGrid.map((perk, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-2xl p-3 bg-white/5 border border-amber-500/25 flex items-start gap-2.5 text-right",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-xs font-black text-amber-200",
											children: perk.title
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-[10px] text-stone-400 leading-snug mt-0.5",
											children: perk.desc
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "w-9 h-9 rounded-xl bg-amber-500/15 border border-amber-400/30 flex items-center justify-center text-lg shrink-0",
										children: perk.icon
									})]
								}, idx))
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid grid-cols-3 gap-2 pt-1",
							children: [
								{
									m: 1,
									label: "شهر واحد",
									tag: "عادي"
								},
								{
									m: 3,
									label: "3 أشهر",
									tag: "خصم 10%"
								},
								{
									m: 12,
									label: "سنة كاملة",
									tag: "خصم 25%"
								}
							].map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => setDurationMonths(d.m),
								className: `rounded-2xl p-2.5 border text-center transition-all ${durationMonths === d.m ? "bg-amber-500/20 border-amber-400 text-white shadow-md" : "bg-white/5 border-white/10 text-stone-400"}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[9px] font-black px-1.5 py-0.2 rounded bg-amber-400 text-slate-950",
									children: d.tag
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xs font-black mt-1",
									children: d.label
								})]
							}, d.m))
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-3.5 bg-black/90 border-t border-amber-500/30 flex items-center justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: handleSubscribe,
						className: "flex-1 py-3 rounded-full bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 text-slate-950 font-black text-sm shadow-[0_0_20px_rgba(251,191,36,0.5)] hover:opacity-95 active:scale-95 transition-all",
						children: [
							"تفعيل وترقية VIP ",
							currentTier.level,
							" فورا"
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-right shrink-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[10px] text-stone-400",
							children: "التكلفة الإجمالية"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-sm font-black text-amber-400 font-mono",
							children: [totalCost.toLocaleString(), " 🪙"]
						})]
					})]
				})
			]
		})
	});
};
export { VipCenterModal };
