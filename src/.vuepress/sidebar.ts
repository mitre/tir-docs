import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      icon: "creative",
      text: "User Guide",
      prefix: "guides/user",
      // children: "structure",
      collapsible: true
    },
    {
      icon: "creative",
      text: "Admin Guide",
      prefix: "guides/admin",
      // children: "structure",
      collapsible: true
    }
  ],
});
