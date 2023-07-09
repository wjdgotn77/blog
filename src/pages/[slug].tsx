import { getAllPosts, getPost } from "@/lib/post";

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

export const getStaticProps = async ({ params }: { params: any }) => {
  const post = await getPost(params.slug);

  return {
    props: {
      post: post.data,
      content: post.content,
    },
  };
};

export default function PostPage({ post, content }: any) {
  if (!post) return null;

  return (
    <>
      <div>{post.title}</div>
      <div>{content}</div>
    </>
  );
}
