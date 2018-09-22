export interface LookUp {
    field: string;
    key: string;
    value: string;
    parentField: string;
    parentKey: string;
}

export interface LookUps {
    lookUps: LookUp[];
}
