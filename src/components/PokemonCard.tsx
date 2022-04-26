import { Container } from '@chakra-ui/react';
import { IPokemon } from '../interfaces/IPokemon';
import { Link } from 'react-router-dom';

const PokemonCard: React.FC<IPokemon> = ({
  spriteFront,
  name,
  type1,
  type2,
}) => {
  return (
    <Container>
      <img src={spriteFront} />
      <div>
        <h4>{name[0].toUpperCase() + name.substr(1)}</h4>
        <p>
          {(type2 !== type1)
            ? `Types: ${type1} e ${type2}`
            : `Type: ${type1}`}
        </p>
        <Link
          key={name}
          to={`/details/${name}`}
        >
          <a href='https://www.google.com'>Details</a>
        </Link>
      </div>
    </Container>
  )
}

export default PokemonCard;
