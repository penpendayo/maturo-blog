import { CreatedAt } from "src/components/atoms/CreatedAt";
import { UpdatedAt } from "src/components/atoms/UpdatedAt";
import SnsButton from "src/components/molecules/SnsButton";
import Layout from "src/components/templates/Layout";
import { postDataType } from "src/type/postData";

const Article: React.FC<postDataType> = ({ postData }) => {
  return (
    <Layout>
      <article className="mb-10">
        <h2 className="border-b-2">{postData.title}</h2>
        <div className="mb-4 mt-2 text-right">
          {postData.updatedAt && <UpdatedAt updatedAt={postData.updatedAt} />}
          <CreatedAt createdAt={postData.createdAt} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
      <SnsButton
        url={`https://maturo.penpen-dev.com/${postData.id}`}
        title={postData.title}
      />
    </Layout>
  );
};

export default Article;
