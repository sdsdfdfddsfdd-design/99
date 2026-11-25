import { n as __toESM } from "./rolldown-runtime-CO0Nlsmt.js";
import { Et as Check, It as require_react, T as Shield, i as Wallet, t as X, vt as Copy, y as Sparkles } from "./icons-CSx0WKXF.js";
import { O as RECHARGE_PACKAGES, o as useApp } from "./index-tXJX2Qqq.js";
import { t as require_jsx_runtime } from "./react-vendor-BIdqWr74.js";
// src/components/WalletModal.tsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
var WalletModal = ({ isOpen, onClose }) => {
	const { currentUser, transactions, rechargeCoins, convertDiamondsToCoins, requestWithdrawal, setCurrentView } = useApp();
	const [activeTab, setActiveTab] = (0, import_react.useState)("recharge");
	const [selectedPackage, setSelectedPackage] = (0, import_react.useState)(RECHARGE_PACKAGES[2]);
	const [customCoinsAmount, setCustomCoinsAmount] = (0, import_react.useState)("");
	const [selectedPaymentMethod, setSelectedPaymentMethod] = (0, import_react.useState)("Apple Pay / Mada");
	const [promoCode, setPromoCode] = (0, import_react.useState)("");
	const [copiedId, setCopiedId] = (0, import_react.useState)(false);
	const [statusBanner, setStatusBanner] = (0, import_react.useState)(null);
	const [exchangeAmount, setExchangeAmount] = (0, import_react.useState)(1e3);
	const [withdrawAmount, setWithdrawAmount] = (0, import_react.useState)(5e4);
	const [bankInfo, setBankInfo] = (0, import_react.useState)("");
	if (!isOpen) return null;
	const showToast = (type, text) => {
		setStatusBanner({
			type,
			text
		});
		setTimeout(() => {
			setStatusBanner(null);
		}, 4500);
	};
	const handleCopyUserCode = () => {
		navigator.clipboard?.writeText(currentUser.userCode);
		setCopiedId(true);
		setTimeout(() => setCopiedId(false), 2e3);
	};
	const handleRecharge = () => {
		const customNum = Number(customCoinsAmount);
		const totalToCredit = (customNum > 0 ? customNum : selectedPackage.coins) + (customNum > 0 ? Math.round(customNum * .15) : selectedPackage.bonus);
		rechargeCoins(totalToCredit, selectedPaymentMethod);
		showToast("success", `تم شحن ${totalToCredit.toLocaleString()} كوينز بنجاح عبر ${selectedPaymentMethod}`);
		setCustomCoinsAmount("");
	};
	const handleRedeemCode = (e) => {
		e.preventDefault();
		if (!promoCode.trim()) return;
		const reward = 25e3;
		rechargeCoins(reward, `كود شحن (${promoCode.trim().toUpperCase()})`);
		showToast("success", `تم تفعيل الكود بنجاح وإضافة ${reward.toLocaleString()} كوينز إلى محفظتك`);
		setPromoCode("");
	};
	const handleExchange = (e) => {
		e.preventDefault();
		if (exchangeAmount <= 0 || currentUser.diamonds < exchangeAmount) {
			showToast("error", "رصيد الألماس غير كافٍ لإتمام التحويل");
			return;
		}
		if (convertDiamondsToCoins(exchangeAmount)) showToast("success", `تم تحويل ${exchangeAmount.toLocaleString()} ألماسة إلى ${Math.round(exchangeAmount * 2.1).toLocaleString()} كوينز فوراً`);
	};
	const handleWithdrawal = (e) => {
		e.preventDefault();
		if (withdrawAmount <= 0 || !bankInfo.trim()) {
			showToast("error", "يرجى إدخال بيانات الحساب البنكي أو رقم المحفظة الإلكترونية");
			return;
		}
		if (currentUser.diamonds < withdrawAmount) {
			showToast("error", "رصيد الألماس أقل من المبلغ المطلوب سحبه");
			return;
		}
		if (requestWithdrawal(withdrawAmount, bankInfo)) {
			showToast("success", `💵 تم إرسال طلب سحب $${Math.round(withdrawAmount / 200).toLocaleString()} USD بنجاح!`);
			setBankInfo("");
		}
	};
	const customNumVal = Number(customCoinsAmount);
	const effectiveCoins = customNumVal > 0 ? customNumVal + Math.round(customNumVal * .15) : selectedPackage.coins + selectedPackage.bonus;
	const effectivePriceUSD = customNumVal > 0 ? (customNumVal / 750).toFixed(2) : selectedPackage.priceUSD;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/80 backdrop-blur-md animate-in fade-in duration-200 font-tajawal",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-full max-w-md sm:max-w-2xl bg-[#110d1b] border-t-2 sm:border-2 border-amber-400/50 rounded-t-[32px] sm:rounded-3xl shadow-[0_0_50px_rgba(245,158,11,0.25)] overflow-hidden flex flex-col max-h-[94vh] text-white",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-4 bg-gradient-to-r from-[#1f1535] via-[#2a1b4e] to-[#1f1535] border-b border-white/10 flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: onClose,
						className: "w-8 h-8 rounded-full bg-white/10 text-stone-300 hover:text-white flex items-center justify-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "w-5 h-5" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-right",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								className: "text-base font-black text-amber-300 flex items-center justify-end gap-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "المحفظة الملكية والشحن الفوري" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wallet, { className: "w-4 h-4 text-amber-400" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-end gap-1.5 text-[11px] text-stone-300",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									onClick: handleCopyUserCode,
									className: "flex items-center gap-1 px-2 py-0.2 rounded-full bg-black/40 border border-white/10 text-amber-200 font-mono",
									children: [copiedId ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "w-3 h-3 text-emerald-400" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "w-3 h-3" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["ID:", currentUser.userCode] })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: currentUser.displayName })]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: currentUser.avatar,
							alt: currentUser.displayName,
							className: "w-10 h-10 rounded-full object-cover ring-2 ring-amber-400"
						})]
					})]
				}),
				statusBanner && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: `mx-4 mt-3 px-4 py-2.5 rounded-2xl text-xs font-black text-right flex items-center justify-between border animate-in zoom-in-95 ${statusBanner.type === "success" ? "bg-emerald-500/20 border-emerald-400 text-emerald-200" : "bg-rose-500/20 border-rose-400 text-rose-200"}`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setStatusBanner(null),
						className: "text-white/60 hover:text-white",
						children: "✕"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: statusBanner.text })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-3.5 grid grid-cols-2 gap-3 bg-[#161024] border-b border-white/10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						onClick: () => setActiveTab("recharge"),
						className: `relative overflow-hidden rounded-2xl p-3 bg-gradient-to-br from-amber-500/30 via-yellow-600/20 to-amber-950/60 border-2 cursor-pointer transition-all ${activeTab === "recharge" ? "border-amber-400 shadow-[0_0_20px_rgba(245,158,11,0.3)]" : "border-amber-400/30"}`,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-2xl",
									children: "🪙"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs font-black text-amber-200",
									children: "الكونزة (الكوينز)"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xl sm:text-2xl font-mono font-black text-white text-right mt-1",
								children: currentUser.coins.toLocaleString()
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-1.5 flex items-center justify-end",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "px-2.5 py-0.5 rounded-full bg-amber-400 text-slate-950 font-black text-[10px]",
									children: "شحن فوري +"
								})
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						onClick: () => setActiveTab("exchange"),
						className: `relative overflow-hidden rounded-2xl p-3 bg-gradient-to-br from-fuchsia-500/30 via-purple-600/20 to-indigo-950/60 border-2 cursor-pointer transition-all ${activeTab === "exchange" || activeTab === "withdraw" ? "border-fuchsia-400 shadow-[0_0_20px_rgba(217,70,239,0.3)]" : "border-fuchsia-400/30"}`,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-2xl",
									children: "💎"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs font-black text-fuchsia-200",
									children: "الماس (الأرباح)"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xl sm:text-2xl font-mono font-black text-white text-right mt-1",
								children: currentUser.diamonds.toLocaleString()
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-1.5 flex items-center justify-between text-[10px]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-fuchsia-300 font-mono font-bold",
									children: ["≈ $", (currentUser.diamonds / 200).toFixed(1)]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "px-2.5 py-0.5 rounded-full bg-fuchsia-400 text-slate-950 font-black",
									children: "تحويل / سحب"
								})]
							})
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex items-center justify-between gap-1.5 px-3 py-2 bg-[#0d0914] border-b border-white/10 overflow-x-auto no-scrollbar",
					children: [
						{
							id: "history",
							label: "السجل 📋"
						},
						{
							id: "withdraw",
							label: "سحب نقدي 💵"
						},
						{
							id: "exchange",
							label: "استبدال الماس 🔄"
						},
						{
							id: "recharge",
							label: "شراء كوينزات 🪙"
						}
					].map((tab) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setActiveTab(tab.id),
						className: `flex-1 py-2 px-2.5 rounded-xl text-xs font-black whitespace-nowrap transition-all ${activeTab === tab.id ? "bg-gradient-to-r from-amber-400 to-yellow-500 text-slate-950 shadow-md" : "bg-white/5 text-stone-300 hover:bg-white/10"}`,
						children: tab.label
					}, tab.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-4 overflow-y-auto flex-1 space-y-4",
					children: [
						activeTab === "recharge" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xs font-black text-amber-200 text-right mb-2",
									children: "1. اختر وسيلة الدفع المفضلة:"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid grid-cols-3 gap-2",
									children: [
										{
											id: "Apple Pay / Mada",
											label: "Apple Pay / مدى",
											icon: ""
										},
										{
											id: "Visa / MasterCard",
											label: "بطاقة بنكية Visa",
											icon: "💳"
										},
										{
											id: "Vodafone / STC Pay",
											label: "فودافون / STC Pay",
											icon: "📱"
										},
										{
											id: "USDT / Binance",
											label: "عملات رقمية USDT",
											icon: "🪙"
										},
										{
											id: "Google Play",
											label: "رصيد Google Play",
											icon: "▶️"
										},
										{
											id: "Official Agent",
											label: "وكيل شحن معتمد",
											icon: "⭐"
										}
									].map((method) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										onClick: () => {
											setSelectedPaymentMethod(method.id);
											if (method.id === "Official Agent") {
												onClose();
												setCurrentView("agent_portal");
											}
										},
										className: `p-2 rounded-2xl border text-center flex flex-col items-center justify-center gap-0.5 transition-all ${selectedPaymentMethod === method.id ? "bg-amber-500/20 border-amber-400 text-amber-200 scale-[1.02] shadow-md" : "bg-white/5 border-white/10 text-stone-300 hover:bg-white/10"}`,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-lg",
											children: method.icon
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[10px] font-black leading-tight",
											children: method.label
										})]
									}, method.id))
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between mb-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[10px] text-emerald-400 font-black",
										children: "⚡ تسليم فوري + نقاط VIP مجانية"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs font-black text-amber-200",
										children: "2. اختر باقة شحن الكوينزات:"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid grid-cols-2 sm:grid-cols-4 gap-2.5",
									children: RECHARGE_PACKAGES.map((pkg, idx) => {
										const isSelected = customNumVal === 0 && selectedPackage.coins === pkg.coins;
										return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											onClick: () => {
												setSelectedPackage(pkg);
												setCustomCoinsAmount("");
											},
											className: `relative p-3 rounded-2xl border text-center flex flex-col items-center justify-between transition-all ${isSelected ? "bg-gradient-to-b from-amber-500/25 to-amber-900/30 border-2 border-amber-400 scale-[1.02] shadow-lg" : "bg-white/5 border-white/10 hover:border-amber-400/40"}`,
											children: [
												pkg.popular && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "absolute -top-2 inset-x-0 mx-auto w-fit px-2 py-0.2 rounded-full bg-gradient-to-r from-rose-500 to-amber-500 text-white font-black text-[9px] shadow",
													children: "الأكثر مبيعاً 🔥"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center gap-1 mt-1",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-lg",
														children: "🪙"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-base font-mono font-black text-amber-300",
														children: pkg.coins.toLocaleString()
													})]
												}),
												pkg.bonus > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "text-[10px] font-black text-emerald-400 bg-emerald-500/10 px-2 py-0.2 rounded-full mt-1",
													children: [
														"+",
														pkg.bonus.toLocaleString(),
														" مجاناً"
													]
												}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-[10px] text-stone-400 mt-1",
													children: "باقة أساسية"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "w-full mt-2 pt-1.5 border-t border-white/10 font-mono font-black text-xs text-white",
													children: [
														"$",
														pkg.priceUSD,
														" USD"
													]
												})
											]
										}, idx);
									})
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid grid-cols-1 sm:grid-cols-2 gap-2.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "p-2.5 rounded-2xl bg-white/5 border border-white/10 text-right",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "block text-[10px] font-bold text-amber-200 mb-1",
											children: "أو أدخل كمية كوينز مخصصة (+15% بونص إضافي):"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "number",
											min: "100",
											step: "500",
											value: customCoinsAmount,
											onChange: (e) => setCustomCoinsAmount(e.target.value),
											placeholder: "مثال: 50000 كوينز...",
											className: "w-full bg-black/50 border border-amber-400/40 rounded-xl px-3 py-1.5 text-xs font-mono text-white text-right focus:outline-none focus:border-amber-400"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
										onSubmit: handleRedeemCode,
										className: "p-2.5 rounded-2xl bg-white/5 border border-white/10 text-right",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "block text-[10px] font-bold text-teal-300 mb-1",
											children: "لديك كود هدية أو قسيمة شحن؟ (جرب VIP2026):"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-1.5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "submit",
												className: "px-3 py-1.5 rounded-xl bg-teal-500 text-slate-950 font-black text-xs shrink-0",
												children: "تفعيل"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												type: "text",
												value: promoCode,
												onChange: (e) => setPromoCode(e.target.value),
												placeholder: "أدخل الكود هنا...",
												className: "w-full bg-black/50 border border-teal-400/40 rounded-xl px-3 py-1.5 text-xs text-white text-right focus:outline-none"
											})]
										})]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "p-3.5 rounded-2xl bg-gradient-to-r from-amber-950/90 via-stone-900 to-amber-950/90 border-2 border-amber-400/80 flex items-center justify-between gap-3 shadow-xl",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										onClick: handleRecharge,
										className: "px-5 py-3 rounded-xl bg-gradient-to-r from-amber-400 via-yellow-400 to-orange-500 text-slate-950 font-black text-xs sm:text-sm shadow-[0_0_20px_rgba(251,191,36,0.5)] active:scale-95 transition-transform shrink-0",
										children: [
											"شراء وتأكيد الشحن ($",
											effectivePriceUSD,
											")"
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "text-right",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-[10px] text-stone-300",
											children: "إجمالي ما ستحصل عليه فوراً:"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "text-base sm:text-lg font-mono font-black text-amber-300",
											children: [effectiveCoins.toLocaleString(), " 🪙"]
										})]
									})]
								})
							]
						}),
						activeTab === "exchange" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "p-3.5 rounded-2xl bg-fuchsia-500/15 border border-fuchsia-400/40 text-xs text-fuchsia-200 flex items-center justify-end gap-2 text-right",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "استبدل الألماس المكتسب من الهدايا بكوينزات ذهبية فوراً مع مكافأة إضافية +10% مجاناً!" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "w-5 h-5 text-fuchsia-400 shrink-0" })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid grid-cols-4 gap-2",
									children: [
										500,
										1e3,
										5e3,
										25e3
									].map((preset) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => setExchangeAmount(preset),
										className: `py-2 rounded-xl font-mono font-black text-xs border transition-all ${exchangeAmount === preset ? "bg-fuchsia-500 text-white border-white shadow" : "bg-white/5 text-fuchsia-200 border-white/10"}`,
										children: ["💎 ", preset.toLocaleString()]
									}, preset))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
									onSubmit: handleExchange,
									className: "space-y-3 text-right",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
											className: "block text-xs font-bold text-stone-300 mb-1",
											children: [
												"كمية الألماس المراد تحويلها (المتاح: ",
												currentUser.diamonds.toLocaleString(),
												" 💎):"
											]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "number",
											min: "100",
											value: exchangeAmount,
											onChange: (e) => setExchangeAmount(Number(e.target.value)),
											className: "w-full bg-black/50 border border-fuchsia-400/50 rounded-2xl px-4 py-2.5 text-white font-mono text-base text-right focus:outline-none"
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "p-3.5 rounded-2xl bg-black/40 border border-white/10 space-y-1.5 text-xs",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center justify-between text-stone-300",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
														className: "font-mono",
														children: [(exchangeAmount * 2).toLocaleString(), " 🪙"]
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "القيمة الأساسية (1 ألماس = 2 كوينز):" })]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center justify-between text-emerald-400 font-bold",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
														className: "font-mono",
														children: [
															"+",
															Math.round(exchangeAmount * .1).toLocaleString(),
															" 🪙"
														]
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "بونص المحفظة الملكية (+10%):" })]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "pt-2 border-t border-white/10 flex items-center justify-between text-sm font-black text-amber-300",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
														className: "font-mono text-base",
														children: [Math.round(exchangeAmount * 2.1).toLocaleString(), " 🪙"]
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "الإجمالي المضاف لرصيد الكوينز:" })]
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "submit",
											className: "w-full py-3 rounded-2xl bg-gradient-to-r from-fuchsia-500 via-purple-500 to-indigo-600 text-white font-black text-sm shadow-lg active:scale-95 transition-transform",
											children: "تحويل الألماس إلى كوينزات فوراً 🔄"
										})
									]
								})
							]
						}),
						activeTab === "withdraw" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-4 text-right",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-3.5 rounded-2xl bg-emerald-500/15 border border-emerald-400/40 text-xs text-emerald-200 flex items-center justify-end gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "سحب أرباح المضيفين والوكالات نقداً بالدولار عبر التحويل البنكي أو USDT أو المحافظ الإلكترونية." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shield, { className: "w-5 h-5 text-emerald-400 shrink-0" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
								onSubmit: handleWithdrawal,
								className: "space-y-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "block text-xs font-bold text-stone-300 mb-1",
											children: "كمية الألماس المراد سحبها نقداً:"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "number",
											min: "1000",
											step: "1000",
											value: withdrawAmount,
											onChange: (e) => setWithdrawAmount(Number(e.target.value)),
											className: "w-full bg-black/50 border border-emerald-400/50 rounded-2xl px-4 py-2.5 text-white font-mono text-base text-right focus:outline-none"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "text-xs font-mono font-black text-emerald-400 mt-1",
											children: [
												"المبلغ المستحق بالدولار: $",
												(withdrawAmount / 200).toFixed(2),
												" USD"
											]
										})
									] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "block text-xs font-bold text-stone-300 mb-1",
										children: "بيانات الاستلام (رقم IBAN البنكي / رقم فودافون كاش / عنوان محفظة USDT TRC20):"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
										rows: 2,
										value: bankInfo,
										onChange: (e) => setBankInfo(e.target.value),
										placeholder: "اكتب تفاصيل حسابك البنكي أو رقم المحفظة والاسم بالكامل...",
										className: "w-full bg-black/50 border border-white/15 rounded-2xl p-3 text-xs text-white text-right focus:outline-none focus:border-emerald-400"
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "submit",
										className: "w-full py-3 rounded-2xl bg-gradient-to-r from-emerald-400 to-teal-500 text-slate-950 font-black text-sm shadow-lg active:scale-95 transition-transform",
										children: "تأكيد وإرسال طلب السحب النقدي 💵"
									})
								]
							})]
						}),
						activeTab === "history" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "space-y-3",
							children: transactions.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-center py-8 text-stone-400 text-xs",
								children: "لا توجد عمليات مسجلة بعد"
							}) : transactions.slice(0, 35).map((tx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-3 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between gap-2 text-xs",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-right min-w-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "font-bold text-white flex items-center gap-1.5",
										children: [tx.type === "lucky_win" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "px-1.5 py-0.5 rounded bg-amber-400/20 text-amber-300 text-[9px] font-bold",
											children: "حظ"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "truncate",
											children: tx.details
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-[10px] text-stone-400 font-mono mt-0.5",
										children: tx.timestamp
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-left shrink-0",
									children: [tx.coinsDelta !== 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: `font-mono tabular-nums font-black ${tx.coinsDelta > 0 ? "text-emerald-400" : "text-rose-400"}`,
										children: [tx.coinsDelta > 0 ? `+${tx.coinsDelta.toLocaleString()}` : tx.coinsDelta.toLocaleString(), " 🪙"]
									}), tx.diamondsDelta !== 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: `font-mono tabular-nums font-black ${tx.diamondsDelta > 0 ? "text-fuchsia-400" : "text-purple-400"}`,
										children: [tx.diamondsDelta > 0 ? `+${tx.diamondsDelta.toLocaleString()}` : tx.diamondsDelta.toLocaleString(), " 💎"]
									})]
								})]
							}, tx.id))
						})
					]
				})
			]
		})
	});
};
export { WalletModal };
