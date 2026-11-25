export const DEFAULT_PRODUCTION_SERVER_URL =
  'https://ais-pre-7cgo2aerub3igrwaspnucj-1016353730156.europe-west2.run.app';

const SERVER_ORIGIN_STORAGE_KEY = 'fokashat_server_origin_v1';

function normalizeOrigin(raw?: string | null): string | null {
  if (!raw) return null;
  const trimmed = raw.trim().replace(/\/+$/, '');
  if (!trimmed) return null;
  try {
    const parsed = new URL(trimmed);
    if (parsed.protocol !== 'https:' && parsed.protocol !== 'http:') return null;
    return parsed.origin;
  } catch {
    return null;
  }
}

export function isNativeAppContainer(): boolean {
  if (typeof window === 'undefined') return false;
  const cap = (window as unknown as { Capacitor?: { isNativePlatform?: () => boolean } }).Capacitor;
  if (cap?.isNativePlatform?.()) return true;
  const proto = window.location.protocol;
  if (proto === 'capacitor:' || proto === 'ionic:' || proto === 'file:') return true;
  // Capacitor Android WebView serves bundled dist/ from https://localhost (no port)
  if (
    (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') &&
    !window.location.port
  ) {
    return true;
  }
  return false;
}

export function getConfiguredServerBaseUrl(): string {
  const envOrigin = normalizeOrigin(
    (import.meta as unknown as { env?: Record<string, string | undefined> }).env
      ?.VITE_PUBLIC_SERVER_URL
  );
  if (envOrigin) return envOrigin;

  if (typeof window !== 'undefined') {
    try {
      const saved = normalizeOrigin(window.localStorage.getItem(SERVER_ORIGIN_STORAGE_KEY));
      if (saved) return saved;
    } catch {
      // ignore storage errors
    }
    if (!isNativeAppContainer() && window.location.origin.startsWith('http')) {
      return window.location.origin;
    }
  }

  return DEFAULT_PRODUCTION_SERVER_URL;
}

export function setCustomServerBaseUrl(url: string): string | null {
  const normalized = normalizeOrigin(url);
  if (!normalized || typeof window === 'undefined') return null;
  try {
    window.localStorage.setItem(SERVER_ORIGIN_STORAGE_KEY, normalized);
  } catch {
    // ignore storage errors
  }
  return normalized;
}

export function resolveApiUrl(path: string): string {
  if (/^https?:\/\//i.test(path)) return path;
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  if (typeof window === 'undefined') return cleanPath;
  if (!isNativeAppContainer()) return cleanPath;
  return `${getConfiguredServerBaseUrl()}${cleanPath}`;
}

export function resolveVoiceWsUrl(): string {
  if (typeof window === 'undefined') return 'ws://localhost:3000/ws/voice';
  if (!isNativeAppContainer()) {
    const proto = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
    return `${proto}//${window.location.host}/ws/voice`;
  }
  try {
    const parsed = new URL(getConfiguredServerBaseUrl());
    const wsProto = parsed.protocol === 'https:' ? 'wss:' : 'ws:';
    return `${wsProto}//${parsed.host}/ws/voice`;
  } catch {
    return 'wss://ais-pre-7cgo2aerub3igrwaspnucj-1016353730156.europe-west2.run.app/ws/voice';
  }
}
