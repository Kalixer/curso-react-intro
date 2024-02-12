import React from 'react'
import { ReactComponent as CheckSVG } from '../svg/check.svg'
import { ReactComponent as DeleteSVG } from '../svg/delete.svg'
import '../styles/TodoIcon.css'

function TodoIcon({ type, color, onClick }) {
    const iconTypes = {
        'check': (color) => <CheckSVG className='Icon-svg' fill={color} />,
        'delete': (color) => <DeleteSVG className='Icon-svg' fill={color} />
    }

  return (
    <span 
    className={`Icon-container  Icon-container-${type}`}
    onClick={onClick}
    >
        {iconTypes[type](color)}
    </span>
  )
}

export { TodoIcon }