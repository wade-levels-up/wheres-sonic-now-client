import styled from "styled-components";

const StyledMain = styled.main`
    display: flex;
    flex: 1;
    background: center / cover no-repeat url("/src/assets/sonic-tails-backdrop.webp");
`

const HomePage = () => {
    return (
        <>
            <header>
                <h1 style={{fontFamily: "sageregular", fontSize: "36px"}}>Where's Sonic Now?</h1>
            </header>
            <StyledMain>
                <a href="/ice-cap-zone">Ice Cap Zone</a>
            </StyledMain>
            <footer>
                <span>Made by Wade</span>
            </footer>
        </>
    )
}

export default HomePage;