import { StatusCodes } from "http-status-codes";
import { RestBaseRepository } from "./base/RestBaseRepository";
import { AppConfig } from "../config/AppConfig";
import { AxiosProvider } from "../config/RestClient/Axios/AxiosProvider";

class SampleRepository extends RestBaseRepository {

    public async GetApiHealth<T>(): Promise<T | null> {

        const endpoint = `/health`;

        // const headers = {
        //     "Access-Control-Allow-Origin": "http://localhost:3000"
        // };

        try {
            const resposta = await super.GetAsync(endpoint);

            if (resposta.Status === StatusCodes.OK) {
                return resposta.Conteudo as T;
            }
            else {
                console.log(`Erro: ${resposta.Status} | ${resposta.Erro?.Mensagem}`);
                return null;
            }
        } catch (error) {
            //Tratar o erro.
            return null;
        }
    }
}

/**
 * Repositório criado como singleton para a aplicação. Pode ser editado para ser criado por escopo.
 */
const instance = new SampleRepository(AxiosProvider.CreateAxiosInstance(AppConfig.ServerUrls.SampleApi.BaseUrl));
export { instance as SampleRepository };
