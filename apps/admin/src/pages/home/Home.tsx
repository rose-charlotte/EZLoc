import { Paper, useTheme } from "@mui/material";
import style from "./Home.module.css";

const rentals: Rental[] = [
    { id: 1, name: "Studio du haut", rent: 900, rentalCharges: 100, tenant: "Bob", paiement: true },
    { id: 2, name: "Studio du bas", rent: 900, rentalCharges: 100, tenant: "vide", paiement: true },
    { id: 3, name: "Chalet montagne", rent: 1200, rentalCharges: 300, tenant: "Bobby", paiement: false },
    { id: 4, name: "Appartement mer", rent: 3000, rentalCharges: 500, tenant: "Bobette", paiement: false },
];

export function Home() {
    const theme = useTheme();

    const onSelectedRental = (rental: Rental) => {
        alert(`j'ai cliqué sur ${rental.id}`);
    };

    return (
        <Paper className={style.container}>
            <h1 style={theme.typography.h2}>Vos biens locatifs</h1>
            <div className={style.rentals}>
                {rentals.map(rental => {
                    return (
                        <Paper
                            key={rental.id}
                            className={style.rentalContainer}
                            style={{ color: theme.palette.primary.main }}
                        >
                            <div onClick={() => onSelectedRental(rental)}>
                                <p className={style.rentalHeader}>{rental.name}</p>
                                <p>
                                    Loyer + charges: {rental.rent}€ + {rental.rentalCharges}€
                                </p>
                            </div>

                            <div>
                                <p
                                    className={style.rentalHeader}
                                    onClick={() => alert(`j'ai cliqué sur ${rental.tenant}`)}
                                >
                                    Occupant: {rental.tenant}
                                </p>
                                {rental.paiement ? (
                                    <p>paiement à jour </p>
                                ) : (
                                    <p className={style.error}> Paiement en retard</p>
                                )}
                            </div>
                        </Paper>
                    );
                })}
            </div>
        </Paper>
    );
}

export interface Rental {
    id: number;
    name: string;
    rent: number;
    rentalCharges: number;
    tenant: string;
    paiement: boolean;
}
