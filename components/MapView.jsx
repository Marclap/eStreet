import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import 'leaflet-defaulticon-compatibility'

const Map = () => {
    if ('geolocation' in navigator) {
        /* Yeih! habemus geolocalización  */
    } else {
        /* el navegador no soporta la geolocalización*/
    }
    /* se ejecuta si los permisos son concedidos y se encuentra una ubicación*/
    function onSucccess(position) {
        console.log(position.coords.latitude, position.coords.longitude)
    }

    /*se ejecuta si el permiso fue denegado o no se puede encontrar una ubicación*/
    function onError() {
        console.log('ocurrio un error o no hay permisos para ver la ubicación')
    }

    const config = {
        enableHighAccuracy: true,
        maximumAge: 30000,
        timeout: 27000,
    }
    /*así llamamos la función getCurrentPosition*/
    navigator.geolocation.getCurrentPosition(onSucccess, onError, config)
    position: {
        coords: {
            accuracy: 259897
            altitude: null
            altitudeAccuracy: null
            heading: null
            latitude: 32.4852472
            longitude: -116.9163936
            speed: null
        }
        timestamp: 1549735567865
    }

    navigator.geolocation.getCurrentPosition(function (position) {
        position.coords.latitude, position.coords.longitude
    })
    var watchID = navigator.geolocation.watchPosition(function (position) {
        position.coords.latitude, position.coords.longitude
    })
    navigator.geolocation.clearWatch(watchID)
    function geo_success(position) {
        position.coords.latitude, position.coords.longitude
    }

    function geo_error() {
        alert('Sorry, no position available.')
    }

    const geo_options = {
        enableHighAccuracy: true,
        maximumAge: 30000,
        timeout: 27000,
    }

    const wpid = navigator.geolocation.watchPosition(
        geo_success,
        geo_error,
        geo_options
    )
    function errorCallback(error) {
        alert('ERROR(' + error.code + '): ' + error.message)
    }
    function geoFindMe() {
        var output = document.getElementById('out')

        if (!navigator.geolocation) {
            output.innerHTML =
                '<p>Geolocation is not supported by your browser</p>'
            return
        }

        function success(position) {
            const latitude = position.coords.latitude
            const longitude = position.coords.longitude

            output.innerHTML =
                '<p>Latitude is ' +
                latitude +
                '° <br>Longitude is ' +
                longitude +
                '°</p>'

            const img = new Image()
            img.src =
                'http://maps.googleapis.com/maps/api/staticmap?center=' +
                latitude +
                ',' +
                longitude +
                '&zoom=13&size=300x300&sensor=false'

            output.appendChild(img)
        }

        function error() {
            output.innerHTML = 'Unable to retrieve your location'
        }

        output.innerHTML = '<p>Locating…</p>'

        navigator.geolocation.getCurrentPosition(success, error)
    }

    return (
        <MapContainer
            center={[4.8126808, -75.6789792]}
            zoom={14}
            scrollWheelZoom={true}
            style={{ height: '100vh', width: '100%' }}
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
