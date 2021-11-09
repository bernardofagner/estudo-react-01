import React, { useState } from "react";

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";

import { Home } from '../home/Home';
import { About } from '../About/About';

const rotasAutenticadas = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
        </Routes>
    );
};

const rotasNaoAutenticadas = () => {
    return (
        <Route path="/outro">
            <div>
                Rota não autenticada
            </div>
        </Route>
    );
};

export const Header: React.FC = () => {

    //TODO: chamar as APIs p autenticação
    const [rotaEstaAutenticada, setRotaEstaAutenticada] = useState<boolean>(true);

    return (
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    {!rotaEstaAutenticada &&
                        <li>
                            <Link to="/outro">Outro</Link>
                        </li>
                    }
                </ul>

                <hr />

                {/*  A <Routes> looks through all its children <Route> elements and renders the first one whose path  matches the current URL. Use a <Routes> any time
                    you have multiple routes, but you want only one of them to render at a time*/}

                {rotaEstaAutenticada ? rotasAutenticadas() : rotasNaoAutenticadas()}
            </div>
        </Router>
    );
}