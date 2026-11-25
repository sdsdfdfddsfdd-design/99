import { n as __toESM } from "./rolldown-runtime-CO0Nlsmt.js";
import { At as Bell, D as ShieldAlert, Et as Check, It as require_react, J as LogIn, R as PenLine, Y as Lock, _t as CreditCard, f as UserCheck, g as Trash2, gt as Crown, lt as FileText, o as Volume2, q as LogOut, t as X, tt as House, vt as Copy, y as Sparkles } from "./icons-CSx0WKXF.js";
import { S as VOICE_COUNTRIES, o as useApp, t as ProfileInstallButton } from "./index-tXJX2Qqq.js";
import { t as require_jsx_runtime } from "./react-vendor-BIdqWr74.js";
// src/components/ProfileScreen.tsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
var ProfileScreen = () => {
	const { currentUser, users, transactions, storeItems, joinRoom, setActiveModal, setViewingProfileUser, setCurrentView, isAdminAccount, updateUserProfile, rechargeCoins, bagGifts, firebaseUser, adminSession, signOutCloud, returnToAuthScreen } = useApp();
	const [copied, setCopied] = (0, import_react.useState)(false);
	const [subModal, setSubModal] = (0, import_react.useState)("none");
	const [socialTab, setSocialTab] = (0, import_react.useState)("friends");
	const [recordsFilter, setRecordsFilter] = (0, import_react.useState)("all");
	const [toastMsg, setToastMsg] = (0, import_react.useState)(null);
	const [showAvatarMenu, setShowAvatarMenu] = (0, import_react.useState)(false);
	const [editName, setEditName] = (0, import_react.useState)(currentUser.displayName || "الدبلان");
	const [editBio, setEditBio] = (0, import_react.useState)(currentUser.bio || "مرحباً بكم في عالمي الملكي 👑");
	const [editCountry, setEditCountry] = (0, import_react.useState)(currentUser.country || "السعودية");
	const [editAvatar, setEditAvatar] = (0, import_react.useState)(currentUser.avatar);
	const [editAge, setEditAge] = (0, import_react.useState)(currentUser.age || 24);
	const [editGender, setEditGender] = (0, import_react.useState)(currentUser.gender || "male");
	const [equippedBadges, setEquippedBadges] = (0, import_react.useState)([
		"badge_vip5",
		"badge_wealth",
		"badge_lucky"
	]);
	const [cpPartnerId, setCpPartnerId] = (0, import_react.useState)(users[1]?.id || "user_2");
	const [cpLovePoints, setCpLovePoints] = (0, import_react.useState)(15420);
	const [cpRingTier, setCpRingTier] = (0, import_react.useState)("خاتم الألماس الأبدي 💍");
	const [soundEnabled, setSoundEnabled] = (0, import_react.useState)(true);
	const [notifEnabled, setNotifEnabled] = (0, import_react.useState)(true);
	const [hideVisitorStatus, setHideVisitorStatus] = (0, import_react.useState)(false);
	const [claimedDailyLevelBonus, setClaimedDailyLevelBonus] = (0, import_react.useState)(false);
	const [claimedInviteBonus, setClaimedInviteBonus] = (0, import_react.useState)(false);
	const showToast = (msg) => {
		setToastMsg(msg);
		setTimeout(() => setToastMsg(null), 2600);
	};
	const handleCopyId = () => {
		navigator.clipboard?.writeText(currentUser.userCode || "6919142");
		setCopied(true);
		showToast(`تم نسخ الأيدي بنجاح: ${currentUser.userCode || "6919142"}`);
		setTimeout(() => setCopied(false), 2e3);
	};
	const handleSaveProfile = (e) => {
		e.preventDefault();
		const matchedCountry = VOICE_COUNTRIES.find((c) => c.name === editCountry || `${c.flag} ${c.name}` === editCountry);
		updateUserProfile({
			displayName: editName.trim() || currentUser.displayName,
			bio: editBio.trim(),
			country: matchedCountry?.name || editCountry,
			countryFlag: matchedCountry?.flag || currentUser.countryFlag || "🌍",
			age: Math.min(99, Math.max(13, Number(editAge) || 24)),
			gender: editGender,
			avatar: editAvatar.trim() || currentUser.avatar
		});
		setSubModal("none");
		showToast("تم حفظ تعديلات الملف الشخصي بنجاح ✨");
	};
	const avatarPresets = [
		currentUser.avatar,
		"https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
		"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
		"https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=300&q=80",
		"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80"
	];
	const allBadgesCatalog = [
		{
			id: "badge_vip5",
			name: "إمبراطور VIP",
			icon: "👑",
			desc: "وسام كبار الشخصيات الملكي",
			color: "from-amber-400 to-yellow-600"
		},
		{
			id: "badge_wealth",
			name: "أسطورة الثروة",
			icon: "💎",
			desc: "إرسال أكثر من 100K كوينز هدايا",
			color: "from-purple-500 to-indigo-600"
		},
		{
			id: "badge_lucky",
			name: "صائد الحظ 500X",
			icon: "🍀",
			desc: "الفوز بمضاعف الحظ الأسطوري",
			color: "from-emerald-400 to-teal-600"
		},
		{
			id: "badge_rocket",
			name: "مفجر الصواريخ",
			icon: "🚀",
			desc: "تفجير صاروخ الغرفة المستوى 5",
			color: "from-rose-500 to-orange-500"
		},
		{
			id: "badge_mic",
			name: "نجم المايك الذهبي",
			icon: "🎙️",
			desc: "التحدث على المايك لأكثر من 50 ساعة",
			color: "from-cyan-400 to-blue-600"
		},
		{
			id: "badge_cp",
			name: "ثنائي العشق الملكي",
			icon: "💞",
			desc: "شريك الروح CP المستوى الذهبي",
			color: "from-pink-400 to-rose-600"
		}
	];
	const specialIdsCatalog = [
		{
			code: "6919142",
			label: "أيدي ملكي مميز",
			price: 0,
			tag: "مملوك"
		},
		{
			code: "777777",
			label: "سباعي ملكي نادر جداً",
			price: 25e3,
			tag: "نادر 🔥"
		},
		{
			code: "888888",
			label: "ثماني الإمبراطور الذهبي",
			price: 35e3,
			tag: "VIP 👑"
		},
		{
			code: "100001",
			label: "أيدي النخبة الأول",
			price: 15e3,
			tag: "مميز ✨"
		},
		{
			code: "555555",
			label: "خماسي الماس الفاخر",
			price: 2e4,
			tag: "ملكي 💎"
		},
		{
			code: "999999",
			label: "تساعي الأسطورة الخالدة",
			price: 5e4,
			tag: "أسطوري 🏆"
		}
	];
	const cpPartner = users.find((u) => u.id === cpPartnerId) || users[1] || currentUser;
	const totalBagCount = Object.values(bagGifts).reduce((s, c) => s + c, 0);
	const equippedFrame = storeItems.find((i) => i.type === "frame" && i.id === currentUser.activeFrameId);
	const myRecords = transactions.filter((tx) => {
		if (tx.userId !== currentUser.id) return false;
		if (recordsFilter === "all") return true;
		return tx.type === recordsFilter;
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative min-h-dvh w-full max-w-5xl mx-auto bg-[#070a12] text-white pb-24 font-tajawal select-none overflow-x-hidden",
		children: [
			toastMsg && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed top-4 inset-x-4 max-w-sm mx-auto z-50 px-4 py-2.5 rounded-2xl bg-[#141a2b]/95 border border-amber-400 text-amber-300 text-xs font-black text-center shadow-2xl",
				children: toastMsg
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "sticky top-0 z-30 bg-[#070a12]/90 backdrop-blur-xl border-b border-white/10 px-3.5 sm:px-6 py-2 flex items-center justify-between gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "text-sm sm:text-base font-black text-amber-300 flex items-center gap-1.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Crown, { className: "w-4 h-4 text-amber-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "ملفي" })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-1.5 sm:gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProfileInstallButton, { variant: "header" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => setCurrentView("agent_portal"),
							className: "h-8 sm:h-9 px-2.5 sm:px-3 rounded-xl bg-teal-500/15 border border-teal-400/35 text-teal-300 text-[11px] sm:text-xs font-bold flex items-center gap-1 hover:bg-teal-500/25 transition-colors",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CreditCard, { className: "w-3.5 h-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "الوكيل" })]
						}),
						isAdminAccount && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => setCurrentView("admin_dashboard"),
							className: "h-8 sm:h-9 px-2.5 sm:px-3 rounded-xl bg-indigo-500/15 border border-indigo-400/35 text-indigo-300 text-[11px] sm:text-xs font-bold flex items-center gap-1 hover:bg-indigo-500/25 transition-colors",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldAlert, { className: "w-3.5 h-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "الإدارة" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => {
								setEditName(currentUser.displayName);
								setEditBio(currentUser.bio || "مرحباً بكم في عالمي الملكي 👑");
								setEditAvatar(currentUser.avatar);
								setEditCountry(currentUser.country || "السعودية");
								setEditAge(currentUser.age || 24);
								setEditGender(currentUser.gender || "male");
								setSubModal("edit_profile");
							},
							className: "w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-amber-400/15 border border-amber-400/40 flex items-center justify-center text-amber-300 hover:bg-amber-400/25 transition-colors",
							title: "تعديل الملف الشخصي",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PenLine, { className: "w-3.5 h-3.5 sm:w-4 sm:h-4" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => {
								if (firebaseUser || adminSession) signOutCloud();
								else returnToAuthScreen();
							},
							className: "h-8 sm:h-9 px-2.5 sm:px-3 rounded-xl bg-rose-500/15 border border-rose-400/35 text-rose-300 text-[11px] sm:text-xs font-bold flex items-center gap-1 hover:bg-rose-500/25 transition-colors",
							title: firebaseUser || adminSession ? "تسجيل الخروج" : "تسجيل الدخول",
							children: [firebaseUser || adminSession ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { className: "w-3.5 h-3.5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogIn, { className: "w-3.5 h-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: firebaseUser || adminSession ? "خروج" : "دخول" })]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "px-3 sm:px-6 pt-2.5 lg:pt-5 grid grid-cols-1 lg:grid-cols-12 gap-2.5 lg:gap-5 items-start",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-5 space-y-2.5 lg:space-y-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProfileInstallButton, { variant: "card" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative rounded-2xl lg:rounded-3xl overflow-visible bg-gradient-to-b from-[#13192c] to-[#0c101d] border border-amber-400/25 p-3 lg:p-5 shadow-xl",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3.5 text-right",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative shrink-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										onClick: () => setShowAvatarMenu((prev) => !prev),
										title: "فتح البروفايل الخاص بي",
										className: "relative w-20 h-20 lg:w-22 lg:h-22 shrink-0 cursor-pointer flex items-center justify-center",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: equippedFrame?.previewUrl ? "w-12 h-12 lg:w-14 lg:h-14 rounded-full overflow-hidden" : "w-15 h-15 lg:w-18 lg:h-18 rounded-2xl p-[2px] bg-gradient-to-b from-amber-300 via-yellow-500 to-amber-700 shadow-lg",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
													src: currentUser.avatar,
													alt: currentUser.displayName,
													referrerPolicy: "no-referrer",
													className: `w-full h-full object-cover ${equippedFrame?.previewUrl ? "rounded-full" : "rounded-[14px]"}`
												})
											}),
											equippedFrame?.previewUrl && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
												src: equippedFrame.previewUrl,
												alt: equippedFrame.nameAr,
												referrerPolicy: "no-referrer",
												className: "pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[84px] h-[84px] lg:w-[96px] lg:h-[96px] object-contain z-20"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "absolute -bottom-1.5 left-1/2 -translate-x-1/2 z-30 px-2 py-0.5 rounded-md bg-gradient-to-r from-amber-500 to-yellow-400 text-[9px] font-black text-slate-950 shadow whitespace-nowrap",
												children: ["VIP ", currentUser.vipLevel || 5]
											})
										]
									}), showAvatarMenu && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "absolute top-full right-0 mt-2 w-48 rounded-2xl bg-[#141a2d] border border-amber-400/35 shadow-2xl p-1.5 z-40 space-y-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											onClick: () => {
												setShowAvatarMenu(false);
												setViewingProfileUser(currentUser);
												setActiveModal("profile");
											},
											className: "w-full px-3 py-2 rounded-xl text-xs font-bold text-amber-300 hover:bg-white/10 flex items-center gap-2 text-right transition-colors",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserCheck, { className: "w-3.5 h-3.5 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "فتح البروفايل الخاص بي" })]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											onClick: () => {
												setShowAvatarMenu(false);
												setSubModal("edit_profile");
											},
											className: "w-full px-3 py-2 rounded-xl text-xs font-semibold text-slate-200 hover:bg-white/10 flex items-center gap-2 text-right transition-colors",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PenLine, { className: "w-3.5 h-3.5 text-sky-400 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "تعديل الملف الشخصي" })]
										})]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0 flex-1 space-y-1",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "flex items-center justify-between gap-2",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-1.5 min-w-0",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
														className: "text-base lg:text-lg font-black text-white truncate",
														children: currentUser.displayName || "الدبلان"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
														className: `text-[11px] font-bold shrink-0 tabular-nums ${currentUser.gender === "female" ? "text-rose-300" : "text-sky-300"}`,
														children: [
															currentUser.gender === "female" ? "♀" : "♂",
															" ",
															currentUser.age ?? 24
														]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-sm shrink-0",
														title: currentUser.country,
														children: currentUser.countryFlag || "🇸🇦"
													})
												]
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex flex-wrap items-center gap-1.5 text-[11px]",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
												onClick: handleCopyId,
												className: "inline-flex items-center gap-1 px-2 py-0.5 rounded-lg bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 text-amber-200 font-mono tabular-nums transition-colors",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["ID:", currentUser.userCode || "6919142"] }), copied ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "w-3 h-3 text-emerald-400" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "w-3 h-3 text-slate-400" })]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
												onClick: () => setSubModal("levels"),
												className: "px-2 py-0.5 rounded-lg bg-orange-500/20 border border-orange-400/30 text-orange-200 font-mono tabular-nums font-bold",
												children: ["🔥 Lv.", currentUser.level || 7]
											})]
										}),
										currentUser.bio && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[11px] text-slate-400 truncate",
											children: currentUser.bio
										})
									]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-4 pt-2 mt-2.5 border-t border-white/10 w-full text-center gap-1",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										onClick: () => {
											setSocialTab("visitors");
											setSubModal("social_list");
										},
										className: "flex flex-col items-center hover:bg-white/[0.04] rounded-xl py-1 transition-colors",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-sm font-black font-mono tabular-nums text-white",
											children: currentUser.visitorsCount || 3
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[10px] text-slate-400",
											children: "زائر"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										onClick: () => {
											setSocialTab("fans");
											setSubModal("social_list");
										},
										className: "flex flex-col items-center hover:bg-white/[0.04] rounded-xl py-1 transition-colors",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-sm font-black font-mono tabular-nums text-white",
											children: currentUser.followersCount || 2
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[10px] text-slate-400",
											children: "المعجبون"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										onClick: () => {
											setSocialTab("following");
											setSubModal("social_list");
										},
										className: "flex flex-col items-center hover:bg-white/[0.04] rounded-xl py-1 transition-colors",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-sm font-black font-mono tabular-nums text-white",
											children: currentUser.followingCount || 1
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[10px] text-slate-400",
											children: "المتابعون"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										onClick: () => {
											setSocialTab("friends");
											setSubModal("social_list");
										},
										className: "flex flex-col items-center hover:bg-white/[0.04] rounded-xl py-1 transition-colors",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-sm font-black font-mono tabular-nums text-white",
											children: Math.max(1, users.length - 1)
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[10px] text-slate-400",
											children: "أصدقاء"
										})]
									})
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-2 gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => setActiveModal("wallet"),
								className: "rounded-2xl bg-gradient-to-br from-amber-500/18 to-[#0e1320] border border-amber-400/30 px-3 py-2.5 flex items-center justify-between hover:border-amber-400/60 transition-colors",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-right min-w-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-[11px] font-bold text-amber-200",
										children: "الكونزة"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-sm font-mono tabular-nums font-black text-white truncate",
										children: currentUser.coins.toLocaleString("en-US")
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xl shrink-0",
									children: "🪙"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => setActiveModal("wallet"),
								className: "rounded-2xl bg-gradient-to-br from-fuchsia-500/18 to-[#0e1320] border border-fuchsia-400/30 px-3 py-2.5 flex items-center justify-between hover:border-fuchsia-400/60 transition-colors",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-right min-w-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-[11px] font-bold text-fuchsia-200",
										children: "الماس"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-sm font-mono tabular-nums font-black text-white truncate",
										children: currentUser.diamonds.toLocaleString("en-US")
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xl shrink-0",
									children: "💎"
								})]
							})]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-7 space-y-2.5 lg:space-y-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-3 gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									onClick: () => setActiveModal("vip"),
									className: "rounded-2xl bg-gradient-to-br from-[#2a1d0b] to-[#171109] border border-amber-400/40 p-2.5 text-right flex items-center justify-between gap-1 hover:border-amber-300 transition-colors",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "min-w-0",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "text-xs font-black text-amber-300",
											children: ["VIP ", currentUser.vipLevel || 5]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-[10px] text-amber-100/75 truncate",
											children: "الامتيازات"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-lg shrink-0",
										children: "👑"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									onClick: () => setSubModal("levels"),
									className: "rounded-2xl bg-[#0e1320] hover:bg-[#141b2e] border border-sky-400/30 p-2.5 text-right flex items-center justify-between gap-1 transition-colors",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "min-w-0",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-xs font-black text-white",
											children: "المستوى"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "text-[10px] text-sky-300 font-mono tabular-nums truncate",
											children: ["Lv.", currentUser.level || 41]
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-lg shrink-0",
										children: "🏆"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									onClick: () => setSubModal("badges"),
									className: "rounded-2xl bg-[#0e1320] hover:bg-[#141b2e] border border-emerald-400/30 p-2.5 text-right flex items-center justify-between gap-1 transition-colors",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "min-w-0",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-xs font-black text-white",
											children: "الأوسمة"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "text-[10px] text-emerald-300 truncate",
											children: [equippedBadges.length, " مفعلة"]
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-lg shrink-0",
										children: "🎖️"
									})]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl lg:rounded-3xl bg-[#0e1320] border border-white/10 p-2.5 sm:p-4 grid grid-cols-4 gap-2 sm:gap-3 text-center shadow-xl",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									onClick: () => setSubModal("special_id"),
									className: "py-2 px-1 rounded-xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/6 flex flex-col items-center gap-1 transition-colors",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-b from-purple-500 to-fuchsia-600 text-white flex items-center justify-center shadow text-[11px] font-black",
										children: "ID"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[11px] font-bold text-slate-200 truncate w-full",
										children: "ايدي مميز"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									onClick: () => setActiveModal("backpack"),
									className: "relative py-2 px-1 rounded-xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/6 flex flex-col items-center gap-1 transition-colors",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-b from-indigo-500 to-purple-600 text-white flex items-center justify-center text-base shadow",
											children: "🎒"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[11px] font-bold text-slate-200 truncate w-full",
											children: "الحقيبة"
										}),
										totalBagCount > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "absolute top-1 left-1 min-w-[16px] h-[16px] px-1 rounded-full bg-emerald-500 text-slate-950 font-mono tabular-nums font-black text-[9px] flex items-center justify-center",
											children: totalBagCount
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									onClick: () => setSubModal("cp_space"),
									className: "py-2 px-1 rounded-xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/6 flex flex-col items-center gap-1 transition-colors",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-b from-pink-500 to-rose-600 text-white flex items-center justify-center text-base shadow",
										children: "💞"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[11px] font-bold text-slate-200 truncate w-full",
										children: "CP"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									onClick: () => setActiveModal("store"),
									className: "py-2 px-1 rounded-xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/6 flex flex-col items-center gap-1 transition-colors",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-b from-sky-500 to-blue-600 text-white flex items-center justify-center text-base shadow",
										children: "🏪"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[11px] font-bold text-slate-200 truncate w-full",
										children: "المتجر"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									onClick: () => joinRoom("room_tyy"),
									className: "py-2 px-1 rounded-xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/6 flex flex-col items-center gap-1 transition-colors",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-b from-amber-400 to-orange-500 text-slate-950 flex items-center justify-center shadow",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(House, { className: "w-4 h-4" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[11px] font-bold text-slate-200 truncate w-full",
										children: "غرفتي"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									onClick: () => setActiveModal("messages"),
									className: "py-2 px-1 rounded-xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/6 flex flex-col items-center gap-1 transition-colors",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-b from-cyan-500 to-teal-600 text-white flex items-center justify-center text-base shadow",
										children: "💬"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[11px] font-bold text-slate-200 truncate w-full",
										children: "رسائلي"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									onClick: () => setActiveModal("agency"),
									className: "py-2 px-1 rounded-xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/6 flex flex-col items-center gap-1 transition-colors",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-b from-emerald-500 to-teal-600 text-white flex items-center justify-center text-base shadow",
										children: "🏛️"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[11px] font-bold text-slate-200 truncate w-full",
										children: "وكالة"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									onClick: () => setSubModal("records"),
									className: "py-2 px-1 rounded-xl bg-amber-400/10 hover:bg-amber-400/20 border border-amber-400/30 flex flex-col items-center gap-1 transition-colors",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-b from-amber-500 to-yellow-600 text-slate-950 flex items-center justify-center shadow",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "w-4 h-4" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[11px] font-bold text-amber-300 truncate w-full",
										children: "السجلات"
									})]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-3 gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									onClick: () => setSubModal("invite"),
									className: "min-h-[44px] px-2.5 rounded-2xl bg-[#0e1320] hover:bg-[#141b2e] border border-white/10 flex items-center justify-center gap-1.5 text-xs font-bold text-white transition-colors",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "🎁" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "دعوة" })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									onClick: () => setSubModal("settings"),
									className: "min-h-[44px] px-2.5 rounded-2xl bg-[#0e1320] hover:bg-[#141b2e] border border-white/10 flex items-center justify-center gap-1.5 text-xs font-bold text-white transition-colors",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "⚙️" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "الإعدادات" })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									onClick: () => setSubModal("about"),
									className: "min-h-[44px] px-2.5 rounded-2xl bg-[#0e1320] hover:bg-[#141b2e] border border-white/10 flex items-center justify-center gap-1.5 text-xs font-bold text-white transition-colors",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "ℹ️" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "حول" })]
								})
							]
						})
					]
				})]
			}),
			subModal !== "none" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-4",
				onClick: () => setSubModal("none"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "w-full max-w-lg bg-[#0d1220] text-white border-t-2 sm:border border-amber-400/40 rounded-t-3xl sm:rounded-3xl p-5 space-y-4 max-h-[86vh] overflow-y-auto shadow-2xl",
					onClick: (e) => e.stopPropagation(),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between border-b border-white/10 pb-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
								className: "text-base font-black text-amber-300",
								children: [
									subModal === "edit_profile" && "✏️ تعديل الملف الشخصي",
									subModal === "social_list" && "👥 القائمة الاجتماعية",
									subModal === "levels" && "🏆 مستوى الثروة والجاذبية",
									subModal === "badges" && "👑 شاراتي وأوسمتي الملكية",
									subModal === "cp_space" && "💞 مساحة CP وشريك الروح",
									subModal === "special_id" && "🆔 متجر الأيدي المميز",
									subModal === "invite" && "🎁 دعوة الأصدقاء ومكافآت الكوينز",
									subModal === "records" && "📋 سجلات الحساب والربح",
									subModal === "settings" && "⚙️ إعدادات الحساب والتطبيق",
									subModal === "about" && "ℹ️ حول فوكاشات والدعم الفني"
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setSubModal("none"),
								className: "w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-slate-300 hover:text-white",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "w-4 h-4" })
							})]
						}),
						subModal === "edit_profile" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							onSubmit: handleSaveProfile,
							className: "space-y-3.5 text-right",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "block text-xs font-bold text-slate-300 mb-1.5",
									children: "اختر صورة رمزية أو ضع رابط صورة:"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex items-center justify-start gap-2 pb-2",
									children: avatarPresets.map((av, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => setEditAvatar(av),
										className: `w-12 h-12 rounded-full overflow-hidden border-2 transition-transform ${editAvatar === av ? "border-amber-400 scale-110" : "border-white/20 opacity-70"}`,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: av,
											alt: "",
											referrerPolicy: "no-referrer",
											className: "w-full h-full object-cover"
										})
									}, i))
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "block text-xs font-bold text-slate-300 mb-1",
									children: "الاسم المستعار:"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "text",
									value: editName,
									onChange: (e) => setEditName(e.target.value),
									className: "w-full rounded-xl bg-slate-900 border border-white/15 px-3 py-2 text-sm text-white text-right focus:border-amber-400 focus:outline-none"
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid grid-cols-2 gap-2.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "block text-xs font-bold text-slate-300 mb-1",
										children: "العمر:"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "number",
										min: 13,
										max: 99,
										value: editAge,
										onChange: (e) => setEditAge(Number(e.target.value) || 24),
										className: "w-full rounded-xl bg-slate-900 border border-white/15 px-3 py-2 text-sm text-white text-right font-mono tabular-nums focus:border-amber-400 focus:outline-none"
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "block text-xs font-bold text-slate-300 mb-1",
										children: "البلد:"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
										value: editCountry,
										onChange: (e) => setEditCountry(e.target.value),
										className: "w-full rounded-xl bg-slate-900 border border-white/15 px-3 py-2 text-sm text-white text-right focus:border-amber-400 focus:outline-none",
										children: VOICE_COUNTRIES.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", {
											value: c.name,
											children: [
												c.flag,
												" ",
												c.name
											]
										}, c.name))
									})] })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "block text-xs font-bold text-slate-300 mb-1",
									children: "الجنس:"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid grid-cols-2 gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => setEditGender("female"),
										className: `py-2 rounded-xl border text-xs font-black transition-colors ${editGender === "female" ? "bg-rose-500/20 border-rose-400 text-rose-200" : "bg-slate-900 border-white/15 text-slate-300"}`,
										children: "♀ أنثى"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => setEditGender("male"),
										className: `py-2 rounded-xl border text-xs font-black transition-colors ${editGender === "male" ? "bg-sky-500/20 border-sky-400 text-sky-200" : "bg-slate-900 border-white/15 text-slate-300"}`,
										children: "♂ ذكر"
									})]
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "block text-xs font-bold text-slate-300 mb-1",
									children: "السيرة الذاتية (Bio):"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
									rows: 2,
									value: editBio,
									onChange: (e) => setEditBio(e.target.value),
									className: "w-full rounded-xl bg-slate-900 border border-white/15 px-3 py-2 text-xs text-white text-right focus:border-amber-400 focus:outline-none"
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "submit",
									className: "w-full py-3 rounded-2xl bg-gradient-to-r from-amber-400 to-orange-500 text-slate-950 font-black text-sm shadow-lg",
									children: "حفظ التعديلات ✨"
								})
							]
						}),
						subModal === "social_list" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid grid-cols-4 gap-1.5 bg-slate-900 p-1 rounded-2xl",
								children: [
									{
										id: "friends",
										label: "أصدقاء"
									},
									{
										id: "following",
										label: "المتابعون"
									},
									{
										id: "fans",
										label: "المعجبون"
									},
									{
										id: "visitors",
										label: "الزوار"
									}
								].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => setSocialTab(t.id),
									className: `py-1.5 rounded-xl text-xs font-black transition-all ${socialTab === t.id ? "bg-amber-400 text-slate-950 shadow" : "text-slate-400 hover:text-white"}`,
									children: t.label
								}, t.id))
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "space-y-2 max-h-72 overflow-y-auto",
								children: users.map((u) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "p-2.5 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2.5 text-right",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: u.avatar,
											alt: u.displayName,
											referrerPolicy: "no-referrer",
											className: "w-10 h-10 rounded-full object-cover ring-2 ring-amber-400/60"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-xs font-black text-white",
											children: u.displayName
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "text-[10px] text-amber-400 font-mono",
											children: [
												"ID:",
												u.userCode,
												" • VIP",
												u.vipLevel
											]
										})] })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											onClick: () => showToast(`تم إرسال تحية إلى ${u.displayName} 👋`),
											className: "px-2.5 py-1.5 rounded-xl bg-teal-500/20 text-teal-300 font-black text-[11px]",
											children: "مراسلة 💬"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											onClick: () => {
												setSubModal("none");
												setViewingProfileUser(u);
												setActiveModal("profile");
											},
											className: "px-3 py-1.5 rounded-xl bg-amber-400/20 border border-amber-400/50 text-amber-300 font-black text-[11px]",
											children: "عرض الملف"
										})]
									})]
								}, u.id))
							})]
						}),
						subModal === "levels" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-4 text-right",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "p-4 rounded-2xl bg-gradient-to-r from-sky-900/60 to-indigo-900/60 border border-sky-400/40 space-y-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "text-sm font-black text-white",
												children: ["🏆 مستوى الثروة: Lv.", currentUser.level || 41]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-xs font-mono font-black text-sky-300",
												children: "172,670 / 263,990 XP"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "w-full h-3 rounded-full bg-slate-900 overflow-hidden border border-sky-400/30",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-full w-2/3 bg-gradient-to-r from-sky-400 to-cyan-300" })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[11px] text-slate-300",
											children: "كل كوينز ترسله في الهدايا داخل الغرف الصوتية يرفع مستوى الثروة الخاص بك ويفتح أيقونات دخول ملكية!"
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "p-4 rounded-2xl bg-gradient-to-r from-pink-900/60 to-purple-900/60 border border-pink-400/40 space-y-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-sm font-black text-white",
											children: "🔥 مستوى الجاذبية (السحر): Lv.7"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-xs font-mono font-black text-pink-300",
											children: "84,500 / 120,000 XP"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "w-full h-3 rounded-full bg-slate-900 overflow-hidden border border-pink-400/30",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-full w-3/4 bg-gradient-to-r from-pink-500 to-amber-400" })
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									disabled: claimedDailyLevelBonus,
									onClick: () => {
										setClaimedDailyLevelBonus(true);
										rechargeCoins(1500, "مكافأة المستوى اليومية");
										showToast("تم استلام +1,500 كوينز مكافأة المستوى اليومية! 🎉");
									},
									className: `w-full py-3 rounded-2xl font-black text-xs shadow-lg ${claimedDailyLevelBonus ? "bg-slate-800 text-slate-500" : "bg-gradient-to-r from-amber-400 to-orange-500 text-slate-950"}`,
									children: claimedDailyLevelBonus ? "تم استلام مكافأة المستوى اليومية ✅" : "🎁 استلام مكافأة المستوى اليومية (+1,500 كوينز)"
								})
							]
						}),
						subModal === "badges" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-3 text-right",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-slate-300",
								children: "اضغط على أي شارة لتفعيلها أو إلغاء تفعيلها في ملفك الشخصي وداخل الغرف الصوتية:"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid grid-cols-2 gap-2.5",
								children: allBadgesCatalog.map((b) => {
									const isEquipped = equippedBadges.includes(b.id);
									return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										onClick: () => {
											setEquippedBadges((prev) => prev.includes(b.id) ? prev.filter((x) => x !== b.id) : [...prev, b.id]);
											showToast(isEquipped ? `تم إلغاء عرض شارة ${b.name}` : `تم تفعيل شارة ${b.name} ✅`);
										},
										className: `p-3 rounded-2xl border flex flex-col items-center text-center transition-all ${isEquipped ? "bg-amber-500/20 border-amber-400 shadow-md" : "bg-white/5 border-white/10 opacity-70"}`,
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: `w-12 h-12 rounded-2xl bg-gradient-to-tr ${b.color} flex items-center justify-center text-2xl shadow`,
												children: b.icon
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "text-xs font-black text-white mt-2",
												children: b.name
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "text-[10px] text-slate-400 mt-0.5",
												children: b.desc
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: `mt-2 px-2.5 py-0.5 rounded-full text-[9px] font-black ${isEquipped ? "bg-emerald-500 text-slate-950" : "bg-white/10 text-slate-300"}`,
												children: isEquipped ? "مفعلة ✅" : "تفعيل"
											})
										]
									}, b.id);
								})
							})]
						}),
						subModal === "cp_space" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-4 text-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-4 rounded-3xl bg-gradient-to-b from-pink-900/50 via-rose-950/60 to-slate-950 border border-pink-400/50 space-y-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-xs font-black text-pink-300",
										children: cpRingTier
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-center gap-4",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex flex-col items-center",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
													src: currentUser.avatar,
													alt: currentUser.displayName,
													referrerPolicy: "no-referrer",
													className: "w-16 h-16 rounded-full object-cover ring-2 ring-amber-400"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-xs font-black text-white mt-1",
													children: currentUser.displayName
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex flex-col items-center",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-3xl",
													children: "💞"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "text-[10px] font-mono font-black text-pink-300 mt-1",
													children: [cpLovePoints.toLocaleString(), " نقطة حب"]
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex flex-col items-center",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
													src: cpPartner.avatar,
													alt: cpPartner.displayName,
													referrerPolicy: "no-referrer",
													className: "w-16 h-16 rounded-full object-cover ring-2 ring-pink-400"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-xs font-black text-white mt-1",
													children: cpPartner.displayName
												})]
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "pt-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "block text-[11px] text-pink-200 mb-1",
											children: "تغيير شريك CP:"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
											value: cpPartnerId,
											onChange: (e) => setCpPartnerId(e.target.value),
											className: "w-full rounded-xl bg-slate-900 border border-pink-400/40 px-3 py-1.5 text-xs text-white text-center",
											children: users.filter((u) => u.id !== currentUser.id).map((u) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", {
												value: u.id,
												children: [
													u.displayName,
													" (ID: ",
													u.userCode,
													")"
												]
											}, u.id))
										})]
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-2 gap-2.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => {
										if (currentUser.coins < 500) {
											setSubModal("none");
											setActiveModal("wallet");
											return;
										}
										rechargeCoins(-500, "هدية خاتم CP");
										setCpLovePoints((p) => p + 1200);
										showToast("تم إرسال وردة وخاتم CP (+1,200 نقطة حب) 💍");
									},
									className: "py-2.5 rounded-2xl bg-gradient-to-r from-pink-500 to-rose-600 text-white font-black text-xs shadow-lg",
									children: "💍 إرسال خاتم حب (500 🪙)"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => {
										setCpRingTier("تاج العشق الإمبراطوري 👑💞");
										showToast("تم ترقية جناح الـ CP إلى المستوى الإمبراطوري! ✨");
									},
									className: "py-2.5 rounded-2xl bg-amber-500/20 border border-amber-400 text-amber-300 font-black text-xs",
									children: "✨ ترقية مستوى CP"
								})]
							})]
						}),
						subModal === "special_id" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-3 text-right",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-slate-300",
								children: "اقتنِ أيدي ملكي مميز يظهر فوراً في ملفك الشخصي وداخل جميع الغرف الصوتية:"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid grid-cols-2 gap-2.5",
								children: specialIdsCatalog.map((item) => {
									const isCurrent = currentUser.userCode === item.code;
									return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: `p-3 rounded-2xl border flex flex-col items-center justify-between text-center ${isCurrent ? "bg-amber-500/20 border-amber-400" : "bg-white/5 border-white/10"}`,
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "px-2 py-0.5 rounded-full bg-amber-400/20 text-amber-300 font-black text-[9px]",
												children: item.tag
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "my-2 px-3 py-1 rounded-xl bg-gradient-to-r from-amber-500 via-yellow-300 to-amber-600 text-slate-950 font-mono font-black text-sm shadow",
												children: ["ID: ", item.code]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "text-[11px] font-bold text-slate-200",
												children: item.label
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												onClick: () => {
													if (isCurrent) return;
													if (item.price > 0 && currentUser.coins < item.price) {
														setSubModal("none");
														setActiveModal("wallet");
														return;
													}
													if (item.price > 0) rechargeCoins(-item.price, `شراء أيدي مميز ${item.code}`);
													updateUserProfile({ userCode: item.code });
													showToast(`تم تفعيل الأيدي الملكي المميز ID:${item.code} بنجاح! 👑`);
												},
												className: `mt-2 w-full py-1.5 rounded-xl font-black text-xs ${isCurrent ? "bg-emerald-500 text-slate-950" : "bg-gradient-to-r from-amber-400 to-orange-500 text-slate-950"}`,
												children: isCurrent ? "مفعل حالياً ✅" : item.price === 0 ? "تفعيل مجاني" : `${item.price.toLocaleString()} 🪙`
											})
										]
									}, item.code);
								})
							})]
						}),
						subModal === "invite" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-4 text-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-4 rounded-3xl bg-gradient-to-b from-amber-500/20 to-slate-900 border border-amber-400/50 space-y-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-4xl",
										children: "🎁"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
										className: "text-sm font-black text-amber-300",
										children: "ادعُ أصدقاءك واربح 5,000 كوينز عن كل صديق!"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-xs text-slate-300",
										children: [
											"كود الدعوة الخاص بك:",
											" ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "font-mono font-black text-white",
												children: ["OOYUNI-", currentUser.userCode]
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => {
											navigator.clipboard?.writeText(`انضم إليّ في تطبيق ooyuni chat عبر كود الدعوة: OOYUNI-${currentUser.userCode}`);
											showToast("تم نسخ رابط وكود الدعوة بنجاح! 📋");
										},
										className: "px-5 py-2 rounded-xl bg-white/10 border border-amber-400/50 text-amber-300 font-black text-xs",
										children: "نسخ كود الدعوة 📋"
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								disabled: claimedInviteBonus,
								onClick: () => {
									setClaimedInviteBonus(true);
									rechargeCoins(2500, "مكافأة دعوة الأصدقاء");
									showToast("تم استلام +2,500 كوينز مكافأة الدعوة! 🎉");
								},
								className: `w-full py-3 rounded-2xl font-black text-xs ${claimedInviteBonus ? "bg-slate-800 text-slate-500" : "bg-gradient-to-r from-emerald-400 to-teal-500 text-slate-950 shadow-lg"}`,
								children: claimedInviteBonus ? "تم استلام مكافأة الدعوة اليومية ✅" : "🪙 استلام مكافأة الدعوة الفورية (+2,500 كوينز)"
							})]
						}),
						subModal === "records" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-3 text-right",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex items-center gap-1.5 bg-slate-900 p-1 rounded-2xl overflow-x-auto no-scrollbar",
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
									className: `flex-1 py-1.5 px-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-colors ${recordsFilter === f.id ? "bg-amber-400 text-slate-950" : "text-slate-400 hover:text-white"}`,
									children: f.label
								}, f.id))
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "space-y-2 max-h-80 overflow-y-auto",
								children: myRecords.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "py-10 text-center text-xs text-slate-400",
									children: "لا توجد سجلات مطابقة في هذا القسم حالياً."
								}) : myRecords.slice(0, 30).map((tx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "p-3 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-between gap-2 text-xs",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "text-right min-w-0",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "font-bold text-white flex items-center gap-1.5",
											children: [tx.type === "lucky_win" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "w-3.5 h-3.5 text-amber-400 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "truncate",
												children: tx.details
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-[10px] text-slate-400 font-mono mt-0.5",
											children: tx.timestamp
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "text-left shrink-0 font-mono tabular-nums font-black",
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
						}),
						subModal === "settings" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-3 text-right",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "p-3 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2 text-xs font-bold",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Volume2, { className: "w-4 h-4 text-amber-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "المؤثرات الصوتية داخل التطبيق" })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "checkbox",
										checked: soundEnabled,
										onChange: (e) => {
											setSoundEnabled(e.target.checked);
											showToast("تم تحديث إعدادات الصوت 🔊");
										},
										className: "w-4 h-4 accent-amber-400"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "p-3 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2 text-xs font-bold",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, { className: "w-4 h-4 text-teal-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "إشعارات الهدايا والرسائل الخاصة" })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "checkbox",
										checked: notifEnabled,
										onChange: (e) => {
											setNotifEnabled(e.target.checked);
											showToast("تم تحديث إعدادات الإشعارات 🔔");
										},
										className: "w-4 h-4 accent-amber-400"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "p-3 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2 text-xs font-bold",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "w-4 h-4 text-purple-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "إخفاء هويتي عند زيارة ملفات الآخرين (ميزة VIP)" })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "checkbox",
										checked: hideVisitorStatus,
										onChange: (e) => {
											setHideVisitorStatus(e.target.checked);
											showToast("تم تحديث خصوصية الزيارات 🔒");
										},
										className: "w-4 h-4 accent-amber-400"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									onClick: () => {
										showToast("تم تنظيف الذاكرة المؤقتة للتطبيق بنجاح (0 MB) ✨");
									},
									className: "w-full p-3 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between hover:bg-white/10",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2 text-xs font-bold text-rose-300",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "w-4 h-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "مسح التخزين المؤقت (Clear Cache)" })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs text-emerald-400 font-mono",
										children: "12.4 MB"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									onClick: () => {
										setSubModal("none");
										if (firebaseUser || adminSession) signOutCloud();
										else returnToAuthScreen();
									},
									className: "w-full p-3 rounded-2xl bg-rose-500/15 border border-rose-400/35 flex items-center justify-center gap-2 text-xs font-black text-rose-200 hover:bg-rose-500/25 transition-colors",
									children: [firebaseUser || adminSession ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { className: "w-4 h-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogIn, { className: "w-4 h-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: firebaseUser || adminSession ? "تسجيل الخروج والعودة لصفحة الدخول" : "الانتقال لصفحة تسجيل الدخول" })]
								})
							]
						}),
						subModal === "about" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-3 text-center",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: "/logo.png",
									alt: "فوكاشات",
									referrerPolicy: "no-referrer",
									className: "w-20 h-20 mx-auto rounded-2xl object-cover ring-1 ring-amber-400/50 shadow-lg"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
									className: "text-base font-black text-white",
									children: "فوكاشات • Fokashat VIP"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-slate-400",
									children: "الإصدار الملكي v4.8.0 VIP"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-slate-300 leading-relaxed",
									children: "منصة الدردشة الصوتية الاجتماعية الأولى للغرف الصوتية التفاعلية، هدايا الحظ، الصواريخ، الألعاب الحية، المتجر الملكي، ونظام الوكالات وVIP."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "pt-2 flex items-center justify-center gap-2",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => {
											setSubModal("none");
											setActiveModal("messages");
										},
										className: "px-4 py-2 rounded-xl bg-amber-400 text-slate-950 font-black text-xs",
										children: "التواصل مع خدمة العملاء 💬"
									})
								})
							]
						})
					]
				})
			})
		]
	});
};
export { ProfileScreen };
