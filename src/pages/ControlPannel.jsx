import { styled } from "styled-components";
import NavigationScreen from "../components/NavigationScreen";
import LeftSidebar from "../components/LeftSidebar";
import TopBar from "../components/TopBar";
import RightSidebar from "../components/RightSidebar";
import BottomBar from "../components/BottomBar";

const _ControlPannel = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 0 10vh;
  height: 100vh;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    45deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(33, 12, 82, 1) 81%,
    rgba(232, 74, 74, 1) 99%
  );
  display: flex;
  flex-direction: column;
`;

const Mid = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
`;

const ControlPannel = () => {
  return (
    <_ControlPannel>
      <TopBar />
      <Mid>
        <LeftSidebar />
        <NavigationScreen />
        <RightSidebar />
      </Mid>
      <BottomBar />
    </_ControlPannel>
  );
};

export default ControlPannel;
