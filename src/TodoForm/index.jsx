import React from 'react';
import { TodoContext } from '../Todocontext';
import './TodoForm.css'

const TodoForm = () => {
    const [newTodoValue, setNewTodoValue] = React.useState('');
    const { addTodo, setOpenModal} = React.useContext(TodoContext);


    const onCancel = () => {
        setOpenModal(false);
        console.log('cancelando');
    };

    const onChange = (e) => {
        setNewTodoValue(e.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    };

    return (
        <form onSubmit={onSubmit}>
            <label></label>
            <textarea
                value={newTodoValue}
                onChange={onChange}
                placeholder='Escribe tu siguiente tarea'
            />
            <div className='TodoForm-buttonContainer'>
                <button className='TodoForm-button TodoForm-button--cancel' type="button" onClick={onCancel}>Cancelar</button>
                <button className='TodoForm-button TodoForm-button--add' type="submit" onClick={onSubmit}>Guardar tarea</button>

            </div>
        </form>
    )
}

export { TodoForm };
