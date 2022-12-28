declare interface Post {
  frontmatter: {
    title: string;
    pubDate: string;
    description: string;
    author: string;
    image: { url: string; alt: string };
    tags: string[];
  };
  url: string;
}
