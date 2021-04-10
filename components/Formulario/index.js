import { useSate } from 'next'
import Link from 'next/link'
export default function Formulario() {
    return (
        <>
            <div className="w-full ">
                <div className="flex  bg-gray-200  shadow">
                    <div className="w-64 bg-gray-800 border-gray-800">
                        <div className="flex justify-center items-center h-32 text-red-300 text-center font-semibold text-3xl italic">
                            eStreet
                        </div>
                        <div className="mt-8 border-t border-red-200">
                            <a
                                href="/login"
                                class="block py-3 px-6 text-red-700 font-semibold border-b border-red-200"
                            >
                                Login
                            </a>
                            <a
                                href="#"
                                className="block py-3 px-6 text-red-700 font-semibold border-b border-red-200"
                            >
                                Consejos
                            </a>
                        </div>
                    </div>
                    <div className="flex-grow">
                        <div className="flex flex-col mx-40 mt-20">
                            <div className="flex items-center mb-4">
                                <label className="w-24 font-semibold text-gray-700">
                                    Nombres (S)
                                </label>
                                <input
                                    type="text"
                                    className="flex-grow border border-red-200 rounded py-1 px-3"
                                    placeholder="Nombres"
                                />
                            </div>
                            <div className="flex items-center mb-4">
                                <label className="w-24 font-semibold text-gray-700">
                                    Apellidos
                                </label>
                                <input
                                    type="text"
                                    className="flex-grow border border-red-200 rounded py-1 px-3"
                                    placeholder="Apellidos"
                                />
                            </div>
                            <div className="flex items-center mb-4">
                                <label className="w-24 font-semibold text-gray-700">
                                    Fecha de nacimiento
                                </label>
                                <input
                                    type="text"
                                    className="flex-grow border border-red-200 rounded py-1 px-3"
                                    placeholder="Fecha de nacimiento"
                                />
                            </div>
                            <div className="flex items-center mb-4">
                                <label className="w-24 font-semibold text-gray-700">
                                    Cedúla
                                </label>
                                <input
                                    type="text"
                                    className="flex-grow border border-red-200 rounded py-1 px-3"
                                    placeholder="Cedúla"
                                />
                            </div>
                            <div className="flex items-center mb-4">
                                <label className="w-24 font-semibold text-gray-700">
                                    Email
                                </label>
                                <input
                                    type="text"
                                    className="flex-grow border border-red-200 rounded py-1 px-3"
                                    placeholder="Email"
                                />
                            </div>
                            <div className="flex items-center mb-4">
                                <label className="w-24 font-semibold text-gray-700">
                                    Contraseña
                                </label>
                                <input
                                    type="text"
                                    className="flex-grow border border-red-200 rounded py-1 px-3"
                                    placeholder="Contraseña"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center mb-4">
                        <button className="py-1 px-4 bg-red-800 text-red-100 font-semibold hover:bg-red-900 hover:shadow border border-red-200 rounded mr-2">
                            Entrar
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
