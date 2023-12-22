
import { IApiHealthModel } from '../../models/Services/ApiHealth/IApiHealthModel';
import { ApiHealthService } from './ApiHealthService';

import {SampleRepository} from '../../restRepositories/SampleRepository';
jest.mock('../../restRepositories/SampleRepository');
const SampleRepositoryMock = SampleRepository as jest.Mocked<typeof SampleRepository>;

describe('ApiSyncService', () => {

    describe('GetApiHealth', () => {

        test('Não deve chamar a API com sucesso', async () => {
            //Arrange
            const retornoApi = {
                message: "A",
                apiVersion: 5,
                anotherInformation: "X"
            } as IApiHealthModel;

            SampleRepositoryMock.GetApiHealth.mockResolvedValue(retornoApi);

            //Act
            const resposta = await ApiHealthService.GetApiHealth();

            //Assert
            expect(SampleRepositoryMock.GetApiHealth).toHaveBeenCalledTimes(1);
            expect(resposta?.anotherInformation).toBe("Chamou a API com sucesso");
        });
    });
});
