import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ReduxStore } from './config/ReduxStore/ReduxStore';

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter basename="/">
            <Provider store={ReduxStore.Store()}>
                <App />
            </Provider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
