import { Rental } from "./Rental";

export interface Tenant {
    id: string;
    lastName: string;
    firstName: string;
    dateOfBirth?: Date;
    mail: string;
    phone: string;
    employment: string;
    salary: number;
    currency: Currency;
    comment: string;
    files: FileInfo[];
    entryDate?: Date;
    exitDate: Date | undefined;
    rental: Partial<Rental>;
}

//A modifier ultérieurement pour pouvoir choisir la currency désirée directement dans la base données
//https://github.com/rose-charlotte/EZLoc/issues/110
enum Currency {
    Euros = "euros",
    Francs = "francs",
    Dollars = "dollars",
}

export interface FileInfo {
    fileName: string;
    file: File;
}
