import React, { Component } from 'react'
import classes from './QuizList.module.css'
import { NavLink } from 'react-router-dom'
import Axios from '../../Axios/Axios-quiz'
import Loader from '../../components/UI/Loader/Loader'

export class QuizList extends Component {

    state = {
        quizes: [],
        loading: true,
    }

    async componentDidMount() {
        try {
            const response = await Axios.get('/quizes.json')

                const quizes = []

            Object.keys(response.data).forEach((key, index) => [
                quizes.push({
                    id: key,
                    name: `Тест № ${index + 1}`
                })
            ])
            this.setState({
                quizes,
                loading: false
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

                    {this.state.loading
                    ? <Loader />
                    : <ul>
                        {this.renderQuizes()}
                    </ul>}
                </div>
            </div>
        )
    }
}