import { n as __toESM } from "./rolldown-runtime-CO0Nlsmt.js";
import { E as ShieldCheck, Ft as ArrowLeft, It as require_react, K as Mail, Ot as Calendar, V as Mic, Y as Lock, at as Globe, dt as EyeOff, it as Headphones, l as User, o as Volume2, q as LogOut, ut as Eye, y as Sparkles } from "./icons-CSx0WKXF.js";
import { C as buildVoiceAvatarSvg, S as VOICE_COUNTRIES, i as room_bg_midnight_lounge_1795294231147_default, o as useApp } from "./index-tXJX2Qqq.js";
import { t as require_jsx_runtime } from "./react-vendor-BIdqWr74.js";
// src/components/AuthScreen.tsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
var AuthScreen = () => {
	const { firebaseUser, authLoading, authError, clearAuthError, needsProfileCompletion, signInWithGoogleCloud, registerWithEmailProfile, loginWithEmail, completeGoogleOnboardingProfile, signOutCloud, enterAsGuestDemo, adminAuthStatus, claimAdminEmailAccount } = useApp();
	const [mode, setMode] = (0, import_react.useState)("login");
	const [showPassword, setShowPassword] = (0, import_react.useState)(false);
	const [localError, setLocalError] = (0, import_react.useState)(null);
	const [displayName, setDisplayName] = (0, import_react.useState)("");
	const [email, setEmail] = (0, import_react.useState)("");
	const [password, setPassword] = (0, import_react.useState)("");
	const [confirmPassword, setConfirmPassword] = (0, import_react.useState)("");
	const [adminDisplayName, setAdminDisplayName] = (0, import_react.useState)("مدير التطبيق");
	const [selectedCountryName, setSelectedCountryName] = (0, import_react.useState)("السعودية");
	const [ageInput, setAgeInput] = (0, import_react.useState)("22");
	const [gender, setGender] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		if (needsProfileCompletion && firebaseUser) {
			if (!displayName.trim() && firebaseUser.displayName) setDisplayName(firebaseUser.displayName);
		}
	}, [needsProfileCompletion, firebaseUser]);
	const selectedCountry = VOICE_COUNTRIES.find((c) => c.name === selectedCountryName) || VOICE_COUNTRIES[0];
	const switchMode = (nextMode) => {
		setMode(nextMode);
		setLocalError(null);
		clearAuthError();
	};
	const validateProfileFields = () => {
		if (displayName.trim().length < 2) {
			setLocalError("يرجى إدخال اسم الحساب (حرفان على الأقل).");
			return null;
		}
		const parsedAge = Number(ageInput);
		if (!Number.isFinite(parsedAge) || parsedAge < 13 || parsedAge > 99) {
			setLocalError("يرجى إدخال السن بشكل صحيح (بين 13 و 99 سنة).");
			return null;
		}
		if (gender !== "female" && gender !== "male") {
			setLocalError("يرجى تحديد الجنس (أنثى أو ذكر).");
			return null;
		}
		return Math.floor(parsedAge);
	};
	const handleLoginSubmit = async (e) => {
		e.preventDefault();
		setLocalError(null);
		clearAuthError();
		if (!email.trim() || !email.includes("@")) {
			setLocalError("يرجى إدخال بريد إلكتروني صحيح.");
			return;
		}
		if (password.length < 6) {
			setLocalError("كلمة المرور يجب أن تكون 6 أحرف على الأقل.");
			return;
		}
		await loginWithEmail(email.trim(), password);
	};
	const handleRegisterSubmit = async (e) => {
		e.preventDefault();
		setLocalError(null);
		clearAuthError();
		const validAge = validateProfileFields();
		if (validAge === null || gender !== "female" && gender !== "male") return;
		if (!email.trim() || !email.includes("@")) {
			setLocalError("يرجى إدخال بريد إلكتروني صحيح.");
			return;
		}
		if (password.length < 6) {
			setLocalError("كلمة المرور يجب أن تحتوي على 6 أحرف على الأقل.");
			return;
		}
		await registerWithEmailProfile({
			displayName: displayName.trim(),
			email: email.trim(),
			password,
			country: selectedCountry.name,
			countryFlag: selectedCountry.flag,
			age: validAge,
			gender,
			avatar: buildVoiceAvatarSvg(gender, displayName.trim())
		});
	};
	const handleCompleteGoogleSubmit = async (e) => {
		e.preventDefault();
		setLocalError(null);
		clearAuthError();
		const validAge = validateProfileFields();
		if (validAge === null || gender !== "female" && gender !== "male") return;
		await completeGoogleOnboardingProfile({
			displayName: displayName.trim(),
			country: selectedCountry.name,
			countryFlag: selectedCountry.flag,
			age: validAge,
			gender,
			avatar: firebaseUser?.photoURL || buildVoiceAvatarSvg(gender, displayName.trim())
		});
	};
	const handleAdminSetupSubmit = async (e) => {
		e.preventDefault();
		setLocalError(null);
		clearAuthError();
		const cleanEmail = email.trim();
		if (!cleanEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail)) {
			setLocalError("يرجى إدخال بريد إلكتروني صحيح لحساب المدير.");
			return;
		}
		if (password.length < 6) {
			setLocalError("كلمة سر لوحة التحكم يجب أن تكون 6 أحرف على الأقل.");
			return;
		}
		if (password !== confirmPassword) {
			setLocalError("كلمتا المرور غير متطابقتين.");
			return;
		}
		await claimAdminEmailAccount({
			email: cleanEmail,
			password,
			displayName: adminDisplayName.trim() || "مدير التطبيق"
		});
	};
	const activeError = localError || authError;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh w-full bg-[#070a12] text-slate-100 font-tajawal flex items-stretch justify-center relative overflow-x-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "pointer-events-none fixed inset-0 opacity-60",
			style: { background: "radial-gradient(circle at 18% 20%, rgba(245, 158, 11, 0.14), transparent 45%), radial-gradient(circle at 82% 78%, rgba(99, 102, 241, 0.16), transparent 48%)" }
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative z-10 w-full max-w-6xl mx-auto px-4 py-6 sm:py-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "lg:col-span-6 flex flex-col justify-between gap-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative rounded-3xl overflow-hidden border border-white/10 bg-[#0d1221] shadow-2xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: room_bg_midnight_lounge_1795294231147_default,
							alt: "أجواء غرف الدردشة الصوتية المباشرة",
							className: "w-full h-48 sm:h-64 lg:h-80 object-cover opacity-55"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-[#070a12] via-[#070a12]/70 to-transparent" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative lg:absolute lg:inset-x-0 lg:bottom-0 p-5 sm:p-7 space-y-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: "/logo.png",
									alt: "شعار فوكاشات",
									referrerPolicy: "no-referrer",
									className: "w-14 h-14 rounded-2xl object-cover ring-1 ring-amber-400/50 shadow-lg shadow-amber-500/25 shrink-0"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
									className: "text-xl sm:text-2xl font-black tracking-tight text-white",
									children: ["فوكاشات ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-amber-400",
										children: "VIP"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs sm:text-sm text-slate-300",
									children: "منصة الغرف الصوتية المباشرة والمايكات التفاعلية"
								})] })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-2xl bg-[#0b101d]/90 border border-white/10 p-4 flex items-center justify-between gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-3 min-w-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "w-10 h-10 rounded-xl bg-amber-400/15 border border-amber-400/35 flex items-center justify-center text-amber-300 shrink-0",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mic, { className: "w-5 h-5" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "min-w-0",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-xs sm:text-sm font-bold text-white truncate",
											children: "مجلس الطرب والدردشة الصوتية"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-[11px] text-slate-400",
											children: "8 مايكات صوتية نقية · هدايا ومنافسات مباشرة"
										})]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex items-end gap-1 h-9 shrink-0",
									"aria-hidden": "true",
									children: [
										18,
										34,
										52,
										28,
										64,
										44,
										72,
										38,
										56,
										26,
										48,
										30,
										60,
										24
									].slice(0, 9).map((h, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "w-1 rounded-full bg-gradient-to-t from-amber-500 to-rose-400",
										style: { height: `${Math.max(20, Math.round(h / 72 * 100))}%` }
									}, i))
								})]
							})]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "hidden sm:grid grid-cols-3 gap-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl bg-[#0d1322]/90 border border-white/10 p-4 space-y-1.5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Headphones, { className: "w-5 h-5 text-amber-400" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xs font-black text-white",
									children: "غرف صوتية حية"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[11px] text-slate-400 leading-relaxed",
									children: "انضم إلى جلسات السمر والطرب والألعاب الصوتية مع أصدقاء من بلدك."
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl bg-[#0d1322]/90 border border-white/10 p-4 space-y-1.5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Volume2, { className: "w-5 h-5 text-sky-400" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xs font-black text-white",
									children: "هوية صوتية مخصصة"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[11px] text-slate-400 leading-relaxed",
									children: "علم بلدك وعمرك واسمك الملكي يظهر معك على كل مايك تدخله."
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl bg-[#0d1322]/90 border border-white/10 p-4 space-y-1.5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "w-5 h-5 text-rose-400" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xs font-black text-white",
									children: "هدايا ومضاعفات VIP"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[11px] text-slate-400 leading-relaxed",
									children: "اربح من هدايا الحظ وارتقِ بمستوى الثروة والإطارات الخاصة."
								})
							]
						})
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "lg:col-span-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "rounded-3xl bg-[#0d1322]/95 border border-white/12 p-5 sm:p-8 shadow-2xl space-y-5",
					children: needsProfileCompletion && firebaseUser ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: handleCompleteGoogleSubmit,
						className: "space-y-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between gap-3 border-b border-white/10 pb-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-3 min-w-0",
									children: [firebaseUser.photoURL ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: firebaseUser.photoURL,
										alt: firebaseUser.displayName || "",
										referrerPolicy: "no-referrer",
										className: "w-12 h-12 rounded-2xl object-cover ring-2 ring-amber-400/70 shrink-0"
									}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "w-12 h-12 rounded-2xl bg-amber-400/15 border border-amber-400/40 flex items-center justify-center text-amber-300 shrink-0",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { className: "w-6 h-6" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "min-w-0",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
											className: "text-lg font-black text-white truncate",
											children: "أكمل بيانات ملفك الصوتي"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs text-slate-400 truncate",
											dir: "ltr",
											children: firebaseUser.email
										})]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => void signOutCloud(),
									className: "min-h-[44px] px-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-bold text-slate-300 flex items-center gap-1.5 shrink-0 transition-colors",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { className: "w-4 h-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "تبديل" })]
								})]
							}),
							activeError && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "rounded-2xl bg-rose-500/15 border border-rose-400/40 px-4 py-3 text-xs font-bold text-rose-200 leading-relaxed",
								children: activeError
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "block text-xs font-bold text-slate-200 mb-1.5",
								children: "اسم الحساب (يظهر على المايك)"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { className: "w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "text",
									value: displayName,
									onChange: (e) => setDisplayName(e.target.value),
									placeholder: "مثال: سلطان الطرب أو ندى",
									maxLength: 40,
									required: true,
									className: "w-full min-h-[46px] rounded-2xl bg-slate-950/90 border border-white/15 pr-10 pl-4 text-sm text-white placeholder:text-slate-500 focus:border-amber-400 focus:outline-none transition-colors"
								})]
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-1 sm:grid-cols-2 gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "block text-xs font-bold text-slate-200 mb-1.5",
									children: "البلد"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Globe, { className: "w-4 h-4 text-amber-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
										value: selectedCountryName,
										onChange: (e) => setSelectedCountryName(e.target.value),
										className: "w-full min-h-[46px] rounded-2xl bg-slate-950/90 border border-white/15 pr-10 pl-3 text-sm text-white focus:border-amber-400 focus:outline-none transition-colors",
										children: VOICE_COUNTRIES.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", {
											value: c.name,
											children: [
												c.flag,
												" ",
												c.name
											]
										}, c.name))
									})]
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "block text-xs font-bold text-slate-200 mb-1.5",
									children: "السن"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { className: "w-4 h-4 text-sky-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "number",
										min: 13,
										max: 99,
										value: ageInput,
										onChange: (e) => setAgeInput(e.target.value),
										placeholder: "22",
										required: true,
										className: "w-full min-h-[46px] rounded-2xl bg-slate-950/90 border border-white/15 pr-10 pl-4 text-sm font-mono tabular-nums text-white placeholder:text-slate-500 focus:border-amber-400 focus:outline-none transition-colors"
									})]
								})] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "block text-xs font-bold text-slate-200 mb-1.5",
								children: "الجنس"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-2 gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => setGender("female"),
									className: `min-h-[48px] rounded-2xl border font-black text-sm flex items-center justify-center gap-2 transition-all ${gender === "female" ? "bg-rose-500/20 border-rose-400 text-rose-200 shadow-lg shadow-rose-500/10" : "bg-slate-950/70 border-white/12 text-slate-300 hover:border-white/25"}`,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-base",
										children: "♀"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "أنثى" })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => setGender("male"),
									className: `min-h-[48px] rounded-2xl border font-black text-sm flex items-center justify-center gap-2 transition-all ${gender === "male" ? "bg-sky-500/20 border-sky-400 text-sky-200 shadow-lg shadow-sky-500/10" : "bg-slate-950/70 border-white/12 text-slate-300 hover:border-white/25"}`,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-base",
										children: "♂"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "ذكر" })]
								})]
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "submit",
								disabled: authLoading,
								className: "w-full min-h-[48px] rounded-2xl bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500 hover:brightness-105 disabled:opacity-60 text-slate-950 font-black text-sm flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 transition-all",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mic, { className: "w-4 h-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: authLoading ? "جاري الحفظ..." : "دخول إلى الغرف الصوتية" })]
							})
						]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-xl sm:text-2xl font-black text-white",
								children: mode === "login" ? "تسجيل الدخول إلى فوكاشات" : mode === "admin_setup" ? "إعداد حساب المدير الجديد (لوحة التحكم)" : "إنشاء حساب صوتي جديد"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs sm:text-sm text-slate-400",
								children: mode === "login" ? "سجّل دخولك للانضمام إلى المايكات والغرف الصوتية المباشرة، أو أدخل بريد المدير للدخول إلى لوحة التحكم." : mode === "admin_setup" ? "تم مسح جميع حسابات المديرين القديمة. أدخل بريدك الإلكتروني النظيف وكلمة السر لتعيين حساب الإدارة الوحيد." : "أنشئ هويتك الصوتية واختر بلدك وعمرك للانضمام فوراً."
							})]
						}),
						adminAuthStatus && !adminAuthStatus.configured && mode !== "admin_setup" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl bg-emerald-500/12 border border-emerald-400/40 p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start gap-2.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "w-5 h-5 text-emerald-400 shrink-0 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-xs text-emerald-100 leading-relaxed",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-black text-emerald-300",
										children: "حساب لوحة التحكم جاهز للتعيين النظيف"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-emerald-200/85",
										children: "تم حذف جميع حسابات المديرين السابقة. أنشئ بريدك الإلكتروني وكلمة السر الآن."
									})]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => switchMode("admin_setup"),
								className: "min-h-[38px] px-3.5 py-1.5 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-black text-xs shrink-0 transition-colors",
								children: "إعداد حساب المدير"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: `grid gap-1.5 p-1 rounded-2xl bg-slate-950/90 border border-white/10 ${adminAuthStatus && !adminAuthStatus.configured ? "grid-cols-3" : "grid-cols-2"}`,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => switchMode("login"),
									className: `min-h-[44px] rounded-xl text-xs sm:text-sm font-black transition-all ${mode === "login" ? "bg-gradient-to-r from-amber-400 to-orange-500 text-slate-950 shadow" : "text-slate-300 hover:text-white"}`,
									children: "تسجيل الدخول"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => switchMode("register"),
									className: `min-h-[44px] rounded-xl text-xs sm:text-sm font-black transition-all ${mode === "register" ? "bg-gradient-to-r from-amber-400 to-orange-500 text-slate-950 shadow" : "text-slate-300 hover:text-white"}`,
									children: "حساب جديد"
								}),
								adminAuthStatus && !adminAuthStatus.configured && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => switchMode("admin_setup"),
									className: `min-h-[44px] rounded-xl text-xs sm:text-sm font-black transition-all ${mode === "admin_setup" ? "bg-gradient-to-r from-emerald-400 to-teal-500 text-slate-950 shadow" : "text-emerald-300 hover:text-emerald-200"}`,
									children: "حساب المدير"
								})
							]
						}),
						activeError && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "rounded-2xl bg-rose-500/15 border border-rose-400/40 px-4 py-3 text-xs font-bold text-rose-200 leading-relaxed",
							children: activeError
						}),
						mode !== "admin_setup" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							disabled: authLoading,
							onClick: () => void signInWithGoogleCloud(),
							className: "w-full min-h-[48px] rounded-2xl bg-white hover:bg-slate-100 disabled:opacity-60 text-slate-900 font-black text-sm flex items-center justify-center gap-3 shadow-lg transition-all",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
								className: "w-5 h-5 shrink-0",
								viewBox: "0 0 24 24",
								"aria-hidden": "true",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
										fill: "#4285F4",
										d: "M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17Z"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
										fill: "#34A853",
										d: "M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.11-6.72-4.96H1.29v3.14C3.26 21.3 7.31 24 12 24Z"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
										fill: "#FBBC05",
										d: "M5.28 14.24c-.24-.72-.38-1.49-.38-2.24s.14-1.52.38-2.24V6.62H1.29C.47 8.24 0 10.06 0 12s.47 3.76 1.29 5.38l3.99-3.14Z"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
										fill: "#EA4335",
										d: "M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.26 2.7 1.29 6.62l3.99 3.14c.95-2.85 3.6-4.96 6.72-4.96Z"
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: mode === "login" ? "الدخول السريع بحساب Google" : "التسجيل السريع بحساب Google" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3 text-[11px] text-slate-400",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-px flex-1 bg-white/10" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: mode === "login" ? "أو الدخول بالبريد الإلكتروني" : "أو إنشاء حساب بالبريد الإلكتروني" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-px flex-1 bg-white/10" })
							]
						})] }),
						mode === "admin_setup" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							onSubmit: handleAdminSetupSubmit,
							className: "space-y-3.5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "block text-xs font-bold text-slate-200 mb-1.5",
									children: "اسم المدير الظاهر في لوحة التحكم"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { className: "w-4 h-4 text-emerald-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "text",
										value: adminDisplayName,
										onChange: (e) => setAdminDisplayName(e.target.value),
										placeholder: "مدير التطبيق",
										maxLength: 40,
										required: true,
										className: "w-full min-h-[46px] rounded-2xl bg-slate-950/90 border border-white/15 pr-10 pl-4 text-sm text-white placeholder:text-slate-500 focus:border-emerald-400 focus:outline-none transition-colors"
									})]
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "block text-xs font-bold text-slate-200 mb-1.5",
									children: "البريد الإلكتروني النظيف للمدير"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "w-4 h-4 text-emerald-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "email",
										dir: "ltr",
										value: email,
										onChange: (e) => setEmail(e.target.value),
										placeholder: "admin@yourdomain.com",
										required: true,
										className: "w-full min-h-[46px] rounded-2xl bg-slate-950/90 border border-white/15 pr-10 pl-4 text-sm text-white placeholder:text-slate-500 focus:border-emerald-400 focus:outline-none transition-colors text-left"
									})]
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "block text-xs font-bold text-slate-200 mb-1.5",
									children: "كلمة سر لوحة التحكم (6 أحرف على الأقل)"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: showPassword ? "text" : "password",
											dir: "ltr",
											value: password,
											onChange: (e) => setPassword(e.target.value),
											placeholder: "••••••••",
											required: true,
											minLength: 6,
											className: "w-full min-h-[46px] rounded-2xl bg-slate-950/90 border border-white/15 pr-10 pl-11 text-sm text-white placeholder:text-slate-500 focus:border-emerald-400 focus:outline-none transition-colors text-left"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											onClick: () => setShowPassword((v) => !v),
											"aria-label": showPassword ? "إخفاء كلمة المرور" : "إظهار كلمة المرور",
											className: "absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-xl flex items-center justify-center text-slate-400 hover:text-white transition-colors",
											children: showPassword ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EyeOff, { className: "w-4 h-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "w-4 h-4" })
										})
									]
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "block text-xs font-bold text-slate-200 mb-1.5",
									children: "تأكيد كلمة السر"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: showPassword ? "text" : "password",
										dir: "ltr",
										value: confirmPassword,
										onChange: (e) => setConfirmPassword(e.target.value),
										placeholder: "••••••••",
										required: true,
										minLength: 6,
										className: "w-full min-h-[46px] rounded-2xl bg-slate-950/90 border border-white/15 pr-10 pl-4 text-sm text-white placeholder:text-slate-500 focus:border-emerald-400 focus:outline-none transition-colors text-left"
									})]
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "submit",
									disabled: authLoading,
									className: "w-full min-h-[48px] rounded-2xl bg-gradient-to-r from-emerald-400 via-emerald-500 to-teal-500 hover:brightness-105 disabled:opacity-60 text-slate-950 font-black text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 transition-all",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "w-4 h-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: authLoading ? "جاري تفعيل حساب المدير..." : "حفظ ودخول لوحة التحكم فوراً" })]
								})
							]
						}) : mode === "login" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							onSubmit: handleLoginSubmit,
							className: "space-y-3.5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "block text-xs font-bold text-slate-200 mb-1.5",
									children: "البريد الإلكتروني"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "email",
										dir: "ltr",
										value: email,
										onChange: (e) => setEmail(e.target.value),
										placeholder: "name@example.com",
										required: true,
										className: "w-full min-h-[46px] rounded-2xl bg-slate-950/90 border border-white/15 pr-10 pl-4 text-sm text-white placeholder:text-slate-500 focus:border-amber-400 focus:outline-none transition-colors text-left"
									})]
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "block text-xs font-bold text-slate-200 mb-1.5",
									children: "كلمة المرور"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: showPassword ? "text" : "password",
											dir: "ltr",
											value: password,
											onChange: (e) => setPassword(e.target.value),
											placeholder: "••••••••",
											required: true,
											minLength: 6,
											className: "w-full min-h-[46px] rounded-2xl bg-slate-950/90 border border-white/15 pr-10 pl-11 text-sm text-white placeholder:text-slate-500 focus:border-amber-400 focus:outline-none transition-colors text-left"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											onClick: () => setShowPassword((v) => !v),
											"aria-label": showPassword ? "إخفاء كلمة المرور" : "إظهار كلمة المرور",
											className: "absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-xl flex items-center justify-center text-slate-400 hover:text-white transition-colors",
											children: showPassword ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EyeOff, { className: "w-4 h-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "w-4 h-4" })
										})
									]
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "submit",
									disabled: authLoading,
									className: "w-full min-h-[48px] rounded-2xl bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500 hover:brightness-105 disabled:opacity-60 text-slate-950 font-black text-sm flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 transition-all",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mic, { className: "w-4 h-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: authLoading ? "جاري تسجيل الدخول..." : "تسجيل الدخول" })]
								})
							]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							onSubmit: handleRegisterSubmit,
							className: "space-y-3.5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "block text-xs font-bold text-slate-200 mb-1.5",
									children: "اسم الحساب"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { className: "w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "text",
										value: displayName,
										onChange: (e) => setDisplayName(e.target.value),
										placeholder: "الاسم الذي يظهر في الغرف الصوتية",
										maxLength: 40,
										required: true,
										className: "w-full min-h-[46px] rounded-2xl bg-slate-950/90 border border-white/15 pr-10 pl-4 text-sm text-white placeholder:text-slate-500 focus:border-amber-400 focus:outline-none transition-colors"
									})]
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid grid-cols-1 sm:grid-cols-2 gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "block text-xs font-bold text-slate-200 mb-1.5",
										children: "البلد"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "relative",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Globe, { className: "w-4 h-4 text-amber-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
											value: selectedCountryName,
											onChange: (e) => setSelectedCountryName(e.target.value),
											className: "w-full min-h-[46px] rounded-2xl bg-slate-950/90 border border-white/15 pr-10 pl-3 text-sm text-white focus:border-amber-400 focus:outline-none transition-colors",
											children: VOICE_COUNTRIES.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", {
												value: c.name,
												children: [
													c.flag,
													" ",
													c.name
												]
											}, c.name))
										})]
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "block text-xs font-bold text-slate-200 mb-1.5",
										children: "السن"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "relative",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { className: "w-4 h-4 text-sky-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "number",
											min: 13,
											max: 99,
											value: ageInput,
											onChange: (e) => setAgeInput(e.target.value),
											placeholder: "22",
											required: true,
											className: "w-full min-h-[46px] rounded-2xl bg-slate-950/90 border border-white/15 pr-10 pl-4 text-sm font-mono tabular-nums text-white placeholder:text-slate-500 focus:border-amber-400 focus:outline-none transition-colors"
										})]
									})] })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "block text-xs font-bold text-slate-200 mb-1.5",
									children: "الجنس"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid grid-cols-2 gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => setGender("female"),
										className: `min-h-[48px] rounded-2xl border font-black text-sm flex items-center justify-center gap-2 transition-all ${gender === "female" ? "bg-rose-500/20 border-rose-400 text-rose-200 shadow-lg shadow-rose-500/10" : "bg-slate-950/70 border-white/12 text-slate-300 hover:border-white/25"}`,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-base",
											children: "♀"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "أنثى" })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => setGender("male"),
										className: `min-h-[48px] rounded-2xl border font-black text-sm flex items-center justify-center gap-2 transition-all ${gender === "male" ? "bg-sky-500/20 border-sky-400 text-sky-200 shadow-lg shadow-sky-500/10" : "bg-slate-950/70 border-white/12 text-slate-300 hover:border-white/25"}`,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-base",
											children: "♂"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "ذكر" })]
									})]
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "block text-xs font-bold text-slate-200 mb-1.5",
									children: "البريد الإلكتروني"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "email",
										dir: "ltr",
										value: email,
										onChange: (e) => setEmail(e.target.value),
										placeholder: "name@example.com",
										required: true,
										className: "w-full min-h-[46px] rounded-2xl bg-slate-950/90 border border-white/15 pr-10 pl-4 text-sm text-white placeholder:text-slate-500 focus:border-amber-400 focus:outline-none transition-colors text-left"
									})]
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "block text-xs font-bold text-slate-200 mb-1.5",
									children: "كلمة المرور"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: showPassword ? "text" : "password",
											dir: "ltr",
											value: password,
											onChange: (e) => setPassword(e.target.value),
											placeholder: "6 أحرف على الأقل",
											required: true,
											minLength: 6,
											className: "w-full min-h-[46px] rounded-2xl bg-slate-950/90 border border-white/15 pr-10 pl-11 text-sm text-white placeholder:text-slate-500 focus:border-amber-400 focus:outline-none transition-colors text-left"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											onClick: () => setShowPassword((v) => !v),
											"aria-label": showPassword ? "إخفاء كلمة المرور" : "إظهار كلمة المرور",
											className: "absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-xl flex items-center justify-center text-slate-400 hover:text-white transition-colors",
											children: showPassword ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EyeOff, { className: "w-4 h-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "w-4 h-4" })
										})
									]
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "submit",
									disabled: authLoading,
									className: "w-full min-h-[48px] rounded-2xl bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500 hover:brightness-105 disabled:opacity-60 text-slate-950 font-black text-sm flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 transition-all",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "w-4 h-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: authLoading ? "جاري إنشاء الحساب..." : "إنشاء الحساب ودخول الدردشة" })]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "pt-2 border-t border-white/10 flex items-center justify-between gap-3",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: enterAsGuestDemo,
								className: "min-h-[44px] w-full rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-xs font-bold text-slate-300 hover:text-white flex items-center justify-center gap-2 transition-colors",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "تصفح الغرف كزائر للمعاينة" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "w-4 h-4" })]
							})
						})
					] })
				})
			})]
		})]
	});
};
export { AuthScreen };
