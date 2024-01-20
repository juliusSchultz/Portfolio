module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
  },
  extends: [
    'plugin:nuxt/recommended',
    'plugin:vue/vue3-recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['unused-imports'],
  // add your custom rules here
  rules: {
    'import/order': 'off',
    // vue 2 still requires native modifier
    'vue/no-deprecated-v-on-native-modifier': 'off',
    'no-unused-vars': 'warn',
    'unused-imports/no-unused-imports': 'warn',
    'unused-imports/no-unused-vars': 'warn',
    'no-restricted-imports': ['error', '@jest/globals'],
    'no-empty-function': 'warn',
    'no-shadow': 'warn',
    'vue/multi-word-component-names': 0,
    'vue/no-reserved-component-names': 0,
    'vue/v-on-event-hyphenation': 0,
    'vue/no-setup-props-destructure': 0,
  },
}
