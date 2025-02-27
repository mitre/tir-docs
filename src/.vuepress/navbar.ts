import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  { text: "User Guide", icon: "iconfont icon-profile", link: "courses/tir_user_guide/" },
  { text: "Admin Guide", icon: "iconfont icon-warn", link: "courses/tir_admin_guide/" },
  { text: "Deployment Guide", icon: "iconfont icon-computer", link: "courses/tir_deployment_guide/" },
  { text: "Training Videos", icon: "iconfont icon-play", link: "courses/tir_training_videos/" }
]);
