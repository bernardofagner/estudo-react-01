import { createStore } from 'jotai';

import { applicationInfoState } from '../ApplicationInfoState/ApplicationInfoState';

class ApplicationStore {
    public Store: any;

    constructor() {
        this.Store = createStore();

        this.Store.set(applicationInfoState, "React Typescript App 2024 by Fagner de Oliveira Bernardo");
    }

    public GetApplicationStore() {
        return this.Store;
    }
}

const instance = new ApplicationStore();
export { instance as ApplicationStore };