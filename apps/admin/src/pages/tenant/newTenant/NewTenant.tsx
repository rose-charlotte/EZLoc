import { Button, Paper, TextField } from "@mui/material";
import { Form } from "../../../components/Form/Form";
import { FormField } from "../../../components/Form/FormField";
import style from "./NewTenant.module.css";
import { SelectField } from "../../../components/commons/selectField/SelectField";
import React, { useEffect, useState } from "react";
import { MuiFileInput } from "mui-file-input";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import CloseIcon from "@mui/icons-material/Close";
import { Rental } from "@models";
import { DropDownSearch } from "../../../components/commons/searchBar/DropDownSearch";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Dayjs } from "dayjs";

const money = [
    { label: "€", value: "euro" },
    { label: "CHF", value: "francs" },
    { label: "$", value: "dollars" },
];

export function NewTenant() {
    const [file, setFile] = useState<File | null>(null);
    const [isAddFile, setIsAddFile] = useState<boolean>(false);
    const [files, setFiles] = useState<Files[] | null>(null);
    const [fileName, setFileName] = useState<string | undefined>("");
    const [entryDate, setEntryDate] = useState<Dayjs | null>(null);
    const [exitDate, setExitDate] = useState<Dayjs | null>(null);
    const [rentals, setRentals] = useState<Rental[]>([]);

    // async function getRentals() {
    //     const res = await fetch(`${import.meta.env.VITE_API_ROUTE}home`, {
    //         method: "get",
    //     });
    //     const mss = await res.json();
    //     return mss;
    // }

    // useEffect(() => {
    //     async function fetchRentals() {
    //         const rentalList = await getRentals();
    //         setRentals(rentalList);
    //     }
    //     fetchRentals();
    // }, []);

    const onChange = (value: File | null) => {
        console.log(value);
        if (value) {
            setFile(value);
            const newFile: Files = { fileName: fileName || "", file: value };
            console.log(newFile);
            setFiles(prev => (prev ? [...prev, newFile] : [newFile]));
        }
        setFile(null);
        setIsAddFile(!isAddFile);
    };

    const onAddFileName = (name: string | undefined) => {
        setFileName(name);
    };

    const onSubmit = (newTenant: Tenant) => {
        newTenant.files = files || [];
        console.log(newTenant);
    };

    return (
        <>
            <Form<Tenant> submitLabel="Créer le locataire" onSubmit={onSubmit}>
                <Paper className={style.container}>
                    <FormField label="Nom" name="lastName" />
                    <FormField label="Prénom" name="firstName" />
                    <FormField label="date de naissance" name="dateOfBirth" />
                    <FormField label="Email" name="mail" />
                    <FormField label="Téléphone" name="phone" />
                    <FormField label="Situation professionnelle" name="employment" />
                    <div className={style.salary}>
                        <FormField label="Revenus" name="salary" />
                        <SelectField label="Devise" name="currency" options={money} />
                    </div>
                    <FormField label="Commentaire" name="comment" />

                    <Button onClick={() => setIsAddFile(!isAddFile)}> Ajouter un fichier</Button>
                    {isAddFile && (
                        <div className={style.addField}>
                            <FormField label="nom du fichier" name="fileName" onChange={onAddFileName} />
                            <MuiFileInput
                                label="Ajouter un fichier"
                                variant="outlined"
                                name="file"
                                value={file}
                                onChange={onChange}
                                InputProps={{
                                    startAdornment: <AttachFileIcon />,
                                }}
                                clearIconButtonProps={{
                                    title: "Remove",
                                    children: <CloseIcon fontSize="small" />,
                                    onClick: () => setFile(null),
                                }}
                                placeholder="Ajouter un fichier"
                            />
                        </div>
                    )}
                    {files &&
                        files.map(file => (
                            <li key={file.fileName}>
                                {file.fileName} {file.file.name}
                            </li>
                        ))}

                    {/* <DropDownSearch items={rentals} label="Assigner un logement" /> */}
                    <FormField label="Date d'entrée" name="entryDate" />

                    <div className={style.date}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                                label="Date d'entée"
                                value={entryDate}
                                onChange={newValue => setEntryDate(newValue)}
                            />
                        </LocalizationProvider>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                                label="Date de sortie"
                                value={exitDate}
                                onChange={newValue => setExitDate(newValue)}
                            />
                        </LocalizationProvider>
                    </div>
                </Paper>
            </Form>
        </>
    );
}

export interface Tenant {
    id: number;
    lastName: string;
    firstName: string;
    dateOfBirth: Date;
    mail: string;
    phone: string;
    employment: string;
    salary: number;
    currency: Currency;
    comment: string;
    files: Files[];
    entryDate: Dayjs;
    exitDate: Dayjs;
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
