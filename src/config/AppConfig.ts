export class AppConfig {

    public static Urls = {
        Api: {
            BaseUrl: 'localhost/5001',
            RequestTimeout: 5000
        }        
    }

    public static Logs = {
        ShowAllLogsOnBrowserConsole: true,
        PersistLogOnDatabase: false
    }
}
