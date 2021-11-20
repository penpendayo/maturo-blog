import type { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import Layout from "src/components/templates/Layout";
import { getSortedPostsData } from "src/lib/posts";
import {CreatedAt} from "src/components/atoms/CreatedAt"
import {UpdatedAt} from "src/components/atoms/UpdatedAt"
import { SEO } from "src/components/molecules/SEO";
import { config } from "src/config";

type Props = {
  allPostsData: {
    createdAt: string;
    title: string;
    id: string;
    updatedAt?:string
  }[];
};

const Home: NextPage<Props> = ({ allPostsData }) => {
  return (
    <>
      <SEO title={config.siteTitle}  />
      <Layout>
        {allPostsData.map(({ id, createdAt, title, updatedAt }) => (
          <article key={id}>
            <Link href={`/${id}`}>
              <a className="block align-text-bottom mb-10 p-3 hover:bg-gray-300">
                <h2 className="mb-8">{title}</h2>
                <div className="text-right">
                  {updatedAt ? (
                    <UpdatedAt updatedAt={updatedAt}></UpdatedAt>
                  ) : (
                    <CreatedAt createdAt={createdAt}></CreatedAt>
                  )}
                </div>
              </a>
            </Link>
          </article>
        ))}
      </Layout>
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = await getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};
