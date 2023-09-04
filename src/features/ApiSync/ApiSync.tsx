import React from "react";

const ApiSync: React.FC = () => {

    const closeBrowserTab = (event: any) => {
        console.log('Executou: fecharAbaBrowser');
        // window.open("about:blank", "_self");
        // window.close();

        window.location.reload();
        window.close();
    }

    const openNewWindow = () => {
        window.open('www.ventrane.com');
    }

    const closeOpenedWindow = () => {
        window.close();
    }

    return (
        <>
            <div>
                {/* Deixa a aba em branco */}
                <button
                    onClick={closeBrowserTab}
                >
                    Fechar Aba
                </button>

                {/* Abre uma aba via script */}
                <button
                    onClick={openNewWindow}
                >
                    Abrir aba
                </button>

                {/* Fecha uma aba aberta por script */}
                <button
                    onClick={closeOpenedWindow}
                >
                    Fechar aba
                </button>
            </div>
        </>
    );
}

export { ApiSync };
