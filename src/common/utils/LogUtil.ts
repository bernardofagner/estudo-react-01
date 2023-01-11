export class LogUtil {

    public static LogEvent(message: string = '', data: object | null = null, showLogOnConsole: boolean = true): void {
        
        if (showLogOnConsole) {
            const fullMessage = `Message: ${message}\nData:  ${JSON.stringify(data)}\n`;
            console.log(fullMessage);
        }
    }

    public static TrackEvent(message: string = '', data: object | null = null, showLogOnConsole: boolean = false): void {        
        //TODO: Track to database or another log platform
        //Make this method async
    }
}
