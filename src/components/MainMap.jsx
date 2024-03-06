import React, { useState } from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { Flex, Button } from '@chakra-ui/react';
const containerStyle = {
	width: '1000px',
	height: '700px',
};

const center = {
	lat: 41.9981,
	lng: 21.4254,
};

// It loads slower using this map style. Default map loads faster. Maybe change in future.
const mapID = import.meta.env.VITE_GOOGLE_MAPS_ID;

function MainMap() {
	const { isLoaded } = useJsApiLoader({
		id: 'google-map-script',
		googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
	});

	const [map, setMap] = useState(null);

	const onLoad = (map) => {
		map.setZoom(15);
		setMap(map);
	};

	const onUnmount = () => {
		setMap(null);
	};

	const getCurrentLocation = () => {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(
				(position) => {
					const { latitude, longitude } = position.coords;
					const currentPosition = {
						lat: latitude,
						lng: longitude,
					};
					map.panTo(currentPosition);
				},
				(error) => {
					console.error('Error getting current location:', error);
				}
			);
		} else {
			console.error('Geolocation is not supported by this browser.');
		}
	};

	return isLoaded ? (
		<Flex p={24} justifyContent={'center'}>
			<GoogleMap
				mapContainerStyle={containerStyle}
				center={center}
				onLoad={onLoad}
				onUnmount={onUnmount}
				//Loads slower using this map style. Default map loads faster. Maybe change in future.
				options={{
					mapId: mapID,
				}}
			>
				{/* Child components, such as markers, info windows, etc. */}
				<Button
					position="absolute"
					top="1rem"
					right="1rem"
					onClick={getCurrentLocation}
				>
					Get Current Location
				</Button>
			</GoogleMap>
		</Flex>
	) : (
		<h3>Error loading map...</h3>
	);
}

const MemoizedMainMap = React.memo(MainMap);
export default MemoizedMainMap;
