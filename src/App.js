import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';

const defaultTodos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Tomar el Curso de Intro a React.js', completed: false },
  { text: 'Llorar con la Llorona', completed: false },
  { text: 'LALALALALA', completed: false },
];

function App() {
  const [inputTodo, setInputTodo] = React.useState('')
  const [todos, setTodos] = React.useState(defaultTodos)
  const [searchValue, setSearchValue] = React.useState('')

  const completedTodos = (todos.filter((todo) => todo.completed)).length
  const totalTodos = todos.length
  console.log(inputTodo)

  const todosFiltrados = defaultTodos.filter((todo) => todo.text.toLowerCase().includes(inputTodo))
  

  return (
    <>
      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        inputTodo={inputTodo}
        setInputTodo={setInputTodo}
      />

      <TodoList>
        {todosFiltrados.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>
      
      <CreateTodoButton />
    </>
  );
}

export default App;
