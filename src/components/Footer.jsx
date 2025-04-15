import styled from "styled-components";

const StyledFooter = styled.footer`
    display: flex;
    background-color: black;
    padding: 6px;
    justify-content: space-between;
    font-weight: 800;
    letter-spacing: 2px;
    font-family: monospace;
`

const Footer = () => {
    return (
        <StyledFooter>
            <span>16-BIT</span>
            <span>Made By Wade</span>
        </StyledFooter>
    )
}

export default Footer;