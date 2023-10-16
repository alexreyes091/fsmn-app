import { IconNotes } from '@tabler/icons-react'
import { ListStores } from '../components/ListStores'

export const StoreListPage = () => {
    return (
        <main className="container mx-auto pt-6">
            <div className="bg-gray-100 p-3 md:p-10 rounded-md">
                <div className='flex gap-5 items-center mb-10'>
                    <IconNotes className='text-red-400' size={64} />
                    <div>
                        <h1 className='font-bold text-xl italic'>Listado de Sucursales</h1>
                        <p>Consulte el detalle de las sucursales disponibles</p>
                    </div>
                </div>
                {/* HEADER */}
                <div className='grid gap-5 items-center'>
                    <div className="flex-1 p-4">
                        <ListStores />
                    </div>
                </div>
            </div>
        </main>
    )
}
