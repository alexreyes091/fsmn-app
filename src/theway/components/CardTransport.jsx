import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
// Assets
import bus_image from '../../assets/bus_image.png'


// eslint-disable-next-line react/prop-types
export const CardTransport = ({ transport = {} }) => {

  return (
    <Card shadow="sm" isPressable onPress={() => console.log("item pressed")}>
      <CardBody className="overflow-visible p-0">
        <Image
          shadow="sm"
          radius="lg"
          width="100%"
          alt={transport.licence_plate}
          className="w-full object-cover h-[140px]"
          src={bus_image}
        />
      </CardBody>
      <CardFooter className="text-small justify-between ">
        <div>
          <b className="">Placa: {transport.licence_plate}</b>
        </div>
        <div className="flex-row">
          <p className="text-default-500">Tarifa (1km): L. {transport.rate}</p>
        </div>
      </CardFooter>
      <CardFooter className="text-small justify-between ">
        <b className="text-default-500 text-tiny"><span className="flex">Conductor:</span>{transport.driver}</b>
      </CardFooter>
    </Card>
  );
}
