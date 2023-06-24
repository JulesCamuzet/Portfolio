import { useNavigate } from "react-router-dom"
import { styled } from "styled-components"

const EnterButton = () => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/control-pannel");
    }

    const EnterButton = styled.button`
        width: 200px;
        height: 50px;
        border: solid #E84A4A 1px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #E84A4A;
        font-family: Iceland-Regular;
        font-size: 20px;
        background-color: transparent;
        position: relative;
        transition: 1s;
        z-index: 100;
        cursor: pointer;

        &::after {
            display: block;
            content: "";
            position: absolute;
            right: 0;
            height: 100%;
            background-color: #E84A4A;
            width: 0%;
            transition: 1s;
            z-index: -1;
        }

        &:hover {
            color: black;
        }

        &:hover::after {
            right: unset;
            left: 0;
            width: 100%;
        }
    `

    return <EnterButton onClick={handleClick}>ENTER THE SYSTEM</EnterButton>
}

export default EnterButton;