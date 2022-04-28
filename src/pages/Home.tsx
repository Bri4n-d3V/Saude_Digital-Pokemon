import { useEffect, useState } from 'react';
import { SimpleGrid, Container, GridItem, Box } from '@chakra-ui/react'
import { IPokemon } from '../interfaces/IPokemon';
import { fetchPkmn } from '../utils/pokeApi';
import PokemonCard from '../components/PokemonCard';
import Button from '../components/Button';

const Home: React.FC = () => {
  const [pkmn, setPkmn] = useState<IPokemon[]>([]);
  const [page, setPage] = useState<number>(0);

  const onLoadApi = async (num: number): Promise<void> => {
    const pkmnArr: IPokemon[] = [];

    for (let index = 0; index < 10; index += 1) {
      pkmnArr[index] = await fetchPkmn(index + 1 + num) as IPokemon
    }

    setPkmn(pkmnArr);
  };

  useEffect((): void => {
    onLoadApi(0);
  }, []);


  return (
    <Container maxW='6xl'>
        <SimpleGrid columns={{ sm: 2, md: 3, lg: 4, xl: 5 }} spacing={4}>
          {pkmn?.map((pk) => {
            return (
              <GridItem marginTop='25%' marginBottom='10%'>
                <PokemonCard
                  key={pk.name}
                  id={pk.id}
                  name={pk.name}
                  spriteFront={pk.spriteFront}
                  type1={pk.type1}
                  type2={pk.type2}
                />
              </GridItem>
            )
          })}
        </SimpleGrid>
        <Button
          onClick={onLoadApi}
          page={page}
          setPage={setPage}
          type={'Back'}
        />
        <Button
          onClick={onLoadApi}
          page={page}
          setPage={setPage}
          type={'Next'}
        />
    </Container>
  )
}

export default Home;