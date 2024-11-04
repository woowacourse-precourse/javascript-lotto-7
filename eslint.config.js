import { FlatCompat } from '@eslint/eslintrc';
import globals from 'globals';
import pluginJs from '@eslint/js';
import path from 'path';
import { fileURLToPath } from 'url';
import prettier from 'eslint-config-prettier'; // prettier 설치 후

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
      'import/extensions': ['error', 'ignorePackages'],
      'max-depth': ['error', 2],
      'no-ternary': 'error',
      'max-lines-per-function': ['error', { max: 15, skipBlankLines: true }],
      'no-else-return': ['error', { allowElseIf: false }],
    },
  },
  {
    files: ['eslint.config.js'],
    rules: {
      'no-underscore-dangle': 'off',
      'import/no-extraneous-dependencies': ['error', { packageDir: __dirname }],
    },
  },
  {
    ignores: ['__tests__/**/*.js'],
  },
];
