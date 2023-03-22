import getPosts from "../helpers/getPosts";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import getPost from "../helpers/getPost";

function Post({ data, content }) {
  return (
    <article>
      <h1 className="mb-4 text-3xl sm:text-4xl leading-tight">{data.title}</h1>
      <div className="mb-8 text-base">{data.date}</div>
      <div className="prose dark:prose-invert mt-12 text-lg">
        <MDXRemote {...content} />
      </div>
    </article>
  );
}

export const getStaticPaths = async () => {
  const posts = await getPosts();
  const paths = posts.map(post => ({ params: { slug: post.slug } }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const post = await getPost(params.slug);
  const mdxSource = await serialize(post.content);
  return {
    props: {
      data: post.data,
      content: mdxSource,
    },
  };
};

export default Post;