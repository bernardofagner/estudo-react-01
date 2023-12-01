import { AxiosError, AxiosInstance, AxiosResponse } from 'axios';

export interface IRespostaAxios {
    Conteudo: any | null,
    Erro?: IDetalheErro | null,
    Status: number,
    SuccessFullResponse: boolean
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

    constructor(client: AxiosInstance) {
        this.Client = client;
    }

    /**
     * @param endpoint Representa a fonte do recurso
     * @param body Representa o corpo da requisição
     * @param headers Representa o headers específicos para a requisição
     * @returns Retorna um objeto do tipo RespostaAxios contendo o registro e o status da requisição
     */
    protected async PostAsync<T>(endpoint: string, body: T, headers: any = null): Promise<IRespostaAxios> {

        const uri = this.Client.getUri();
        const url = `${uri}${endpoint}`;

        try {
            const response = await this.Client.post(url, body, headers);
            return this.handleServerResponse(response);
        }
        catch (apiError) {
            const axiosError = apiError as AxiosError;
            return this.handleAxiosExceptions(axiosError);
        }
    }

    /**
     * @param endpoint Representa a fonte do recurso no padrão '/endereco'
     * @param headers Representa o headers específicos para a requisição
     * @returns Retorna um objeto do tipo RespostaAxios contendo o registro e o status da requisição
     */
    //protected async GetAsync(endpoint: string, headers: HeadersDefaults = null): Promise<IRespostaAxios> {
    protected async GetAsync(endpoint: string, headers: any = null): Promise<IRespostaAxios> {

        const uri = this.Client.getUri();
        const url = `${uri}${endpoint}`;

        try {
            const response = await this.Client.get(url, headers);
            return this.handleServerResponse(response);
        }
        catch (erro) {
            const erroAxios = erro as AxiosError;
            return this.handleAxiosExceptions(erroAxios);
        }
    }

    /**
     * @param endpoint Representa a fonte do recurso
     * @param body Representa o corpo da requisição
     * @param headers Representa o headers específicos para a requisição
     * @returns Retorna um objeto do tipo RespostaAxios contendo o registro e o status da requisição
    */
    protected async PatchAsync<T>(endpoint: string, body: T, headers: any = null): Promise<IRespostaAxios> {

        const uri = this.Client.getUri();
        const url = `${uri}${endpoint}`;

        try {
            const response = await this.Client.patch(url, body, headers);
            return this.handleServerResponse(response);
        }
        catch (erro) {
            const erroAxios = erro as AxiosError;
            return this.handleAxiosExceptions(erroAxios);
        }
    }

    /**
     * @param endpoint Representa a fonte do recurso
     * @param body Representa o corpo da requisição
     * @param headers Representa o headers específicos para a requisição
     * @returns Retorna um objeto do tipo RespostaAxios contendo o registro e o status da requisição
    */
    protected async PutAsync<T>(endpoint: string, body: T, headers: any = null): Promise<IRespostaAxios> {

        const uri = this.Client.getUri();
        const url = `${uri}${endpoint}`;

        try {
            const response = await this.Client.put(url, body, headers);
            return this.handleServerResponse(response);
        }
        catch (erro) {
            const erroAxios = erro as AxiosError;
            return this.handleAxiosExceptions(erroAxios);
        }
    }

    /**
     * @param endpoint Representa a fonte do recurso
     * @param headers Representa o headers específicos para a requisição
     * @returns Retorna um objeto do tipo RespostaAxios contendo o registro e o status da requisição
     */
    protected async DeleteAsync(endpoint: string, headers: any = null): Promise<IRespostaAxios> {

        const uri = this.Client.getUri();
        const url = `${uri}${endpoint}`;
        
        try {
            const response = await this.Client.delete(url, headers);
            return this.handleServerResponse(response);
        }
        catch (erro) {
            const erroAxios = erro as AxiosError;
            return this.handleAxiosExceptions(erroAxios);
        }
    }

    private handleServerResponse(resposta: AxiosResponse<any, any>): IRespostaAxios {

        const respostaAxios: IRespostaAxios = {
            Conteudo: resposta.data.conteudo,
            Status: resposta.status,
            Erro: resposta.data.erro ? this.tratarRespostaErroApi(resposta) : null,
            SuccessFullResponse: resposta.status >= 200 && resposta.status < 300
        };

        return respostaAxios;
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

    private handleAxiosExceptions(error: AxiosError): IRespostaAxios {
        const { request, message } = error;

        const respostaAxios: IRespostaAxios = {
            Conteudo: null,
            Status: request?.status ?? 0,
            SuccessFullResponse: false,
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
