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
    padding: 24px 0px;
    background: center / contain repeat-x url("/src/assets/background-title.gif");
    justify-content: center;
    align-items: center;
    background-color: blue;

    image-rendering: pixelated;
    image-rendering: -moz-crisp-edges;
    image-rendering: crisp-edges;

    p {
        font-size: 16px;
        background-color: rgba(0, 0, 0, 0.8);
        padding: 9px;
        border-radius: 9px;
        max-width: 600px;
        text-wrap: balance;
        text-align: center;
        margin: 6px;
    }

    a {
        color: gold;
    }

    h2 {
        font-size: 2rem;
        font-weight: 900;
        width: fit-content;
        max-width: 80%;
        line-height: 75px;
        padding: 12px;
        border-radius: 8px;
        text-align: center;
        text-wrap: balance;
        filter: drop-shadow(0px 0px 5px black);
    }
`

const AboutPage = () => {


    return (
        <>
            <Header title="About"/>
            <div className="navContainer">
                <nav>
                    <Button text="Play" href={"/level-select"}/>
                    <Button text="Home" href={"/"}/>
                    <Button text="Credits" href={"/credits"}/>
                </nav>
                <MusicPlayer source={"/src/assets/title-screen.mp3"}/>
            </div>
            <StyledMain>
            <img src="/src/assets/tails-teh-one.gif" alt="Tails being silly" width={'100px'}/>
                <h2>Hi, I'm Wade!<br></br>And this is <span className="logo">Find Sonic Fast</span></h2>
                <p>
                    A fan project web game inspired by the <a href="https://www.amazon.com.au/Wheres-Sonic-Now/dp/0721425429">'Where's Sonic Now'</a> book by Ladybird UK.<br></br> I'm also a huge fan of the <a href="https://en.wikipedia.org/wiki/Sonic_%26_Knuckles">Sonic & Knuckles</a> game by Sega.  
                </p>
                <p>
                The game is not run for profit.<br></br> Images, artwork, music and sound effects have been accessed through <a href="https://archive.org/details/sonic3_knuckles_ost/48-Act+2+Boss+Theme.mp3">Internet Archive</a> as well as <a href="https://info.sonicretro.org/Where%27s_Sonic_Now%3F">Sonic Retro</a>.
                </p>
                <p>
                    As a budding web developer I challenged myself to create a 'Where's Wally' style game with a timer and leaderboard.<br></br><br></br>
                    After some time thinking over the idea I recalled the 'Where's Sonic Now' and 'Where's Sonic' books from my childhood which the game levels are based upon.<br></br><br></br>
                    Being a Sonic game, having a timer to make things competitive like a race felt like it made sense!
                </p>
                <p>
                    Growing up with the original Sega Sonic games, this project was absolutely an excuse for a trip down nostalgia lane.
                </p>
                <p>
                    I hope you have as much fun playing through the levels as I did piecing this together! ✌🏻
                </p>
                <p>
                    You can find me on <a href="https://www.instagram.com/wade.levels.up/">Instagram</a>, <a href="https://github.com/wade-levels-up">Github</a> or via my personal page <a href="https://wadelevelsup.com/">wade.levels.up.com</a>
                </p>
            </StyledMain>
            <Footer />
        </>
    )
}

export default AboutPage;