export class UserModel {
    public Name?: string;

    constructor(init?: Partial<UserModel>) {
        Object.assign(this, init);
    }
}
