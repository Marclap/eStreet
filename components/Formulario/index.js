import { useSate } from 'next'
import Link from 'next/link'
export default function Formulario() {
    return (
        <>
            {/* component */}
            <div className="w-full max-w-6xl min-w-0 mx-auto px-6">
                <div className="flex mt-12 bg-white rounded-md shadow">
                    <div className="w-64 bg-red-100 rounded-l-md border-r border-dashed border-red-200">
                        <div className="flex justify-center items-center h-32 text-red-700 text-center font-semibold text-3xl italic">
                            eStreet
                        </div>
                        <div className="mt-8 border-t border-red-200">
                            <a
                                href="/login"
                                className="block py-3 px-6 text-red-700 font-semibold border-b border-red-200"
                            >
                                Iniciar Sesion.
                            </a>
                            <a
                                href="/registro"
                                className="block py-3 px-6 bg-red-900 text-red-100 font-semibold border-b border-red-200"
                            >
                                Registrate
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
                                <label
                                    className="w-24 font-semibold text-gray-700"
                                >
                                    Nombres (S)
                                </label>
                                <input
                                    type="text"
                                    className="flex-grow border border-red-200 rounded py-1 px-3"
                                    placeholder="Nombre"
                                />
                            </div>
                            <div className="flex items-center mb-4">
                                <label
                                    className="w-24 font-semibold text-gray-700"
                                >
                                    Apellidos
                                </label>
                                <input
                                    type="text"
                                    className="flex-grow border border-red-200 rounded py-1 px-3"
                                    placeholder="Username"
                                />
                            </div>
                            <div className="flex items-center mb-4">
                                <label
                                    htmlFor="password"
                                    className="w-24 font-semibold text-gray-700"
                                >
                                    Password
                                </label>
                                <input
                                    type="password"
                                    className="flex-grow border border-red-200 rounded py-1 px-3"
                                    placeholder="Password"
                                />
                            </div>
                            <div className="flex items-center mb-4">
                                <textarea
                                    name="description"
                                    className="flex-grow border border-red-200 rounded py-1 px-3"
                                    id="description"
                                    rows={8}
                                    defaultValue={''}
                                />
                            </div>
                            <div className="flex items-center mb-4">
                                <button className="py-1 px-4 bg-red-800 text-red-100 font-semibold hover:bg-red-900 hover:shadow border border-red-200 rounded mr-2">
                                    Submit
                                </button>
                                <button className="py-1 px-4 bg-white text-red-700 font-semibold hover:shadow border border-red-200 rounded">
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
