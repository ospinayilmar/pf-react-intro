import React from "react";
import { TodoContext } from "../Todocontext";
import './TodoSearch.css';

function TodoSearch() {
  const { searchValue, setSearchValue } = React.useContext(TodoContext);

  const onSearchValueChange = (event) => {
    console.log("El cajón cambió " + event.target.value);
    setSearchValue(event.target.value);
  };

    return(
      <React.Fragment>
        <input 
          className="TodoSearch"
          placeholder="Escribe una pista para iniciar la búsqueda"
          value={searchValue}
          onChange={onSearchValueChange}
        />
      </React.Fragment>
    );
}

export { TodoSearch };