export class AppConfig {

    public static ClientUrl = 'localhost:3000';

    public static ServerUrls = {
        SampleApi: {
            BaseUrl: 'https://localhost:5001/v1',
            RequestTimeout: 5000
        },

        ComercialApi: {
            BaseUrl: 'base_url',
            RequestTimeout: 5000
        }
    };

    public static Logs = {
        ShowAllLogsOnBrowserConsole: false,
        PersistLogOnDatabase: false
    };
}
