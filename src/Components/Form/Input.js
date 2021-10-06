import React from "react";
import * as StyledInput from "./style/Input";

const Input = ({ label, type, name, value, onChange, error, onBlur }) => {
  return (
    <StyledInput.wrapper>
      <StyledInput.label htmlFor={name}>{label}</StyledInput.label>
      <StyledInput.input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {error && <StyledInput.inputError>{error}</StyledInput.inputError>}
    </StyledInput.wrapper>
  );
};

export default Input;
