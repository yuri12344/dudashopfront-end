import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        font-family: 'Poppins', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    }

    h1,
    h2,
    h3,
    h4,
    p {
      margin: 0;
      padding: 0;
    }

    #root {
        margin: 0 auto;
        overflow: hidden;
    }
`

