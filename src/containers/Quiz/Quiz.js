import React, { Component } from 'react'
import classes from './Quiz.module.css'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz.js'
import FinishQuiz from '../../components/FinishQuiz/FinishQuiz'
import Axios from '../../Axios/Axios-quiz'
import Loader from '../../components/UI/Loader/Loader'

class Quiz extends Component {

    state = {
        results: {},
        isFinished: false,
        activeQuestion: 0,
        quiz: [],
        loading: true
    }

    onAnswerClickHandler = (answerId) => {

        if (this.state.answerState) {
            const key = Object.keys(this.state.answerState)[0]
            if (this.state.answerState[key] === 'success') {
                return
            }
        }

        const question = this.state.quiz[this.state.activeQuestion]
        const results = this.state.results

        if (question.rightAnswerId === answerId) {

            if (!results[question.id]) {
                results[question.id] = 'success'
            }

            this.setState({
                answerState: { [answerId]: 'success' },
                results
            })

            const timeout = setTimeout(() => {

                if (this.isQuizFinished()) {
                    this.setState({
                        isFinished: true
                    })
                } else {
                    this.setState({
                        activeQuestion: this.state.activeQuestion + 1,
                        answerState: null
                    })
                }
                clearTimeout(timeout)
            }, 1000)


        } else {
            results[question.id] = 'error'
            this.setState({
                answerState: { [answerId]: 'error' },
                results
            })
        }
    }

    isQuizFinished = () => {
        return this.state.activeQuestion + 1 === this.state.quiz.length
    }

    retryHandler = () => {
        this.setState({
            isFinished: false,
            activeQuestion: 0,
            answerState: null,
            results: {}
        })
    }

    async componentDidMount() {
        try {
            const response = await Axios.get(`/quizes/${this.props.match.params.id}.json`)
            const quiz = response.data

            this.setState({
                quiz,
                loading: false
            })
        } catch (error) {
            console.log(error)
        }

    }

    render() {
        return (
            <div className={classes.Quiz}>
                <div className={classes.QuizWrapper}>
                    <h1>Ответьте на все вопросы</h1>

                    {this.state.loading
                        ? <Loader />
                        : this.state.isFinished
                            ? <FinishQuiz
                                results={this.state.results}
                                quiz={this.state.quiz}
                                onRetry={this.retryHandler}
                            />
                            : <ActiveQuiz
                                onAnswerClick={this.onAnswerClickHandler}
                                answers={this.state.quiz[this.state.activeQuestion].answers}
                                questions={this.state.quiz[this.state.activeQuestion].question}
                                quizLength={this.state.quiz.length}
                                answerNumber={this.state.activeQuestion + 1}
                                state={this.state.answerState}
                            />
                    }

                </div>
            </div>
        )
    }
}

export default Quiz