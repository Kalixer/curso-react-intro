import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';

const defaultTodos = [
  { id: 0, text: 'Cortar cebolla', completed: true },
  { id: 1, text: 'Tomar el Curso de Intro a React.js', completed: false },
  { id: 2, text: 'Llorar con la Llorona', completed: false },
  { id: 3, text: 'LALALALALA', completed: false },
];

function App() {
  const [todos, setTodos] = React.useState(defaultTodos)
  const [searchValue, setSearchValue] = React.useState('')
  // console.log(todos)

  const completedTodos = (todos.filter((todo) => todo.completed)).length
  const totalTodos = todos.length

  const searchedTodos = todos.filter(
    (todo) => {
      return todo.text.toLowerCase().includes(searchValue.toLowerCase())
    }
  )

  return (
    <>
      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <TodoList>
        {searchedTodos.map(todo => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            text={todo.text}
            completed={todo.completed}
            todos={todos}
            setTodos={setTodos}
          />
        ))}
      </TodoList>
      
      <CreateTodoButton />
    </>
  );
}

export default App;
