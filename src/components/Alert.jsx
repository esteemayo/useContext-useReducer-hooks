import { useEffect } from "react";

import { useGlobalContext } from "../utils/context";

const Alert = ({ msg, type }) => {
  const { people, hideAlert } = useGlobalContext();

  useEffect(() => {
    const timeout = setTimeout(() => {
      hideAlert();
    }, 3000);

    return () => clearTimeout(timeout);
  }, [hideAlert, people]);

  return <p className={`alert alert-${type}`}>{msg}</p>;
};

export default Alert;
