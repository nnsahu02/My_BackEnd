const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const moment = require("moment");
const { json } = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://nnsahu2022:Sahurk012@mycluster.ne522qz.mongodb.net/Rahul", {
    useNewUrlParser: true
})
    .then(() => console.log("MongoDb App ke seba mai hajir hai !"))
    .catch(err => console.log(err))

    // GLOBAL MIDDLEWARE //
app.use(
    function (req, res, next) {
        const today = moment()
        const ip = req.ip
        const routing = req.originalUrl

        console.log(today.format("YYYY-MM-DD, h:mm:ss a"), ip, routing);
        next();
    }
);

app.use('/', route);

app.use('/', route);


app.listen(process.env.PORT || 3000, function () {
    console.log('hum hai "Express app" hum run kr rahe hai, hamara port hai ' + (process.env.PORT || 3000))
});
