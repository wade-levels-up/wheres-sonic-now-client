import { forwardRef } from "react";
import styled from "styled-components";

const StyledAudio = styled.audio`
    border: 6px ridge gold;
    border-radius: 50px;
    margin: 16px 0px;
`

const MusicPlayer = forwardRef(({ source, autoPlay }, ref) => {
    return (
        <StyledAudio ref={ref} id="audioPlayer" controls controlsList="nodownload" autoPlay={autoPlay}>
            <source src={source} type="audio/mpeg" />
            Your browser does not support the audio element
        </StyledAudio>
    )
})

export default MusicPlayer;