type Props = {
  children: string;
  src: string;
};

const CustomVideo: React.FC = (props: Props) => {
  if (props.src.startsWith("http://localhost:8000")) {
    const { src, ...other } = props;
    const filename = src.split("/")[5];
    const saveDir = "/img";
    return <video src={`${saveDir}/${filename}`} {...other} />;
  }
  return <video {...props} />; 
};

export default CustomVideo;
