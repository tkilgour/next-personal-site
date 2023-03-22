import fs from "fs";
import { Feed } from "feed";
import getPosts from "./getPosts";

export default async function generateRSSFeed() {
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
    feed: `${site_url}/rss.xml`
  };

  const feed = new Feed(feedOptions);

  allPosts.forEach((post) => {
    feed.addItem({
      title: post.data.title,
      id: `${site_url}/${post.slug}`,
      link: `${site_url}/${post.slug}`,
      description: post.content,
      date: new Date(post.data.date),
    });
  });

  fs.writeFileSync("./public/rss.xml", feed.rss2());
  fs.writeFileSync("./public/feed.json", feed.json1());
  fs.writeFileSync("./public/atom.xml", feed.atom1());
}
