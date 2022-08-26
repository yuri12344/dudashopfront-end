import styled from 'styled-components'

export const StyledProductDetail = styled.div`
    display: flex;
    min-height: calc(100vh - 60px);
    max-width: 1000px;
    margin-inline: auto;
    padding: 2rem;
    gap: 2rem;
    line-height: 1.5;

    & > div > div {
        display: flex;
        align-items: flex-end;
        gap: 1rem;
    }

    & fieldset {
        display: flex;
        flex-direction: column;
        & input, 
        & select {
            max-width: 150px;
            background-color: #ccc;
            border: none;
            padding: 0.5rem 1rem;
        }
    }

    & button {
        max-width: 150px;
        background-color: #ccc;
        border: none;
        padding: 0.5rem 1rem;
        height: fit-content;

    } 

    & div:first-child {
        width: 320;
        height: 320px;
        background-color: blue;
    }
`