import { Equipment } from "./Equipment";

export interface Room {
    name: string;
    size: number;
    equipments: Equipment[];
}
