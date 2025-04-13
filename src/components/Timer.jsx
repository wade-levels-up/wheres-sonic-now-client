import { useState } from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: monospace;
    border: 1px solid red;
    padding: 6px;
    gap: 6px;
    height: 32px;
    cursor: pointer;
`

const Timer = () => {
    const [time, setTime] = useState(0);
    const [timeInterval, setTimeInterval] = useState(null);

    function startTimer() {
        setTimeInterval(setInterval(() => {
            setTime((prev) => prev + 0.01)
        }, 10))
    }

    function stopTimer() {
        clearInterval(timeInterval);  
    }

    function resetTimer() {
        setTime(0);
    }

    return (
        <>
            <StyledDiv>
                <span>Time: {time.toFixed(2)} seconds</span>
                <button onClick={startTimer}>Start</button>
                <button onClick={stopTimer}>Stop</button>
                <button onClick={resetTimer}>Reset</button>
            </StyledDiv>
        </>
    )
}

export default Timer;