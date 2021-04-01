import { useRouter } from 'next/router'

export default function home() {
    return (
        <>
            <div class="container mx-auto text-center">
                <div class="bg-gray-800 flex justify-start">
                    <div class="text-red-500 p-4 m-2">eStreet</div>
                </div>
                <div class="bg-red-500 flex justify-end text-gray-400 ">
                    <div class="bg-red-500 p-4 m-2">
                        Inicio
                    </div>
                    <div class="bg-red-500 p-4 m-2">User1232</div>
                </div>
                <div>
                    <img src="" alt="" /> 
                </div>
            </div>
        </>
    )
}
