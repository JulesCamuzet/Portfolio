import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

const _EnterButton = styled.button`
  width: 200px;
  height: 50px;
  border: solid #e84a4a 1px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #e84a4a;
  font-family: Iceland-Regular;
  font-size: 20px;
  background-color: transparent;
  position: relative;
  transition: 1s;
  z-index: 100;
  cursor: pointer;

  &::after {
    display: block;
    content: "";
    position: absolute;
    right: 0;
    height: 100%;
    background-color: #e84a4a;
    width: 0%;
    transition: 1s;
    z-index: -1;
  }

  &:hover {
    color: black;
  }

  &:hover::after {
    right: unset;
    left: 0;
    width: 100%;
  }
`;

const EnterButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/control-pannel");
  };

  return <_EnterButton onClick={handleClick}>ENTER THE SYSTEM</_EnterButton>;
};

export default EnterButton;
