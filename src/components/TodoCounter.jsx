import '../styles/TodoCounter.css';

function TodoCounter({ total, completed }) {
  
  if (completed !== total) {
    return (
      <h1 className="TodoCounter">
        Has completado <span>{completed}</span> de <span>{total}</span> TODOs
      </h1>
    )
  } else {
    return (
      <h1 className="TodoCounter">
        🎉🎉 Felicidades, haz completado todos los TODOs 🎉🎉
      </h1>
    )
  }
}

export { TodoCounter };
