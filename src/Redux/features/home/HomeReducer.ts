import { ReduxDataStatus } from "../../../common/enums/redux/ReduxDataStatus";
import { ReduxAction } from "../../../common/types/ReduxAction";
import { HomeActionsTypes } from "./HomeActions";

import { IHomeModel } from "../../../models/home/HomeModel";

export interface HomeState {
    homeModelRedux: IHomeModel | null;
    HomeModelStatusRedux: ReduxDataStatus;
}

const estadoInicial: HomeState = {
    homeModelRedux: {
        Contador: 12,
        NomeSistema: 'Nome do sistema'
    } as IHomeModel,
    HomeModelStatusRedux: ReduxDataStatus.Null
};

export const HomeReducer = (state: HomeState = estadoInicial, { type, payload }: ReduxAction): HomeState => {

    switch (type) {
        case HomeActionsTypes.SET_HOME: {
            return { ...state, homeModelRedux: payload };
        }
        case HomeActionsTypes.SET_HOME_STATUS: {
            return { ...state, HomeModelStatusRedux: payload };
        }
        default: {
            return state;
        }
    }
};
