export type Content = string;

export type Post = {
  categories: string[];
  date: string;
  description: string;
  slug: string;
  tags: string[];
  title: string;
};

export type PostData = {
  data: Post;
}[];
