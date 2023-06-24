import { styled } from "styled-components";

const HireButton = () => {
  const HireButton = styled.button`
    background-color: #e84a4a;
    width: 200px;
    height: 50px;
    color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: Big-Shoulders-Display;
    font-weight: 800;
    cursor: pointer;
    font-size: 20px;
    transition: 0.3s;
    border: solid #e84a4a 1px;
    
    &:hover {
        background-color: black;
        color: #e84a4a;
    }
  `;

  return <HireButton>OPEN FOR HIRE</HireButton>;
};

export default HireButton;
