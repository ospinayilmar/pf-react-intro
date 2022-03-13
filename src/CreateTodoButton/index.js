import React from "react";
import './CreateTodoButton.css';

function CreateTodoButton() {
    const onClickButton = (msg) => {
        alert(msg);
    };

    return (
        <button 
            className="CreateTodoButton"
            onClick={() => onClickButton("Quieres crear una nueva tarea")}
            >+</button>
    );
}

export { CreateTodoButton };