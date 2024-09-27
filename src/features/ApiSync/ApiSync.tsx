import React, { useEffect, useState } from "react";

import { ApiHealthService } from "../../services/ApiHealthServices/ApiHealthService";
import { IApiHealthModel } from "../../models/Services/ApiHealth/IApiHealthModel";
import { LogUtil } from "../../common/utils/LogUtil";

const ApiSync: React.FC = () => {

    const [apiHealthState, setApiHealthState] = useState<IApiHealthModel | null>(null);

    useEffect(() => {
        getrApiHealth();
    }, []);

    const getrApiHealth = async () => {
        const apiHealth = await ApiHealthService.GetApiHealth();
        setApiHealthState(apiHealth);

        LogUtil.LogEvent('ApiSync', "Método: getrApiHealth()", apiHealth, true);
    }

    const renderizarInformacoesDaApi = () => {

        if (!apiHealthState) {
            return (<p>"Falta se conectar com o servidor para receber a resposta certa"</p >)
        }

        return (
            <>
                <p>Mensagem: {apiHealthState.message}</p>
                <p>Versão da API: {apiHealthState.apiVersion}</p>
                <p>Outras informações: {apiHealthState.anotherInformation}</p>
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
