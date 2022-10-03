import styled from 'styled-components'

export const Container = styled.div`
    background-color: ${({ theme }) => theme.colors.background_red};
    color: ${({ theme }) => theme.colors.gray_100};
    font-size: 1.2rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.8rem;

    text-align: left;

    width: 100%;
    padding: 3.2rem;
    margin: 2.4rem 0;
    border-radius: 16px;
    border: none;

    > div {
        display: flex;
        flex-direction: column;

        gap: 8px;

        h3 {
            font-size: 2.4rem;
            color: ${({ theme }) => theme.colors.white};
        }
    }
`
