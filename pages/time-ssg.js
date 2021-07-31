import { getClientBuildManifest } from "next/dist/client/route-loader";

const TimeSSG = () => {
  return <div>{new Date().toString()}</div>;
};

export default TimeSSG;
