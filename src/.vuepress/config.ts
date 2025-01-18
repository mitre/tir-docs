import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: process.env.GITHUB_DEPLOY === "true" ? "/tir-docs/" : "/",
  lang: "en-US",
  title: "Test Ingest Repository Docs",
  description: "The MITRE / Lockheed Martin TIR Application Documentation",
  theme,

  markdown: {
    headers: {
      level: [2, 3, 4, 5, 6],
    },
  },
  // Enable it with pwa
  // shouldPrefetch: false,
});
