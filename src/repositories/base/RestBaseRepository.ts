import { AxiosError, AxiosInstance } from 'axios';
import { AxiosProvider } from '../../common/restClient/axios/AxiosProvider';

export interface RespostaAxios {
    Conteudo: any | null,
    Erro?: DetalheErro,
    Status: number,
}

interface DetalheErro {
    Origem: string,
    Mensagem: string,
    Notificacoes: Array<string> | null,
    FalhaCliente: boolean,
    FalhaServidor: boolean,
    FalhaRede: boolean
}

export abstract class RepositorioRestBase {

    private readonly Client: AxiosInstance;

    constructor() {
        this.Client = new AxiosProvider().CreateAxiosInstance();
    }

    /**
     * @param endpoint Representa a fonte do recurso
     * @param body Representa o corpo da requisição
     * @param headers Representa o headers específicos para a requisição
     * @returns Retorna um objeto do tipo RespostaAxios contendo o registro e o status da requisição
     */
    protected async Post<T>(endpoint: string, body: T, headers: any = null): Promise<RespostaAxios> {
        try {
            const resposta = await this.Client.post(endpoint, body, headers);

            const respostaAxios: RespostaAxios = {
                Conteudo: resposta.data.data,
                Status: resposta.status,
            };

            return respostaAxios;
        }
        catch (erro) {
            const erroAxios = erro as AxiosError;
            return this.tratarErroAxios(erroAxios);
        }
    }

    /**
     * @param endpoint Representa a fonte do recurso
     * @param headers Representa o headers específicos para a requisição
     * @returns Retorna um objeto do tipo RespostaAxios contendo o registro e o status da requisição
     */
    protected async Get(endpoint: string, headers: any = null): Promise<RespostaAxios> {

        try {
            const resposta = await this.Client.get(endpoint, headers);

            const respostaAxios: RespostaAxios = {
                Conteudo: resposta.data.data,
                Status: resposta.status,
            };

            return respostaAxios;
        }
        catch (erro) {
            const erroAxios = erro as AxiosError;
            return this.tratarErroAxios(erroAxios);
        }
    }

    /**
     * @param endpoint Representa a fonte do recurso
     * @param body Representa o corpo da requisição
     * @param headers Representa o headers específicos para a requisição
     * @returns Retorna um objeto do tipo RespostaAxios contendo o registro e o status da requisição
    */
    protected async Patch<T>(endpoint: string, body: T, headers: any = null): Promise<RespostaAxios> {
        try {
            const resposta = await this.Client.patch(endpoint, body, headers);

            const respostaAxios: RespostaAxios = {
                Conteudo: resposta.data.data,
                Status: resposta.status,
            };

            return respostaAxios;
        }
        catch (erro) {
            const erroAxios = erro as AxiosError;
            return this.tratarErroAxios(erroAxios);
        }
    }

    /**
     * @param endpoint Representa a fonte do recurso
     * @param body Representa o corpo da requisição
     * @param headers Representa o headers específicos para a requisição
     * @returns Retorna um objeto do tipo RespostaAxios contendo o registro e o status da requisição
    */
    protected async Put<T>(endpoint: string, body: T, headers: any = null): Promise<RespostaAxios> {
        try {
            const resposta = await this.Client.put(endpoint, body, headers);

            const respostaAxios: RespostaAxios = {
                Conteudo: resposta.data.data,
                Status: resposta.status,
            };

            return respostaAxios;
        }
        catch (erro) {
            const erroAxios = erro as AxiosError;
            return this.tratarErroAxios(erroAxios);
        }
    }

    /**
     * @param endpoint Representa a fonte do recurso
     * @param headers Representa o headers específicos para a requisição
     * @returns Retorna um objeto do tipo RespostaAxios contendo o registro e o status da requisição
     */
    protected async Delete(endpoint: string, headers: any = null): Promise<RespostaAxios> {
        try {
            const resposta = await this.Client.delete(endpoint, headers);

            const respostaAxios: RespostaAxios = {
                Conteudo: resposta.data.data,
                Status: resposta.status,
            };

            return respostaAxios;
        }
        catch (erro) {
            const erroAxios = erro as AxiosError;
            return this.tratarErroAxios(erroAxios);
        }
    }

    private tratarErroAxios(erro: AxiosError): RespostaAxios {

        if (erro && erro.response) {
            const { status, data } = erro.response;

            const respostaAxios: RespostaAxios = {
                Conteudo: null,
                Status: status,
                Erro: {
                    FalhaCliente: status >= 400 && status <= 499,
                    FalhaServidor: status >= 500,
                    Origem: data.origem,
                    Mensagem: data.mensagem,
                    Notificacoes: data.notificacoes,
                    FalhaRede: false
                },
            };

            return respostaAxios;
        }
        else {
            const respostaAxios: RespostaAxios = {
                Conteudo: null,
                Status: 0,
                Erro: {
                    FalhaCliente: false,
                    FalhaServidor: false,
                    Origem: '',
                    Mensagem: '',
                    Notificacoes: null,
                    FalhaRede: true
                },
            };

            return respostaAxios;
        }
    }
}
