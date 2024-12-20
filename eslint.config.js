import globals from 'globals';
import pluginJs from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import jestPlugin from 'eslint-plugin-jest';

export default [
    { languageOptions: { globals: globals.browser } },
    { languageOptions: { globals: globals.jest } },
    pluginJs.configs.recommended,
    eslintConfigPrettier,
    {
        plugins: {
            jest: jestPlugin,
        }, 
    },
];
