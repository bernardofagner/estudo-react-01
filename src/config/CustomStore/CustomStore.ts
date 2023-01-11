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

        LogUtil.TrackEvent('CustomStore - All items', data);
        const previousItem = this.Store.find(item => item.Key === data.Key);

        if (previousItem) {
            LogUtil.TrackEvent('CustomStore - Error whlie adding item: itemKey already existis on:', previousItem);
            return false;
        }

        try {
            this.Store.push(data);
            LogUtil.TrackEvent('CustomStore - Added item:', data);
            return true;
        }
        catch (error) {
            LogUtil.TrackEvent('CustomStore - Error while adding item:', {error});
            return false;
        }
    }

    public GetItem<T>(key: CustomStoreKeys) {
        const item = this.Store.find(item => item.Key === key);
        LogUtil.TrackEvent('CustomStore - Retrieved item:', item);
        return item as T;
    }
}

const instance = new CustomStore();
export { instance as CustomStore };
