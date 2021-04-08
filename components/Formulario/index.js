import { useSate } from 'next'
import Link from 'next/link'
export default function Formulario() {
    return (
        <>
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
            {/* <div className="bg-secundaryRed p-4 m-2">¡Crea tu cuenta!</div>
            <form className="row">
                <div className="col-md-3">
                    <input placeholder="Ingrese su nombre"></input>
                </div>
                <div className="col-md-3">
                    <input placeholder="Ingrese su apellido"></input>
                </div>
                <div className="col-md-3">
                    <input placeholder="Fecha de nacimiento"></input>
                </div>
                <div className="col-md-3">
                    <input placeholder="Ingrese su cedula"></input>
                </div>
                <div className="col-md-3">
                    <input placeholder="Ingrese correo electrónico"></input>
                </div>
                <div className="col-md-3">
                    <input placeholder="Ingrese contraseña"></input>
                </div>
                <div className="col-md-3">
                    <button>Guardar</button>
                </div>
            </form> */}
        </>
    )
}
