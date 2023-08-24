import React, { useState, useEffect } from "react";
import { styled } from "styled-components";
import Container from "../components/Container";
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { BaseUrl, Token } from "../config";

const AddComment = ({ setProgress, toast }) => {
  const [comment, setComment] = useState("");
  const [idDisable, setIsDisable] = useState(false);
  const { id } = useParams();
  const { isAuth, user } = useSelector((state) => state.user);
  const isLoading = useSelector((state) => state.loading);
  const redirect = useNavigate();
  const handleChange = (e) => {
    setComment(e.target.value);
  };
  const handleSubmit = async () => {
    if (comment) {
      setProgress(30);
      try {
        if (isLoading) {
          toast.error("Please Wait We Are Getting Your Authentication Status");
        } else {
          setIsDisable(true);
          if (!isAuth) {
            toast.error(
              "Please Login With Your Account we are Redirecting You..."
            );
            setIsDisable(false);
            setTimeout(() => {
              redirect("/login");
            }, 2000);
          } else {
            let data = {
              userName: user.userName,
              userId: user._id,
              text: comment,
            };
            let token = localStorage.getItem(Token);
            let response = await axios.post(
              `${BaseUrl}/api/v1/newComment?api_key=${token}&id=${id}`,
              data
            );
            toast.success("Comment Added");
            setComment("");
            setIsDisable(false);
          }
        }
      } catch (err) {
        toast.error("SomeThing Went Wrong Please Try again later");
      }
      setIsDisable(false);
      setProgress(100);
    } else {
      toast.error("You Can't Give Blank Review");
    }
  };

  useEffect(() => {
    setProgress(100);
  }, []);

  return (
    <div>
      <Navbar setProgress={setProgress} toast={toast} />
      <MainContainer>
        <Container>
          <h1 className="heading-font">Add New Comment</h1>
          <div className="input_box">
            <label htmlFor="description">Description</label>
            <textarea
              className="textarea"
              type="text"
              id="description"
              value={comment}
              onChange={handleChange}
              placeholder="@username Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex aliquam ab eum aperiam veniam cum animi molestiae omnis debitis magnam, maxime saepe natus, illum fugit, hic ipsum sed quidem id?"
            />
          </div>
          <button disabled={idDisable} onClick={handleSubmit} type="button">
            Post Comment
          </button>
        </Container>
      </MainContainer>
    </div>
  );
};

const MainContainer = styled.div`
  max-width: 600px;
  margin: 3rem auto;
  h1 {
    text-align: center;
    font-weight: 600;
    margin-bottom: 3rem;
  }
  .input_box {
    margin-bottom: 1rem;
    label {
      display: block;
      font-weight: 500;
      color: rgba(0, 0, 0, 0.6);
    }
    textarea {
      width: 100%;
      margin: 0.8rem 0;
      padding: 0.8rem 1.2rem;
      border-radius: 4px;
      border: none;
      outline: none;
      font-weight: 500;
      background: #eeeded;
      height: 150px;
      line-height: 1.8;
      resize: none;
      scrollbar-width: thin;
      &::-webkit-scrollbar {
        width: 10px;
      }
      &::-webkit-scrollbar-thumb {
        background-color: #888;
        border-radius: 5px;
      }
      &::-webkit-scrollbar-thumb:hover {
        background-color: #555;
      }
      &::-webkit-scrollbar-track {
        background-color: #f2f2f2;
      }
    }
  }
  button {
    width: 100%;
    padding: 0.9rem 1rem;
    font-weight: bold;
    border: none;
    outline: none;
    background: black;
    color: white;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 0.5rem;
    &:hover {
      background: rgba(0, 0, 0, 0.8);
    }
  }
`;

export default AddComment;
