require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');


const { initializeDBConnection } = require('./db/db.connect');

const { errorHandler } = require('./middleware/errorHandler');
const { routeNotFound } = require('./middleware/routeNotFound');
const { authenticationVerifier } = require('./middleware/authenticationVerifier')
const { populateQuizCollection } = require('./utils')


const app = express();
app.use(cors());
app.use(express.urlencoded({
    extended: true
}))
app.use(express.json());




const user = require('./routes/user.route');
const quiz = require('./routes/quiz.route');
const score = require('./routes/score.route');

initializeDBConnection();



app.get('/', (req, res) => {
    res.status(200).json({ "success": true, "message": "Hello Express App" })
})

//Routers

app.use('/user', user)
app.use('/quiz', quiz)
app.use('/score', score)





app.use(errorHandler);
app.use(routeNotFound)

app.listen(process.env.PORT || 8080, () => {
    console.log('Server Started ✅')
})
// populateQuizCollection();