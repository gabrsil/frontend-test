import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;700&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
}


body {
    -webkit-font-smoothing: antialiased;
    font-family: 'Rubik', sans-serif;
    background-color: #f5f5f5;
}

body, input, button {
    font-size: 16px;
}

h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
}

button {
    cursor: pointer;
}

a {
    text-decoration: none;
}

button.global-btn {
    border: none;
    background-color: #00A536;
    color: #fff;
    font-weight: bold;
    padding: 10px 50px;
    border-radius: 8px;
    height: 50px;
    box-shadow: 0px 30px 25px -15px rgba(0, 165, 54, 0.35);
    transition: 0.2s;

    :hover {
        filter: brightness(1.1);
        box-shadow: 0px 30px 30px -15px rgba(0, 165, 54, 0.35);
    }
}

:root {
    --main-darkblue: #0b132a;
    --main-lightgreen: #00a536;
}


`;
