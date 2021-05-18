import Head from 'next/head'
import dynamic from 'next/dynamic'

export default function mapa() {
    const MapWithNoSSR = dynamic(() => import('../../components/MapView'), {
        ssr: false,
    })
    return (
        <>
            <Head>
                <title>eStreet</title>
            </Head>
            <main>
                <div id="map">
                    <MapWithNoSSR />
                </div>
            </main>
        </>
    )
}
