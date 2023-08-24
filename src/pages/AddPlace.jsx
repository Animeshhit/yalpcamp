import React, { useState, useEffect } from "react";
import { styled } from "styled-components";
import Container from "../components/Container";
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BaseUrl, Token } from "../config";

const AddPlace = ({ setProgress, toast }) => {
  const { isAuth, user } = useSelector((state) => state.user);
  const [isBtnDisabled, setIsBtnDisabled] = useState(false);
  const isLoading = useSelector((state) => state.loading);
  const redirect = useNavigate();
  const [place, setPlace] = useState({
    title: "",
    price: "",
    image: "",
    description: "",
  });

  const handleChange = (e) => {
    setPlace({ ...place, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (place.title && place.price && place.image && place.description) {
      setProgress(30);
      try {
        if (isLoading) {
          toast.error("Please Wait We Are Getting Your Authentication Status");
        } else {
          setIsBtnDisabled(true);
          if (!isAuth) {
            toast.error(
              "Please Login With Your Account we are Redirecting You..."
            );
            setIsBtnDisabled(false);
            setTimeout(() => {
              redirect("/login");
            }, 2000);
          } else {
            const data = {
              ...place,
              userId: user._id,
              userName: user.userName,
            };
            let token = localStorage.getItem(Token);
            let response = await axios.post(
              `${BaseUrl}/api/v1/newPost?api_key=${token}`,
              data
            );
            toast.success("Place Added SuccessFully");
            setIsBtnDisabled(false);
            setTimeout(() => {
              redirect("/");
            }, 2000);
          }
        }
      } catch (err) {
        let errMessage = err.response
          ? err.response.data.message
          : "Something Went Wrong! Please try again Later";
        toast.error(errMessage);
      }
      setIsBtnDisabled(false);
      setProgress(100);
    } else {
      toast.error("Please Fill The Data properly!!");
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
          <h1 className="heading-font">Add New Place</h1>
          <div className="input_box">
            <label htmlFor="pName">Place Name</label>
            <input
              type="text"
              id="pName"
              name="title"
              placeholder="Seven Sisters WaterFull"
              value={place.title}
              onChange={handleChange}
            />
          </div>
          <div className="input_box">
            <label htmlFor="price">Price</label>
            <input
              type="number"
              name="price"
              id="price"
              placeholder="$1992"
              value={place.price}
              onChange={handleChange}
            />
          </div>
          <div className="input_box">
            <label htmlFor="image">Image</label>
            <input
              type="text"
              id="image"
              name="image"
              placeholder="https://demo_image.jpg"
              value={place.image}
              onChange={handleChange}
            />
          </div>
          <div className="input_box">
            <label htmlFor="description">Description</label>
            <textarea
              className="textarea"
              type="text"
              id="description"
              value={place.description}
              name="description"
              onChange={handleChange}
              placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex aliquam ab eum aperiam veniam cum animi molestiae omnis debitis magnam, maxime saepe natus, illum fugit, hic ipsum sed quidem id?"
            />
          </div>
          <button disabled={isBtnDisabled} type="button" onClick={handleSubmit}>
            Add Campground
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
    input {
      margin: 0.8rem 0;
      padding: 0.8rem 1.2rem;
      width: 100%;
      border-radius: 4px;
      border: none;
      outline: none;
      font-weight: 500;
      background: #eeeded;
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

export default AddPlace;
