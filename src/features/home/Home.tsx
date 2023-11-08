import React, { useEffect, useState } from "react";
import './Home.module.css';

import { IHomeModel } from "../../models/home/IHomeModel";
import { useDispatch, useSelector } from "react-redux";
import { homeActions, IHomeState } from "../../redux/features/home";
import { LogUtil } from "../../common/utils/LogUtil";
import { CustomStore, CustomStoreKeys } from "../../config/CustomStore/CustomStore";
import { SampleRepository } from "../../repositories/SampleRepository";

interface IHomeComponentInfo {
    Name: string;
    Info: string;
    InfoAdicional: string;
}

const Home: React.FC = () => {
    const dispatch = useDispatch();

    const homeState = useSelector((state: any) => {
        return state.homeState as IHomeState
    });

    const setHomeRedux = (data: IHomeModel) => {
        dispatch(homeActions.setHomeRedux(data));
    };

    const [retrievedItem, setRetrievedItem] = useState<IHomeComponentInfo | null>(null);

    useEffect(() => {
        LogUtil.LogEvent('Home.tsx', 'homeModelRedux', homeState, false);

        setHomeRedux({
            Contador: 100,
            NomeSistema: 'Nome do sistema modificado via Redux'
        });

        functionForExperiments();

        // eslint-disable-next-line
    }, []);

    const functionForExperiments = () => {
        const info: IHomeComponentInfo = {
            Name: 'HomeComponent',
            Info: 'Componente usado para testes',
            InfoAdicional: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium facere a esse iste non rem nisi sapiente, reprehenderit sit expedita culpa? Cupiditate aperiam minus, adipisci aliquam fuga dolore perspiciatis minima!"
        };

        CustomStore.AddItem({
            Key: CustomStoreKeys.HOME_COMPONENT_INFO,
            Data: info
        });

        CustomStore.AddItem({
            Key: CustomStoreKeys.HOME_COMPONENT_INFO,
            Data: info
        });

        const registro = CustomStore.GetItem<IHomeComponentInfo>(CustomStoreKeys.HOME_COMPONENT_INFO);
        setRetrievedItem(registro);

        CustomStore.ListAllStoragedItems();
    }

    return (
        <div className='container'>
            <h1>
                Home
            </h1>

            <p>Aplicação rodando na porta {process.env.PORT ?? "X"}</p>
            <p>Nome da página: {homeState.homeModelRedux?.NomeSistema} </p>
            <p>Valor do contador: {homeState.homeModelRedux?.Contador} </p>
            <p>Nome do componente: {retrievedItem?.Name} </p>
            <p>Informações do componente: {retrievedItem?.Info} </p>
            <p style={{maxWidth: '450px'}}>Informações adicionais: {retrievedItem?.InfoAdicional} </p>

            <button
                onClick={() => {
                    SampleRepository.GetApiHealth()
                }}
            >
                ObterSaudeApi
            </button>
        </div>
    );
};

export { Home };
