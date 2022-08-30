import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import {VitePWA} from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue(), VitePWA({
        registerType: 'autoUpdate',
      workbox: {
            clientsClaim: true,
            skipWaiting: true,
          globPatterns: ['**/*.{js,css,html,ico,png,svg}']
        },
      devOptions: {
        enabled: true
      },
        includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg'],
        manifest: {
            name: 'My Awesome App',
            short_name: 'MyApp',
            description: 'My Awesome App description',
            theme_color: '#ffffff',
            icons: [
                {
                    src: '/img_1.png',
                    sizes: '192x192',
                    type: 'image/png'
                },
                {
                    src: 'img.png',
                    sizes: '512x512',
                    type: 'image/png'
                }
            ]
        }
    })],
})
