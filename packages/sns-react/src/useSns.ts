import { useContext } from "react";

import snsContext from "./snsContext.js";

const useSns = () => {
  const sns = useContext(snsContext);
  return sns;
};

export default useSns;
