const express = require('express');
const app = express();
const mongoose = require('mongoose');
const User = require('./models/User');
const Pet = require('./models/Pet');
const Service = require('./models/Service');

mongoose.connect('mongodb://localhost:27017/meow-club', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(express.json());
app.use(express.static('public'));

app.post('/register', async (req, res) => {
    const user = new User(req.body);
    await user.save();
    res.status(201).send(user);
});

app.get('/pets', async (req, res) => {
    const pets = await Pet.find();
    res.send(pets);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
