const PublisherModel = require("../models/publisherModel")

const CreatePublisher = async function(req, res){
    const data = req.body
    let savedData = await PublisherModel.create(data)
    res.send({Publisher : savedData})

}

const GetPublisherData = async function(req,res){
    const data = await PublisherModel.find()
    res.send({Publishers : data})
}

module.exports.CreatePublisher = CreatePublisher
module.exports.GetPublisherData = GetPublisherData