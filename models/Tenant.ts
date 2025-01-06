import { Rental } from "./Rental";

export interface Tenant {
    id: string;
    lastName: string;
    firstName: string;
    dateOfBirth: Date | undefined;
    mail: string;
    phone: string;
    employment: string;
    salary: number;
    currency: Currency;
    comment: string;
    files: FileInfo[];
    entryDate: Date | undefined;
    exitDate: Date | undefined;
    rental: Partial<Rental>;
}
enum Currency {
    Euros = "euros",
    Francs = "francs",
    Dollars = "dollars",
}

export interface FileInfo {
    fileName: string;
    file: File;
}
