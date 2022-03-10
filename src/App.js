import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";

// import './App.css';

const todos = [
  {text: 'Reparar Macbook de Germán', completed: false},
  {text: 'Llevar escalera a la normal', completed: true},
  {text: 'Hablar con Carlos sobre impresoras para comprar', completed: false},
  {text: 'Hablar con Carlos sobre impresoras', completed: true},
];

function App() {
  return (
    <React.Fragment>
      <TodoCounter />

      <TodoSearch />

      <TodoList>
        {todos.map(todo => (
            <TodoItem 
              key={todo.text}
              text={todo.text}
              completed = {todo.completed}
            />
          ))}
      </TodoList>

      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
