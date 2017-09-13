const mongoose = require('mongoose');
const {mongoHost} = require('../../playground/local');

mongoose.Promise = global.Promise;
mongoose.connect(`mongodb://${mongoHost}/TodoApp`);

console.log( mongoHost );


module.exports = {
  mongoose
};