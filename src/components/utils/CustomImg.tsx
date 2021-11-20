type Props = {
  children: string;
  src: string;
  alt: string;
  width: number;
  height: number;
};

const CustomImg: React.FC = (props: Props) => {
  if (props.src.startsWith("http://localhost:8000")) {
    const { src, alt, width, height } = props;
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
  }
  return <img {...props} />; // eslint-disable-line
};

export default CustomImg;
