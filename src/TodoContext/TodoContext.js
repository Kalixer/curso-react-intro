import React from 'react';
import { useLocalStorage } from './useLocalStorage';

// Crear el context
const TodoContext = React.createContext();

// Creamos nuestra función provider personalizada
function TodoProvider({children}) {
    const {
        item: todos, 
        saveItem: saveTodos,
        loading,
        error
      } = useLocalStorage('TODOS_V1', [])
    
      const [searchValue, setSearchValue] = React.useState('')
      const [openModal, setOpenModal] = React.useState(false)
      
      
      const completedTodos = (todos.filter((todo) => !!todo.completed)).length
      const totalTodos = todos.length
      
      
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
    /*
        Aquí creamos toda la lógica de nuestra aplicación que queramos compartir entre los componentes
    */ 
   return(
        <TodoContext.Provider value={{
            loading,
            error,
            completedTodos,
            totalTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            completeTodo,
            deleteTodo,
            openModal,
            setOpenModal,
        }}>
            {children}
        </TodoContext.Provider>
    );
}


export { TodoContext, TodoProvider }