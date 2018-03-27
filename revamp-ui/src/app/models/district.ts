export class District {
    districtId: string;
    districtName: string;
    stateId: string;
    
    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
