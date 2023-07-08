import { styled } from "styled-components";
import BeginningSection from "./NavigationSections/BeginningSection";
import TransitionScreen from "./TransitionScreen";
import { useEffect, useState } from "react";

const _NavigationContent = styled.div`
  background-color: lightgoldenrodyellow;
  width: 100%;
  height: 100%;
  position: relative;
`;

const NavigationContent = (props) => {
  const activeSection = props.activeSection;
  const transition = props.transition;

  const [currentSection, setCurrentSection] = useState(<BeginningSection />)

  const sectionsRanks = {
    0: <BeginningSection />,
    1: "Section 1",
    2: "Section 2"
  }
  
  useEffect(() => {
    setTimeout(() => {
      setCurrentSection(sectionsRanks[activeSection]);
    }, 1000);
  }, [activeSection])

  return (
    <_NavigationContent>
      <TransitionScreen transition={transition} />
      {currentSection}
    </_NavigationContent>
  );
};

export default NavigationContent;
