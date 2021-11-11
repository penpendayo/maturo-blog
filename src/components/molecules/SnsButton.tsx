import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  LineShareButton,
  LineIcon,
  HatenaShareButton,
  HatenaIcon,
  PocketShareButton,
  PocketIcon,
} from "react-share";

type Props = {
  title: string;
  url: string;
};

const SnsButton: React.FC<Props> = ({ title, url }) => {
  return (
    <>
      <strong>シェアする</strong>
      <br />
      <TwitterShareButton url={url} title={title}>
        <TwitterIcon round size="32" />
      </TwitterShareButton>
      <FacebookShareButton url={url} title={title}>
        <FacebookIcon round size="32" />
      </FacebookShareButton>
      <LineShareButton url={url} title={title}>
        <LineIcon round size={32} />
      </LineShareButton>
      <HatenaShareButton url={url} title={title}>
        <HatenaIcon round size={32} />
      </HatenaShareButton>
      <PocketShareButton url={url} title={title}>
        <PocketIcon round size={32} />
      </PocketShareButton>
    </>
  );
};

export default SnsButton;
