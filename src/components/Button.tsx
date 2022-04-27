import { IButton } from "../interfaces/IButton"
import { Button as Bttn } from '@chakra-ui/react'

const Button: React.FC<IButton> = (
  { page, setPage, onClick, type }
  ) => {
  const handleClick = async () => {
    let currPage = page;

    if (type === 'Next') {
      currPage += 1;
    };

    if (type === 'Back') {
      currPage -= 1;
    };

    onClick(currPage * 10);
    setPage(currPage);
  };

  return (
      <Bttn
        colorScheme='yellow' 
        size='xs'
        padding='5px'
        margin='10px'
        onClick={handleClick}
        type='button'
        disabled={
          ((page === 0 && type === 'Back')
          ||(page === 88 && type === 'Next'))
            ? true : false
        }
      >
        {type}
      </Bttn>
  )
}

export default Button