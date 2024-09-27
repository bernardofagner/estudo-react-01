import { StatusCodes } from "http-status-codes";
import { RestBaseRepository } from "./base/RestBaseRepository";
import { AppConfig } from "../config/AppConfig";
import { AxiosProvider } from "../config/RestClient/Axios/AxiosProvider";

class SampleRepository extends RestBaseRepository {

    public async GetApiHealth<T>(): Promise<T | null> {

        const endpoint = `/health`;

        const resposta = await super.GetAsync<T>(endpoint);

        if (resposta.StatusCode !== StatusCodes.OK) {
            console.log(`Erro: ${resposta.StatusCode} | ${resposta.Erro?.message}`);
            return resposta.Conteudo;
        }

        return resposta.Conteudo;
    }
}

/**
 * Repositório criado como singleton para a aplicação. Pode ser editado para ser criado por escopo.
 */
const instance = new SampleRepository(AxiosProvider.CreateAxiosInstance(AppConfig.ServerUrls.SampleApi.BaseUrl));
export { instance as SampleRepository };
