import React from "react";
import './TodoSearch.css';

function TodoSearch({ searchValue, setSearchValue }) {
  const onSearchValueChange = (event) => {
    console.log("El cajón cambió " + event.target.value);
    setSearchValue(event.target.value);
  };

    return(
      <React.Fragment>
        <input 
          className="TodoSearch"
          placeholder="Macbook Pro de 13''"
          value={searchValue}
          onChange={onSearchValueChange}
        />
      </React.Fragment>
    );
}

export { TodoSearch };