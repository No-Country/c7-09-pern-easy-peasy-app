module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
    'jest/globals': true,
  },
  extends: ['standard', 'eslint:recommended', 'plugin:prettier/recommended'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: { 'prettier/prettier': 'warn' },
  globals: {
    process: true,
  },
  plugins: ['jest'],
}
