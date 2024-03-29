import { CustomStore, CustomStoreKeys } from "../../../config/CustomStore/CustomStore";

describe('CustomStore', () => {
    describe('DeleteItem', () => {
        test('Deve remover um item com sucesso', () => {
            //Arrange
            const testeData1 = {
                id: 1,
                valor: 'valor'
            } as {id: number, valor: string};

            const testeData2 = {
                id: 1,
                valor: 'valor'
            } as {id: number, valor: string};

            CustomStore.AddItem({
                Key: CustomStoreKeys.TEST_CASE_KEY_1,
                Data: testeData1
            });

            CustomStore.AddItem({
                Key: CustomStoreKeys.TEST_CASE_KEY_2,
                Data: testeData2
            });

            //Act
            CustomStore.DeleteItem(CustomStoreKeys.TEST_CASE_KEY_2);
            CustomStore.DeleteItem(CustomStoreKeys.TEST_CASE_KEY_1);
            const registro = CustomStore.GetItem<typeof testeData1>(CustomStoreKeys.TEST_CASE_KEY_1);

            //Assert
            expect(registro).toBe(null);
        });
    });
});
