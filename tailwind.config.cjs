/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'primary-400': 'var(--color-primary-400)',
        'neutral-400': 'var(--color-neutral-400)',
      },
    },
  },
  plugins: [],
};
