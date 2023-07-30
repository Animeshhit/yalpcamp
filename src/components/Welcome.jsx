import React, { useState } from "react";
import styled from "styled-components";
import Container from "./Container";
import { Link } from "react-router-dom";
import { setDefault, searchPosts } from "../state/action-creator/postAction";
import { useDispatch } from "react-redux";

const Welcome = ({ setProgress, toast }) => {
  const [keyword, setKeyword] = useState("");
  const dispatch = useDispatch();
  const searchPost = async (keyword) => {
    if (keyword == "" && !keyword) {
      return;
    }
    setProgress(30);
    try {
      dispatch(setDefault());
      await dispatch(searchPosts(keyword));
    } catch (err) {
      console.log("SomeThing Went Wrong");
    }
    setProgress(100);
  };
  const handleChange = (e) => {
    setKeyword(e.target.value);
  };
  return (
    <div>
      <Container>
        <Greet>
          <div className="greet_container">
            <h1 className="heading-font">Welcome to YelpCamp!</h1>
            <p>
              View our hand-picked campgrounds from all over the world, or add
              your own.
            </p>
            <div className="input_box">
              <div className="inputTag">
                <input
                  onChange={handleChange}
                  value={keyword}
                  type="text"
                  placeholder="Search for camps"
                />
              </div>
              <button
                onClick={() => {
                  searchPost(keyword);
                }}
                type="button"
              >
                Search
              </button>
            </div>
            <Link to="/new-place">Or add your own campground</Link>
          </div>
        </Greet>
      </Container>
    </div>
  );
};

const Greet = styled.div`
  background: #EDE4FF;
  padding: 2.6rem 1.6rem;
  @media(max-width:500px){
    padding:2rem 1.3rem;
    margin-top:1rem;
  }
  margin-top: 4rem;
  width: 100%;
  border-radius: 4px;
  height: auto;
  .greet_container {
    a{ 
        color:rgba(0,0,0,0.6);
        font-weight:500;
        @media(max-width:500px){
          font-size:0.8rem;
        }
    }
    height: 100%;
    max-width: 40%;
    @media(max-width:950px){
      width:100%;
      max-width:100%;
    }
    h1 {
      font-size: 2rem;
      @media(max-width:500px){
        font-size:1.7rem;
      }
    }
    p {
      margin: 1rem 0;
      font-weight: 500;
      color: rgba(0, 0, 0, 0.6);
      @media(max-width:500px){
        font-size:0.9rem;
      }
    }
    .input_box {
      display: flex;
      align-items: center;
      margin-top: 1.4rem;
      margin-bottom:1.5rem;
      gap: 1.1rem;
      @media(max-width:500px){
        display:block;
      }
      .inputTag {
        width: 70%;
        @media(max-width:500px){
          width:100%;
        }
        input {
          width: 100%;
          padding: 0.9rem 1rem;
          font-weight: 500;
          outline: none;
          border-radius: 4px;
          border: 1px solid rgba(0, 0, 0, 0.6);
          @media(max-width:500px){
            padding:0.65rem 1rem;
          }
          &:focus {
            border: 1px solid black;
          }
        }
      }
      button {
        @media(max-width:500px){
          width:100%;
          margin-top:1.2rem;
          padding:0.7rem 1rem;
        }
        padding: 0.9rem 1rem;
        background: black;
        color: white;
        border-radius: 4px;
        border: none;
        outline: none;
        font-weight: 500;
        cursor: pointer;
        &:hover {
          background: rgba(0, 0, 0, 0.6);
        }
      }
  }
`;

export default Welcome;
