import Link from 'next/link'
import Formulario from '../../components/Formulario'

export default function registro() {
    return (
        <>
            <div className="text-center">
                <div className="bg-darked flex justify-start">
                    <div className="text-secundaryRed p-4 m-2">
                        <Link href="/">eStreet</Link>
                    </div>
                </div>
                <div className="bg-primaryRed flex justify-end text-primaryColor">
                    <div className="p-4 m-2">Registro Usuario</div>
                    <div className="p-4 m-2">User1232</div>
                </div>
                <div>
                    <Formulario />
                </div>
            </div>
        </>
    )
}
