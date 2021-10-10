import React from "react";
import styled from "styled-components";

const Content = styled.section`
  max-width: ${props => props.size};
  margin: ${props => props.margin};
  padding: 0 1rem;
  position: relative;
`;

const Container = ({ size, children, margin, props }) => {
  return (
    <Content size={size ? size : "50rem"} margin={margin ? margin : "0 auto"}  {...props}>
      {children}
    </Content>
  );
};

export default Container;
