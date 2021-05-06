export default function FechaRegistro() {
    return (
        <>
            <div className="flex items center space-x-6 max-w-lg mx-auto mt-16">
                <label className="label">Fecha de nacimiento</label>
                <input
                    type="date"
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-city"
                    placeholder="Albuquerque"
                />
            </div>
        </>
    )
}
