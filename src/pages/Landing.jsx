import React, { useEffect } from "react";
import styled from "styled-components";
import Container from "../components/Container";
import Logo from "../Assets/Logo.svg";
import { Link, Navigate } from "react-router-dom";
import Checkmark from "../Assets/Checkmark.svg";
import Airbnb from "../Assets/Airbnb.svg";
import Booking from "../Assets/Booking.svg";
import plumGuide from "../Assets/Plum Guide.svg";
import LandingImage from "../Assets/Hero Image.jpg";
import { useSelector } from "react-redux";
import HeaderMessage from "../components/HeaderMessage";
import Loading from "../components/Loading";

export default function Landing({ setProgress }) {
  const { isAuth } = useSelector((state) => state.user);
  const isLoading = useSelector((state) => state.loading);
  useEffect(() => {
    setProgress(100);
  }, []);
  if (isLoading) {
    return <Loading />;
  } else {
    if (isAuth) {
      return <Navigate to={"/explore"} replace={true} />;
    } else {
      return (
        <div>
          {/* navbar  */}
          <HeaderMessage />
          <Navbar>
            <Container>
              <Link className="logo">
                <img src={Logo} alt="Logo" />
              </Link>
            </Container>
          </Navbar>

          {/* body  */}

          <LandingBody>
            <div className="landing-left">
              <h1 className="heading-font">Explore the best camps on Earth.</h1>
              <p>
                YelpCamp is a curated list of the best camping spots on Earth.
                Unfiltered and unbiased reviews.
              </p>
              <ul>
                <li>
                  <img src={Checkmark} alt="done" />
                  <span>Add your own camp suggestions.</span>
                </li>
                <li>
                  <img src={Checkmark} alt="done" />
                  <span>Leave reviews and experiences.</span>
                </li>
                <li>
                  <img src={Checkmark} alt="done" />
                  <span>See locations for all camps.</span>
                </li>
              </ul>
              <Link to="/explore">
                <button type="button">View Campgrounds</button>
              </Link>
              <small>Partnered with:</small>
              <div className="partners">
                <img src={Airbnb} alt="airbnb" />
                <img src={Booking} alt="booking" />
                <img src={plumGuide} alt="plum guide" />
              </div>
            </div>
            <div className="landing-right">
              <img src={LandingImage} alt="landingImage" />
            </div>
          </LandingBody>
        </div>
      );
    }
  }
}

const Navbar = styled.header`
  display: flex;
  align-items: center;
  padding: 1.4rem 0;
`;

const LandingBody = styled.section`
  a {
    text-decoration: none;
  }
  display: flex;
  overflow: hidden;
  align-items: center;
  @media (max-width: 1000px) {
    flex-direction: column-reverse;
  }
  justify-content: space-between;
  gap: 0.7rem;
  width: 100%;
  height: 100%;
  max-width: 1100px;
  padding: 0 1rem;
  margin-inline: auto;
  min-height: 90vh;
  .landing-left {
    max-width: 50%;
    @media (max-width: 1000px) {
      margin-top: 1rem;
      width: 100%;
      max-width: 100%;
    }
    h1 {
      font-weight: bold;
      font-size: 3rem;
      @media (max-width: 600px) {
        font-size: 1.6rem;
      }
    }
    & > p {
      color: rgba(0, 0, 0, 0.6);
      font-weight: 500;
      margin: 1.2rem 0;
      @media (max-width: 600px) {
        font-size: 0.9rem;
      }
    }
    ul > li {
      list-style: none;
      display: flex;
      align-items: center;
      gap: 1rem;
      font-weight: 500;
      color: rgba(0, 0, 0, 0.6);
      margin-bottom: 0.8rem;
      @media (max-width: 600px) {
        font-size: 0.9rem;
      }
    }
    ul > li:last-child {
      margin-bottom: 1.6rem;
    }
    button {
      display: block;
      background-color: black;
      color: white;
      font-weight: 500;
      border: none;
      outline: none;
      padding: 1rem 1.3rem;
      border-radius: 8px;
      cursor: pointer;
      &:hover {
        background-color: rgba(0, 0, 0, 0.8);
      }
      @media (max-width: 600px) {
        padding: 0.8rem 1rem;
      }
    }
    small {
      font-weight: 500;
      display: block;
      margin-top: 2.1rem;
      font-size: 1.1rem;
      color: rgba(0, 0, 0, 0.6);
      @media (max-width: 600px) {
        font-size: 0.8rem;
      }
    }
    .partners {
      margin-top: 0.6rem;
      display: flex;
      align-items: center;
      gap: 2rem;
      flex-wrap: wrap;
      @media (max-width: 600px) {
        column-gap: 1rem;
        row-gap: 0;
      }
    }
  }
  .landing-right {
    width: 50%;
    @media (max-width: 1000px) {
      width: 100%;
      margin-top: 1.2rem;
    }
    height: 100%;
    img {
      width: 100%;
      height: 500px;
      @media (max-width: 768px) {
        height: 350px;
      }
      @media (max-width: 600px) {
        height: 250px;
      }
      object-fit: cover;
      border-radius: 8px;
    }
  }
`;
