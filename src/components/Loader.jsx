import { ColorRing } from "react-loader-spinner";

export const Loader = () => {
  return (
    <ColorRing
      visible={true}
      height="100"
      width="100"
      ariaLabel="blocks-loading"
      wrapperStyle={{}}
      wrapperClass="blocks-wrapper"
      colors={["#000", "#000", "#000", "#000", "#000"]}
    />
  );
};
