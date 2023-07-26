import React from "react";
import Styled from "styled-components";
import Logo from "../Assets/Logo.svg";
import Container from "./Container";

const Footer = () => {
  return (
    <div>
      <FooterContainer>
        <Container className="container">
          <img src={Logo} alt="logo" />
        </Container>
      </FooterContainer>
    </div>
  );
};

const FooterContainer = Styled.div`
 .container{
    display:flex;
    padding-bottom:3.5rem;
    align-items:center;
 }

`;

export default Footer;
