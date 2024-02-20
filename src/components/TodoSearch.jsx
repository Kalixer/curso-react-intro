import React from 'react';
import { TodoContext } from '../TodoContext/TodoContext';
import '../styles/TodoSearch.css';

function TodoSearch() {
  const {searchValue, setSearchValue} = React.useContext(TodoContext)

  function EventoFoo(event) {
    setSearchValue(event.target.value)
  }
  return (
    <input
      placeholder="Cortar cebolla"
      className="TodoSearch"
      value={searchValue}
      onChange={EventoFoo}
    />
  );
}

export { TodoSearch };
