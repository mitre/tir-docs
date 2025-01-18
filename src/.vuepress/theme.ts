import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme({
  hostname: "https://mitre.github.io/tir-docs/",

  author: {
    name: "The MITRE SAF Team",
    url: "https://saf.mitre.org/applications/tir/",
  },

  logo: "/logo.svg",
  repo: "mitre/tir-docs",
  docsDir: "src",
  navbar,
  sidebar,

  plugins: {
    icon: {
      assets: "//at.alicdn.com/t/font_2410206_h4r1xw8ppng.css",
      prefix: "iconfont icon-",
    }
  },
  headerDepth: 4,
  markdown: {
    alert: true,
    align: true,
    attrs: true,
    component: true,
    figure: true,
    gfm: true,
    imgLazyload: true,
    imgSize: true,
    include: true,
    mark: true,
    mermaid: true,
    sub: true,
    sup: true,
    tabs: true,
    codeTabs: true,
    vPre: true,

    highlighter: {
      type: "shiki",
      lineNumbers: 15,
      notationDiff: true,
      themes: {
        light: "github-light",
        dark: "github-dark"
      }
    },

    playground: {
      presets: ["ts", "vue"],
    },

    revealjs: {
      plugins: ["highlight", "math", "search", "notes", "zoom"],
      themes: [
        "auto", "beige", "black", "blood", "league",
        "moon", "night", "serif", "simple", "sky",
        "solarized", "white"
      ]
    },

    stylize: [
      {
        matcher: "Recommended",
        replacer: ({ tag }) => {
          if (tag === "em")
            return {
              tag: "Badge",
              attrs: { type: "tip" },
              content: "Recommended",
            };
        },
      },
    ]
  },

  footer: "© 2024 Lockheed Martin Corporation. This publication is licensed under the Creative Commons Attribution 4.0 International Public License (https://creativecommons.org/licenses/by/4.0/legalcode.en). Except as expressly licensed, all rights herein are reserved."
});