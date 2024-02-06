import React from 'react';
import './TodoItem.css';

function TodoItem(props) {

  function toggleCheck() {

    const changedTodos = props.todos.map(todo => {
      if(todo.id !== props.id) {
        return todo
      } else {
        return ({id: props.id, text: props.text, completed: !props.completed})
      }
    })
    props.setTodos(changedTodos)

  }
  function deleteTodo() {
    const changedTodos = []
    props.todos.forEach(todo => {
      if(todo.id !== props.id) {
        changedTodos.push(todo)
      }
    })
    props.setTodos(changedTodos)
  }

  return (
    <li className="TodoItem">
      <span 
      className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
      onClick={toggleCheck}
      >
        V
      </span>
      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
        {props.text}
      </p>
      <span className="Icon Icon-delete"
      onClick={deleteTodo}
      >
        X
      </span>
    </li>
  );
}

export { TodoItem };