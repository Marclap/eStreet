import Head from 'next/head'
import Nabvar from '../components/Nabvar'
import dynamic from 'next/dynamic'

export default function Home() {
    const MapWithNoSSR = dynamic(() => import('../components/MapView'), {
        ssr: false,
    })
    return (
        <>
            <Head>
                <title>eStreet</title>
            </Head>
            <Nabvar />
            <main>
                <div id="map">
                    <MapWithNoSSR />
                </div>
            </main>
        </>
    )
}
