import { Button, Paper, useTheme } from "@mui/material";
import style from "./Home.module.css";
import { Rental } from "@models";
import { useState, useEffect } from "react";
import { DropDownSearch } from "../../components/commons/searchBar/DropDownSearch";
import CancelIcon from "@mui/icons-material/Cancel";
import { Tenant } from "../../../../../models/Tenant";

const tenantList: Tenant[] = [
    { name: "Bob", id: "1" },
    { name: "Bobette", id: "2" },
];

export function Home() {
    const theme = useTheme();

    async function getRentals() {
        //https://github.com/rose-charlotte/EZLoc/issues/103 Gestion des erreurs à faire
        const res = await fetch(`${import.meta.env.VITE_API_ROUTE}rental`, {
            method: "get",
        });
        return await res.json();
    }

    const [rentals, setRentals] = useState<Rental[]>([]);
    const [openModal, setOpenModal] = useState<boolean>(false);
    const [tenantName, setTenantName] = useState<string>();

    useEffect(() => {
        async function fetchRentals() {
            const rentalList = await getRentals();
            setRentals(rentalList);
        }
        fetchRentals();
    }, []);

    const handleSelectedRental = (rental: Rental) => {};
    const handleSelectedTenant = (tenant: string) => {};

    const updateTenant = (rental: Rental) => {
        setOpenModal(true);
        setTenantName(rental.tenant);
    };

    const onAddTenant = () => {};
    const onSelectedTenant = (tenant: Tenant) => {
        setTenantName(tenant.name);
    };

    return (
        <div className={style.mainContainer}>
            <Paper className={style.container}>
                <h2 style={theme.typography.h2}>Vos biens locatifs</h2>
                <div className={style.rentals}>
                    {rentals.map(rental => {
                        return (
                            <Paper
                                key={rental.id}
                                className={style.rentalContainer}
                                style={{ color: theme.palette.primary.main }}
                            >
                                <div className={style.rentalInfo}>
                                    <div onClick={() => handleSelectedRental(rental)}>
                                        <p className={style.rentalHeader}>{rental.name}</p>
                                        <p>
                                            {/* Prévoir l'affichagen en plusieures langues https://github.com/rose-charlotte/EZLoc/issues/101 */}
                                            Loyer + charges: {rental.rent}€ + {rental.rentalCharges}€
                                        </p>
                                    </div>

                                    <div className={style.tenantInfo}>
                                        <p
                                            className={style.rentalHeader}
                                            onClick={() => handleSelectedTenant(rental.tenant)}
                                        >
                                            Occupant: {rental.tenant}
                                        </p>

                                        {rental.paiement ? (
                                            <p>paiement à jour </p>
                                        ) : (
                                            <p className={style.error}> Paiement en retard</p>
                                        )}
                                    </div>
                                </div>
                                <div className={style.rentalActions}>
                                    <Button onClick={() => updateTenant(rental)}>Modifier l'occupant</Button>
                                </div>
                            </Paper>
                        );
                    })}
                </div>
            </Paper>
            {openModal && (
                <div>
                    <h1>Locataire</h1>
                    {tenantName ? (
                        <span>Le locataire actuel est: {tenantName}</span>
                    ) : (
                        <span>Aucun occupant enregistré</span>
                    )}

                    <DropDownSearch
                        items={tenantList}
                        label="nouveau locataire"
                        getLabel={item => item.name}
                        getKey={item => item.id}
                        onAddItem={onAddTenant}
                        onItemSelected={onSelectedTenant}
                    />
                    <button onClick={() => setOpenModal(false)}>
                        <CancelIcon />
                    </button>
                </div>
            )}
        </div>
    );
}
