import styled from "styled-components";
import MusicPlayer from "./MusicPlayer";
import LevelSelect from "./LevelSelect";

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    padding: 16px;
    gap: 32px;
`

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

const HomePage = () => {
    return (
        <>
            <StyledHeader>
                <h1 style={{fontFamily: "sage", fontSize: "36px"}}>Where's Sonic Now?</h1>
                <MusicPlayer source={"/src/assets/data-select.mp3"}/>
            </StyledHeader>
            <StyledMain>
                <StyledGrid>
                    <LevelSelect title={"Ice Cap Zone"} href={"/ice-cap-zone"} src={"/src/assets/thumb-icecap.png"} alt={"Ice Cap Zone"}/>
                    <LevelSelect title={"Ice Cap Zone"} href={"/ice-cap-zone"} src={"/src/assets/thumb-icecap.png"} alt={"Ice Cap Zone"}/>  
                </StyledGrid>    
            </StyledMain>
            <footer>
                <span>Made by Wade</span>
            </footer>
        </>
    )
}

export default HomePage;