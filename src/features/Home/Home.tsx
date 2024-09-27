import React, { useEffect, useState } from "react";
import { useAtomValue } from "jotai";

import './Home.module.css';

import { LogUtil } from "../../common/utils/LogUtil";
import { CustomStore, CustomStoreKeys } from "../../config/CustomStore/CustomStore";
import { SampleRepository } from "../../restServices/SampleRepository";
import { IApiHealthModel } from "../../models/Services/ApiHealth/IApiHealthModel";

import { sampleInformationState } from '../../common/jotaiAtoms/SampleAtom/SampleAtom';
import { applicationInfoState } from '../../common/jotaiAtoms/ApplicationInfoState/ApplicationInfoState';
import { ApplicationStore } from "../../common/jotaiAtoms/ApplicationStore/ApplicationStore";

interface IHomeComponentInfo {
    Name: string;
    Info: string;
    InfoAdicional: string;
}

const Home: React.FC = () => {

    const Store = ApplicationStore.GetApplicationStore();

    //Obtem um atomo usando a store do atom diretamente
    const sampleInformatioAtom = Store.get(sampleInformationState);

    //Obtem um atomo via useAtomValue, que foi definido na inicialização da store.
    const applicationInfoAtom = useAtomValue<string>(applicationInfoState);

    const [apiHealthState, setApiHealthState] = useState<IApiHealthModel | null>(null);
    const [retrievedItem, setRetrievedItem] = useState<IHomeComponentInfo | null>(null);

    useEffect(() => {
        functionForExperiments();

        LogUtil.LogEvent('Home.tsx', 'log de exemplo', null, true);
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

            <p>
                Atom info: {sampleInformatioAtom}
            </p>

            <p>
                System information retrieved from Atom Store: "{applicationInfoAtom}"
            </p>

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
