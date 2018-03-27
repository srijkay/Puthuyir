export class City {
    cityId: string;
    cityName: string;
    districtId: string;
    
    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
