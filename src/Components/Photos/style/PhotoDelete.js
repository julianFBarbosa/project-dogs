import styled from "styled-components";

export const button = styled.button`
  background: #ddd;
  padding: 0.3rem 0.6rem;
  line-height: 1;
  border: 1px solid transparent;
  font-size: 0.875rem;
  font-family: var(--primary-type);
  cursor: pointer;
  border-radius: 0.4rem;
  transition: 0.1s;

  &:hover,
  &:focus {
    outline: none;
    background: #fff;
    box-shadow: 0 0 0 3px #eee;
    border-color: #333;
  }
`;
