import Link from "next/link";

import { getAllPosts } from "@/lib/post";

export const getStaticProps = () => {
  return {
    props: {
      posts: getAllPosts(),
    },
  };
};

export default function Home({ posts }: any) {
  console.log(posts);

  return (
    <main className="flex flex-col items-center justify-center gap-4">
      {posts.map((post: any, index: any) => (
        <Link key={index} href={post.data.slug}>
          {post.data.title}
        </Link>
      ))}
    </main>
  );
}
