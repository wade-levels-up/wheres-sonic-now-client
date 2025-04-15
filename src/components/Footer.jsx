import styled from "styled-components";

const StyledFooter = styled.footer`
    display: flex;
    background-color: black;
    padding: 6px;
    justify-content: space-between;
`

const Footer = () => {
    return (
        <StyledFooter>
            <span>Made By Wade</span>
        </StyledFooter>
    )
}

export default Footer;