import { FaHistory } from "react-icons/fa";

import Date from "src/components/atoms/Date";

type Props = {
  updatedAt: string;
};

export const UpdatedAt: React.VFC<Props> = ({ updatedAt }) => {
  return (
    <small className="block">
      <FaHistory className="inline mr-1" />
      <Date dateString={updatedAt} dateType={"dateModified"} />
    </small>
  );
};
