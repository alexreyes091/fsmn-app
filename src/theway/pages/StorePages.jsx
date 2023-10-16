import { IconAffiliateFilled } from '@tabler/icons-react'
import { SelectedUsers, SelectedStore } from '../components'
import { useState } from 'react'



export const StorePages = () => {
  const [selectedStore, setSelectedStore] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);


  return (
    <main className="container mx-auto pt-6">
      <div className="bg-gray-100 p-3 md:p-10 rounded-md">
        <div className='flex gap-5 items-center mb-10'>
          <IconAffiliateFilled className='text-orange-400' size={64} />
          <div>
            <h1 className='font-bold text-xl italic'>Asignacion de surcursales y colaboradores</h1>
            <p>Asigne los colaboradores a una o más sucursales según necesite.</p>
          </div>
        </div>
        {/* HEADER */}
        <div className='flex gap-5 items-center'>
          <div className="w-1/4 p-4">
            <SelectedUsers
              setSelectedUser={setSelectedUser}
            />
          </div>
          <div className="w-2/4 p-4">
            <SelectedStore
              setSelectedStore={setSelectedStore}
            />
          </div>
        </div>
      </div>
    </main>
  )
}
