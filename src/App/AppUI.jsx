import React from 'react';
import { TodoCounter } from '../components/TodoCounter';
import { TodoSearch } from '../components/TodoSearch';
import { TodoList } from '../components/TodoList';
import { TodoItem } from '../components/TodoItem';
import { TodosLoading } from '../components/TodosLoading';
import { TodosError } from '../components/TodosError';
import { EmptyTodos } from '../components/EmptyTodos';
import { CreateTodoButton } from '../components/CreateTodoButton';
import { TodoContext } from '../TodoContext/TodoContext';

function AppUI() {
  const {
    loading,
    error,
    searchedTodos,
    completeTodo,
    deleteTodo,
  } = React.useContext(TodoContext)

  
    return (
      <>
        <TodoCounter />
        <TodoSearch />

        <TodoList>
            {loading && (
              <>
                <TodosLoading/>
                <TodosLoading/>
                <TodosLoading/>
              </>
            )}
            {error && <TodosError/>}
            {(!loading && searchedTodos.length === 0) && <EmptyTodos/>}

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