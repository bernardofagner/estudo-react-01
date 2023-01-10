import { StatusCodes } from "http-status-codes";
import { AppConfig } from "../config/AppConfig";
import { RestBaseRepository } from "./base/RestBaseRepository";

class SampleRepository extends RestBaseRepository {

    private API_BASE_URL: string = AppConfig.Urls.Api.BaseUrl;

    constructor() {
        super();
    }

    public async GetApiHealth() {
        const url = `${this.API_BASE_URL}/health`;

        const resposta = await super.Get(url);

        if (resposta.Status === StatusCodes.OK) {
            return resposta.Conteudo;
        }
        else {
            console.log(`Erro: ${resposta.Status} | ${resposta.Erro?.Mensagem}`);
            return resposta.Conteudo;
        }
    }
}

const instance = new SampleRepository();
export { instance as SampleRepository };
