
import { IApiHealthModel } from '../../models/Services/ApiSync/IApiHealthModel';
import { ApiSyncService } from './ApiSyncService';


import {SampleRepository} from '../../repositories/SampleRepository';
jest.mock('../../repositories/SampleRepository');
const SampleRepositoryMock = SampleRepository as jest.Mocked<typeof SampleRepository>;

describe('ApiSyncService', () => {

    describe('GetApiHealth', () => {

        test('Não deve chamar a API com sucesso', async () => {
            //Arrange
            const retornoApi = {
                Message: "A",
                ApiVersion: 5,
                AnotherInformation: "X"
            } as IApiHealthModel;

            SampleRepositoryMock.GetApiHealth.mockResolvedValue(retornoApi);

            //Act
            const resposta = await ApiSyncService.GetApiHealth();

            //Assert
            expect(SampleRepositoryMock.GetApiHealth).toHaveBeenCalledTimes(0);
            expect(resposta.Message).toBe("O Serviço ApiSyncService.GetApiHealth( ) não chamou a API");
        });
    });
});

// describe('ApiSyncService', () => {

//     describe('GetApiHealth', () => {
        
//         test('Deve chamar a API com sucesso', async () => {

//             
//         });
//     });
// });
