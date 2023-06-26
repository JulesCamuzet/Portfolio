import { styled } from "styled-components";
import GlitchedImage from "../assets/medias/glitch.jpg";

const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-image: url(${GlitchedImage});
  background-size: cover;
`;

const Layers = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  overflow: hidden;
`;

const Layer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url(${GlitchedImage});
  background-size: cover;

  &:nth-child(1) {
    transform: translateX(10%);
    clip-path: polygon(0 10%, 80% 10%, 80% 20%, 0 20%);
    animation: slideup-left 3s infinite linear;
    z-index: 10;
  }

  &:nth-child(2) {
    transform: translateX(5%) translateY(10%);
    clip-path: polygon(20% 30%, 100% 30%, 100% 45%, 20% 45%);
    animation: slidedown 1s infinite linear;
  }

  &:nth-child(3) {
    transform: translateX(2%) translateY(5%);
    clip-path: polygon(10% 50%, 80% 50%, 80% 55%, 10% 55%);
    animation: slidedown 3s infinite linear;
  }

  &:nth-child(4) {
    transform: translateX(-5%) scaleX(110%);
    animation: apparition 1s infinite linear;
    clip-path: polygon(0 50%, 100% 50%, 100% 100%, 0 100%);
    opacity: 0;
    z-index: 0;
  }

  @keyframes slidedown {
    0% {
      transform: translateY(-100%);
    }
    100% {
      transform: translateY(100%);
    }
  }

  @keyframes slideup-left {
    0% {
      transform: translateY(100%);
    }
    45% {
      transform: translateX(0%);
    }
    46% {
      transform: translateX(25%);
    }
    70% {
      transform: translateX(25%);
    }
    71% {
      transform: translateX(0%);
    }
    100% {
      transform: translateY(-20%);
    }
  }

  @keyframes apparition {
    0% {
      opacity: 1;
    }
    19% {
      opacity: 1;
    }
    20% {
      opacity: 0;
    }
    25% {
      opacity: 1;
    }
    65% {
      opacity: 1;
    }
    66% {
      opacity: 0;
    }
  }
`;

const GlitchScreen = () => {
  return (
    <Container>
      <Layers>
        <Layer />
        <Layer />
        <Layer />
        <Layer />
      </Layers>
    </Container>
  );
};

export default GlitchScreen;
