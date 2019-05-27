
export class Address {
    addressId: string;
    addressLine1: string;
    addressLine2: string;
    phoneNumber: string;
    district: string;
    city: string;
    locality: string;
    pinCode: number;
    state: string;
    createdDate: Date;
    modifiedDate: Date;
    createdBy: String;
    modifiedBy: String;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
