import React from "react";

import { useNavigate } from "react-router-dom";
import { RotasAPlicacao } from "../../common/enums/rotas/RotasExemplo";
import styles from './Header.module.css';

const Header: React.FC = () => {

    /*  TODO: melhorar a abstração do useNavigate se possível para não ter que
        importar em todos os componentes que fazem redirecionamento.*/
    const navigate = useNavigate();
    
    const handleNavigate = (rota: RotasAPlicacao): void => {
        navigate(rota.toString());
    }

    return (
        <header className={styles['container']}>
            <ul>
                <li>
                    <button onClick={() => { handleNavigate(RotasAPlicacao.Index) }}>Index</button>
                </li>
                <li>
                    <button onClick={() => { handleNavigate(RotasAPlicacao.Home) }}>Home</button>
                </li>
                <li>
                    <button onClick={() => { handleNavigate(RotasAPlicacao.About) }}>About</button>
                </li>
            </ul>
        </header>
    );
}

export { Header };