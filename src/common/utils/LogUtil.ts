import { AppConfig } from "../../config/AppConfig";

export class LogUtil {

    public static TrackEvent(message: string = '', data: object | null = null): void {
        
        if (AppConfig.Logs?.ShowLogsOnBrowserConsole) {
            const fullMessage = `Message: ${message}\nData:  ${JSON.stringify(data)}\n`;
            console.log(fullMessage);
        }
    }
}
