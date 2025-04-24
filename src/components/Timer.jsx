import { useState, useEffect, useRef } from "react";
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

const Timer = ({gameOver}) => {
    const [time, setTime] = useState(0);
    const intervalRef = useRef(null); 

    function startTimer() {
        if (intervalRef.current === null) {
            intervalRef.current = setInterval(() => {
                setTime((prev) => prev + 0.01);
            }, 10);
        }
    }

    function stopTimer() {
        if (intervalRef.current !== null) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    }

    function resetTimer() {
        setTime(0);
    }

    useEffect(() => {
        if (!gameOver) {
            resetTimer();
            startTimer();
        } else {
            stopTimer();
        }

        return () => stopTimer();
    }, [gameOver]);

    return (
        <>
            <StyledDiv>
                <span>Time: {time.toFixed(1)} seconds</span>
            </StyledDiv>
        </>
    )
}

export default Timer;