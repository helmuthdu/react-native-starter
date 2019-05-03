module.exports = {
  globals: {
    __DEV__: true
  },
  env: {
    'jest/globals': true
  },
  extends: [
    'react-app',
    'plugin:@typescript-eslint/recommended',
    'plugin:jest/recommended',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'prettier/@typescript-eslint',
    'prettier/react'
  ],
  plugins: ['react-native', 'prettier', 'jest'],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/no-object-literal-type-assertion': 0,
    '@typescript-eslint/prefer-interface': 0,
    'prettier/prettier': 'error',
    'no-console': 'off'
  }
};
