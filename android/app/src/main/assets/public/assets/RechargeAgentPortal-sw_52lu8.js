import { n as __toESM } from "./rolldown-runtime-CO0Nlsmt.js";
import { A as Search, Ct as CircleAlert, D as ShieldAlert, It as require_react, Pt as ArrowRight, _t as CreditCard, f as UserCheck, h as TrendingUp, nt as History, xt as CircleCheck, yt as Coins } from "./icons-CSx0WKXF.js";
import { o as useApp } from "./index-tXJX2Qqq.js";
import { t as require_jsx_runtime } from "./react-vendor-BIdqWr74.js";
// src/components/RechargeAgentPortal.tsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
var RechargeAgentPortal = () => {
	const { agents, users, agentRechargeUser, setCurrentView, transactions } = useApp();
	const [selectedAgentId, setSelectedAgentId] = (0, import_react.useState)(agents[0]?.id || "agent_1");
	const [targetUserCode, setTargetUserCode] = (0, import_react.useState)("");
	const [coinAmount, setCoinAmount] = (0, import_react.useState)(1e5);
	const [pinCode, setPinCode] = (0, import_react.useState)("");
	const [showConfirmModal, setShowConfirmModal] = (0, import_react.useState)(false);
	const [statusFeedback, setStatusFeedback] = (0, import_react.useState)(null);
	const currentAgent = agents.find((a) => a.id === selectedAgentId) || agents[0];
	const foundUser = users.find((u) => u.userCode.trim() === targetUserCode.trim());
	const estimatedCommission = Math.round(coinAmount * (currentAgent.commissionRate / 100));
	const handleStartRecharge = (e) => {
		e.preventDefault();
		setStatusFeedback(null);
		if (!foundUser) {
			setStatusFeedback({
				type: "error",
				message: "يرجى إدخال رقم ID مستخدم صالح أولاً"
			});
			return;
		}
		if (coinAmount <= 0) {
			setStatusFeedback({
				type: "error",
				message: "يرجى تحديد كمية عملات صالحة"
			});
			return;
		}
		if (currentAgent.balanceCoins < coinAmount) {
			setStatusFeedback({
				type: "error",
				message: "رصيد الوكيل غير كافٍ لتنفيذ هذه العملية"
			});
			return;
		}
		setShowConfirmModal(true);
	};
	const handleExecuteRecharge = () => {
		if (pinCode !== "1234" && pinCode !== "") {}
		const res = agentRechargeUser(currentAgent.id, targetUserCode, coinAmount);
		setShowConfirmModal(false);
		setPinCode("");
		if (res.success) {
			setStatusFeedback({
				type: "success",
				message: res.message
			});
			setTargetUserCode("");
		} else setStatusFeedback({
			type: "error",
			message: res.message
		});
	};
	const agentTransactions = transactions.filter((t) => t.type === "agent_recharge_payout" || t.referenceId === currentAgent.agentCode);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "max-w-6xl mx-auto px-4 sm:px-6 py-6 space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 rounded-3xl bg-gradient-to-r from-teal-900 via-slate-900 to-slate-950 border border-teal-500/30 shadow-xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "w-12 h-12 rounded-2xl bg-teal-500 text-slate-950 flex items-center justify-center font-black text-2xl shadow-lg",
						children: "⭐"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "text-lg font-black text-slate-100",
							children: currentAgent.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[10px] font-mono px-2 py-0.5 rounded bg-teal-500/20 text-teal-300 font-bold border border-teal-500/30",
							children: currentAgent.agentCode
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-slate-400",
						children: "بوابة وكلاء الشحن المعتمدين الرسمية (Fintech Terminal)"
					})] })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs text-slate-400",
							children: "تبديل حساب الوكيل:"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
							value: selectedAgentId,
							onChange: (e) => setSelectedAgentId(e.target.value),
							className: "bg-slate-900 border border-slate-800 text-slate-200 text-xs rounded-xl px-3 py-1.5 focus:outline-none focus:border-teal-500",
							children: agents.map((ag) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", {
								value: ag.id,
								children: [
									ag.name,
									" (",
									ag.agentCode,
									")"
								]
							}, ag.id))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setCurrentView("user_app"),
							className: "px-3.5 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold transition-colors",
							children: "العودة للتطبيق"
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-4 rounded-3xl bg-slate-900 border border-teal-500/30 shadow-lg",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-xs text-teal-400 font-medium flex items-center gap-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Coins, { className: "w-4 h-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "رصيد الوكيل المتاح للشحن" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-2xl font-black font-mono text-slate-100 mt-1",
								children: currentAgent.balanceCoins.toLocaleString()
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[10px] text-slate-500",
								children: "عملة ذهبية قابلة للتوزيع"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-4 rounded-3xl bg-slate-900 border border-slate-800 shadow-lg",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs text-slate-400 font-medium",
								children: "إجمالي الشحنات المنفذة"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-2xl font-black font-mono text-amber-300 mt-1",
								children: currentAgent.totalRechargedCoins.toLocaleString()
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[10px] text-slate-500",
								children: "عملة للمستخدمين"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-4 rounded-3xl bg-slate-900 border border-slate-800 shadow-lg",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-xs text-emerald-400 font-medium flex items-center gap-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendingUp, { className: "w-3.5 h-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "أرباح العمولات المكتسبة" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-2xl font-black font-mono text-emerald-300 mt-1",
								children: ["+", currentAgent.commissionEarnedCoins.toLocaleString()]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-[10px] text-emerald-500 font-bold",
								children: [
									"نسبة العمولة: ",
									currentAgent.commissionRate,
									"%"
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-4 rounded-3xl bg-slate-900 border border-slate-800 shadow-lg",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs text-slate-400 font-medium",
								children: "عدد العمليات الناجحة"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-2xl font-black font-mono text-cyan-300 mt-1",
								children: currentAgent.totalOperations.toLocaleString()
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[10px] text-slate-500",
								children: "عملية شحن معتمدة"
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 lg:grid-cols-12 gap-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-7 bg-slate-900 border border-slate-800 rounded-3xl p-5 sm:p-6 shadow-xl space-y-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between border-b border-slate-800 pb-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
								className: "font-bold text-base text-slate-100 flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CreditCard, { className: "w-5 h-5 text-teal-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "إرسال شحنة رصيد إلى مستخدم" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs text-slate-400",
								children: "تحقق فوري من بيانات المستلم"
							})]
						}),
						statusFeedback && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: `p-4 rounded-2xl flex items-center gap-2.5 text-xs font-bold ${statusFeedback.type === "success" ? "bg-emerald-500/15 border border-emerald-500 text-emerald-300" : "bg-rose-500/15 border border-rose-500 text-rose-300"}`,
							children: [statusFeedback.type === "success" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "w-4 h-4 shrink-0" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "w-4 h-4 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: statusFeedback.message })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							onSubmit: handleStartRecharge,
							className: "space-y-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "block text-xs font-semibold text-slate-300 mb-1.5",
									children: "رقم ID المستخدم (اكتب رقم المعرّف للتحقق التلقائي):"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "text",
										required: true,
										value: targetUserCode,
										onChange: (e) => setTargetUserCode(e.target.value),
										placeholder: "مثال: 883921 أو 742110 أو 551982",
										className: "w-full bg-slate-950 border border-slate-800 rounded-2xl px-4 py-3 text-sm text-slate-100 font-mono focus:outline-none focus:border-teal-500"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "absolute top-1/2 -translate-y-1/2 ltr:right-3 rtl:left-3 flex items-center gap-2",
										children: foundUser ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "flex items-center gap-1 text-[11px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "w-3.5 h-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "تم التحقق" })]
										}) : targetUserCode.trim().length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[11px] text-rose-400",
											children: "غير موجود"
										}) : null
									})]
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "block text-xs font-semibold text-slate-300 mb-1.5",
										children: "تحديد كمية العملات:"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid grid-cols-2 sm:grid-cols-4 gap-2 mb-2",
										children: [
											5e4,
											1e5,
											25e4,
											5e5
										].map((amt) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											onClick: () => setCoinAmount(amt),
											className: `py-2 px-3 rounded-xl border text-xs font-mono font-bold transition-all ${coinAmount === amt ? "bg-teal-500 text-slate-950 border-teal-400 shadow-md" : "bg-slate-950 border-slate-800 text-slate-300"}`,
											children: amt.toLocaleString()
										}, amt))
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "number",
										min: "1000",
										step: "1000",
										max: currentAgent.balanceCoins,
										value: coinAmount,
										onChange: (e) => setCoinAmount(Number(e.target.value)),
										className: "w-full bg-slate-950 border border-slate-800 rounded-2xl px-4 py-2.5 text-sm text-amber-300 font-mono font-bold focus:outline-none focus:border-teal-500"
									})
								] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-1.5 text-xs",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between text-slate-400",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "المبلغ المخصوم من رصيد الوكيل:" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "font-mono text-rose-400 font-bold",
												children: [
													"-",
													coinAmount.toLocaleString(),
													" عملة"
												]
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between text-slate-400",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
												"نسبة عمولة الوكيل المعتمدة (",
												currentAgent.commissionRate,
												"%):"
											] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "font-mono text-emerald-400 font-bold",
												children: [
													"+",
													estimatedCommission.toLocaleString(),
													" عملة"
												]
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "pt-2 border-t border-slate-800 flex items-center justify-between font-bold text-slate-100",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "الرصيد المتبقي للوكيل بعد التنفيذ:" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "font-mono text-teal-300",
												children: [(currentAgent.balanceCoins - coinAmount).toLocaleString(), " عملة"]
											})]
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "submit",
									disabled: !foundUser || coinAmount <= 0,
									className: "w-full py-3.5 rounded-2xl bg-gradient-to-r from-teal-500 to-cyan-600 text-slate-950 font-black text-sm shadow-xl shadow-teal-500/20 hover:opacity-95 active:scale-95 disabled:opacity-40 transition-all flex items-center justify-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "مراجعة بيانات الشحن قبل التأكيد" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "w-4 h-4 rtl:rotate-180" })]
								})
							]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-5 bg-slate-900 border border-slate-800 rounded-3xl p-5 sm:p-6 shadow-xl flex flex-col justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
						className: "font-bold text-sm text-slate-300 mb-4 pb-2 border-b border-slate-800 flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserCheck, { className: "w-4 h-4 text-teal-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "بطاقة التحقق من هوية المستلم" })]
					}), foundUser ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-5 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col items-center text-center space-y-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: foundUser.avatar,
									alt: foundUser.displayName,
									className: "w-20 h-20 rounded-full object-cover ring-4 ring-amber-400"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "absolute -bottom-1 -right-1 px-2 py-0.5 rounded-full bg-amber-500 text-slate-950 font-black text-[10px]",
									children: ["VIP ", foundUser.vipLevel]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
									className: "font-black text-base text-slate-100",
									children: foundUser.displayName
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-xs text-amber-400 font-mono mt-0.5",
									children: ["ID: ", foundUser.userCode]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-[11px] text-slate-400 mt-1",
									children: [
										foundUser.country,
										" ",
										foundUser.countryFlag
									]
								})
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "w-full pt-3 border-t border-slate-800 grid grid-cols-2 gap-2 text-center text-xs",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "p-2 rounded-xl bg-slate-900",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[10px] text-slate-400",
										children: "الرصيد الحالي"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-mono font-bold text-amber-300 mt-0.5",
										children: foundUser.coins.toLocaleString()
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "p-2 rounded-xl bg-slate-900",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[10px] text-slate-400",
										children: "المستوى الحالي"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "font-mono font-bold text-slate-200 mt-0.5",
										children: ["Lv.", foundUser.level]
									})]
								})]
							})
						]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-10 rounded-2xl bg-slate-950/60 border border-dashed border-slate-800 text-center text-xs text-slate-500 space-y-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "w-8 h-8 text-slate-700 mx-auto" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "اكتب رقم ID المستخدم في الخانة المقابلة لمطابقة صورته واسمه ومنع الأخطاء." })]
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 p-3 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-300 flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldAlert, { className: "w-4 h-4 text-amber-400 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "جميع عمليات الشحن مشفرة ومسجلة في السجل المالي غير القابل للتعديل." })]
					})]
				})]
			}),
			showConfirmModal && foundUser && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "w-full max-w-md bg-slate-900 border border-teal-500/50 rounded-3xl p-6 shadow-2xl space-y-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-center",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "w-14 h-14 rounded-2xl bg-teal-500/20 border border-teal-500 text-teal-400 flex items-center justify-center mx-auto mb-3 text-2xl",
									children: "⚡"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-black text-lg text-slate-100",
									children: "تأكيد تنفيذ عملية الشحن"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-slate-400 mt-1",
									children: "تأكد من مطابقة بيانات الحساب قبل خصم الرصيد النهائي"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2 text-xs",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-slate-400",
										children: "اسم المستلم:"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-bold text-slate-200",
										children: foundUser.displayName
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-slate-400",
										children: "معرف ID:"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-mono font-bold text-amber-400",
										children: foundUser.userCode
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between text-base font-bold text-teal-300 pt-2 border-t border-slate-800",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "كمية العملات:" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "font-mono font-black",
										children: [coinAmount.toLocaleString(), " عملة"]
									})]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 pt-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: handleExecuteRecharge,
								className: "flex-1 py-3 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-black text-xs shadow-lg shadow-teal-500/20",
								children: "تأكيد وتحويل الرصيد فوراً"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setShowConfirmModal(false),
								className: "py-3 px-4 rounded-xl bg-slate-800 text-slate-400 hover:text-white text-xs font-semibold",
								children: "إلغاء"
							})]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "bg-slate-900 border border-slate-800 rounded-3xl p-5 sm:p-6 shadow-xl space-y-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
					className: "font-bold text-sm text-slate-200 flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(History, { className: "w-4 h-4 text-teal-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "سجل شحنات الوكيل الأخيرة:" })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-2",
					children: agentTransactions.slice(0, 6).map((tx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-3 rounded-2xl bg-slate-950/80 border border-slate-800/80 flex items-center justify-between text-xs",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-bold text-slate-200",
							children: tx.details
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[11px] text-slate-500 font-mono mt-0.5",
							children: tx.timestamp
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "font-mono font-bold text-rose-400 text-sm",
							children: [tx.coinsDelta.toLocaleString(), " عملة"]
						})]
					}, tx.id))
				})]
			})
		]
	});
};
export { RechargeAgentPortal };
