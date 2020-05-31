import Axios from 'axios'

export default Axios.create({
    baseURL: 'https://react-quiz-2250e.firebaseio.com/'
})