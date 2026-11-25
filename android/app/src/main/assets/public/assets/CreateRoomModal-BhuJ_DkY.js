import { n as __toESM } from "./rolldown-runtime-CO0Nlsmt.js";
import { $ as KeyRound, It as require_react, P as Radio, et as Image, t as X } from "./icons-CSx0WKXF.js";
import { a as room_bg_royal_majlis_1795294234181_default, i as room_bg_midnight_lounge_1795294231147_default, o as useApp, r as room_bg_starlight_sky_1795294232054_default } from "./index-tXJX2Qqq.js";
import { t as require_jsx_runtime } from "./react-vendor-BIdqWr74.js";
// src/components/CreateRoomModal.tsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
var BUILTIN_ROOM_BACKGROUNDS = [
	{
		id: "midnight",
		nameAr: "الصالة الليلية",
		imageUrl: room_bg_midnight_lounge_1795294231147_default
	},
	{
		id: "majlis",
		nameAr: "المجلس الملكي",
		imageUrl: room_bg_royal_majlis_1795294234181_default
	},
	{
		id: "starlight",
		nameAr: "سماء الليل",
		imageUrl: room_bg_starlight_sky_1795294232054_default
	}
];
var CreateRoomModal = ({ isOpen, onClose }) => {
	const { createVoiceRoom, roomBackgrounds } = useApp();
	const [title, setTitle] = (0, import_react.useState)("");
	const [category, setCategory] = (0, import_react.useState)("music");
	const [roomType, setRoomType] = (0, import_react.useState)("public");
	const [password, setPassword] = (0, import_react.useState)("");
	const [selectedBgId, setSelectedBgId] = (0, import_react.useState)("midnight");
	const seatCount = 8;
	if (!isOpen) return null;
	const selectedAdminBg = roomBackgrounds.find((b) => b.id === selectedBgId);
	const handleSubmit = (e) => {
		e.preventDefault();
		if (!title.trim()) return;
		if (roomType === "password" && !password.trim()) return;
		createVoiceRoom({
			title: title.trim(),
			category,
			type: roomType,
			seatCount,
			password: roomType === "password" ? password.trim() : void 0,
			backgroundId: selectedBgId,
			backgroundUrl: selectedAdminBg ? selectedAdminBg.imageUrl : void 0
		});
		setTitle("");
		setPassword("");
		onClose();
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-in fade-in duration-200",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-full max-w-md max-h-[90dvh] overflow-y-auto no-scrollbar bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl p-6 space-y-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between border-b border-slate-800 pb-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "w-9 h-9 rounded-xl bg-gradient-to-tr from-amber-500 to-rose-500 flex items-center justify-center text-white",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Radio, { className: "w-5 h-5" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-bold text-base text-slate-100",
						children: "إنشاء غرفة صوتية خاصة"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] text-slate-400",
						children: "بث مباشر صوتي فوري مع أصدقائك"
					})] })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: onClose,
					className: "p-1.5 rounded-full bg-slate-800 text-slate-400 hover:text-white",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "w-4 h-4" })
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: handleSubmit,
				className: "space-y-4 text-xs",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: "block text-slate-300 font-semibold mb-1.5",
						children: "عنوان الغرفة:"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "text",
						required: true,
						value: title,
						onChange: (e) => setTitle(e.target.value),
						placeholder: "مثال: ديوانية الأصدقاء وطرب المساء 🎶",
						className: "w-full bg-slate-950 border border-slate-800 rounded-2xl px-4 py-3 text-slate-100 focus:outline-none focus:border-amber-500"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: "block text-slate-300 font-semibold mb-1.5",
						children: "تصنيف الغرفة:"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-2 gap-2",
						children: [
							{
								id: "music",
								label: "طرب وموسيقى 🎶"
							},
							{
								id: "chat",
								label: "سوالف ودردشة 💬"
							},
							{
								id: "games",
								label: "مسابقات وألعاب 🎲"
							},
							{
								id: "vip",
								label: "غرفة VIP خاصة 👑"
							}
						].map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setCategory(c.id),
							className: `p-2.5 rounded-xl border text-center font-bold transition-all ${category === c.id ? "bg-amber-500/20 border-amber-500 text-amber-300" : "bg-slate-950/60 border-slate-800 text-slate-400"}`,
							children: c.label
						}, c.id))
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between text-xs",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-slate-400 font-semibold",
							children: "عدد المايكات:"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-amber-300 font-mono font-bold",
							children: "8 مايكات صوتية (4×2)"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: "block text-slate-300 font-semibold mb-1.5",
						children: "خصوصية الغرفة:"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-3 gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setRoomType("public"),
								className: `p-2.5 rounded-xl border font-bold text-center ${roomType === "public" ? "bg-emerald-500/20 border-emerald-500 text-emerald-300" : "bg-slate-950 border-slate-800 text-slate-400"}`,
								children: "عامة"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => setRoomType("password"),
								className: `p-2.5 rounded-xl border font-bold text-center flex items-center justify-center gap-1 ${roomType === "password" ? "bg-amber-500/20 border-amber-500 text-amber-300" : "bg-slate-950 border-slate-800 text-slate-400"}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KeyRound, { className: "w-3.5 h-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "برمز مرور" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setRoomType("vip"),
								className: `p-2.5 rounded-xl border font-bold text-center ${roomType === "vip" ? "bg-rose-500/20 border-rose-500 text-rose-300" : "bg-slate-950 border-slate-800 text-slate-400"}`,
								children: "VIP خاصة"
							})
						]
					})] }),
					roomType === "password" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: "block text-amber-300 font-semibold mb-1.5",
						children: "رمز مرور الدخول:"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "text",
						required: true,
						value: password,
						onChange: (e) => setPassword(e.target.value),
						placeholder: "أدخل رمز الغرفة (مثال: 1234)",
						className: "w-full bg-slate-950 border border-amber-500/40 rounded-2xl px-4 py-2.5 font-mono text-slate-100 focus:outline-none focus:border-amber-400"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "flex items-center gap-1.5 text-slate-300 font-semibold mb-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image, { className: "w-3.5 h-3.5 text-amber-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "خلفية الغرفة:" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-3 gap-2",
						children: [...roomBackgrounds, ...BUILTIN_ROOM_BACKGROUNDS].map((bg) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setSelectedBgId(bg.id),
							className: `relative h-16 rounded-xl overflow-hidden border-2 transition-all ${selectedBgId === bg.id ? "border-amber-400 ring-2 ring-amber-400/25" : "border-slate-800 opacity-75 hover:opacity-100"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: bg.imageUrl,
								alt: bg.nameAr,
								referrerPolicy: "no-referrer",
								className: "w-full h-full object-cover"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute inset-x-0 bottom-0 py-0.5 px-1 bg-black/75 text-[10px] font-bold text-white truncate",
								children: bg.nameAr
							})]
						}, bg.id))
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "submit",
						className: "w-full py-3.5 rounded-2xl bg-gradient-to-r from-amber-500 via-rose-500 to-amber-600 text-white font-black text-sm shadow-xl shadow-amber-500/25 hover:opacity-95 active:scale-95 transition-all mt-2",
						children: "بدء البث ودخول الغرفة فوراً"
					})
				]
			})]
		})
	});
};
export { CreateRoomModal };
