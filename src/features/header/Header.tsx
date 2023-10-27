import React from "react";

import { useNavigate } from "react-router-dom";
import { RotasFeatures } from "../../common/enums/rotas/RotasExemplo";
import styles from './Header.module.css';

interface IInformacaoRota {
    Nome: string;
    Rota: RotasFeatures
}

const Header: React.FC = () => {

    const rotasDaAplicacao: Array<IInformacaoRota> = [
        { Nome: 'Index', Rota: RotasFeatures.Index },
        { Nome: 'Home', Rota: RotasFeatures.Home },
        { Nome: 'CodigoBarras', Rota: RotasFeatures.CodigoBarras },
        { Nome: 'ApiSync', Rota: RotasFeatures.ApiSync },
        { Nome: 'PaginaStyledComponent', Rota: RotasFeatures.StyledComponent }
    ];

    const navigate = useNavigate();
    const handleNavigate = (rota: RotasFeatures): void => {
        navigate(rota.toString());
    };

    return (
        <header className={styles['pageContainer']}>
            <div className={styles['containerItensMenu']}>
                {rotasDaAplicacao.map((rota) => (
                    <button key={rota.Nome}
                        className={styles['botao']}
                        onClick={() => handleNavigate(rota.Rota) }>
                        {rota.Nome}
                    </button>
                ))}
            </div>
        </header>
    );
}

export { Header };
