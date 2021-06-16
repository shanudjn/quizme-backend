const express = require('express');
const router = express.Router();

const { authenticationVerifier } = require('../middleware/authenticationVerifier');
const { getScoreBoard } = require('../controllers/score.controller')

router.use(authenticationVerifier)
router.route('/dashboard').get(getScoreBoard)

module.exports = router;