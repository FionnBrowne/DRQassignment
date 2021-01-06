//have to install cored on the server. first stop program running
const express = require('express')
const app = express()
const port = 4000//so it wont collide with other local server
const cors = require('cors');//including cors
const bodyParser = require("body-parser");//allows to intercept body of a http message
const mongoose = require('mongoose');

app.use(cors());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

const myConnectionString = 'mongodb+srv://admin1:admin1@cluster0.r2xtn.mongodb.net/gym-app?retryWrites=true&w=majority';
mongoose.connect(myConnectionString, { useNewUrlParser: true });

const Schema = mongoose.Schema;

var diarySchema = new Schema({
    date: String,
    calories: String,
    protien: String

});

var diaryModel = mongoose.model("diary", diarySchema);




// parse application/x-www-form-urlencoded
app.get('/api/createDiet', (req, res) => {

    /* const readDiaryComp = [
        {
            "Date": "Date: 04/01/2021",
            "Calories": "Calories: 2500",
            "Protien": "Protien: 40g"
        },
        {
            "Date": "Date: 05/01/2021",
            "Calories": "Calories: 3250",
            "Protien": "Protien: 55g"
        }
    ]
    res.status(200).json({
        message: "everything is ok",
        readDiaryComp: readDiaryComp
    }); */

    diaryModel.find((err, data) => {
        res.json(data);
    })
})

app.get('/api/createDiet/:id', (req, res) => {
    console.log(req.params.id);//logs to console

    diaryModel.findById(req.params.id, (err, data) => {
        //if data found send it back
        res.json(data);
    })
})

app.put('/api/createDiet/:id', (req, res) => {//update diary
    console.log("Update diary: " + req.params.id);
    console.log(req.body);

    diaryModel.findByIdAndUpdate(req.params.id, req.body, { new: true },
        (err, data) => {
            res.send(data);
        })
})

app.delete('/api/createDiet/:id', (req, res) => {//delete diary entry
    console.log("Delete diary entry: " + req.params.id);

    diaryModel.findByIdAndDelete(req.params.id, (err, data) => {
        res.send(data);
    })
})




app.post('/api/createDiet', (req, res) => {//method loads data from the server using a HTTP POST request.
    console.log('Diet Recieved!');
    console.log(req.body.date);
    console.log(req.body.calories);
    console.log(req.body.protien);

    diaryModel.create({
        date: req.body.date,
        calories: req.body.calories,
        protien: req.body.protien
    });
    res.send('Item Added');

})

app.listen(port, () => {//listens to web server at 4000 // any changes the server has to be restarted
    console.log(`Example app listening at http://localhost:${port}`)
})