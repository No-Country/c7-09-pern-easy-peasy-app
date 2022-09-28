module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    "jest/globals": true,
  },
  extends: [
    "plugin:react/recommended",
    "standard",
    "eslint:recommended",
    "plugin:prettier/recommended",
  ],
  settings: {
    react: {
      version: "detect",
    },
  },
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    commonjs: true,
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["react", "jest"],
  globals: {
    process: true,
  },
  rules: {
    "prettier/prettier": "warn",
    "react/react-in-jsx-scope": 0,
    "react/jsx-uses-react": 0,
    "react/prop-types": "off",
  },
};
