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
                    </div>
                    <div className="flex-grow">
                        <div className="min-w-screen min-h-screen bg-gray-200 flex items-center justify-center px-5 py-5">
                            <div className="w-full mx-auto rounded-lg bg-white shadow-lg px-5 pt-5 pb-10 text-gray-800">
                                <div className="w-full pt-1 pb-5">
                                    <div className="overflow-hidden rounded-full w-20 h-20 -mt-16 mx-auto shadow-lg"></div>
                                </div>
                                <div className="w-full mb-10">
                                    <div className="text-3xl text-indigo-500 text-left leading-tight h-3">
                                        “
                                    </div>
                                    <p className="text-sm text-gray-600 text-center px-5">
                                        Bienvenido a eStreet plataforma para
                                        facilitar el reporte de siniestros en la
                                        ciudad de Pereira.
                                        <br />
                                        1. Primero registrese
                                        <br />
                                        2. Solicite su reporte
                                        <br />
                                        3. Reporte el siniestro
                                    </p>
                                    <div className="text-3xl text-indigo-500 text-right leading-tight h-3 -mt-3">
                                        ”
                                    </div>
                                </div>
                                <div className="w-full">
                                    <p className="text-md text-red-500 font-bold text-center">
                                        eStreet
                                    </p>
                                    <p className="text-xs text-gray-500 text-center">
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
