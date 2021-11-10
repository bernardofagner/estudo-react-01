import React from "react";


import { useNavigate } from "react-router-dom";
import { RotasFeatures } from "../../common/enums/rotas/RotasExemplo";

import styles from './Header.module.css';

const Header: React.FC = () => {
    return (
        <header className={styles['container']}>
            <ul>
                <li>
                    <button onClick={() => {useNavigate(RotasFeatures.Home)}}>Home</button>
                </li>
                <li>
                    <button onClick={() => {useNavigate(RotasFeatures.About)}}>About</button>
                </li>
            </ul>
        </header>
    );
}

export default Header;