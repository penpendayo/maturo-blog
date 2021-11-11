import Head from "next/head";

import { config } from "src/config";

type Props = {
  title: string;
};

export const SEO: React.VFC<Props> = ({ title }) => {
	const siteTitle = config.siteTitle;
  return (
    <Head>
      {siteTitle === title ? (
        <title>{`${title} | ${config.siteDescription}`}</title>
      ) : (
        <title>{`${title} | ${siteTitle}`}</title>
      )}
      <link
        rel="icon"
        href="/img/profile-tonnma.png"
        sizes="62x62"
        type="image/png"
      />
      <link rel="apple-touch-icon-precomposed" href="/img/profile-tonnma.png" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:site_name" content={siteTitle} />
      <meta property="twitter:card" content="summary" />
      <meta property="twitter:creator" content={config.social.twitter} />
      <meta property="twitter:title" content={title} />
    </Head>
  );
};
