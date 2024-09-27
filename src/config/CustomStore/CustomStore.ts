import { BrowserStorageUtil } from "../../common/utils/BrowserStorageUtil";
import { LogUtil } from "../../common/utils/LogUtil";

export enum CustomStoreKeys {
    TEST_CASE_KEY_1 = 'TEST_CASE_KEY_1',
    TEST_CASE_KEY_2 = 'TEST_CASE_KEY_2',
    HOME_COMPONENT_INFO = 'HOME_COMPONENT_INFO',
    HOME_COMPONENT_API_HEALTH = 'HOME_COMPONENT_API_HEALTH',
    CODIGO_BARRAS_COMPONENT_INFO = 'CODIGO_BARRAS_COMPONENT_INFO'
    //TODO: Add another keys
}

interface ICustomStoreRegister<T> {
    Key: CustomStoreKeys;
    Data: T;
}

class CustomStore {

    private Store: Array<ICustomStoreRegister<any>>;

    constructor() {
        this.Store = new Array<ICustomStoreRegister<any>>();
    }

    public AddItem<T>(data: ICustomStoreRegister<T>): boolean {

        try {
            const dataIndex = this.Store.findIndex(s => s.Key === data.Key);
            if (dataIndex !== -1) {
                this.Store[dataIndex].Data = { ...data.Data };
            }
            else {                
                this.Store.push(data);
                LogUtil.LogEvent(
                    'CustomStore',
                    'CustomStore.AddItem - Success: new item created',
                    data,
                    false
                );
            }

            BrowserStorageUtil.AddLocalStorageItem(this.Store);
            return true;
        }
        catch (error) {
            LogUtil.LogEvent(
                'CustomStore',
                `CustomStore.AddItem - Error`,
                { error },
                false
            );

            return false;
        }
    }

    public GetItem<T>(key: CustomStoreKeys): T | null {
        const item = this.Store.find(item => item.Key === key);
        LogUtil.LogEvent(
            'CustomStore',
            'CustomStore.GetItem - Retrieved item:',
            item,
            false
        );

        return item ? item.Data as T : null;
    }

    public DeleteItem(key: CustomStoreKeys): boolean {
        const indexOfItem = this.Store.findIndex(item => item.Key === key);

        try {
            const removedItem = this.Store.splice(indexOfItem, 1);
            LogUtil.LogEvent(
                'CustomStore',
                'CustomStore.DeleteItem - Removed item:',
                removedItem,
                false
            );

            BrowserStorageUtil.AddLocalStorageItem(this.Store);
            return true;
        }
        catch (error) {
            LogUtil.LogEvent(
                'CustomStore',
                `CustomStore.DeleteItem - Error while removing item from key: $${key}\n=> ${error}`,
                { error },
                true
            );

            return false;
        }
    }

    public ListAllStoragedItems(): void {
        LogUtil.LogEvent(
            'CustomStore',
            'CustomStore.ShowAllItensOnBrowserConsole - All items',
            this.Store,
            false
        );
    }

    public GenerateLogFile(): void {
        console.log('To be implemented');
    }
}

const instance = new CustomStore();
export { instance as CustomStore };
