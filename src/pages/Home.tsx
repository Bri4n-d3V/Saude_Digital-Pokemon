import { useEffect, useState } from 'react';
import { SimpleGrid, Box, Container } from '@chakra-ui/react'
import { IPokemon } from '../interfaces/IPokemon';
import { fetchPkmn } from '../utils/pokeApi';
import PokemonCard from '../components/PokemonCard';
import Button from '../components/Button';



const Home: React.FC = () => {
  const [data, setData] = useState<IPokemon[]>([]);
  const [page, setPage] = useState<number>(0);

  const onLoadApi = async (num: number): Promise<void> => {
    const pkmnArr: IPokemon[] = [];

    for (let index = 0; index < 10; index++) {
      pkmnArr[index] = await fetchPkmn(index + 1 + num) as IPokemon
    }

    setData(pkmnArr);
  };

  useEffect((): void => {
    onLoadApi(0);
  }, []);


  return (
    <Container
      overflow='hidden'
      display='flex-column'
      maxH='70%'
      maxW='70%'
      justifyContent='center'>
      <SimpleGrid columns={{ sm: 2, md: 3, lg: 4, xl: 5 }} spacing={4}>
        {data?.map((pkmn) => {
          return (
            <Box display="flex" marginTop='25%' marginBottom='10%'>
              <PokemonCard
                key={pkmn.name}
                id={pkmn.id}
                name={pkmn.name}
                spriteFront={pkmn.spriteFront}
                type1={pkmn.type1}
                type2={pkmn.type2}
              />
            </Box>
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