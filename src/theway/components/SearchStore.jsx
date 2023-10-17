import { useState } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input } from "@nextui-org/react";
import { IconFingerprint, IconSearch, IconBuilding, IconUserCheck } from "@tabler/icons-react";
// Tostify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// helpers
import { getStoresById } from '../../auth/helpers/api';
import { CardSearchStore } from "./CardSearchStore";
// import { SelectedStore } from "./SelectedStore";


// eslint-disable-next-line react/prop-types
export const SearchStore = ({ setDataStore }) => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [idStore, setIdStore] = useState();
    const [store, setStore] = useState({})
    const [isLoadLocalStore, setIsLoadLocalStore] = useState(false);

    // TODO: Separar esto en un hook
    const notify = () => toast.error(`ID de sucursal no existe`, {
        position: "bottom-left",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });

    const toastSuccess = () => toast.success(`Sucursal agregada correctamente`, {
        position: "bottom-left",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });

    const onInput = (e) => {
        const value = e.target.value; // Obten el valor del input
        setIdStore(parseInt(value)); // Actualiza el estado IdUser con el valor del input
    }

    const onSearch = async (id_user) => {
        const dataStore = await getStoresById(id_user)
        dataStore.store ? setStore(dataStore.store) : notify();
        dataStore.store && setIsLoadLocalStore(true);

    }

    const onSetDataStore = () => {
        setDataStore({store});
        setStore({});
        onOpenChange(false);
        setIsLoadLocalStore(false);
        toastSuccess();

    }

    return (
        <>
            <Button variant={'shadow'} onPress={onOpen} color="primary">
                <IconBuilding className="text-white pointer-events-none flex-shrink-0" />
            </Button>
            <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                placement="top-center"
            >
                <ModalContent>
                    {() => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">
                                <div className="flex items-center gap-2">
                                    <IconFingerprint className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                                    Busqueda de sucursales por ID
                                </div>
                            </ModalHeader>
                            <ModalBody >
                                <div className="flex gap-2 items-center">
                                    <Input
                                        autoFocus
                                        type="number"
                                        label="ID Sucursal"
                                        onChange={onInput}
                                        placeholder="Ingrese el ID de la sucursal."
                                        variant="bordered"
                                        className=""
                                    />
                                    <Button size="lg" color="primary" onPress={() => onSearch(idStore)}>
                                        <IconSearch className="text-white pointer-events-none flex-shrink-0" />
                                    </Button>
                                </div>
                            </ModalBody>

                            <ModalBody>
                                <CardSearchStore
                                    store={store}
                                />
                            </ModalBody>
                            {/* CARD */}

                            <ModalFooter>
                                <Button isDisabled={!isLoadLocalStore} size="lg" color="primary" onPress={() => onSetDataStore()}>
                                    <IconUserCheck className="text-white pointer-events-none flex-shrink-0" />
                                    Agregar
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
                <ToastContainer />
            </Modal>
        </>
    )
}
