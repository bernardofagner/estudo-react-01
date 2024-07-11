export class AppConfig {

    public static ClientUrl = 'http://localhost:3000';

    public static ServerUrls = {
        SampleApi: {
            BaseUrl: 'http://localhost:5000/v1',
            RequestTimeout: 30000
        },

        ComercialApi: {
            BaseUrl: 'base_url',
            RequestTimeout: 30000
        }
    };

    public static Logs = {
        ShowAllLogsOnBrowserConsole: false,
        PersistLog: false
    };
}
