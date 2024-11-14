import { Equipment } from "./Equipment";

export interface Room {
    name: string;
    size: string;
    equipments: Equipment[];
}
