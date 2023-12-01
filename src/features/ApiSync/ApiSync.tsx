import React, { useEffect, useState } from "react";

import { ApiSyncService } from "../../services/ApiSyncServices/ApiSyncService";
import { IApiHealthModel } from "../../models/Services/ApiSync/IApiHealthModel";

const ApiSync: React.FC = () => {

    const [apiHealthState, setApiHealthState] = useState<IApiHealthModel>({} as IApiHealthModel);

    useEffect(() => {
        getrApiHealth();
    }, []);

    const getrApiHealth = async () => {
        const apiHealth = await ApiSyncService.GetApiHealth();
        setApiHealthState(apiHealth);
    }

    const renderizarInformacoesDaApi = () => {

        if (!apiHealthState) {
            return (<p>"Falta se conectar com o servidor para receber a resposta certa"</p >)
        }

        return (
            <>
                <p>{apiHealthState.Message}</p>
                <p>{apiHealthState.ApiVersion}</p>
                <p>{apiHealthState.AnotherInformation}</p>
            </>
        );
    };

    return (
        <>
            {renderizarInformacoesDaApi()}
        </>
    );
}

export { ApiSync };
