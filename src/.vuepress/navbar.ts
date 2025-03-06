import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  { text: "User Guide", icon: "mdi:user", link: "courses/tir_user_guide/" },
  { text: "Admin Guide", icon: "eos-icons:admin", link: "courses/tir_admin_guide/" },
  { text: "Deployment Guide", icon: "icon-park-twotone:new-computer", link: "courses/tir_deployment_guide/" },
  { text: "Training Videos", icon: "mdi:video", link: "courses/tir_training_videos/" }
]);
