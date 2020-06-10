import axios from '../../Axios/Axios-quiz'
import { CREATE_QUIZ_QUESTION, RESET_QUIZ_CREATION } from "./actionTypes"

export const createQuizQuestion = (item) => {
    return {
        type: CREATE_QUIZ_QUESTION,
        item
    }
}

export const finishCreateQuiz = () => {
    return async (dispatch, getState) => {
        await  axios.post('/quizes.json', getState().create.quiz)
        dispatch(resetQuizCreation())
    }
}

export const resetQuizCreation = () => {
    return {
        type: RESET_QUIZ_CREATION
    }
}