import { Room } from "./Room";
import { Tenant } from "./Tenant";

export interface Rental {
    id: string;
    name: string;
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
    paiement: boolean;
    tenant: string;
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

export type NewRentalRequest = Pick<
    Rental,
    | "name"
    | "rentalType"
    | "rentalInfo"
    | "rent"
    | "rentalCharges"
    | "globalSize"
    | "street"
    | "streetInfo"
    | "zipcode"
    | "city"
    | "country"
    | "roomsInfo"
>;
