import { styled } from "styled-components";
import { useState } from "react";

const _TransitionScreeen = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
`;

const Square = styled.div`
  box-sizing: border-box;
  background-color: #e84a4a;
    transition: .5s;
  transition-delay: ${props => `${props.timing}s`};
  opacity: ${(props) => (props.visible === "true" ? "1" : "0")};
`;

const TestButton = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  cursor: pointer;
  background-color: green;
  z-index: 200;

  &:hover {
    color: white;
  }
`;

const TransitionScreen = () => {
  const [visible, setVisible] = useState("false");
  const squareArray = [];
  for (let i = 0; i < 10; i++) {
    squareArray.push(<Square timing={`${i * 0.05}`} visible={visible} />);
  }

  const testFunction = () => {
    setVisible("true");
    setTimeout(() => {
        setVisible("false");
    }, 1200);
  }

  return (
    <_TransitionScreeen>
      <TestButton onClick={testFunction}>Test</TestButton>
      {squareArray}
    </_TransitionScreeen>
  );
};

export default TransitionScreen;
