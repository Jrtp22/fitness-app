const express = require('express');
const basicAuth = require ('express-basic-auth');
const { default: mongoose } = require('mongoose');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://localhost:27017/your_database_name', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const User = require('./fitness-app');

const middlewareAuth = basicAuth({
    users: {
        admin: '123',
        user: '456',
    },
});

app.get('/authenticate', middlewareAuth, async (req, res)=> {
    try {
        const user = await User.findOne({ email: req.auth.user });
    if (!user) {
      res.status(404).send('User not found');
      return;
    }
    res.send(user);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
}})

const fetchData = async ()=> {
    try {
        const res = await get ('/authenticate', {
            auth: {username: 'admin', password: '123'}});
        console.log(res.data);
    } catch(e){
        console.log(e);
    }
};