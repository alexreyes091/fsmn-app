import {create} from 'zustand';

const init = () => {
  // Intentar obtener datos del localStorage
  const storedUser = JSON.parse(localStorage.getItem('user'));
  const storedLogged = JSON.parse(localStorage.getItem('logged'));

  // Definir valores iniciales basados en los datos del localStorage
  return {
    user: storedUser || {},
    logged: storedLogged || false,
  };
}

export const useStore = create((set)=> ({
  ...init(),
  setUser: (newUser) => set({ user: newUser }),
  setLogged: (logged) => set({logged: logged}),
}));
