import React, { useEffect, useState } from "react";
import { HeathService } from '../../services/ApySyncServices/HeathService';

const ApiSync: React.FC = () => {

    const [apiHealth, setApiHealth] = useState<any>(null);

    useEffect(() => {
        debugger;
        getrApiHealth();
        debugger;
    }, []);

    const getrApiHealth = async () => {
        debugger;
        const result = await HeathService.GetApiHealth();
        setApiHealth(result);
    }

    return (
        <>
            <div>
                {apiHealth ?? "Falta se conectar com o servidor para receber a resposta certa"}
            </div>
        </>
    );
}

export { ApiSync };
