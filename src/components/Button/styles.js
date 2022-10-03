import styled from 'styled-components'

export const Container = styled.button`
    background-color: ${({ theme, negative }) =>
        negative ? theme.colors.black : theme.colors.pink};
    color: ${({ theme, negative }) =>
        negative ? theme.colors.pink : theme.colors.black};

    font-size: 1.6rem;
    height: 4.8rem;
    border-radius: 1rem;

    border: none;
    padding: 0 1.6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.6rem;
`
