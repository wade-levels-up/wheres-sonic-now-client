import styled from "styled-components";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../App";

const StyledButton = styled.button`
    width: 100px;
    height: fit-content;
    font-size: 18px;
    font-family: 'system-ui', 'arial';
    font-weight: 350;
    padding: 3px 8px;
    color: dodgerblue;
    background-color: black;
    border: 2px ridge grey;
    border-radius: 30px;
    cursor: pointer;

    &:hover {
        color: black;
        background-color: dodgerblue;
        border: 2px solid gold;
    }
`

const Button = ({ text = "button", func, href }) => {
    const { playSFX } = useContext(GlobalContext);
    const navigate = useNavigate()

    function handleNavigate() {
        playSFX("Option Select")
        navigate(href)
    }

    if (href) {
        return <StyledButton onClick={handleNavigate}>{text}</StyledButton>
    } else {
        return <StyledButton onClick={() => func()}>{text}</StyledButton>
    }
}


export default Button;