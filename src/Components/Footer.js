import React from "react";
import { ReactComponent as Dogs } from "../Assets/dogs-footer.svg";
import * as styledFooter from "./style/Footer";

const Footer = () => {
  return (
    <styledFooter.wrapper>
      <Dogs />
      <styledFooter.paragraph>Dogs. Alguns direitos reservados</styledFooter.paragraph>
    </styledFooter.wrapper>
  );
};

export default Footer;
