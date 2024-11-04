import { FlatCompat } from '@eslint/eslintrc';
import pluginJs from '@eslint/js';
import prettier from 'eslint-config-prettier';
import globals from 'globals';
import path from 'path';
import { fileURLToPath } from 'url';

// mimic CommonJS variables -- not needed if using CommonJS
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default [
  pluginJs.configs.recommended,
  ...compat.extends('airbnb-base'),
  prettier,
  {
    languageOptions: {
      globals: { ...globals.node, ...globals.jest },
      ecmaVersion: 'latest',
    },
    rules: {
      // package import를 제외한 모든 import 구문에 대해 확장자를 사용하도록 강제
      'import/extensions': ['error', 'ignorePackages'],
      // 들여쓰기 depth 제한
      'max-depth': ['error', 2],
      // 3항 연산자 제한
      'no-ternary': 'error',
      // 함수 또는 메서드의 길이를 15라인으로 제한
      'max-lines-per-function': ['error', { max: 15 }],
    },
  },
  {
    files: ['eslint.config.js'],
    rules: {
      // eslint.config.js 파일에서만 'no-underscore-dangle' 규칙을 비활성화
      'no-underscore-dangle': 'off',
      // package.json 파일이 위치한 프로젝트 루트 디렉토리 경로를 명시
      'import/no-extraneous-dependencies': ['error', { packageDir: __dirname }],
    },
  },
  {
    files: ['__tests__/**/*'],
    rules: {
      // 테스트 파일에서만 'max-lines-per-function' 규칙을 비활성화
      'max-lines-per-function': 'off',
    },
  },
];
