import js from "@eslint/js";
import prettier from "eslint-config-prettier";
import pluginAstro from "eslint-plugin-astro";
import pluginPrettier from "eslint-plugin-prettier";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";

export default [
  {
    ignores: ["node_modules", "dist"],
  },
  js.configs.recommended,
  {
    files: ["**/*.{ts,tsx,astro}"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: "./tsconfig.json",
        extraFileExtensions: [".astro"],
      },
    },
    plugins: {
      "@typescript-eslint": tseslint,
    },
    rules: {
      ...tseslint.configs.recommended.rules,
    },
  },
  ...pluginAstro.configs.recommended,
  {
    rules: {
      // override/add rules settings here, such as:
      // "astro/no-set-html-directive": "error"
    },
  },
  prettier,
  {
    plugins: {
      prettier: pluginPrettier,
    },
    rules: {
      "prettier/prettier": "error", // enforce Prettier via ESLint
    },
  },
];
