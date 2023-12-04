import { useState } from "react";
import { Button, CheckboxGroup, Checkbox, User } from "@nextui-org/react";
import { deleteAllTripUser, setTripUser } from "../../auth/helpers/api";
// Tostify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


// eslint-disable-next-line react/prop-types
export const FormikTripUsers = ({ usersByStore, id_store, id_trip }) => {

  const [groupSelected, setGroupSelected] = useState([]);
  const [listUsersSelected, setListUsersSelected] = useState([]);

  const toastSuccess = () => toast.success(`Empleados asociados correctamente`, {
    position: "bottom-left",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
});

const toastError = () => toast.error(`Error al asociar los empleados del viaje`, {
    position: "bottom-left",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
});

  const onUserSelected = () => {
    // eslint-disable-next-line react/prop-types
    const users = usersByStore.filter((user) => groupSelected.includes(user.id_user));
    setListUsersSelected(users);
  }

  const onUserSave = () => {
    try {
      deleteAllTripUser(id_trip);
      listUsersSelected.forEach(async (user) => {
        await setTripUser({
          id_trip,
          id_user: user.id_user
        })
        toastSuccess();
      });

    } catch (error) {
      toastError();
      throw new Error(error);
    }
  }

  return (
    <div className='sm:flex w-full gap-4'>
      <ToastContainer />
      <div className="sm:w-3/6 p-4 bg-white rounded-md shadow-md">
        <p className="italic">Listado de empleados disponibles:</p>
        <p className="italic text-sm text-green-500">Sucursal {id_store}</p>

        <hr />
        <CheckboxGroup
          className="mt-4"
          label="Selecione uno o varios empleados"
          value={groupSelected}
          onChange={setGroupSelected}
        >
          {
            // eslint-disable-next-line react/prop-types
            usersByStore.map((user) => (
              <Checkbox
                key={user.id_user}
                value={user.id_user}
              >
                <User
                  avatarProps={{ size: "md", src: user.avatar }}
                  description={user.role}
                  name={user.first_name + ' ' + user.last_name}
                />
              </Checkbox>
            ))
          }
        </CheckboxGroup>
      </div>

      <div className="sm:w-1/6">
        <Button className="w-full mb-3" onClick={onUserSelected} color='secondary' type="submit">Actualizar</Button>
        <Button className="w-full mb-3" onClick={onUserSave} color='primary' type="submit">Guardar</Button>
      </div>

      <div className="sm:w-3/6 p-4 bg-white rounded-md shadow-md">
        <p className="italic">Empleados seleccionados</p>
        <p className="italic text-sm text-green-500">#{id_trip}</p>

        <hr />
        <div className="pt-3">
          {
            // eslint-disable-next-line react/prop-types
            listUsersSelected.map((user) => (
              <div key={user.id_user}>
                <User
                  avatarProps={{ size: "md", src: user.avatar }}
                  description={user.role}
                  name={user.first_name + ' ' + user.last_name}
                />
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}
