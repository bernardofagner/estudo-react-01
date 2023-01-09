import axios, { AxiosInstance } from 'axios';
import { AppConfig } from '../../../config/AppConfig';

export class AxiosProvider {

    public CreateAxiosInstance(): AxiosInstance {
        return axios.create({
            baseURL: AppConfig.Urls.Api.BaseUrl
        });
    }
}
