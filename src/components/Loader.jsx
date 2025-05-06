import styled from "styled-components";

const StyledLoader = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    justify-content: center;
    align-items: center;
    border: 1px ridge gold;
    padding: 12px 24px;
    border-radius: 20px;
    background-color: rgba(255, 255, 255, 0.2);

    span {
        font-size: 1.5rem;
    }
`

const Loader = () => {
    return (
        <StyledLoader>
            <img src="/assets/sonic-loading.gif" alt="sonic spinning a ring around his finger whilst waiting" width={"80px"}/>
            <span>Loading...</span>
        </StyledLoader>
    )
}

export default Loader;