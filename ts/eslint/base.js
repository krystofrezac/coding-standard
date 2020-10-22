module.exports = {
  env: {
    es2020: true,
    node: true,
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
    'plugin:import/warnings',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
  rules: {
    'class-methods-use-this': 'off',
    'newline-before-return': 'warn',
    'spaced-comment': 'warn',
    'no-alert': 'error',
    'no-console': 'error',
    'no-plusplus': 'off',
    'no-restricted-syntax': 'off',
    'no-param-reassign': 'off',
    'no-prototype-builtins': 'off',
    'no-shadow': 'off',
    'no-await-in-loop': 'off',
    'no-unused-expressions': 'off',
    'no-useless-constructor': 'off',
    'no-underscore-dangle': 'off',
    'no-undef': 'error',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
        ],
        'newlines-between': 'always',
      },
    ],
    '@typescript-eslint/explicit-function-return-type': [
      'error',
      {
        allowExpressions: true,
        allowHigherOrderFunctions: true,
        allowTypedFunctionExpressions: true,
      },
    ],
    '@typescript-eslint/explicit-module-boundary-types': 'error',
    '@typescript-eslint/ban-ts-comment': 'error',
    '@typescript-eslint/typedef': [
      'error',
      {
        arrowParameter: false,
        parameter: true,
      },
    ],
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-unused-expressions': ['error'],
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
  },
  overrides: [
    {
      files: ['*.js'],
      rules: {
        '@typescript-eslint/typedef': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
      },
    },
    {
      files: '*.test.*',
      rules: {
        '@typescript-eslint/no-empty-function': 'off',
      },
    },
  ],
};
