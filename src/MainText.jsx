import { Text } from '@chakra-ui/react';
import '@fontsource/dm-serif-text';
function MainText() {
	//TODO: add more corresponding gradient for light mode
	return (
		<Text
			fontSize="64px"
			fontFamily="DM Serif Text"
			align="center"
			bgGradient="linear(to-br, #7928CA, #FF0080)"
			bgClip="text"
			fontWeight="extrabold"
		>
			From Favorites to Hidden Gems<br></br> We&apos;ve Got You Covered.
		</Text>
	);
}

export default MainText;
