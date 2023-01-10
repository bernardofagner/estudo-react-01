import { ReduxDataStatus } from "../../../common/enums/redux/ReduxDataStatus";
import { ReduxAction } from "../../../common/types/ReduxAction";
import HomeModel from "../../../models/home/HomeModel";
import { HomeActionsTypes } from "./HomeActions";

export interface HomeState {
    homeModelRedux: HomeModel | null;
    HomeModelStatusRedux: ReduxDataStatus;
}

const estadoInicial: HomeState = {
    homeModelRedux: null,
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
