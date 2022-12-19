import {defineConfig} from "windicss/helpers";

export default defineConfig({
  extract: {
    include: ["**/*.{vue,html,jsx,tsx,ts}"],
    exclude: ["node_modules", ".husky", ".vscode", "docs", ".git", "scripts", "shell", "dist"],
  },
  darkMode: "class",
});
