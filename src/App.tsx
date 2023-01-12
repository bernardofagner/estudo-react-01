import React from 'react';
import './App.css';

import { Header } from './features/header/Header';
import { Router } from './router/Router';
import { Footer } from './features/footer/Footer';

const App: React.FC = () => {
    return (
        <div className="App">
            <Header />
            <Router />
            <Footer />
        </div>
    );
}

export { App };
