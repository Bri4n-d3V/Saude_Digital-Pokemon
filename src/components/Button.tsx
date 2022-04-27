import { IButton } from "../interfaces/IButton"

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
    <div>
      <button
        onClick={handleClick}
        type='button'
        disabled={
          ((page === 0 && type === 'Back')
          ||(page === 88 && type === 'Next'))
            ? true : false
        }
      >
        {type}
      </button>
    </div>
  )
}

export default Button