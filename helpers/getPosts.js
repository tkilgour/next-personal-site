import fs from "fs";
import path from "path";
import matter from "gray-matter";

const getPosts = () => {
  const files = fs.readdirSync(path.join("posts"));
  const allPostsData = files
    .map((fileName) => {
      const fileContents = fs.readFileSync(
        path.join(`posts/${fileName}`),
        "utf8"
        );
        const { data } = matter(fileContents);
        const slug = fileName.replace(".mdx", "");
      return {
        slug,
        data,
      };
    })
    .filter(
      (post) => process.env.NODE_ENV == "development" || post.data.published
    );
  return allPostsData;
};

export default getPosts;
