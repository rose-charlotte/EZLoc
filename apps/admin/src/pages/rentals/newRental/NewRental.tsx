import { Accordion, AccordionDetails, AccordionSummary, Button, Paper, useTheme } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import { SelectField } from "../../../components/commons/selectField/SelectField";
import { Form } from "../../../components/Form/Form";
import { FormField } from "../../../components/Form/FormField";
import style from "./NewRental.module.css";
import { useState } from "react";
import { DropDownSearch } from "../../../components/commons/searchBar/DropDownSearch";
import { TagList } from "../../../components/commons/tags/TagList";
import { Room, Equipment, Rental, NewRentalRequest } from "@models";

const equipmentsList = [
    { name: "Lit" },
    { name: "Table" },
    { name: "Armoire" },
    { name: "Chaise" },
    { name: "Micro-onde" },
    { name: "Télé" },
];
const rentalTypes = [
    { label: "Maison", value: "Home" },
    { label: "Studio", value: "studio" },
    { label: "Appartement", value: "apartment" },
    { label: "Garage", value: "garage" },
    { label: "autre", value: "other" },
];
const rentalInfo = [
    { label: "Meublé", value: "furnished" },
    { label: "Vide", value: "empty" },
    { label: "Autre", value: "other" },
];

export function NewRentalInfo() {
    const theme = useTheme();
    const [isAddRoom, setIsAddRoom] = useState<boolean>(false);
    const [equipments, setEquipments] = useState<Equipment[]>(equipmentsList);

    const [rooms, setRooms] = useState<Room[]>();
    const [roomName, setRoomName] = useState<string>();
    const [roomSize, setRoomSize] = useState<number>();

    const [selectedEquipment, setSelectedEquipment] = useState<Equipment[]>();

    async function postNewRental(rentalInfo: NewRentalRequest) {
        const res = await fetch(`${import.meta.env.VITE_API_ROUTE}rental`, {
            method: "POST",
            headers: { "content-Type": "application/json" },
            body: JSON.stringify(rentalInfo),
        });
        const mss = await res.json();
        console.log("la reponse du back", mss);
    }

    const handleRoomName = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key !== "Tab") {
            return;
        }

        const newRoomName = (e.target as HTMLInputElement).value;

        setRoomName(newRoomName);
    };

    const handleRoomSize = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key !== "Tab") {
            return;
        }
        const newRoomSize = (e.target as HTMLInputElement).value;
        if (!newRoomSize) {
            return "";
        }

        setRoomSize(parseInt(newRoomSize));
    };

    // https://github.com/rose-charlotte/EZLoc/issues/105 Faire la page de création pour ajouter un nouvel élément
    const onAddItem = () => {};

    const onItemSelected = (item: Equipment) => {
        setSelectedEquipment(prev => [...(prev || []), item]);
    };

    const onAddRoom = () => {
        setRooms(prev => [
            ...(prev || []),
            { name: roomName!, size: Number(roomSize), equipments: selectedEquipment! },
        ]);
        setIsAddRoom(!isAddRoom);
        setSelectedEquipment([]);
    };

    const removeRoom = (name: string) => {
        const newArrayOfRooms = rooms?.filter(room => room.name !== name);
        setRooms(newArrayOfRooms);
    };

    //https://github.com/rose-charlotte/EZLoc/issues/95
    const onEquipementTagClick = (tag: string) => {};

    const onEquipementTagDelete = (tag: string) => {
        setSelectedEquipment(selectedEquipment?.filter(equipment => equipment.name !== tag));
    };

    const onSubmit = (newRental: NewRentalRequest) => {
        const newRentalInfo = {
            name: newRental.name,
            rentalType: newRental.rentalType,
            rentalInfo: newRental.rentalInfo,
            rent: newRental.rent,
            rentalCharges: newRental.rentalCharges,
            globalSize: newRental.globalSize,
            street: newRental.street,
            streetInfo: newRental.streetInfo,
            zipcode: newRental.zipcode,
            city: newRental.city,
            country: newRental.country,
            roomsInfo: rooms!,
        };

        postNewRental(newRentalInfo);
    };

    return (
        <Form<Rental> submitLabel="Créer le bien" onSubmit={onSubmit}>
            <div className={style.container}>
                <Paper className={style.infoContainer}>
                    <h1 className={style.paperTitle} style={{ color: theme.palette.primary.main }}>
                        Informations locative
                    </h1>
                    <FormField label="Nom du bien" name="name" />
                    <SelectField label="Type de bien" name="rentalType" options={rentalTypes} />
                    <SelectField label="Type de location" name="rentalInfo" options={rentalInfo} />
                    <FormField label="Loyer HC" name="loyer" />
                    <FormField label="Charges" name="charges" />
                </Paper>

                <Paper className={style.infoContainer}>
                    <h1 className={style.paperTitle} style={{ color: theme.palette.primary.main }}>
                        Adresse
                    </h1>
                    <FormField label="Adresse" name="street" />
                    <FormField label="Complement d'adresse" name="streetInfo" />
                    <FormField label="Code Postal" name="zipcode" />
                    <FormField label="Ville" name="city" />
                    <FormField label="Pays" name="country" />
                </Paper>

                <Paper className={style.infoContainer}>
                    <h1 className={style.paperTitle} style={{ color: theme.palette.primary.main }}>
                        Descriptif du bien
                    </h1>
                    <FormField label="Surface globale en m²" name="globalSize" />
                    <FormField label="Nombre de pièce" name="rooms" />

                    <Button onClick={() => setIsAddRoom(!isAddRoom)} className={style.btn}>
                        Descriptif d'une pièce
                    </Button>
                    {isAddRoom && (
                        <>
                            <div className={style.accordeonDetailsContainer}>
                                <FormField label="Nom de la pièce" name="roomName" onKeyDown={handleRoomName} />
                                <FormField label="Surface en m²" name="roomSize" onKeyDown={handleRoomSize} />
                                <DropDownSearch<Equipment>
                                    label="Rechercher un équipement"
                                    items={equipments}
                                    getLabel={item => item.name}
                                    getKey={item => item.name}
                                    onItemSelected={onItemSelected}
                                    addButton
                                    onAddElementClick={onAddItem}
                                />
                                {selectedEquipment && (
                                    <TagList
                                        tags={selectedEquipment.map(equipment => equipment.name)}
                                        onClick={tag => onEquipementTagClick(tag)}
                                        onDelete={tag => onEquipementTagDelete(tag)}
                                    />
                                )}
                                <Button onClick={onAddRoom}>Ajouter</Button>
                            </div>
                        </>
                    )}

                    {rooms &&
                        rooms.map(room => (
                            <Accordion key={room.name}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1-content"
                                    id="panel1-header"
                                    style={{ color: theme.palette.primary.main }}
                                >
                                    <h2 className={style.paperSubTitle} style={{ color: theme.palette.primary.main }}>
                                        Pièce: {room ? room.name : ""}
                                    </h2>
                                </AccordionSummary>
                                <AccordionDetails className={style.accordeonDetailsContainer}>
                                    <p>{room.size} m²</p>
                                    <div>
                                        <TagList tags={room.equipments.map(equipment => equipment.name)} />
                                    </div>
                                    <div onClick={() => removeRoom(room.name)}>
                                        <RemoveCircleIcon />
                                    </div>
                                </AccordionDetails>
                            </Accordion>
                        ))}
                </Paper>
            </div>
        </Form>
    );
}
