import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Button } from "@nextui-org/react";
import { IconMap } from '@tabler/icons-react';
import { useEffect, useState } from "react";
import { getAllSucursales } from "../../auth/helpers/api";

export const ListStores = () => {
  const [loadStores, setloadStores] = useState();

  useEffect(() => {
    const loadData = async () => {
      const response = await getAllSucursales();
      setloadStores(response.stores);
    }

    loadData();
  }, [])


  return (
    <Table aria-label="Example static collection table">
      <TableHeader>
        <TableColumn>ID SUCURSAL</TableColumn>
        <TableColumn>DIRECCION</TableColumn>
        <TableColumn>COORDENADAS</TableColumn>
        <TableColumn>VER</TableColumn>
      </TableHeader>
      <TableBody>
        {loadStores ? loadStores.map((row) => (
          <TableRow key={row.id_store}>
            <TableCell>#{row.id_store}</TableCell>
            <TableCell>{row.adress}</TableCell>
            <TableCell>{row.coordinate}</TableCell>
            <TableCell>
              <Button isIconOnly className="text-red-400" aria-label="Like">
                <IconMap />
              </Button>
            </TableCell>
          </TableRow>
        )) : null}
      </TableBody>
    </Table>
  )
}
