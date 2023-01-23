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
        return this.store.getState();
    }

    public Dispatch(action: ReduxAction): void {
        this.store.dispatch(action)
    }
}

const instance = new ReduxStore();
export { instance as ReduxStore };
