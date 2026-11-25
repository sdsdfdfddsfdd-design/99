import { n as __toESM } from "./rolldown-runtime-CO0Nlsmt.js";
import { A as Search, At as Bell, It as require_react, U as MessageSquare, k as Send, lt as FileText, wt as ChevronRight, y as Sparkles } from "./icons-CSx0WKXF.js";
import { o as useApp } from "./index-tXJX2Qqq.js";
import { t as require_jsx_runtime } from "./react-vendor-BIdqWr74.js";
// src/components/ChatInboxScreen.tsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
var DM_STORAGE_KEY = "auravoice_dm_messages_v1";
var ChatInboxScreen = () => {
	const { users, currentUser, transactions, setViewingProfileUser, setActiveModal } = useApp();
	const [selectedUserId, setSelectedUserId] = (0, import_react.useState)("system");
	const [mobileShowDetail, setMobileShowDetail] = (0, import_react.useState)(false);
	const [activeSubMode, setActiveSubMode] = (0, import_react.useState)("chats");
	const [recordsFilter, setRecordsFilter] = (0, import_react.useState)("all");
	const [searchQuery, setSearchQuery] = (0, import_react.useState)("");
	const [replyInput, setReplyInput] = (0, import_react.useState)("");
	const [messagesByPeer, setMessagesByPeer] = (0, import_react.useState)(() => {
		try {
			const saved = localStorage.getItem(DM_STORAGE_KEY);
			if (saved) return JSON.parse(saved);
		} catch {}
		return {};
	});
	(0, import_react.useEffect)(() => {
		try {
			localStorage.setItem(DM_STORAGE_KEY, JSON.stringify(messagesByPeer));
		} catch {}
	}, [messagesByPeer]);
	const realPeers = users.filter((u) => u.id !== currentUser.id);
	const normalizedSearch = searchQuery.trim().toLowerCase();
	const filteredPeers = realPeers.filter((u) => !normalizedSearch || u.displayName.toLowerCase().includes(normalizedSearch) || u.userCode.includes(normalizedSearch));
	const mySystemAlerts = transactions.filter((tx) => tx.userId === currentUser.id);
	const filteredRecords = mySystemAlerts.filter((tx) => {
		if (recordsFilter === "all") return true;
		return tx.type === recordsFilter;
	});
	const selectedPeer = selectedUserId && selectedUserId !== "system" ? realPeers.find((u) => u.id === selectedUserId) || null : null;
	const activeConversationMessages = selectedUserId ? messagesByPeer[selectedUserId] || [] : [];
	const openThread = (id) => {
		setSelectedUserId(id);
		setMobileShowDetail(true);
	};
	const handleSendReply = (e) => {
		e.preventDefault();
		if (!replyInput.trim() || !selectedUserId || selectedUserId === "system") return;
		const newMsg = {
			id: `dm_${Date.now()}`,
			senderId: currentUser.id,
			senderName: currentUser.displayName,
			text: replyInput.trim(),
			time: (/* @__PURE__ */ new Date()).toLocaleTimeString("ar-EG", {
				hour: "2-digit",
				minute: "2-digit"
			}),
			isMe: true
		};
		setMessagesByPeer((prev) => ({
			...prev,
			[selectedUserId]: [...prev[selectedUserId] || [], newMsg]
		}));
		setReplyInput("");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh w-full max-w-6xl mx-auto bg-[#070a12] text-white pb-28 font-tajawal select-none",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "sticky top-0 z-30 bg-[#070a12]/90 backdrop-blur-xl border-b border-white/10 px-4 sm:px-6 py-3.5 space-y-3",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "text-base sm:text-lg font-black text-amber-300",
							children: "المحادثات والسجلات"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center p-1 rounded-xl bg-[#0e1320] border border-white/10 text-xs",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => setActiveSubMode("chats"),
								className: `px-3 py-1.5 rounded-lg font-bold flex items-center gap-1.5 transition-colors ${activeSubMode === "chats" ? "bg-amber-400 text-slate-950" : "text-slate-400 hover:text-white"}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageSquare, { className: "w-3.5 h-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
									"المحادثات (",
									realPeers.length + 1,
									")"
								] })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => setActiveSubMode("records"),
								className: `px-3 py-1.5 rounded-lg font-bold flex items-center gap-1.5 transition-colors ${activeSubMode === "records" ? "bg-amber-400 text-slate-950" : "text-slate-400 hover:text-white"}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "w-3.5 h-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
									"السجلات (",
									mySystemAlerts.length,
									")"
								] })]
							})]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative w-full sm:w-72",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "w-4 h-4 text-slate-400 absolute top-1/2 -translate-y-1/2 right-3" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "text",
							value: searchQuery,
							onChange: (e) => setSearchQuery(e.target.value),
							placeholder: "بحث بالاسم أو رقم ID...",
							className: "w-full h-9 bg-[#0e1320] border border-white/12 rounded-xl pr-9 pl-3 text-xs text-white placeholder:text-slate-400 focus:outline-none focus:border-amber-400"
						})]
					})]
				})
			}),
			activeSubMode === "records" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "p-4 sm:p-6 space-y-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center justify-between gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex items-center gap-1.5 bg-[#0e1320] p-1 rounded-xl border border-white/10 text-xs",
						children: [
							{
								id: "all",
								label: "الكل"
							},
							{
								id: "lucky_win",
								label: "هدايا الحظ 🍀"
							},
							{
								id: "recharge",
								label: "الشحن 🪙"
							},
							{
								id: "gift",
								label: "الهدايا 🎁"
							}
						].map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setRecordsFilter(f.id),
							className: `px-3 py-1.5 rounded-lg font-bold transition-colors ${recordsFilter === f.id ? "bg-amber-400 text-slate-950" : "text-slate-400 hover:text-white"}`,
							children: f.label
						}, f.id))
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-xs text-slate-400 font-mono tabular-nums",
						children: ["إجمالي السجلات: ", filteredRecords.length]
					})]
				}), filteredRecords.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "rounded-3xl bg-[#0e1320] border border-white/10 p-12 text-center text-xs text-slate-400",
					children: "لا توجد سجلات مطابقة حالياً."
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-1 md:grid-cols-2 gap-3",
					children: filteredRecords.slice(0, 40).map((tx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-3.5 rounded-2xl bg-[#0e1320] border border-white/10 flex items-center justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-right min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-xs font-bold text-white flex items-center gap-1.5",
								children: [tx.type === "lucky_win" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "w-3.5 h-3.5 text-amber-400 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "truncate",
									children: tx.details
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-[11px] text-slate-400 font-mono mt-0.5",
								children: tx.timestamp
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-left shrink-0 font-mono tabular-nums font-black text-xs",
							children: [tx.coinsDelta !== 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: tx.coinsDelta > 0 ? "text-emerald-400" : "text-rose-400",
								children: [
									tx.coinsDelta > 0 ? `+${tx.coinsDelta.toLocaleString("en-US")}` : tx.coinsDelta.toLocaleString("en-US"),
									" ",
									"🪙"
								]
							}), tx.diamondsDelta !== 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-fuchsia-400",
								children: [
									tx.diamondsDelta > 0 ? `+${tx.diamondsDelta.toLocaleString("en-US")}` : tx.diamondsDelta.toLocaleString("en-US"),
									" ",
									"💎"
								]
							})]
						})]
					}, tx.id))
				})]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "p-4 sm:p-6 grid grid-cols-1 md:grid-cols-12 gap-4 items-start",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "md:col-span-5 rounded-3xl bg-[#0e1320] border border-white/10 divide-y divide-white/8 overflow-hidden shadow-xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => openThread("system"),
						className: `w-full px-4 py-3.5 flex items-center justify-between gap-3 transition-colors text-right ${selectedUserId === "system" ? "bg-amber-400/12" : "hover:bg-white/[0.04]"}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3 min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "w-12 h-12 rounded-2xl bg-amber-400/15 border border-amber-400/40 flex items-center justify-center text-amber-300 shrink-0",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, { className: "w-5 h-5" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-sm font-bold text-white",
										children: "إشعارات النظام والمحفظة"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "px-1.5 py-0.5 rounded bg-amber-400/20 text-amber-300 text-[9px] font-bold",
										children: "رسمي"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-slate-400 truncate mt-0.5",
									children: mySystemAlerts[0]?.details || "لا توجد إشعارات جديدة حالياً"
								})]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[10px] text-slate-400 font-mono tabular-nums shrink-0",
							children: mySystemAlerts[0]?.timestamp?.slice(11, 16) || "الآن"
						})]
					}), filteredPeers.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "py-12 px-4 text-center space-y-2 text-slate-400 text-xs",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageSquare, { className: "w-7 h-7 mx-auto opacity-50" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "لا يوجد مستخدمون مطابقون للبحث." })]
					}) : filteredPeers.map((peer) => {
						const peerMsgs = messagesByPeer[peer.id] || [];
						const lastMsg = peerMsgs[peerMsgs.length - 1];
						const isSelected = selectedUserId === peer.id;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => openThread(peer.id),
							className: `w-full px-4 py-3.5 flex items-center justify-between gap-3 transition-colors text-right ${isSelected ? "bg-amber-400/12" : "hover:bg-white/[0.04]"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3 min-w-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: peer.avatar,
									alt: peer.displayName,
									referrerPolicy: "no-referrer",
									className: "w-12 h-12 rounded-full object-cover border border-white/15 shrink-0"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "text-sm font-bold text-white truncate",
											children: peer.displayName
										}), peer.vipLevel > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "px-1.5 py-0.5 rounded bg-amber-400/20 text-amber-300 text-[9px] font-mono font-bold shrink-0",
											children: ["VIP", peer.vipLevel]
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-slate-400 truncate mt-0.5",
										children: lastMsg ? lastMsg.text : `ID: ${peer.userCode} · اضغط لبدء المحادثة`
									})]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[10px] text-slate-400 font-mono tabular-nums shrink-0",
								children: lastMsg ? lastMsg.time : ""
							})]
						}, peer.id);
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "hidden md:flex md:col-span-7 flex-col h-[calc(100dvh-190px)] min-h-[460px] rounded-3xl bg-[#0e1320] border border-white/10 overflow-hidden shadow-xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "px-5 py-3.5 bg-[#13192c] border-b border-white/10 flex items-center justify-between shrink-0",
							children: selectedUserId === "system" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, { className: "w-4 h-4 text-amber-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sm font-bold text-white",
									children: "إشعارات النظام والمحفظة"
								})]
							}) : selectedPeer ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => {
									setViewingProfileUser(selectedPeer);
									setActiveModal("profile");
								},
								className: "flex items-center gap-2.5 hover:opacity-90",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: selectedPeer.avatar,
									alt: selectedPeer.displayName,
									referrerPolicy: "no-referrer",
									className: "w-9 h-9 rounded-full object-cover border border-amber-400/50"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-right",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-sm font-bold text-white",
										children: selectedPeer.displayName
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "text-[10px] text-slate-400 font-mono",
										children: ["ID: ", selectedPeer.userCode]
									})]
								})]
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm text-slate-400",
								children: "اختر محادثة للعرض"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex-1 overflow-y-auto p-5 space-y-2.5",
							children: selectedUserId === "system" ? mySystemAlerts.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-center py-14 text-xs text-slate-400",
								children: "لا توجد إشعارات أو عمليات مسجلة بعد."
							}) : mySystemAlerts.slice(0, 25).map((tx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-3.5 rounded-2xl bg-white/[0.04] border border-white/8 text-right space-y-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xs font-semibold text-white",
									children: tx.details
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between text-[10px] font-mono tabular-nums text-slate-400",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: tx.timestamp }), tx.coinsDelta !== 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: tx.coinsDelta > 0 ? "text-emerald-400" : "text-rose-400",
										children: [
											tx.coinsDelta > 0 ? `+${tx.coinsDelta.toLocaleString("en-US")}` : tx.coinsDelta.toLocaleString("en-US"),
											" ",
											"🪙"
										]
									})]
								})]
							}, tx.id)) : activeConversationMessages.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-center py-14 text-xs text-slate-400",
								children: [
									"ابدأ المحادثة مع ",
									selectedPeer?.displayName,
									" الآن."
								]
							}) : activeConversationMessages.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: `flex flex-col ${m.isMe ? "items-start" : "items-end"}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: `max-w-[78%] px-3.5 py-2.5 rounded-2xl text-xs leading-relaxed ${m.isMe ? "bg-amber-400 text-slate-950 font-semibold rounded-tl-none" : "bg-white/10 text-white rounded-tr-none"}`,
									children: m.text
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[10px] text-slate-400 font-mono mt-1",
									children: m.time
								})]
							}, m.id))
						}),
						selectedUserId && selectedUserId !== "system" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							onSubmit: handleSendReply,
							className: "p-3.5 bg-[#13192c] border-t border-white/10 flex items-center gap-2 shrink-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "text",
								value: replyInput,
								onChange: (e) => setReplyInput(e.target.value),
								placeholder: "اكتب رسالة خاصة...",
								className: "flex-1 h-10 bg-white/6 border border-white/12 rounded-xl px-3.5 text-xs text-white placeholder:text-slate-400 focus:outline-none focus:border-amber-400"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "submit",
								className: "w-10 h-10 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 flex items-center justify-center shrink-0 transition-colors",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "w-4 h-4" })
							})]
						})
					]
				})]
			}),
			mobileShowDetail && selectedUserId && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed inset-0 z-50 md:hidden bg-black/75 backdrop-blur-sm flex items-end justify-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "w-full h-[85dvh] bg-[#0e1320] border-t border-white/12 rounded-t-3xl flex flex-col overflow-hidden shadow-2xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "px-4 py-3 bg-[#13192c] border-b border-white/10 flex items-center justify-between shrink-0",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => setMobileShowDetail(false),
									className: "w-9 h-9 rounded-xl bg-white/8 hover:bg-white/14 flex items-center justify-center text-slate-200",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "w-5 h-5" })
								}),
								selectedUserId === "system" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-sm font-bold text-white",
										children: "إشعارات النظام والمحفظة"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, { className: "w-4 h-4 text-amber-400" })]
								}) : selectedPeer ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									onClick: () => {
										setViewingProfileUser(selectedPeer);
										setActiveModal("profile");
									},
									className: "flex items-center gap-2 hover:opacity-90",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "text-right",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-sm font-bold text-white",
											children: selectedPeer.displayName
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "text-[10px] text-slate-400 font-mono",
											children: ["ID: ", selectedPeer.userCode]
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: selectedPeer.avatar,
										alt: selectedPeer.displayName,
										referrerPolicy: "no-referrer",
										className: "w-9 h-9 rounded-full object-cover border border-amber-400/50"
									})]
								}) : null,
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-9" })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex-1 overflow-y-auto p-4 space-y-2.5",
							children: selectedUserId === "system" ? mySystemAlerts.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-center py-12 text-xs text-slate-400",
								children: "لا توجد إشعارات أو عمليات مسجلة بعد."
							}) : mySystemAlerts.slice(0, 20).map((tx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-3 rounded-2xl bg-white/[0.04] border border-white/8 text-right space-y-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xs font-semibold text-white",
									children: tx.details
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between text-[10px] font-mono tabular-nums text-slate-400",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: tx.timestamp }), tx.coinsDelta !== 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: tx.coinsDelta > 0 ? "text-emerald-400" : "text-rose-400",
										children: [
											tx.coinsDelta > 0 ? `+${tx.coinsDelta.toLocaleString()}` : tx.coinsDelta.toLocaleString(),
											" ",
											"🪙"
										]
									})]
								})]
							}, tx.id)) : activeConversationMessages.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-center py-12 text-xs text-slate-400",
								children: [
									"ابدأ المحادثة مع ",
									selectedPeer?.displayName,
									" الآن."
								]
							}) : activeConversationMessages.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: `flex flex-col ${m.isMe ? "items-start" : "items-end"}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: `max-w-[82%] px-3.5 py-2.5 rounded-2xl text-xs leading-relaxed ${m.isMe ? "bg-amber-400 text-slate-950 font-semibold rounded-tl-none" : "bg-white/10 text-white rounded-tr-none"}`,
									children: m.text
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[10px] text-slate-400 font-mono mt-1",
									children: m.time
								})]
							}, m.id))
						}),
						selectedUserId !== "system" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							onSubmit: handleSendReply,
							className: "p-3 bg-[#13192c] border-t border-white/10 flex items-center gap-2 shrink-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "text",
								value: replyInput,
								onChange: (e) => setReplyInput(e.target.value),
								placeholder: "اكتب رسالة خاصة...",
								className: "flex-1 h-10 bg-white/6 border border-white/12 rounded-xl px-3.5 text-xs text-white placeholder:text-slate-400 focus:outline-none focus:border-amber-400"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "submit",
								className: "w-10 h-10 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 flex items-center justify-center shrink-0 transition-colors",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "w-4 h-4" })
							})]
						})
					]
				})
			})
		]
	});
};
export { ChatInboxScreen };
