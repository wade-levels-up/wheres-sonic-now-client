import { useState, useEffect, useRef } from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: monospace;
    border: 3px ridge gold;
    padding: 6px;
    gap: 6px;
    height: 32px;
    color: black;
    cursor: pointer;
    flex: 1;
    font-size: 16px;
    background: linear-gradient(rgba(202, 153, 67) 20%, white 80%);


    @media (max-width: 600px) {
        height: auto;
    }
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
                <span>⏰ {time.toFixed(1)}s</span>
            </StyledDiv>
        </>
    )
}

export default Timer;