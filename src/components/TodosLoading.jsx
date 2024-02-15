import React from 'react'
import '../styles/TodosLoading.css'

function TodosLoading() {
  return (
    <div className='TodosLoading'>
        <div className="loader">
            <div className="loader-square"></div>
            <div className="loader-square"></div>
            <div className="loader-square"></div>
            <div className="loader-square"></div>
            <div className="loader-square"></div>
            <div className="loader-square"></div>
            <div className="loader-square"></div>
        </div>
        <h1>Loading...</h1>
    </div>

  )
}

export { TodosLoading }