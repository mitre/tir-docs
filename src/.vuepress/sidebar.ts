import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      icon: "creative",
      text: "User Guide",
      link: "courses/tir_user_guide/README.md",
      prefix: "courses/tir_user_guide",
      children: "structure",
      collapsible: true
    },
    {
      icon: "creative",
      text: "Admin Guide",
      link: "courses/tir_admin_guide/README.md",
      prefix: "courses/tir_admin_guide",
      children: "structure",
      collapsible: true
    },
    {
      icon: "creative",
      text: "Deployment Guide",
      link: "courses/tir_deployment_guide/README.md",
      prefix: "courses/tir_deployment_guide",
      children: "structure",
      collapsible: true
    }
  ],
});
