import React from 'react';
import './TodoSearch.css';

function TodoSearch() {
  const [searchValue, setSearchValue] = React.useState('')
  console.log(searchValue)

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
