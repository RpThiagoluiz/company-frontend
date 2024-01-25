import { defineConfig } from 'vite'
import type { UserConfig as VitestUserConfigInterface } from 'vitest/config'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

/**@tutorial AbsoluteImport: For absolute imports work you need to install -> npm install -D @types/node */

// https://vitejs.dev/config/

const vitestConfig: VitestUserConfigInterface = {
   test: {
      globals: true,
      environment: 'jsdom',
   },
}

export default defineConfig({
   plugins: [react()],
   test: vitestConfig.test,
   server: {
      port: 9000,
   },
   resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
      alias: {
         '@': path.join(__dirname, 'src/'),
         '@mock': path.join(__dirname, 'src/Mock/'),
         '@components': path.join(__dirname, 'src/components/'),
      },
   },
})
