module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
    'node': true
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended'
  ],
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true
    },
    'ecmaVersion': 12,
    'sourceType': 'module'
  },
  'plugins': [
    'react'
  ],
  'rules': {
    'indent': [
      'warning',
      2
    ],
    'linebreak-style': [
      'warning',
      'unix'
    ],
    'quotes': [
      'warning',
      'single'
    ],
    'semi': [
      'warning',
      'always'
    ],
    'react/prop-types': 'off',
    'no-debugger': 'off',
    'object-curly-spacing': [
      'warning',
      'always'
    ]
  }
};
