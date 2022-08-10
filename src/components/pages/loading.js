import { ThreeDots } from "react-loader-spinner";

const Loading = () => {
  return (
    <>
      <ThreeDots
        type="ThreeDots"
        color="white"
        height={40}
        width={80}
        timeout={10000}
      />
    </>
  );
};

export default Loading;