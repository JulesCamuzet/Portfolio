import { styled } from "styled-components";

const _NavigationButton = styled.div`
  display: flex;
  flex-direction: column;
  border-left: solid ${props => props.active === "true" ? "#e84a4a" : "#363636"} 3px;
  width: 200px;
  cursor: pointer;
`;

const Title = styled.h2`
  font-family: Big-Shoulders-Display;
  font-size: 30px;
  color: lightgray;
  width: 100%;
  opacity: .9;
  background-color: ${props => props.active === "true" ? "#e84a4a" : "#363636"};
`;

const Description = styled.p`
  font-family: Iceland-Regular;
  font-size: 15px;
  height: 50px;
  color: lightgray;
  background-color: black;
  box-sizing: border-box;
  padding-left: 5px;
`;

const NavigationButton = (props) => {
  const title = props.title;
  const description = props.description;
  const rank = props.rank;
  const activeSection = props.activeSection;
  const setActiveSection = props.setActiveSection;

  const handleClick = () => {
    setActiveSection(rank);
  };

  const active = activeSection === rank;

  return (
    <_NavigationButton onClick={handleClick} active={active.toString()}>
      <Title active={active.toString()}>{title}</Title>
      <Description>{description}</Description>
    </_NavigationButton>
  );
};

export default NavigationButton;
