import { styled } from "styled-components";
import FaceImage from "../assets/medias/face.jpg";

const _FacePicture = styled.div`
  width: 90%;
  aspect-ratio: 1/1;
  border: solid grey 1px;
  position: relative;
  box-sizing: border-box;
  padding: 5%;

  &::before {
    display: block;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    border-top: solid #e84a4a 3px;
    border-left: solid #e84a4a 3px;
    width: 5%;
    height: 5%;
    transform: translate(-2px, -2px);
  }

  &::after {
    display: block;
    content: "";
    position: absolute;
    bottom: 0;
    right: 0;
    border-bottom: solid #e84a4a 3px;
    border-right: solid #e84a4a 3px;
    width: 5%;
    height: 5%;
    transform: translate(2px, 2px);
  }
`;
const Image = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  background-image: url(${FaceImage});
  background-size: cover;
  background-position: 50%;
`;

const FacePicture = () => {
  return (
    <_FacePicture>
      <Image />
    </_FacePicture>
  );
};

export default FacePicture;
