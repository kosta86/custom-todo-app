import React from 'react';

const RenderTodos = (props) => {
    const handleClick = (e) => {
        props.deleteTodo(e.target.id);
    }
    let todoList = props.todos.map((todo) => {
        return (
            <li className="list-group-item text-break" key={todo.content + todo.id}><h3 className="d-inline ">{todo.content}</h3><button id={todo.id} className="btn btn-danger d-inline float-right" key={todo.id} onClick={handleClick}>Delete Todo</button></li>
        )
        
    })
    
    return (
        <ul className="list-group">
                {todoList}
            </ul>    
    )
}


export default RenderTodos;