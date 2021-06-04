const errorHandler = (err, req, res, next) => {
    console.log(err.stack)
    res.status(500).json({ success: false, message: "Error Occurred", error: err.stack })
}

module.exports = { errorHandler }