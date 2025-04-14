import styled from "styled-components";

const StyledAudio = styled.audio`
    border: 3px solid gold;
    border-radius: 50px;
`

const MusicPlayer = ({ source }) => {
    return (
        <StyledAudio id="audioPlayer" controls>
            <source src={source} type="audio/mpeg" />
            Your browser does not support the audio element
        </StyledAudio>
    )
}

export default MusicPlayer;