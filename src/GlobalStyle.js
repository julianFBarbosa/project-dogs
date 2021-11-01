import styled, { createGlobalStyle, keyframes } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --primary-type: Helvetica, Arial, sans-serif;
    --secondary-type: 'Spectral', georgia;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 16px;
  }

  body {
    margin: 0px;
    padding: 4rem 0 0;
    font-family: var(--primary-type);
  }

  a {
    text-decoration: none;
    color: #333;
  }

  ul, li {
    list-style: none;
  }

  img {
    display: block;
    max-width: 100%;
  }

  button, input {
    display: block;
    font-size: 1rem;
    font-family: var(--primary-type)
  }
`;

export const GlobalTransition = keyframes`
  from {
    opacity: 0;
    transform: translateX(-20px);
  } to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const GlobalAnination = styled.section`
  animation: 0.3s ${GlobalTransition} ease;
`;

export const GlobalTitle = styled.h1`
  font-family: var(--secondary-type);
  line-height: 1;
  font-size: 3rem;
  margin: 1rem 0;
  position: relative;
  color: #333;
  z-index: 1;

  &:after {
    content: "";
    display: block;
    width: 1.5rem;
    height: 1.5rem;
    background: #fb1;
    position: absolute;
    bottom: 5px;
    left: -5px;
    border-radius: 0.2rem;
    z-index: -1;
  }
`;

export const GlobalSubtitle = styled.h2`
  font-family: var(--secondary-type);
  line-height: 1;
  font-size: 2rem;

  &:after {
    content: "";
    display: block;
    background: #ddd;
    height: 0.5rem;
    width: 3rem;
    border-radius: 0.2rem;
  }
`;


export default GlobalStyle;
