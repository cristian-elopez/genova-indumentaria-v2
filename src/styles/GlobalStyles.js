import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root {
        --dark-background: #2E2C2F;
        --light-background: #FFFFFF;
    }

    html {
        scroll-behavior: smooth;
        height: 100%;
    }

    body {
        margin: 0;
        padding: 0;
        background: ${({ theme }) => theme.background};
        color: ${({ theme }) => theme.text};
        font-family: "Orbitron", sans-serif;
        display: flex;
        flex-direction: column;
        min-height: 100%;
    }

    a {
        text-decoration: none;
    }

    li {
        list-style: none;
    }
`;
