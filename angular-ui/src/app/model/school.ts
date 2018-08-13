        export interface SchoolInfo {
            name: string;
            type: string;
            studNos: string;
            teachNos: string;
        }
    
        export interface Contacts {
            priName: string;
            priNum: string;
            priEmail: string;
            secName: string;
            secNum: string;
            secEmail: string;
        }
    
        export interface Address {
            addressLine1: string;
            addressLine2: string;
            city: string;
            district: string;
            state: string;
        }
    
        export interface Requirement {
            reqType: string;
            assetType: string;
            assetName: string;
            quantity: string;
        }
    
        export interface ProofOfId {
            comments: string;
        }
    
        export interface School {
            schoolInfo: SchoolInfo;
            contacts: Contacts;
            address: Address;
            requirement: Requirement;
            proofOfId: ProofOfId;
        } 