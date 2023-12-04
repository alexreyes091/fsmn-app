
import { useState } from "react";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, RadioGroup, Radio} from "@nextui-org/react";

const colors = ["default", "primary", "secondary", "success", "warning", "danger"];

// eslint-disable-next-line react/prop-types
export const TabListTrips = ({trips}) => {

    console.log(trips);

  return (
    <div className="flex flex-col gap-3">
      <Table 
        color='secondary'
        selectionMode="single" 
        defaultSelectedKeys={["2"]} 
        aria-label="Example static collection table"
      >
        <TableHeader>
          <TableColumn>ID VIAJE</TableColumn>
          <TableColumn>SOLICITANTE</TableColumn>
          <TableColumn>SUCURSAL</TableColumn>
          <TableColumn>TRANSPORTISTA</TableColumn>
          <TableColumn>FECHA</TableColumn>
          <TableColumn>ACCIONES</TableColumn>
        </TableHeader>
        <TableBody>
          {
            // eslint-disable-next-line react/prop-types
            trips && trips.map((trip) => (
              <TableRow key={trip.id_trip}>
                <TableCell>{trip.id_trip}</TableCell>
                <TableCell>{trip.applicant}</TableCell>
                <TableCell>{trip.id_store}</TableCell>
                <TableCell>{trip.transport}</TableCell>
                <TableCell>{trip.created_date}</TableCell>
                <TableCell>{trip.created_date}</TableCell>
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
      {/* <RadioGroup 
        label="Selection color"
        orientation="horizontal"
        value={selectedColor} 
        onValueChange={setSelectedColor}
      >
        {colors.map((color) => (
          <Radio
            key={color}
            color={color}  
            value={color}
            className="capitalize"
          >
            {color}
          </Radio>  
        ))}
      </RadioGroup> */}
    </div>
  );
}
