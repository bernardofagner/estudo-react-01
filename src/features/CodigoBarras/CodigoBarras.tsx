import React, { useEffect, useState } from "react";
import { CustomStore, CustomStoreKeys } from "../../config/CustomStore/CustomStore";
import style from './CodigoBarras.module.css';

import { BarcodeCode128 } from '@grapecity/wijmo.react.barcode.common';
import JsBarcode from "jsbarcode-fixed";
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
    const [codigoBarrasCode128, setCodigoBarrasCode128] = useState("");
    const [codigoBarrasJsBarcode, setCodigoBarrasJsBarcode] = useState<ICodeBarModel | null>(null);

    useEffect(() => {
        setCodigoBarrasCode128("Codigo de barrasss");
        setCodigoBarrasJsBarcode({
            Format: 'code128',
            Value: '123456789'
        });

        functionForExperiments();

        return () => {
            console.log('UseEffect de desmontagem foi executado em About component');
        };
        // eslint-disable-next-line
    }, []);

    const functionForExperiments = () => {
        const info = {
            Name: 'AboutComponent',
            Info: 'Componente usado para testes'
        } as IAboutComponentInfoModel;

        CustomStore.AddItem({
            Key: CustomStoreKeys.ABOUT_COMPONENT_INFO,
            Data: info
        });

        const registro = CustomStore.GetItem<IAboutComponentInfoModel>(CustomStoreKeys.ABOUT_COMPONENT_INFO);
        setRetrievedItem(registro);
    }

    const configurarJsBarcode = () => {
        if (codigoBarrasJsBarcode?.Value) {
            const style = {
                format: "code128",
                textAlign: "center",
                margin: 10,
                font: "arial",
                fontSize: 13,
                textMargin: 5,
                height: 100,
                // width: 2, //Definir aqui ou com witdh 100% no elemento pai
                displayValue: true
            };

            JsBarcode("#code128", "123456789", style);
        }
    };

    const renderizarCodigoDeBarrasWijmoCode128 = () => {
        return (
            <div className={style['codigo-de-barras-code-128']}>
                <BarcodeCode128
                    value={codigoBarrasCode128}
                    autoWidthZoom={1.5}
                />
            </div>
        );
    }

    const renderizarCodigoDeBarrasJsBarcode = () => {
        configurarJsBarcode();
        return (
            <div className={style['codigo-de-barras-js-barcode']}>
                {codigoBarrasJsBarcode && codigoBarrasJsBarcode.Value &&
                    <svg id="code128"></svg>
                }
            </div>
        );
    }

    const renderizarCodigoDeBarrasReactBarcode = () => {
        return (
            <div className={style['codigo-de-barras-react-barcode']}>
                {codigoBarrasJsBarcode && codigoBarrasJsBarcode.Value &&
                    <Barcode value="codigo de barras 12345678990A" format="CODE128"/>
                }
            </div>
        );
    }

    return (
        <div className={style['container']}>
            <h1>
                About
            </h1>

            <p>Nome do componente: {retrievedItem?.Name} </p>
            <p>Informações do componente: {retrievedItem?.Info} </p>

            {/* {renderizarCodigoDeBarrasJsBarcode()} */}
            {/* {renderizarCodigoDeBarrasWijmoCode128()} */}
            {renderizarCodigoDeBarrasReactBarcode()}
        </div>
    );
};

export { CodigoBarras };
