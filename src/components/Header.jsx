import styled from "styled-components"

const StyledHeader = styled.header`
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    padding: 6px;
    gap: 12px;
    font-size: 2rem;
    font-family: sage, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

    @media (min-width: 600px) {
        padding: 16px;
        gap: 32px;
        font-size: 2.5rem;
    }
`

const Header = ({ title }) => {
    return <StyledHeader className="logo">{title}</StyledHeader>
}

export default Header;