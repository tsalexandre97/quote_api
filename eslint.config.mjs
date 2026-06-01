import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    ignores: [
      "coverage/**",
      "node_modules/**"
    ]
  },

  {
    files: ["src/**/*.js"],

    plugins: {
      js
    },

    extends: ["js/recommended"],

    languageOptions: {
      globals: {
        ...globals.node
      }
    }
  },

  {
    files: ["tests/**/*.js"],

    plugins: {
      js
    },

    extends: ["js/recommended"],

    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.jest
      }
    }
  }
]);