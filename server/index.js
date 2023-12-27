require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const cookieSession = require('cookie-session');
const defineCurrentUser = require('./middleware/defineCurrentUser');

app.use(cookieSession({
    name: 'session',
    keys: [process.env.SESSION_SECRET],
    sameSite: 'strict',
    maxAge: 24 * 60 * 60 * 1000, // 24 hours
    httpOnly: true,
}));

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(defineCurrentUser);

app.use(express.urlencoded({ extended: true }));

// routes
app.use('/fitness', require('./controllers/fitness'));
app.use('/users', require('./controllers/user'));
app.use('/authentication', require('./controllers/authentication'));

// server
app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`);
});
