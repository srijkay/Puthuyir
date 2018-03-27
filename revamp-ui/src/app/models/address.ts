import { District } from "./district";

export class Address {
    addressLine1: string;
    addressLine2: string;
    district: String;
    city: String;
   
    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
