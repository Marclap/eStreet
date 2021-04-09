import { useSate } from 'next'
import Link from 'next/link'
export default function Formulario() {
    return (
        <>

            <div className="w-full max-w-6xl min-w-0 mx-auto px-6">
                <div className="flex mt-12 bg-gray-200 rounded-md shadow">
                    <div className="w-64 bg-gray-800 rounded-l-md border-r border-dashed border-gray-800">
                        <div className="flex justify-center items-center h-32 text-red-300 text-center font-semibold text-3xl italic">
                            eStreet
                        </div>
                        <div className="mt-8 border-t border-red-200">
                            <a
                                href="/registro"
                                className="block py-3 px-6 text-red-200 font-semibold border-b border-red-200"
                            >
                                Resgistrate
                            </a>
                            <a
                                href="#"
                                className="block py-3 px-6 text-red-200 font-semibold border-b border-red-200"
                            >
                                Consejos
                            </a>
                        </div>
                    </div>
                    <div className="flex-grow">
                        <div className="flex flex-col mx-40 mt-20">
                            <div className="flex items-center mb-4">
                                <label
                                    for="nombre"
                                    className="w-24 font-semibold text-gray-700"
                                >
                                    Nombre (s)
                                </label>
                                <input
                                    type="text"
                                    className="flex-grow border border-red-200 rounded py-1 px-3"
                                    placeholder="Nombres"
                                />
                            </div>

                            <div className="flex items-center mb-4">
                                <label
                                    for="apellidos"
                                    className="w-24 font-semibold text-gray-700"
                                >
                                    Apellidos
                                </label>
                                <input
                                    type="text"
                                    className="flex-grow border border-red-200 rounded py-1 px-3"
                                    placeholder="Apellidos"
                                />
                            </div>

                            <div className="flex items-center mb-4">
                                <label
                                    for="fecha_nacimiento"
                                    className="w-24 font-semibold text-gray-700"
                                >
                                    Fecha de nacimiento
                                </label>
                                <input
                                    type="text"
                                    className="flex-grow border border-red-200 rounded py-1 px-3"
                                    placeholder="Fecha de nacimiento"
                                />
                            </div>

                            <div className="flex items-center mb-4">
                                <label
                                    for="cedula"
                                    className="w-24 font-semibold text-gray-700"
                                >
                                    Cedúla
                                </label>
                                <input
                                    type="text"
                                    className="flex-grow border border-red-200 rounded py-1 px-3"
                                    placeholder="Cedúla"
                                />
                            </div>

                            <div className="flex items-center mb-4">
                                <label
                                    for="email"
                                    className="w-24 font-semibold text-gray-700"
                                >
                                    Email
                                </label>
                                <input
                                    type="text"
                                    className="flex-grow border border-red-200 rounded py-1 px-3"
                                    placeholder="Email"
                                />
                            </div>

                            <div className="flex items-center mb-4">
                                <label
                                    for="contrasena"
                                    className="w-24 font-semibold text-gray-700"
                                >
                                    Contraseña
                                </label>
                                <input
                                    type="text"
                                    className="flex-grow border border-red-200 rounded py-1 px-3"
                                    placeholder="Contraseña"
                                />
                            </div>

                            <div className="flex items-center mb-4">
                                <button className="py-1 px-4 bg-red-800 text-red-100 font-semibold hover:bg-red-900 hover:shadow border border-red-200 rounded mr-2">
                                    Guardar
                                </button>
                            </div>
                            
            <div className="bg-white min-h-screen flex flex-col">
                <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                    <div className="bg-primaryColor px-6 py-8 rounded shadow-md text-black w-full">
                        <h1 className="mb-8 text-3xl text-center">
                            Regístrate
                        </h1>
                        <input
                            type="text"
                            className="block border border-gray-400 w-full p-3 rounded mb-4"
                            name="firstName"
                            placeholder="Nombre"
                        />
                        <input
                            type="text"
                            className="block border border-gray-400 w-full p-3 rounded mb-4"
                            name="lastName"
                            placeholder="Apellidos"
                        />
                        <input
                            type="number"
                            className="block border border-gray-400 w-full p-3 rounded mb-4"
                            name="cedula"
                            placeholder="Cedula"
                        />
                        <input
                            type="email"
                            className="block border border-gray-400 w-full p-3 rounded mb-4"
                            name="email"
                            placeholder="Correo"
                        />
                        <input
                            type="password"
                            className="block border border-gray-400 w-full p-3 rounded mb-4"
                            name="password"
                            placeholder="Contraseña"
                        />
                        <input
                            type="password"
                            className="block border border-gray-400 w-full p-3 rounded mb-4"
                            name="c_password"
                            placeholder="Repita la contraseña"
                        />
                        <button
                            type="submit"
                            className="w-full text-center py-3 rounded bg-secundaryRed text-white hover:bg-primaryRed focus:outline-none my-1"
                        >
                            Crear cuenta
                        </button>
                    </div>
                    <div className="mt-6">
                        ¿Ya tienes una cuenta?
                        <div className="text-blue-500">
                            <Link href="/login">Inicia sesión</Link>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
