    import { User } from './user';

    export interface SchoolInfo {
        schoolInfoId: number;
        schoolRegNo: string;
        schoolName: string;
        schoolType: string;
        numberOfStudents: number;
        numberOfTeachers: number;
        createdDate: Date;
    }

    export interface Concats {
        contactsId: number;
        priName: string;
        priNum: string;
        priEmail: string;
        secName?: any;
        secNum?: any;
        secEmail: string;
    }

    export interface Address {
        addressId: number;
        addressLine1: string;
        addressLine2: string;
        district: string;
        city: string;
        locality?: any;
        pinCode: string;
        state: string;
    }

    export interface Requirement {
        requirementId: number;
        reqType: string;
        assetType: string;
        assetName: string;
        quantity: number;
        status: string;
        priority: number;
        dateAdded?: any;
    }

    export interface ProofOfIds {
        comments: string;
        files: string[];
    }

    export interface School {
        id: number;
        schoolInfo: SchoolInfo;
        concats: Concats;
        address: Address;
        requirements: Requirement[];
        projects: Project[];
        proofOfIds: ProofOfIds;
        status: string;
        date: string;
    }

export interface Project {
    createdDate:Date;
    modifiedDate:Date;
    createdBy: String;
    modifiedBy: String;
    projectId: Number;
    estimate: Number;
    collectedAmount: Number;
    status: String;
    requirements:Requirement[];
    user: User;
   // school: School;
}

