import React from 'react'
import classes from './FinishQuiz.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons'

const FinishQuiz = (props) => {
    return (
        <div className={classes.FinishQuiz}>
            <ul>
                <li>
                    <strong>1.</strong>
                    How are you
                    <FontAwesomeIcon 
                    icon={faTimes} 
                    className={classes.FontAwesomeIconError} />
                </li>
                <li>
                    <strong>2.</strong>
                    How are you
                    <FontAwesomeIcon 
                    icon={faCheck} 
                    className={classes.FontAwesomeIconSuccess} />
                </li>
            </ul>

            <p>right 4 of 6</p>

            <div>
                <button>repeat</button>

            </div>
        </div>
    )
}

export default FinishQuiz