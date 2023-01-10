import axios, { AxiosInstance } from 'axios';
import { AppConfig } from '../../../config/AppConfig';

export class AxiosProvider {

    public CreateAxiosInstance(): AxiosInstance {
        /**
        * @param baseURL will be prepended to `url` unless `url` is absolute.
        * @param timeout specifies the number of milliseconds before the request times out.
        */
        return axios.create({
            baseURL: AppConfig.Urls.Api.BaseUrl,
            timeout: AppConfig.Urls.Api.RequestTimeout
        })
    }
}
