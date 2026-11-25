import React, { useEffect, useState } from 'react';
import {
  Download,
  Smartphone,
  X,
  Share,
  MoreVertical,
  CheckCircle2,
  WifiOff,
  ExternalLink,
  Copy,
  Check,
  PackageCheck,
} from 'lucide-react';
import { usePWAInstall, useOnlineStatus } from '../hooks/usePWAInstall';
import { resolveApiUrl } from '../utils/apiOrigin';

const DISMISS_SESSION_KEY = 'fokashat_pwa_prompt_dismissed_v2';

export interface ApkReleaseInfo {
  available: boolean;
  source: 'local_file' | 'external_url' | 'unbuilt';
  downloadUrl: string | null;
  versionName: string;
  fileName: string;
  nativeProjectReady?: boolean;
}

let cachedApkRelease: ApkReleaseInfo | null = null;
const apkListeners = new Set<(info: ApkReleaseInfo | null) => void>();

export async function refreshApkReleaseInfo(): Promise<ApkReleaseInfo | null> {
  if (typeof fetch === 'undefined') return null;
  try {
    const res = await fetch(resolveApiUrl('/api/app-release'), { cache: 'no-store' });
    if (!res.ok || !res.headers.get('content-type')?.includes('application/json')) return null;
    const data = (await res.json()) as ApkReleaseInfo;
    cachedApkRelease = data;
    apkListeners.forEach((cb) => cb(data));
    return data;
  } catch {
    return null;
  }
}

export function useApkRelease(): ApkReleaseInfo | null {
  const [info, setInfo] = useState<ApkReleaseInfo | null>(() => cachedApkRelease);

  useEffect(() => {
    const listener = (next: ApkReleaseInfo | null) => setInfo(next);
    apkListeners.add(listener);
    void refreshApkReleaseInfo();
    return () => {
      apkListeners.delete(listener);
    };
  }, []);

  return info;
}

function triggerDirectApkDownload(info: ApkReleaseInfo) {
  if (typeof document === 'undefined') return;
  const href =
    info.source === 'external_url' && info.downloadUrl
      ? info.downloadUrl
      : resolveApiUrl('/downloads/fokashat.apk');
  const link = document.createElement('a');
  link.href = href;
  link.download = info.fileName || 'fokashat-vip.apk';
  link.rel = 'noopener noreferrer';
  document.body.appendChild(link);
  link.click();
  link.remove();
}

function getStandaloneAppUrl(): string {
  if (typeof window === 'undefined') return '/';
  return window.location.origin + '/';
}

function getAndroidChromeIntentUrl(): string {
  if (typeof window === 'undefined') return '/';
  const hostAndPath = window.location.host + '/';
  return `intent://${hostAndPath}#Intent;scheme=https;package=com.android.chrome;end`;
}

interface InstallGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
  isIOS: boolean;
  isAndroid: boolean;
  isInIframe: boolean;
  isInAppBrowser: boolean;
  apkRelease: ApkReleaseInfo | null;
}

const InstallGuideModal: React.FC<InstallGuideModalProps> = ({
  isOpen,
  onClose,
  isIOS,
  isAndroid,
  isInIframe,
  isInAppBrowser,
  apkRelease,
}) => {
  const [copiedUrl, setCopiedUrl] = useState(false);

  if (!isOpen) return null;

  const standaloneUrl = getStandaloneAppUrl();
  const chromeIntentUrl = getAndroidChromeIntentUrl();

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(standaloneUrl);
      setCopiedUrl(true);
      window.setTimeout(() => setCopiedUrl(false), 2500);
    } catch {
      setCopiedUrl(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-[120] bg-black/75 backdrop-blur-sm flex items-end sm:items-center justify-center p-3 font-tajawal"
      onClick={onClose}
    >
      <div
        className="w-full max-w-sm rounded-3xl bg-[#101626] border border-amber-400/35 p-5 shadow-2xl space-y-4 text-right max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2.5">
            <img
              src="/pwa-192x192.png"
              alt="فوكاشات"
              referrerPolicy="no-referrer"
              className="w-12 h-12 rounded-2xl border border-amber-400/45 object-cover shrink-0 shadow-lg"
            />
            <div>
              <h3 className="text-sm font-black text-white">
                {isIOS
                  ? 'تثبيت تطبيق فوكاشات على آيفون'
                  : 'تنزيل وتثبيت فوكاشات للأندرويد (APK)'}
              </h3>
              <p className="text-[11px] text-slate-400">
                يعمل كتطبيق مستقل بأيقونة فوكاشات ومتصل مباشرة بالسيرفرات
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-xl bg-white/8 text-slate-300 hover:text-white flex items-center justify-center"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Direct APK Download Section (when APK binary/link is available) */}
        {!isIOS && (
          <div className="rounded-2xl bg-emerald-500/10 border border-emerald-400/35 p-3.5 space-y-2 text-xs">
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-1.5 font-black text-emerald-300">
                <PackageCheck className="w-4 h-4 shrink-0" />
                <span>نسخة أندرويد المستقلة (APK)</span>
              </div>
              {apkRelease?.available && (
                <span className="font-mono text-[10px] px-2 py-0.5 rounded-full bg-emerald-400/20 text-emerald-200">
                  v{apkRelease.versionName}
                </span>
              )}
            </div>
            {apkRelease?.available ? (
              <>
                <p className="text-[11px] text-slate-300 leading-relaxed">
                  ملف التثبيت المباشر جاهز! نزّله وثبّته على هاتفك الأندرويد ليفتح فوراً بدون متصفح ومتصل بالسيرفر وقاعدة البيانات.
                </p>
                <button
                  type="button"
                  onClick={() => triggerDirectApkDownload(apkRelease)}
                  className="w-full min-h-[42px] rounded-xl bg-gradient-to-r from-emerald-400 to-teal-500 hover:brightness-105 text-slate-950 font-black text-xs flex items-center justify-center gap-2 shadow-lg"
                >
                  <Download className="w-4 h-4" />
                  <span>تنزيل ملف فوكاشات ({apkRelease.fileName})</span>
                </button>
              </>
            ) : (
              <p className="text-[11px] text-slate-300 leading-relaxed">
                تم تجهيز مشروع الأندرويد الكامل في الكود لبناء ملف APK مستقل. بمجرد استخراج ملف <span className="font-mono text-amber-300">fokashat.apk</span> وربط رابطه من لوحة التحكم (تبويب قاعدة البيانات)، سيتيح هذا الزر تنزيل الـ APK مباشرة.
              </p>
            )}
          </div>
        )}

        {(isInIframe || isInAppBrowser) && !isIOS ? (
          <div className="space-y-3 text-xs text-slate-200 leading-relaxed">
            <div className="rounded-2xl bg-amber-500/10 border border-amber-400/35 p-3.5 space-y-1.5">
              <div className="font-black text-amber-300">
                أو افتح الرابط مباشرة في متصفح Chrome للتثبيت الفوري:
              </div>
              <p className="text-[11px] text-slate-300">
                المعاينة المدمجة أو المتصفح الداخلي يمنع تثبيت التطبيقات تلقائياً. افتح التطبيق في متصفح Chrome واضغط «تثبيت» ليتم تثبيته فوراً كتطبيق أندرويد مستقل.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-2">
              <a
                href={isAndroid && isInAppBrowser ? chromeIntentUrl : standaloneUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full min-h-[44px] rounded-2xl bg-gradient-to-r from-emerald-400 to-teal-500 hover:brightness-105 text-slate-950 font-black text-xs flex items-center justify-center gap-2 shadow-lg"
              >
                <ExternalLink className="w-4 h-4" />
                <span>فتح التطبيق في متصفح Chrome للتثبيت</span>
              </a>

              <button
                type="button"
                onClick={() => void handleCopyLink()}
                className="w-full min-h-[42px] rounded-2xl bg-white/8 hover:bg-white/14 border border-white/15 text-slate-100 font-bold text-xs flex items-center justify-center gap-2 transition-colors"
              >
                {copiedUrl ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-300">تم نسخ رابط التطبيق — الصقه في Chrome</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-amber-300" />
                    <span>نسخ رابط التطبيق لفتحه في Chrome</span>
                  </>
                )}
              </button>
            </div>
          </div>
        ) : isIOS ? (
          <div className="space-y-2.5 text-xs text-slate-200 leading-relaxed">
            <div className="rounded-2xl bg-white/5 border border-white/10 p-3 flex items-start gap-2.5">
              <span className="w-6 h-6 rounded-lg bg-amber-400/20 text-amber-300 font-black flex items-center justify-center shrink-0">
                1
              </span>
              <p>
                اضغط على زر <strong className="text-amber-300">المشاركة</strong>{' '}
                <Share className="inline w-3.5 h-3.5 text-sky-400 mx-0.5" /> أسفل متصفح Safari.
              </p>
            </div>
            <div className="rounded-2xl bg-white/5 border border-white/10 p-3 flex items-start gap-2.5">
              <span className="w-6 h-6 rounded-lg bg-amber-400/20 text-amber-300 font-black flex items-center justify-center shrink-0">
                2
              </span>
              <p>
                اختر <strong className="text-emerald-300">إضافة إلى الشاشة الرئيسية</strong> ثم اضغط{' '}
                <strong className="text-white">إضافة</strong>.
              </p>
            </div>
          </div>
        ) : (
          <div className="space-y-2.5 text-xs text-slate-200 leading-relaxed">
            <div className="rounded-2xl bg-white/5 border border-white/10 p-3 flex items-start gap-2.5">
              <span className="w-6 h-6 rounded-lg bg-emerald-400/20 text-emerald-300 font-black flex items-center justify-center shrink-0">
                1
              </span>
              <p>
                افتح قائمة متصفح Chrome{' '}
                <MoreVertical className="inline w-3.5 h-3.5 text-amber-300 mx-0.5" /> في أعلى
                الشاشة.
              </p>
            </div>
            <div className="rounded-2xl bg-white/5 border border-white/10 p-3 flex items-start gap-2.5">
              <span className="w-6 h-6 rounded-lg bg-emerald-400/20 text-emerald-300 font-black flex items-center justify-center shrink-0">
                2
              </span>
              <p>
                اضغط على <strong className="text-emerald-300">تثبيت التطبيق (Install App)</strong>{' '}
                أو <strong className="text-amber-300">الإضافة إلى الشاشة الرئيسية</strong> ليتم تثبيت تطبيق فوكاشات مباشرةً على هاتفك.
              </p>
            </div>

            <button
              type="button"
              onClick={() => void handleCopyLink()}
              className="w-full min-h-[40px] rounded-2xl bg-white/6 hover:bg-white/12 border border-white/12 text-slate-200 font-bold text-xs flex items-center justify-center gap-2 transition-colors"
            >
              {copiedUrl ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-300">تم نسخ رابط التطبيق</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-amber-300" />
                  <span>نسخ رابط التطبيق</span>
                </>
              )}
            </button>
          </div>
        )}

        <button
          type="button"
          onClick={onClose}
          className="w-full h-11 rounded-2xl bg-gradient-to-r from-amber-400 to-orange-500 text-slate-950 font-black text-xs shadow-lg"
        >
          حسناً، فهمت
        </button>
      </div>
    </div>
  );
};

/**
 * Entry prompt banner shown automatically when opening the web link on Android/mobile/desktop
 * (auto-hides once the app is already installed in standalone or native APK mode).
 */
export const PWAInstallPromptBanner: React.FC = () => {
  const {
    isInstallable,
    isInstalled,
    isIOS,
    isAndroid,
    isInIframe,
    isInAppBrowser,
    isInstalling,
    install,
  } = usePWAInstall();
  const apkRelease = useApkRelease();
  const [dismissed, setDismissed] = useState<boolean>(() => {
    try {
      return sessionStorage.getItem(DISMISS_SESSION_KEY) === '1';
    } catch {
      return false;
    }
  });
  const [visible, setVisible] = useState<boolean>(false);
  const [showGuide, setShowGuide] = useState<boolean>(false);
  const [justInstalled, setJustInstalled] = useState<boolean>(false);
  const [installToastText, setInstallToastText] = useState<string>(
    'تم تثبيت تطبيق فوكاشات على جهازك بنجاح!'
  );

  useEffect(() => {
    if (isInstalled || dismissed) {
      setVisible(false);
      return;
    }
    const timer = window.setTimeout(() => setVisible(true), 700);
    return () => window.clearTimeout(timer);
  }, [isInstalled, dismissed, isInstallable]);

  if (isInstalled && !justInstalled) return null;

  const handleDismiss = () => {
    setDismissed(true);
    setVisible(false);
    try {
      sessionStorage.setItem(DISMISS_SESSION_KEY, '1');
    } catch {
      // ignore storage errors
    }
  };

  const handleInstallClick = async () => {
    if (!isIOS && apkRelease?.available) {
      triggerDirectApkDownload(apkRelease);
      setInstallToastText(`جاري تنزيل ملف الأندرويد (${apkRelease.fileName}) للتثبيت المباشر...`);
      setJustInstalled(true);
      window.setTimeout(() => setJustInstalled(false), 4000);
      return;
    }
    if (isInstallable) {
      const outcome = await install();
      if (outcome === 'accepted') {
        setInstallToastText('تم تثبيت تطبيق فوكاشات على جهازك بنجاح!');
        setJustInstalled(true);
        window.setTimeout(() => setJustInstalled(false), 3500);
        return;
      }
      if (outcome === 'dismissed') return;
    }
    setShowGuide(true);
  };

  return (
    <>
      {justInstalled && (
        <div className="fixed top-4 inset-x-4 max-w-sm mx-auto z-[115] rounded-2xl bg-emerald-950/95 border border-emerald-400/50 px-4 py-3 shadow-2xl flex items-center gap-2.5 text-emerald-200 text-xs font-bold font-tajawal">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>{installToastText}</span>
        </div>
      )}

      {visible && !isInstalled && (
        <div className="fixed bottom-20 sm:bottom-5 inset-x-3 max-w-md mx-auto z-[110] font-tajawal animate-in fade-in slide-in-from-bottom-4 duration-300">
          <div className="rounded-2xl bg-gradient-to-l from-[#12192e]/95 via-[#0e1426]/95 to-[#1a1510]/95 border border-amber-400/40 backdrop-blur-xl p-3.5 shadow-[0_18px_50px_rgba(0,0,0,0.75)] flex items-center gap-3">
            <img
              src="/pwa-192x192.png"
              alt="تطبيق فوكاشات"
              referrerPolicy="no-referrer"
              className="w-12 h-12 rounded-2xl border border-amber-400/45 object-cover shrink-0 shadow-lg"
            />
            <div className="flex-1 min-w-0 text-right">
              <div className="flex items-center gap-1.5">
                <Smartphone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span className="text-xs font-black text-white truncate">
                  {!isIOS && apkRelease?.available
                    ? 'تنزيل تطبيق فوكاشات APK للأندرويد'
                    : 'تثبيت تطبيق فوكاشات للأندرويد'}
                </span>
              </div>
              <p className="text-[11px] text-slate-300 mt-0.5 leading-snug">
                {!isIOS && apkRelease?.available
                  ? `اضغط «تنزيل» لتحميل ملف APK المستقل (v${apkRelease.versionName}) وتثبيته مباشرة.`
                  : isInstallable
                  ? 'جاهز للتثبيت المباشر بضغطة واحدة كتطبيق أندرويد مستقل.'
                  : 'نزّل نسخة التطبيق الكاملة على هاتفك لتشغيل الغرف الصوتية بدون متصفح.'}
              </p>
            </div>
            <div className="flex items-center gap-1.5 shrink-0">
              <button
                type="button"
                disabled={isInstalling}
                onClick={handleInstallClick}
                className="h-9 px-3 rounded-xl bg-gradient-to-r from-emerald-400 to-teal-500 hover:from-emerald-300 hover:to-teal-400 text-slate-950 font-black text-xs flex items-center gap-1.5 shadow-lg shadow-emerald-500/25 active:scale-95 transition-all disabled:opacity-60"
              >
                <Download className="w-3.5 h-3.5" />
                <span>{isInstalling ? 'جاري...' : !isIOS && apkRelease?.available ? 'تنزيل APK' : 'تنزيل'}</span>
              </button>
              <button
                type="button"
                onClick={handleDismiss}
                className="w-8 h-9 rounded-xl bg-white/8 hover:bg-white/15 text-slate-300 flex items-center justify-center transition-colors"
                title="لاحقاً"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      <InstallGuideModal
        isOpen={showGuide}
        onClose={() => setShowGuide(false)}
        isIOS={isIOS}
        isAndroid={isAndroid}
        isInIframe={isInIframe}
        isInAppBrowser={isInAppBrowser}
        apkRelease={apkRelease}
      />
    </>
  );
};

interface ProfileInstallButtonProps {
  variant?: 'header' | 'card';
}

/**
 * Install / APK Download button mounted inside Navbar & Profile ("ملفي") screen.
 * Auto-hides when already running inside the installed Android APK or standalone mode.
 */
export const ProfileInstallButton: React.FC<ProfileInstallButtonProps> = ({
  variant = 'header',
}) => {
  const {
    isInstallable,
    isInstalled,
    isIOS,
    isAndroid,
    isInIframe,
    isInAppBrowser,
    isInstalling,
    install,
  } = usePWAInstall();
  const apkRelease = useApkRelease();
  const [showGuide, setShowGuide] = useState(false);

  if (isInstalled) return null;

  const handleClick = async () => {
    if (!isIOS && apkRelease?.available) {
      triggerDirectApkDownload(apkRelease);
      return;
    }
    if (isInstallable) {
      const outcome = await install();
      if (outcome === 'accepted' || outcome === 'dismissed') return;
    }
    setShowGuide(true);
  };

  if (variant === 'card') {
    return (
      <>
        <button
          type="button"
          disabled={isInstalling}
          onClick={handleClick}
          className="w-full rounded-2xl bg-gradient-to-l from-emerald-500/18 via-teal-500/12 to-amber-500/12 border border-emerald-400/35 hover:border-emerald-400/60 px-3.5 py-2.5 flex items-center justify-between gap-3 transition-all active:scale-[0.99]"
        >
          <div className="flex items-center gap-2.5 min-w-0 text-right">
            <img
              src="/pwa-192x192.png"
              alt="فوكاشات"
              referrerPolicy="no-referrer"
              className="w-10 h-10 rounded-xl border border-amber-400/40 object-cover shrink-0 shadow"
            />
            <div className="min-w-0">
              <div className="text-xs font-black text-white truncate">
                {!isIOS && apkRelease?.available
                  ? 'تنزيل تطبيق فوكاشات APK للأندرويد'
                  : 'تثبيت تطبيق فوكاشات للأندرويد'}
              </div>
              <div className="text-[10px] text-emerald-200/85 truncate">
                {!isIOS && apkRelease?.available
                  ? `تحميل مباشر لملف APK (v${apkRelease.versionName}) — يعمل بدون متصفح`
                  : isInstallable
                  ? 'اضغط هنا للتثبيت المباشر على هاتفك الآن'
                  : 'نسخة أندرويد مستقلة بأيقونة فوكاشات بدون متصفح'}
              </div>
            </div>
          </div>
          <span className="h-8 px-3 rounded-xl bg-emerald-400 text-slate-950 font-black text-[11px] flex items-center gap-1 shrink-0">
            <Download className="w-3.5 h-3.5" />
            <span>{isInstalling ? 'جاري...' : !isIOS && apkRelease?.available ? 'تنزيل APK' : 'تنزيل'}</span>
          </span>
        </button>

        <InstallGuideModal
          isOpen={showGuide}
          onClose={() => setShowGuide(false)}
          isIOS={isIOS}
          isAndroid={isAndroid}
          isInIframe={isInIframe}
          isInAppBrowser={isInAppBrowser}
          apkRelease={apkRelease}
        />
      </>
    );
  }

  return (
    <>
      <button
        type="button"
        disabled={isInstalling}
        onClick={handleClick}
        className="h-8 sm:h-9 px-2.5 sm:px-3 rounded-xl bg-emerald-500/15 border border-emerald-400/40 text-emerald-300 text-[11px] sm:text-xs font-bold flex items-center gap-1 hover:bg-emerald-500/25 transition-colors"
        title={
          !isIOS && apkRelease?.available
            ? 'تنزيل ملف APK لتثبيت تطبيق فوكاشات على الأندرويد'
            : 'تنزيل وتثبيت تطبيق فوكاشات على جهازك'
        }
      >
        <Download className="w-3.5 h-3.5" />
        <span>{!isIOS && apkRelease?.available ? 'تنزيل APK' : 'تنزيل'}</span>
      </button>

      <InstallGuideModal
        isOpen={showGuide}
        onClose={() => setShowGuide(false)}
        isIOS={isIOS}
        isAndroid={isAndroid}
        isInIframe={isInIframe}
        isInAppBrowser={isInAppBrowser}
        apkRelease={apkRelease}
      />
    </>
  );
};

export const OfflineIndicator: React.FC = () => {
  const isOnline = useOnlineStatus();
  if (isOnline) return null;

  return (
    <div className="fixed bottom-4 left-4 z-[120] flex items-center gap-2 rounded-xl bg-amber-500 px-3 py-1.5 text-xs font-black text-slate-950 shadow-lg font-tajawal">
      <WifiOff className="w-3.5 h-3.5 shrink-0" />
      <span>أنت غير متصل بالإنترنت — جاري استخدام الوضع المحلي</span>
    </div>
  );
};
