import { useState } from "react";
import { styled } from "styled-components";
import NavigationBar from "./NavigationBar";
import NavigationContent from "./NavigationContent";

const _NavigationScreen = styled.div`
  background-color: lightseagreen;
  width: 70%;
  height: 100%;
  position: relative;
`;

const NavigationScreen = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [transition, setTransition] = useState(false);

  return (
    <_NavigationScreen>
      <NavigationContent activeSection={activeSection} transition={transition} />
      <NavigationBar  activeSection={activeSection} setActiveSection={setActiveSection} setTransition={setTransition} transition={transition} />
    </_NavigationScreen>
  );
};

export default NavigationScreen;
