const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://nnsahu2022:Sahurk012@mycluster.ne522qz.mongodb.net/Rahul", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb App ke seba mai hajir hai !"))
.catch ( err => console.log(err) )

app.use('/', route);


app.listen(process.env.PORT || 3000, function () {
    console.log('hum hai "Express app" hum run kr rahe hai, hamara port hai ' + (process.env.PORT || 3000))
});
