import React, { useEffect, useState } from "react";
import { CustomStore, CustomStoreKeys } from "../../config/CustomStore/CustomStore";
import './About.module.css';

interface IAboutComponentInfo {
    Name: string;
    Info: string;
}

const About: React.FC = () => {
    const [retrievedItem, setRetrievedItem] = useState<IAboutComponentInfo | null>(null);

    useEffect(() => {

        functionForExperiments();

        // eslint-disable-next-line
    }, []);

    const functionForExperiments = () => {
        const info = {
            Name: 'AboutComponent',
            Info: 'Componente usado para testes'
        } as IAboutComponentInfo;

        CustomStore.AddItem({
            Key: CustomStoreKeys.ABOUT_COMPONENT_INFO,
            Data: info
        });

        const registro = CustomStore.GetItem<IAboutComponentInfo>(CustomStoreKeys.ABOUT_COMPONENT_INFO);
        setRetrievedItem(registro);
    }

    return (
        <div className='container'>
            <h1>
                About
            </h1>

            <p>Nome do componente: {retrievedItem?.Name} </p>
            <p>Informações do componente: {retrievedItem?.Info} </p>
        </div>
    );
};

export default About;
