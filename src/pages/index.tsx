import Link from "next/link";
import Head from "next/head";

import { getAllPosts } from "@/lib/post";

import type { PostData } from "@/types/post";

export const getStaticProps = () => {
  return {
    props: {
      posts: getAllPosts(),
    },
  };
};

export default function Home({ posts }: { posts: PostData }) {
  return (
    <div>
      <Head>
        <title>Blog</title>
        <meta property="og:title" content="haesoo's blog" key="title" />
      </Head>
      <main className="flex flex-col items-center justify-center gap-4">
        {posts.map((post, index) => (
          <Link key={index} href={post.data.slug}>
            {post.data.title}
          </Link>
        ))}
      </main>
    </div>
  );
}
