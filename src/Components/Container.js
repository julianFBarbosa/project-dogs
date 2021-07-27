import React from "react";
import styled from "styled-components";

const Content = styled.div`
  max-width: ${props => props.size};
  padding: 0 2rem;
  margin: 0 auto;
`;
const Container = ({ size, children }) => {
  return <Content size={size ? size : '50rem'}>{children}</Content>;
};

export default Container;
