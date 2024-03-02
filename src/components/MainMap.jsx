'use client'; // Must be here because it only works on client components

import { Box, Flex } from '@chakra-ui/layout';
import {
	APIProvider,
	AdvancedMarker,
	Map,
	Pin,
} from '@vis.gl/react-google-maps';
function MainMap() {
	const position = { lat: 41.9981, lng: 21.4254 };
	return (
		<Flex justifyContent={'center'}>
			<APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
				<Box h={900} mt={24} w={1300}>
					<Map
						zoom={14}
						center={position}
						mapId={import.meta.env.VITE_GOOGLE_MAPS_ID}
					>
						<AdvancedMarker position={position}>
							<Pin />
						</AdvancedMarker>
					</Map>
				</Box>
			</APIProvider>
		</Flex>
	);
}

export default MainMap;
