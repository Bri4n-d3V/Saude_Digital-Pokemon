import { Container, Center, Text, Image, SimpleGrid, Box } from '@chakra-ui/react';
import { IPokemon } from '../interfaces/IPokemon';
import { Link } from 'react-router-dom';

const PokemonCard: React.FC<IPokemon> = ({
  spriteFront,
  id,
  name,
  type1,
  type2,
}) => {
  return (
    <Container className='card-pokemon'>
      <Center className='link-img'>
        <Link
          key={name}
          to={`/details/${name}`}
        >
          <Image src={spriteFront} alt={`${name}-image`} />
        </Link>
      </Center>
      <div>
        <h4>{name[0].toUpperCase() + name.substr(1)}</h4>

        {(type2 !== type1)
          ? (
            <Center >
              <SimpleGrid className='container-types' columns={2} spacing={5}>
                  <Text
                    className='home-type'
                    bgGradient='linear(to-t, gray.900, gray.300)'>
                    {type1}
                  </Text>
                  <Text
                    className='home-type'
                    bgGradient='linear(to-t, gray.900, gray.300)'>
                    {type2}
                  </Text>
              </SimpleGrid>
            </Center>)
          : (<Text
            className='home-type'
            bgGradient='linear(to-t, gray.900, gray.300)'>
            {type1}
          </Text>)
        }

        <Link
          key={name}
          className='link'
          to={`/details/${name}`}
        >
          <Text as='u' color='gray'>details</Text>
        </Link>
      </div>
    </Container>
  )
}

export default PokemonCard;
