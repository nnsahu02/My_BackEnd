const express = require('express');
const router = express.Router();


let persons = [
    {
        name: "PK",
        age: 10,
        votingStatus: false
    },
    {
        name: "SK",
        age: 20,
        votingStatus: false
    },
    {
        name: "AA",
        age: 70,
        votingStatus: false
    },
    {
        name: "SC",
        age: 5,
        votingStatus: false
    },
    {
        name: "HO",
        age: 40,
        votingStatus: false
    }
]


router.post("/sol-1", function (req, res) {
    let votingAge = req.query
    let reqAge = votingAge.age
    

    let eligForVote = []

    for (let index = 0; index < persons.length; index++) {
        if (persons[index].age >= reqAge) {
            eligForVote.push(persons[index])
            persons[index].votingStatus = true
        }
        
    }
    console.log(eligForVote)
    res.send({ data: eligForVote })
    
})

module.exports = router;


