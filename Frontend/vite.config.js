import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'NeuroSafe Drive',
        short_name: 'NeuroSafe',
        description: 'NeuroSafe application that support patients to know their blood stats',
        theme_color: '#63beb9',
        icons: [
          {
            src: 'icons/heart.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'icons/heart.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })

  ],
  server: {
    host: "0.0.0.0",
    port: 5000
  }
})
