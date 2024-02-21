import React from 'react'
import { FaX } from "react-icons/fa6";
import '../styles/TodoForm.css'


import { TodoContext } from '../TodoContext/TodoContext'

function TodoForm() {    
    const {
        addTodo,
        setOpenModal
    } = React.useContext(TodoContext)

    const onSubmit = (evento) => {
        evento.preventDefault()

        // Lo que escribimos en el input
        addTodo(evento.target[1].value)

        setOpenModal(false)
    }

    return (
      <>
          <form className='windowScreen' onSubmit={(evento) => onSubmit(evento)}>
            <div className='textContainer'>
              <p>Agrega un nuevo TODO</p>
              <button type='button' className='deleteX' onClick={() => setOpenModal(false)}>
                <FaX />
              </button>
            </div>
            <div className='input-container'>
                <textarea type="text" className='input-form' placeholder='Nuevo TODO'/>
                <button type='submit' className='TodoForm-button'>Add</button>
            </div>
          </form>
      </>
    )
}

export { TodoForm }