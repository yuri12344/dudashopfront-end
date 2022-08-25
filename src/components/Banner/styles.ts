import styled, { css } from 'styled-components'

export const StyledBanner = styled('div')`
    ${({theme}) => css`
      display: flex;
      justify-content: center;
      align-items: center;
    `
}`