import { Card, CardBody, Image } from "@nextui-org/react";
import { IconUserSquareRounded } from "@tabler/icons-react";

// eslint-disable-next-line react/prop-types
export const CardSearchUser = ({ user = {} }) => {
    return (

        <Card className="py-4">
            <CardBody className="flex pb-0 pt-2 px-4 flex-row items-start">
                <div className="w-1/3 p-2 ">
                    {
                        !user.id ? (
                            <IconUserSquareRounded className='text-gray-400 mx-7 my-4' size={64} />
                        ) : (

                            <Image
                                alt="Card background"
                                className="object-cover rounded-xl"
                                src={user.avatar}
                                width={100}
                            />
                        )
                    }
                </div>

                <div className="flex-row pb-0 pt-2 px-4 row items-start">
                    <p className="text-default-500 text-xs">{user.id_user}</p>
                    <hr /><br />
                    <p className="text-md font-bold">{user.first_name}</p>
                    <h4 className="font-bold text-tiny">{user.last_name}</h4>
                    <small className="text-default-500 capitalize">{user.role}</small>
                </div>
            </CardBody>
        </Card>
    )
}
