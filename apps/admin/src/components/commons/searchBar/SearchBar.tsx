import { useState } from "react";
import style from "./SearchBar.module.css";

import { FormField } from "../../Form/FormField";
import { Form } from "../../Form/Form";

export function SearchBar() {
    const equipmentsList = [
        { name: "Chaise" },
        { name: "Lit" },
        { name: "Commode" },
        { name: "Armoire" },
        { name: "Table" },
        { name: "Micro-onde" },
    ].sort((a, b) => a.name.localeCompare(b.name));

    const [equipments, setEquipments] = useState<Equipment[]>(equipmentsList);
    const [openList, setOpenList] = useState<boolean>(false);

    const [choosenEquipments, setChoosenEquipment] = useState<string[]>([]);

    const SelectEquipment = (equipment: string) => {
        setChoosenEquipment(prevEquipment => [...prevEquipment, equipment]);

        const newArray = equipments.filter(ele => ele.name !== equipment);
        setEquipments(newArray);
        setOpenList(false);
    };

    const removeEquipment = (equipment: string) => {
        const newEquipmentArray = choosenEquipments.filter(index => index !== equipment);
        setChoosenEquipment(newEquipmentArray);
        setEquipments(prev => [...prev, { name: equipment }].sort((a, b) => a.name.localeCompare(b.name)));
    };

    const addEquipment = (equipment: Equipment) => {
        console.log(equipment);
        equipmentsList.push(equipment);
        //setEquipments(prev => [...prev, equipment]);
    };

    console.log(equipmentsList);
    return (
        <div className={style.mainContainer}>
            <div className="style.container">
                <label htmlFor="default-search" className={style.label}>
                    Search
                </label>
                <div className="relative">
                    <div className={style.svg}>
                        <svg
                            className="w-4 h-4 text-gray-500 "
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 20 20"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                            />
                        </svg>
                    </div>
                    <input
                        type="search"
                        id="default-search"
                        className={style.input}
                        placeholder="Choisissez les équipements"
                        onClick={() => setOpenList(!openList)}
                        required
                    />
                    <button type="submit" className={style.button}>
                        Search
                    </button>
                </div>
            </div>
            <div>
                {openList && (
                    <div className={style.listItemContainer}>
                        <ul>
                            {equipments.map(equipment => (
                                <li
                                    className={style.li}
                                    key={equipment.name}
                                    onClick={() => SelectEquipment(equipment.name)}
                                >
                                    {equipment.name}
                                </li>
                            ))}
                        </ul>
                        <Form submitLabel="Ajouter" onSubmit={addEquipment}>
                            <FormField name="Equipment" placeholder="Ajouter un élément" />
                        </Form>
                    </div>
                )}
                {choosenEquipments && (
                    <ul className={style.choosenItemContainer}>
                        {choosenEquipments.map(equipment => (
                            <div key={equipment} className={style.elementContainer}>
                                <li>{equipment} </li>
                                <button className={style.closeBtn} onClick={() => removeEquipment(equipment)}>
                                    x
                                </button>
                            </div>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}

export interface Equipment {
    name: string;
}
