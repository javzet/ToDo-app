module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: ["plugin:react/recommended", "standard"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: "module"
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    quotes: ["error", "double"],
    semi: ["error", "always"],
    "space-before-function-paren": [
      "error",
      {
        anonymous: "always",
        named: "never",
        asyncArrow: "always"
      }
    ],
    "no-undef": "off",
    "react/react-in-jsx-scope": 0
  },
  settings: {
    react: {
      version: "detect"
    }
  }
};
