import AppLayout from '../AppLayout'
import Link from 'next/link'

export default function Nabvar({}) {
    return (
        <>
            <div class="container mx-auto text-center">
                <div class="bg-gray-800 flex justify-start">
                    <div class="text-red-500 p-4 m-2">eStreet</div>
                </div>
                <div class="bg-red-500 flex justify-end text-gray-400 ">
                    <div class="bg-red-500 p-4 m-2">
                        Pagina web para reportar casos de emergencia
                    </div>
                    <div class="bg-red-500 p-4 m-2">
                        <Link href="/login">Login</Link>
                    </div>
                    <div class="bg-red-500 p-4 m-2">/</div>
                    <div class="bg-red-500 p-4 m-2">
                        <Link href="/registro">Registrate</Link>
                    </div>
                </div>
                <AppLayout>
                    <img src="/emergency.png" />
                </AppLayout>
            </div>
        </>
    )
}
