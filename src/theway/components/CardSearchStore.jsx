import { Card, CardBody } from "@nextui-org/react";
import { IconBuildingStore } from '@tabler/icons-react';
// eslint-disable-next-line react/prop-types
export const CardSearchStore = ({ store = {} }) => {

    return (

        <Card className="py-4">
            <CardBody className="flex pb-0 pt-2 px-4 flex-row items-start">
                <div className="w-1/3 p-2 ">
                    <IconBuildingStore className='text-sky-400' size={64} />
                </div>
                <div className="flex-row pb-0 pt-2 px-4 row items-start">
                    <p className="text-default-500 text-xs">ID Sucursal: {store.id_store}</p>
                    <p className="text-md font-bold">{store.name}</p>
                    <small className="text-default-500 capitalize">{store.adress}</small>
                </div>
            </CardBody>
        </Card>
    )
}
