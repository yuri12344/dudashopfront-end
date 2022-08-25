import styled from 'styled-components'

export const StyledProduct = styled('div')`
    display: flex;
    flex-direction: column;

    height: 300px;
    width: 250px;
    background-color: white;
    margin-inline: auto;

    & > div {
        padding: 0.5rem;
        text-align: center;
        & h2 {
            color: #888;
        }
    }
`