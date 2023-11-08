import { SampleRepository } from '../../repositories/SampleRepository';
import { IHealthServiceModel } from './Models/IHeathServiceModel';

class HeathService {
    
    public async GetApiHealth(): Promise<IHealthServiceModel> {
        debugger;

        const response = await SampleRepository.GetApiHealth();

        return response.Conteudo as IHealthServiceModel;
    }
}

const instance = new HeathService();
export {instance as HeathService};
