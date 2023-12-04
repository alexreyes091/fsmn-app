
import { useEffect, useState } from 'react';
import { IconRoad, IconUser } from '@tabler/icons-react';
// NextUi
import {Divider} from "@nextui-org/react";
// Componentes
import { FormikTrip, FormikTripUsers } from '../components';
// Helpers
import { getUsersByIdStore } from "../../auth/helpers/api";

export const TripsPages = () => {

  const [dataTrip, setDataTrip] = useState();
  const [usersByStore, setUsersByStore] = useState();

  useEffect(() => {
    const getUsersByStore = async () => {
      const resp = await getUsersByIdStore(dataTrip.id_store)
      setUsersByStore(resp[1].users);
    }

    dataTrip && getUsersByStore();

  }, [dataTrip])

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
            <FormikTrip 
              setDataTrip={setDataTrip}
            />
          </div>
        </div>
      </main>
      {
        (usersByStore) && (
          <main className="container mx-auto pt-6 animate__animated animate__fadeIn">
            <div className="bg-gray-100 p-3 md:p-10 rounded-md">
              <div className='flex gap-5 items-center mb-10'>
                <IconUser className='text-purple-400' size={64} />
                <div>
                  <h1 className='font-bold text-xl italic'>Asigna los colaboradores al viaje</h1>
                  <p>2. Asigne a los colaboradores que viajaran a la sucursal seleccionada.</p>
                </div>
              </div>
              {/* HEADER */}
              <Divider className='mb-5' />
              <div>
                <FormikTripUsers 
                  usersByStore={usersByStore}
                  id_store={dataTrip.id_store}
                  id_trip={dataTrip.id_trip}
                />
              </div>
            </div>
          </main>
        )
      }
    </>
  )
}
