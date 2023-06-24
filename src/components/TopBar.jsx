import { styled } from "styled-components"
import TopbarStats from "./TopbarStats";

const TopBar = () => {
    const TopBar = styled.div`
        width: 100%;
        height: 10vh;
        display: flex;
        justify-content: space-between;
        align-items: center;
    `

    return (
        <TopBar>
            <TopbarStats />
        </TopBar>
    )
}

export default TopBar;