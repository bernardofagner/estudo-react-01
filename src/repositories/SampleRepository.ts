import { AppConfig } from "../config/AppConfig";
import { RestBaseRepository } from "./base/RestBaseRepository";

class SampleRepository extends RestBaseRepository {

    private API_BASE_URL: string = AppConfig.Urls.Api.BaseUrl;

    constructor() {
        super();
    }

    public async GetApiHealth() {
        const url = `${this.API_BASE_URL}/health`;
        return await super.Get(url);
    }
}

const instance = new SampleRepository();
export { instance as SampleRepository };
