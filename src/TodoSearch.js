import React from "react";
import './TodoSearch.css';

function TodoSearch() {
  const [searchValue, setSearchValue] = React.useState('');

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
        <p>{searchValue}</p>
      </React.Fragment>
    );
}

export { TodoSearch };