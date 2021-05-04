import Head from 'next/head'
import Link from 'next/link'

export default function login() {
    return (
        <>
            <Head>
                <title>eStreet | Iniciar sesión</title>
            </Head>
            <div className="w-full">
                <div className="flex bg-lightGray shadow">
                    <div className="w-64 h-screen bg-eerieBlack border-eerieBlack ">
                        <Link href="/">
                            <a>
                                <div className="logo">eStreet</div>
                            </a>
                        </Link>
                        <div className="mt-8 border-t border-imperialRed">
                            <Link href="/registro">
                                <a className="elementosSideBar">Registrarse</a>
                            </Link>
                            <Link href="/consejos">
                                <a className="elementosSideBar">Consejos</a>
                            </Link>
                        </div>
                    </div>
                    <div className="flex-grow">
                        <div className="contenedorInputs">
                            <div className="contenedorInput">
                                <label className="label">Email:</label>
                                <input
                                    type="email"
                                    className="input"
                                    placeholder="Email"
                                />
                            </div>
                            <div className="contenedorInput">
                                <label className="label">Contraseña:</label>
                                <input
                                    type="password"
                                    className="input"
                                    placeholder="Contraseña"
                                />
                            </div>
                        </div>
                        <div className="contenedorBoton">
                            <button className="btn">Entrar</button>
                        </div>
                        <div className="contenedorBoton">
                            <p>¿Has olvidado la contraseña?</p>
                            <Link href="#">
                                <a className="text-bloodRed">Has click aquí</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
