import Head from 'next/head'
import Link from 'next/link'

export default function datosServicio() {
    return (
        <>
            <Head>
                <title>eStreet | Datos del Servicio</title>
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
                        <div className="flex items-center justify-center h-screen bg-gray-200"></div>
                    </div>
                </div>
            </div>
        </>
    )
}
