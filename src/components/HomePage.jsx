import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";
import MusicPlayer from "./MusicPlayer";
import Button from "./Button";

const StyledMain = styled.main`
    display: flex;
    flex-direction: column;
    gap: 12px;
    flex: 1;
    background: center / contain repeat-x url("/src/assets/background-title.gif");
    justify-content: center;
    align-items: center;
    background-color: blue;

    image-rendering: pixelated;
    image-rendering: -moz-crisp-edges;
    image-rendering: crisp-edges;

    p, h2 {
        font-size: 2rem;
        font-weight: 900;
        width: fit-content;
        max-width: 80%;
        padding: 12px;
        border-radius: 8px;
        text-align: center;
        text-wrap: balance;
        filter: drop-shadow(0px 0px 5px black);
    }
`

const StyledAnimation = styled.img`
    animation: 12s linear infinite fly-across;
`

const HomePage = () => {


    return (
        <>
            <Header title="Find Sonic Fast"/>
            <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", padding: "8px", flexWrap: "wrap"}}>
                <nav style={{display: "flex", gap: "16px"}}>
                    <Button text="Play" href={"/level-select"}/>
                    <Button text="About" href={"/about"}/>
                    <Button text="Credits" href={"/credits"}/>
                </nav>
                <MusicPlayer source={"/src/assets/title-screen.mp3"} autoPlay={'true'}/>
            </div>
            <StyledMain>
                <StyledAnimation src="/src/assets/plane.gif" alt="Sonic and Tails in plane"/>
                <h2 style={{animation: "2s ease 1 fly-in"}}>Welcome to Find Sonic Fast</h2>
                <h2 style={{animation: "3s ease 1 fly-in"}}>Have fun!</h2>
            </StyledMain>
            <Footer />
        </>
    )
}

export default HomePage;