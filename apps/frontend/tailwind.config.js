const { createGlobPatternsForDependencies } = require('@nrwl/angular/tailwind');
const colors = require('tailwindcss/colors');
const { join } = require('path');

module.exports = {
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
            success: colors.emerald,
            warning: colors.yellow,
            danger: colors.red,
            oscuro: colors.slate,
            white: colors.white,
        },
        extend: {},
    },
    plugins: [
        require('@tailwindcss/forms'),
    ],
};
