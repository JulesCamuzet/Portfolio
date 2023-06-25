import { styled } from "styled-components";
import FacePicture from "./FacePicture";
import IdentityInformations from "./IdentityInformations";
import HireButton from "./HireButton";

const _LeftSidebar = styled.div`
  height: 100%;
  width: 15%;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 50px;
`;

const LeftSidebar = () => {
  return (
    <_LeftSidebar>
      <FacePicture />
      <IdentityInformations />
      <HireButton />
    </_LeftSidebar>
  );
};

export default LeftSidebar;
