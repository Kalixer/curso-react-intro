import React from 'react'
import '../styles/TodoForm.css'

import { TodoContext } from '../TodoContext/TodoContext'

function TodoForm() {
    const {
        setOpenModal
    } = React.useContext(TodoContext)
    
    return (
      <>
          <form className='windowScreen'>
            <div className='textContainer'>
              <p>Agrega un nuevo TODO</p>
              <p className='deleteX' onClick={() => setOpenModal(false)}>X</p>
            </div>
          </form>
          <input type="text" placeholder='Nuevo TODO'/>
          <button type='button' className='TodoForm-button' onClick={() => setOpenModal(false)}>Add</button>
      </>
    )
}

export { TodoForm }