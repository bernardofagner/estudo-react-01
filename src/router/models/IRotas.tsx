import React, { ReactElement } from 'react';

export interface Rota {
    pathRota: string;
    component: React.FC;
    nome: string;
    parametrosBreadcrumbs?: Array<string>;
    public?: boolean;
}

export interface Rotas {
    [key: string]: Rota;
}
