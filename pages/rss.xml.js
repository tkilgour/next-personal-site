import { Feed } from "feed";
import getPosts from "../helpers/getPosts";

// Handling of RSS Feed Generation inspired by https://guillermodlpa.com/blog/how-to-generate-rss-feed-with-next-js
export const getServerSideProps = async (ctx) => {
  const allPosts = await getPosts();
  const site_url = "https://kilgour.co";

  const feedOptions = {
    title: "Thomas Kilgour",
    description: "Thomas Kilgour's blog",
    id: site_url,
    link: site_url,
    image: `${site_url}/logo.png`,
    favicon: `${site_url}/favicon.svg`,
    copyright: `All rights reserved ${new Date().getFullYear()}, Thomas Kilgour`,
    feedLinks: {
      rss2: `${site_url}/rss.xml`,
      json: `${site_url}/feed.json`,
      atom: `${site_url}/atom.xml`,
    },
    feed: `${site_url}/rss.xml`,
  };

  const feed = new Feed(feedOptions);

  allPosts.forEach((post) => {
    feed.addItem({
      title: post.data.title,
      id: `${site_url}/${post.slug}`,
      link: `${site_url}/${post.slug}`,
      description: post.data.description,
      date: new Date(post.data.date),
    });
  });
  
  const cacheMaxAgeUntilStaleSeconds = 60 * 60; // 1 minute
  const cacheMaxAgeStaleDataReturnSeconds = 60 * 60 * 60; // 60 minutes
  ctx.res.setHeader(
    "Cache-Control",
    `public, s-maxage=${cacheMaxAgeUntilStaleSeconds}, stale-while-revalidate=${cacheMaxAgeStaleDataReturnSeconds}`
  );

  ctx.res.setHeader("Content-Type", "text/xml");
  ctx.res.write(feed.rss2());
  ctx.res.end();

  return { props: {} };
};

// Default export to prevent next.js errors
export default function RssPage() {}
