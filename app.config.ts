import { defineConfig } from '@tanstack/react-start/config'
import tsConfigPaths from 'vite-tsconfig-paths'

console.log('Bun.version', Bun.version)

export default defineConfig({
  server: {
    preset: 'bun',
    serveStatic: 'node',
  },

  vite: {
    plugins: [tsConfigPaths({ projects: ['./tsconfig.json'] })],

    // @ts-expect-error — it's removed only from the schema, but it's still available
    clearScreen: false,
  },
})
