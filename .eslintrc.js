module.exports = {
  root: true,
  env: {
    node: true,
    browser: true, // browser global variables
    es2021: true, // adds all ECMAScript 2021 globals and automatically sets the ecmaVersion parser option to 12.
  },
  parserOptions: {
    ecmaVersion: 12,
    parser: '@typescript-eslint/parser',
  },
  extends: ['eslint:recommended', 'plugin:vue/vue3-recommended', 'plugin:prettier/recommended', 'airbnb-base'],
  plugins: ['prettier'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  rules: {
    'vue/attribute-hyphenation': 0,
    'prettier/prettier': ['error', {}, { usePrettierrc: true }],
    'no-console': 'warn',
    'no-debugger': 'warn',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        mjs: 'never',
        jsx: 'never',
        ts: 'never',
      },
    ],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          ...// 保持airbnb-base中的规则不变
          '**vite**', // ++
          '**@vitejs**', // ++
        ],
        optionalDependencies: false,
      },
    ],
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: [
          'path',
          'staticContext', // for ReactRouter context
          'state', // for vuex state ++
        ],
      },
    ],
  },
  globals: {
    defineProps: true,
    defineEmits: true,
    defineExpose: true,
  },
};
