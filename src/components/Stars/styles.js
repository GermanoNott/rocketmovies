import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    gap: 0.5rem;

    span {
        font-size: 1.4rem;
        color: ${({ theme }) => theme.colors.pink};
        padding: 0;
        margin: 0;
        max-height: 1.8rem;
    }
`
