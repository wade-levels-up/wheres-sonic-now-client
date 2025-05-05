import styled from "styled-components";
import { useEffect, useState, useContext } from "react";
import { GlobalContext } from "../App";
import Button from "./Button";

const StyledFormContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .errorMsg {
        color: red;
        font-weight: 700;
        background-color: rgba(0, 0, 0, 0.8);
        padding: 4px;
    }
`

const StyledDiv = styled.div`
    text-align: center;
    padding: 12px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 16px 8px;
    width: 100%;

    p {
        max-width: 40ch;
    }
`

const StyledTable = styled.table`
    background-color: rgba(0, 0, 0, 0.8);
    table-layout: fixed;
    width: 80%;
    max-width: 400px;
    border-collapse: collapse;
    border: 3px ridge gold;
    text-align: left;
    animation: 2s ease-in-out 1 fade-in;
    margin-bottom: 6px;

    thead {
        background-color: brown;
    }

    thead th:nth-child(1) {
        width: 50%;
    }

    thead th:nth-child(2) {
        width: 50%;
    }

    th, td {
        padding: 6px 12px;
    }
`

const StyledForm = styled.form`
    display: flex;
    flex-wrap: wrap;

    ul {
        display: flex;
        flex-direction: column;
        padding: 12px;
        gap: 6px;
        justify-content: center;
        align-items: center;
    }

    li {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    input, button, label {
        font-size: 16px;
        padding: 6px 8px;
        border-radius: 8px;
        text-align: center;
    }

    button {
        font-family: 'system-ui', 'arial';
        font-weight: 350;
        color: aliceblue;
        background-color: red;
        border: 2px outset gray;
        box-shadow: 1px 2px 2px white inset;
        cursor: pointer;
    }

    button:hover {
        box-shadow: 3px 6px 3px black inset;
    }
`

function capitalizeString(str) {
    if (!str) {
      return str;
    }
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

const GameOver = ({ levelName }) => {
    const [time, setTime] = useState("");
    const [name, setName] = useState("");
    const [scores, setScores] = useState([]);
    const [scoreSubmitted, setScoreSubmitted] = useState(false);
    const [error, setError] = useState("");

    const { playSFX } = useContext(GlobalContext);

    const getUserScore = async () => {
        const response = await fetch(
          `http://localhost:3030/scores`,
          {
            method: "GET",
            credentials: "include", 
          }
        )
    
        if (response.ok) {
            const data = await response.json()
            setTime(data.time)
        } else {
          const errorData = await response.json();
          console.error(`${errorData.message}`);
        }
    }

    const getAllLevelScores = async () => {
        const response = await fetch(
          `http://localhost:3030/scores/all`,
          {
            method: "GET",
            credentials: "include", 
          }
        )
    
        if (response.ok) {
            const data = await response.json();
            setScores(data.scores);
        } else {
          const errorData = await response.json();
          console.error(`${errorData.message}`);
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const response = await fetch(
          `http://localhost:3030/scores`,
          {
            method: "POST",
            credentials: "include",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify({ name }),
          }
        )
    
        if (response.ok) {
            getAllLevelScores();
            setScoreSubmitted(true);
            playSFX("Chaching");
            setError("")
        } else {
            const errorData = await response.json();
            setError(`${errorData.message}`)
        }
      }

    useEffect(() => {
        getUserScore();
        getAllLevelScores();
    }, [])

    return (
        <>
            {scoreSubmitted ? (
                <StyledDiv>
                    <StyledTable>
                        <caption>Top Scores - {capitalizeString(levelName)}</caption>
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            {scores.sort((a, b) => {
                                if (+a.time < +b.time) {
                                    return -1
                                }

                                if (+a.time > +b.time) {
                                    return 1
                                }

                                return 0
                            }).map((score) => {
                                if (score.levelId === levelName && score.name) {
                                    if (score.name === name) {
                                        return (
                                            <tr style={{ border: "1px solid gold", backgroundColor: "red", color: "black"}}>
                                                <th scope="row">{score.name}</th>
                                                <td>{score.time}s</td>
                                            </tr>    
                                        )
                                    } else {
                                        return (
                                            <tr>
                                                <th scope="row">{score.name}</th>
                                                <td>{score.time}s</td>
                                            </tr>
                                        )
                                    }
                                } 
                            })}
                        </tbody>
                    </StyledTable>
                    <Button text="Restart" href={`/level-select`}/>
                </StyledDiv>
            ) : (
                <StyledDiv>
                    <h2>Congratulations!</h2>
                    <p>You found them all in <span style={{color: "gold", fontWeight: "800"}}><u>{time}</u></span> seconds.</p>
                    <p>Fill in your name below, submit your score and see how you went against other players.</p>
                    <StyledFormContainer>
                        <StyledForm onSubmit={handleSubmit}>
                            <ul>
                                <li>
                                    <label htmlFor="name">Your Name </label>
                                    <input type="text" id="name" name="name" value={name} minLength={2} maxLength={16} required onChange={(e) => setName(e.target.value)}/>
                                </li>
                                <li>
                                    <button type="submit">Save</button>
                                </li>
                                {error ? (<li>
                                    <p className="errorMsg">{error}</p>
                                </li>) : null}
                            </ul>
                        </StyledForm>
                    </StyledFormContainer>
                </StyledDiv>
            )}
        </>
    )
}

export default GameOver;