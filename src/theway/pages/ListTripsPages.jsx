
import { useEffect, useState } from 'react';
import { IconListDetails } from '@tabler/icons-react';
// NextUi
import { Divider } from "@nextui-org/react";
// Componentes
import { TabListTrips } from '../components';
// Helpers
import { getAllTrips } from '../../auth/helpers/api';

export const ListTripsPages = () => {

    const [trips, setTrips] = useState();

    const getTrips = async () => {
        const resp = await getAllTrips();
        setTrips(resp);
    }
    
    useEffect(() => {
        getTrips();
    }, [])
    

    return (
        <main className="container mx-auto pt-6 animate__animated animate__fadeIn">
            <div className="bg-gray-100 p-3 md:p-10 rounded-md">
                <div className='flex gap-5 items-center mb-10'>
                    <IconListDetails className='text-purple-400' size={64} />
                    <div>
                        <h1 className='font-bold text-xl italic'>Listado de viajes registrados</h1>
                        <p>Filtre la busqueda de sus viajes, por sucursal, id de viaje o por fecha</p>
                    </div>
                </div>
                <Divider className='mb-5' />
                <div>
                    <TabListTrips 
                        trips={trips}
                    />
                </div>
            </div>
        </main>
    )
}
