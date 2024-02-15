import '../styles/TodoCounter.css';

function TodoCounter({ total, completed, loading }) {
  
  if (completed !== total) {
    return (
      <h1 className="TodoCounter">
        Has completado <span>{completed}</span> de <span>{total}</span> TODOs
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
  if (completed === total) {
    return (
      <h1 className="TodoCounter">
        🎉🎉 Felicidades, haz completado todos los TODOs 🎉🎉
      </h1>
    )
  }
}

export { TodoCounter };
