/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: '#F4F1EA',
          light: '#FAF8F5',
          dark: '#EAE6DD',
        },
        dark: {
          DEFAULT: '#16181A',
          card: '#1F2225',
          surface: '#24282C',
        },
        accent: {
          DEFAULT: '#D94E38',
          hover: '#C23E2A',
          light: '#F8E8E5',
        },
        charcoal: '#1C1C1C',
        muted: '#6E6D6A',
        'muted-light': '#9E9D98',
      },
      fontFamily: {
        serif: ['"Instrument Serif"', '"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}
