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
router.get("/films/:filmId", function(req, res){
    const films = [ {
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

       let filmId = req.params.filmId

       //iterate all the films
       //search for a film whose id matches with the id recevied in request
       for(let i = 0; i < films.length; i++){
           let film = films[i]
           if(film.id == filmId) {
               //if there is a match return the response from here
               return res.send(film)
           }
       }

       //if there is no match give an error response
       res.send("The film id doesn't match any movie")
})

module.exports = router;