// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// TODO: Finale Domain eintragen (wird für Canonical-URLs, Open Graph und Sitemap genutzt).
const SITE_URL = 'https://www.studio-kuhls.de';

export default defineConfig({
  site: SITE_URL,
  trailingSlash: 'never',
  devToolbar: { enabled: false },
  build: { format: 'file' },

  // Schriften werden beim Build heruntergeladen und selbst gehostet –
  // keine Verbindung zu Google Fonts im Browser (DSGVO).
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: 'Inter',
      cssVariable: '--font-inter',
      weights: ['400 600'],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['Helvetica Neue', 'Arial', 'sans-serif'],
    },
    {
      provider: fontProviders.fontsource(),
      name: 'Inter Tight',
      cssVariable: '--font-inter-tight',
      weights: ['400 600'],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['Helvetica Neue', 'Arial', 'sans-serif'],
    },
  ],

  image: {
    responsiveStyles: false,
  },

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [
    sitemap({
      filter: (page) => !page.includes('/impressum') && !page.includes('/datenschutz'),
    }),
  ],
});
