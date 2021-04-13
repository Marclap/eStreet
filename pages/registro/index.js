import Head from 'next/head'
import Link from 'next/link'
import Formulario from '../../components/Formulario'

export default function registro() {
    return (
        <>
            <Head>
                <title>eStreet | Registrarse</title>
            </Head>
            <div>
                <Formulario />
            </div>
        </>
    )
}
