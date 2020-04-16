module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['plugin:vue/essential', 'standard'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['vue'],
  rules: {
    semi: ['error', 'always'],
    quotes: ['error', 'double'],
    'space-before-function-paren': ['error', 'never'],
    'eol-last': ['error', 'never'],
  },
};
