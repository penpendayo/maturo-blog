import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";

import { TwitterEmbed } from "src/components/molecules/TwitterEmbed";
import "src/styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <TwitterEmbed />
      <Component {...pageProps} />
    </RecoilRoot>
  );
}
export default MyApp;
