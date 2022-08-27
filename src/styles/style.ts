import styled from 'styled-components'

export const StyledHome = styled.div`

    min-height: 100vh;
    background-color: #f2d9e6;
    max-width: 1000px;
    margin-inline: auto;

    & > h2 {
        padding-top: 1rem;
        text-align: center;
    }
`
export const ProductContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    padding: 2rem;
    margin-inline: center;
`