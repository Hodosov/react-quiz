import React from 'react'
import classes from './FinishQuiz.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons'
import Button from '../UI/Button/Button'

const FinishQuiz = (props) => {

    const successCount = Object.keys(props.results).reduce((total, key) => {
        if(props.results[key] === 'success') {
            total ++
        }
        return total
    }, 0)

    return (
        <div className={classes.FinishQuiz}>
            <ul>
                {props.quiz.map((quizItem, index) => {
                    const result = props.results[quizItem.id] === 'error'
                    return (
                        <li key={index}>
                            <strong>{index + 1}</strong>.&nbsp;
                            {quizItem.questions}
                            <FontAwesomeIcon
                                icon={result ? faTimes : faCheck}
                                className={result
                                    ? classes.FontAwesomeIconError
                                    : classes.FontAwesomeIconSuccess} />
                        </li>
                    )
                })}
            </ul>

            <p>Правильно {successCount} из {props.quiz.length}</p>

            <div>
                <Button onClick={() => props.onRetry() } type='primary'>Пройти заново</Button>
                <Button type='success'>Перейти в список тестов</Button>
            </div>
        </div>
    )
}

export default FinishQuiz