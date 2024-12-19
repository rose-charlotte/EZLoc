import { Button, Paper, useTheme } from "@mui/material";
import { Form } from "../../../components/Form/Form";
import { FormField } from "../../../components/Form/FormField";
import style from "./NewTenant.module.css";
import { SelectField } from "../../../components/commons/selectField/SelectField";
import { useEffect, useState } from "react";
import { MuiFileInput } from "mui-file-input";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import CloseIcon from "@mui/icons-material/Close";

import { DropDownSearch } from "../../../components/commons/searchBar/DropDownSearch";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Dayjs } from "dayjs";
import { Files, Rental, Tenant } from "@models";

const money = [
    { label: "€", value: "euro" },
    { label: "CHF", value: "francs" },
    { label: "$", value: "dollars" },
];

export function NewTenant() {
    const theme = useTheme();

    const [file, setFile] = useState<File | null>(null);
    const [files, setFiles] = useState<Files[] | null>(null);
    const [fileName, setFileName] = useState<string | undefined>("");
    const [dateOfBirth, setDateOfBirth] = useState<Dayjs | null>(null);
    const [entryDate, setEntryDate] = useState<Dayjs | null>(null);
    const [exitDate, setExitDate] = useState<Dayjs | null>(null);
    const [rental, setRental] = useState<Partial<Rental>>({});
    const [rentals, setRentals] = useState<Partial<Rental>[]>([]);

    async function getRentals() {
        const res = await fetch(`${import.meta.env.VITE_API_ROUTE}rental`, {
            method: "get",
        });
        return await res.json();
    }

    useEffect(() => {
        async function fetchRentals() {
            const rentalList = await getRentals();
            setRentals(rentalList);
        }
        fetchRentals();
    }, []);

    async function postNewTenant(tenant: Tenant) {
        const res = await fetch(`${import.meta.env.VITE_API_ROUTE}tenant`, {
            method: "POST",
            headers: { "content-Type": "application/json" },
            body: JSON.stringify(tenant),
        });
        const mss = await res.json();
        console.log("la reponse du back", mss);
    }

    const onChange = (value: File | null) => {
        if (value) {
            setFile(value);
        }
    };

    const onAddFile = () => {
        const value = file;
        if (value) {
            const newFile: Files = { fileName: fileName || "", file: value };

            setFiles(prev => (prev ? [...prev, newFile] : [newFile]));
        }
        setFile(null);
        setFileName("");
    };
    const onAddFileName = (name: string | undefined) => {
        setFileName(name);
    };

    const onSelectedRental = (rental: Partial<Rental>) => {
        setRental(rental);
    };

    const onSubmit = (newTenant: Tenant) => {
        newTenant.files = files || [];
        newTenant.rental = rental;
        newTenant.dateOfBirth = dateOfBirth;
        newTenant.entryDate = entryDate;
        newTenant.exitDate = exitDate;
        postNewTenant(newTenant);
    };

    return (
        <Form<Tenant> submitLabel="Créer le locataire" onSubmit={onSubmit}>
            <div className={style.mainContainer}>
                <Paper className={style.container}>
                    <h3 style={{ color: theme.palette.primary.main }}>Informations personnelles</h3>
                    <FormField label="Nom" name="lastName" />
                    <FormField label="Prénom" name="firstName" />
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                            label="Date de naissance"
                            value={entryDate}
                            onChange={newValue => setDateOfBirth(newValue)}
                        />
                    </LocalizationProvider>
                    <FormField label="Email" name="mail" />
                    <FormField label="Téléphone" name="phone" />
                    <FormField label="Situation professionnelle" name="employment" />
                    <div className={style.salary}>
                        <FormField label="Revenus" name="salary" />
                        <SelectField label="Devise" name="currency" options={money} />
                    </div>
                    <FormField label="Commentaire" name="comment" />
                </Paper>
                <Paper className={style.container}>
                    <h3 style={{ color: theme.palette.primary.main }}>Documents</h3>

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
                        <Button onClick={onAddFile}>Ajouter</Button>
                    </div>

                    {files &&
                        files.map(file => (
                            <li key={file.fileName}>
                                {file.fileName} {file.file.name}
                            </li>
                        ))}
                </Paper>
                <Paper className={style.container}>
                    <h3 style={{ color: theme.palette.primary.main }}>Information logement</h3>
                    <div className={style.rentalInfo}>
                        <DropDownSearch
                            items={rentals}
                            label={rental.name || "Assigner un logement"}
                            getLabel={rental => rental.name!}
                            getKey={rental => rental.id!}
                            onAddItem={() => console.log("addItem")}
                            onItemSelected={onSelectedRental}
                        />
                    </div>
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
            </div>
        </Form>
    );
}
