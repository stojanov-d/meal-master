/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { Flex } from '@chakra-ui/react';

const containerStyle = {
	width: '1000px',
	height: '700px',
};

const center = {
	lat: 41.9981,
	lng: 21.4254,
};

function MainMap() {
	const { isLoaded } = useJsApiLoader({
		id: 'google-map-script',
		googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
	});

	const [map, setMap] = useState(null);

	const onLoad = (map) => {
		// const bounds = new window.google.maps.LatLngBounds(center);
		// map.fitBounds(bounds);
		map.setZoom(15);
		setMap(map);
	};

	const onUnmount = () => {
		setMap(null);
	};

	return isLoaded ? (
		<Flex p={24} justifyContent={'center'}>
			<GoogleMap
				mapContainerStyle={containerStyle}
				center={center}
				onLoad={onLoad}
				onUnmount={onUnmount}
			>
				{/* Child components, such as markers, info windows, etc. */}
				<></>
			</GoogleMap>
		</Flex>
	) : (
		<></>
	);
}

const MemoizedMainMap = React.memo(MainMap);
export default MemoizedMainMap;
