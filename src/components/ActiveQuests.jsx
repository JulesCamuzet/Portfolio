import { styled } from "styled-components";

const _ActiveQuests = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  border-left: solid #e84a4a 5px;
  border-bottom: solid #e84a4a 1px;
`;

const Title = styled.h3`
  font-family: Big-Shoulders-Display;
  color: lightgray;
  font-size: 25px;
  background-color: #e84a4a;
  height: 40px;
`;

const Quest = styled.div`
  display: flex;
  flex-direction: column;
`;

const QuestName = styled.h4`
  font-family: Iceland-Regular;
  color: lightgray;
  font-size: 20px;
  background-color: #e84a4a;
  opacity: 0.7;
  font-weight: 300;
  height: 30px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding-left: 20px;
`;

const QuestDescription = styled.p`
  color: lightgray;
  font-family: Iceland-Regular;
  background-color: black;
  padding: 20px;
`;

const ActiveQuests = () => {
  const Quests = [
    {
      name: "REACT",
      description:
        "Build this website. Implement a full react website with multiple routers, UI elements and tricky styling. Make it all work great!",
    },
    {
      name: "BUSINESSMANIA",
      description:
        "Build a company management game with react for the frontend and express for the backend.",
    },
  ];

  return (
    <_ActiveQuests>
      <Title>ACTIVES QUESTS</Title>
      {Quests.map((quest, index) => {
        return (
          <Quest key={index}>
            <QuestName>{quest.name}</QuestName>
            <QuestDescription>{quest.description}</QuestDescription>
          </Quest>
        );
      })}
    </_ActiveQuests>
  );
};

export default ActiveQuests;
