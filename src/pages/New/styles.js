import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 11.6rem auto;
    grid-template-areas: 'header' 'content';

    > main {
        grid-area: content;
        overflow-y: auto;
    }
`

export const Form = styled.form`
    max-width: auto;
    margin: 3.8rem auto;
    padding: 0 12rem;
    > header {
        display: flex;
        font-size: 2rem;
        font-weight: 500;
        flex-direction: column;
        align-items: flex-start;

        margin-bottom: 3.6rem;

        a {
            font-size: 2rem;
            color: ${({ theme }) => theme.colors.pink};
            margin-bottom: 2.4rem;
        }
    }

    > Section {
        font-size: 1.6rem;
        font-weight: 400;
        margin-top: 4rem;
        width: 100%;
        margin-bottom: 4rem;
        color: ${({ theme }) => theme.colors.gray_200};
    }

    .tags {
        display: flex;
        height: 8.8rem;
        padding: 1.6rem;
        margin-top: 2.4rem;
        border-radius: 0.8rem;
        gap: 1rem;
        align-items: center;
        flex-wrap: wrap;
        color: ${({ theme }) => theme.colors.white};
        background-color: ${({ theme }) => theme.colors.black_900};
    }

    .buttons {
        display: flex;

        flex-wrap: wrap;
        gap: 3vw;
        button {
            flex: 1;
        }
    }
`
