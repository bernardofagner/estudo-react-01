import axios from 'axios';
import { Config } from '../../../config/Config';

export class AxiosProvider {

    public static CreateAxiosInstance() {
        return axios.create({
            baseURL: Config.Urls.Bff.BaseUrl
        });
    }
}
