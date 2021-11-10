import { AxiosProvider } from "../../common/restClient/axios/AxiosProvider";

export abstract class RestBaseRepository {

    protected Client;

    constructor() {
        this.Client = AxiosProvider.CreateAxiosInstance();
    }
}