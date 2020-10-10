import { createGlobalStyle } from 'styled-components'

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


`
