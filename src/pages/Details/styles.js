import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    overflow: hidden;
    display: grid;
    grid-template-rows: 11.6rem auto;
    grid-template-areas:
        'header'
        'content';

    > main {
        grid-area: content;

        height: auto;
        overflow-y: auto;
        padding: 0 1rem 5rem;
    }
`

export const Content = styled.div`
    display: flex;
    gap: 2rem;
    padding: 0 12rem;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 3.6rem;

    button {
        margin-top: 2.4rem;
    }

    p {
        text-align: justify;
    }
`

export const MovieInfo = styled.div`
    display: flex;

    align-items: center;
    flex-wrap: wrap;
    gap: 2.5rem;
    svg {
        font-size: 2rem;
    }
`
export const AuthorInfo = styled.div`
    color: ${({ theme }) => theme.colors.white};
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.8rem;

    div {
        display: flex;
        align-items: center;
        justify-items: space-between;
        gap: 0.8rem;
    }

    svg {
        color: ${({ theme }) => theme.colors.pink};
    }

    img {
        width: 3rem;
        border-radius: 50%;
    }
`
