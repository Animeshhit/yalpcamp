import React from "react";
import Styled from "styled-components";

const LoadingCard = () => {
  return (
    <LoaderCard>
      <div className="img_div"></div>
      <div className="h2_div"></div>
      <div className="content_div"></div>
      <div className="content_div"></div>
      <div className="button_loader"></div>
    </LoaderCard>
  );
};

const LoaderCard = Styled.div`
  padding:0.9rem;
  border:1px solid rgba(0,0,0,0.3);
  border-radius:4px;
  background:white;
  .img_div{
    width:100%;
    height:180px;
    background:rgba(0,0,0,0.4);
    border-radius:5px;
  }
  .h2_div{
    width:100%;
    height:35px;
    background:rgba(0,0,0,0.4);
    margin-top:0.7rem;    
    border-radius:25px;
  }
  .content_div{
    width:100%;
    height:10px;
    background:rgba(0,0,0,0.4);
    border-radius:25px;
    margin-top:0.7rem;
  }
  .button_loader{
    width:100%;
    height:40px;
    border-radius:7px;
    margin-top:1rem;
    background:rgba(0,0,0,0.4);
  }
`;

export default LoadingCard;
