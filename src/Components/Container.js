import React from "react";
import styled from "styled-components";

const Content = styled.section`
  max-width: ${props => props.size};
  padding: 0 1rem;
  margin: 0 auto;
  position: relative;
`;
const Container = ({ size, children, props }) => {
  return (
    <Content size={size ? size : "50rem"} {...props}>
      {children}
    </Content>
  );
};

export default Container;
