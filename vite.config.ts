import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import { PAGE_META, applyMeta, sitemapXml } from './src/app/content/seo'


function figmaAssetResolver() {
  return {
    name: 'figma-asset-resolver',
    resolveId(id) {
      if (id.startsWith('figma:asset/')) {
        const filename = id.replace('figma:asset/', '')
        return path.resolve(__dirname, 'src/assets', filename)
      }
    },
  }
}

// Gives every route its own static HTML with the right title,
// description, canonical and social tags (crawlers and link previews
// don't run JavaScript), and writes sitemap.xml from the same data.
// Vercel's cleanUrls serves /einzelberatung from einzelberatung.html.
function seoPages() {
  let outDir = 'dist'
  return {
    name: 'seo-pages',
    configResolved(config) {
      outDir = path.resolve(config.root, config.build.outDir)
    },
    transformIndexHtml(html) {
      return applyMeta(html, PAGE_META['/'])
    },
    closeBundle() {
      const indexFile = path.join(outDir, 'index.html')
      if (!fs.existsSync(indexFile)) return
      const html = fs.readFileSync(indexFile, 'utf8')
      for (const meta of Object.values(PAGE_META)) {
        if (meta.path === '/') continue
        const file = path.join(outDir, `${meta.path.slice(1)}.html`)
        fs.mkdirSync(path.dirname(file), { recursive: true })
        fs.writeFileSync(file, applyMeta(html, meta))
      }
      fs.writeFileSync(path.join(outDir, 'sitemap.xml'), sitemapXml())
    },
  }
}

export default defineConfig({
  plugins: [
    figmaAssetResolver(),
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
    seoPages(),
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
    },
  },

  // File types to support raw imports. Never add .css, .tsx, or .ts files to this.
  assetsInclude: ['**/*.svg', '**/*.csv'],
})
