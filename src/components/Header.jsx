import styled from "styled-components"

const StyledHeader = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 16px;
    gap: 32px;
    font-size: 3rem;
    font-family: sage, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: black;
`

const Header = ({ title }) => {
    return <StyledHeader>{title}</StyledHeader>
}

export default Header;