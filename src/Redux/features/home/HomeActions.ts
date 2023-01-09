import { ReduxAction, ReduxDataStatus } from "../../../config/ReduxStore/ReduxStore";
import IHomeModel from "../../../models/home/HomeModel";

export enum HomeActionsTypes {
    SET_HOME = 'SET_HOME',
    SET_HOME_STATUS = 'SET_CONTADOR_STATUS' 
}

export const homeActions = {
    setHomeRedux: (homeModel: IHomeModel): ReduxAction => ({
        type: HomeActionsTypes.SET_HOME,
        payload: homeModel
    }),
    setStatusHomeRedux: (status: ReduxDataStatus): ReduxAction => ({
        type: HomeActionsTypes.SET_HOME_STATUS,
        payload: status
    })
};
