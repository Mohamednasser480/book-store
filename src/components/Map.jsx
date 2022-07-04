import {Marker,Map,GoogleApiWrapper} from 'google-maps-react'

function CustomMap({ google, locations = [] }) {
    return (
        <Map
            google={google}
            containerStyle={{
                position: "absolute",
                width: "100%",
                height: "80%"
            }}
            style={{
                width: "100%",
                height: "80%"
            }}
            center={locations[0]}
            initialCenter={locations[0]}
            zoom={locations.length === 1 ? 18 : 13}
            disableDefaultUI={true}
        >
            {locations.map(
                coords => <Marker position={coords} />
            )}

        </Map>
    )
};
export default GoogleApiWrapper({
    apiKey: process.env.GOOGLE_API_KEY
})(CustomMap)
