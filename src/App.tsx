import React from 'react';
import './App.css';

import { ApplicationStore } from './config/ApplicationStore/ApplicationStore';

import { Header } from './features/Header/Header';
import { Router } from './router/Router';

import { Provider } from 'jotai';

const store = ApplicationStore.GetApplicationStore();

const App: React.FC = () => {
    return (
        <Provider store={store}>
            <div className="App">
                <Header />
                <Router />
            </div>
        </Provider>
    );
}

export { App };