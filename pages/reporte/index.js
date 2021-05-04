import Head from 'next/head'
import Link from 'next/link'
import DatosServicios from '../../components/DatosServicio'
import SeleccionarServicio from '../../components/SeleccionarServicio'

export default function reporte() {
    return (
        <>
            <Head>
                <title>eStreet | Reporte</title>
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
                    <div className="flex-grow h-screen">
                        <SeleccionarServicio />
                        <DatosServicios />
                    </div>
                </div>
            </div>
        </>
    )
}
