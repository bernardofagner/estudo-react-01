export class AppConfig {

    public static Urls = {
        Api: {
            BaseUrl: 'localhost/3000',
            RequestTimeout: 5000
        }        
    }

    public static Logs = {
        ShowLogsOnBrowserConsole: true,
        PersistLogOnDatabase: false
    }
}
