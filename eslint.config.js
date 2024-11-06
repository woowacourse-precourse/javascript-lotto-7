import globals from "globals";
import pluginJs from "@eslint/js";

module.exports = {
  files: ["**/*.js"],
  languageOptions: {
    sourceType: "commonjs",
    globals: globals.browser,
  },
  plugins: [pluginJs.configs.recommended],
  extends: ["prettier"], // Prettier 설정 추가
  rules: {
    // 삼항연산자 금지
    'no-ternary': 'error',
    
    // 최대 깊이 2칸 제한
    'max-depth': ['error', 2],
    
    // 키워드 사이에 공백 필수
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: 'multiline-block-like', next: '*' },
      { blankLine: 'always', prev: '*', next: 'multiline-block-like' },
    ],

    // 함수의 길이를 15라인 이하로 제한
    'max-lines-per-function': ['error', 15],

    // else 사용 지양
    'no-else-return': 'error',
  },
};
