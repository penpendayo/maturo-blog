import fs from "fs";
import path from "path";
import matter from "gray-matter";
import fetch from "isomorphic-fetch";

const postsDirectory = path.join(
  "http://localhost:8000/wp-json/custom/v1/allposts"
);

type ArticleType = {
  content:string;
  createdAt: string;
  title: string;
  updatedAt: string;
  excerpt:string;
  slug:string;
  category:{name:string};
};

const getAllArticleData = async () => {
  const data = await fetch(postsDirectory);
  const allArticleData: ArticleType[] = await data.json();
  return allArticleData;
};

export async function getSortedPostsData() {
  const allArticleData = await getAllArticleData();
  const allPostsData = allArticleData.map((articleData) => {
    return {
      id: articleData.slug,
      ...articleData,
    };
  });
  return allPostsData.sort((a, b) => {
    if (a.createdAt < b.createdAt) {
      return 1;
    } else {
      return -1;
    }
  });
}

export async function getAllPostIds() {
  const allArticleData = await getAllArticleData();
  return allArticleData.map((articleData) => {
    return {
      params: {
        id: articleData.slug
      },
    };
  });
}

export async function getPostData(id: string) {

  const allArticleData = await getAllArticleData();
  const targetArticleData=allArticleData.find((articleData,i)=>articleData.slug===id)
  return {
    id,
    contentHtml: targetArticleData.content,
    ...targetArticleData ,
  };
}
