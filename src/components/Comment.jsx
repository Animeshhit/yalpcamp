import React from "react";
import { styled } from "styled-components";
import moment from "moment";
import deleteIcon from "../Assets/trash-outline.svg";
import { Token } from "../config";

const Comment = (props) => {
  const deleteComment = () => {
    props.handleDelete({
      token: localStorage.getItem(Token),
      postId: props.postId,
      commentId: props.commentId,
    });
  };
  return (
    <div>
      <CommentContainer>
        <div className="comment_info">
          <h2 className="heading-font">{props.userName}</h2>
          <p>{moment(props.createdAt).fromNow()}</p>
        </div>
        <div className="comment_content">
          <p className="content">{props.text}</p>
          {props.isAuth && (
            <button onClick={deleteComment} type="button">
              <img src={deleteIcon} alt="delete" />
            </button>
          )}
        </div>
      </CommentContainer>
    </div>
  );
};

const CommentContainer = styled.div`
  .comment_info {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 1.2rem 0;
    h2 {
      font-size: 1.1rem;
      text-transform: capitalize;
      @media (max-width: 768px) {
        font-size: 1rem;
      }
    }
    p {
      font-weight: 500;
      font-size: 0.9rem;
      color: rgba(0, 0, 0, 0.6);
      @media (max-width: 768px) {
        font-size: 0.8rem;
      }
    }
  }
  .comment_content {
    margin-top: 0.5rem;
    padding-bottom: 1.5rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;

    .content {
      line-height: 1.6;
      font-weight: 500;
      text-transform: capitalize;
      color: rgba(0, 0, 0, 0.6);
      @media (max-width: 768px) {
        font-size: 0.8rem;
      }
    }
    button {
      width: 23px;
      height: 23px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      background: transparent;
      border: none;
      outline: none;
      opacity: 0.7;
      @media (max-width: 768px) {
        width: 18px;
        height: 18px;
      }
      &:hover {
        opacity: 1;
      }
      img {
        object-fit: contain;
      }
    }
  }
`;

export default Comment;
