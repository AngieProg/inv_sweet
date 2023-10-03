/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      xs: ['12px', '16px'],
      sm: ['14px', '20px'],
      base: ['16px', '19.5px'],
      lg: ['18px', '21.94px'],
      xl: ['20px', '24.38px'],
      '2xl': ['24px', '29.26px'],
      '3xl': ['28px', '50px'],
      '4xl': ['48px', '58px'],
      '8xl': ['96px', '106px']
    },
    extend: {
      fontFamily: {
        mea: ['Mea Culpa', 'cursive'],
        montserrat: ['Montserrat', 'sans-serif'],
        sofia: ['Sofia Sans Condensed', 'sans-serif']
      },
      colors: {
        'primary': "#ECEEFF",
        'dark-pink':"#915a5f",
        "medium-pink": "#b78478",
        "soft-pink": "#ecc0b4",
        "light-pink": "##fbdcd1",
        "coral-red": "#FF6452",
        "slate-gray": "#6D6D6D",
        "pale-blue": "#F5F6FF",
        "white-400": "rgba(255, 255, 255, 0.80)"
      },
      boxShadow: {
        '3xl': '10px 10px 10px 10px rgba(0, 0, 0, 0.3)'
      },
      backgroundImage: {
        'hero': "url('assets/images/foto-bg.jpg')",
        'hero2': "url('assets/images/foto_fecha.jpg')",
      },
      screens: {
        "wide": "1440px"
      }
    },
  },
  plugins: [],
}



