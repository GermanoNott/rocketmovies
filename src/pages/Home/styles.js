import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    .content {
        margin: 4.8rem 12rem 0;
    }

    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        > h2 {
            font-size: 3.2rem;
        }
    }

    main {
        grid-area: content;
        height: 60vh;
        margin: 2rem auto 0;
        overflow-y: auto;
        padding: 0 1.5rem;
    }
`
