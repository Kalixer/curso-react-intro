import React from 'react';
import { TodoContext } from '../TodoContext/TodoContext'
import '../styles/TodoCounter.css';

function TodoCounter() {

  const { totalTodos, completedTodos, loading } = React.useContext(TodoContext)
  
  if (completedTodos !== totalTodos) {
    return (
      <h1 className="TodoCounter">
        Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span> TODOs
      </h1>
    )
  }
  if (loading) {
    return (
      <h1 className="TodoCounter">
        Just a sec...
      </h1>
    )
  }
  if (completedTodos === totalTodos) {
    return (
      <h1 className="TodoCounter">
        🎉🎉 Felicidades, haz completado todos los TODOs 🎉🎉
      </h1>
    )
  }
}

export { TodoCounter };
