import axios, { AxiosInstance } from 'axios';
import { AppConfig } from '../../AppConfig';

export class AxiosProvider {
    /**
    * @param baseURL will be prepended to `url` unless `url` is absolute.
    * Documentation: https://www.npmjs.com/package/axios#features
    */
    public static CreateAxiosInstance(baseUrl: string): AxiosInstance {

        //Implementar validação de URL. Lançar exceção quando nulo ou vazio;

        return axios.create({
            baseURL: baseUrl ?? "",
            headers: {
                "Access-Control-Allow-Origin": AppConfig.ClientUrl
            }
        });
    }
}
