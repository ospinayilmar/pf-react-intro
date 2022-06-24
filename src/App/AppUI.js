import React, { useContext } from 'react';
import { TodoContext } from '../Todocontext';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { Modal } from '../Modal';

function AppUI() {
    const { 
        error,
        loading, 
        searchedTodos, 
        completeTodo, 
        deleteTodo,
        openModal,
        setOpenModal,
    } = useContext(TodoContext);

    return (
        <React.Fragment>
            <TodoCounter />
            <TodoSearch />
            
            <TodoList>
                {error && <p>Desespérate, hubo un error.</p>}
                {loading && <p>No desesperes, estamos cargando.</p>}
                {(!loading && !searchedTodos.length) && <p>Crea tu primer TODO.</p>}

                {searchedTodos.map(todo => (
                    <TodoItem 
                        key={todo.text}
                        text={todo.text}
                        completed = {todo.completed}
                        onComplete={() => completeTodo(todo.text)}
                        onDelete={() => deleteTodo(todo.text)}
                    />
                ))}
            </TodoList>

            <CreateTodoButton
                setOpenModal = {setOpenModal}
            >

            </CreateTodoButton>
                
            {openModal && (
                <Modal>
                    <p>{ searchedTodos[0]?.text }</p>
                </Modal>
            )}

        </React.Fragment>
    );
}

export { AppUI };