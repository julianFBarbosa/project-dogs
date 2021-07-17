import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  font-size: 1rem;
  font-family: var(--primary-type);
  border: none;
  border-radius: 0.4rem;
  background: #fb1;
  color: #764701;
  cursor: pointer;
  padding: 0.8rem 1.2rem;
  box-sizing: border-box;
  transition: 0.1s;
  min-width: 8rem;

  &:hover,
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px #fea, 0 0 0 4px #fb1;
  }

  &:disabled {
    opacity: 0.5;
    cursor: wait;
  }
`;

const Button = ({ children, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

export default Button;
