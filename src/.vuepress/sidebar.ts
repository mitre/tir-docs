import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      icon: "iconfont icon-profile",
      text: "User Guide",
      prefix: "courses/tir_user_guide",
      children: "structure",
      collapsible: true
    },
    {
      icon: "iconfont icon-warn",
      text: "Admin Guide",
      prefix: "courses/tir_admin_guide",
      children: "structure",
      collapsible: true
    },
    {
      icon: "iconfont icon-computer",
      text: "Deployment Guide",
      prefix: "courses/tir_deployment_guide",
      children: "structure",
      collapsible: true
    },
    {
      icon: "iconfont icon-play",
      text: "Training Videos",
      prefix: "courses/tir_training_videos",
      children: "structure",
      collapsible: true
    }
  ],
});
