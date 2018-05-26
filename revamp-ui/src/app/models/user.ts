import { Address } from "./address";

export class User {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    emailAddress: string;
    address: Address;
    roleId: string;
    identityProof: number;
    
   
    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
