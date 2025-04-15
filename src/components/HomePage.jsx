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
    background: center / cover no-repeat url("/src/assets/sonic-tails-backdrop.webp");
    justify-content: center;
    align-items: center;

    p {
        font-size: 1.8rem;
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
                <p>Hi!</p>
                <p>Welcome to Where's Sonic Now</p>
                <p style={{fontSize: "16px"}}>( Based on the Where's Sonic Now? book published in 1996 by Ladybird in the UK )</p>
                <p>Have fun ✌🏻</p>
            </StyledMain>
            <Footer />
        </>
    )
}

export default HomePage;