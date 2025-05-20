import { forwardRef, useEffect, useRef } from "react";
import styled from "styled-components";

const StyledAudio = styled.audio`
    border: 6px ridge gold;
    border-radius: 50px;
    margin: 16px 0px;
    display: none;

    @media (min-width: 600px) {
        display: block;
    }
`

const MusicPlayer = forwardRef(({ source, autoPlay }, ref) => {
    const internalAudioRef = useRef(null); // Create a ref if none is passed
    const audioRef = ref || internalAudioRef; // Use the passed ref or the internal one

    useEffect(() => {
        const audio = audioRef.current;

        if (audio) {
            if (autoPlay) {
                audio.play();
            } else {
                audio.pause();
                audio.currentTime = 0;
            }
        }

        // Cleanup function to stop the audio when the component unmounts
        return () => {
            if (audio) {
                audio.pause();
                audio.currentTime = 0;
            }
        };
    }, [source, autoPlay, audioRef]);

    return (
        <StyledAudio ref={audioRef} id="audioPlayer" controls controlsList="nodownload">
            <source src={source} type="audio/mpeg" />
            Your browser does not support the audio element.
        </StyledAudio>
    );
});

export default MusicPlayer;