import React, { useEffect, useState } from "react";
import './Home.module.css';

import { HomeDto } from "../../dtos/home/HomeDto";
import { useDispatch, useSelector } from "react-redux";
import { homeActions, IHomeState } from "../../redux/features/home";
import { LogUtil } from "../../common/utils/LogUtil";
import { CustomStore, CustomStoreKeys } from "../../config/CustomStore/CustomStore";
import { SampleRepository } from "../../restRepositories/SampleRepository";
import { IApiHealthModel } from "../../models/Services/ApiHealth/IApiHealthModel";

interface IHomeComponentInfo {
    Name: string;
    Info: string;
    InfoAdicional: string;
}

const Home: React.FC = () => {

    const [apiHealthState, setApiHealthState] = useState<IApiHealthModel | null>(null);
    const [retrievedItem, setRetrievedItem] = useState<IHomeComponentInfo | null>(null);

    const homeState = useSelector((state: any) => {
        return state.homeState as IHomeState
    });
    
    const dispatch = useDispatch();
    const setHomeRedux = (data: HomeDto) => {
        dispatch(homeActions.setHomeRedux(data));
    };


    useEffect(() => {
        LogUtil.LogEvent('Home.tsx', 'homeModelRedux', homeState, false);

        setHomeRedux({
            Contador: 100,
            NomeSistema: 'Nome do sistema modificado via Redux'
        });

        functionForExperiments();

        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        CustomStore.AddItem({
            Key: CustomStoreKeys.HOME_COMPONENT_API_HEALTH,
            Data: apiHealthState
        });
    },
    [apiHealthState]);

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

            <p>Nome da página: {homeState.homeModelRedux?.NomeSistema} </p>
            <p>Valor do contador: {homeState.homeModelRedux?.Contador} </p>
            <p>Nome do componente: {retrievedItem?.Name} </p>
            <p>Informações do componente: {retrievedItem?.Info} </p>
            <p style={{maxWidth: '450px'}}>Informações adicionais: {retrievedItem?.InfoAdicional} </p>

            <button
                onClick={async () => {
                    const apiHealth = await SampleRepository.GetApiHealth<IApiHealthModel>();
                    setApiHealthState(apiHealth);
                }}
            >
                ObterSaudeApi
            </button>

            <div>
                {apiHealthState &&
                <div>
                    <p>Mensagem: {apiHealthState.message}</p>
                    <p>Versão da API: {apiHealthState.apiVersion}</p>
                    <p>Outras informações: {apiHealthState.anotherInformation}</p>
                </div>

                }
            </div>
        </div>
    );
};

export { Home };
