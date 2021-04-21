import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import 'leaflet-defaulticon-compatibility'

const Map = () => {
    return (
        <MapContainer
            center={[4.8126808, -75.6789792]}
            zoom={14}
            scrollWheelZoom={false}
            style={{ height: '100vh', width: '100vw' }}
        >
            <TileLayer
                url={'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'}
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={[4.8126808, -75.6789792]} draggable={true}>
                <Popup>Hey ! I live here</Popup>
            </Marker>
        </MapContainer>
    )
}

export default Map
