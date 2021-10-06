import styled, { keyframes } from "styled-components";

const woof = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const wrapper = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: stretch;
  margin: 1rem;
`;

export const textarea = styled.textarea`
  display: block;
  width: 100%;
  border: none;
  font-size: 1rem;
  font-family: var(--primary-type);
  resize: none;
  padding: 0.5rem;
  border-radius: 0.2rem;
  border: 1px solid #eee;
  background: #eee;
  transition: 0.2s;
  &:focus,
  &:hover {
    outline: none;
    border-color: #fb1;
    background: #fff;
    box-shadow: 0 0 0 3px #fea;
  }
`;

export const button = styled.button`
  border: none;
  cursor: pointer;
  color: #333;
  background: transparent;
  font-size: 1rem;
  padding: 0 1rem;
  overflow: hidden;

  &:focus,
  &:hover {
    outline: none;
    svg {
      path {
        fill: #fea;
        stroke: #fb1;
      }
    }
    g {
      animation: ${woof} 0.6s infinite;
    }
  }
`;
