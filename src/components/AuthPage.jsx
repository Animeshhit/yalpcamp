import styled from "styled-components";

export const SignIN = styled.section`
  position: relative;
  min-height: 100vh;
  height: auto;
  .left-side {
    position: absolute;
    left: 0;
    bottom: 0;
    top: 0;
    width: 57%;
    background: white;
  }
  .right-side {
    position: absolute;
    right: 0;
    bottom: 0;
    top: 0;
    width: 43%;
  }
`;

export const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100vh;
  max-width: 1100px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  .left_content {
    width: 65%;
    height: 100%;
    flex-shrink: 0;
    @media (max-width: 1050px) {
      max-width: 600px;
      margin: 0 auto;
      width: 100%;
    }
  }
  .right_content {
    padding-left: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media (max-width: 1050px) {
      display: none;
    }
    h1 {
      line-height: 1.6;
    }
    .author {
      display: flex;
      align-items: center;
      gap: 1.2rem;
      margin-top: 1.6rem;
      h2 {
        font-size: 0.9rem;
      }
      p {
        font-size: 1rem;
        font-weight: 500;
        color: rgba(0, 0, 0, 0.6);
      }
    }
  }
`;

export const Navbar = styled.header`
  display: flex;
  width: 85%;
  @media (max-width: 1050px) {
    width: 100%;
  }
  align-items: center;
  justify-content: space-between;
  padding: 2rem 1rem;
  .nav_link {
    text-decoration: none;
    color: black;
    font-weight: 500;
    display: flex;
    align-items: center;
    opacity: 0.6;
    gap: 0.4rem;
    transition: 0.2s ease;
    @media (max-width: 400px) {
      font-size: 0.7rem;
    }
    &:hover {
      opacity: 1;
    }
    img {
      width: 20px;
    }
  }
`;

export const Section = styled.section`
  padding: 0 1rem;
  margin-top: 6rem;
  @media (max-width: 760px) {
    margin-top:2rem;
  }
  h1 {
    font-size: 2.5rem;
    line-height: 1.4;
    margin-bottom: 2.5rem;
    @media (max-width: 768px) {
      font-size:1.8rem;
    }
  }
  .input_box {
    margin-top: 1rem;
    label {
      display: block;
      color: rgba(0, 0, 0, 0.6);
      font-size: 1rem;
      font-weight: 500;
      margin-bottom: 0.7rem;
    }
    input {
      padding: 0.8rem 1rem;
      @media (max-width: 1050px) {
        width: 100%;
      }
      @media (max-width: 600px) {
        padding:0.7rem 1rem;
      }
      width: 85%;
      border: none;
      outline: none;
      background-color: rgba(0, 0, 0, 0.1);
      border-radius: 4px;
      font-size: 0.9rem;
      font-weight: 500;
    }
  }
  button {
    margin-top: 2.1rem;
    padding: 0.9rem 1rem;
    width: 85%;
    font-weight: 500;
    cursor-pointer;
    border:none;
    outline:none;
    cursor:pointer;
    background:black;
    color:white;
    border-radius:4px;
    font-size:1rem;
    transition:0.3s ease;
    &:disabled{
      background:rgba(0,0,0,0.8);
      position:relative;
      display:flex;
      align-items:center;
      justify-content:center;
      gap:1rem;
      .spinner{
      display:flex;
      width:25px;
      height:25px;
      border-radius:50%;
      border:3px solid white;
      border-bottom-color:transparent;
      border-top-color:transparent;
      animation:spin 1s ease infinite;
      }
    }
    .spinner{
      display:none;
    }
    @media (max-width: 1050px) {
      width: 100%;
    }
    @media (max-width: 600px) {
      padding:0.7rem 1rem;
    }
    &:hover{
      background:rgba(0,0,0,0.8);
    }
  }
  p{
    color:rgba(0,0,0,0.6);
    font-weight:500;
    margin-top:1.1rem;
    @media (max-width: 1050px) {
      padding-bottom:2rem;
    }
    @media (max-width: 760px) {
      font-size:0.9rem;
    }
    a{
      color:#0079FF;
      font-weight:600;
    }
  }
`;
