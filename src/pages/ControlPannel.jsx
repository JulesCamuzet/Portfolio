import { styled } from "styled-components";
import NavigationScreen from "../components/NavigationScreen";
import LeftSidebar from "../components/LeftSidebar";
import TopBar from "../components/TopBar";
import RightSidebar from "../components/RightSidebar";
import BottomBar from "../components/BottomBar";

const ControlPannel = () => {
  const ControlPannel = styled.div`
    width: 100%;
    box-sizing: border-box;
    padding: 0 10vh;
    height: 100vh;
    background: rgb(0, 0, 0);
    display: flex;
    flex-direction: column;
  `;

  const Mid = styled.div`
    width: 100%;
    height: 80vh;
    display: flex;
  `;

  return (
    <ControlPannel>
      <TopBar />
      <Mid>
        <LeftSidebar />
        <NavigationScreen />
        <RightSidebar />
      </Mid>
      <BottomBar />
    </ControlPannel>
  );
};

export default ControlPannel;
