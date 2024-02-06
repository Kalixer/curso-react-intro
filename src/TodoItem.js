import React from 'react';
import './TodoItem.css';

function TodoItem(props) {

  function toggleCheck() {
    console.log(props.id)
    console.log(props.completed)
    console.log(props.todos.completed)

    const changedTodos = props.todos.map(todo => {
      if(todo.id != props.id) {
        return todo
      } else {
        return ({id: props.id, text: props.text, completed: !props.completed})
      }
    })
    console.log('Changed Todos', changedTodos)
    props.setTodos(changedTodos)



    
    // if(!props.completed) {
    //   props.forEach(todo => {
        
    //   });
    //   props.setTodos({text: props.text, completed: true})
    // }
    // console.log('Estado actual', props.completed)
  }
  function deleteTodo() {
    console.log(props.todos)
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