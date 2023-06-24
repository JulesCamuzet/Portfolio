import { styled } from "styled-components"
import FacePicture from "./FacePicture";
import IdentityInformations from "./IdentityInformations";
import HireButton from "./HireButton";

const LeftSidebar = () => {
    const LeftSidebar = styled.div`
        height: 100%;
        width: 15%;
        display: flex;
        flex-direction: column;
        align-items: start;
        gap: 50px;
    `

    return (
        <LeftSidebar>
            <FacePicture />
            <IdentityInformations />
            <HireButton />
        </LeftSidebar>
    )
}

export default LeftSidebar;