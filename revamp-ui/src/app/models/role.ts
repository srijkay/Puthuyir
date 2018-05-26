export class Role {
    roleId: string;
    roleName: string;
    accessLevel: string;
   
    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
