import styled from "styled-components";

export const wrapper = styled.div`
  margin-bottom: 1rem;
`;

export const input = styled.input`
  padding: 0.1rem;
  border: 1px solid #eee;
  width: 100%;
  padding: 0.8rem;
  border-radius: 0.4rem;
  background: #eee;
  transition: 0.2s;

  &:hover,
  &:focus {
    background: #fff;
    border-color: #fb1;
    outline: none;
    box-shadow: 0 0 0 3px #fea;
  }
`;

export const label = styled.label`
  display: block;
  font-size: 1rem;
  line-height: 1;
  padding-bottom: 0.5rem;
  color: #333;
`;

export const inputError = styled.p`
  color: #f31;
  font-size: 0.875rem;
  margin-top: 0.25rem;
`;