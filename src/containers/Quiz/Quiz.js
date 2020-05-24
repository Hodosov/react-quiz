import React, { Component } from 'react'
import classes from './Quiz.module.css'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz.js'

class Quiz extends Component {

    state = {
        activeQuestion: 0,
        quiz: [
            {
                questions: 'Какого цвета крокодил?',
                rightAnswer: 4,
                id: 1,
                answers: [
                    { text: 'Черный', id: 1 },
                    { text: 'Синий', id: 2 },
                    { text: 'Желтый', id: 3 },
                    { text: 'Зеленый', id: 4 },
                ]
            },
            {
                questions: 'В каком году лсновали Сантк-Петербург?',
                rightAnswer: 3,
                id: 2,
                answers: [
                    { text: '1700', id: 1 },
                    { text: '1705', id: 2 },
                    { text: '1703', id: 3 },
                    { text: '1803', id: 4 },
                ]
            }
        ]
    }

    onAnswerClickHandler = (answerId) => {

        const question = this.state.quiz[this.state.activeQuestion]

        if (question.rightAnswer === answerId) {

            const timeout = setTimeout(() => {

                if (this.isQuizFinished()) {
                    console.log('Finished')
                } else {
                    this.setState({
                        activeQuestion: this.state.activeQuestion + 1
                    })
                }

                clearTimeout(timeout)
            }, 1000)

        } else {
            alert('не правильно')
        }

    }

    isQuizFinished = () => {
        return this.state.activeQuestion + 1 === this.state.quiz.length
    }

    render() {
        return (
            <div className={classes.Quiz}>
                <div className={classes.QuizWrapper}>
                    <h1>Ответьте на все вопросы</h1>
                    <ActiveQuiz
                        onAnswerClick={this.onAnswerClickHandler}
                        answers={this.state.quiz[this.state.activeQuestion].answers}
                        questions={this.state.quiz[this.state.activeQuestion].questions}
                        quizLength={this.state.quiz.length}
                        answerNumber={this.state.activeQuestion + 1}
                    />
                </div>
            </div>
        )
    }
}

export default Quiz