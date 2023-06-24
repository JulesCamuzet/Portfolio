import { styled } from "styled-components";
import EnterButton from "../components/EnterButton";

const LandingPage = () => {
  const LandingPage = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: black;
    gap: 100px;
  `;

  const GiantTitle = styled.h1`
    color: #e84a4a;
    font-family: Big-Shoulders-Display;
    font-weight: 800;
    text-transform: uppercase;
    font-size: 30vw;
    letter-spacing: -1.5vw;
  `;

  const RightContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 50px;
  `;

  const RightTitle = styled.h3`
    color: white;
    font-family: Iceland-Regular;
    font-size: 50px;
    letter-spacing: 2px;
    font-weight: 10;
  `;

  const RightText = styled.p`
    color: white;
    font-family: Iceland-Regular;
    max-width: 600px;
    font-size: 30px;
  `;

  return (
    <LandingPage>
      <GiantTitle>hi!</GiantTitle>
      <RightContent>
        <RightTitle>WELCOME TO MY PORTFOLIO</RightTitle>
        <RightText>
          I have created this website to feel like a game/sci-fi interface. All
          text inside tries to reflect this. You will find ‘achievements’ or
          ‘quests’ that show the progress in my professional life and are
          related to what I am working on.
        </RightText>
        <EnterButton />
      </RightContent>
    </LandingPage>
  );
};

export default LandingPage;
