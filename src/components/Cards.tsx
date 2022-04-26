import { useEffect, useState } from 'react';
import { SimpleGrid, GridItem, Box, Flex } from '@chakra-ui/react'
import { IPokemon } from '../interfaces/IPokemon';
import { fetchPkmn } from '../utils/pokeApi';
import PokemonCard from '../components/PokemonCard';
import Button from '../components/Button';

const Cards: React.FC = () => {
  const [data, setData] = useState<IPokemon[]>([]);
  const [page, setPage] = useState<number>(1);

  const onLoadApi = async (num: number): Promise<void> => {
    const pkmnArr: IPokemon[] = [];

    for (let index = 0; index < 10; index++) {
      pkmnArr[index]  = await fetchPkmn(index + 1 + num) as IPokemon
    }

    if (!data) setData([...pkmnArr]);
    else setData([...data, ...pkmnArr]);
  };

  useEffect((): void => {
    onLoadApi(0);
  }, []);

  return (
    <Box overflow='hidden'>
      <SimpleGrid
        columns={4} spacing={10}
      >
      {data?.map((pkmn) => {
        return (
          <Box display="flex" bg='tomato' height='200px'>
            <PokemonCard
              key={pkmn.name}
              name={pkmn.name}
              spriteFront={pkmn.spriteFront}
              type1={pkmn.type1}
              type2={pkmn.type2}
            />
        </Box>
        )})}
        </SimpleGrid>
      <Button
        onClick={onLoadApi}
        page={page}
        setPage={setPage}
        />
    </Box>
  )
}

export default Cards;