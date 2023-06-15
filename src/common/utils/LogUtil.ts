import { AppConfig } from "../../config/AppConfig";

export class LogUtil {

    public static LogEvent(
        filename: string,
        message: string = '',
        data: object | null = null,
        showLogOnConsole: boolean = true
    ): void {
        if (AppConfig.Logs.ShowAllLogsOnBrowserConsole || showLogOnConsole) {
            const fullMessage = `FileName: ${filename}\nMessage: ${message}\nData: ${JSON.stringify(data)}\n`;
            console.log(fullMessage);            
        }
    }

    public static TrackEvent(message: string = '',
    data: object | null = null,
    showLogOnConsole: boolean = false
    ): void {        
        //TODO: Track to database or another log platform
        //Make this method async
    }
}
