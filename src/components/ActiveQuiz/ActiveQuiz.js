import React from 'react'
import classes from './ActiveQuiz.module.scss'
import AnswersList from './AnswersList'

const ActiveQuiz = (props) => {
    return(
        <div className={classes.ActiveQuiz}>
            <p className={classes.Question}>
                <span>
                    <strong>2.</strong>&nbsp;
                    Вопрос?
                </span>
                <small>
                    4 из 12
                </small>
            </p>
            <ul>
             <AnswersList 
             answers={props.answers}/>
            </ul>
        </div>
    )
}

export default ActiveQuiz