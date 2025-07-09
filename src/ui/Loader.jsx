import React from "react";
import { SyncLoader } from "react-spinners";

function Loader({ size = "11" }) {
  return <SyncLoader size={11} speedMultiplier={1} color="#50c1ba" />;
}

export default Loader;
