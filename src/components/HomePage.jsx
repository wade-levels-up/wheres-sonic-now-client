import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";
import MusicPlayer from "./MusicPlayer";
import Button from "./Button";

const StyledMain = styled.main`
    display: flex;
    flex: 1;
    background: center / cover no-repeat url("/src/assets/sonic-tails-backdrop.webp");
`

const HomePage = () => {


    return (
        <>
            <Header title="Where's Sonic Now?"/>
            <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", padding: "8px", flexWrap: "wrap"}}>
                <nav style={{display: "flex", gap: "16px"}}>
                    <Button text="Play" href={"/level-select"}/>
                    <Button text="About" href={"/about"}/>
                    <Button text="Credits" href={"/credits"}/>
                </nav>
                <MusicPlayer source={"/src/assets/title-screen.mp3"}/>
            </div>
            <StyledMain>
                <p>Welcome to Where's Sonic Now? An interactive 'Where's Wally' style web game based on the 'Where's Sonic Now' book by Ladybird in the UK</p>
            </StyledMain>
            <Footer />
        </>
    )
}

export default HomePage;