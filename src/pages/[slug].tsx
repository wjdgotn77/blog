import Head from "next/head";
import { getAllPosts, getPost } from "@/lib/post";

import type { Post, Content } from "@/types/post";

export const getStaticPaths = async () => {
  const posts = getAllPosts();
  const paths = posts.map((post) => {
    return {
      // A required parameter slug was not provided as a string in getStaticPaths
      // slug의 type은 string 이어야 한다.
      params: { slug: post.data.slug.toString() },
    };
  });

  return {
    paths: paths,
    fallback: true,
  };
};

export const getStaticProps = async ({
  params,
}: {
  params: { slug: string };
}) => {
  const post = await getPost(params.slug);

  return {
    props: {
      post: post.data,
      content: post.content,
    },
  };
};

export default function PostPage({
  post,
  content,
}: {
  post: Post;
  content: Content;
}) {
  const markdown = `${content}`;

  if (!post) return null;

  return (
    <div>
      <Head>
        <title>{post.title}</title>
      </Head>
      <section className="flex flex-col items-center py-10">
        <div className="p-2 font-bold text-gray-600">title : {post.title}</div>
        <div dangerouslySetInnerHTML={{ __html: markdown }} />
      </section>
    </div>
  );
}
