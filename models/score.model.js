const mongoose = require('mongoose');
const { Schema } = mongoose;

const ScoreSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User",
        unique: true
    },
    quizId: { type: Schema.Types.ObjectId, ref: "Quiz", unique: true },
    score: { type: Number },
    // attempts: { type: Number }
})

const Score = mongoose.model('Score', ScoreSchema);

module.exports = { Score }