import { Dispatch } from 'redux';
import { ReduxAction, ReduxDataStatus } from '../../../config/ReduxStore/ReduxStore';
import HomeModel from '../../../models/home/HomeModel';
import { homeActions, HomeActionsTypes } from './HomeActions';
import { setHomeRedux, setStatusHomeRedux } from './HomeOperations';
import { HomeReducer, HomeState } from './HomeReducer';

describe('HomeRedux', () => {

    describe('HomeRedux Actions', () => {

        test('Deve criar o objeto do tipo ReduxAction com sucesso, com o payload esperado, no método setHomeRedux', () => {
            //Arrange
            const homeModel: HomeModel = {
                Contador: 0,
                NomeSistema: 'Sistema exemplo'
            };

            //Act
            const action = homeActions.setHomeRedux(homeModel);

            //Assert
            expect(action.type).toEqual(HomeActionsTypes.SET_HOME);
            expect(action.payload).toEqual(homeModel);
        });

        test('Deve criar o objeto do tipo ReduxAction com sucesso, com o payload esperado no método setStatusHomeRedux', () => {
            //Arrange
            const homeStatus = ReduxDataStatus.Success;

            //Act
            const action = homeActions.setStatusHomeRedux(homeStatus);

            //Assert
            expect(action.type).toEqual(HomeActionsTypes.SET_HOME_STATUS);
            expect(action.payload).toEqual(homeStatus);
        });
    });

    describe('HomeRedux Operations', () => {

        test('Deve chamar o dispatch 1 vez, na action setHomeRedux', () => {
            //Arrange
            const homeModel: HomeModel = {
                Contador: 0,
                NomeSistema: 'Sistema exemplo'
            };

            const dispatch: Dispatch = jest.fn();

            //Act
            const dispatchOperation = setHomeRedux(homeModel);
            dispatchOperation(dispatch);

            //Assert
            expect(dispatch).toHaveBeenCalledTimes(1);
            expect(dispatch).toHaveBeenCalledWith(homeActions.setHomeRedux(homeModel));
        });

        test('Deve chamar o dispatch 1 vez, na action setStatusHomeRedux', () => {
            //Arrange
            const homeStatus = ReduxDataStatus.Success;

            const dispatch: Dispatch = jest.fn();

            //Act
            const dispatchOperation = setStatusHomeRedux(homeStatus);
            dispatchOperation(dispatch);

            //Assert
            expect(dispatch).toHaveBeenCalledTimes(1);
            expect(dispatch).toHaveBeenCalledWith(homeActions.setStatusHomeRedux(homeStatus));
        });
    });

    describe('HomeRedux Reducer', () => {

        test('Deve retornar o state correspondente à action type: SET_HOME', () => {
            //Arrange
            const estadoAnterior: HomeState = {
                homeModelRedux: null,
                HomeModelStatusRedux: ReduxDataStatus.Null
            };

            const reduxAction: ReduxAction = {
                type: HomeActionsTypes.SET_HOME,
                payload: {
                    Contador: 2,
                    NomeSistema: 'Nome do sistema'
                } as HomeModel
            };

            const estadoEsperado: HomeState = {
                homeModelRedux: {
                    Contador: 2,
                    NomeSistema: 'Nome do sistema'
                },
                HomeModelStatusRedux: ReduxDataStatus.Null
            };

            //Act
            const resultado = HomeReducer(estadoAnterior, reduxAction);

            //Assert
            expect(resultado).toEqual(estadoEsperado);
        });

        test('Deve retornar o state correspondente à action type: SET_HOME_STATUS', () => {
            //Arrange
            const estadoAnterior: HomeState = {
                homeModelRedux: null,
                HomeModelStatusRedux: ReduxDataStatus.Null
            };

            const reduxAction: ReduxAction = {
                type: HomeActionsTypes.SET_HOME_STATUS,
                payload: ReduxDataStatus.Success
            };

            const estadoEsperado: HomeState = {
                homeModelRedux: null,
                HomeModelStatusRedux: ReduxDataStatus.Success
            };

            //Act
            const resultado = HomeReducer(estadoAnterior, reduxAction);

            //Assert
            expect(resultado).toEqual(estadoEsperado);
        });
    });
});
