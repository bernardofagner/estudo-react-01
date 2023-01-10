import { ReduxDataStatus } from '../../../common/enums/redux/ReduxDataStatus';
import { homeActions } from './HomeActions';

import { IHomeModel } from '../../../models/home/HomeModel';
import { Dispatch } from 'redux';

export const setHomeRedux = (homeModel: IHomeModel) => (dispatch: Dispatch) => {
    dispatch(homeActions.setHomeRedux(homeModel));
};

export const setStatusHomeRedux = (status: ReduxDataStatus) => (dispatch: Dispatch) => {
    dispatch(homeActions.setStatusHomeRedux(status));
};
