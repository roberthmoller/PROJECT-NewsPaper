/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        'dm': ['DM Serif Display', 'serif'],
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),

  ],
}

