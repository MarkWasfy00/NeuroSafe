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
        description: "An advanced system for monitoring an individual's vital signs, including brain waves, heart rate, respiration rate, and oxygen levels, with a stress detection alert system that activates upon identifying any abnormalities",
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
