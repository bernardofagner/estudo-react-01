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
                {apiHealth}
            </div>
        </>
    );
}

export { ApiSync };
