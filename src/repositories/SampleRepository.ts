import { UserModel } from "../models/users/UserModel";
import { RestBaseRepository } from "./base/RestBaseRepository";

class SampleRepository extends RestBaseRepository {

    constructor() {
        super();
    }

    public async GetSampleInformation() {
        return await this.Client.get<UserModel>('endpoint');
    }
}

const instance = new SampleRepository();
export { instance as SampleRepository };