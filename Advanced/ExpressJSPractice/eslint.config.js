import globals from 'globals';


export default [
    {
        files: ['**/*.js', '**/*.mjs'],
        languageOptions: {
          globals: globals.node,
          ecmaVersion: 2021,
          sourceType: 'module',
        },
        rules: {
          'semi': ['error', 'always'],
          'no-unused-vars': 'warn',
          'no-undef': 'error',
          'eqeqeq': 'error',
        },
      },
];