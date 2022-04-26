import { Box } from '@chakra-ui/react';
import Cards from '../components/Cards';

function Home() {
  return (
    <Box display='flex' maxH='100%' bg='blue.600' color='white' justifyContent='center'>
      <Cards />
    </Box>
  )
}

export default Home;