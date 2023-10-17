
import { IconRoad, IconUser } from '@tabler/icons-react';
import { Divider } from '@nextui-org/react';
import { FormikTrip, FormikTripUsers } from '../components';

export const TripsPages = () => {
  return (
    <>
      <main className="container mx-auto pt-6 animate__animated animate__fadeIn">
        <div className="bg-gray-100 p-3 md:p-10 rounded-md">
          <div className='flex gap-5 items-center mb-10'>
            <IconRoad className='text-purple-400' size={64} />
            <div>
              <h1 className='font-bold text-xl italic'>Registra un viaje</h1>
              <p>1. Registre una solcitud de viaje por cada sucursal y asigne a los colaboradores asociados a ella.</p>
            </div>
          </div>
          {/* HEADER */}

          {/* Divider */}
          {/* <h1 className='text-lg font-bold mt-2'>Solcitud:</h1> */}
          <Divider className='mb-5' />
          <div>
            <FormikTrip />
            {/* <p className='flex justify-center bg-white p-5 italic'>Sin datos de transportistas</p> */}
          </div>
        </div>
      </main>
      <main className="container mx-auto pt-6 animate__animated animate__fadeIn">
      <div className="bg-gray-100 p-3 md:p-10 rounded-md">
        <div className='flex gap-5 items-center mb-10'>
          <IconUser className='text-sky-400' size={64} />
          <div>
            <h1 className='font-bold text-xl italic'>Registra Lista de Usuarios</h1>
            <p>2. Registre una solcitud de viaje por cada sucursal y asigne a los colaboradores asociados a ella.</p>
          </div>
        </div>
        {/* HEADER */}

        {/* Divider */}
        {/* <h1 className='text-lg font-bold mt-2'>Solcitud:</h1> */}
        <Divider className='mb-5' />
        <div>
          <FormikTripUsers/>
          {/* <p className='flex justify-center bg-white p-5 italic'>Sin datos de transportistas</p> */}
        </div>
      </div>
    </main>
    </>
  )
}
