import { Container, Center, Text, Image } from '@chakra-ui/react';
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
        <div className='type'>
          {(type2 !== type1)
            ? (<><p>{type1}</p> <p>{type2}</p></>)
            : (<p>{type1}</p>)
          }
        </div>
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
