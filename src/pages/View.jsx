import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { styled } from "styled-components";
import MapImage from "../Assets/Map.png";
import Container from "../components/Container";
import Comment from "../components/Comment";
import chatIcon from "../Assets/Chat Bubble.svg";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
import { BaseUrl } from "../config";

const View = ({ setProgress, toast }) => {
  const { id } = useParams();
  const { user } = useSelector((state) => state.user);
  const [post, setPost] = useState(null);
  const redirect = useNavigate();
  const getPost = async () => {
    try {
      let response = await axios.get(`${BaseUrl}/api/v1/post?id=${id}`);
      setPost(response.data.post);
    } catch (err) {
      toast.error("Opps! Something Went Wrong Please Try Again");
      setPost(null);
      setTimeout(() => {
        redirect("/");
      }, 100);
    }
  };
  const handleDelete = async (props) => {
    setProgress(40);
    try {
      let response = await axios.delete(
        `${BaseUrl}/api/v1/deleteComment?api_key=${props.token}&postId=${props.postId}&commentId=${props.commentId}`
      );
      toast.success("comment removed!!");
      setPost(response.data.post);
    } catch (err) {
      toast.error("Opps! Something Went Wrong!! Please Try Again later");
    }
    setProgress(100);
  };
  useEffect(() => {
    setProgress(30);
    getPost();
    setProgress(100);
  }, [id]);
  if (post) {
    return (
      <div>
        <Navbar setProgress={setProgress} toast={toast} />
        <Container style={{ margin: "2rem auto" }}>
          <ViewContainer>
            <div className="map_view_container">
              <div className="MAP">
                <img src={MapImage} alt="map" />
              </div>
            </div>
            <div className="main_view">
              <div className="main_content">
                <img
                  src={post.image}
                  alt={`${post.title} image`}
                  loading="lazy"
                />
                <div className="info">
                  <h1 className="heading-font">{post.title}</h1>
                  <p>${post.price}</p>
                </div>
                <p className="description">{post.description}</p>
                <p className="author">
                  <i>submitted by {post.userName}</i>
                </p>
              </div>
              <div className="comments_content">
                {post && post.comments.length > 0 ? (
                  <>
                    {post.comments.map((comment, index) => {
                      return (
                        <Comment
                          key={index}
                          userName={comment.userName}
                          userId={comment.userId}
                          text={comment.text}
                          postId={post._id}
                          commentId={comment._id}
                          createdAt={comment.createdAt}
                          handleDelete={handleDelete}
                          isAuth={
                            user
                              ? comment.userId == user._id
                                ? true
                                : post.userId == user._id
                                ? true
                                : false
                              : false
                          }
                        />
                      );
                    })}
                  </>
                ) : (
                  <>
                    <p
                      style={{
                        margin: "0.8rem 0",
                        fontWeight: "500",
                        color: "rgba(0,0,0,0.6)",
                      }}
                    >
                      No Comments Till Now...
                    </p>
                  </>
                )}
                <div className="button_div">
                  <button type="button">
                    <Link to={`/new-comment/${post._id}`}>
                      <img src={chatIcon} />
                      <span>Leave a Review</span>
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </ViewContainer>
        </Container>
      </div>
    );
  } else {
    return (
      <>
        <Navbar setProgress={setProgress} toast={toast} />
        <h2 style={{ textAlign: "center", margin: "3rem 0" }}>Loading...</h2>;
      </>
    );
  }
};

const ViewContainer = styled.section`
  display: flex;
  align-items: flex-start;
  gap: 1.4rem;
  @media (max-width: 1058px) {
    flex-direction: column-reverse;
    gap: 0;
    align-items: center;
  }
  .map_view_container {
    width: 30%;
    height: 400px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    padding: 2rem;
    @media (max-width: 1058px) {
      width: 70%;
    }
    @media (max-width: 768px) {
      width: 100%;
      height: 370px;
      padding: 1.4rem;
    }
    .MAP {
      width: 100%;
      height: 100%;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 5px;
    }
  }

  .main_view {
    width: 70%;
    height: auto;
    @media (max-width: 768px) {
      width: 100%;
    }
    .main_content {
      border: 1px solid rgba(0, 0, 0, 0.2);
      border-radius: 5px;
      padding: 2rem;
      @media (max-width: 768px) {
        padding: 1.4rem;
      }
      img {
        width: 100%;
        object-fit: cover;
        object-position: center;
        border-radius: 5px;
        height: 300px;
        @media (max-width: 768px) {
          height: 200px;
        }
        background: rgba(0, 0, 0, 0.6);
      }
      .info {
        display: flex;
        align-items: center;
        margin: 0.9rem 0;
        justify-content: space-between;
        h1 {
          font-size: 1.5rem;
          text-transform: capitalize;
          @media (max-width: 768px) {
            font-size: 1.2rem;
          }
        }
        p {
          font-weight: 500;
          font-size: 1rem;
          @media (max-width: 768px) {
            font-size: 0.9rem;
          }
        }
      }
      .description {
        line-height: 1.6;
        font-weight: 500;
        text-transform: capitalize;
        color: rgba(0, 0, 0, 0.6);
        @media (max-width: 768px) {
          font-size: 0.9rem;
        }
      }
      .author {
        font-weight: 500;
        color: rgba(0, 0, 0, 0.7);
        margin-top: 1rem;
        @media (max-width: 768px) {
          font-size: 0.9rem;
        }
      }
    }
    .comments_content {
      border: 1px solid rgba(0, 0, 0, 0.2);
      margin: 2rem 0;
      padding: 2rem;
      padding-top: 1rem;
      border-radius: 5px;
      .button_div {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        margin-top: 2rem;
        button {
          padding: 0.8rem 1rem;
          background: black;
          @media (max-width: 768px) {
            padding: 0.7rem 1rem;
          }
          a {
            text-decoration: none;
            color: white;
            display: flex;
            align-items: center;
            gap: 1rem;
            font-weight: bold;
          }
          border-radius: 5px;
          border: none;
          outline: none;
          &:hover {
            background: rgba(0, 0, 0, 0.7);
          }
        }
      }
    }
  }
`;

export default View;
