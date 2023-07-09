import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { sync } from "glob";

const BASE_POST_PATH = "__posts";
export const POSTS_PATH = path.join(process.cwd(), BASE_POST_PATH);

type Post = {
  categories: string;
  date: string;
  description: string;
  slug: string;
  tags: string[];
  title: string;
};

const parsedPost = (postPath: string) => {
  const file = fs.readFileSync(postPath, { encoding: "utf8" });
  const { data } = matter(file);

  return {
    ...data,
  };
};

export const getAllPosts = () => {
  const postPaths: string[] = sync(`${POSTS_PATH}/*.mdx`);
  return postPaths.map((path) => {
    const data = parsedPost(path);

    return {
      data,
    };
  });
};

export const getPost = async (slug: string) => {
  const postFilePath = path.join(POSTS_PATH, `/${slug}.mdx`);
  const source = fs.readFileSync(postFilePath);
  const { content, data } = matter(source);

  return { data, content };
};
