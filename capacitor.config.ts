import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'primera_app_ionic_24b',
  webDir: 'www',
  bundledWebRuntime: false,
  plugins: {
    SplashScreen: {
      launchShowDuration: 3000,  // Duración del splash screen en milisegundos
      launchAutoHide: true,
      backgroundColor: '#ffffff', // Color de fondo del splash screen
      androidScaleType: 'CENTER_CROP',
      showSpinner: true, // Muestra un spinner de carga
      spinnerColor: '#999999',
    },
  },
};

export default config;
