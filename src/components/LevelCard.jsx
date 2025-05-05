import { useContext } from "react";
import styled from "styled-components";
import { GlobalContext } from "../App";
import { useNavigate } from "react-router-dom";

const StyledLevelCard = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 336px;
    height: fit-content;
    border: 8px gold ridge;
    border-radius: 3px;
    text-decoration: none;
    text-align: center;
    gap: 8px;
    background-color: rgba(0, 0, 0, 0.7);
    transition: scale 300ms ease;
    will-change: scale;

    image-rendering: pixelated;
    image-rendering: -moz-crisp-edges;
    image-rendering: crisp-edges;
    
    &:hover {
        outline: 6px solid red;
        cursor: pointer;
        scale: 1.01;
    }
`

const StyledH2 = styled.h2`
    font-family: "andes";
    font-size: 24px;
    padding: 6px;
    color: aliceblue;
    letter-spacing: 3px;
    background-color: rgba(0, 0, 255, 0.8);
`

const LevelCard = ({ title, href, src, alt, highestScore }) => {
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
            <span style={{width: "100%", textAlign: "left", padding: "6px", backgroundColor: "brown"}}>Best time: {highestScore && highestScore.name && highestScore.time ? `${highestScore.name} ${highestScore.time}` : "No times set"}</span>
        </StyledLevelCard>
    )
}

export default LevelCard;