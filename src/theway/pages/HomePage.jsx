import { Link } from "@nextui-org/react";
import { IconUserPin, IconBuildingStore, IconMap } from '@tabler/icons-react'
import { useNavigate } from "react-router-dom";


export const HomePage = () => {
  const navigate = useNavigate();

  return (
    <main className="container mx-auto animate__animated animate__fadeI">
      <div className="bg-gray-100 mt-5 py-14 sm:py-22 rounded-lg">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">The Way</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Bienvenidos</p>
            <p className="mt-6 text-lg leading-8 text-gray-600">Organízate y mantén un registro de los viajes de cada sucursal. Además, puedes anticipar las solicitudes de viaje, con una lista de los colaboradores asignados a tus sucursales.</p>
          </div>
          <div className="mx-auto mt-6 max-w-2xl sm:mt-10 lg:mt-14 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-sky-600">
                    <IconUserPin className='text-white' />
                  </div>
                  Asignar colaboradores
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">Define que usuarios estaran asignados a tus sucursales.</dd>
                <Link onClick={() => navigate('/sucursales')} className="flex justify-end cursor-pointer" size="sm">Comenzar...</Link>
              </div>
              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-sky-600">
                    <IconBuildingStore className='text-white' />
                  </div>
                  Listado de sucursales
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">Consulta un listado de sucursales disponibles y verifica su ubicación.</dd>
                <Link onClick={() => navigate('/listado-sucursales')} className="flex justify-end cursor-pointer" size="sm">Comenzar...</Link>
              </div>
              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-sky-600">
                    <IconMap className='text-white' />
                  </div>
                  Solicitud de viajes
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">Gestione las solicitudes de viajes y asigne los usuarios que requieren transporte.</dd>
                <Link onClick={() => navigate('/viajes')} className="flex justify-end cursor-pointer" size="sm">Comenzar...</Link>
              </div>
              {/* <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    
                  </div>
                  Advanced security
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.</dd>
              </div> */}
            </dl>
          </div>
        </div>
      </div>
    </main>
  )
}
