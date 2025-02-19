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
  footer: "Apache-2.0 | Copyright © 2025 | The MITRE Corporation | Lockheed Martin",
  displayFooter: true,

  markdown: {
    //alert: true,
    align: true,
    attrs: true,
    component: true,
    figure: true,
    gfm: true,
    imgLazyload: true,
    imgSize: true,
    include: true,
    mark: true,
    imgMark: {
      light: ["light"],
      dark: ["dark"],
    },
    sub: true,
    sup: true,
    vPre: true,
  },

  metaLocales: {
    editLink: "Edit this page on GitHub",
  },

  plugins: {
    icon: {
      assets: "//at.alicdn.com/t/font_2410206_h4r1xw8ppng.css",
      prefix: "iconfont icon-",
    },
    components: {
      components: ["VidStack"]
    }
  },
  headerDepth: 4
});
