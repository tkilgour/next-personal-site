import Head from "next/head";
import Link from "next/link";
import generateSSFeed from "../helpers/generateSSFeed";
import getPosts from "../helpers/getPosts";

export default function Home({ posts }) {
  return (
    <div>
      <Head>
        <title>Home – Thomas Kilgour</title>
      </Head>

      <ul>
        {posts.map((post) => (
          <li
            key={post.slug}
            className={`mb-20 ${
              process.env.NODE_ENV === "development" &&
              post.data.published === false &&
              "border border-red-400 border-dashed"
            }`}
          >
            <h2 className="mb-2">
              <Link
                className="text-2xl outline-none underline-offset-8 hover-color-secondary hover:underline focus:underline"
                href={post.slug}
              >
                {post.data.title}
              </Link>
            </h2>
            <div className="text-sm mb-8">{post.data.date}</div>
            <p className="text-gray-500 dark:text-gray-400">
              {post.data.description}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export const getStaticProps = () => {
  generateSSFeed();
  const posts = getPosts();

  return {
    props: {
      posts,
    },
  };
};
