import './App.css';
import ToggleTheme from './components/ToggleTheme';
import MainText from './components/MainText';
import SearchBar from './components/SearchBar';
import { Box } from '@chakra-ui/react';
import MainMap from './components/MainMap';
function App() {
	return (
		<Box p={7}>
			<ToggleTheme />
			<MainText />
			<SearchBar />
			<MainMap />
		</Box>
	);
}

export default App;
