import { styled } from "styled-components"
import ActiveQuests from "./ActiveQuests";

const _RightSidebar = styled.div`
        width: 15%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: end;
    `

const RightSidebar = () => {
    
    return (
        <_RightSidebar>
            <ActiveQuests />
        </_RightSidebar>
    )
}

export default RightSidebar;