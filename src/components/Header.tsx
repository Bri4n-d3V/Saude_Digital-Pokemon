import pokedexLogo from '../images/pokedexLogo.png'
import { AiOutlineGithub } from 'react-icons/ai';
import { Box, Link, Text } from '@chakra-ui/react';

export default function Header() {
  return (
    <header>
      <Link href='/'>
      <img
        src={pokedexLogo}
        alt='pokedex logo'
      />
      </Link>
      <Link display='flex' href='https://github.com/Bri4n-d3V' isExternal>
        <Box display='flex' gap='0.5rem' alignItems='center'>
          <Text fontSize='xl'>Bri4n-d3V</Text>
          <AiOutlineGithub style={{fontSize: '30px'}}/>
        </Box>
      </Link>
    </header>
  );
}