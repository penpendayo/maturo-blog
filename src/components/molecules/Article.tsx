import React, { useRef, useEffect } from "react";
import { CreatedAt } from "src/components/atoms/CreatedAt";
import { UpdatedAt } from "src/components/atoms/UpdatedAt";
import SnsButton from "src/components/molecules/SnsButton";
import Layout from "src/components/templates/Layout";
import { postDataType } from "src/type/postData";
import rehypeSlug from "rehype-slug";
import rehypeToc from "rehype-toc";
import rehypeParse from "rehype-parse";
import { unified } from "unified";
import rehypeReact from "rehype-react";
import CustomLink from "src/components/utils/CustomLink";
import CustomImg from "src/components/utils/CustomImg";
import CustomVideo from "../utils/CustomVideo";

const Article: React.FC<postDataType> = ({ postData }) => {
  const containerElem = useRef(null);
  useEffect(() => {
    (window as any).twttr?.widgets?.load(containerElem.current);
  }, []);
  return (
    <Layout>
      <article className="mb-10">
        <h2 className="border-b-2">{postData.title}</h2>
        <div className="mb-4 mt-2 text-right">
          {postData.updatedAt !== postData.createdAt && (
            <UpdatedAt updatedAt={postData.updatedAt} />
          )}
          <CreatedAt createdAt={postData.createdAt} />
        </div>
        <div ref={containerElem}>
          {processor.processSync(postData.contentHtml).result}
        </div>
      </article>
      <SnsButton
        url={`https://maturo.penpen-dev.com/${postData.id}`}
        title={postData.title}
      />
    </Layout>
  );
};

const processor = unified()
  .use(rehypeParse, { fragment: true }) // fragmentは必ずtrueにする
  .use(rehypeSlug)
  .use(rehypeToc, {
    headings: ["h2", "h3", "h4"],
  })
  .use(rehypeReact, {
    createElement: React.createElement,
    components: {
      a: CustomLink,
      img: CustomImg,
      video: CustomVideo,
    },
  });

export default Article;
