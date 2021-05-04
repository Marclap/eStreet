import Head from 'next/head'
import Link from 'next/link'

export default function consejos() {
    return (
        <>
            <Head>
                <title>eStreet | Consejos</title>
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
                            <Link href="/login">
                                <a className="elementosSideBar">
                                    Iniciar sesión
                                </a>
                            </Link>
                            <Link href="/registro">
                                <a className="elementosSideBar">Registrarse</a>
                            </Link>
                        </div>
                    </div>
                    <div className="flex-grow">
                        <div className="min-w-screen min-h-screen bg-lightGray flex items-center justify-center px-5 py-5">
                            <div className="w-full mx-auto rounded-lg bg-white shadow-lg px-5 pt-5 pb-10 text-gray-800">
                                <div className="w-full mb-10 text-lg text-eerieBlack text-center px-5">
                                    <p>
                                        Bienvenido a eStreet, plataforma para
                                        facilitar el reporte de siniestros en la
                                        ciudad de Pereira.
                                    </p>
                                    <p>
                                        1. Primero cree una cuenta en la
                                        plataforma
                                    </p>
                                    <p>2. Solicite un reporte de siniestro</p>
                                    <p>
                                        3. Reporte el siniestro e indique los
                                        detalles del mismo
                                    </p>
                                </div>
                                <div className="w-full">
                                    <p className="text-md text-carnelian font-bold text-center">
                                        eStreet
                                    </p>
                                    <p className="text-xs text-silverChalice text-center">
                                        eStreet@gmail.com
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
