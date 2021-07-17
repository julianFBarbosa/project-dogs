import React from "react";
import styled from "styled-components";

const InputWrapper = styled.div`
  margin-bottom: 1rem;
`;

const InputStyled = styled.input`
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

const InputLabel = styled.label`
  display: block;
  font-size: 1rem;
  line-height: 1;
  padding-bottom: 0.5rem;
`;

const InputError = styled.p`
  color: #f31;
  font-size: 0.875rem;
  margin-top: 0.25rem;
`;

const Input = ({ label, type, name, value, onChange, error, onBlur }) => {
  return (
    <InputWrapper>
      <InputLabel htmlFor={name}>{label}</InputLabel>
      <InputStyled
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {error && <InputError>{error}</InputError>}
    </InputWrapper>
  );
};

export default Input;
