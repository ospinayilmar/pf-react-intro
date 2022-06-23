import React from "react";
import { AppUI } from "./AppUI";

// const defaultTodos_old = [ 
//   {text: 'Reparar Macbook de Germán', completed: false}, 
//   {text: 'Llevar escalera a la normal', completed: false}, 
//   {text: 'Hablar con Carlos sobre impresoras para comprar', completed: false}, 
//   {text: 'Reunión con Kevyn para la instalación de juan Camilo', completed: true}, 
// ];

const defaultTodos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Tomar el cursso de intro a React', completed: false },
  { text: 'Llorar con la llorona', completed: true },
  { text: 'LALALALAA', completed: false },
];

function useLocalStorage(itemName, initialValue) {
  const localStorageItem = localStorage.getItem(itemName);
  let parsedItem;
  
  if(!localStorageItem){
    console.log('El item no existe dentro de localStorage');

    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parsedItem = initialValue;
  }
  else {
    console.log('Ya existía el Item en localStorage');
    parsedItem = JSON.parse(localStorageItem);
  } 
    
  const [item, setItem] = React.useState(parsedItem);

  const saveItem = (newItem) => {
    const stringifiedItem = JSON.stringify(newItem);
    localStorage.setItem(itemName, stringifiedItem);
    setItem(newItem);
  };

  return [
    item,
    saveItem,
  ];
}

function App() {
  const [todos, saveTodos] = useLocalStorage('TODOS_V1', []);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos =  todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if(searchValue.length <= 0){
    searchedTodos = todos;
  }
  else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();

      return todoText.includes(searchText);
    });
  }

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  

  return (
    <AppUI
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      searchValue={searchValue}
      searchedTodos={searchedTodos}
      setSearchValue={setSearchValue}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  );
}

export default App;
