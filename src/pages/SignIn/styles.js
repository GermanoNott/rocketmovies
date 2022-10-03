import styled from 'styled-components'
import backgroundImg from '../../assets/bg.png'

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: stretch;
`
export const Form = styled.form`
    padding: 0 13.6rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    text-align: center;

    > .top {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        h1 {
            font-size: 4.8rem;
            color: ${({ theme }) => theme.colors.pink};
        }

        h2 {
            font-size: 2.4rem;
            margin: 4.8rem 0;
        }

        p {
            font-size: 1.4rem;
        }
    }
    > a {
        color: ${({ theme }) => theme.colors.pink};
    }
    button {
        margin: 2.4rem 0 4.2rem;
    }
`
export const Background = styled.div`
    flex: 1;
    background: url(${backgroundImg}) no-repeat center center;
    background-size: cover;
`
