import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
    }

    body{
        -webkit-font-smoothing: antialiased !important;
        background: #f4f4f4;
    }

    body, input, button{
        font: 14px Arial, sans-serif;
    }

    #root {
        max-width: 933px;
        margin: 0 auto;
        padding: 0 20px 50px;
    }

    button{
        cursor: pointer;
    }
`;
