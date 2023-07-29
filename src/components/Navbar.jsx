import React, { useState } from "react";
import styled from "styled-components";
import Container from "./Container";
import Logo from "../Assets/Logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Menu from "../Assets/Hamburger Menu.svg";
import { LogOut } from "../state/action-creator";
import Close from "../Assets/Close.svg";

const Navbar = (props) => {
  const { user, isAuth } = useSelector((state) => state.user);
  const [isOpen, setIsOpen] = useState(false);
  const isLoading = useSelector((state) => state.loading);
  const dispatch = useDispatch();
  const redirect = useNavigate();
  const openNav = () => {
    setIsOpen(!isOpen);
  };
  const handleLogOut = () => {
    props.setProgress(40);
    dispatch(LogOut());
    props.toast.success("Log out Successfully");
    props.setProgress(100);
    setTimeout(() => {
      redirect("/");
    }, 400);
  };
  return (
    <div>
      <header>
        <Container>
          <NavbarContainer>
            <div className="nav_left">
              <Link to="/">
                <img src={Logo} alt="logo" />
              </Link>
              <Link className="link" to="/">
                Home
              </Link>
            </div>
            <div className="nav_right">
              <div
                onClick={openNav}
                className={`close_btn ${isOpen ? "" : "none"}`}
              >
                <img src={Close} alt="" />
              </div>
              {isLoading ? (
                <ul className={`${isOpen ? "" : "none"}`}>
                  <div
                    className="loadingScreen"
                    style={{ width: "180px", height: "45px" }}
                  ></div>
                </ul>
              ) : isAuth ? (
                <ul className={`${isOpen ? "" : "none"}`}>
                  <li>{"@" + user.userName}</li>
                  <li onClick={handleLogOut}>logout</li>
                </ul>
              ) : (
                <ul className={`${isOpen ? "" : "none"}`}>
                  <li>
                    <Link to="/login">Login</Link>
                  </li>
                  <li>
                    <Link className="nav_btn" to="/create-account">
                      Create an account
                    </Link>
                  </li>
                </ul>
              )}
              <div className="menu_btn" onClick={openNav}>
                <img src={Menu} alt="open Menu" />
              </div>
            </div>
          </NavbarContainer>
        </Container>
      </header>
    </div>
  );
};

const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 0;
  .nav_left {
    display: flex;
    align-items: center;
    gap: 2.1rem;
    a {
      text-decoration: none;
      font-weight: 500;
      color: rgba(0, 0, 0, 0.6);
      &:hover {
        color: black;
      }
    }
    .link {
      margin-bottom: 0.4rem;
    }
    @media (max-width: 768px) {
      .link {
        display: none;
      }
    }
  }
  .nav_right {
    display: flex;
    .close_btn {
      position: absolute;
      display: none;
    }
    align-items: center;
    .menu_btn {
      align-items: center;
      justify-content: center;
      cursor: pointer;
      display: none;
      img {
        width: 30px;
        height: 30px;
      }
    }
    @media (max-width: 700px) {
      .menu_btn {
        display: flex;
      }
      ul.none {
        display: none;
      }
      ul {
        display: flex;
        position: absolute;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 2rem;
        left: 1rem;
        right: 1rem;
        top: 5rem;
        background: white;
        bottom: 0;
        border-radius: 5px;
        box-shadow: 0px 0px 12px 1px rgba(0, 0, 0, 0.2);
        li {
          margin-left: 0 !important;
        }
      }
      .close_btn.none {
        display: none;
      }
      .close_btn {
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        width: 14px;
        height: 14px;
        right: 2.2rem;
        top: 6.2rem;
        z-index: 1;
        img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      }
    }
    ul {
      li {
        display: inline-block;
        list-style: none;
        font-weight: 500;
        margin-left: 2rem;
        transition: 0.2s ease;
        cursor: pointer;
        &:first-child {
          font-weight: bold;
          color: rgba(0, 0, 0, 0.6);
          &:hover {
            color: black;
          }
        }
        &:last-child {
          color: rgba(0, 0, 0, 0.6);
          &:hover {
            color: black;
          }
        }
        a {
          display: inline-block;
          color: rgba(0, 0, 0, 0.6);
          font-weight: 500;
          text-decoration: none;
          &:hover {
            color: black;
          }
        }
        .nav_btn {
          padding: 0.7rem 1rem;
          background: black;
          color: white;
          border-radius: 5px;
          &:hover {
            background: rgba(0, 0, 0, 0.8);
            color: white;
          }
        }
      }
    }
  }
`;
export default Navbar;
