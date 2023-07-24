module.exports = {
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  root: true,
  env: {
    "browser": true,
    "amd": true,
    "node": true
  },
  ignorePatterns: ["dist/*", "node_modules/*", "/src/__generated__/*.ts"]
};