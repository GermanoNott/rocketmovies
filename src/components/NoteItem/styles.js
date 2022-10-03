import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme, isNew }) =>
        isNew ? 'transparent' : theme.colors.gray_300};

    border: ${({ theme, isNew }) =>
        isNew ? `1px dashed ${theme.colors.gray_200}` : 'none'};

    border-radius: 10px;
    padding-right: 1.6rem;

    > button {
        border: none;
        background: none;
    }

    .button-delete,
    .button-add {
        color: ${({ theme }) => theme.colors.pink};
    }

    > input {
        height: 5.6rem;
        width: 100%;
        padding: 1.2rem;

        background-color: transparent;
        border: none;
        color: ${({ theme, isNew }) =>
            isNew ? theme.colors.gray_200 : theme.colors.white};
    }
`
