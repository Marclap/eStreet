import { useSate } from 'next'
export default function Formulario() {
    return (
        <>
            {/* Contenedor */}
            <div className="container mx-auto">
                <div className="flex justify-center px-6 my-12">
                    {/* Row */}
                    <div className="xl:w-3/4 lg:w-11/12 flex justify-center">
                        {/* Col */}
                        {/* <div
                            className="h-auto bg-primaryColor hidden lg:block lg::w-5/12 bg-cover rounded-l-lg"
                            style={{
                                backgroundImage:
                                    "url('https://source.unsplash.com/Mv9hjnEUHR4/600x800')",
                            }}
                        ></div> */}
                        {/* Col */}
                        <div className="w-full lg:w-7/12 bg-primaryColor p-5 rounded-lg lg:rounded-l-none">
                            <h3 className="pt-4 text-2xl text-center">
                                ¡Crea tu cuenta!
                            </h3>
                            <form className="px-8 pt-6 pb-8 mb-4 bg-primaryColor rounded">
                                <div className="mb-4 md:flex md:justify-between">
                                    <div className="mb-4 md:mr-2 md:mb-0">
                                        <label className="block mb-2 text-sm font-bold text-gray-700">
                                            Nombre
                                        </label>
                                        <input
                                            className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                            id="firstName"
                                            type="text"
                                            placeholder="Nombre"
                                        />
                                    </div>
                                    <div className="md:ml-2">
                                        <label className="block mb-2 text-sm font-bold text-gray-700">
                                            Apellidos
                                        </label>
                                        <input
                                            className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                            id="lastName"
                                            type="text"
                                            placeholder="Apellidos"
                                        />
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <label className="block mb-2 text-sm font-bold text-gray-700">
                                        Email
                                    </label>
                                    <input
                                        className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border shadow appearance-none focus:outline-none focus:shadow-outline"
                                        id="email"
                                        type="emal"
                                        placeholder="Email"
                                    />
                                </div>
                                <div className="mb-4 md:flex md:justify-between">
                                    <div className="mb-4 md:mr-2 md:mb-0">
                                        <label className="block mb-2 text-sm font-bold text-gray-700">
                                            Contraseña
                                        </label>
                                        <input
                                            className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                            id="password"
                                            type="password"
                                            placeholder="**********"
                                        />
                                    </div>
                                    <div className="md:ml-2">
                                        <label className="block mb-2 text-sm font-bold text-gray-700">
                                            Confirme la contraseña
                                        </label>
                                        <input
                                            className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                            id="c_password"
                                            type="password"
                                            placeholder="**********"
                                        />
                                    </div>
                                </div>
                                <div className="mb-6 text-center">
                                    <button
                                        className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                                        type="button"
                                    >
                                        Registrar cuenta
                                    </button>
                                </div>
                            </form>
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
