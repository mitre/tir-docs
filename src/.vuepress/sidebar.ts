import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      icon: "user",
      text: "User Guide",
      link: "courses/tir_user_guide/README.md",
      prefix: "courses/tir_user_guide",
      children: "structure",
      collapsible: true
    },
    {
      icon: "admin",
      text: "Admin Guide",
      link: "courses/tir_admin_guide/README.md",
      prefix: "courses/tir_admin_guide",
      children: "structure",
      collapsible: true
    },
    {
      icon: "keyboard",
      text: "Deployment Guide",
      link: "courses/tir_deployment_guide/README.md",
      prefix: "courses/tir_deployment_guide",
      children: "structure",
      collapsible: true
    },
    {
      icon: "video",
      text: "Training Videos",
      link: "courses/tir_training_videos/README.md",
      prefix: "courses/tir_training_videos",
      children: "structure",
      collapsible: true
    }
  ],
});
