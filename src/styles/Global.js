import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    body{
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }

    a{
        text-decoration: none;
        color: ${({ theme }) => theme.color.dark}
    }

    *box-sizing: border-box;
`;

export default GlobalStyles;
