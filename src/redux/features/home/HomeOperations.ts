import { ReduxDataStatus } from '../../../common/enums/redux/ReduxDataStatus';
import { homeActions } from './HomeActions';

import { HomeDto } from '../../../dtos/home/HomeDto';
import { Dispatch } from 'redux';

export const setHomeRedux = (homeModel: HomeDto) => (dispatch: Dispatch) => {
    dispatch(homeActions.setHomeRedux(homeModel));
};

export const setStatusHomeRedux = (status: ReduxDataStatus) => (dispatch: Dispatch) => {
    dispatch(homeActions.setStatusHomeRedux(status));
};
