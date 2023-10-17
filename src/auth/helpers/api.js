
const URL_BASE = 'http://127.0.0.1:8000'

// Buscamos la autorizacion del token
// const dataHeaders = (token) => {
//     const headers = new Headers({
//         'Authorization': 'Bearer ${token}'
//     })

//     return headers
// }
// ---------------------------------------------------------------------


// DATOS USUARIOS
// ---------------------------------------------------------------------
export const getAllUsers = async () => {
    const url = `${URL_BASE}/users`

    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error(`Error ${error}`);
    }
}

export const getUserById = async (id_user) => {
    const url = `${URL_BASE}/users/${id_user}`

    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error(`Error ${error}`);
    }
}

export const getDataUser = async (username, password) => {
    const url = `${URL_BASE}/users/login`

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        });

        if (response.ok) {
            const responseData = await response.json();
            return responseData;
        } else {
            throw new Error(`Error ${response.status}: ${response.statusText}`);
        }

    } catch (error) {
        console.error(error);
    }
}
// ---------------------------------------------------------------------


// DATOS TRANPORTSTAS
// ---------------------------------------------------------------------
export const getAllTransport = async () => {
    const url = `${URL_BASE}/transport`

    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error(`Error ${error}`);
    }

}

// DATOS SUCURSALES
// ---------------------------------------------------------------------
export const getAllSucursales = async () => {
    const url = `${URL_BASE}/stores`

    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error(`Error ${error}`);
    }

}

export const getStoresById = async (id_store) => {
    const url = `${URL_BASE}/stores/${id_store}`

    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error(`Error ${error}`);
    }
}

export const getStoresByIdUser = async (id_user) => {
    const url = `${URL_BASE}/stores/by_user_assing/${id_user}`
    
    try {
        const response = await fetch(url);
        const data = await response.json();
        
        return data[1];

    } catch (error) {
        throw new Error(`Error ${error}`);
    }
}

export const getUsersByIdStore = async (id_store) => {
    const url = `${URL_BASE}/stores/by_store_assing/${id_store}`
    
    try {
        const response = await fetch(url);
        const data = await response.json();
        
        return data[1];

    } catch (error) {
        throw new Error(`Error ${error}`);
    }
}

export const setAsociate = async (id_user, id_store, distance ) => {
    const url = `${URL_BASE}/stores/user_assing/`;

    const store_id = id_store.toString();
    const user_id = id_user.toString();

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id_store: store_id, 
                id_user: user_id,    
                distance: distance,
            })
        });

        if (response.ok) {
            return true;
        } else {
            console.log(`Error ${response.status}: ${response.statusText}`);
            return false;
        }
    } catch (error) {
        console.error(error);
        return false;
    }
}
