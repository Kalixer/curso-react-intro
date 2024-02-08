import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';

// const defaultTodos = [
//   { id: 0, text: 'Cortar cebolla', completed: true },
//   { id: 1, text: 'Tomar el Curso de Intro a React.js', completed: false },
//   { id: 2, text: 'Llorar la lloración de hoy', completed: false },
//   { id: 3, text: 'LALALALALA', completed: false },
// ];

// localStorage.removeItem('TODOS_V1')

function App() {
  let parsedTodos = JSON.parse(localStorage.getItem('TODOS_V1'))

  if(parsedTodos === null) {
    localStorage.setItem('TODOS_V1', '[]')
    parsedTodos = []
  }

  const [todos, setTodos] = React.useState(parsedTodos)
  const [searchValue, setSearchValue] = React.useState('')
  
  const completedTodos = (todos.filter((todo) => !!todo.completed)).length
  const totalTodos = todos.length
  
  const searchedTodos = todos.filter(
    (todo) => {
      return todo.text.toLowerCase().includes(searchValue.toLowerCase())
    }
  )

  const updateTodos = (newTodos) => {
    localStorage.setItem('TODOS_V1', JSON.stringify(newTodos))
    setTodos(newTodos)
  }
  
  const completeTodo = (text) => {
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
      )
      newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
      updateTodos(newTodos)
  }
  const deleteTodo = (text) => {
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    )
    newTodos.splice(todoIndex, 1)
    updateTodos(newTodos)
  }

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

export default App;
