import styled from "styled-components";
import Timer from "./Timer";

const GameScoreContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    color: black;

    img {
        image-rendering: pixelated;
        image-rendering: -moz-crisp-edges;
        image-rendering: crisp-edges;
        width: 80px;
    }

    ul {
        display: flex;
        gap: 6px;
    }

    li {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border: 3px ridge gold;
        padding: 3px 18px;
        gap: 3px;
    }
`

const GameScore = ({ itemState, gameOver }) => {


    return (
        <GameScoreContainer>
            <ul>
                <li>
                    <span>Sonic</span>
                    <img src="/src/assets/sonic-icon.png" alt="" />
                    <span>Found: {itemState.sonic ? `✅` : `❌`}</span>
                </li>
                <li>
                    <span>Tails</span>
                    <img src="/src/assets/tails-icon.png" alt="" />
                    <span>Found: {itemState.tails ? `✅` : `❌`}</span>
                </li>
                <li>
                    <span>Knuckles</span>
                    <img src="/src/assets/knuckles-icon.png" alt="" />
                    <span>Found: {itemState.knuckles ? `✅` : `❌`}</span>
                </li>
            </ul>
            <Timer gameOver={gameOver} />
        </GameScoreContainer>
    )
}

export default GameScore;