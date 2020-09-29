const express = require('express');
const cors = require('cors');

const app = express();

//data
const aData = require('./data/data.json');
const dbData = require('./data/dbData.json');

//routes
app.use('/tickets', require('./routes/tickets'));

app.use(cors({ origin: 'http://localhost:4200' }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

const data = 2;

app.get('/data', (req, res) => {
    res.send(data.toString());
});

app.get('/seatLabel', (req, res) => {
    // console.log(aData[0].seats);
    res.send(aData[0].seats);
});

app.get('/seatCount', (req,res) => {
    res.send(dbData);
})

app.post('/booking', (req, res) => {
    const x = {
        id: aData.length + 1,
        form: {
            count: req.body.form.count,
            username: req.body.form.username
        },
        seats: req.body.seats
    };
    aData.push(x);
    console.log(aData);
    // console.log(x);
    res.send(x);
});


const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}....`));