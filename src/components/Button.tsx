import { IButton } from "../interfaces/IButton"

const Button: React.FC<IButton> = (props) => {
  const page = props.page
  const handleClick = async () => {
    props.setPage(page + 1);
    props.onClick(10*page)
  };

  return (
    <div>
      <button
        onClick={handleClick}
        type='button'
      >
        Button
      </button>
    </div>
  )
}

export default Button