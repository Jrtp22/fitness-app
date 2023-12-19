//mongoose connection//
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/fitness-app', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
