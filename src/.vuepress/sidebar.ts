import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      icon: "creative",
      text: "User Guide",
      link: "tir_user_guide.md",
      // prefix: "",
      // children: "structure",
      collapsible: true
    },
    {
      icon: "creative",
      text: "Admin Guide",
      link: "tir_admin_guide.md",
      // prefix: "",
      // children: "structure",
      collapsible: true
    }
  ],
});
