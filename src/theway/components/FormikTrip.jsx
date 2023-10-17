import { Button, Input, Divider } from '@nextui-org/react';
import { Formik, Form, Field } from 'formik';
import { useEffect, useState } from 'react';
import { SearchStore } from './SearchStore';
import { useStore } from '../../auth/Context/Store';
// api
import { getAllTransport, getUsersByIdStore } from '../../auth/helpers/api';
import { SelectedTransport } from './SelectedTransport';

export const FormikTrip = () => {
    const { user } = useStore();
    const [dataStore, setDataStore] = useState();
    const [isLoadStore, setIsLoadStore] = useState(false);
    const [isLoadInfo, setIsLoadInfo] = useState(false);
    const [transportist, setTransportist] = useState();
    const [selectedTransport, setSelectedTransport] = useState()
    const [initialValues, setInitialValues] = useState({})
    const [users, setUsers] = useState();

    useEffect(() => {
        if (dataStore) { setIsLoadStore(true) }
        if (isLoadStore && !isLoadInfo) {
            const loadData = async () => {
                const allTransport = await getAllTransport();
                setTransportist(allTransport.transport);

                const allUserByStore = await getUsersByIdStore(dataStore.store.id_store)
                setUsers(allUserByStore.users);

                setIsLoadInfo(true);
                setInitialValues({
                    id_trip: generateUID(5),
                    aplicant: `(${user?.user_account?.user?.id_user}) - ${user?.user_account?.user?.first_name}, ${user?.user_account?.user?.last_name}`,
                    transport: `${selectedTransport.driver} - Placa: ${selectedTransport.licence_plate}`,
                    id_store: dataStore.store.id_store,
                    create_date: new Date(),
                })
            }

            loadData();
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dataStore,
        isLoadInfo,
        isLoadStore,
        selectedTransport,
        transportist]);

    const generateUID = (length) => {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        let uid = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            uid += characters.charAt(randomIndex);
        }
        return uid;
    };


    const handleSubmit = (values) => {
        // Aquí puedes manejar la lógica de envío del formulario
        console.log('Valores del formulario:', values);
    };

    const onResetForm = () => {
        setDataStore({});
        setSelectedTransport(0);
        setIsLoadStore(false);
        setIsLoadInfo(false);
    }

    return (
        <div className='w-full p-4 bg-white rounded-md shadow-md'>
            <div className='flex items-center gap-3'>
                <div className='w-5/6 mb-2'>
                    <SelectedTransport
                        setSelectedTransport={setSelectedTransport}
                    />
                </div>
                <div className='w-1/6'>
                    <SearchStore
                        setDataStore={setDataStore}
                    />
                </div>
            </div>
            <Divider className='my-5' />
            {/* Fin Busqueda */}
            {
                (isLoadStore && isLoadInfo) ? (
                    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                        <Form>
                            <div className='mb-3'>
                                <p className='italic'>1. Datos Generales de la solicitud</p>
                                <small className='ml-3 text-sky-500'> Primero crearemos los datos generales de la solcicitud antes de asignar los colaboradores que viajaran.</small>
                            </div>
                            <div className='grid md:flex gap-4 mb-2'>
                                <Field name="id_store">
                                    {({ field }) => (
                                        <Input className isDisabled label="ID Store" {...field} />
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
                            <div className='flex gap-4'>
                                <Button onClick={() => onResetForm()} color='danger' type="submit">Cancelar</Button>
                                <Button color='primary' type="submit">Guardar</Button>
                            </div>
                        </Form>
                    </Formik>
                ) : (
                    <p className='p-3 bg-gray-100 text-sm italic text-center rounded-md'>Favor seleccione una sucursal y un transportista</p>
                )
            }

        </div>
    )
}
