import { n as __toESM } from "./rolldown-runtime-CO0Nlsmt.js";
import { E as ShieldCheck, Et as Check, It as require_react, R as PenLine, T as Shield, W as MessageCircle, d as UserPlus, jt as Ban, t as X } from "./icons-CSx0WKXF.js";
import { o as useApp } from "./index-tXJX2Qqq.js";
import { t as require_jsx_runtime } from "./react-vendor-BIdqWr74.js";
// src/components/UserProfileModal.tsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
var UserProfileModal = ({ isOpen, onClose }) => {
	const { viewingProfileUser, currentUser, storeItems, users, setActiveModal, activeRoom, isRoomOwner, canManageRoom, toggleRoomModerator, banUserFromRoom } = useApp();
	const [isFollowing, setIsFollowing] = (0, import_react.useState)(false);
	const [isEditingBio, setIsEditingBio] = (0, import_react.useState)(false);
	const [bioText, setBioText] = (0, import_react.useState)("");
	const [roomActionMsg, setRoomActionMsg] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		setRoomActionMsg(null);
	}, [viewingProfileUser?.id, isOpen]);
	if (!isOpen || !viewingProfileUser) return null;
	const userFrame = viewingProfileUser.activeFrameId ? storeItems.find((i) => i.type === "frame" && i.id === viewingProfileUser.activeFrameId) : void 0;
	const isMe = viewingProfileUser.id === currentUser.id;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-in fade-in duration-200",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-full max-w-md bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden relative",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative h-28 w-full bg-slate-950",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: viewingProfileUser.coverImage,
						alt: "",
						className: "w-full h-full object-cover opacity-60"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: onClose,
						className: "absolute top-3 left-3 p-1.5 rounded-full bg-slate-950/70 text-slate-300 hover:text-white",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "w-4 h-4" })
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "px-6 pb-6 pt-0 relative -mt-12 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative inline-flex items-center justify-center w-28 h-28 mx-auto mb-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: userFrame?.previewUrl ? "w-[72px] h-[72px] rounded-full overflow-hidden shadow-2xl" : `w-24 h-24 rounded-full p-1 border-4 ${viewingProfileUser.activeFrameId ? "border-amber-400" : "border-white/20"} shadow-2xl`,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: viewingProfileUser.avatar,
									alt: "",
									referrerPolicy: "no-referrer",
									className: "w-full h-full rounded-full object-cover"
								})
							}),
							userFrame?.previewUrl && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: userFrame.previewUrl,
								alt: userFrame.nameAr,
								referrerPolicy: "no-referrer",
								className: "pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[122px] h-[122px] object-contain z-20"
							}),
							viewingProfileUser.vipLevel > 0 && !userFrame?.previewUrl && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute -top-3 inset-x-0 flex justify-center",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xl",
									children: "👑"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "absolute -bottom-1 -right-1 z-30 px-2 py-0.5 rounded-full bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 font-black text-[10px]",
								children: ["VIP ", viewingProfileUser.vipLevel]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
						className: "font-black text-lg text-slate-100 flex items-center justify-center gap-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: viewingProfileUser.displayName }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: viewingProfileUser.countryFlag })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-center gap-2 text-xs font-mono text-amber-400 mt-0.5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["ID: ", viewingProfileUser.userCode] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "·" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-slate-400",
								children: ["المستوى ", viewingProfileUser.level]
							})
						]
					}),
					viewingProfileUser.agencyName && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-2 inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-800 border border-slate-700 text-xs text-amber-300",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "⭐" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: viewingProfileUser.agencyName })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-3 gap-2 my-4 p-3 rounded-2xl bg-slate-950/80 border border-slate-800 text-xs",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-mono font-bold text-slate-100 text-sm",
								children: viewingProfileUser.followersCount.toLocaleString()
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[10px] text-slate-400",
								children: "المتابعون"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-mono font-bold text-slate-100 text-sm",
								children: viewingProfileUser.followingCount
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[10px] text-slate-400",
								children: "يتابع"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-mono font-bold text-slate-100 text-sm",
								children: viewingProfileUser.friendsCount
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[10px] text-slate-400",
								children: "الأصدقاء"
							})] })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-3 rounded-2xl bg-slate-950/60 border border-slate-800/80 text-xs text-slate-300 text-right",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[10px] text-slate-400 mb-1 font-bold",
							children: "النبذة التعريفية (Bio):"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "leading-relaxed",
							children: viewingProfileUser.bio || "لا توجد نبذة شخصية بعد."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-5 flex items-center gap-2",
						children: !isMe ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => setIsFollowing(!isFollowing),
							className: `flex-1 py-2.5 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition-all ${isFollowing ? "bg-slate-800 text-slate-300 border border-slate-700" : "bg-gradient-to-r from-amber-500 to-rose-500 text-white shadow-md"}`,
							children: [isFollowing ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "w-3.5 h-3.5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserPlus, { className: "w-3.5 h-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: isFollowing ? "تتابعه حالياً" : "متابعة" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => {
								onClose();
								setActiveModal("messages");
							},
							className: "py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs flex items-center gap-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "w-3.5 h-3.5 text-cyan-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "محادثة" })]
						})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => {
								setBioText(viewingProfileUser.bio);
								setIsEditingBio(true);
							},
							className: "w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs flex items-center justify-center gap-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PenLine, { className: "w-3.5 h-3.5 text-amber-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "تعديل نبذتي الشخصية" })]
						})
					}),
					activeRoom && !isMe && viewingProfileUser.id !== activeRoom.ownerId && (isRoomOwner(activeRoom) || canManageRoom(activeRoom)) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 pt-3 border-t border-slate-800 space-y-2 text-right",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-[11px] font-bold text-slate-400",
								children: [
									"إدارة العضو داخل الغرفة الحالية (",
									activeRoom.title,
									")"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [isRoomOwner(activeRoom) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => {
										const res = toggleRoomModerator(activeRoom.id, viewingProfileUser.id);
										setRoomActionMsg(res.message);
									},
									className: `flex-1 py-2.5 px-3 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 border transition-colors ${activeRoom.moderators.includes(viewingProfileUser.id) ? "bg-rose-500/15 border-rose-500/40 text-rose-300" : "bg-sky-500/20 border-sky-400/40 text-sky-300"}`,
									children: activeRoom.moderators.includes(viewingProfileUser.id) ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shield, { className: "w-3.5 h-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "سحب إشراف الغرفة" })] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "w-3.5 h-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "منح إشراف الغرفة" })] })
								}), canManageRoom(activeRoom) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									onClick: () => {
										banUserFromRoom(activeRoom.id, viewingProfileUser.id);
										setRoomActionMsg(`تم حظر ${viewingProfileUser.displayName} من الغرفة`);
									},
									className: "py-2.5 px-3.5 rounded-xl bg-rose-950/70 border border-rose-500/40 text-rose-300 font-bold text-xs flex items-center justify-center gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ban, { className: "w-3.5 h-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "حظر" })]
								})]
							}),
							roomActionMsg && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-[11px] text-emerald-300 font-bold",
								children: roomActionMsg
							})
						]
					})
				]
			})]
		})
	});
};
export { UserProfileModal };
