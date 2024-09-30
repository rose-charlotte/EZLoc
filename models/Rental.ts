export interface Rental {
    id: string;
    name: string;
    //Add an interface address with all details informations
    //https://github.com/rose-charlotte/EZLoc/issues/74
    address: string;
    type: RentalTypes;
    description: string;
    equipment: string[];
    heating: string;
}

export enum RentalTypes {
    Flat = "flat",
    House = "house",
    Studio = "studio",
}
