const express = require('express');
const router = express.Router();

const { getAllQuiz, getQuizByQuizId } = require('../controllers/quiz.controller');
const { authenticationVerifier } = require('../middleware/authenticationVerifier');


router.route('/').get(getAllQuiz)
router.use(authenticationVerifier)
router.route('/:quizId').get(getQuizByQuizId)

module.exports = router