import { styled } from "styled-components"
import ActiveQuests from "./ActiveQuests";

const RightSidebar = () => {
    const RightSidebar = styled.div`
        width: 15%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: end;
    `
    return (
        <RightSidebar>
            <ActiveQuests />
        </RightSidebar>
    )
}

export default RightSidebar;