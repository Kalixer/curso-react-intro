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
import { Modal } from '../components/Modal';

function AppUI() {
  const {
    loading,
    error,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
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

        {openModal && (
          <Modal>
            <section className='windowScreen'>
              <div className='textContainer'>
                <p>Agrega un nuevo TODO</p>
                <p className='deleteX'>X</p>
              </div>
            </section>
            <input type="text" placeholder='Nuevo TODO'/>
            <button type='button' onClick={() => setOpenModal(false)}>Submit</button>
          </Modal>
        )}
      </>
    );
}

export { AppUI }