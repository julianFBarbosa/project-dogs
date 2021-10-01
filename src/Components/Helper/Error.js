import React from "react";
import * as styleError from "./style/Error";

const Error = ({ error }) => {
  if (!error) return null;
  return <styleError.messsage>{error}</styleError.messsage>;
};

export default Error;
