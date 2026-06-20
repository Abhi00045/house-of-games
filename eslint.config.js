import js from '@eslint/js';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';

export default [
  {
    ignores: ['node_modules/**', 'dist/**', 'projects/**', '**/*.spec.ts', '**/*.html']
  },
  {
    files: ['src/**/*.ts'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        sourceType: 'module'
      },
      globals: {
        console: 'readonly',
        process: 'readonly'
      }
    },
    plugins: {
      '@typescript-eslint': tsPlugin
    },
    rules: {
      ...js.configs.recommended.rules,
      ...tsPlugin.configs['recommended'].rules
    }
  }
];
