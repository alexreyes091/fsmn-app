import { Button } from "@nextui-org/react";
import { IconUserCheck } from "@tabler/icons-react";
import { getStoresByIdUser, setAsociate } from "../../auth/helpers/api";
// Tostify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



// eslint-disable-next-line react/prop-types
export const AddStoreUsers = ({ id_user, id_store, distance, isLoadUser = false, isLoadStore = false }) => {
    
     // TODO: Separar esto en un hook
     const toastError = (message) => toast.error(`${message}`, {
        position: "bottom-left",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });

    const toastInfo = (message) => toast.info(`${message}`, {
        position: "bottom-left",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });

    const toastSuccess = (message) => toast.success(`${message}`, {
        position: "bottom-left",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });


    const onAsociate = async () => {
        // Validaciones generales
        if (distance <= 0 || distance >= 50) {
            return toastError('La distancia no puede ser menor a cero "0km" mayor que "50km"')
        }

        const storesByIdUser = await getStoresByIdUser(id_user)
        const stores = storesByIdUser.stores
        const isUserExistInStore = stores.some((store) => store.id_store == id_store)
        
        if (isUserExistInStore){
            return toastInfo('Este usuario ya se encuentra asociado a esta sucursal.')
        } else {
            const response = await setAsociate(id_user, id_store, distance)
            response && toastSuccess('Usuario asociado con exito!!!')
        }
    }

    return (
        <>
            <Button
                isDisabled={!isLoadUser || !isLoadStore}
                size="lg"
                color="primary"
                onPress={() => onAsociate()}
            >
                <IconUserCheck className="text-white pointer-events-none flex-shrink-0" />
                Asociar usuario a sucursal
            </Button>
            <ToastContainer />
        </>
    )
}
