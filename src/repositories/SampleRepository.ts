import { RestBaseRepository } from "./base/RestBaseRepository";

class SampleRepository extends RestBaseRepository {

    constructor() {
        super();
    }

    public GetSampleInformation() {
        return this.Client.get('endpoint');
    }
}

const instance = new SampleRepository();
export { instance as SampleRepository };