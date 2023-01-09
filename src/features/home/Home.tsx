import React, { useEffect } from "react";
import { ReduxDataStatus } from "../../common/enums/redux/ReduxDataStatus";
import IHomeModel from "../../models/home/HomeModel";
import styles from './Home.module.css';

interface IHomeProps {
    homeModel: IHomeModel,
    homeModelStatus: ReduxDataStatus,
    setHomeModel: Function,
    setStatusHomeModel: Function
}

const Home: React.FC<IHomeProps> = ({
    homeModel,
    homeModelStatus,
    setHomeModel,
    setStatusHomeModel
}) => {

    useEffect(() => {
        const model: IHomeModel = {
            NomeSistema: 'Nome do sistema inicial Reducer',
            Contador: 10
        };

        const statusModel: ReduxDataStatus = ReduxDataStatus.Success;

        setHomeModel(model);
        setStatusHomeModel(statusModel);
        // eslint-disable-next-line
    }, []);

    return (
        <div className={styles['container']}>
            <h1>
                Página
            </h1>

            <p>Nome da página: {homeModel?.NomeSistema} </p>
            <p>Valor do contador: {homeModel?.Contador} </p>
            <p>Status do redux: {homeModelStatus} </p>
        </div>
    );
};

export default Home;
