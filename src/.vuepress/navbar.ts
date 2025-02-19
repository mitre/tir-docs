import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  { text: "User Guide", icon: "user", link: "courses/tir_user_guide/" },
  { text: "Admin Guide", icon: "admin", link: "courses/tir_admin_guide/" },
  { text: "Deployment Guide", icon: "keyboard", link: "courses/tir_deployment_guide/" },
  { text: "Training Videos", icon: "video", link: "courses/tir_training_videos/" }
]);
