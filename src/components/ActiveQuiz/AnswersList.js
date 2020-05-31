import React from 'react'
import classes from './AnswersList.module.css'
import AnswerItem from './AnswerItem/AnswerItem'

const AnswersList = (props) => {

    {console.log(props.rightAnswerId)}
    return (
        <ul className={classes.AnswersList}>
            { props.answers.map((answer, index) => {
                return <AnswerItem
                onAnswerClick={props.onAnswerClick}
                key={index}
                answers={answer}
                state={props.state ? props.state[answer.id]: null}
                />
            })}
        </ul>
    )
}

export default AnswersList