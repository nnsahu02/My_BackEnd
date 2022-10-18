const express = require('express');
const router = express.Router();


//qn1
router.get('/movies', function (req, res) {
    let movies = ['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins']
    console.log("respond is sent")
    res.send(movies)
})

//qn2
// router.get('/movies/:indexNumber', function (req, res) {
//     let movies = ['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins']

//     const indexNumber = req.params.indexNumber
//     console.log("The index of the movie is", indexNumber)

//     res.send(movies[indexNumber])
// })

//qn3
router.get('/movies/:indexNumber', function (req, res) {
    let movies = ['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins']

    const indexNumber = req.params.indexNumber
    if (indexNumber > (movies.length - 1)) {
        res.send("enter a valid index")
    } else {
        res.send(movies[indexNumber])
    }
})

//qn4
router.get('/films', function (req, res) {
    let films = [{
        "id": 1,
        "name": "The Shining"
    }, {
        "id": 2,
        "name": "Incendies"
    }, {
        "id": 3,
        "name": "Rang de Basanti"
    }, {
        "id": 4,
        "name": "Finding Nemo"
    }]

    res.send(films)

    console.log("responce is sent")

})

//qn5
router.get('/films/:filmid', function(req,res) {
    let films = [{
        "id": 1,
        "name": "The Shining"
    }, {
        "id": 2,
        "name": "Incendies"
    }, {
        "id": 3,
        "name": "Rang de Basanti"
    }, {
        "id": 4,
        "name": "Finding Nemo"
    }]
    let filmid = req.params.filmid
    if(filmid < films.length - 1){
        res.send(films[filmid])
    }else {
        res.send("no movies exist with this id")
    }
})

module.exports = router;