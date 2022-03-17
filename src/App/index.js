import React from 'react';
import { TodoProvider } from '../Todocontext';
import { AppUI } from './AppUI';

function App() {
  
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;


// const defaultTodos = [ 
//   {text: 'Reparar Macbook de Germán', completed: false}, 
//   {text: 'Llevar escalera a la normal', completed: false}, 
//   {text: 'Hablar con Carlos sobre impresoras para comprar', completed: false}, 
//   {text: 'Hablar con Carlos sobre impresoras', completed: true}, 
// ];