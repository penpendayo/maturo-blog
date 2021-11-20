type Props = {
  children: string;
  src: string;
  alt: string;
  width: number;
  height: number;
};

const CustomImg: React.FC = ({ src, alt, width, height }: Props) => {
  const filename = src.split("/")[5];
  const saveDir = "/img";
  return (
    <img
      src={`${saveDir}/${filename}`}
      alt={alt}
      width={width}
      height={height}
    />
  );
};

export default CustomImg;
