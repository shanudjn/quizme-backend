const express = require('express');
const router = express.Router();

const { login, signup, getUserDetails } = require('../controllers/user.controller');
const { isQuizAlreadyAttempted, saveTheScore } = require('../controllers/score.controller');
const { authenticationVerifier } = require('../middleware/authenticationVerifier');





router.route('/login').post(login);
router.route('/signup').post(signup);


//for testing purpose
router.use(authenticationVerifier)
// router.route('/')
router.route('/').get(getUserDetails).post(isQuizAlreadyAttempted, saveTheScore)

module.exports = router;