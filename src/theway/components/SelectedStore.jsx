import { Select, SelectItem } from "@nextui-org/react";
import { getAllSucursales } from '../../auth/helpers/api';
import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
export const SelectedStore = ({setSelectedStore}) => {

    const [loading, setLoading] = useState(true);
    const [stores, setStores] = useState([]);

    useEffect(() => {
        const loadData = async () => {
            const response = await getAllSucursales();
            const allStores = response.stores;
            setStores(allStores);
            setLoading(false);
        };

        loadData();
    }, [])

    const onStoreSelect = (selectedValue) => {
        const selectStore = stores.find(store => store.id_store === selectedValue);
        setSelectedStore(selectStore);
    }

    return (
        <>
            {loading ? (
                <p>Loading stores...</p>
            ) : (
                <Select
                    color="warning"
                    variant="bordered"
                    isRequired
                    label="Sucursales"
                    placeholder="Seleccione una sucursal"
                    onChange={onStoreSelect}
                    // className="max-w-xs"
                >
                    {stores.map((store) => (
                        <SelectItem
                            key={store.id_store}
                            value={store.id_store}
                        >
                            {`#${store.id_store}: ${store.name} - ${store.adress}`}
                        </SelectItem>
                    ))}
                </Select>
            )}
        </>
    )
}
