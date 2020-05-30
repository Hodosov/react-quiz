import React, { Component } from 'react'
import classes from './QuizList.module.css'
import { NavLink } from 'react-router-dom'
import Axios from 'axios'

export class QuizList extends Component {

    state = {
        quizes: []
    }

    async componentDidMount() {
        try {
            const response = await Axios.get('https://react-quiz-2250e.firebaseio.com/quizes.json')

                const quizes = []

            Object.keys(response.data).forEach((key, index) => [
                quizes.push({
                    id: key,
                    name: `Тест № ${index + 1}`
                })
            ])
            this.setState({
                quizes
            })

        } catch (error) {
            console.log(error)
        }
            
    }
    

    renderQuizes() {
        return this.state.quizes.map((quiz) => {
            return <li key={quiz.id}>
                <NavLink to={'/quiz/' + quiz.id}>
                   {quiz.name}
                </NavLink>
            </li>
        })
    }

    render() {
        return (
            <div className={classes.QuizList}>
                <div>
                    <h1>Список Тестов</h1>
                    <ul>
                        {this.renderQuizes()}
                    </ul>
                </div>
            </div>
        )
    }
}