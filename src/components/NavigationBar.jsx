import { useState } from "react";
import { styled } from "styled-components";
import NavigationButton from "./NavigationButton";

const _NavigationBar = styled.div`
  display: flex;
  gap: 20px;
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translate(-50%, 50px);
`;

const NavigationBar = (props) => {
  const Buttons = [
    {
      title: "BEGINNING",
      description: "This is the beginning",
    },
    {
      title: "ACHIEVEMENTS",
      description: "This is achhhhh",
    },
    {
      title: "CREATIONS",
      description: "There are my creations",
    },
  ];

  const activeSection = props.activeSection;
  const setActiveSection = props.setActiveSection;

  return (
    <_NavigationBar>
      {Buttons.map((button, index) => {
        return (
          <NavigationButton
            key={index}
            rank={index}
            title={button.title}
            description={button.description}
            activeSection={activeSection}
            setActiveSection={setActiveSection}
          />
        );
      })}
    </_NavigationBar>
  );
};

export default NavigationBar;
