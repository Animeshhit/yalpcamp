import React, { useEffect, useState } from "react";
import Logo from "../Assets/Logo.svg";
import { Link, useNavigate } from "react-router-dom";
import ArrowLeft from "../Assets/arrow-back-outline.svg";
import UserImage from "../Assets/User Testimonial.svg";
import { useDispatch } from "react-redux";
import { RegisterAction } from "../state/action-creator";
import { SignIN, Main, Navbar, Section } from "../components/AuthPage";

const SignUp = ({ setProgress, toast }) => {
  const dispatch = useDispatch();
  const redirect = useNavigate();
  const [button, setButton] = useState(false);
  const [userData, setUserData] = useState({
    userName: "",
    userPassword: "",
    userEmail: "",
  });
  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };
  const handleRegister = async (e) => {
    e.preventDefault();
    if (!(userData.userName && userData.userPassword && userData.userEmail)) {
      toast.error("Please Fill The Form Properly");
      return;
    }
    setProgress(30);
    setButton(true);
    try {
      const data = {
        userEmail: userData.userEmail,
        userPassword: userData.userPassword,
        userName: userData.userName,
      };
      await dispatch(RegisterAction(data));
      toast.success("Registration SuccessFull");
      setTimeout(() => {
        redirect("/explore");
      }, 1000);
    } catch (error) {
      if (error.response && error.response.status === 400) {
        toast.error(error.response.data.error);
      } else {
        toast.error("Something went wrong please try again later");
      }
    }
    setButton(false);
    setProgress(100);
  };
  useEffect(() => {
    setProgress(100);
  }, []);
  return (
    <div>
      <SignIN>
        <div className="left-side"></div>
        <div className="right-side"></div>
        <Main>
          <div className="left_content">
            <Navbar>
              <Link to={"/"}>
                <img className="logo" src={Logo} alt="logo" />
              </Link>
              <Link to="/explore" className="nav_link">
                <img src={ArrowLeft} />
                <span>Back to campgrounds</span>
              </Link>
            </Navbar>
            <Section>
              <h1 className="heading-font">
                Start exploring camps from all around the world.
              </h1>
              <div className="input_box">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  name="userName"
                  placeholder="john_doe_91"
                  id="username"
                  value={userData.userName}
                  onChange={handleChange}
                />
              </div>
              <div className="input_box">
                <label htmlFor="userEmail">email</label>
                <input
                  type="email"
                  name="userEmail"
                  placeholder="john_doe12@gmail.com"
                  id="userEmail"
                  value={userData.userEmail}
                  onChange={handleChange}
                />
              </div>
              <div className="input_box">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  placeholder="Enter Your Password"
                  id="password"
                  name="userPassword"
                  value={userData.userPassword}
                  onChange={handleChange}
                />
              </div>
              <button disabled={button} type="button" onClick={handleRegister}>
                {button && <div className="spinner"></div>}
                Create an Account
              </button>
              <p>
                Already a user? <Link to="/login"> Sign in</Link>
              </p>
            </Section>
          </div>
          <div className="right_content">
            <h1 className="heading-font">
              "Nothing can stop the man with the right mental attitude from
              achieving his goal; nothing on earth can help the man with the
              wrong mental attitude."
            </h1>

            <div className="author">
              <img src={UserImage} alt="user" />
              <div className="author_info">
                <h2>May Andrews</h2>
                <p>Professional Hiker</p>
              </div>
            </div>
          </div>
        </Main>
      </SignIN>
    </div>
  );
};

export default SignUp;
