import React, { useEffect } from "react";
import './Home.module.css';

import { IHomeModel } from "../../models/home/HomeModel";
import { useDispatch, useSelector } from "react-redux";
import { homeActions, IHomeState } from "../../redux/features/home";
import { LogUtil } from "../../common/utils/LogUtil";
import { CustomStore, CustomStoreKeys } from "../../config/CustomStore/CustomStore";

interface IHomeComponentInfo {
    Name: string;
    Info: string;
}

const Home: React.FC = () => {
    const dispatch = useDispatch();

    const homeState =  useSelector((state:any) => {
        return state.homeState as IHomeState
    });

    const setHomeRedux = (data: IHomeModel) => {
        dispatch(homeActions.setHomeRedux(data));
    }

    useEffect(() => {
        LogUtil.TrackEvent('homeModelRedux', homeState);
        
        setHomeRedux({
            Contador: 100,
            NomeSistema: 'Nome do sistema modificado 2x'
        });

        functionForExperiments();
        
        // eslint-disable-next-line
    }, []);

    const functionForExperiments = () => {
        const info: IHomeComponentInfo = {
            Name: 'HomeComponent',
            Info: 'Componente usado para testes'
        };

        CustomStore.AddItem({
            Key: CustomStoreKeys.HOME_COMPONENT_INFO,
            Data: info
        });

        CustomStore.AddItem({
            Key: CustomStoreKeys.HOME_COMPONENT_INFO,
            Data: info
        });
    }

    return homeState && (
        <div className='container'>
            <h1>
                Página
            </h1>

            <p>Nome da página: {homeState.homeModelRedux?.NomeSistema} </p>
            <p>Valor do contador: {homeState.homeModelRedux?.Contador} </p>
        </div>
    );
};

export default Home;
