import { Input, Box, Flex } from '@chakra-ui/react';

function SearchBar() {
	return (
		<Flex justifyContent={'center'}>
			<Box w={550} mt={35}>
				<Input
					placeholder="Search for places near you..."
					focusBorderColor="purple.400"
					variant={'filled'}
					htmlSize={5}
				/>
			</Box>
		</Flex>
	);
}

export default SearchBar;
