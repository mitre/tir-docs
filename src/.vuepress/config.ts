import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: process.env.GITHUB_DEPLOY === "true" ? "/tir-docs/" : "/",
  lang: "en-US",
  title: "TIR Docs",
  description: "The MITRE / Lockheed Martin TIR Application Documentation",
  theme,
  // Enable it with pwa
  // shouldPrefetch: false,
});
