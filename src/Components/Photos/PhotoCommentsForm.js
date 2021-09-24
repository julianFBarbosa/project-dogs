import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { COMMENT_POST } from "../../api";
import { ReactComponent as Send } from "../../Assets/enviar.svg";
import useFetch from "../../Hooks/useFetch";
import Error from "../Helper/Error";

const PhotoCommentsForm = ({ id, setComments }) => {
  const { request, error } = useFetch();
  const [comment, setComment] = useState("");

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    const { url, options } = COMMENT_POST(id, { comment });
    const { response, json } = await request(url, options);
    
    if (response) {
      setComment("");
      setComments((comments) => [...comments, json]);
    }
  };

  return (
    <Form.wrapper onSubmit={handleSubmit}>
      <Form.textarea
        id="comment"
        id="comment"
        placeholder="Comente"
        value={comment}
        onChange={({ target }) => setComment(target.value)}
      ></Form.textarea>
      <Form.button>
        <Send />
      </Form.button>
      <Error error={error} />
    </Form.wrapper>
  );
};

const woof = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Form = {
  wrapper: styled.form`
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: stretch;
    margin: 1rem;
  `,
  textarea: styled.textarea`
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
  `,
  button: styled.button`
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
  `,
};

export default PhotoCommentsForm;
