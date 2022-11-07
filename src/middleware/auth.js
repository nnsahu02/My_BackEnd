const jwt = require("jsonwebtoken")

let validatetoken = function (req, res, next) {
    try {
        let token = req.headers["x-auth-token"]

        if (!token) {
            return res.status(400).send({ status: false, msg: "token must needed" })
        }

        let decodetoken = jwt.verify(token, "my secret key")

        //console.log(decodetoken)

        if (!decodetoken) {
            return res.status(401).send({ status: false, msg: "token is invalid" })
        }

        req.token = decodetoken
        next()
    }
    catch (error) {
        res.status(500).send({ msg: error.message })
    }

}

let authorizeUser = function (req, res, next) {
    try {

        userId = req.params.userId

        //let token = req.headers["x-auth-token"]

       // let decodetoken = jwt.verify(token, "my secret key")

        userIdfrmDecToken = req.token.userId

        if (userId !== userIdfrmDecToken) {
            return res.status(403).send("access denied !!")
        }
        next()
    }
    catch (error) {
        res.status(500).send({ msg: error.message })
    }

}

module.exports.validatetoken = validatetoken
module.exports.authorizeUser = authorizeUser