import React from "react";

import { useNavigate } from "react-router-dom";
import { RotasFeatures } from "../../common/enums/rotas/RotasExemplo";
import styles from './Header.module.css';

const Header: React.FC = () => {

    /*  TODO: melhorar a abstração do useNavigate se possível para não ter que
        importar em todos os componentes que fazem redirecionamento.*/
    const navigate = useNavigate();

    const handleNavigate = (rota: RotasFeatures): void => {
        navigate(rota.toString());
    }

    return (
        <header className={styles['pageContainer']}>
            <div className={styles['containerItensMenu']}>
                <button
                    className={styles['botao']}
                    onClick={() => { handleNavigate(RotasFeatures.Index) }}>
                    Index
                </button>
                <button
                    className={styles['botao']}
                    onClick={() => { handleNavigate(RotasFeatures.Home) }}>
                    Home
                </button>
                <button
                    className={styles['botao']}
                    onClick={() => { handleNavigate(RotasFeatures.About) }}>
                    About
                </button>
            </div>
        </header>
    );
}

export default Header;
