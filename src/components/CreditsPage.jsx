import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";
import MusicPlayer from "./MusicPlayer";
import Button from "./Button";


const StyledMain = styled.main`
    display: flex;
    flex-direction: column;
    gap: 24px;
    flex: 1;
    padding: 24px 0px;
    background: center / contain repeat-x url("/src/assets/background-title.gif");
    justify-content: center;
    align-items: center;
    background-color: blue;

    image-rendering: pixelated;
    image-rendering: -moz-crisp-edges;
    image-rendering: crisp-edges;

    a {
        color: gold;
    }

    h2 {
        font-size: 2rem;
        font-weight: 900;
        width: fit-content;
        max-width: 80%;
        line-height: 75px;
        text-align: center;
        text-wrap: balance;
        filter: drop-shadow(0px 0px 5px black);
    }

    ul {
        display: flex;
        flex-direction: column;
        gap: 18px;
        padding: 9px;
        background-color: rgba(0, 0, 255, 0.8);
        border-radius: 12px;
        border: 6px ridge gold;
        margin: 6px;
        text-align: center;
    }
`

const CreditsPage = () => {


    return (
        <>
            <Header title="Credits"/>
            <div className="navContainer">
                <nav>
                    <Button text="Play" href={"/level-select"}/>
                    <Button text="Home" href={"/"}/>
                    <Button text="About" href={"/about"}/>
                </nav>
                <MusicPlayer source={"/src/assets/title-screen.mp3"}/>
            </div>
            <StyledMain>
            <img src="/src/assets/sonic-loading.gif" alt="Sonic twirling a ring around his finger" width={'70px'}/>
                <h2 className="logo">Thanks to...</h2>
                <ul>
                    <li>
                        Ladybird UK for the <a href="https://www.amazon.com.au/Wheres-Sonic-Now/dp/0721425429">'Where's Sonic Now'</a> book that inspired this game.
                    </li>
                    <li>
                        Sega for <a href="https://en.wikipedia.org/wiki/Sonic_%26_Knuckles">Sonic & Knuckles</a>.
                    </li>
                    <li>
                        <a href="https://www.theodinproject.com/">The Odin Project</a> for providing my web development pathway and curriculum.
                    </li>
                    <li>
                        My partner Delia for coming up with the 'Find Sonic Fast' name.
                    </li>
                    <li>
                        <a href="https://archive.org/details/sonic3_knuckles_ost">Internet Archive</a> for the providing downloads for the games' original soundtrack.
                    </li>
                    <li>
                        <a href="https://info.sonicretro.org/Where%27s_Sonic_Now%3F">Sonic Retro</a> for providing scans of the images from <a href="https://www.amazon.com.au/Wheres-Sonic-Now/dp/0721425429">'Where's Sonic Now'</a>.
                    </li>
                    <li>
                        Simon J from the <a href="https://nootnoot.land/">nootnoot.land</a> blog for lovingly breaking my websites.
                    </li>
                    <li>
                        Caio B for providing me with guidance and wisdom along my tech journey.
                    </li>
                    <li>
                        Mum for buying herself a Sega MegaDrive and letting her kids never give it back 😁
                    </li>
                </ul>
            </StyledMain>
            <Footer />
        </>
    )
}

export default CreditsPage;