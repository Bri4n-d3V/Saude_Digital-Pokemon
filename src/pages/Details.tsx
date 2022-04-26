/* import { useEffect } from 'react'
import { fetchPkmn } from '../utils/pokeApi'; */

const Details: React.FC<any> = (
  match: { url: string, path: string, params: { name: string } }
  ) => {
    /* const onLoadApi = async (): Promise<void> => {
      const pkmn = await fetchPkmn(name as string)

    };
  
    useEffect((): void => {
      onLoadApi();
    }, []); */

  return (
    <div>
      Details
      <h2>
        Nome
      </h2>
    </div>
  )
}

export default Details