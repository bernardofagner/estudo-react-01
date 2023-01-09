import { Dispatch } from 'redux';
import { ReduxDataStatus } from '../../../common/enums/redux/ReduxDataStatus';
import HomeModel from '../../../models/home/HomeModel';
import { homeActions } from './HomeActions';

export const setHomeRedux = (homeModel: HomeModel) => (dispatch: Dispatch) => {
    dispatch(homeActions.setHomeRedux(homeModel));
};

export const setStatusHomeRedux = (status: ReduxDataStatus) => (dispatch: Dispatch) => {
    dispatch(homeActions.setStatusHomeRedux(status));
};
