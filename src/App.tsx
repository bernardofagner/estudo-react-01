import React from 'react';

import './App.css';
import Footer from './features/footer';
import Header from './features/header/Header';
import { Router } from './router';

function App() {
    return (
        <div className="App">
            <Header />
            <Router />
            <Footer />
        </div>
    );
}

export default App;
