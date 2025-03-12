import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      icon: "mdi:user",
      text: "User Guide",
      prefix: "courses/tir_user_guide",
      children: "structure",
      collapsible: true
    },
    {
      icon: "eos-icons:admin",
      text: "Admin Guide",
      prefix: "courses/tir_admin_guide",
      children: "structure",
      collapsible: true
    },
    {
      icon: "icon-park-twotone:new-computer",
      text: "Deployment Guide",
      prefix: "courses/tir_deployment_guide",
      children: "structure",
      collapsible: true
    },
    {
      icon: "mdi:video",
      text: "Training Videos",
      prefix: "courses/tir_training_videos",
      children: "structure",
      collapsible: true
    }
  ],
});
