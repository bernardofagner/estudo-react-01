import { StringUtils } from "../../../common/utils/StringUtils";

describe('StringUtils', () => {
    describe('IsEmail', () => {
        test('Valida email com sucesso - padrão correto', () => {
            //Arrange
            const email = 'bernardo.fagner@hotmai.com';

            //Act
            const resultado = StringUtils.IsEmail(email);

            //Assert
            expect(resultado).toBe(true);
        });

        test('Valida email com falha - padrão incorreto', () => {
            //Arrange
            const listaEmailsInvalidos = [
                'bernardo.fagner#hotmai.com',
                'bernardo.fagner@',
                '@hotmail.com',
                'bernardo.fagner.hotmail.com'
            ];

            //Act and assert
            for (let email of listaEmailsInvalidos) {
                const resultado = StringUtils.IsEmail(email);
                expect(resultado).toBe(false);
            }
        });
    });
});
