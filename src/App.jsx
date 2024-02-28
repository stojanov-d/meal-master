import './App.css';
import ToggleTheme from './ToggleTheme';
import MainText from './MainText';
import SearchBar from './SearchBar';
import { Box } from '@chakra-ui/react';
function App() {
	return (
		<Box p={7}>
			<ToggleTheme />
			<MainText />
			<SearchBar />
		</Box>
	);
}

export default App;
