import { Link } from "react-router-dom";
import Styled from "styled-components";
const Error = () => {
  return (
    <div>
      <ErrorContainer>
        <h1>404</h1>
        <div className="right">
          <p>
            Opps! Its Looks Like The Page You Are Looking For is Not Found!!
          </p>
        </div>
      </ErrorContainer>
    </div>
  );
};

const ErrorContainer = Styled.div`
 display:flex;
 align-items:center;
 justify-content:center;
 padding:0 1rem;
 min-height:100vh;
 gap:2rem;
 @media (max-width:1000px){
  flex-direction:column;
  gap:1rem;
 }
 h1{
  color:rgba(0,0,0,0.4);
  font-size:12rem;
  padding:0 2rem;
  border-right:1px solid black;
  @media (max-width:1000px){
    border-right:none;
   }
   @media (max-width:768px){
    font-size:6rem;
   }
 }
 .right{
  text-align:center;
 }
 p{
  font-weight:500;
  font-size:1.2rem;
  @media (max-width:768px){
    font-size:1rem;
   }
 }
`;

export default Error;
