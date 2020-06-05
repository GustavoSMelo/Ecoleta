import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        text-decoration: none;

    }

    body{
        background-color: #f0f0f5;
        max-width: 100%;
    }

    body, input, button{
        font-family: Roboto, Arial, Helvetica, sans-serif
    }
`
