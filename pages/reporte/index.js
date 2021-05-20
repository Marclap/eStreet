import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import DatosServicios from '../../components/DatosServicio'
import SeleccionarServicio from '../../components/SeleccionarServicio'

export default function reporte() {
    const [servicio, setServicio] = useState(true)
    const [datos, setDatos] = useState(false)
    const [informacion, setInformacion] = useState({
        ente: [],
        prioridad: '',
        descripcion: '',
    })

    const handleSetServicio = () => {
        setServicio(false)
        setDatos(true)
    }

    const handleSetDatosAnterior = () => {
        setServicio(true)
        setDatos(false)
    }

    const handleSetDatosGuardar = (event) => {
        event.preventDefault()
        console.log(informacion)
    }

    const handleInputChange = (event) => {
        setInformacion({
            ...informacion,
            [event.target.name]: event.target.value,
        })
    }

    const handleInputChangeEnte = (event) => {
        setInformacion({
            ...informacion,
            [event.target.name]: event.target.value,
        })
    }

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
                        <form onSubmit={handleSetDatosGuardar}>
                            <SeleccionarServicio
                                load={servicio}
                                handleSetServicio={handleSetServicio}
                                handleInputChangeEnte={handleInputChangeEnte}
                            />
                            <DatosServicios
                                load={datos}
                                handleSetDatosAnterior={handleSetDatosAnterior}
                                handleInputChange={handleInputChange}
                            />
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
