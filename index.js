const express = require('express');
const app = express();
const srpRoute = require('./routes/srp.js');
const mongoose = require('mongoose');

//connect to database
mongoose.connect('mongodb+srv://Aysha:2050@cluster0.4frzr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
.then(() => console.log('connected to mongodb...'))
.catch(err => console.error('Could not connect to MongoDB...', err));




app.use('/api/srp', srpRoute);

app.listen(3000);
