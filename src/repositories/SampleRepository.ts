import { StatusCodes } from "http-status-codes";
import { IRespostaAxios, RestBaseRepository } from "./base/RestBaseRepository";

class SampleRepository extends RestBaseRepository {

    public async GetApiHealth(): Promise<IRespostaAxios> {
        debugger;
        const endpoint = `/health`;

        const resposta = await super.GetAsync(endpoint);
        
        if (resposta.Status === StatusCodes.OK) {
            return resposta;
        }
        else {
            console.log(`Erro: ${resposta.Status} | ${resposta.Erro?.Mensagem}`);
            return resposta;
        }
    }
}

const instance = new SampleRepository();
export { instance as SampleRepository };
