/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        gutter: 'var(--color-gutter)',
        surface: 'var(--color-surface)',
        foreground: 'var(--color-text)',
        muted: 'var(--color-text-muted)',
        subtle: 'var(--color-text-subtle)',
        border: 'var(--color-border)',
        panel: 'var(--color-panel)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
