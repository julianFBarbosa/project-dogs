import React from "react";
import styled from "styled-components";

const ErrorMessage = styled.p`
  color: #f31;
  margin: 1rem 0;
`;

const Error = ({ error }) => {
  if (!error) return null;
  return <ErrorMessage>{error}</ErrorMessage>;
};

export default Error;
