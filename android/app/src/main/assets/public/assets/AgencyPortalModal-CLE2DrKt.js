import { n as __toESM } from "./rolldown-runtime-CO0Nlsmt.js";
import { It as require_react, _ as Target, c as Users, d as UserPlus, kt as Briefcase, t as X } from "./icons-CSx0WKXF.js";
import { o as useApp } from "./index-tXJX2Qqq.js";
import { t as require_jsx_runtime } from "./react-vendor-BIdqWr74.js";
// src/components/AgencyPortalModal.tsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
var AgencyPortalModal = ({ isOpen, onClose }) => {
	const { agencies, currentUser, users } = useApp();
	const [activeTab, setActiveTab] = (0, import_react.useState)("my_agency");
	const [selectedAgency, setSelectedAgency] = (0, import_react.useState)(agencies[0]);
	const [appName, setAppName] = (0, import_react.useState)("");
	const [appPhone, setAppPhone] = (0, import_react.useState)("");
	const [appExp, setAppExp] = (0, import_react.useState)("");
	const [submitted, setSubmitted] = (0, import_react.useState)(false);
	const [agencyNotice, setAgencyNotice] = (0, import_react.useState)(null);
	if (!isOpen) return null;
	const showNotice = (msg) => {
		setAgencyNotice(msg);
		setTimeout(() => setAgencyNotice(null), 3500);
	};
	const handleApply = (e) => {
		e.preventDefault();
		setSubmitted(true);
		setTimeout(() => {
			setSubmitted(false);
			setAppName("");
			setAppPhone("");
			setAppExp("");
			showNotice("تم إرسال طلب تأسيس الوكالة بنجاح إلى الإدارة العليا لمراجعته والاعتماد.");
		}, 600);
	};
	const agencyHosts = users.filter((u) => u.agencyId === selectedAgency.id);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-md animate-in fade-in duration-200",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-4 sm:p-5 border-b border-slate-800 bg-slate-950 flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "w-10 h-10 rounded-2xl bg-gradient-to-tr from-rose-500 to-amber-600 text-white flex items-center justify-center shadow-lg shadow-rose-500/20",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Briefcase, { className: "w-6 h-6" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-base sm:text-lg font-black text-slate-100",
							children: "نظام إدارة الوكالات واستقطاب المضيفين"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-slate-400",
							children: "بناء فرق البث الصوتي، نسب العمولات، ومتابعة الأرباح الشهرية"
						})] })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: onClose,
						className: "p-1.5 rounded-full bg-slate-800 text-slate-400 hover:text-white",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "w-5 h-5" })
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 px-4 py-2.5 bg-slate-950/80 border-b border-slate-800",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setActiveTab("my_agency"),
							className: `px-4 py-2 rounded-xl text-xs font-bold transition-all ${activeTab === "my_agency" ? "bg-rose-500 text-white shadow-md shadow-rose-500/20" : "bg-slate-850 text-slate-400 hover:text-slate-200"}`,
							children: "وكالتي المعتمدة (لوحة التحكم)"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setActiveTab("explore"),
							className: `px-4 py-2 rounded-xl text-xs font-bold transition-all ${activeTab === "explore" ? "bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20" : "bg-slate-850 text-slate-400 hover:text-slate-200"}`,
							children: "دليل الوكالات الرسمية"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setActiveTab("apply"),
							className: `px-4 py-2 rounded-xl text-xs font-bold transition-all ${activeTab === "apply" ? "bg-teal-500 text-slate-950 shadow-md shadow-teal-500/20" : "bg-slate-850 text-slate-400 hover:text-slate-200"}`,
							children: "التقديم لإنشاء وكالة جديدة"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-4 sm:p-6 overflow-y-auto space-y-6 flex-1",
					children: [
						agencyNotice && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "px-4 py-2.5 rounded-2xl bg-emerald-500/15 border border-emerald-400/40 text-emerald-200 text-xs font-bold text-right",
							children: agencyNotice
						}),
						activeTab === "my_agency" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "p-5 rounded-3xl bg-slate-950/80 border border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "w-16 h-16 rounded-2xl bg-amber-500/20 border-2 border-amber-500 flex items-center justify-center text-3xl shrink-0",
											children: selectedAgency.logo
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "text-base font-black text-slate-100",
												children: selectedAgency.name
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-bold",
												children: selectedAgency.agencyNo
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "text-xs text-slate-400 mt-1",
											children: ["المالك المؤسس: ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
												className: "text-slate-200",
												children: selectedAgency.ownerName
											})]
										})] })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid grid-cols-2 sm:grid-cols-4 gap-3",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "p-3 rounded-2xl bg-slate-900 border border-slate-800 text-center",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-[10px] text-slate-400",
													children: "عدد المضيفين"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "text-base font-bold text-slate-100 font-mono mt-0.5",
													children: selectedAgency.hostCount
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "p-3 rounded-2xl bg-slate-900 border border-slate-800 text-center",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-[10px] text-slate-400",
													children: "المتصلون الآن"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "text-base font-bold text-emerald-400 font-mono mt-0.5",
													children: selectedAgency.activeHostsCount
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "p-3 rounded-2xl bg-slate-900 border border-slate-800 text-center",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-[10px] text-slate-400",
													children: "إجمالي الألماس"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "text-base font-bold text-cyan-400 font-mono mt-0.5",
													children: [(selectedAgency.totalDiamondsEarned / 1e6).toFixed(1), "M"]
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "p-3 rounded-2xl bg-slate-900 border border-slate-800 text-center",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-[10px] text-slate-400",
													children: "نسبة العمولة"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "text-base font-bold text-amber-400 font-mono mt-0.5",
													children: [selectedAgency.commissionRate, "%"]
												})]
											})
										]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "p-5 rounded-3xl bg-slate-950/60 border border-slate-800 space-y-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between text-xs",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "font-bold text-slate-200 flex items-center gap-1.5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Target, { className: "w-4 h-4 text-amber-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "الهدف الشهري للوكالة (8,000,000 ألماس):" })]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "font-mono font-bold text-amber-400",
												children: [(selectedAgency.totalDiamondsEarned / selectedAgency.targetDiamondsMonthly * 100).toFixed(1), "%"]
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "w-full h-3 rounded-full bg-slate-800 overflow-hidden",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "h-full bg-gradient-to-r from-amber-500 to-rose-500 rounded-full transition-all",
												style: { width: `${Math.min(100, selectedAgency.totalDiamondsEarned / selectedAgency.targetDiamondsMonthly * 100)}%` }
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "text-[11px] text-slate-400 flex items-center justify-between pt-1",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
												"تم تحقيق: ",
												selectedAgency.totalDiamondsEarned.toLocaleString(),
												" ألماس"
											] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
												"المتبقي للبونص: ",
												(selectedAgency.targetDiamondsMonthly - selectedAgency.totalDiamondsEarned).toLocaleString(),
												" ألماس"
											] })]
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h4", {
									className: "font-bold text-sm text-slate-200 mb-3 flex items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "w-4 h-4 text-rose-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "قائمة مضيفي الوكالة المعتمدين:" })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs text-slate-400 font-mono",
										children: "ساعات البث والأرباح"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "space-y-2.5",
									children: agencyHosts.map((host, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800 flex items-center justify-between text-xs",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
												src: host.avatar,
												alt: host.displayName,
												className: "w-10 h-10 rounded-full object-cover ring-2 ring-amber-400"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "font-bold text-slate-200 flex items-center gap-1.5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: host.displayName }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "px-1.5 py-0.2 rounded bg-amber-500/20 text-amber-300 font-mono text-[9px]",
													children: ["VIP ", host.vipLevel]
												})]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "text-[11px] text-slate-400 font-mono mt-0.5",
												children: [
													"ID: ",
													host.userCode,
													" · المستوى ",
													host.level
												]
											})] })]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-4 text-right",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "font-mono font-bold text-cyan-400 text-sm",
												children: host.diamonds.toLocaleString()
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[10px] text-slate-400",
												children: "ألماس مكتسب"
											})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "px-2.5 py-1 rounded-xl bg-emerald-500/10 text-emerald-400 font-bold text-[10px]",
												children: "نشط في البث"
											})]
										})]
									}, host.id))
								})] })
							]
						}),
						activeTab === "explore" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
							children: agencies.map((agency) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-5 rounded-3xl bg-slate-950/80 border border-slate-800 flex flex-col justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "w-12 h-12 rounded-2xl bg-amber-500/15 border border-amber-500/40 text-2xl flex items-center justify-center",
										children: agency.logo
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
										className: "font-bold text-sm text-slate-100",
										children: agency.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[10px] font-mono text-amber-400",
										children: agency.agencyNo
									})] })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid grid-cols-3 gap-2 my-4 text-center",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "p-2 rounded-xl bg-slate-900 border border-slate-800",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[9px] text-slate-400",
												children: "المضيفين"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "text-xs font-bold text-slate-200 font-mono",
												children: agency.hostCount
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "p-2 rounded-xl bg-slate-900 border border-slate-800",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[9px] text-slate-400",
												children: "العمولة"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "text-xs font-bold text-amber-400 font-mono",
												children: [agency.commissionRate, "%"]
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "p-2 rounded-xl bg-slate-900 border border-slate-800",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[9px] text-slate-400",
												children: "أرباح الوكالة"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "text-xs font-bold text-emerald-400 font-mono",
												children: ["$", agency.netProfitsUSD.toLocaleString()]
											})]
										})
									]
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									onClick: () => {
										showNotice(`تم إرسال طلب انضمامك إلى ${agency.name} بنجاح.`);
									},
									className: "w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold transition-colors flex items-center justify-center gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserPlus, { className: "w-3.5 h-3.5 text-amber-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "طلب الانضمام كمضيف" })]
								})]
							}, agency.id))
						}),
						activeTab === "apply" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "max-w-md mx-auto space-y-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "p-4 rounded-2xl bg-teal-500/10 border border-teal-500/20 text-xs text-teal-300",
								children: "شروط فتح وكالة: امتلاك خبرة سابقة في استقطاب مذيعين ومضيفين، مع التزام بتحقيق 2,000,000 ألماس شهرياً كحد أدنى."
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
								onSubmit: handleApply,
								className: "space-y-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "block text-xs font-medium text-slate-400 mb-1.5",
										children: "الاسم المقترح للوكالة:"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "text",
										required: true,
										value: appName,
										onChange: (e) => setAppName(e.target.value),
										placeholder: "مثال: وكالة صوت العرب الرسمية",
										className: "w-full bg-slate-950 border border-slate-800 rounded-2xl px-4 py-2.5 text-xs text-slate-100 focus:outline-none focus:border-teal-500"
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "block text-xs font-medium text-slate-400 mb-1.5",
										children: "رقم الهاتف / واتساب للتواصل:"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "text",
										required: true,
										value: appPhone,
										onChange: (e) => setAppPhone(e.target.value),
										placeholder: "+966 50 000 0000",
										className: "w-full bg-slate-950 border border-slate-800 rounded-2xl px-4 py-2.5 text-xs text-slate-100 font-mono focus:outline-none focus:border-teal-500"
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "block text-xs font-medium text-slate-400 mb-1.5",
										children: "نبذة عن خطتك وعدد المضيفين المتوقع:"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
										rows: 3,
										required: true,
										value: appExp,
										onChange: (e) => setAppExp(e.target.value),
										placeholder: "لدي فريق مكون من 15 مضيفاً جاهزاً للبدء...",
										className: "w-full bg-slate-950 border border-slate-800 rounded-2xl p-3 text-xs text-slate-100 focus:outline-none focus:border-teal-500"
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "submit",
										disabled: submitted,
										className: "w-full py-3 rounded-2xl bg-gradient-to-r from-teal-500 to-cyan-600 text-slate-950 font-black text-sm shadow-xl transition-all",
										children: submitted ? "جارٍ الإرسال..." : "إرسال طلب التأسيس للمراجعة"
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
export { AgencyPortalModal };
