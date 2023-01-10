import { Dispatch } from 'redux';
import { ReduxDataStatus } from '../../../common/enums/redux/ReduxDataStatus';
import { IHomeModel } from '../../../models/home/HomeModel';
import { homeActions } from './HomeActions';

export const setHomeRedux = (homeModel: IHomeModel) => (dispatch: Dispatch) => {
    dispatch(homeActions.setHomeRedux(homeModel));
};

export const setStatusHomeRedux = (status: ReduxDataStatus) => (dispatch: Dispatch) => {
    dispatch(homeActions.setStatusHomeRedux(status));
};
