import { Rental } from "./Rental";
import { Dayjs } from "dayjs";

export interface Tenant {
    id: string;
    lastName: string;
    firstName: string;
    dateOfBirth: Dayjs | null;
    mail: string;
    phone: string;
    employment: string;
    salary: number;
    currency: Currency;
    comment: string;
    files: Files[];
    entryDate: Dayjs | null;
    exitDate: Dayjs | null;
    rental: Partial<Rental>;
}
enum Currency {
    Euro = "euro",
    Francs = "francs",
    Dollars = "dollars",
}

export interface Files {
    fileName: string;
    file: File;
}
