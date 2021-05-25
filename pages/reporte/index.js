import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import DatosServicios from '../../components/DatosServicio'
import SeleccionarServicio from '../../components/SeleccionarServicio'
import initFirebase from '../../services/firebase'

const database = initFirebase().database().ref()

export default function reporte({ query }) {
    console.log(query)
    const [servicio, setServicio] = useState(true)
    const [datos, setDatos] = useState(false)
    const [latitud, setLatitud] = useState(0)
    const [longitud, setLongitud] = useState(0)
    const [informacion, setInformacion] = useState({
        ente: [],
        prioridad: 1,
        descripcion: '',
        latitud,
        longitud,
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
        database.child('reporte').push(informacion, (error) => {
            if (error) console.log(error)
        })
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
