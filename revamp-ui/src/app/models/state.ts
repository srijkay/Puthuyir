export class State {
    stateId: string;
    stateName: string;
   
    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
