export default function DatosServicios() {
    return (
        <>
            <div className="flex items-center justify-center">
                <div className="container">
                    <div className="flex justify-center p-4 mb-10">
                        <h3 className="text-xl">Describe el siniestro</h3>
                    </div>
                    <div className="flex justify-center">
                        <div className="bg-white shadow-xl rounded-lg w-1/2">
                            <div className="">
                                <label className="p-4">
                                    <select className="w-full border bg-white rounded px-3 py-2 outline-none">
                                        <option disabled>
                                            Seleccione una prioridad
                                        </option>
                                        <option>Alta</option>
                                        <option>Media</option>
                                        <option>Baja</option>
                                    </select>
                                </label>
                            </div>
                            <div>
                                <label></label>
                                <textarea className="w-full px-3 py-2 text-silverChalice border rounded-lg focus:outline-none"></textarea>
                            </div>
                        </div>
                        <div className="contenedorBoton">
                            <button className="btn">Siguiente</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
