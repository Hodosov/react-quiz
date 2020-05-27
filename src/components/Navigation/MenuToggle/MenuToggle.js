import React from 'react'
import classes from './MenuToggle.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faBars } from '@fortawesome/free-solid-svg-icons'


const MenuToggle = props => {

const isOpen = props.isOpen
const open = isOpen ? `${classes.open}` : null

    return (
        <FontAwesomeIcon
            icon={isOpen ? faTimes: faBars}
            className={`${classes.MenuToggle} ${open}`}
            onClick={props.onToggle} />
    )
}

export default MenuToggle