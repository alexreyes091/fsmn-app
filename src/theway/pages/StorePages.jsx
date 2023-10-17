import { useEffect, useState } from 'react'
import { IconBuildingStore, IconCirclesRelation } from '@tabler/icons-react'
import { Divider } from "@nextui-org/react";
import { Card, CardHeader, CardBody, CardFooter, Avatar } from "@nextui-org/react";
// import { useState } from 'react'
import { SearchUser } from '../components/SearchUser'
import { SearchStore } from '../components/SearchStore'
import { getDistance } from '../../auth/helpers/apiMapBox';
import { AddStoreUsers } from '../components/AddStoreUsers';

export const StorePages = () => {
  const [dataUser, setDataUser] = useState();
  const [dataStore, setDataStore] = useState();
  const [isLoadUser, setIsLoadUser] = useState(false);
  const [isLoadStore, setIsLoadStore] = useState(false);
  const [distance, setDistance] = useState(0)

  useEffect(() => {
    if (dataUser) { setIsLoadUser(true) }
    if (dataStore) { setIsLoadStore(true) }

    if (isLoadStore && isLoadUser) {
      const onCalculateDistance = () => {
        const fristPoint = dataUser.user.user_adress[0].coordinate;
        const secondPoint = dataStore.store.coordinate;

        const response = getDistance(fristPoint, secondPoint);
        setDistance(response.toFixed(2))
      }
      onCalculateDistance();
    }
  }, [dataUser, dataStore, isLoadStore, isLoadUser])


  return (
    <main className="container mx-auto pt-6 animate__animated animate__fadeIn">
      <div className="bg-gray-100 p-3 md:p-10 rounded-md">
        <div className='flex gap-5 items-center mb-10'>
          <IconCirclesRelation className='text-purple-400' size={64} />
          <div>
            <h1 className='font-bold text-xl italic'>Asignacion de surcursales y colaboradores</h1>
            <p>Asigne los colaboradores a una o más sucursales según necesite.</p>
          </div>
        </div>
        {/* HEADER */}

        {/* Divider */}
        <h1 className='text-lg font-bold mt-2'>Pasos a realizar:</h1>
        <Divider />
        {/* Divider */}
        <div className='flex gap-10 mt-5'>

          <div className="md:w-1/2 md:p-4 p-2">
            <Card className="py-4">
              <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <span className='flex font-bold text-gray-600'>
                  1. Realice la busqueda del usuario:
                </span>
              </CardHeader>
              <Divider />
              <CardBody className="overflow-visible py-2">
                <p>
                  La búsqueda de usuarios se centra en el uso del ID de empleado.
                  Es esencial introducir el ID para llevar a cabo la búsqueda y,
                  posteriormente, asignarlo a una sucursal.
                </p>
              </CardBody>
              <CardFooter>
                <SearchUser
                  setDataUser={setDataUser}
                />
                {/* Card User */}
              </CardFooter>
            </Card>
            {/* Card */}
          </div>
          {/* STEPS */}
          <div className="md:w-1/2 md:p-4 p-2">
            <Card className="py-4">
              <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <span className='flex font-bold text-gray-600'>
                  2. Realice la busqueda de una sucursal:
                </span>
              </CardHeader>
              <Divider />
              <CardBody className="overflow-visible py-2">
                <p>
                  La búsqueda de sucursales se centra en el uso del ID designado.
                  Tendra que introducir el ID para llevar a cabo la búsqueda y,
                  posteriormente, obtener el detalle de la sucursal.
                </p>
              </CardBody>
              <CardFooter>
                <SearchStore
                  setDataStore={setDataStore}
                />
                {/* Card Store */}
              </CardFooter>
            </Card>
          </div>
        </div>
        {/* Divider */}
        <h1 className='text-lg font-bold mt-4'>Vista previa:</h1>
        <Divider />
        {/* Divider */}
        <div className='md:flex '>
          <div className="md:w-2/5 md:p-3 p-2">
            {
              isLoadUser ? (
                <Card>
                  <CardHeader className="justify-between">
                    <div className="flex gap-5">
                      <Avatar isBordered radius="full" size="md" src={dataUser.user.avatar} />
                      <div className="flex flex-col gap-1 items-start justify-center">
                        <h4 className="text-small font-semibold leading-none text-default-600">{dataUser.user.first_name}</h4>
                        <h5 className="text-small tracking-tight text-default-400 capitalize">{dataUser.user.role}</h5>
                      </div>
                    </div>
                  </CardHeader>
                  <Divider />
                  <CardBody>
                    <div className="flex flex-col gap-1 items-start justify-center">
                      <p className="text-small font-semibold leading-none text-default-600 mb-5">
                        <span className='flex mb-2'>Direccion:</span>
                        {dataUser.user.user_adress[0].description}
                      </p>
                      <p className="text-small leading-none text-default-600 italic">
                        <span className='flex mb-2'>Ubicacion geografica:</span>
                        {dataUser.user.user_adress[0].coordinate}
                      </p>
                    </div>
                  </CardBody>
                </Card>
              ) : (
                <p className='bg-white p-5 text-center italic text-gray-500' >
                  Sin datos de usuario
                </p>
              )
            }
          </div>
          {/* Primer Columna */}

          <div className="md:w-1/5 md:p-3 p-2">
            <Card>
              <div className='py-6'>
                <h4 className="text-small font-semibold leading-none text-default-600 text-center">Distancia</h4>
              </div>
              <Divider />
              <CardBody>
                <p className='font-bold text-center'>{distance} km</p>
                <small className='text-center italic'>Kilometros de distancia.</small>
              </CardBody>
            </Card>
          </div>
          {/* Segunda Columna */}

          <div className="md:w-2/5 md:p-3 p-2">
            {
              isLoadStore ? (
                <Card>
                  <CardHeader className="justify-between">
                    <div className="flex gap-5">
                      <IconBuildingStore size={45} className='p-2 text-red-400 bg-gray-200 rounded-full' />
                      <div className="flex flex-col gap-1 items-start justify-center">
                        <h4 className="text-small font-semibold leading-none text-default-600">{dataStore.store.name}</h4>
                        <h5 className="text-small tracking-tight text-default-400">Sucursal: #{dataStore.store.id_store}</h5>
                      </div>
                    </div>
                  </CardHeader>
                  <Divider />
                  <CardBody>
                    <div className="flex flex-col gap-1 items-start justify-center">
                      <p className="text-small font-semibold leading-none text-default-600 mb-5">
                        <span className='flex mb-2'>Direccion:</span>
                        {dataStore.store.adress}
                      </p>
                      <p className="text-small leading-none text-default-600 italic">
                        <span className='flex mb-2'>Ubicacion geografica:</span>
                        {dataStore.store.coordinate}
                      </p>
                    </div>
                  </CardBody>
                </Card>
              ) : (
                <p className='bg-white p-5 text-center italic text-gray-500'  >
                  Sin datos de sucursal
                </p>
              )
            }
          </div>
          {/* Tercera Columna */}
        </div>
        {/* Divider */}
        <Divider className='my-5'/>
        {/* Divider */}
        <div className='flex justify-end'>
          <AddStoreUsers 
            id_user={dataUser?.user?.id_user}
            id_store={dataStore?.store?.id_store}
            distance={distance}
            isLoadUser={isLoadUser}
            isLoadStore={isLoadStore}
          />
        </div>
      </div>
    </main>
  )
}
