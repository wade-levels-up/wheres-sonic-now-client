import styled from "styled-components";

const StyledFooter = styled.footer`
    display: flex;
    background-color: aliceblue;
    color: black;
    padding: 6px;
    justify-content: space-between;
    font-weight: 800;
    letter-spacing: 1px;
    color: blue;
    font-family: monospace;

`

const Footer = () => {
    return (
        <StyledFooter>
            <span>16-BIT</span>
            <a href="https://wadelevelsup.com/"><i className="fa-solid fa-bolt"></i> Made By Wade</a>
        </StyledFooter>
    )
}

export default Footer;