const { Quiz } = require('../models/quiz.model');

const getAllQuiz = async (req, res) => {
    try {
        const allQuiz = await Quiz.find({});
        // console.log(allQuiz)
        res.status(200).json({ allQuiz })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}


const getQuizByQuizId = async (req, res) => {
    const { quizId } = req.params
    try {
        const selectedQuiz = await Quiz.findById({ _id: quizId })
        console.log(selectedQuiz)
        res.status(200).json({ selectedQuiz })
    } catch (error) {
        res.status(500).json({ message: "Could Not Find Quiz ", error: error.message })
    }
}

module.exports = { getAllQuiz, getQuizByQuizId }