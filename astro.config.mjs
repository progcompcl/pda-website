// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import mdx from "@astrojs/mdx";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  i18n: {
    locales: ["en", "es", "pt"],
    defaultLocale: "en",
    routing: {
      prefixDefaultLocale: true,
    },
  },
  redirects: {
    // TODO: i18n
    "/": "/en/",
  },
  trailingSlash: "always",
  prefetch: {
    defaultStrategy: "viewport",
  },
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [mdx(), react({ experimentalReactChildren: true })],
  server: { host: true },
});
