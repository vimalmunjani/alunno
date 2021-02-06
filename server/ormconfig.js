module.exports = {
    "type": "mongodb",
    "url": process.env.DB_URL,
    "synchronize": true,
    "useNewUrlParser": true,
    "useUnifiedTopology": true,
    "logging": false,
    "entities": [
        "dist/entity/**/*.js"
    ]
}