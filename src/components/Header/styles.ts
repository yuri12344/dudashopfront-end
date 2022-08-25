import styled from 'styled-components'

export const StyledHeader = styled.div`
    display: flex;
    height: 60px;
    max-width: 1000px;
    margin-inline: auto;

    & nav {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        height: 100%;

        & > div {
            display: flex;
            gap: 1rem;

            & ul {
                list-style: none;
                & a {
                    color: #000;
                    text-decoration: none;
                }
            } 
            & div {
                display: flex;
                gap: 0.5rem;    
            }
        }
    
    }
`