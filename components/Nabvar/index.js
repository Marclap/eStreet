
import Link from 'next/link'

export default function Nabvar({}) {
    return (
        <>
            <div className="w-full max-w-6xl min-w-0 mx-auto px-6">
                <div className="flex mt-12 bg-gray-200 rounded-md shadow">
                    <div className="w-64 bg-gray-800 rounded-l-md border-r border-dashed border-gray-800">
                        <div className="flex justify-center items-center h-32 text-red-300 text-center font-semibold text-3xl italic">
                            eStreet
                        </div>
                        <div className="mt-8 border-t border-red-200">
                            
                            <a
                                href="/login"
                                className="block py-3 px-6 text-red-300 font-semibold border-b border-red-300"
                            >
                                Login
                            </a>
                            <a
                                href="/registro"
                                className="block py-3 px-6 text-red-300 font-semibold border-b border-red-300"
                            >
                                Resgistrate
                            </a>
                            <a
                                href="#"
                                className="block py-3 px-6 text-red-300 font-semibold border-b border-red-300"
                            >
                                Consejos
                            </a>
                            
                        </div>
                    </div>
                    <div className=" flex-grow">   
                        <img className="w-full h-auto" src="/emergency.png" />
                        </div>
                    </div>
                </div>
        </>
    )
}
