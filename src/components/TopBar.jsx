import { styled } from "styled-components"
import TopbarStats from "./TopbarStats";

const _TopBar = styled.div`
        width: 100%;
        height: 10vh;
        display: flex;
        justify-content: space-between;
        align-items: center;
    `

const TopBar = () => {

    return (
        <_TopBar>
            <TopbarStats />
        </_TopBar>
    )
}

export default TopBar;