import { Container, Center, Text, Image, SimpleGrid } from '@chakra-ui/react';
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
    <Container className='card-pokemon' borderRadius='3%'>
      <Center>
        <Link
          key={name}
          to={`/details/${name}`}>
          <Image
            bg='gray.200'
            borderRadius='full'
            className='card-image'
            boxSize='150px'
            src={spriteFront}
            alt={`${name}-image`}
          />
        </Link>
      </Center>
      <Text as='b' className='card-name'>{name[0].toUpperCase() + name.substr(1)}</Text>
      {(type2 !== type1)
        ? (
          <Center >
            <SimpleGrid className='container-types' columns={2} spacing={5}>
              <Text
                className='card-type'
                bgGradient='linear(to-t, gray.900, gray.300)'>
                {type1}
              </Text>
              <Text
                className='card-type'
                bgGradient='linear(to-t, gray.900, gray.300)'>
                {type2}
              </Text>
            </SimpleGrid>
          </Center>)
        : (<Text
          className='card-type'
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
    </Container>
  )
}

export default PokemonCard;
