import React from "react";
import styled from "styled-components";

const Loading = () => {
  return (
    <LoadingContainer>
      <h1>Loading</h1>
      <div className="spinner"></div>
    </LoadingContainer>
  );
};

const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  min-height: 100vh;
  padding: 0 1rem;
  @media (max-width: 600px) {
    gap: 1.5rem;
  }
  h1 {
    font-size: 5rem;
    color: rgba(0, 0, 0, 0.3);
    @media (max-width: 600px) {
      font-size: 2rem;
    }
  }
  .spinner {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 3px solid rgba(0, 0, 0, 0.3);
    border-top-color: transparent;
    border-bottom-color: transparent;
    animation: 2s spin ease infinite;
    @media (max-width: 600px) {
      width: 30px;
      height: 30px;
    }
  }
`;

export default Loading;
