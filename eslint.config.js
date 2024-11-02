import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {files: ["**/*.{js,mjs,cjs,jsx}"]},
  {
    languageOptions: { globals: globals.browser },
    rules: {
      "no-unused-vars": "warn", // 사용되지 않는 변수에 대해 경고
      "no-console": "off", // 콘솔 로그 허용
      "no-useless-catch": "off",
      semi: ["error", "always"], // 세미콜론 필수
      quotes: ["error", "double"], // 큰따옴표 사용
    },},
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
];