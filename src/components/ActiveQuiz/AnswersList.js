import React from 'react'
import classes from './AnswersList.module.css'
import AnswerItem from './AnswerItem/AnswerItem'

const AnswersList = (props) => {
    return (
        <ul className={classes.AnswersList}>
            { props.answers.map((answer, index) => {
                return <AnswerItem
                onAnswerClick={props.onAnswerClick}
                key={index}
                answers={answer}
                />
            })}
        </ul>
    )
}

export default AnswersList