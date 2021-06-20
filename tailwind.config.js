function cssVarRgbHelper(cssVariable) {
    return ({ opacityVariable, opacityValue }) => {
        if (opacityValue !== undefined) {
            return `rgba(var(--${cssVariable}), ${opacityValue})`;
        }
        if (opacityVariable !== undefined) {
            return `rgba(var(--${cssVariable}), var(${opacityVariable}, 1))`;
        }
        return `rgb(var(--${cssVariable}))`;
    };
}

module.exports = {
    purge: ['src/**/**.js'],
    darkMode: 'class',
    mode: 'jit',
    theme: {
        extend: {
            colors: {
                'primary-bg': cssVarRgbHelper('primary_background'),
                'primary-text': cssVarRgbHelper('primary_text'),
                'primary-accent': cssVarRgbHelper('primary_accent'),
                'secondary-accent': cssVarRgbHelper('primary_secondary_accent'),
                'secondary-gray': cssVarRgbHelper('secondary_gray'),
            },
            borderWidth: {
                '1/2': '0.5px',
            },
            fontSize: {
                xxs: '0.625rem',
                '7xl': '4.375rem',
            },
            spacing: {
                96: '24rem',
                104: '26rem',
                112: '28rem',
                128: '32rem',
                144: '36rem',
                160: '40rem',
                168: '42rem',
                200: '50rem',
                240: '60rem',
                280: '70rem',
                'full-20': '120%',
                '90p': '90%',
                '1/2-screen': '50vh',
                '2/3-screen': '66vh',
                '3/4-screen': '75vh',
            },
            maxWidth: {
                240: '60rem',
                400: '100rem',
            },
            inset: {
                '1/5': '20%',
                '1/6': '16.67%',
                '1/7': '0.14%',
                '1/10': '10%',
                '1/20': '5%',
                '2/5': '40%',
                unset: 'unset',
            },
            lineHeight: {
                14: '3.5rem',
                18: '4.5rem',
                22: '5.625rem',
            },
            screens: {
                xs: '320px',
            },
        },
        container: {
            center: true,
            padding: {
                DEFAULT: '1.2rem',
                sm: '2rem',
            },
        },
    },
    variants: {
        extend: {
            brightness: ['hover'],
            ringWidth: ['focus-visible'],
        },
    },
    plugins: [],
};
