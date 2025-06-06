import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";
import MusicPlayer from "./MusicPlayer";
import Button from "./Button";

const StyledMain = styled.main`
    display: flex;
    flex-direction: column;
    gap: 32px;
    flex: 1;
    background: center / contain repeat-x url("/assets/background-title.gif");
    justify-content: center;
    align-items: center;
    background-color: blue;

    image-rendering: pixelated;
    image-rendering: -moz-crisp-edges;
    image-rendering: crisp-edges;

    animation: 1s ease 1 fade-in;

    p, h2, h3 {
        font-size: 2rem;
        font-weight: 900;
        width: fit-content;
        max-width: 80%;
        padding: 12px;
        border-radius: 8px;
        text-align: center;
        text-wrap: balance;
        filter: drop-shadow(0px 0px 2px black);
    }

    h3 {
        font-size: 1.5rem;
    }
`

const StyledAnimation = styled.img`
    animation: 12s linear infinite fly-across;
    position: absolute;
    top: 30%;
`

const HomePage = () => {


    return (
        <>
            <Header title="Find Sonic Fast"/>
            <div className="navContainer">
                <nav>
                    <Button text="Play" href={"/level-select"}/>
                    <Button text="About" href={"/about"}/>
                    <Button text="Credits" href={"/credits"}/>
                </nav>
                <MusicPlayer source={"/assets/title-screen.mp3"} autoPlay={'true'}/>
            </div>
            <StyledMain>
                <StyledAnimation src="/assets/plane.gif" alt="Sonic and Tails in plane"/>
                <h2 style={{animation: "2s ease 1 fly-in"}}>Welcome to Find Sonic Fast!</h2>
                <h3 style={{animation: "3s ease 1 fly-in"}}>How fast can you find Sonic and the team?</h3>
            </StyledMain>
            <Footer />
        </>
    )
}

export default HomePage;