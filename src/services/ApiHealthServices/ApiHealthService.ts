import { SampleRepository } from '../../restRepositories/SampleRepository';
import { IApiHealthModel } from '../../models/Services/ApiHealth/IApiHealthModel';

class ApiHealthService {

    public async GetApiHealth(): Promise<IApiHealthModel | null> {

        const apiHealthModel = await SampleRepository.GetApiHealth<IApiHealthModel>();

        if (apiHealthModel) {
            apiHealthModel.anotherInformation = "Chamou a API com sucesso";
        }

        return apiHealthModel;
    }
}

const instance = new ApiHealthService();
export { instance as ApiHealthService };
