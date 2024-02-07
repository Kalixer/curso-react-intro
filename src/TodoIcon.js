import React from 'react'
import { ReactComponent as CheckSVG } from './check.svg'
import { ReactComponent as DeleteSVG } from './delete.svg'
import './TodoIcon.css'

function TodoIcon({ type, color }) {
    const iconTypes = {
        'check': (color) => <CheckSVG className='Icon-svg' fill={color} />,
        'delete': (color) => <DeleteSVG className='Icon-svg' fill={color} />
    }

  return (
    <span 
    className={`Icon-container  Icon-container-${type}`}
    >
        {iconTypes[type](color)}
    </span>
  )
}

export { TodoIcon }