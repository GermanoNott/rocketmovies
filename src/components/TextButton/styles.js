import styled from 'styled-components'

export const Container = styled.button`
    display: flex;
    align-items: center;
    background: none;
    color: ${({ theme }) => theme.colors.pink};
    border: none;
    font-size: 1.6rem;
    gap: 0.8rem;
`
