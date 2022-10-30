const { createGlobPatternsForDependencies } = require('@nrwl/angular/tailwind');
const colors = require('tailwindcss/colors');
const { join } = require('path');

module.exports = {
    darkMode: 'class',
    content: [
        join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
        ...createGlobPatternsForDependencies(__dirname),
    ],
    theme: {
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            primary: colors.sky,
            accent: colors.pink,
            success: colors.green,
            warning: colors.yellow,
            danger: colors.red,
            red: colors.red,
            dark: colors.slate,
            white: colors.white,
        },
        extend: {

        },
    },
    plugins: [
    ],
};
