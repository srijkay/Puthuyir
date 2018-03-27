import { Address } from "./address";

export class School {
    schoolName: string;
    headMasterName: string;
    headMasterEmail: string;
    numberOfStudents: number;
    numberOfTeachers: number;
    schoolType: string;
    schoolTypeList: string[];
    address: Address;
    proofOfIdentity: number;
    requirements: string;

   
    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
