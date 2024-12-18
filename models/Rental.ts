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
    Home = "home",
    Apartment = "apartment",
    Studio = "studio",
    Garage = "garage",
    Other = "other",
}

enum RentalInfo {
    Furnished = "furnished",
    Empty = "empty",
    Other = "other",
}
