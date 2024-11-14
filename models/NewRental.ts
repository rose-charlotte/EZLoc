import { Room } from "./Room";

export interface NewRental {
    id: string;
    rentalType: string;
    rentalInfo: string;
    loyer: string;
    charges: string;
    globalSize: string;

    street: string;
    streetInfo: string;
    zipcode: string;
    city: string;
    country: string;
    rooms: string;
    roomsInfo: Room[];
}
