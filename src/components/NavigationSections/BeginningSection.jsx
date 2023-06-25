import { styled } from "styled-components"
import WhaleImage from "../../assets/medias/whale.png"

const _BeginningSection = styled.div`
    width: 100%;
    height: 100%;
    background-image: url(${WhaleImage});
    background-size: cover;
    background-position: 50%;
    display: flex;
    justify-content: center;
`

const Text = styled.p`
    font-family: Iceland-Regular;
    color: lightgray;
    font-size: 20px;
    text-align: center;
    width: 50%;
    margin-top: 50px;
    text-transform: uppercase;
`

const BeginningSection = () => {
    return (
        <_BeginningSection>
            <Text>swimming through a vast network of interconnected devices and servers, spreading joy and whimsy to users across the globe</Text>
        </_BeginningSection>
    )
}

export default BeginningSection;