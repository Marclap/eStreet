import Head from 'next/head'
import Link from 'next/link'

export default function seleccionServicio() {
    return (
        <>
            <Head>
                <title>eStreet | Seleccionar servicio</title>
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
                        <div className="flex items-center justify-center h-screen bg-gray-200">
                            <div className="container">
                                <div className="flex justify-center p-4 mb-10">
                                    <h1 className="text-xl  cultured">
                                        Seleccione el ente(s)
                                    </h1>
                                </div>
                                <div className="flex justify-center">
                                    <div className="bg-white shadow-xl rounded-lg w-1/2">
                                        <ul className="divide-y divide-gray-300">
                                            <li className="p-4 hover:bg-gray-50 cursor-pointer">
                                                Policia Nacional
                                            </li>
                                            <li className="p-4 hover:bg-gray-50 cursor-pointer">
                                                Bomberos Pereira
                                            </li>
                                            <li className="p-4 hover:bg-gray-50 cursor-pointer">
                                                Defensa Civil Colombiana
                                            </li>
                                            <li className="p-4 hover:bg-gray-50 cursor-pointer">
                                                Transito Pereira
                                            </li>
                                            <li className="p-4 hover:bg-gray-50 cursor-pointer">
                                                Servicio Ambulancias S.A.P
                                            </li>
                                            <button className="inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-white uppercase transition bg-red-500 rounded-full shadow ripple hover:shadow-lg hover:bg-red-600 focus:outline-none">
                                                Siguiente
                                            </button>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
