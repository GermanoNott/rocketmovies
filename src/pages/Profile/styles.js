import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;

    > header {
        width: 100%;
        height: 14.4rem;
        background-color: ${({ theme }) => theme.colors.background_red};
        display: flex;
        align-items: center;
        padding: 0 14.4rem;
    }
    a {
        font-size: 1.6rem;
        display: flex;
        align-items: center;
        gap: 0.8rem;
        color: ${({ theme }) => theme.colors.pink};
    }

    button {
        margin-top: 2.4rem;
        width: 100%;
        filter: opacity(0.6);
    }
`
export const Form = styled.form`
    max-width: 34rem;
    margin: 3rem auto 0;
    > div:nth-child(4) {
        margin-top: 2.4rem;
    }
`
export const Avatar = styled.div`
    position: relative;
    margin: -12.5rem auto 3.2rem;
    width: 18.6rem;
    height: 18.6rem;

    > img {
        width: 18.6rem;
        height: 18.6rem;
        border-radius: 50%;
    }

    > label {
        width: 4.8rem;
        height: 4.8rem;
        background-color: ${({ theme }) => theme.colors.pink};
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;

        position: absolute;
        bottom: 0.7rem;
        right: 0.7rem;

        cursor: pointer;

        input {
            display: none;
        }

        svg {
            width: 2rem;
            height: 2rem;
            color: ${({ theme }) => theme.colors.black};
        }
    }
`
