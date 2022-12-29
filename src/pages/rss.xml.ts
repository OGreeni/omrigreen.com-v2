import rss from '@astrojs/rss';

export const get = () =>
  rss({
    title: 'Omri Green | Blog',
    description: 'Web development guides, tips, and tricks',
    site: 'https://ogreeni.netlify.app',
    items: import.meta.glob('./**/*.md'),
    customData: `<language>en-us</language>`,
  });
