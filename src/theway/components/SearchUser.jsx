import { useState } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input } from "@nextui-org/react";
import { IconFingerprint, IconSearch, IconUserSearch, IconUserCheck } from "@tabler/icons-react";
// Tostify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// helpers
import { getUserById } from '../../auth/helpers/api';
import { CardSearchUser } from "./CardSearchUser";


// eslint-disable-next-line react/prop-types
export const SearchUser = ({ setDataUser }) => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [IdUser, setIdUser] = useState();
    const [user, setUser] = useState({})
    const [isLoadLocalUser, setIsLoadLocalUser] = useState(false);

    // TODO: Separar esto en un hook
    const toastError = () => toast.error(`ID de usuario no existe`, {
        position: "bottom-left",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });

    const toastSuccess = () => toast.success(`Usuario agregado correctamente`, {
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
        const value = e.target.value;
        setIdUser(parseInt(value));
    }

    const onSearch = async (id_user) => {
        const dataUser = await getUserById(id_user)
        dataUser.user ? setUser(dataUser.user) : toastError();
        dataUser.user && setIsLoadLocalUser(true);
    }

    const onSetDataUser = () => {
        setDataUser({user});
        setUser({});
        onOpenChange(false);
        setIsLoadLocalUser(false);
        toastSuccess();

    }

    return (
        <>
            <Button variant="shadow" onPress={onOpen} color="primary">
                <IconUserSearch className="text-white pointer-events-none flex-shrink-0" />
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
                                    Busqueda de usuarios por ID
                                </div>
                            </ModalHeader>
                            <ModalBody className="flex-row items-center">
                                <Input
                                    autoFocus
                                    type="number"
                                    label="ID Usuario"
                                    onChange={onInput}
                                    placeholder="Ingrese el codigo del empleado."
                                    variant="bordered"
                                />
                                <Button size="lg" color="primary" onPress={() => onSearch(IdUser)}>
                                    <IconSearch className="text-white pointer-events-none flex-shrink-0" />
                                </Button>
                            </ModalBody>
                            
                            <ModalBody>
                                <CardSearchUser user={user} />
                            </ModalBody>
                            {/* Card */}
                            
                            <ModalFooter>
                                <Button isDisabled={!isLoadLocalUser} size="lg" color="primary" onPress={() => onSetDataUser()}>
                                    <IconUserCheck className="text-white pointer-events-none flex-shrink-0" />
                                    Agregar
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
            <ToastContainer />
        </>
    )
}
