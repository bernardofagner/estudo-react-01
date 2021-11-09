import { AxiosProvider } from "../../common/axios/AxiosProvider";

export abstract class RestBaseRepository {

    protected Client;

    constructor() {
        this.Client = AxiosProvider.CreateAxiosInstance();
    }
}