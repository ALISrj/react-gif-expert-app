import { useState } from "react"

export const AddCategory = ({ onNewCategory }) => {

  const [inputValue, setInputValue] = useState('')

  const onInputChange = (event) => {
    // console.log(event.target.value);

    setInputValue(event.target.value) // Para que se pueda escibir en la caja de text
  }

  const onSubmit = (event) => {
    event.preventDefault(); //Evitar refresco de la página

    if (inputValue.trim().length <= 1) {
      return;
    }

    onNewCategory(inputValue.trim());

    setInputValue('');
  }

  return (

    <form onSubmit={(event) => onSubmit(event)}>
      <input
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={onInputChange}
      // onChange={ event => onInputChange(event)}
      />
    </form>

  )
}
