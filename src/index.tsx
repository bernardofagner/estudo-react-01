import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { ReduxStore } from './config/ReduxStore/ReduxStore';
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
    <React.StrictMode>
        <BrowserRouter basename="/">
            <Provider store={ReduxStore.Store()}>
                <App />
            </Provider>
        </BrowserRouter>
    </React.StrictMode>
);
