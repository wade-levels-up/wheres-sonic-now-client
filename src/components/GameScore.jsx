import styled from "styled-components";
import Timer from "./Timer";

const GameScoreContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
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
        border-radius: 0px 0px 16px 0px;
        padding: 2px 18px;
        gap: 3px;
        background: linear-gradient(rgba(202, 153, 67) 20%, white 80%);
    }

    li div div {
        display: flex;
        gap: 12px;
    }
    

    @media (max-width: 600px) {
        flex-direction: row;
        align-items: center;

         ul {
            gap: 2px;
         }

         li {
            padding: 2px 6px;
         }

        img {
            width: 40px;
        }

        li div {
            display: flex;
            align-items: center;
            gap: 2px;
        }

        li p {
            display: none;
        }
    }
`

const GameScore = ({ itemState, gameOver }) => {


    return (
        <GameScoreContainer>
            <ul>
                <li>
                    <span>Sonic</span>
                    <div>
                        <img src="/assets/sonic-icon.png" alt="" />
                        <div>
                            <p>Found: </p>
                            <span>{itemState.sonic ? <i style={{color: "green"}} className="fa-solid fa-circle-check fa-lg"></i> : <i style={{color: "red"}} className="fa-solid fa-circle-xmark fa-lg"></i>}</span>
                        </div>
                    </div>
                </li>
                <li>
                    <span>Tails</span>
                    <div>
                        <img src="/assets/tails-icon.png" alt="" />
                        <div>
                            <p>Found: </p>
                            <span>{itemState.tails ? <i style={{color: "green"}} className="fa-solid fa-circle-check fa-lg"></i> : <i style={{color: "red"}} className="fa-solid fa-circle-xmark fa-lg"></i>}</span>
                        </div>
                    </div>
                </li>
                <li>
                    <span>Knuckles</span>
                    <div>
                        <img src="/assets/knuckles-icon.png" alt="" />
                        <div>
                            <p>Found: </p>
                            <span>{itemState.knuckles ? <i style={{color: "green"}} className="fa-solid fa-circle-check fa-lg"></i> : <i style={{color: "red"}} className="fa-solid fa-circle-xmark fa-lg"></i>}</span>
                        </div>
                    </div>
                </li>
            </ul>
            <Timer gameOver={gameOver} />
        </GameScoreContainer>
    )
}

export default GameScore;