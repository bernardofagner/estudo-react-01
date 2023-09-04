import { AxiosError, AxiosInstance, AxiosResponse } from 'axios';
import { AxiosProvider } from '../../common/restClient/axios/AxiosProvider';

export interface IRespostaAxios {
    Conteudo: any | null,
    Erro?: IDetalheErro | null,
    Status: number,
}

interface IDetalheErro {
    Origem: string,
    Mensagem: string,
    Notificacoes: Array<string> | null,
    FalhaCliente: boolean,
    FalhaServidor: boolean,
    FalhaRede: boolean
}

export abstract class RestBaseRepository {

    protected readonly Client: AxiosInstance;

    constructor() {
        this.Client = new AxiosProvider().CreateAxiosInstance();
    }

    /**
     * @param endpoint Representa a fonte do recurso
     * @param body Representa o corpo da requisição
     * @param headers Representa o headers específicos para a requisição
     * @returns Retorna um objeto do tipo RespostaAxios contendo o registro e o status da requisição
     */
    protected async Post<T>(endpoint: string, body: T, headers: any = null): Promise<IRespostaAxios> {
        const uri = this.Client.getUri();
        const url = `${uri}${endpoint}`;
        try {
            const resposta = await this.Client.post(url, body, headers);

            const respostaAxios: IRespostaAxios = {
                Conteudo: resposta.data.conteudo,
                Status: resposta.status,
                Erro: resposta.data.erro ? this.tratarRespostaErroApi(resposta) : null
            };

            return respostaAxios;
        }
        catch (apiError) {
            const axiosError = apiError as AxiosError;
            return this.tratarExcecaoAxios(axiosError);
        }
    }

    /**
     * @param endpoint Representa a fonte do recurso no padrão '/endereco'
     * @param headers Representa o headers específicos para a requisição
     * @returns Retorna um objeto do tipo RespostaAxios contendo o registro e o status da requisição
     */
    protected async Get(endpoint: string, headers: any = null): Promise<IRespostaAxios> {
        debugger;
        const uri = this.Client.getUri();
        const url = `${uri}${endpoint}`;
        try {
            const resposta = await this.Client.get(url, headers);

            const respostaAxios: IRespostaAxios = {
                Conteudo: resposta.data.conteudo,
                Status: resposta.status,
                Erro: resposta.data.erro ? this.tratarRespostaErroApi(resposta) : null
            };

            return respostaAxios;
        }
        catch (erro) {
            const erroAxios = erro as AxiosError;
            return this.tratarExcecaoAxios(erroAxios);
        }
    }

    /**
     * @param endpoint Representa a fonte do recurso
     * @param body Representa o corpo da requisição
     * @param headers Representa o headers específicos para a requisição
     * @returns Retorna um objeto do tipo RespostaAxios contendo o registro e o status da requisição
    */
    protected async Patch<T>(endpoint: string, body: T, headers: any = null): Promise<IRespostaAxios> {
        const uri = this.Client.getUri();
        const url = `${uri}${endpoint}`;
        try {
            const resposta = await this.Client.patch(url, body, headers);

            const respostaAxios: IRespostaAxios = {
                Conteudo: resposta.data.data,
                Status: resposta.status,
                Erro: resposta.data.erro ? this.tratarRespostaErroApi(resposta) : null
            };

            return respostaAxios;
        }
        catch (erro) {
            const erroAxios = erro as AxiosError;
            return this.tratarExcecaoAxios(erroAxios);
        }
    }

    /**
     * @param endpoint Representa a fonte do recurso
     * @param body Representa o corpo da requisição
     * @param headers Representa o headers específicos para a requisição
     * @returns Retorna um objeto do tipo RespostaAxios contendo o registro e o status da requisição
    */
    protected async Put<T>(endpoint: string, body: T, headers: any = null): Promise<IRespostaAxios> {
        const uri = this.Client.getUri();
        const url = `${uri}${endpoint}`;
        try {
            const resposta = await this.Client.put(url, body, headers);

            const respostaAxios: IRespostaAxios = {
                Conteudo: resposta.data.data,
                Status: resposta.status,
                Erro: resposta.data.erro ? this.tratarRespostaErroApi(resposta) : null
            };

            return respostaAxios;
        }
        catch (erro) {
            const erroAxios = erro as AxiosError;
            return this.tratarExcecaoAxios(erroAxios);
        }
    }

    /**
     * @param endpoint Representa a fonte do recurso
     * @param headers Representa o headers específicos para a requisição
     * @returns Retorna um objeto do tipo RespostaAxios contendo o registro e o status da requisição
     */
    protected async Delete(endpoint: string, headers: any = null): Promise<IRespostaAxios> {
        const uri = this.Client.getUri();
        const url = `${uri}${endpoint}`;
        try {
            const resposta = await this.Client.delete(url, headers);

            const respostaAxios: IRespostaAxios = {
                Conteudo: resposta.data.data,
                Status: resposta.status,
                Erro: resposta.data.erro ? this.tratarRespostaErroApi(resposta) : null
            };

            return respostaAxios;
        }
        catch (erro) {
            const erroAxios = erro as AxiosError;
            return this.tratarExcecaoAxios(erroAxios);
        }
    }

    private tratarRespostaErroApi(respostaApi: AxiosResponse<any, any>): IDetalheErro {
        //Implementar conforme o Model de retorno de erro da API.
        //Neste exemplo o model de erro é representado pela interface IDetalheErro
        const { erro } = respostaApi.data;
        const { status } = respostaApi;

        const respostaAxios: IDetalheErro = {
            FalhaCliente: status >= 400 && status <= 499,
            FalhaServidor: status >= 500,
            Origem: erro?.Origem ?? 'desconhecido',
            Mensagem: erro?.Mensagem ?? 'desconhecido',
            Notificacoes: erro?.Notificacoes as Array<string> ?? [],
            FalhaRede: false
        };

        return respostaAxios;
    }

    private tratarExcecaoAxios(error: AxiosError): IRespostaAxios {
        const { request, message } = error;

        const respostaAxios: IRespostaAxios = {
            Conteudo: null,
            Status: request?.status ?? 0,
            Erro: {
                FalhaCliente: false,
                FalhaServidor: false,
                Origem: 'Erro de rede',
                Mensagem: message,
                Notificacoes: null,
                FalhaRede: true
            },
        };

        return respostaAxios;
    }
}
