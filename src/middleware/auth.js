const jwt = require("jsonwebtoken")

let validatetoken = function(req,res,next){
    let token = req.headers["x-auth-token"]

    if(!token){
        return res.send({status : false, msg : "token must needed"})
    }

    let decodetoken = jwt.verify(token, "my secret key")

    if(!decodetoken){
        return res.send({ status : false, msg : "token is invalid"})
    }
    next()

}

module.exports.validatetoken = validatetoken