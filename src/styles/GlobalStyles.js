import styled, { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
    :root {
        --gray-bg: #2E2C2F;
        --gray-bg-two: #18191a;
    }

    html {
        scroll-behavior: smooth;
        height: 100%;
    }

    body {
        margin: 0;
        padding: 0;
        background: var(--gray-bg);
        color: white;
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