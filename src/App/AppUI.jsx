import React from 'react';
import { TodoCounter } from '../components/TodoCounter';
import { TodoSearch } from '../components/TodoSearch';
import { TodoList } from '../components/TodoList';
import { TodoItem } from '../components/TodoItem';
import { CreateTodoButton } from '../components/CreateTodoButton';

function AppUI(
    {
      loading,
      error,
      completedTodos,
      totalTodos,
      searchValue,
      setSearchValue,
      searchedTodos,
      completeTodo,
      deleteTodo,
    }) {
    return (
      <>
        <TodoCounter completed={completedTodos} total={totalTodos} />
        <TodoSearch 
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
           <TodoList>
            {loading && <p>Cargando...</p>}
            {error && <p>Error de carga</p>}
            {(!loading && searchedTodos.length === 0) && <p>Crea tu primer TODO</p>}

            {(!loading && searchedTodos.length > 0) && searchedTodos.map(todo => (
            <TodoItem
              key={todo.text}
              id={todo.id}
              text={todo.text}
              completed={todo.completed}
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
            />
          ))}
        </TodoList>
        
        <CreateTodoButton />
      </>
    );
}

export { AppUI }