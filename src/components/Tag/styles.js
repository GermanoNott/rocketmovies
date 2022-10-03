import styled from 'styled-components'

export const Container = styled.span`
    font-size: 1rem;
    padding: 0.5rem 1.4rem;
    border-radius: 0.5rem;
    margin-right: 0.6rem;

    text-transform: lowercase;

    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.background_800};
`
