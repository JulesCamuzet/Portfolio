import { styled } from "styled-components";
import BeginningSection from "./NavigationSections/BeginningSection";
import TransitionScreen from "./TransitionScreen";

const _NavigationContent = styled.div`
  background-color: lightgoldenrodyellow;
  width: 100%;
  height: 100%;
  position: relative;
`;

const NavigationContent = (props) => {
  const activeSection = props.activeSection;

  return (
    <_NavigationContent>
      <TransitionScreen />
      {activeSection === 0 ? (
        <BeginningSection />
      ) : activeSection === 1 ? (
        "yo"
      ) : activeSection === 2 ? (
        "hey"
      ) : (
        "Error"
      )}
    </_NavigationContent>
  );
};

export default NavigationContent;
