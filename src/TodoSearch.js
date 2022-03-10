import React from "react";
import './TodoSearch.css';

function TodoSearch() {
  const onChageSearch = (event) => {
    console.log("El cajón cambió " + event.target.value);
  };

    return(
      <input 
        className="TodoSearch"
        placeholder="Macbook Pro de 13''"
        onChange={onChageSearch}
      />
    );
}

export { TodoSearch };