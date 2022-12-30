/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'primary-400': 'var(--color-primary-400)',
        'body-100': 'var(--color-body-100)',
        'body-900': 'var(--color-body-900)',
        react: 'var(--color-react)',
        javascript: 'var(--color-javascript)',
        typescript: 'var(--color-typescript)',
        nextjs: 'var(--color-nextjs)',
        astro: 'var(--color-astro)',
        css: 'var(--color-css)',
        tailwind: 'var(--color-tailwind)',
        nodejs: 'var(--color-nodejs)',
      },
    },
  },
  plugins: [],
};
