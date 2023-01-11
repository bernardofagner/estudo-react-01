import { configureStore, combineReducers  } from '@reduxjs/toolkit';
import { ReduxAction } from "../../common/types/ReduxAction";

import { HomeReducer } from "../../redux/features/home";
import { LogUtil } from "../../common/utils/LogUtil";

class ReduxStore {

    private store: any;

    constructor() {
        const rootReducers = combineReducers({
            homeState: HomeReducer
        });

        this.store = configureStore({
            reducer: rootReducers
        });
    }

    public GetStore() {
        return this.store;
    }

    public GetState() {
        LogUtil.LogEvent('===> ReduxStore.GetState', this.store.getState());
        return this.store.getState();
    }

    public Dispatch(action: ReduxAction): void {
        LogUtil.LogEvent(`===> ReduxStore.Dispatch ${action.type}`, action);
        this.store.dispatch(action)
    }
}

const instance = new ReduxStore();
export { instance as ReduxStore };



// import { createStore, applyMiddleware, combineReducers } from 'redux';
// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// import { composeWithDevTools } from '@redux-devtools/extension';
// import thunk from 'redux-thunk';

// import { ReduxAction } from '../../common/types/ReduxAction';
// import { HomeReducer } from '../../redux/features/home';
// import { SaidaDeDados } from '../../common/utils/LogUtil';

// class ReduxStore {

//     private store: any;

//     constructor() {
//         const homePersistConfig = { key: 'homeStore', storage };        

//         const appReducers = combineReducers({
//             homeStore: persistReducer(homePersistConfig, HomeReducer)
//         });

//         const rootReducer = (state: any, action: any) => {
//             if (action.type === 'STORE_CLEAR') {
//                 state = undefined;
//             }

//             return appReducers(state, action);
//         };

//         this.store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
//     }

//     public Store() {
//         return this.store;
//     }

//     public State() {
//         return this.store.getState();
//     }

//     public Dispatch(action: ReduxAction): void {
//         this.store.dispatch(action);
//     }
// }

// const instance = new ReduxStore();
// export { instance as ReduxStore };
