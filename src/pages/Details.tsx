import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import { fetchChar, fetchPkmn } from '../utils/pokeApi';
import { IPkmnDetails } from "../interfaces/IPkmnDetails";
import { ICharacteristicts } from "../interfaces/ICharacteristicts";
import { Image, Text, Container, Grid, GridItem, Box, SimpleGrid, Center, Flex } from '@chakra-ui/react'

const Details: React.FC = () => {
  const params = useParams();

  const [pkmn, setPkmn] = useState<IPkmnDetails>();
  const [description, setDescription] = useState<string>();

  const onLoadPkmnApi = async (): Promise<void> => {
    const result = await fetchPkmn(params.name as string);

    setPkmn(result as IPkmnDetails);

    if (result !== undefined) {
      const phrase = await callCharApi(result.id as number);

      setDescription(phrase as string);
    };
  };

  const callCharApi = async (id: number): Promise<string> => {
    const result: ICharacteristicts | undefined = await fetchChar(pkmn?.id as number);

    if (result === undefined) return '';

    const { descriptions }: ICharacteristicts = result;

    const phrase = descriptions.find(
      (element: any) => element.language.name === 'en'
    )

    if (phrase === undefined) return '';

    return phrase.description;
  };

  useEffect(() => {
    onLoadPkmnApi();
  }, [description]);

  return pkmn === undefined ? <h1>Not found...</h1> : (
    <Container maxW='600px'>
      <Center paddingInline='100px'>
        <Text
          fontSize='3xl'
          align='center'>
          {(pkmn.name[0]).toUpperCase() + pkmn.name.substr(1)}
        </Text>
        <Text
          fontSize='lg'
          align='right'>
          {`nº ${pkmn.id}`}
        </Text>
      </Center>

      <SimpleGrid columns={{ sm: 1, md: 2, lg: 2, xl: 2 }} bg='gray.100'>

        <Center bg='gray.200'>
          <Box>
            <Image boxSize='200px' src={pkmn.spriteFront} />
          </Box>
        </Center>

        <Center bg='white'>
          <Box >
            <Text as='i' fontSize='xl'>
              {description || 'A Special Phrase'}
            </Text>
          </Box>
        </Center>

        <Center>
          <Box className="infos">
            <Center>
              <Text as='b'> INFOS </Text>
            </Center>

            <p>WEIGHT: {pkmn.weight} Kg</p>
            <p>HEIGHT: {pkmn.height} m</p>

          </Box>
        </Center>

        <Center>
          <Box>
            <Center>
              <Text as='b'> TYPE </Text>
            </Center>

            {(pkmn.type2 !== pkmn.type1)
              ? (
                <SimpleGrid columns={2}>
                  <Box
                    className="detail-type"
                    bgGradient='linear(to-t, gray.900, gray.300)'>
                    {pkmn.type1.toUpperCase()}
                  </Box>
                  <Box
                    className="detail-type"
                    bgGradient='linear(to-t, gray.900, gray.300)'>
                    {pkmn.type2.toUpperCase()}
                  </Box>
                </SimpleGrid>
              )
              : (<Box
                className="detail-type"
                bgGradient='linear(to-t, gray.900, gray.300)'
              >
                {pkmn.type1.toUpperCase()}
              </Box>)
            }
          </Box>
        </Center>

        <Center>
          <Box className="abilities">
            <Center>
              <Text as='b'> ABILITIES </Text>
            </Center>
            {(pkmn.ability2 !== pkmn.ability1)
              ? (<>
                <p>
                  {pkmn.ability1.toUpperCase()}
                </p>
                <p>
                  {pkmn.ability2.toUpperCase()}
                </p>
              </>)
              : (<p>{pkmn.ability1.toUpperCase()}</p>)
            }
          </Box>
        </Center>

        <Center>
          <Box>
            <Center>
              <Text as='b'> GAME INDICES </Text>
            </Center>
            <SimpleGrid columns={3} spacing={2}>
              {pkmn.gameIndices.map(
                ({ version: { name } }: any) =>
                  <Box fontSize='sm' p={1}>{name.toUpperCase()}</Box>
              )}
            </SimpleGrid>
          </Box>
        </Center>
      </SimpleGrid>
    </Container >
  )
}

export default Details