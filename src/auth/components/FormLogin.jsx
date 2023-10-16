import { Formik, Field, ErrorMessage, Form } from 'formik';
import { Input, Button } from "@nextui-org/react";
import * as Yup from 'yup';
// Tostify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// Componentes
import { useStore } from '../Context/Store';
// Helpers
import { getDataUser } from '../helpers/api';
import { useNavigate } from 'react-router-dom';

export const FormLogin = () => {
    const { setUser, setLogged } = useStore();
    const navigate = useNavigate();
    // const [user, setUser] = useState({});

    // TODO: Separar esto en un hook
    const notify = () => toast.error('Nombre de usuario y contrasena son incorrectos.', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });
    // Definir el estado inicial para los valores del formulario
    const initialValues = {
        username: '',
        password: '',
    };

    // Esquema de validación
    const validationSchema = Yup.object().shape({
        username: Yup.string().required('** El nombre de usuario es obligatorio.'),
        password: Yup.string().required('** La contraseña es obligatoria.'),
    });

    const onSubmit = async (userCredentials, { resetForm }) => {
        const { username, password } = userCredentials;
        const dataUser = await getDataUser(username, password)

        if (!dataUser) {
            notify()
        } else {
            // ! Hay que validar el token de acceso
            setUser(dataUser)
            setLogged(true)
            localStorage.setItem('user', JSON.stringify(dataUser))
            localStorage.setItem('isLogged', JSON.stringify(true))
            resetForm();
            navigate('/')
        }
    };

    return (
        <>
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            {() => (
                <Form>
                    <div className="flex w-full flex-col md:flex-nowrap gap-4">
                        <div>
                            <label htmlFor="username">Usuario</label>
                            <Field
                                type="text"
                                id="username"
                                name="username"
                                as={Input}
                                placeholder="Ingrese su nombre de usuario"
                            />
                            <ErrorMessage className='text-red-700 italic' name="username" component="div" />
                        </div>

                        <div>
                            <label htmlFor="password">Contraseña</label>
                            <Field
                                type="password"
                                id="password"
                                name="password"
                                as={Input}
                                placeholder="********"
                            />
                            <ErrorMessage className='text-red-700 italic' name="password" component="div" />
                        </div>
                    </div>

                    <div className="my-6">
                        <Button type="submit" color="primary" className="w-full shadow-lg px-3 py-4 focus:bg-gray-600 focus:outline-none">
                            Ingresar
                        </Button>
                    </div>
                </Form>
            )}
        </Formik>
        <ToastContainer />
        </>
    );
};
