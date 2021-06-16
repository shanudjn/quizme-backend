const { Score } = require('../models/score.model');
const { extend } = require("lodash")



const isQuizAlreadyAttempted = async (req, res, next) => {
    console.log("Inside Testing middleware");
    const { userId } = req.user;
    const { quizId, score } = req.body.userScore;
    console.log("getting userID fron auth verifier", req.user)

    try {
        const attemptedQuiz = await Score.findOne({ userId: userId, quizId: quizId })
        console.log("attemptedQuiz", attemptedQuiz)
        if (attemptedQuiz) {
            req.isQuizAlreadyAttempted = true;

            return next()
        }
        req.isQuizAlreadyAttempted = false;
        return next()
    } catch (error) {
        console.log(error.message);
        res.json({ success: false, message: "Could not Find the desired quiz ", errorMessage: error.message })
    }
}

const saveTheScore = async (req, res) => {
    const isQuizAttempted = req.isQuizAlreadyAttempted;
    // const attemptedQuiz = req.attemptedQuiz;
    // const scoreToBeUpdated = req.score;
    const { userId } = req.user;
    const { quizId, score } = req.body.userScore;

    console.log("isQuizAttempted", isQuizAttempted)
    if (isQuizAttempted) {
        console.log("Score to be Updated", score)
        console.log("Already attempted update only score")

        // const updateAttemptedQuiz = extend(attemptedQuiz, scoreToBeUpdated)
        // await updateAttemptedQuiz.save()
        try {
            const updatedScore = await Score.findOneAndUpdate({ userId: userId, quizId: quizId }, { score: score }, { new: true })
            const response = await updatedScore.save();
            res.json({ message: "Already attempted Update the score . Attempted Quiz", response })
        } catch (error) {
            res.json({ message: "Error Updating score", error: eroor.message })
        }
    } else {
        try {
            const newScore = await new Score({ userId: userId, quizId: quizId, score: score })
            newScore.save();
            res.json({ message: "Savd the score", newScore })
        } catch (error) {
            res.json({ message: "Error adding new score", error: error.message })
        }
    }

}

const getScoreBoard = async (req, res) => {
    try {
        const scoreBoard = await Score.find({}).populate('quizId')

        console.log(scoreBoard)
        res.status(200).json({ score: scoreBoard });
    } catch (error) {
        res.json({ error: error.message })
    }

}

module.exports = { isQuizAlreadyAttempted, saveTheScore, getScoreBoard }