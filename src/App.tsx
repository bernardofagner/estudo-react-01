import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import './App.css';
import Footer from './features/footer';
import Header from './features/header/Header';
import { Router } from './router';


function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Header />
                <Router />
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
