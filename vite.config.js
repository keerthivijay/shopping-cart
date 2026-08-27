import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    VitePWA({
      registerType: 'autoUpdate',
      // 👇 This forces the plugin to generate the manifest during local development
      devOptions: {
        enabled: true
      },
      manifest: {
        name: 'Shoping App',
        short_name: 'ReactPWA',
        description: 'My awesome Progressive Web App built with React and Vite',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'logo-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'logo-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ],
})
