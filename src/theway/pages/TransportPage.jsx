import { IconBus } from '@tabler/icons-react';
import { Divider } from '@nextui-org/react';

import { getAllTransport } from '../../auth/helpers/api';
import { useEffect, useState } from 'react';
import { CardTransport } from '../components/CardTransport';

export const TransportPage = () => {
    const [transports, setTransports] = useState();
    const [isLoadTransport, setIsLoadTransport] = useState(false)

    useEffect(() => {
        const getTransport = async () => {
            const transport = await getAllTransport();
            if (transport) {
                setTransports(transport.transport);
                setIsLoadTransport(true);
            }
        }

        getTransport();
    }, [])


    return (
        <main className="container mx-auto pt-6 animate__animated animate__fadeIn">
            <div className="bg-gray-100 p-3 md:p-10 rounded-md">
                <div className='flex gap-5 items-center mb-10'>
                    <IconBus className='text-purple-400' size={64} />
                    <div>
                        <h1 className='font-bold text-xl italic'>Trapostistas y tarifas disponibles</h1>
                        <p>Consulte los transportistas disponibles y verifique las tarifas asociadas a ellos por kilometro.</p>
                    </div>
                </div>
                {/* HEADER */}

                {/* Divider */}
                <h1 className='text-lg font-bold mt-2'>Disponibles:</h1>
                <Divider className='mb-5' />
                <div className='grid grid-cols-3 gap-4'>
                    {
                        isLoadTransport ? (

                            transports.map((transport) => (
                                <CardTransport
                                    key={transport.id}
                                    transport={transport}
                                />
                            ))
                        ) : (
                            <p className='flex justify-center bg-white p-5 italic'>Sin datos de transportistas</p>
                        )
                    }
                </div>
            </div>
        </main>
    )
}
