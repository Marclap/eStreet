import AppLayout from '../AppLayout'
import Link from 'next/link'

export default function Nabvar({}) {
    return (
        <>
            <div className="text-center w-full">
                <div className="bg-darked flex justify-start">
                    <div className="text-secundaryRed p-4 m-2">eStreet</div>
                </div>
                <div className="bg-primaryRed flex justify-between text-primaryColor ">
                    <div className="p-4 m-2">
                        Pagina web para reportar casos de emergencia
                    </div>
                    <div className="flex justify-start">
                        <div className="p-4 m-2">
                            <Link href="/login">Login</Link>
                        </div>
                        <div className="p-4 m-2">
                            <Link href="/registro">Registrate</Link>
                        </div>
                    </div>
                </div>
                <img className="w-full h-auto" src="/emergency.png" />
            </div>
        </>
    )
}
