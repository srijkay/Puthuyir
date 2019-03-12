
export class Address {
    addressLine1: string;
    addressLine2: string;
    phoneNumber:string;
    district: string;
    city: string;
    role: string;
   
    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}