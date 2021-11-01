import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  GlobalAnination,
  GlobalSubtitle,
  GlobalTitle,
} from "../../../GlobalStyle";
import Button from "../../Form/Button";

export const Form = styled.form`
  margin-bottom: 2rem;
`;
export const RegisterWrapper = styled.div`
  margin: 4rem 0;
`;
export const Description = styled.p`
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

export const RegisterButton = styled(Button)``;
export const FormSection = styled(GlobalAnination)``;
export const Title = styled(GlobalTitle)``;
export const Subtitle = styled(GlobalSubtitle)`
  color: #333;
`;
export const ForgotLink = styled(Link)`
  display: inline-block;
  color: #666;
  padding: 0.5rem 0;
  line-height: 1;

  &:after {
    content: "";
    height: 2px;
    width: 100%;
    background: currentColor;
    display: block;
  }
`;
