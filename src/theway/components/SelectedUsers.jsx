import { Select, SelectItem, Avatar } from "@nextui-org/react";
import { getAllUsers } from '../../auth/helpers/api';
import { useEffect, useState } from "react";

export const SelectedUsers = () => {

    const [loading, setLoading] = useState(true);
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);

    useEffect(() => {
        const loadData = async () => {
            const response = await getAllUsers();
            const allUsers = response.users;
            // Ordenamiento de lista por nombres
            allUsers.sort((a, b) => a.first_name.localeCompare(b.first_name));
            setUsers(allUsers);
            setLoading(false);
        };

        loadData();
    }, [])

    const onUserSelect = (selectedValue) => {
        const selectedUser = users.find(user => `${user.first_name}, ${user.last_name}` === selectedValue);
        setSelectedUser(selectedUser);
    }

    return (
        <>
            {loading ? (
                <p>Loading users...</p>
            ) : (
                <Select
                    isRequired
                    color="warning"
                    variant="bordered"
                    label="Usuario"
                    placeholder="Seleccione un empleado"
                    onChange={onUserSelect}
                    className="max-w-xs"
                >
                    {users.map((user) => (
                        <SelectItem
                            key={user.id_user}
                            value={`${user.first_name}, ${user.last_name}`}
                            startContent={<Avatar alt={user.first_name} className="w-6 h-6" src={user.avatar} />}
                        >
                            {`${user.first_name}, ${user.last_name}`}
                        </SelectItem>
                    ))}
                </Select>
            )}
        </>
    )
}
