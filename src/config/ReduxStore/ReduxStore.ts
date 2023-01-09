import { createStore, applyMiddleware, combineReducers } from 'redux';
// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

export enum ReduxDataStatus {
    Null = 0,
    Loading = 1,
    Error = 2,
    NoContent = 3,
    Success = 4,
}

export interface ReduxAction {
    type: string;
    payload: any;
}

class ReduxStore {

    private store: any;

    constructor() {
        // const componentSamplePersistConfig = { key: 'componentSample', storage };        

        const appReducers = combineReducers({
            // componentSample: persistReducer(componentSamplePersistConfig, componentSampleReducer)
        });

        const rootReducer = (state: any, action: any) => {
            if (action.type === 'STORE_CLEAR') {
                state = undefined;
            }

            return appReducers(state, action);
        };

        this.store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
    }

    public Store() {
        return this.store;
    }

    public State() {
        return this.store.getState();
    }

    public Dispatch(action: ReduxAction): void {
        this.store.dispatch(action);
    }
}

const instance = new ReduxStore();
export { instance as ReduxStore };
