    export interface SchoolInfo {
        schoolInfoId: number;
        schoolRegNo: string;
        schoolName: string;
        schoolType: string;
        numberOfStudents: number;
        numberOfTeachers: number;
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
        proofOfIds: ProofOfIds;
        projects: Project[];
    }

    export interface Project {
      projectId:number;
      estimate:number;
      collectedAmount:number;
      status:string;
    }
