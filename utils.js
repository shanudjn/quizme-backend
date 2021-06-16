const { quizzes } = require('./data/quiz.data')
const { Quiz } = require('./models/quiz.model')

function populateQuizCollection() {
    try {
        quizzes.forEach(async (quizzes) => {

            const newQuiz = await new Quiz(quizzes)
            const savedQuiz = newQuiz.save();
            console.log(savedQuiz);
        })
    } catch (error) {
        console.log(error)
    }
}

module.exports = { populateQuizCollection }