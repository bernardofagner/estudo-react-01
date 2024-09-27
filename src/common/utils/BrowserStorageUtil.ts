export class BrowserStorageUtil {

    private static readonly CustomStorageItem: string = 'CustomStorage';

    public static AddLocalStorageItem(data: object): void {
        localStorage.setItem(this.CustomStorageItem, JSON.stringify(data));
    }
}