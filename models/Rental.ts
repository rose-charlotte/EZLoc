import { Room } from "./Room";

export interface Rental {
    id: string;
    rentalType: RentalType;
    rentalInfo: RentalInfo;
    rent: number;
    rentalCharges: number;
    globalSize: number;
    street: string;
    streetInfo: string;
    zipcode: string;
    city: string;
    country: string;
    roomsInfo: Room[];
}

enum RentalType {
    Maison = "maison",
    Appartement = "appartement",
    Studio = "studio",
    Garage = "garage",
    Autre = "autre",
}

enum RentalInfo {
    Meublé = "meublé",
    Vide = "vide",
    Autre = "autre",
}
