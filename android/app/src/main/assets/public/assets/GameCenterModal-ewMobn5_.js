import "./rolldown-runtime-CO0Nlsmt.js";
import { It as require_react, ct as Gamepad2, t as X } from "./icons-CSx0WKXF.js";
import { o as useApp } from "./index-tXJX2Qqq.js";
import { t as InteractiveGamesHub } from "./InteractiveGamesHub-WWS-ifxp.js";
import { t as require_jsx_runtime } from "./react-vendor-BIdqWr74.js";
require_react();
var import_jsx_runtime = require_jsx_runtime();
var GameCenterModal = ({ isOpen, onClose }) => {
	const { currentUser, setActiveModal } = useApp();
	if (!isOpen) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/80 backdrop-blur-md animate-in fade-in duration-200 font-tajawal",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-full max-w-md sm:max-w-xl bg-gradient-to-b from-[#2b1708] via-[#1c0f05] to-[#120802] border-t-4 sm:border-2 border-amber-400 rounded-t-[32px] sm:rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh] text-white",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "p-4 border-b border-amber-500/20 bg-black/40 flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: onClose,
					className: "w-8 h-8 rounded-full bg-white/10 text-stone-300 hover:text-white flex items-center justify-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "w-5 h-5" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-right",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-sm sm:text-base font-black text-amber-300",
							children: "مركز الألعاب المتنوعة GAME CENTER"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[11px] text-amber-100/80",
							children: "6 ألعاب مختلفة كلياً مع ربح فوري للكوينزات"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "w-10 h-10 rounded-2xl bg-gradient-to-tr from-amber-500 to-orange-600 text-slate-950 flex items-center justify-center shadow-lg",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gamepad2, { className: "w-6 h-6" })
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "p-4 overflow-y-auto flex-1",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InteractiveGamesHub, {
					compact: false,
					onOpenWallet: () => {
						onClose();
						setActiveModal("wallet");
					}
				})
			})]
		})
	});
};
export { GameCenterModal };
