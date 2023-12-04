import { useEffect, useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { Button, Input, Divider } from '@nextui-org/react';
// Components
import { SearchStore } from './SearchStore';
import { SelectedTransport } from './SelectedTransport';
// Helpers
import { useStore } from '../../auth/Context/Store';
import { setTrip } from '../../auth/helpers/api';

// Tostify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// eslint-disable-next-line react/prop-types
export const FormikTrip = ({setDataTrip}) => {
    const { user } = useStore();
    const [selectedTransport, setSelectedTransport] = useState();
    const [dataStore, setDataStore] = useState();
    const [initialValues, setInitialValues] = useState({});
    const [isLoadStore, setIsLoadStore] = useState(false);
    const [isSaveTrip, setIsSaveTrip] = useState(false);

    const toastSuccess = () => toast.success(`Viaje registrado correctamente`, {
        position: "bottom-left",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });

    const toastError = () => toast.error(`Error al registrar el viaje`, {
        position: "bottom-left",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });

    useEffect(() => {
        if (selectedTransport && dataStore) {
            setInitialValues({
                id_store: dataStore.store.id_store,
                id_trip: generateUID(6),
                aplicant: user.username,
                create_date: new Date().toLocaleDateString()
            })
            setIsLoadStore(true);
        }
     
    }, [selectedTransport, dataStore, user.username])
    

    const generateUID = (length) => {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        let uid = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            uid += characters.charAt(randomIndex);
        }
        return uid;
    };


    const handleSubmit = async (trip) => {

        const newTrip = {
            id_trip: trip.id_trip,
            applicant: trip.aplicant,
            transport: selectedTransport.licence_plate,
            id_store: trip.id_store,
        }

        const resp = await setTrip(newTrip);

        if(resp){
            setDataTrip(newTrip);
            setIsSaveTrip(resp);
            toastSuccess();
        } else {
            toastError();
        }
    };

    const onResetForm = () => {
        setSelectedTransport(null);
        setDataStore(null);
        setIsLoadStore(false);
    }

    return (
        <div className='w-full p-4 bg-white rounded-md shadow-md'>
            <div className='flex items-center gap-3'>
                <ToastContainer />
                <div className='w-5/6 mb-2'>
                    <SelectedTransport
                        setSelectedTransport={setSelectedTransport}
                        isLoadStore={isLoadStore}
                    />
                </div>
                <div className="w-1/6">
                    <SearchStore
                        setDataStore={setDataStore}
                        isLoadStore={isLoadStore}
                    />
                </div>
            </div>
            <Divider className='my-5' />
            {/* Fin Busqueda */}
            {
                (isLoadStore ) ? (
                    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                        <Form>
                            <div className='mb-3'>
                                <p className='italic'>1. Datos Generales de la solicitud</p>
                                <small className='ml-3 text-sky-500'> Primero crearemos los datos generales de la solcicitud antes de asignar los colaboradores que viajaran.</small>
                            </div>
                            <div className='grid md:flex gap-4 mb-2'>
                                <Field name="id_store">
                                    {({ field }) => (
                                        <Input isDisabled label="ID Store" {...field} />
                                    )}
                                </Field>
                                <Field name="id_trip">
                                    {({ field }) => (
                                        <Input isDisabled label="ID Viaje" {...field} />
                                    )}
                                </Field>
                                <Field name="aplicant">
                                    {({ field }) => (
                                        <Input isDisabled type="text" label="Solicitante" {...field} />
                                    )}
                                </Field>
                                <Field name="create_date">
                                    {({ field }) => (
                                        <Input isDisabled type="text" label="Fecha de creacion" {...field} />
                                    )}
                                </Field>
                            </div>
                            <Divider className='my-3' />
                            {
                                (!isSaveTrip) ? (
                                    <div className='flex gap-4'>
                                        <Button onClick={() => onResetForm()} color='danger' type="submit">Cancelar</Button>
                                        <Button color='primary' type="submit">Guardar</Button>
                                    </div>
                                ) : (
                                    <p className='p-3 bg-green-100 text-sm italic text-center rounded-md'>Viaje registrado, puede continuar asignando los usuarios que viajran.</p>
                                )
                            }
                        </Form>
                    </Formik>
                ) : (
                    <p className='p-3 bg-gray-100 text-sm italic text-center rounded-md'>Favor seleccione una sucursal y un transportista</p>
                )
            }
        </div>
    )
}
