import { useContext } from "react";
import styled from "styled-components";
import { GlobalContext } from "../App";
import { useNavigate } from "react-router-dom";

const StyledLevelCard = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 336px;
    height: fit-content;
    border: 6px gold ridge;
    text-decoration: none;
    text-align: center;
    gap: 8px;
    background-color: rgba(0, 0, 0, 0.3);
    transition: scale 300ms ease;

    image-rendering: pixelated;
    image-rendering: -moz-crisp-edges;
    image-rendering: crisp-edges;
    
    &:hover {
        outline: 6px solid red;
        cursor: pointer;
    }
`

const StyledH2 = styled.h2`
    font-family: "andes";
    font-size: 24px;
    padding: 6px;
    color: aliceblue;
`

const LevelCard = ({ title, href, src, alt }) => {
    const { playSFX } = useContext(GlobalContext);
    const navigate = useNavigate()

    function handleSelect() {
        playSFX("Level Select")
        navigate(href)
    }

    return (
        <StyledLevelCard onClick={handleSelect} onMouseEnter={() => playSFX("Option Select")}>
            <img src={src} alt={alt} />
            <StyledH2>{title}</StyledH2>
        </StyledLevelCard>
    )
}

export default LevelCard;