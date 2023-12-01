import { AxiosError, AxiosInstance, AxiosResponse } from 'axios';

export interface IRespostaAxios<T> {
    Conteudo: T | null,
    StatusCode: number,
    SuccessFullResponse: boolean
    Erro?: IDetalheErro | null,
}

interface IDetalheErro {
    source: string,
    message: string,
    notifications: Array<string>,
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
    protected async PostAsync<T>(endpoint: string, body: T, headers: any = null): Promise<IRespostaAxios<T>> {

        const uri = this.Client.getUri();
        const url = `${uri}${endpoint}`;

        try {
            const response = await this.Client.post(url, body, headers);
            return this.handleServerResponse(response);
        }
        catch (apiError) {
            const axiosError = apiError as AxiosError;
            return this.handleServerError(axiosError);
        }
    }

    /**
     * @param endpoint Representa a fonte do recurso no padrão '/endereco'
     * @param headers Representa o headers específicos para a requisição
     * @returns Retorna um objeto do tipo RespostaAxios contendo o registro e o status da requisição
     */
    //protected async GetAsync(endpoint: string, headers: HeadersDefaults = null): Promise<IRespostaAxios> {
    protected async GetAsync<T>(endpoint: string, headers: any = null): Promise<IRespostaAxios<T>> {

        const uri = this.Client.getUri();
        const url = `${uri}${endpoint}`;

        try {
            const response = await this.Client.get(url, headers);
            return this.handleServerResponse<T>(response);
        }
        catch (erro) {
            const erroAxios = erro as AxiosError;
            return this.handleServerError<T>(erroAxios);
        }
    }

    /**
     * @param endpoint Representa a fonte do recurso
     * @param body Representa o corpo da requisição
     * @param headers Representa o headers específicos para a requisição
     * @returns Retorna um objeto do tipo RespostaAxios contendo o registro e o status da requisição
    */
    protected async PatchAsync<T>(endpoint: string, body: T, headers: any = null): Promise<IRespostaAxios<T>> {

        const uri = this.Client.getUri();
        const url = `${uri}${endpoint}`;

        try {
            const response = await this.Client.patch(url, body, headers);
            return this.handleServerResponse(response);
        }
        catch (erro) {
            const erroAxios = erro as AxiosError;
            return this.handleServerError(erroAxios);
        }
    }

    /**
     * @param endpoint Representa a fonte do recurso
     * @param body Representa o corpo da requisição
     * @param headers Representa o headers específicos para a requisição
     * @returns Retorna um objeto do tipo RespostaAxios contendo o registro e o status da requisição
    */
    protected async PutAsync<T>(endpoint: string, body: T, headers: any = null): Promise<IRespostaAxios<T>> {

        const uri = this.Client.getUri();
        const url = `${uri}${endpoint}`;

        try {
            const response = await this.Client.put(url, body, headers);
            return this.handleServerResponse(response);
        }
        catch (erro) {
            const erroAxios = erro as AxiosError;
            return this.handleServerError(erroAxios);
        }
    }

    /**
     * @param endpoint Representa a fonte do recurso
     * @param headers Representa o headers específicos para a requisição
     * @returns Retorna um objeto do tipo RespostaAxios contendo o registro e o status da requisição
     */
    protected async DeleteAsync<T>(endpoint: string, headers: any = null): Promise<IRespostaAxios<T>> {

        const uri = this.Client.getUri();
        const url = `${uri}${endpoint}`;

        try {
            const response = await this.Client.delete(url, headers);
            return this.handleServerResponse(response);
        }
        catch (erro) {
            const erroAxios = erro as AxiosError;
            return this.handleServerError(erroAxios);
        }
    }

    private handleServerResponse<T>(resposta: AxiosResponse<any, any>): IRespostaAxios<T> {

        const respostaAxios: IRespostaAxios<T> = {
            Conteudo: resposta.data.content as T,
            StatusCode: resposta.data.apiStatusCode ?? resposta.status ?? 500,
            Erro: null,
            SuccessFullResponse: resposta.status >= 200 && resposta.status < 300
        };

        return respostaAxios;
    }

    private handleServerError<T>(axiosError: AxiosError): IRespostaAxios<T> {

        const { response, status = response?.status, message } = axiosError;
        const detalheErro = response?.data as IDetalheErro;

        let respostaAxios = {} as IRespostaAxios<T>;

        if (message !=="Network Error" && response !== undefined) {
            respostaAxios = {
                Conteudo: null as T,
                StatusCode: status ?? 0,
                SuccessFullResponse: false,
                Erro: {
                    source: detalheErro.source ?? "Fonte desconhecida",
                    message: detalheErro.message ?? 'Não possui mensagem de erro',
                    notifications: detalheErro.notifications ?? [],
                    FalhaCliente: status ? status >= 400 && status <= 499 : false,
                    FalhaServidor: status ? status >= 500 : false,
                    FalhaRede: false
                }
            }    
        }
        else {
            respostaAxios = {
                Conteudo: null as T,
                StatusCode: 0,
                SuccessFullResponse: false,
                Erro: {
                    source: "Fonte desconhecida",
                    message: 'Erro de rede',
                    notifications: [],
                    FalhaCliente: false,
                    FalhaServidor: false,
                    FalhaRede: true
                },
            }
        }

        return respostaAxios;
    }
}
