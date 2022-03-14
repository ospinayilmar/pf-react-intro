import React from "react";
import { AppUI } from "./AppUI";

// const defaultTodos = [
//   {text: 'Reparar Macbook de Germán', completed: false},
//   {text: 'Llevar escalera a la normal', completed: false},
//   {text: 'Hablar con Carlos sobre impresoras para comprar', completed: false},
//   {text: 'Hablar con Carlos sobre impresoras', completed: true},
// ];

function App() {
  const localStoragetodos = localStorage.getItem('TODOS_V1');
  let parsedTodos = [];

  if(!localStoragetodos) {
    localStorage.setItem('TODOS_V1', JSON.stringify([]));
  } else {
    parsedTodos = JSON.parse(localStoragetodos)

  }

  const [todos, setTodos] = React.useState(parsedTodos);
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

  const saveTodos = (newTodos) => {
    const stringifiedTodos = JSON.stringify(newTodos);
    localStorage.setItem('TODOS_V1', stringifiedTodos);
    setTodos(newTodos);
  };

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
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  );
}

export default App;
