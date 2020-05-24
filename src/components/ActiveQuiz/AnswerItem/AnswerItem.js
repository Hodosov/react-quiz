import React from 'react'
import classes from './AnswerItem.module.css'

const AnswerItem = (props) => {
    return(
        <li className={classes.AnswerItem}
            onClick={() => props.onAnswerClick(props.answers.id, props.answers.text)}
        >
            {props.answers.text}
        </li>
    )
}
export default AnswerItem