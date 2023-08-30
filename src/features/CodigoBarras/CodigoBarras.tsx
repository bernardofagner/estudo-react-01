import React, { useEffect, useState } from "react";
import { CustomStore, CustomStoreKeys } from "../../config/CustomStore/CustomStore";
import styles from './CodigoBarras.module.css';

import Barcode from "react-barcode";

interface IAboutComponentInfoModel {
    Name: string;
    Info: string;
}

interface ICodeBarModel {
    Format: string;
    Value: string
}

const CodigoBarras: React.FC = () => {
    const [retrievedItem, setRetrievedItem] = useState<IAboutComponentInfoModel | null>(null);
    const [codigoBarrasJsBarcode, setCodigoBarrasJsBarcode] = useState<ICodeBarModel | null>(null);

    useEffect(() => {
        setCodigoBarrasJsBarcode({
            Format: "CODE128",
            Value: '33221034230979013860550030000416191730750716'
        });

        functionForExperiments();

        return () => {
            console.log('UseEffect de desmontagem foi executado em About component');
        };
        // eslint-disable-next-line
    }, []);

    const functionForExperiments = () => {
        const info = {
            Name: 'CodigoBarrasComponent',
            Info: 'Componente usado para testes de biblioteca de código de barras'
        } as IAboutComponentInfoModel;

        CustomStore.AddItem({
            Key: CustomStoreKeys.ABOUT_COMPONENT_INFO,
            Data: info
        });

        const registro = CustomStore.GetItem<IAboutComponentInfoModel>(CustomStoreKeys.ABOUT_COMPONENT_INFO);
        setRetrievedItem(registro);
    }

    const renderizarCodigoDeBarrasReactBarcode = () => {
        return (
            <div className={styles['codigo-de-barras-react-barcode']}>
                {codigoBarrasJsBarcode && codigoBarrasJsBarcode.Value &&
                    <Barcode
                        value={codigoBarrasJsBarcode.Value}
                        format={codigoBarrasJsBarcode.Format as any}
                        displayValue={true}
                        textAlign="center"
                    />
                }
            </div>
        );
    }

    return (
        <div className={styles['container']}>
            <h1>
                Codigo de Barras
            </h1>

            <p>Nome do componente: {retrievedItem?.Name} </p>
            <p>Informações do componente: {retrievedItem?.Info} </p>

            {renderizarCodigoDeBarrasReactBarcode()}
        </div>
    );
};

export { CodigoBarras };
