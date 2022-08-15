require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const port = process.env.PORT || 5000;
const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGODB_URL, {useNewUrlParser: true});


app.use(require('./routes/pizzaRoute'));
app.use(require('./routes/userRoute'));

app.get('/', (req, res) => {
    res.send('Hello Server This is App!');
});

app.listen(port, () => {
    console.log(`Server started on port ${port}.`);
});