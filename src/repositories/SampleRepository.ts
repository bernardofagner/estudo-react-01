import { StatusCodes } from "http-status-codes";
import { AppConfig } from "../config/AppConfig";
import { IApiHealth } from "../models/Api/IApiHealth";
import { RestBaseRepository } from "./base/RestBaseRepository";

class SampleRepository extends RestBaseRepository {

    private API_BASE_URL: string;

    constructor() {
        super();
        this.API_BASE_URL = AppConfig.Urls.Api.BaseUrl;
    }

    public async GetApiHealth(): Promise<IApiHealth|null> {
        const url = `${this.API_BASE_URL}/health`;

        const resposta = await super.Get(url);

        if (resposta.Status === StatusCodes.OK) {
            return resposta.Conteudo as IApiHealth;
        }
        else {
            console.log(`Erro: ${resposta.Status} | ${resposta.Erro?.Mensagem}`);
            return resposta.Conteudo as null;
        }
    }
}

const instance = new SampleRepository();
export { instance as SampleRepository };
