const express = require('express');
const router = express.Router();


let players =
    [
        {
            "name": "manish",
            "dob": "1/1/1995",
            "gender": "male",
            "city": "jalandhar",
            "sports": [
                "swimming"
            ]
        },
        {
            "name": "gopal",
            "dob": "1/09/1995",
            "gender": "male",
            "city": "delhi",
            "sports": [
                "soccer"
            ],
        },
        {
            "name": "lokesh",
            "dob": "1/1/1990",
            "gender": "male",
            "city": "mumbai",
            "sports": [
                "soccer"
            ],
        },
    ]

router.post('/players', function (req, res) {

    //LOGIC WILL COME HERE
    let elem = req.body

    const Player = players.find(x => x.name === elem.name)

    if(Player){
        res.send({message : "player with this name alraeady exist"})
    }else{
        players.push(elem)
        return res.send({ data: players, status: true })
    }
})

module.exports = router;

