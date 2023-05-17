export class AppConfig {

    public static Urls = {
        Api: {
            BaseUrl: 'http://localhost:5001',
            RequestTimeout: 5000
        }        
    }

    public static Logs = {
        ShowAllLogsOnBrowserConsole: false,
        PersistLogOnDatabase: false
    }
}
