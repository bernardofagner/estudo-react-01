export class LogUtil {

    public static TrackEvent(message: string = '', data: object | null = null): void {
        const fullMessage = `Message: ${message}\nData:  ${JSON.stringify(data)}
        
        `;

        console.log(fullMessage);
    }
}
