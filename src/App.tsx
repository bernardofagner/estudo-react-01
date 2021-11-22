import React from 'react';

import './App.css';
import { Footer } from './features/Footer/Footer';
import { Header } from './features/Header/Header';
import { Router } from './router';

const App: React.FC = () => {
    return (
        <div className="App">
            <Header />
            <Router />
            <Footer />
        </div>
    );
}

export default App;
