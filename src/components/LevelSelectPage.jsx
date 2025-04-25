import styled from "styled-components";
import Header from "./Header";
import MusicPlayer from "./MusicPlayer";
import Footer from "./Footer";
import LevelCard from "./LevelCard";
import Button from "./Button";

const StyledMain = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    background: center / contain repeat-x url("/src/assets/background-title.gif");

    image-rendering: pixelated;
    image-rendering: -moz-crisp-edges;
    image-rendering: crisp-edges;
    background-color: blue;
`
const StyledGrid = styled.div`
    display: grid;
    width: 100%;
    max-width: 1200px;
    padding: 16px;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    grid-template-rows: 350px;
    gap: 16px;
`

const LevelSelectPage = () => {
    return (
        <>
            <Header title="Level Select"/>
            <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", padding: "8px", flexWrap: "wrap"}}>
                <nav style={{display: "flex", gap: "16px"}}>
                    <Button text="Home" href={"/"}/>
                    <Button text="About" href={"/about"}/>
                    <Button text="Credits" href={"/credits"}/>
                </nav>
                <MusicPlayer source={"/src/assets/data-select.mp3"} autoPlay={'true'}/>
            </div>
            <StyledMain>
                <StyledGrid>
                    <LevelCard title={"Angel Island Zone"} href={"/angel-island-zone"} src={"/src/assets/thumb-angelisland.png"} alt={"Angel Island Zone"}/>
                    <LevelCard title={"Hydro City Zone"} href={"/hydro-city-zone"} src={"/src/assets/thumb-hydrocity.png"} alt={"Hydro City Zone"}/>
                    <LevelCard title={"Marble Garden Zone"} href={"/marble-garden-zone"} src={"/src/assets/thumb-marblegarden.png"} alt={"Marble Garden Zone"}/>
                    <LevelCard title={"Carnival Night Zone"} href={"/carnival-night-zone"} src={"/src/assets/thumb-carnivalnight.png"} alt={"Carnival Night Zone"}/>
                    <LevelCard title={"Ice Cap Zone"} href={"/ice-cap-zone"} src={"/src/assets/thumb-icecap.png"} alt={"Ice Cap Zone"}/>
                    <LevelCard title={"Launch Base Zone"} href={"/launch-base-zone"} src={"/src/assets/thumb-launchbase.png"} alt={"Launch Base Zone"}/>   
                </StyledGrid>    
            </StyledMain>
            <Footer />
        </>
    )
}

export default LevelSelectPage;