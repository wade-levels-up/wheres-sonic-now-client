import styled from "styled-components";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../App";

const StyledButton = styled.button`
    width: 80px;
    height: fit-content;
    font-size: 18px;
    font-family: 'system-ui', 'arial';
    font-weight: 350;
    padding: 2px;
    color: aliceblue;
    background-color: red;
    border: 2px outset gray;
    border-radius: 30px;
    box-shadow: 1px 2px 2px white inset;
    cursor: pointer;
    outline: 1px solid aliceblue;

    &:hover {
        box-shadow: 3px 6px 3px black inset;
    }
`

const Button = ({ text = "button", type = "button", func, href, style }) => {
    const { playSFX } = useContext(GlobalContext);
    const navigate = useNavigate()

    function handleNavigate() {
        playSFX("Option Select")
        navigate(href)
    }

    if (href) {
        return <StyledButton onMouseEnter={() => playSFX("Option Select")} onClick={handleNavigate} style={style}>{text}</StyledButton>
    } else {
        return <StyledButton onMouseEnter={() => playSFX("Option Select")} type={type} onClick={func} style={style}>{text}</StyledButton>
    }
}


export default Button;