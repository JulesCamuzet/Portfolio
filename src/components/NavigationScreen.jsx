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

  return (
    <_NavigationScreen>
      <NavigationContent activeSection={activeSection} />
      <NavigationBar  activeSection={activeSection} setActiveSection={setActiveSection} />
    </_NavigationScreen>
  );
};

export default NavigationScreen;
