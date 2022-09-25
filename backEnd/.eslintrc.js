module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
    'jest/globals': true,
  },
  extends: ['standard', 'eslint:recommended', 'plugin:prettier/recommended'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    commonjs: true,
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: { 'prettier/prettier': 'warn' },
  globals: {
    process: true,
  },
  plugins: ['jest', 'supertest'],
}
