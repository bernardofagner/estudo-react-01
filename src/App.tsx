import React from 'react';
import './App.css';

import { Header } from './features/header/Header';
import { Router } from './router/Router';

const App: React.FC = () => {
    return (
        <div className="App">
            <Header />
            <Router />
        </div>
    );
}

export { App };
