//modules import
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

//middleware
app.use(cors());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//routes
app.use('/fitness', require('./controllers/fitness'));

//server
app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`);
})