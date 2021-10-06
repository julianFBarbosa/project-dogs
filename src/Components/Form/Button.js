import React from "react";
import * as StyledButton from "./style/Button";

const Button = ({ children, ...props }) => {
  return <StyledButton.button {...props}>{children}</StyledButton.button>;
};

export default Button;
