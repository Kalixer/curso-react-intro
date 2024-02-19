import React from "react";

// const defaultTodos = [
//   { id: 0, text: 'Cortar cebolla', completed: true },
//   { id: 1, text: 'Tomar el Curso de Intro a React.js', completed: false },
//   { id: 2, text: 'Llorar la lloración de hoy', completed: false },
//   { id: 3, text: 'LALALALALA', completed: false },
// ];
// const stringTodos = JSON.stringify(defaultTodos)
// localStorage.setItem('TODOS_V1', stringTodos)

// localStorage.removeItem('TODOS_V1')


function useLocalStorage(itemName, initialValue) {
  const [item, setItem] = React.useState(initialValue);
  // Estados de carga y error
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  
  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
    
        let parsedItem;
  
        if(!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue))
          parsedItem = initialValue
        } else {
          parsedItem = JSON.parse(localStorageItem)
          setItem(parsedItem)
        }
  
        setLoading(false)
      } catch (error) {
        setLoading(false)
        setError(true)
        console.log(error)
      }
    }, 1000)
  }, []);

  

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem))
    setItem(newItem)
  }

  return {
    item, 
    saveItem, 
    loading, 
    error,
  };
}

export { useLocalStorage };