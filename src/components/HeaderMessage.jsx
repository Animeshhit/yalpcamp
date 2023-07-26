import React from "react";
import Styled from "styled-components";
import Container from "../components/Container";

const HeaderMessage = () => {
  return (
    <div>
      <HeaderMessageContainer>
        <Container className="message_container">
          <p className="header-font">
            This project was made by
            <a href="https://github.com/Animeshhit">Animesh</a>
            <br className="br" />
            and designed by
            <a href="http://www.codewell.cc/">Codewell</a>
          </p>
        </Container>
      </HeaderMessageContainer>
    </div>
  );
};

const HeaderMessageContainer = Styled.div`
 background:black;
 color:white;
 padding:0.9rem 0;
 br{
  display:none;
  @media(max-width:500px){
    display:block;
  }
 }
 .message_container{
    text-align:center;
    p{
      font-size:1rem;
      font-size:0.9rem;
      a{
        padding:0 0.4rem;
        color:red;
        text-decoration:none;
      }
  }
}
`;

export default HeaderMessage;
