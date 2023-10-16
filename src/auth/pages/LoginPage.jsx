import the_way_logo from '../../assets/the_way_logo.png'
import { FormLogin } from '../components/FormLogin'

export const LoginPage = () => {
    return (
        <main className="flex flex-row min-h-screen justify-center items-center bg-gradient-to-t from-cyan-500 to-blue-500">
            <div className="relative mx-auto w-full max-w-md bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:rounded-xl sm:px-10">
                <div className="w-full">
                    <div className="text-center">
                        <div className="flex justify-center items-center">
                            <img className="mr-5" src={the_way_logo} width={200} alt="imagen de la empresa the way" />
                        </div>
                        <h1 className="text-3xl font-semibold text-gray-900">Sign in</h1>
                        <p className="mt-2 text-gray-500">Accede a tu cuenta para comenzar.</p>
                    </div>
                    <div className="mt-5">
                        {/* FORM LOGIN */}
                        <FormLogin />
                    </div>
                </div>
            </div>
        </main>
    )
}
