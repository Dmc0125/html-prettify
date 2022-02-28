module.exports = {
  env: {
    commonjs: true,
    es2020: true,
    node: true,
    jest: true,
  },
  extends: [
    'airbnb',
  ],
  parserOptions: {
    ecmaVersion: 11,
  },
  rules: {
    'no-console': 0,
    'no-plusplus': 0,
    semi: ['error', 'never'],
    'no-underscore-dangle': 0,
  },
}
