import { useEffect, useState } from "react";
import { styled } from "styled-components";

const Title1 = styled.h1`
  color: #e84a4a;
  font-family: Big-Shoulders-Display;
  font-weight: 800;
  text-transform: uppercase;
  font-size: 30vw;
  letter-spacing: -1.5vw;
  position: relative;
  z-index: 30;
`;

const Title2 = styled.h1`
  color: #03A9F4;
  font-family: Big-Shoulders-Display;
  font-weight: 800;
  text-transform: uppercase;
  font-size: 30vw;
  letter-spacing: -1.5vw;
  transform: translate(-20px, 10px);
  position: absolute;
  z-index: 20;
  top: 0;
  left: 0;
  display: ${props => props.active === "true" ? "block" : "none"};
`;

const Title3 = styled.h1`
  color: #2ecc71;
  font-family: Big-Shoulders-Display;
  font-weight: 800;
  text-transform: uppercase;
  font-size: 30vw;
  letter-spacing: -1.5vw;
  transform: translate(10px, 5px);
  position: absolute;
  z-index: 10;
  top: 0;
  left: 0;
  display: ${props => props.active === "true" ? "block" : "none"};
`;

const Title4 = styled.h1`
  color: purple;
  font-family: Big-Shoulders-Display;
  font-weight: 800;
  text-transform: uppercase;
  font-size: 30vw;
  letter-spacing: -1.5vw;
  transform: translate(10px, -10px);
  position: absolute;
  z-index: 0;
  top: 0;
  left: 0;
  display: ${props => props.active === "true" ? "block" : "none"};
`;

const Container = styled.div`
  position: relative;
`;

const GlitchedGiantTitle = () => {
  const [displayedTitles, setDisplayedTitles] = useState([true, false, false, false]);
  useEffect(() => {
    setInterval(() => {
      let rand = Math.floor(Math.random() * 15);
      if (rand === 0) {
        const newTab = displayedTitles.map(() => {
          let rand_ = Math.floor(Math.random() * 2);
          if (rand_ === 0) {
            return true;
          } else {
            return false;
          }
        })
        setDisplayedTitles(newTab);
        console.log(newTab);
      }
    }, 10)
  }, [])


  return (
    <Container>
      <Title1 active={displayedTitles[0].toString()}>hi!</Title1>
      <Title2 active={displayedTitles[1].toString()}>hi!</Title2>
      <Title3 active={displayedTitles[2].toString()}>hi!</Title3>
      <Title4 active={displayedTitles[3].toString()}>hi!</Title4>
    </Container>
  );
};

export default GlitchedGiantTitle;
