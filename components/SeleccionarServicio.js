export default function SeleccionarServicio() {
    return (
        <>
            <div className="flex items-center justify-center">
                <div className="container">
                    <div className="flex justify-center p-4 mb-10">
                        <h3 className="text-xl">Seleccione el ente(s)</h3>
                    </div>
                    <div className="flex justify-center">
                        <div className="bg-white shadow-xl rounded-lg w-1/2">
                            <ul className="divide-y divide-gray-300">
                                <li className="p-4 m-1 hover:bg-gray-50 cursor-pointer">
                                    <label className="flex items-center space-x-3 cursor-pointer">
                                        <input
                                            type="checkbox"
                                            className="checkbox"
                                        />
                                        <span>Policia Nacional</span>
                                    </label>
                                </li>
                                <li className="p-4 m-1 hover:bg-gray-50 cursor-pointer">
                                    <label className="flex items-center space-x-3 cursor-pointer">
                                        <input
                                            type="checkbox"
                                            className="checkbox"
                                        />
                                        <span>Bomberos Pereira</span>
                                    </label>
                                </li>
                                <li className="p-4 m-1 hover:bg-gray-50 cursor-pointer">
                                    <label className="flex items-center space-x-3 cursor-pointer">
                                        <input
                                            type="checkbox"
                                            className="checkbox"
                                        />
                                        <span>Defensa Civil Colombiana</span>
                                    </label>
                                </li>
                                <li className="p-4 m-1 hover:bg-gray-50 cursor-pointer">
                                    <label className="flex items-center space-x-3 cursor-pointer">
                                        <input
                                            type="checkbox"
                                            className="checkbox"
                                        />
                                        <span>Transito Pereira</span>
                                    </label>
                                </li>
                                <li className="p-4 m-1 hover:bg-gray-50 cursor-pointer">
                                    <label className="flex items-center space-x-3 cursor-pointer">
                                        <input
                                            type="checkbox"
                                            className="checkbox"
                                        />
                                        <span>Servicio Ambulancias S.A.P</span>
                                    </label>
                                </li>
                            </ul>
                            <div className="contenedorBoton">
                                <button className="btn">Siguiente</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
