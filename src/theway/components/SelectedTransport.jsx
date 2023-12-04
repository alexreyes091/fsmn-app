import { Select, SelectItem } from "@nextui-org/react";
import { getAllTransport } from '../../auth/helpers/api';
import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
export const SelectedTransport = ({setSelectedTransport, isLoadStore = false}) => {

    const [loading, setLoading] = useState(true);
    const [transport, setTransport] = useState([]);

    useEffect(() => {
        const loadData = async () => {
            const response = await getAllTransport();
            const allData = response.transport;
            setTransport(allData);
            setLoading(false);
        };

        loadData();
    }, [])

    const onOptionSelect = (selectedValue) => {
        const selectTrnasport = transport.find(transport => transport.id == selectedValue.target.value);
        setSelectedTransport(selectTrnasport);
    }

    return (
        <>
            {loading ? (
                <p>Loading Transports...</p>
            ) : (
                <Select
                    color="default"
                    isDisabled = {isLoadStore}
                    // variant="bordered"
                    isRequired
                    label="Transportistas"
                    placeholder="Seleccione un transportista"
                    onChange={onOptionSelect}
                    // className="max-w-xs"
                >
                    {transport?.map((item) => (
                        <SelectItem
                            key={item.id}
                            value={item.id}
                        >
                            {`${item.driver} - Tarifa: L${item.rate} - Placa: ${item.licence_plate}`}
                        </SelectItem>
                    ))}
                </Select>
            )}
        </>
    )
}
