import { LogUtil } from "../../common/utils/LogUtil";

export enum CustomStoreKeys {
    TEST_CASE_KEY_1 = 'TEST_CASE_KEY_1',
    TEST_CASE_KEY_2 = 'TEST_CASE_KEY_2',
    HOME_COMPONENT_INFO = 'HOME_COMPONENT_INFO'
    //Add another keys
}

interface ICustomStoreRegister<T> {
    Key: CustomStoreKeys;
    Data: T;
}

class CustomStore {

    private Store: Array<ICustomStoreRegister<any>>;

    constructor() {
        this.Store = [];
    }

    public AddItem<T>(data: ICustomStoreRegister<T>): boolean {

        const previousItem = this.Store.find(item => item.Key === data.Key);
        if (previousItem) {
            LogUtil.LogEvent(
                'CustomStore',
                'CustomStore.AddItem - Error whlie adding item: itemKey already existis on:',
                previousItem
            );

            return false;
        }

        try {
            this.Store.push(data);
            LogUtil.LogEvent(
                'CustomStore',
                'CustomStore.AddItem - Added:',
                data
            );

            return true;
        }
        catch (error) {
            LogUtil.LogEvent(
                'CustomStore',
                'CustomStore.AddItem - Error while adding item:',
                { error }
            );
            
            return false;
        }
    }

    public GetItem<T>(key: CustomStoreKeys): T | null {
        const item = this.Store.find(item => item.Key === key);
        LogUtil.LogEvent(
            'CustomStore',
            'CustomStore.GetItem - Retrieved item:',
            item
        );

        return item ? item.Data as T : null;
    }

    public DeleteItem(key: CustomStoreKeys): boolean {
        const indexOfItem = this.Store.findIndex(item => item.Key === key);

        try {
            const removedItem = this.Store.splice(indexOfItem, 1);
            LogUtil.LogEvent('CustomStore', 'CustomStore.DeleteItem - Removed item:', removedItem);

            return true;
        }
        catch (error) {
            LogUtil.LogEvent(
                'CustomStore',
                `CustomStore.DeleteItem - Error while removing item from key $${key}:`,
                { error }
            );

            return false;
        }
    }

    public ShowAllItensOnBrowserConsole(): void {
        LogUtil.LogEvent('CustomStore', 'CustomStore.ShowAllItensOnBrowserConsole - All items', this.Store);
    }
}

const instance = new CustomStore();
export { instance as CustomStore };
