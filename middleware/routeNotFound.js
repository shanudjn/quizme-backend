const routeNotFound = (req, res) => {
    try {
        res.json({ success: false, message: "Route Not Found" })
    } catch (error) {
        res.json({ error: error.message })
    }
}

module.exports = { routeNotFound };