import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";
import MusicPlayer from "./MusicPlayer";

const StyledMain = styled.main`
    display: flex;
    flex: 1;
    background: center / cover no-repeat url("/src/assets/sonic-tails-backdrop.webp");
`

const HomePage = () => {


    return (
        <>
            <Header title="Where's Sonic Now?"/>
            <nav style={{display: "flex", justifyContent: "space-between", padding: "8px", flexWrap: "wrap"}}>
                <a href="/level-select">Play</a>
                <a href="/about">About</a>
                <a href="/credits">Credit</a>
                <MusicPlayer source={"/src/assets/title-screen.mp3"}/>
            </nav>
            <StyledMain>
                <p>Welcome to Where's Sonic Now? An interactive 'Where's Wally' style web game based on the 'Where's Sonic Now' book by Ladybird in the UK</p>
            </StyledMain>
            <Footer />
        </>
    )
}

export default HomePage;