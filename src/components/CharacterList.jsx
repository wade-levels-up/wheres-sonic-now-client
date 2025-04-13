import styled from "styled-components";

const StyledCharacterIcon = styled.img`
    width: 50px;
    height: 65px;
`

const StyledList = styled.ul`
    display: flex;
    align-items: flex-end;
    gap: 32px;
    padding: 16px;
`

const CharacterList = () => {

    return (
        <StyledList>
            <li>
                <StyledCharacterIcon src="/src/assets/sonic.png" alt="Sonic The Hedgehog" />
            </li>
            <li>
                <StyledCharacterIcon src="/src/assets/tails.png" alt="Miles 'Tails' Prower" />
            </li>
            <li>
                <StyledCharacterIcon src="/src/assets/knuckles.png" alt="Knuckles The Echidna" />
            </li>
        </StyledList>
    )
}

export default CharacterList;