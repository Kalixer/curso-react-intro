import React from 'react';
import '../styles/TodoSearch.css';

function TodoSearch(props) {
  function EventoFoo(event) {
    props.setSearchValue(event.target.value)
  }

  return (
    <input
      placeholder="Cortar cebolla"
      className="TodoSearch"
      value={props.searchValue}
      onChange={EventoFoo}
    />
  );
}

export { TodoSearch };
