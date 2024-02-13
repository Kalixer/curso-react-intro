import React from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { AppUI } from './AppUI';

// const defaultTodos = [
//   { id: 0, text: 'Cortar cebolla', completed: true },
//   { id: 1, text: 'Tomar el Curso de Intro a React.js', completed: false },
//   { id: 2, text: 'Llorar la lloración de hoy', completed: false },
//   { id: 3, text: 'LALALALALA', completed: false },
// ];

// localStorage.removeItem('TODOS_V1')


function App() {
  const [todos, saveTodos] = useLocalStorage('TODOS_V1', [])
  const [searchValue, setSearchValue] = React.useState('')
  
  const completedTodos = (todos.filter((todo) => !!todo.completed)).length
  const totalTodos = todos.length
  
  console.log('Log 1')

  React.useEffect(() => {
    console.log('Looooog 2')
  }, [totalTodos])

  console.log('Log 3')
  
  const searchedTodos = todos.filter(
    (todo) => {
      return todo.text.toLowerCase().includes(searchValue.toLowerCase())
    }
  )

  
  const completeTodo = (text) => {
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
      )
      newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
      saveTodos(newTodos)
  }
  const deleteTodo = (text) => {
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    )
    newTodos.splice(todoIndex, 1)
    saveTodos(newTodos)
  }

  return(
    <AppUI 
      completedTodos={completedTodos}
      totalTodos={totalTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  )
}

export default App;
