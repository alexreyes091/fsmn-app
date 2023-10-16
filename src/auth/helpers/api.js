
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