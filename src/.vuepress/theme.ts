import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme({
  hostname: "https://mitre.github.io/tir-docs/",

  // Site Metadata
  author: {
    name: "The MITRE SAF Team",
    url: "https://saf.mitre.org/applications/tir/",
  },
  logo: "/logo.svg",
  repo: "mitre/tir-docs",
  docsDir: "src",
  navbar,
  sidebar,

  // Plugin Configuration
  plugins: {
    icon: {
      assets: "//at.alicdn.com/t/font_2410206_h4r1xw8ppng.css",
      prefix: "iconfont icon-",
    }
  },

  // Markdown Configuration
  markdown: {
    // Core Features
    alert: true,
    align: true,
    attrs: true,
    component: true,
    gfm: true,

    // Code Features
    codeTabs: true,
    vPre: true,

    // Image Features
    figure: true,
    imgLazyload: true,
    imgSize: true,

    // Additional Features
    include: true,
    mark: true,
    mermaid: true,
    sup: true,
    sub: true,
    tabs: true,

    // Syntax Highlighting
    highlighter: {
      type: "shiki",
      lineNumbers: 15,
      notationDiff: true,
      themes: {
        light: "github-light",
        dark: "github-dark"
      },
      langs: [
        "typescript",
        "javascript",
        "bash",
        "markdown",
        "html",
        "css",
        "json",
        "vue",
        "ruby",
        "yaml",
        "yml"
      ]
    },

    // Presentations
    revealjs: {
      plugins: ["highlight", "math", "search", "notes", "zoom"],
      themes: [
        "auto", "beige", "black", "blood", "league",
        "moon", "night", "serif", "simple", "sky",
        "solarized", "white"
      ]
    }
  },

  // Footer
  footer: "© 2024 Lockheed Martin Corporation. This publication is licensed under the Creative Commons Attribution 4.0 International Public License (https://creativecommons.org/licenses/by/4.0/legalcode.en). Except as expressly licensed, all rights herein are reserved."
});