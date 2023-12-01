import { ReduxDataStatus } from "../../../common/enums/redux/ReduxDataStatus";
import { ReduxAction } from "../../../common/redux/ReduxAction";
import { HomeActionsTypes } from "./HomeActions";

import { HomeDto } from "../../../dtos/home/HomeDto";

export interface IHomeState {
    homeModelRedux: HomeDto | null;
    HomeModelStatusRedux: ReduxDataStatus;
}

const estadoInicial: IHomeState = {
    homeModelRedux: null,
    HomeModelStatusRedux: ReduxDataStatus.Null
};

export const HomeReducer = (state: IHomeState = estadoInicial, { type, payload }: ReduxAction): IHomeState => {

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
