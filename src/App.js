import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";

// import logo from './logo.svg';
// import './App.css';

const todos = [
  {text: 'Reparar Macbook de Germán', completed: false},
  {text: 'Llevar escalera a la normal', completed: false},
  {text: 'Hablar con Carlos sobre impresoras para comprar', completed: false},
  {text: 'Hablar con Carlos sobre impresoras', completed: false},
];

function App() {
  return (
    <React.Fragment>
      <TodoCounter />

      <TodoSearch />

      <TodoList>
        {todos.map(todo => (
            <TodoItem key={todo.text} text={todo.text} />
          ))}
      </TodoList>

      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
