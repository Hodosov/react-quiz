import React from 'react'
import classes from './ActiveQuiz.module.scss'
import AnswersList from './AnswersList'

const ActiveQuiz = (props) => {
    return (
        <div className={classes.ActiveQuiz}>
            <p className={classes.Question}>
                <span>
                    <strong>{props.answerNumber}</strong>&nbsp;
                    {props.questions}
                </span>
                <small>
                    {props.answerNumber} 
                    из 
                    {props.quizLength}
                </small>
            </p>
            <ul>
                <AnswersList
                    onAnswerClick={props.onAnswerClick}
                    answers={props.answers} 
                    state={props.state}/>
            </ul>
        </div>
    )
}

export default ActiveQuiz