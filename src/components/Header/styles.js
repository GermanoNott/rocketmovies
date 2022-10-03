import styled from 'styled-components'

export const Container = styled.header`
    grid-area: header;
    width: 100%;
    height: 11.6rem;
    border-bottom: 1px solid ${({ theme }) => theme.colors.background_800};

    display: flex;
    justify-content: space-between;
    align-items: center;
    white-space: nowrap;
    gap: 6rem;
    padding: 0 12rem;

    > h2 {
        color: ${({ theme }) => theme.colors.pink};
        font-size: 2.4rem;
        font-weight: 700;
    }
`

export const ProfileHeader = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: 1.4rem;

    > div {
        display: flex;
        flex-direction: column;
        text-align: right;
    }

    span {
        align-items: flex-end;
    }

    img {
        width: 6rem;
        height: 6rem;
        border-radius: 50%;
    }
`
