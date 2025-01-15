import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  { text: "User Guide", icon: "creative", link: "courses/tir_user_guide/README.md" },
  { text: "Admin Guide", icon: "creative", link: "courses/tir_admin_guide/README.md" },
  { text: "Deployment Guide", icon: "creative", link: "courses/tir_deployment_guide/README.md" }
]);
