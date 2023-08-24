import React from "react";
import { Link } from "react-router-dom";
import Styled from "styled-components";

const Card = (props) => {
  function trimWord(word, maxLength = 90) {
    if (word.length <= maxLength) {
      return word;
    } else {
      return word.substring(0, maxLength - 3) + "...";
    }
  }
  return (
    <CardContainer>
      <img loading="lazy" src={props.image} alt="demo image of campground" />
      <div>
        <h2 className="heading-font">{props.title}</h2>
        <p>{trimWord(props.description)}</p>
      </div>
      <button type="button">
        <Link to={`/view/${props.id}`}>View Campground</Link>
      </button>
    </CardContainer>
  );
};

const CardContainer = Styled.div`
  padding:0.9rem;
  border:1px solid rgba(0,0,0,0.3);
  border-radius:4px;
  background:white;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  gap:0.5rem;
  img{
    width:100%;
    border-radius:4px;
    object-fit:cover;
    transition:0.2s ease;
    background:rgba(0,0,0,0.6);
    min-height:180px;
    max-height:200px;
    &:hover{
      object-position:center bottom;
    }
  }
  h2{
    font-size:1.2rem;
    margin:0.7rem 0;
    color:rgba(0,0,0,0.8);
    text-transform:capitalize;
    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }
  p{
    line-height:1.6;
    font-weight:500;
    color:rgba(0,0,0,0.6);
    @media (max-width: 768px) {
      font-size: 0.8rem;
    }
  }
  button{
    width:100%;
    margin-top:1rem;
    font-size:1rem;
    @media (max-width: 768px) {
      font-size: 0.8rem;
    }
    font-weight:bold;
    border:1px solid rgba(0,0,0,0.3);
    background:transparent;
    border-radius:4px;
    outline:none;
    &:hover a{
      color:white;
    }
    a{
      display:block;
      padding:0.8rem 0;
      @media (max-width: 768px) {
        padding:0.7rem 0;
      }
      color:unset;
      text-decoration:none;
      &:hover{
        color:white;
      }
    }
    &:hover{
      background:black;
    }
  }
`;

export default Card;
