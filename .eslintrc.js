module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: ["airbnb"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module"
  },
  plugins: ["react"],
  rules: {
    "react/prop-types": 0,
    "import/no-named-as-default": 0,
    "import/no-named-as-default-member": 0,
    "react/prefer-stateless-function": 0,
    "import/prefer-default-export": 0,
    "import/no-unresolved": 0,
    "max-classes-per-file": 0,

    quotes: 0
  }
};
