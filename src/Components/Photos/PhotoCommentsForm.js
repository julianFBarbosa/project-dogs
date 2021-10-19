import React, { useState } from "react";
import { COMMENT_POST } from "../../api";
import { ReactComponent as Send } from "../../Assets/enviar.svg";
import useFetch from "../../Hooks/useFetch";
import Error from "../Helper/Error";
import * as Form from "./style/PhotoCommentsForm";

const PhotoCommentsForm = ({ id, setComments }) => {
  const [comment, setComment] = useState("");
  const { request, error } = useFetch();

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    const { url, options } = COMMENT_POST(id, { comment });
    const { response, json } = await request(url, options);
    
    if (response.ok) {
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
      {console.log('error', error)}
      <Error error={error} />
    </Form.wrapper>
  );
};


export default PhotoCommentsForm;
