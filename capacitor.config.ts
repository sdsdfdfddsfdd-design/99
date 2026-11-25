import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.fokashat.vip',
  appName: 'فوكاشات',
  webDir: 'dist',
  server: {
    androidScheme: 'https',
    cleartext: false,
    allowNavigation: [
      'shosho-chat-3e571.firebaseapp.com',
      'shosho-chat-3e571.firebasestorage.app',
      '*.run.app',
      '*.googleapis.com',
    ],
  },
  android: {
    allowMixedContent: false,
    captureInput: true,
    webContentsDebuggingEnabled: false,
  },
};

export default config;
