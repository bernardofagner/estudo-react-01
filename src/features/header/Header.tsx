import React from "react";

import { useNavigate } from "react-router-dom";
import { RotasFeatures } from "../../common/enums/rotas/RotasExemplo";
import styles from './Header.module.css';

const Header: React.FC = () => {

    const rotasDaAplicacao: Array<RotasFeatures> = [
        RotasFeatures.Index,
        RotasFeatures.Home,
        RotasFeatures.About
    ];

    const navigate = useNavigate();
    const handleNavigate = (rota: RotasFeatures): void => {
        navigate(rota.toString());
    };

    return (
        <header className={styles['pageContainer']}>
            <div className={styles['containerItensMenu']}>
                {rotasDaAplicacao.map((rota) => (
                    <button key={rota}
                        className={styles['botao']}
                        onClick={() => { handleNavigate(rota) }}>
                        Index
                    </button>
                ))}
            </div>
        </header>
    );
}

export { Header };
