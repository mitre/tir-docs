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
  footer: '<div style="padding-left:12px;padding-right:32px;"><p style="font-size:20px;font-weight:500;text-align:left;vertical-align:middle;"><a href="https://saf.mitre.org" alt="The MITRE SAF"><img src="./logo.svg" style="width:35px;vertical-align:middle;padding-right:12px;" alt="MITRE SAF Training">MITRE SAF</a></p><div style="display:flex;justify-content:center;align-items:center;"><a href="https://www.netlify.com"><img src="https://www.netlify.com/v3/img/components/netlify-color-accent.svg" style="width:80px;position:relative;top:50%;transform:translateY(-50%);" alt="Deploys by Netlify" /></a></div></div>',
  copyright: "Apache-2.0 | Copyright © 2025 | The MITRE Corporation | Lockheed Martin",
  displayFooter: true,

  markdown: {
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
