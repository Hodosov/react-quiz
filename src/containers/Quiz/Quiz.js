import React, { Component } from 'react'
import classes from './Quiz.module.css'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz.js'
import FinishQuiz from '../../components/FinishQuiz/FinishQuiz'
import Loader from '../../components/UI/Loader/Loader'
import { connect } from 'react-redux'
import { fetchQuizById, quizAnswerClick, retryQuiz } from '../../store/actions/quiz'

class Quiz extends Component {


    componentDidMount() {
       this.props.fetchQuizById(this.props.match.params.id)
    }

    componentWillMount() {
        this.props.retryQuiz()
    }

    render() {

        return (
            <div className={classes.Quiz}>
                <div className={classes.QuizWrapper}>
                    <h1>Ответьте на все вопросы</h1>

                    {this.props.loading || !this.props.quiz
                        ? <Loader />
                        : this.props.isFinished
                            ? <FinishQuiz
                                results={this.props.results}
                                quiz={this.props.quiz}
                                onRetry={this.props.retryQuiz}
                            />
                            : <ActiveQuiz
                                onAnswerClick={this.props.quizAnswerClick}
                                answers={this.props.quiz[this.props.activeQuestion].answers}
                                questions={this.props.quiz[this.props.activeQuestion].question}
                                quizLength={this.props.quiz.length}
                                answerNumber={this.props.activeQuestion + 1}
                                state={this.props.answerState}
                            />
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        results: state.quiz.results,
        isFinished: state.quiz.isFinished,
        activeQuestion: state.quiz.activeQuestion,
        quiz: state.quiz.quiz,
        loading: state.quiz.loading,
        answerState: state.quiz.answerState
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchQuizById: (id) => dispatch(fetchQuizById(id)),
        quizAnswerClick: (answerId) => dispatch(quizAnswerClick(answerId)),
        retryQuiz: () => dispatch(retryQuiz())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Quiz) 