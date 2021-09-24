import React, { useContext, useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { UserContext } from "../../UserContext";
import PhotoCommentsForm from "./PhotoCommentsForm";

const PhotoComments = ({ id, comments: paramComments }) => {
  const [comments, setComments] = useState(() => paramComments);
  const commentsSection = useRef(null)
  const { login } = useContext(UserContext);

  useEffect(() => {
    commentsSection.current.scrollTop = commentsSection.current.scrollHeight;
  }, [comments])

  return (
    <>
      <Photo.comments ref={commentsSection}>
        {comments.map((comment) => (
          <Photo.comment key={comment.comment_ID}>
            <b>{comment.comment_author}: </b>
            <span>{comment.comment_content}</span>
          </Photo.comment>
        ))}
      </Photo.comments>
      {login && <PhotoCommentsForm id={id} setComments={setComments} />}
    </>
  );
};

const Photo = {
  comments: styled.ul`
    overflow-y: auto;
    word-break: break-word;
    padding: 0 2rem;
  `,
  comment: styled.li`
    margin-bottom: .5rem;
    line-height: 1.2;
  `,
}

export default PhotoComments;
