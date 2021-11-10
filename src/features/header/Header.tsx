import React, { useEffect, useState } from "react";


import { useNavigate } from "react-router-dom";
import { RotasFeatures } from "../../common/enums/rotas/RotasExemplo";

import styles from './Header.module.css';

const Header: React.FC = () => {
    const [autenticado, setAutenticado] = useState<boolean>(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (autenticado) {
            navigate("/about")
        }
    }, [autenticado])

    return (
        <header className={styles['container']}>
            <ul>
                <li>
                    <button onClick={() => { navigate(RotasFeatures.Home) }}>Home</button>
                </li>
                <li>
                    <button onClick={() => { navigate(RotasFeatures.About) }}>About</button>
                </li>
                {!autenticado &&
                    <li><button onClick={() => { setAutenticado(true) }}>Entrar!</button></li>
                }
            </ul>
        </header>
    );
}

export default Header;