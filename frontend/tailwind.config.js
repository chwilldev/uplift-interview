module.exports = {
  purge: ['./src/**/*.ts', './src/**/*.tsx', './src/**/*.js', './src/**/*.jsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      rotate: {
        angle_0: '17deg',
        angle_1: '12deg',
        angle_2: '0deg',
        angle_3: '-12deg',
        angle_4: '-17deg',
      },
      keyframes: {
        popup_0: {
          '0%': { transform: 'rotate(0) translate(18rem, -36vh) scale(0.2, 0.2)', opacity: 0 },
        },
        popup_1: {
          '0%': { transform: 'rotate(0) translate(6rem, -36vh) scale(0.2, 0.2)', opacity: 0 },
        },
        popup_2: {
          '0%': { transform: 'rotate(0) translate(-6rem, -36vh) scale(0.2, 0.2)', opacity: 0 },
        },
        popup_3: {
          '0%': { transform: 'rotate(0) translate(-18rem, -36vh) scale(0.2, 0.2)', opacity: 0 },
        },
        popup_4: {
          '0%': { transform: 'rotate(0) translate(-30rem, -36vh) scale(0.2, 0.2)', opacity: 0 },
        },
      },
      animation: {
        popup_0: 'popup_0 ease-in-out',
        popup_1: 'popup_1 ease-in-out 0.1s',
        popup_2: 'popup_2 ease-in-out 0.2s',
        popup_3: 'popup_3 ease-in-out 0.3s',
        popup_4: 'popup_4 ease-in-out 0.4s',
      },
      height: {
        320: '320px',
      },
      translate: {
        custom_0: '0rem',
        custom_1: '3.5rem',
        custom_2: '5rem',
        custom_3: '3.5rem',
        custom_4: '0rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
