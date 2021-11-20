import { FaRegClock } from "react-icons/fa";
import Date from "src/components/atoms/Date";

type Props = {
  createdAt: string;
};

export const CreatedAt: React.VFC<Props> = ({ createdAt }) => {
  return (
    <small className="block">
      <FaRegClock className="inline mr-1" />
      <Date dateString={createdAt} dateType={"datePublished"} />
    </small>
  );
};
