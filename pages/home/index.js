import { useRouter } from 'next/router'

export default function home() {
    return (
        <>
            <div className="container mx-auto text-center">
                <div className="bg-gray-800 flex justify-start">
                    <div className="text-red-500 p-4 m-2">eStreet</div>
                </div>
                <div className="bg-red-500 flex justify-end text-gray-400 ">
                    <div className="bg-red-500 p-4 m-2">Inicio</div>
                    <div className="bg-red-500 p-4 m-2">User1232</div>
                </div>
                <div>
                    <img src="" alt="" />
                </div>
            </div>
        </>
    )
}
