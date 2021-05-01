import Link from 'next/link'

export default function Formulario() {
    return (
        <>
            <div className="w-full">
                <div className="flex bg-lightGray shadow">
                    <div className="w-64 h-screen bg-eerieBlack border-eerieBlack ">
                        <Link href="/">
                            <a>
                                <div className="logo">eStreet</div>
                            </a>
                        </Link>
                        <div className="mt-8 border-t border-imperialRed">
                            <Link href="/login">
                                <a className="elementosSideBar">
                                    Iniciar Sesión
                                </a>
                            </Link>
                            <Link href="/consejos">
                                <a className="elementosSideBar">Consejos</a>
                            </Link>
                        </div>
                    </div>
                    <div className="flex-grow">
                        <div className="contenedorInputs">
                            <div className="contenedorInput">
                                <label className="label">Nombre(s)</label>
                                <input
                                    type="text"
                                    className="input"
                                    placeholder="Nombre(s)"
                                />
                            </div>
                            <div className="contenedorInput">
                                <label className="label">Apellidos</label>
                                <input
                                    type="text"
                                    className="input"
                                    placeholder="Apellidos"
                                />
                            </div>
                            <div className="contenedorInput">
                                <label className="label">
                                    Fecha de nacimiento
                                </label>
                                <input
                                    type="text"
                                    className="input"
                                    placeholder="Fecha de nacimiento"
                                />
                            </div>
                            <div className="contenedorInput">
                                <label className="label">Cedúla</label>
                                <input
                                    type="text"
                                    className="input"
                                    placeholder="Cedúla"
                                />
                            </div>
                            <div className="contenedorInput">
                                <label className="label">Email</label>
                                <input
                                    type="text"
                                    className="input"
                                    placeholder="Email"
                                />
                            </div>
                            <div className="contenedorInput">
                                <label className="label">Contraseña</label>
                                <input
                                    type="password"
                                    className="input"
                                    placeholder="Contraseña"
                                />
                            </div>
                            <div className="contenedorInput">
                                <label className="label">
                                    Repita la contraseña
                                </label>
                                <input
                                    type="password"
                                    className="input"
                                    placeholder="Repita la contraseña"
                                />
                            </div>
                        </div>
                        <div className="contenedorBoton">
                            <button className="btn">Registrarse</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
