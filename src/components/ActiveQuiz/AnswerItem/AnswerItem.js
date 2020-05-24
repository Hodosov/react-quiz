import React from 'react'
import classes from './AnswerItem.module.css'

const AnswerItem = (props) => {
    return(
        <li className={classes.AnswerItem}>
            {props.answers}
        </li>
    )
}
export default AnswerItem