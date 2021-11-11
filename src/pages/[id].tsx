import { GetStaticProps, GetStaticPaths } from "next";

import { getAllPostIds, getPostData } from "src/lib/posts";
import Article from "src/components/molecules/Article";
import { postDataType } from "src/type/postData";
import { SEO } from "src/components/molecules/SEO";

export default function Post({ postData }: postDataType) {
  return (
    <>
      <SEO title={postData.title} />
      <Article postData={postData} />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params?.id as string);
  return {
    props: {
      postData,
    },
  };
};
