module.exports = {
  extends: ['plugin:@typescript-eslint/recommended', 'airbnb', 'airbnb-typescript', 'airbnb/hooks', 'prettier'],
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true,
  },
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  parserOptions: {
    files: ['*.ts', '*.tsx'],
    ecmaVersion: 8,
    ecmaFeatures: {
      legacyDecorators: true,
      jsx: true,
    },
    sourceType: 'module',
    project: ['tsconfig.json'],
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      node: {
        paths: ['src'],
      },
    },
  },
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      rules: {
        'react/jsx-props-no-spreading': 1,
        'import/no-extraneous-dependencies': 'off',
        'no-shadow': 'off',
        '@typescript-eslint/no-unused-vars': 1,
        '@typescript-eslint/no-shadow': 'off',
        'react/prop-types': 0,
        'react/require-default-props': 0,
        'import/extensions': 0,
        'import/order': 0,
        'react/function-component-definition': [
          0,
          {
            namedComponents: 'function-declaration',
          },
        ],
      },
    },
  ],
};
