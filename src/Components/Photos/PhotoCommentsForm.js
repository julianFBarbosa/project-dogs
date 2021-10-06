import React, { useState } from "react";
import { COMMENT_POST } from "../../api";
import { ReactComponent as Send } from "../../Assets/enviar.svg";
import useFetch from "../../Hooks/useFetch";
import Error from "../Helper/Error";
import * as Form from "./style/PhotoCommentsForm";

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


export default PhotoCommentsForm;
