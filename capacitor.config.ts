import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.miapp.ejemplo', // ID único para tu aplicación
  appName: 'MiAplicacion',     // Nombre de tu aplicación
  webDir: 'www',               // Directorio web de la aplicación (generalmente 'www')
  bundledWebRuntime: false,    // Configuración opcional para el runtime

  // Configuración específica del Splash Screen
  plugins: {
    SplashScreen: {
      launchShowDuration: 3000,           // Duración del splash screen en milisegundos (3 segundos)
      launchAutoHide: true,               // Oculta automáticamente el splash después de `launchShowDuration`
      backgroundColor: '#ff0000',         // Color de fondo del splash screen en formato hexadecimal
      androidScaleType: 'CENTER_CROP',    // Modo de escalado en Android ('CENTER_CROP' es recomendado)
      showSpinner: true,                  // Muestra un indicador de carga en el splash screen             // Estilo del spinner (puede variar según la plataforma)
      spinnerColor: '#999999',            // Color del spinner en formato hexadecimal
      splashFullScreen: true,             // Usa pantalla completa para el splash en dispositivos sin notch
      splashImmersive: true               // Oculta la barra de estado mientras se muestra el splash
    }
  }
};

export default config;
