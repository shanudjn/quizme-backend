const mongoose = require('mongoose');
const { Schema } = mongoose

const OptionSchema = new Schema({
    optionId: Number,
    option: String,
    isRight: Boolean
})

const QuestionSchema = new Schema({
    questionNo: Number,
    question: String,
    points: Number,
    negativePoints: Number,
    options: [{ type: OptionSchema }]
})

const QuizSchema = new Schema({
    topicId: String,
    topicName: String,
    questions: [{ type: QuestionSchema }]
})

const Quiz = mongoose.model('Quiz', QuizSchema);


module.exports = { Quiz }