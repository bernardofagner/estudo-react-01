import { LogUtil } from "../../common/utils/LogUtil";

export enum CustomStoreKeys {
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
            LogUtil.LogEvent('CustomStore.AddItem - Error whlie adding item: itemKey already existis on:', previousItem);
            return false;
        }

        try {
            this.Store.push(data);
            LogUtil.LogEvent('CustomStore.AddItem - Added:', data);
            return true;
        }
        catch (error) {
            LogUtil.LogEvent('CustomStore.AddItem - Error while adding item:', {error});
            return false;
        }
    }

    public GetItem<T>(key: CustomStoreKeys) {
        const item = this.Store.find(item => item.Key === key);
        LogUtil.LogEvent('CustomStore.GetItem - Retrieved item:', item);
        return item?.Data as T;
    }

    public ShowAllItensOnBrowserConsole(): void {
        LogUtil.LogEvent('CustomStore.ShowAllItensOnBrowserConsole - All items', this.Store);
    }
}

const instance = new CustomStore();
export { instance as CustomStore };
