import styled from "styled-components";
import Header from "./Header";
import MusicPlayer from "./MusicPlayer";
import LevelCard from "./LevelCard";

const StyledMain = styled.main`
    display: flex;
    flex: 1;
    background: center / cover no-repeat url("/src/assets/sonic-tails-backdrop.webp");
`
const StyledGrid = styled.div`
    display: grid;
    width: 100%;
    padding: 16px;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    grid-template-rows: 320px;
    gap: 16px;
`

const LevelSelectPage = () => {
    return (
        <>
            <Header title="Level Select"/>
            <nav style={{display: "flex", justifyContent: "space-between", padding: "8px", flexWrap: "wrap"}}>
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/credits">Credit</a>
                <MusicPlayer source={"/src/assets/data-select.mp3"}/>
            </nav>
            <StyledMain>
                <StyledGrid>
                    <LevelCard title={"Ice Cap Zone"} href={"/ice-cap-zone"} src={"/src/assets/thumb-icecap.png"} alt={"Ice Cap Zone"}/>
                    <LevelCard title={"Ice Cap Zone"} href={"/ice-cap-zone"} src={"/src/assets/thumb-icecap.png"} alt={"Ice Cap Zone"}/>  
                </StyledGrid>    
            </StyledMain>
            <footer>
                <span>Made by Wade</span>
            </footer>
        </>
    )
}

export default LevelSelectPage;