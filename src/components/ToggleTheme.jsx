import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Button } from '@chakra-ui/react';
import { useColorMode } from '@chakra-ui/react';

function ToggleTheme() {
	const { colorMode, toggleColorMode } = useColorMode();
	return (
		<header>
			<Button onClick={toggleColorMode} variant="ghost">
				{colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
			</Button>
		</header>
	);
}

export default ToggleTheme;
