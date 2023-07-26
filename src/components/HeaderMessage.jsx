import React, { useState } from "react";
import Styled from "styled-components";
import Close from "../Assets/Close.svg";
import Container from "../components/Container";

const HeaderMessage = () => {
  const [Message, setMessage] = useState(true);

  const handleMessage = () => {
    setMessage(false);
  };
  return (
    <div>
      <HeaderMessageContainer
        style={{
          transition: "0.2s ease",
          display: Message ? "block" : "none",
        }}
      >
        <Container className="message_container">
          <p className="header-font">
            This project was made by
            <a href="https://github.com/Animeshhit">Animesh</a>
            and designed by
            <a href="http://www.codewell.cc/">Codewell</a>
          </p>
          <div className="close-menu" onClick={handleMessage}>
            <img src={Close} />
          </div>
        </Container>
      </HeaderMessageContainer>
    </div>
  );
};

const HeaderMessageContainer = Styled.div`
 background:black;
 color:white;
 text-align:center;
 padding:1rem 0;
 p{
  font-weight:600;
  line-height:1.8;
  a{
    padding:0 0.4rem;
    color:#6528F7;
  }
 }
 .message_container{
  display:flex;
  align-items:center;
  justify-content:center;
  @media(max-width:700px){
    flex-direction:column;
  }
  .close-menu{
    display:flex;
    align-items:center;
    justify-content:center;
    margin-left:2rem;
    cursor:pointer;
    @media(max-width:700px){
        width:100%;
        margin-top:2rem;
        margin-left:0rem;
    }
  }
 }
`;

export default HeaderMessage;
