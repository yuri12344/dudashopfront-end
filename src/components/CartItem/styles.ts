import styled from 'styled-components'

export const StyledCartItem = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    & input {
        max-width: 150px;
        background-color: #ccc;
        border: none;
        padding: 0.5rem 1rem;
    }
`