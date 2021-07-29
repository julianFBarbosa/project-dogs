import React from "react";
import styled from "styled-components";

const FooterWrapper = styled.footer`
  background: #fff;
  margin-top: 2rem;
  text-align: center;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <p>Footer</p>
    </FooterWrapper>
  );
};

export default Footer;
