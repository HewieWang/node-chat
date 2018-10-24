const mongoose = require('mongoose');
mongoose.connect('mongodb://tcchatroom:tcpassmlab123@ds263832.mlab.com:63832/tcchatroom');

module.exports = mongoose.connection;