import { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "./Header";
import MusicPlayer from "./MusicPlayer";
import Footer from "./Footer";
import LevelCard from "./LevelCard";
import Button from "./Button";
import Loader from "./Loader";

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
    const [scores, setScores] = useState([]);
    const [loading, setLoading] = useState(true);

    const getAllLevelScores = async () => {
        const response = await fetch(
          `https://${import.meta.env.API}/scores/all`,
          {
            method: "GET",
            credentials: "include", 
          }
        )
    
        if (response.ok) {
            const data = await response.json();
            setScores(data.scores);
            setLoading(false)
        } else {
          const errorData = await response.json();
          console.error(`${errorData.message}`);
        }
    }

    const findHighestScore = (levelName) => {
        let highestScores = scores.filter((score) => {
            return score.levelId === levelName && score.name
        }).sort((a, b) => {
            if (+a.time < +b.time) return -1;
            if (+a.time > +b.time) return 1;
            return 0;
        })
        if (highestScores.length > 0) {
            return highestScores[0]
        } else {
            return
        }
    }

    useEffect(() => {
        getAllLevelScores();
    }, [])

    return (
        <>
            <Header title="Level Select"/>
            <div className="navContainer">
                <nav>
                    <Button text="Home" href={"/"}/>
                    <Button text="About" href={"/about"}/>
                    <Button text="Credits" href={"/credits"}/>
                </nav>
                <MusicPlayer source={"/src/assets/data-select.mp3"} autoPlay={'true'}/>
            </div>
            <StyledMain>
                {loading ? (
                    <Loader />
                ) : (
                    <StyledGrid>
                        <LevelCard highestScore={findHighestScore('angel-island-zone')} title={"Angel Island Zone"} href={"/angel-island-zone"} src={"/src/assets/thumb-angelisland.png"} alt={"Angel Island Zone"}/>
                        <LevelCard highestScore={findHighestScore('hydro-city-zone')} title={"Hydro City Zone"} href={"/hydro-city-zone"} src={"/src/assets/thumb-hydrocity.png"} alt={"Hydro City Zone"}/>
                        <LevelCard highestScore={findHighestScore('marble-garden-zone')} title={"Marble Garden Zone"} href={"/marble-garden-zone"} src={"/src/assets/thumb-marblegarden.png"} alt={"Marble Garden Zone"}/>
                        <LevelCard highestScore={findHighestScore('carnival-night-zone')} title={"Carnival Night Zone"} href={"/carnival-night-zone"} src={"/src/assets/thumb-carnivalnight.png"} alt={"Carnival Night Zone"}/>
                        <LevelCard highestScore={findHighestScore('ice-cap-zone')} title={"Ice Cap Zone"} href={"/ice-cap-zone"} src={"/src/assets/thumb-icecap.png"} alt={"Ice Cap Zone"}/>
                        <LevelCard highestScore={findHighestScore('launch-base-zone')} title={"Launch Base Zone"} href={"/launch-base-zone"} src={"/src/assets/thumb-launchbase.png"} alt={"Launch Base Zone"}/>   
                    </StyledGrid> 
                )}
            </StyledMain>
            <Footer />
        </>
    )
}

export default LevelSelectPage;