import { SampleRepository } from '../../repositories/SampleRepository';
import { IApiHealthModel } from '../../models/Services/ApiSync/IApiHealthModel';

class ApiSyncService {
    
    public async GetApiHealth(): Promise<IApiHealthModel> {

        const chamarApi: boolean = true;

        if (chamarApi) {
            const apiHealthModel = await SampleRepository.GetApiHealth<IApiHealthModel>();

            if (apiHealthModel) {
                apiHealthModel.AnotherInformation = "Outra informação qualquer";
            }
    
            return apiHealthModel ?? {} as IApiHealthModel;
        }

        return {
            Message: `O Serviço ApiSyncService.GetApiHealth( ) não chamou a API`,
            ApiVersion: 0.1,
            AnotherInformation: "Detalhe extra: Não chamou a API"
        } as IApiHealthModel;
    }
}

const instance = new ApiSyncService();
export {instance as ApiSyncService};
