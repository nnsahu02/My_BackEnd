const jwt = require('jsonwebtoken');
const userModel = require("../models/userModel");


//1. CREATING USER

let creatUser = async function (req, res) {

  try {
    let data = req.body

    let savedDAta = await userModel.create(data)

    res.status(201).send({ msg: savedDAta })
  }
  catch (error) {
    res.status(400).send({ msg: "Bad Request" })

  }
}

//2. LOGIN USER

let loginuser = async function (req, res) {
  try {
    let userName = req.body.emailId
    let password = req.body.password

    let user = await userModel.findOne({ emailId: userName, password: password })

    if (!user) {
      return res.status(400).send({ status: false, msg: "username or password incorrect" })
    }

    let token = jwt.sign({ userId: user._id.toString() }, "my secret key")

    res.status(201).send({ status: true, data: token })
  }
  catch (error) {
    res.status(500).send({ msg: error.message })
  }
}

//3. GET USER DATA

let getuserdetails = async function (req, res) {
  try {
    let userId = req.params.userId

    let userdetails = await userModel.findById(userId)

    if (!userdetails)
      return res.status(400).send({ status: false, msg: "no user found with this id" })

    res.send({ status: true, msg: userdetails })
  }
  catch (error) {
    res.status(500).send({ msg: error.message })
  }
}

//4. UPDATE USER

const updateuser = async function (req, res) {
  try {
    let userId = req.params.userId
    let user = await userModel.findById(userId)

    if (!user) {
      return res.status(400).send("no such user exists")
    }

    let userData = req.body
    let updatedUser = await userModel.findByIdAndUpdate({ _id: userId }, userData, { new: true })
    res.send({ status: true, data: updatedUser })
  }
  catch (error) {
    res.status(500).send({ msg: error.message })
  }
}

//5. DELETE USER

const deleteUser = async function (req, res) {
  try {
    let userId = req.params.userId
    let user = await userModel.findById(userId)
    if (!user) {
      return res.status(400).send({ status: false, message: "no such user exists" })
    }
    let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, { isDeleted: true }, { new: true })
    res.send({ status: true, data: updatedUser })
  }
  catch (error) {
    res.status(500).send({ msg: error.message })
  }
}


module.exports.creatUser = creatUser
module.exports.loginuser = loginuser
module.exports.getuserdetails = getuserdetails
module.exports.updateUser = updateuser
module.exports.deleteUser = deleteUser