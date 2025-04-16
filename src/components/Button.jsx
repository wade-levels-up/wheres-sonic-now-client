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
    color: aliceblue;
    background-color: red;
    border: 2px outset gray;
    border-radius: 30px;
    box-shadow: 1px 3px 3px white inset;
    cursor: pointer;

    &:hover {
        box-shadow: 3px 6px 3px black inset;
    }
`

const Button = ({ text = "button", type, func, href }) => {
    const { playSFX } = useContext(GlobalContext);
    const navigate = useNavigate()

    function handleNavigate() {
        playSFX("Option Select")
        navigate(href)
    }

    if (href) {
        return <StyledButton onClick={handleNavigate}>{text}</StyledButton>
    } else {
        return <StyledButton type={type} onClick={() => func()}>{text}</StyledButton>
    }
}


export default Button;