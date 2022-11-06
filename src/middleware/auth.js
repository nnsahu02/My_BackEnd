const jwt = require("jsonwebtoken")

let validatetoken = function (req, res, next) {
    let token = req.headers["x-auth-token"]

    if (!token) {
        return res.send({ status: false, msg: "token must needed" })
    }

    let decodetoken = jwt.verify(token, "my secret key")

    //console.log(decodetoken)

    if (!decodetoken) {
        return res.send({ status: false, msg: "token is invalid" })
    }
    next()

}

let authorizeUser = function (req, res, next) {

    userId = req.params.userId

    let token = req.headers["x-auth-token"]

    let decodetoken = jwt.verify(token, "my secret key")

    userIdfrmDecToken = decodetoken.userId

    if (userId !== userIdfrmDecToken) {
        return res.send("access denied !!")
    }
    next()


}

module.exports.validatetoken = validatetoken
module.exports.authorizeUser = authorizeUser