import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;

    background-color: ${({ theme }) => theme.colors.gray_300};
    color: ${({ theme }) => theme.colors.gray_100};

    margin-bottom: 0.8rem;
    border-radius: 10px;

    > input {
        height: 5.6rem;
        width: 100%;

        padding: 12px;
        color: ${({ theme }) => theme.colors.gray_100};
        background: transparent;
        border: 0;

        &::placeholder {
            color: ${({ theme }) => theme.colors.gray_100};
        }
    }
    > svg {
        margin-left: 16px;
    }
`
