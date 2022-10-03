import styled from 'styled-components'

export const Container = styled.textarea`
    width: 100%;
    height: 15rem;

    background-color: ${({ theme }) => theme.colors.gray_300};
    color: ${({ theme }) => theme.colors.gray_100};

    border: none;
    resize: none;
    margin-bottom: 0.8rem;
    border-radius: 10px;
    padding: 12px;

    &::placeholder {
        color: ${({ theme }) => theme.colors.gray_100};
    }
`
