import React, { useEffect } from "react";
import styles from './Home.module.css';

import { IHomeModel } from "../../models/home/HomeModel";
import { useDispatch, useSelector } from "react-redux";
import { homeActions, IHomeState } from "../../redux/features/home";
import { LogUtil } from "../../common/utils/LogUtil";

const Home: React.FC = () => {
    const dispatch = useDispatch();

    const homeState =  useSelector((state:any) => {
        return state.homeState as IHomeState
    });

    const setHomeModelRedux = (data: IHomeModel) => {
        dispatch(homeActions.setHomeRedux(data));
    }

    useEffect(() => {
        LogUtil.TrackEvent('homeModelRedux', homeState);
        
        setHomeModelRedux({
            Contador: 100,
            NomeSistema: 'Nome do sistema modificado 2x'
        });
        // eslint-disable-next-line
    }, []);

    return homeState && (
        <div className={styles['container']}>
            <h1>
                Página
            </h1>

            <p>Nome da página: {homeState.homeModelRedux?.NomeSistema} </p>
            <p>Valor do contador: {homeState.homeModelRedux?.Contador} </p>
        </div>
    );
};

export default Home;
