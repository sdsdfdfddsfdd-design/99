import { n as __toESM } from "./rolldown-runtime-CO0Nlsmt.js";
import { I as Plus, It as require_react, W as MessageCircle, ct as Gamepad2, i as Wallet, k as Send, rt as Heart, t as X } from "./icons-CSx0WKXF.js";
import { o as useApp } from "./index-tXJX2Qqq.js";
import { t as InteractiveGamesHub } from "./InteractiveGamesHub-WWS-ifxp.js";
import { t as require_jsx_runtime } from "./react-vendor-BIdqWr74.js";
// src/components/GameCenterScreen.tsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
var MOMENTS_STORAGE_KEY = "auravoice_real_moments_v1";
var GameCenterScreen = () => {
	const { currentUser, setActiveModal } = useApp();
	const [subTab, setSubTab] = (0, import_react.useState)("games");
	const [showNewPostModal, setShowNewPostModal] = (0, import_react.useState)(false);
	const [newPostText, setNewPostText] = (0, import_react.useState)("");
	const [activeCommentPostId, setActiveCommentPostId] = (0, import_react.useState)(null);
	const [commentInput, setCommentInput] = (0, import_react.useState)("");
	const [posts, setPosts] = (0, import_react.useState)(() => {
		try {
			const saved = localStorage.getItem(MOMENTS_STORAGE_KEY);
			if (saved) return JSON.parse(saved);
		} catch {}
		return [];
	});
	(0, import_react.useEffect)(() => {
		try {
			localStorage.setItem(MOMENTS_STORAGE_KEY, JSON.stringify(posts));
		} catch {}
	}, [posts]);
	const handleToggleLike = (postId) => {
		setPosts((prev) => prev.map((p) => p.id === postId ? {
			...p,
			likes: p.isLiked ? Math.max(0, p.likes - 1) : p.likes + 1,
			isLiked: !p.isLiked
		} : p));
	};
	const handleCreatePost = (e) => {
		e.preventDefault();
		if (!newPostText.trim()) return;
		const nowTime = (/* @__PURE__ */ new Date()).toLocaleTimeString("ar-EG", {
			hour: "2-digit",
			minute: "2-digit"
		});
		setPosts((prev) => [{
			id: "post_" + Date.now(),
			userId: currentUser.id,
			userName: currentUser.displayName,
			userAvatar: currentUser.avatar,
			timeAgo: nowTime,
			content: newPostText.trim(),
			likes: 0,
			isLiked: false,
			comments: []
		}, ...prev]);
		setNewPostText("");
		setShowNewPostModal(false);
		setSubTab("moments");
	};
	const handleAddComment = (e, postId) => {
		e.preventDefault();
		if (!commentInput.trim()) return;
		const nowTime = (/* @__PURE__ */ new Date()).toLocaleTimeString("ar-EG", {
			hour: "2-digit",
			minute: "2-digit"
		});
		setPosts((prev) => prev.map((p) => p.id === postId ? {
			...p,
			comments: [...p.comments, {
				id: `c_${Date.now()}`,
				userName: currentUser.displayName,
				text: commentInput.trim(),
				time: nowTime
			}]
		} : p));
		setCommentInput("");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh w-full max-w-6xl mx-auto bg-[#070a12] text-white pb-28 font-tajawal select-none relative",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "sticky top-0 z-30 bg-[#070a12]/90 backdrop-blur-xl border-b border-white/10 px-4 sm:px-6 py-3 flex flex-wrap items-center justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => setSubTab("games"),
						className: `relative pb-1 text-sm flex items-center gap-1.5 transition-colors ${subTab === "games" ? "text-amber-300 font-bold after:content-[\"\"] after:absolute after:bottom-[-4px] after:inset-x-0 after:h-[2px] after:bg-amber-400 after:rounded-full" : "text-slate-400 hover:text-slate-200 font-medium"}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gamepad2, { className: "w-4 h-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "مركز الألعاب" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => setSubTab("moments"),
						className: `relative pb-1 text-sm transition-colors ${subTab === "moments" ? "text-amber-300 font-bold after:content-[\"\"] after:absolute after:bottom-[-4px] after:inset-x-0 after:h-[2px] after:bg-amber-400 after:rounded-full" : "text-slate-400 hover:text-slate-200 font-medium"}`,
						children: [
							"اللحظات (",
							posts.length,
							")"
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => setActiveModal("wallet"),
						className: "h-9 px-3 rounded-xl bg-[#0e1320] border border-amber-400/25 flex items-center gap-1.5 text-xs font-mono tabular-nums text-amber-300",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wallet, { className: "w-3.5 h-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [currentUser.coins.toLocaleString("en-US"), " 🪙"] })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => setShowNewPostModal(true),
						className: "h-9 px-3.5 rounded-xl bg-gradient-to-r from-amber-400 to-orange-500 text-slate-950 font-black text-xs flex items-center gap-1.5 transition-transform active:scale-95",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "w-4 h-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "نشر لحظة" })]
					})]
				})]
			}),
			subTab === "games" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "p-4 sm:p-6 space-y-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-3xl p-4 sm:p-5 bg-gradient-to-l from-[#12182b] to-[#0e1320] border border-amber-400/20 flex items-center justify-between gap-4 shadow-xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-right space-y-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-base sm:text-lg font-black text-amber-300",
							children: "مركز الألعاب التفاعلية الملكي"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs sm:text-sm text-slate-300",
							children: "6 أنظمة لعب متكاملة: صاروخ الانفجار، الأسد الجشع، ركلات الترجيح، التنين والنمر، صيد القروش، وبرق زيوس."
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-4xl shrink-0",
						children: "🎮"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InteractiveGamesHub, {
					compact: false,
					onOpenWallet: () => setActiveModal("wallet")
				})]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "p-4 sm:p-6 space-y-4",
				children: posts.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-3xl bg-[#0e1320] border border-white/10 p-10 text-center space-y-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-4xl",
							children: "✨"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-slate-300",
							children: "لا توجد لحظات منشورة بعد — شارك أول لحظة لك مع أصدقائك الآن."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setShowNewPostModal(true),
							className: "h-10 px-5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs transition-colors",
							children: "+ نشر لحظة جديدة"
						})
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-1 md:grid-cols-2 gap-4",
					children: posts.map((post) => {
						const isCommenting = activeCommentPostId === post.id;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-4 rounded-3xl bg-[#0e1320] border border-white/10 space-y-3 shadow-lg",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: post.userAvatar,
										alt: post.userName,
										referrerPolicy: "no-referrer",
										className: "w-11 h-11 rounded-full object-cover border border-amber-400/50"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "text-right",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "text-sm font-bold text-white",
											children: post.userName
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[11px] text-slate-400 font-mono",
											children: post.timeAgo
										})]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-slate-200 text-right whitespace-pre-line leading-relaxed",
									children: post.content
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-5 pt-2 border-t border-white/8 text-xs text-slate-400",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										onClick: () => handleToggleLike(post.id),
										className: `flex items-center gap-1.5 transition-colors ${post.isLiked ? "text-rose-400 font-bold" : "hover:text-white"}`,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: `w-4 h-4 ${post.isLiked ? "fill-rose-400" : ""}` }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-mono tabular-nums",
											children: post.likes
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										onClick: () => setActiveCommentPostId(isCommenting ? null : post.id),
										className: "flex items-center gap-1.5 hover:text-white transition-colors",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "w-4 h-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-mono tabular-nums",
											children: post.comments.length
										})]
									})]
								}),
								isCommenting && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "pt-2 space-y-2 border-t border-white/8",
									children: [post.comments.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "px-3 py-2 rounded-xl bg-white/[0.04] text-right text-xs",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "font-bold text-amber-300 ml-1.5",
											children: [c.userName, ":"]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-slate-200",
											children: c.text
										})]
									}, c.id)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
										onSubmit: (e) => handleAddComment(e, post.id),
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "text",
											value: commentInput,
											onChange: (e) => setCommentInput(e.target.value),
											placeholder: "اكتب تعليقاً...",
											className: "flex-1 h-9 rounded-xl bg-white/6 border border-white/12 px-3 text-xs text-white focus:outline-none focus:border-amber-400"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "submit",
											className: "w-9 h-9 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center shrink-0",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "w-4 h-4" })
										})]
									})]
								})
							]
						}, post.id);
					})
				})
			}),
			showNewPostModal && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4",
				onClick: () => setShowNewPostModal(false),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "w-full max-w-md bg-[#111522] border border-white/12 rounded-3xl p-5 shadow-2xl space-y-4",
					onClick: (e) => e.stopPropagation(),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-sm font-bold text-white",
							children: "نشر لحظة جديدة"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setShowNewPostModal(false),
							className: "w-8 h-8 rounded-lg bg-white/8 flex items-center justify-center text-slate-400 hover:text-white",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "w-4 h-4" })
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: handleCreatePost,
						className: "space-y-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							rows: 4,
							value: newPostText,
							onChange: (e) => setNewPostText(e.target.value),
							placeholder: "شارك أصدقاءك يومياتك أو موعد جلستك الصوتية...",
							className: "w-full rounded-2xl bg-white/6 border border-white/12 p-3 text-xs text-right text-white placeholder:text-slate-400 focus:outline-none focus:border-amber-400",
							autoFocus: true
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setShowNewPostModal(false),
								className: "flex-1 h-10 rounded-xl bg-white/8 text-slate-300 font-bold text-xs",
								children: "إلغاء"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "submit",
								className: "flex-1 h-10 rounded-xl bg-amber-400 text-slate-950 font-bold text-xs",
								children: "نشر الآن"
							})]
						})]
					})]
				})
			})
		]
	});
};
export { GameCenterScreen };
