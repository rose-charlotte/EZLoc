import { Rental } from "@models";
import { Form } from "../../../components/Form/Form";
import { FormField } from "../../../components/Form/FormField";
import { SelectField } from "../../../components/commons/selectField/SelectField";
import { SearchBar } from "../../../components/commons/searchBar/SearchBar";

export function NewRental() {
    const rentalTypesOptions = [
        { id: "studio", name: "Studio" },
        { id: "house", name: "Maison" },
        { id: "flat", name: "Appartement" },
    ];
    const onSubmit = () => {
        console.log("je submit");
    };

    return (
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <Form<Rental> onSubmit={onSubmit} submitLabel="Céation de bien">
                <FormField<Rental> label="Dénomination" name="name" required />
                <FormField<Rental> label="Adresse" name="address" required />
                <SelectField label="Type de bien" name="type" options={rentalTypesOptions} />
                <FormField<Rental> label="Description" name="description" />
                <SearchBar />
            </Form>
        </div>
    );
}

// equipment: string[];
// heating: string;
