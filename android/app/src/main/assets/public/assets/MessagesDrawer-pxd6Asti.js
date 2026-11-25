import { n as __toESM } from "./rolldown-runtime-CO0Nlsmt.js";
import { Dt as CheckCheck, It as require_react, W as MessageCircle, k as Send, t as X } from "./icons-CSx0WKXF.js";
import { o as useApp } from "./index-tXJX2Qqq.js";
import { t as require_jsx_runtime } from "./react-vendor-BIdqWr74.js";
// src/components/MessagesDrawer.tsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
var MessagesDrawer = ({ isOpen, onClose }) => {
	const { users, currentUser } = useApp();
	const contacts = users.filter((u) => u.id !== currentUser.id);
	const [selectedContact, setSelectedContact] = (0, import_react.useState)(contacts[0] || users[1]);
	const [messages, setMessages] = (0, import_react.useState)([{
		id: "m1",
		senderId: selectedContact?.id || "2",
		text: "أهلاً بك يا فيصل! منور البث الصوتي اليوم ✨",
		time: "11:30",
		isMe: false
	}, {
		id: "m2",
		senderId: currentUser.id,
		text: "حياك الله، صوتك وجلستكم كانت في قمة الروعة 🎶",
		time: "11:32",
		isMe: true
	}]);
	const [inputVal, setInputVal] = (0, import_react.useState)("");
	if (!isOpen) return null;
	const handleSend = (e) => {
		e.preventDefault();
		if (!inputVal.trim()) return;
		const newM = {
			id: `m_${Date.now()}`,
			senderId: currentUser.id,
			text: inputVal.trim(),
			time: (/* @__PURE__ */ new Date()).toLocaleTimeString([], {
				hour: "2-digit",
				minute: "2-digit"
			}),
			isMe: true
		};
		setMessages((prev) => [...prev, newM]);
		setInputVal("");
		setTimeout(() => {
			const reply = {
				id: `m_${Date.now() + 1}`,
				senderId: selectedContact.id,
				text: "يسعدني تواجدك دائماً في رومنا! أراك على المايك قريباً 🎙️",
				time: (/* @__PURE__ */ new Date()).toLocaleTimeString([], {
					hour: "2-digit",
					minute: "2-digit"
				}),
				isMe: false
			};
			setMessages((prev) => [...prev, reply]);
		}, 1500);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-md animate-in fade-in duration-200",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-full max-w-3xl bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row h-[85vh]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "w-full md:w-72 bg-slate-950 border-b md:border-b-0 md:border-l border-slate-800 flex flex-col",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-4 border-b border-slate-800 flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
						className: "font-bold text-sm text-slate-100 flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "w-4 h-4 text-cyan-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "الرسائل الخاصة" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: onClose,
						className: "md:hidden p-1.5 rounded-full bg-slate-800 text-slate-400 hover:text-white",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "w-4 h-4" })
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-y-auto flex-1 p-2 space-y-1",
					children: contacts.map((contact) => {
						const isSelected = selectedContact?.id === contact.id;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							onClick: () => setSelectedContact(contact),
							className: `p-2.5 rounded-2xl flex items-center gap-3 cursor-pointer transition-colors ${isSelected ? "bg-indigo-600/20 border border-indigo-500/40" : "hover:bg-slate-900"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: contact.avatar,
									alt: "",
									className: "w-10 h-10 rounded-full object-cover ring-2 ring-amber-400"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-1 ring-slate-950" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex-1 truncate text-right",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "font-bold text-xs text-slate-100 truncate flex items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: contact.displayName }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-[10px] text-amber-400",
										children: ["VIP ", contact.vipLevel]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-[11px] text-slate-400 truncate mt-0.5",
									children: contact.bio || "محادثة خاصة"
								})]
							})]
						}, contact.id);
					})
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex-1 flex flex-col justify-between bg-slate-900",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-4 border-b border-slate-800 bg-slate-950/80 flex items-center justify-between",
						children: [selectedContact && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: selectedContact.avatar,
								alt: "",
								className: "w-9 h-9 rounded-full object-cover ring-2 ring-amber-400"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
								className: "font-bold text-sm text-slate-100",
								children: selectedContact.displayName
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-[10px] text-emerald-400 flex items-center gap-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "متصل الآن" })]
							})] })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: onClose,
							className: "hidden md:block p-1.5 rounded-full bg-slate-800 text-slate-400 hover:text-white",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "w-4 h-4" })
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "p-4 overflow-y-auto space-y-3 flex-1",
						children: messages.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: `flex flex-col ${m.isMe ? "items-end" : "items-start"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: `max-w-[75%] px-4 py-2.5 rounded-2xl text-xs ${m.isMe ? "bg-gradient-to-r from-amber-500 to-rose-500 text-white font-medium rounded-br-none shadow-md" : "bg-slate-800 text-slate-100 rounded-bl-none border border-slate-700"}`,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: m.text })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-1 text-[10px] text-slate-500 font-mono mt-1 px-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: m.time }), m.isMe && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckCheck, { className: "w-3 h-3 text-cyan-400" })]
							})]
						}, m.id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: handleSend,
						className: "p-3 border-t border-slate-800 bg-slate-950 flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "text",
							value: inputVal,
							onChange: (e) => setInputVal(e.target.value),
							placeholder: "اكتب رسالة خاصة هنا...",
							className: "flex-1 bg-slate-900 border border-slate-800 rounded-2xl px-4 py-2.5 text-xs text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-amber-500"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "submit",
							className: "p-2.5 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold transition-colors",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "w-4 h-4 rtl:rotate-180" })
						})]
					})
				]
			})]
		})
	});
};
export { MessagesDrawer };
