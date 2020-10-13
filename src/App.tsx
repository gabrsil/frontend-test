import React from 'react';
import { GlobalStyle } from './Styles/GlobalStyle';
import Home from './Pages/Home';
import Footer from './Components/Footer';

function App() {
    return (
        <>
            <Home />
            <Footer />
            <GlobalStyle />
        </>
    );
}

export default App;
